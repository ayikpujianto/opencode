import { expect, test } from "bun:test"
import { TuiKeybind } from "../src/config/keybind"

test("does not bind agent cycling by default", () => {
  expect(TuiKeybind.Definitions.agent_cycle.default).toBe("none")
  expect(TuiKeybind.Definitions.agent_cycle_reverse.default).toBe("none")
})
