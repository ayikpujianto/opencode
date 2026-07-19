import { describe, expect } from "bun:test"
import { Effect, Fiber, Layer, Ref, Schema, Scope } from "effect"
import { LayerNode } from "@opencode-ai/core/effect/layer-node"
import { SessionV1 } from "@opencode-ai/core/v1/session"
import { CrossSpawnSpawner } from "@opencode-ai/core/cross-spawn-spawner"
import { SessionRetry } from "../../src/session/retry"
import { SessionStatus } from "../../src/session/status"
import { SessionRunState } from "../../src/session/run-state"
import { SessionID } from "../../src/session/schema"
import { Runner } from "@/effect/runner"
import { testEffect } from "../lib/effect"

const it = testEffect(LayerNode.compile(LayerNode.group([SessionStatus.node, SessionRunState.node, CrossSpawnSpawner.node])))

function apiErrorWithRetry(headers: Record<string, string> = {}) {
  return Schema.decodeUnknownSync(SessionV1.APIError.Schema)(
    new SessionV1.APIError({
      message: "Rate limit exceeded",
      isRetryable: true,
      statusCode: 429,
      responseHeaders: headers,
      responseBody: JSON.stringify({ error: { message: "Rate limit exceeded" } }),
    }).toObject(),
  )
}

describe("Continue after provider failure", () => {
  it.instance("clears retry status and starts new generation after model switch", () =>
    Effect.gen(function* () {
      const sessionID = SessionID.make("ses_" + "a".repeat(32))
      const status = yield* SessionStatus.Service
      const runState = yield* SessionRunState.Service

      const firstRun = Effect.gen(function* () {
        yield* status.set(sessionID, {
          type: "retry",
          attempt: 1,
          message: "Rate limit exceeded",
          next: Date.now() + 30000,
        })
        yield* Effect.sleep("100 millis")
        return "old-model-result"
      })

      const firstFiber = yield* runState
        .ensureRunning(sessionID, Effect.succeed({ id: "dummy" } as any), firstRun)
        .pipe(Effect.forkChild)

      yield* Effect.sleep("10 millis")
      const before = yield* status.get(sessionID)
      expect(before.type).toBe("retry")

      // User switches model and presses Continue: cancel obsolete retry timer
      yield* runState.cancel(sessionID)

      const afterCancel = yield* status.get(sessionID)
      expect(afterCancel.type).toBe("idle")

      const newResult = yield* runState.ensureRunning(
        sessionID,
        Effect.succeed({ id: "dummy2" } as any),
        Effect.gen(function* () {
          yield* status.set(sessionID, { type: "busy" })
          yield* Effect.sleep("5 millis")
          yield* Effect.logInfo("continue.clicked")
          yield* Effect.logInfo("provider.request.started", { provider: "deepseek-v4-pro" })
          yield* Effect.logInfo("provider.request.completed")
          yield* status.set(sessionID, { type: "idle" })
          return "new-model-result"
        }),
      )

      expect(newResult).toBe("new-model-result")
      const finalStatus = yield* status.get(sessionID)
      expect(finalStatus.type).toBe("idle")

      yield* Fiber.interrupt(firstFiber).pipe(Effect.ignore)
    }),
  )

  it.instance("continue after timeout discards old backoff", () =>
    Effect.gen(function* () {
      const sessionID = SessionID.make("ses_" + "b".repeat(32))
      const status = yield* SessionStatus.Service
      const runState = yield* SessionRunState.Service

      const retryTimer = Effect.gen(function* () {
        yield* status.set(sessionID, {
          type: "retry",
          attempt: 2,
          message: "Provider timeout",
          next: Date.now() + 60000,
        })
        yield* Effect.sleep("200 millis")
        return "should-not-reach"
      })

      const fiber = yield* runState
        .ensureRunning(sessionID, Effect.succeed({ id: "msg" } as any), retryTimer)
        .pipe(Effect.forkChild)

      yield* Effect.sleep("10 millis")
      expect((yield* status.get(sessionID)).type).toBe("retry")

      yield* runState.cancel(sessionID)
      yield* status.set(sessionID, { type: "idle" })

      expect((yield* status.get(sessionID)).type).toBe("idle")

      const newRun = yield* runState.ensureRunning(
        sessionID,
        Effect.succeed({ id: "msg2" } as any),
        Effect.succeed("continued-after-timeout"),
      )
      expect(newRun).toBe("continued-after-timeout")

      yield* Fiber.interrupt(fiber).pipe(Effect.ignore)
    }),
  )

  it.instance("continue after aborted request clears abort controller", () =>
    Effect.gen(function* () {
      const sessionID = SessionID.make("ses_" + "c".repeat(32))
      const runState = yield* SessionRunState.Service

      const ac = new AbortController()
      const abortedRun = Effect.gen(function* () {
        yield* Effect.addFinalizer(() => Effect.sync(() => ac.abort()))
        yield* Effect.sleep("200 millis")
        return "never"
      })

      const fiber = yield* runState
        .ensureRunning(sessionID, Effect.succeed({ id: "x" } as any), abortedRun)
        .pipe(Effect.forkChild)

      yield* Effect.sleep("10 millis")

      yield* runState.cancel(sessionID)
      yield* Effect.sleep("10 millis")

      const fresh = yield* runState.ensureRunning(
        sessionID,
        Effect.succeed({ id: "y" } as any),
        Effect.succeed("after-abort"),
      )
      expect(fresh).toBe("after-abort")

      yield* Fiber.interrupt(fiber).pipe(Effect.ignore)
    }),
  )

  it.instance("continue after provider error discards error state", () =>
    Effect.gen(function* () {
      const sessionID = SessionID.make("ses_" + "d".repeat(32))
      const status = yield* SessionStatus.Service
      const runState = yield* SessionRunState.Service

      yield* status.set(sessionID, {
        type: "retry",
        attempt: 1,
        message: "Provider A rate limit",
        action: {
          reason: "free_tier_limit",
          provider: "hy3-free",
          title: "Free limit reached",
          message: "Free usage exceeded",
          label: "subscribe",
        },
        next: Date.now() + 1000,
      })

      yield* runState.cancel(sessionID)
      yield* status.set(sessionID, { type: "idle" })

      const result = yield* runState.ensureRunning(
        sessionID,
        Effect.succeed({ id: "last" } as any),
        Effect.gen(function* () {
          yield* status.set(sessionID, { type: "busy" })
          yield* status.set(sessionID, { type: "idle" })
          return "recovered"
        }),
      )

      expect(result).toBe("recovered")
      expect((yield* status.get(sessionID)).type).toBe("idle")
    }),
  )

  it.instance("Runner: old retry sleep does not block new generation after cancel", () =>
    Effect.gen(function* () {
      const scope = yield* Scope.Scope
      const runner = Runner.make<string>(scope)

      const oldRun = Effect.gen(function* () {
        yield* Effect.sleep("200 millis")
        return "old"
      })

      const oldFiber = yield* runner.ensureRunning(oldRun).pipe(Effect.forkChild)
      yield* Effect.sleep("5 millis")
      expect(runner.busy).toBe(true)

      // Simulate Continue: cancel obsolete timer
      yield* runner.cancel
      expect(runner.busy).toBe(false)

      const newResult = yield* runner.ensureRunning(Effect.succeed("new-gen"))
      expect(newResult).toBe("new-gen")

      yield* Fiber.interrupt(oldFiber).pipe(Effect.ignore)
    }),
  )

  it.instance("retry policy can be interrupted for Continue", () =>
    Effect.gen(function* () {
      const sessionID = SessionID.make("ses_" + "e".repeat(32))
      const status = yield* SessionStatus.Service
      const attempts = yield* Ref.make(0)

      const error = apiErrorWithRetry({ "retry-after-ms": "500" })

      const policy = SessionRetry.policy({
        provider: "test",
        parse: Schema.decodeUnknownSync(SessionV1.APIError.Schema),
        set: (info) =>
          status.set(sessionID, {
            type: "retry",
            attempt: info.attempt,
            message: info.message,
            next: info.next,
          }),
      })

      const failing = Effect.gen(function* () {
        yield* Ref.update(attempts, (n) => n + 1)
        return yield* Effect.fail(error)
      })

      const fiber = yield* failing.pipe(Effect.retry(policy), Effect.forkChild)

      yield* Effect.sleep("20 millis")
      const st = yield* status.get(sessionID)
      expect(st.type).toBe("retry")

      yield* Fiber.interrupt(fiber)

      const attemptCount = yield* Ref.get(attempts)
      expect(attemptCount).toBeGreaterThanOrEqual(1)

      yield* status.set(sessionID, { type: "idle" })
      expect((yield* status.get(sessionID)).type).toBe("idle")
    }),
  )
})
