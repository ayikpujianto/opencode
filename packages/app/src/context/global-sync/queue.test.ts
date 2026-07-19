import { describe, expect, test } from "bun:test"
import { createRefreshQueue } from "./queue"
import { directoryKey } from "./utils"

const tick = () => new Promise((resolve) => setTimeout(resolve, 10))

describe("createRefreshQueue", () => {
  test("clears queued directories by normalized key", async () => {
    const calls: string[] = []
    const queue = createRefreshQueue({
      paused: () => false,
      key: directoryKey,
      bootstrap: async () => {},
      bootstrapInstance: (directory) => {
        calls.push(directory)
      },
    })

    queue.push("C:\\tmp\\demo")
    queue.clear("C:/tmp/demo")

    await tick()

    expect(calls).toEqual([])
    queue.dispose()
  })

  test("passes the original directory to bootstrapInstance", async () => {
    const calls: string[] = []
    const queue = createRefreshQueue({
      paused: () => false,
      key: directoryKey,
      bootstrap: async () => {},
      bootstrapInstance: (directory) => {
        calls.push(directory)
      },
    })

    queue.push("C:\\tmp\\demo")

    await tick()

    expect(calls).toEqual(["C:\\tmp\\demo"])
    queue.dispose()
  })

  test("calls onDrain when queue finishes", async () => {
    let drainCount = 0
    const queue = createRefreshQueue({
      paused: () => false,
      key: directoryKey,
      bootstrap: async () => {},
      bootstrapInstance: async () => {},
      onDrain: () => {
        drainCount++
      },
    })

    queue.push("/repo/a")
    queue.push("/repo/b")

    await tick()
    await tick()

    expect(drainCount).toBeGreaterThanOrEqual(1)
    queue.dispose()
  })

  test("calls onDrain after bootstrap completes", async () => {
    let drainCount = 0
    const queue = createRefreshQueue({
      paused: () => false,
      key: directoryKey,
      bootstrap: async () => {},
      bootstrapInstance: async () => {},
      onDrain: () => {
        drainCount++
      },
    })

    queue.refresh()

    await tick()
    await tick()

    expect(drainCount).toBeGreaterThanOrEqual(1)
    queue.dispose()
  })
})
