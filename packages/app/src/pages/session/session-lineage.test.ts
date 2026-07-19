import { describe, expect, test } from "bun:test"
import { createSessionLineage } from "./session-lineage"

type MockSession = { id: string; parentID?: string }

function createMockLineageStore(data: Record<string, MockSession | undefined>) {
  return {
    peek: (id: string) => data[id] as MockSession | undefined,
    resolve: async (id: string) => {
      if (!(id in data)) throw new Error(`Session not found: ${id}`)
      return data[id]
    },
  }
}

describe("createSessionLineage", () => {
  test("returns session from cache when available", () => {
    const session: MockSession = { id: "ses_1" }
    const store = createMockLineageStore({ ses_1: session })

    const result = createSessionLineage(() => "ses_1", () => store)

    expect(result()).toEqual(session)
  })

  test("returns undefined when refreshing and settled but missing from cache", () => {
    const store = {
      peek: (_id: string) => undefined,
      resolve: async (_id: string) => {
        return { id: "ses_1" } as MockSession
      },
    }
    let refreshing = true

    const result = createSessionLineage(() => "ses_1", () => store, { refreshing: () => refreshing })

    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const value = result()
        expect(value).toBeUndefined()
        refreshing = false
        resolve()
      }, 20)
    })
  })
})
