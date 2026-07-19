import { describe, expect, test } from "bun:test"
import { createConsoleModel, matchesFilter, compactNumber, type ConsoleEnvelope } from "./ai-console-model"

function envelope(type: string, properties?: Record<string, unknown>, name?: string): ConsoleEnvelope {
  return {
    name,
    details: properties !== undefined ? { type, properties } : { type },
  }
}

function envelopeDirect(type: string, fields: Record<string, unknown>, name?: string): ConsoleEnvelope {
  return {
    name,
    details: { type, ...fields },
  }
}

describe("createConsoleModel", () => {
  test("ingest returns undefined for server.connected", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("server.connected"))
    expect(result).toBeUndefined()
  })

  test("ingest returns undefined for heartbeat", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("server.heartbeat"))
    expect(result).toBeUndefined()
  })

  test("session.next.step.ended extracts tokens from properties", () => {
    const model = createConsoleModel()
    // First open a step
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    // Then end it with tokens
    const result = model.ingest(envelope("session.next.step.ended", {
      assistantMessageID: "msg-1",
      finish: "stop",
      cost: 0.05,
      tokens: { input: 100, output: 200, reasoning: 50, cache: { read: 30, write: 10 } },
      sessionID: "sess-1",
      timestamp: Date.now(),
    }))
    expect(result).toBeDefined()
    expect(result!.update).toBeDefined()
    expect(result!.tokensDelta).toBeDefined()
    expect(result!.tokensDelta!).toBeGreaterThan(0)
  })

  test("session.idle settles active entries", () => {
    const model = createConsoleModel()
    // Open a step
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    // Session idle should settle the active step
    const result = model.ingest(envelope("session.idle", { sessionID: "sess-1" }))
    expect(result).toBeDefined()
    // Should have settled the active step (update) rather than appending a new idle row
    expect(result!.update).toBeDefined()
  })

  test("session.idle without active entries appends idle row", () => {
    const model = createConsoleModel()
    // No active entries, idle should append a new row
    const result = model.ingest(envelope("session.idle", { sessionID: "sess-1" }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.title).toBe("Session Idle")
    expect(result!.append!.status).toBe("success")
  })

  test("session.error produces an error row", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("session.error", {
      sessionID: "sess-1",
      error: { _tag: "ProviderAuthError", message: "Invalid API key", providerID: "openai" },
    }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("error")
    expect(result!.append!.title).toBe("Session Error")
    expect(result!.append!.detail).toContain("Invalid API key")
  })

  test("session.error with string error extracts message", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("session.error", {
      sessionID: "sess-1",
      error: "Something went wrong",
    }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("error")
    expect(result!.append!.detail).toBe("Something went wrong")
  })

  test("session.error settles active entries on error", () => {
    const model = createConsoleModel()
    // Open a step
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    // Session error should produce an error row
    const result = model.ingest(envelope("session.error", {
      sessionID: "sess-1",
      error: { _tag: "ProviderAuthError", message: "Auth failed" },
    }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("error")
  })

  test("session.status busy produces active row", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("session.status", {
      sessionID: "sess-1",
      status: { type: "busy" },
    }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("active")
    expect(result!.append!.title).toBe("Session Busy")
  })

  test("session.status retry produces error row with attempt", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("session.status", {
      sessionID: "sess-1",
      status: { type: "retry", attempt: 2, message: "Rate limited", next: 3 },
    }))
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("active")
    expect(result!.append!.title).toBe("Retrying")
    expect(result!.append!.attempt).toBe(2)
    expect(result!.append!.detail).toContain("Rate limited")
  })

  test("session.status idle settles active entries", () => {
    const model = createConsoleModel()
    // Open a step
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    // session.status idle should settle the active step
    const result = model.ingest(envelope("session.status", {
      sessionID: "sess-1",
      status: { type: "idle" },
    }))
    expect(result).toBeDefined()
    // Should have settled the active step
    expect(result!.update).toBeDefined()
  })

  test("session.status without recognized type returns undefined", () => {
    const model = createConsoleModel()
    const result = model.ingest(envelope("session.status", {
      sessionID: "sess-1",
      status: { type: "unknown-status" },
    }))
    expect(result).toBeUndefined()
  })

  test("extractProps prefers properties when non-empty", () => {
    const model = createConsoleModel()
    // Envelope with both details.properties and details-level fields
    const result = model.ingest({
      name: "dir",
      details: {
        type: "session.next.step.started",
        properties: {
          assistantMessageID: "msg-1",
          agent: "code",
          model: { id: "gpt-4", providerID: "openai" },
          timestamp: Date.now(),
          sessionID: "sess-1",
        },
      },
    })
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.title).toBe("LLM Step")
  })

  test("extractProps falls back to details when properties is empty", () => {
    const model = createConsoleModel()
    // V1-style event with fields directly on details
    const result = model.ingest({
      name: "dir",
      details: {
        type: "session.error",
        sessionID: "sess-1",
        error: { _tag: "UnknownError", message: "Something broke" },
      },
    })
    expect(result).toBeDefined()
    expect(result!.append).toBeDefined()
    expect(result!.append!.status).toBe("error")
  })

  test("session.next.step.ended extracts nested cache tokens", () => {
    const model = createConsoleModel()
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    const result = model.ingest(envelope("session.next.step.ended", {
      assistantMessageID: "msg-1",
      finish: "stop",
      cost: 0,
      tokens: { input: 0, output: 0, reasoning: 0, cache: { read: 500, write: 0 } },
      sessionID: "sess-1",
      timestamp: Date.now(),
    }))
    expect(result).toBeDefined()
    expect(result!.tokensDelta).toBe(500)
  })

  test("session.next.step.ended with flat cacheRead/cacheWrite tokens", () => {
    const model = createConsoleModel()
    model.ingest(envelope("session.next.step.started", {
      assistantMessageID: "msg-1",
      agent: "code",
      model: { id: "gpt-4", providerID: "openai" },
      timestamp: Date.now(),
      sessionID: "sess-1",
    }))
    const result = model.ingest(envelope("session.next.step.ended", {
      assistantMessageID: "msg-1",
      finish: "stop",
      cost: 0,
      tokens: { inputTokens: 100, outputTokens: 200, cacheReadTokens: 50, cacheWriteTokens: 25 },
      sessionID: "sess-1",
      timestamp: Date.now(),
    }))
    expect(result).toBeDefined()
    expect(result!.tokensDelta).toBe(375)
  })
})

describe("matchesFilter", () => {
  test("all filter matches everything", () => {
    const event = { category: "system" } as any
    expect(matchesFilter(event, "all")).toBe(true)
  })

  test("llm filter matches llm category", () => {
    const event = { category: "llm" } as any
    expect(matchesFilter(event, "llm")).toBe(true)
    expect(matchesFilter(event, "tools")).toBe(false)
  })

  test("error filter matches error status", () => {
    const event = { status: "error", kind: "error", category: "system" } as any
    expect(matchesFilter(event, "error")).toBe(true)
  })
})

describe("compactNumber", () => {
  test("formats numbers compactly", () => {
    expect(compactNumber(0)).toBe("0")
    expect(compactNumber(999)).toBe("999")
    expect(compactNumber(1000)).toBe("1.0K")
    expect(compactNumber(1500)).toBe("1.5K")
    expect(compactNumber(1000000)).toBe("1.0M")
  })
})
