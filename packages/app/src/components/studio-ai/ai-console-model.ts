export type ConsoleStatus = "active" | "success" | "error" | "neutral"
export type ConsoleCategory = "llm" | "tool" | "file" | "system"
export type ConsoleKind =
  | "prompt"
  | "thinking"
  | "response"
  | "tool"
  | "file"
  | "build"
  | "terminal"
  | "success"
  | "error"
  | "system"
export type ConsoleFilter = "all" | "llm" | "tools" | "files" | "system" | "error"
export type FileState = "editing" | "reading" | "finished"

export type ConsoleEvent = {
  id: number
  at: number
  type: string
  directory?: string
  kind: ConsoleKind
  category: ConsoleCategory
  status: ConsoleStatus
  title: string
  detail?: string
  provider?: string
  model?: string
  tool?: string
  file?: string
  group?: string
  tokens?: number
  cost?: number
  attempt?: number
  duration?: number
  latency?: number
  count: number
  search: string
  payload: unknown
}

export type ConsoleFileActivity = { path: string; state: FileState }

export type ConsoleOutcome = {
  append?: ConsoleEvent
  appendKey?: string
  update?: { key: string; patch: Partial<ConsoleEvent>; bump?: boolean }
  files?: ConsoleFileActivity[]
  tokensDelta?: number
  costDelta?: number
  countsTool?: boolean
  countsError?: boolean
  provider?: string
  model?: string
}

export type ConsoleEnvelope = {
  name?: string
  details?: {
    type?: string
    properties?: unknown
    [key: string]: unknown
  }
}

export function matchesFilter(event: ConsoleEvent, filter: ConsoleFilter): boolean {
  if (filter === "all") return true
  if (filter === "error") return event.status === "error" || event.kind === "error"
  if (filter === "llm") return event.category === "llm"
  if (filter === "tools") return event.category === "tool"
  if (filter === "files") return event.category === "file"
  return event.category === "system"
}

export function compactNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return String(value)
}

export function formatMs(value: number): string {
  if (value < 1000) return `${Math.max(0, Math.round(value))}ms`
  if (value < 60_000) return `${(value / 1000).toFixed(1)}s`
  const minutes = Math.floor(value / 60_000)
  return `${minutes}m ${Math.round((value % 60_000) / 1000)}s`
}

export function formatElapsed(value: number): string {
  const total = Math.max(0, Math.floor(value / 1000))
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  if (hours) return `${hours}h ${String(minutes).padStart(2, "0")}m`
  if (minutes) return `${minutes}m ${String(seconds).padStart(2, "0")}s`
  return `${seconds}s`
}

export function eventTime(value: number): string {
  return new Date(value).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

export function basename(path: string): string {
  return path.split("/").at(-1) ?? path
}

function record(value: unknown): Record<string, unknown> {
  return value && typeof value === "object" ? (value as Record<string, unknown>) : {}
}

/** Normalize event payload: prefer details.properties when non-empty, else fall back to details directly. */
function extractProps(details: Record<string, unknown>): Record<string, unknown> {
  const props = details.properties
  if (props && typeof props === "object" && !Array.isArray(props) && Object.keys(props as object).length > 0) {
    return props as Record<string, unknown>
  }
  return details
}

function str(value: unknown): string | undefined {
  return typeof value === "string" && value.trim() ? value : undefined
}

function num(value: unknown): number | undefined {
  return typeof value === "number" && Number.isFinite(value) ? value : undefined
}

function clean(value: string, max = 200): string {
  const compact = value.replace(/\s+/g, " ").trim()
  return compact.length > max ? `${compact.slice(0, max)}…` : compact
}

function sumTokens(value: unknown, seen = new Set<object>()): number {
  if (!value || typeof value !== "object") return 0
  if (seen.has(value as object)) return 0
  seen.add(value as object)

  let total = 0
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (/^(input|output|cache(Read|Write)?|read|write|reasoning|total)(Tokens?)?$/i.test(key)) {
      const numericValue = num(item)
      if (numericValue !== undefined) {
        total += numericValue
        continue
      }
    }
    if (typeof item === "object") total += sumTokens(item, seen)
  }
  return total
}

/** Extract token count from any known payload shape. Checks details.properties.tokens, details.tokens, and p.tokens. */
function extractTokens(
  details: Record<string, unknown>,
  p: Record<string, unknown>,
): number | undefined {
  const fromP = p.tokens
  if (fromP && typeof fromP === "object") {
    const sum = sumTokens(fromP)
    if (sum > 0) return sum
  }
  const fromDetails = details.tokens
  if (fromDetails && typeof fromDetails === "object") {
    const sum = sumTokens(fromDetails)
    if (sum > 0) return sum
  }
  return undefined
}

function errorMessage(value: unknown): string | undefined {
  if (typeof value === "string") return clean(value)
  const error = record(value)
  const data = record(error.data)
  const message = str(error.message) ?? str(data.message) ?? str(error.name)
  return message ? clean(message) : undefined
}

function textFrom(value: Record<string, unknown>): string | undefined {
  for (const key of ["title", "name", "command", "path", "file", "tool", "status", "message"]) {
    const item = str(value[key])
    if (item) return clean(item)
  }
  return undefined
}

function classify(type: string): ConsoleStatus {
  if (/(error|failed|failure|denied|rejected)/i.test(type)) return "error"
  if (/(completed|finished|success|succeeded|idle|ready|ended)/i.test(type)) return "success"
  if (/(started|running|updated|created|delta|stream|asked)/i.test(type)) return "active"
  return "neutral"
}

function label(type: string): string {
  const value = type.replace(/[._-]+/g, " ").trim()
  return value ? value.replace(/\b\w/g, (character) => character.toUpperCase()) : "Runtime Event"
}

const BUILD_COMMAND = /\b(build|compile|typecheck|tsc|vite|webpack|rollup|esbuild|make|cargo|vitest|jest|lint|test)\b/i

type ToolMeta = {
  kind: ConsoleKind
  category: ConsoleCategory
  detail?: string
  file?: string
  fileState?: FileState
}

function toolMeta(tool: string, input: Record<string, unknown>): ToolMeta {
  const name = tool.toLowerCase()
  const file = str(input.filePath) ?? str(input.path) ?? str(input.file)
  const command = str(input.command)
  if (name === "bash" || name === "shell" || name === "terminal")
    return {
      kind: command && BUILD_COMMAND.test(command) ? "build" : "terminal",
      category: "tool",
      detail: command ? clean(command, 160) : undefined,
    }
  if (name === "read") return { kind: "file", category: "file", detail: file, file, fileState: "reading" }
  if (name === "edit" || name === "write" || name === "patch" || name === "multiedit" || name === "apply_patch")
    return { kind: "file", category: "file", detail: file, file, fileState: "editing" }
  if (name === "glob" || name === "grep" || name === "list" || name === "ls")
    return { kind: "tool", category: "tool", detail: str(input.pattern) ?? file, file }
  if (name === "webfetch") return { kind: "tool", category: "tool", detail: str(input.url) }
  if (name === "task" || name === "todowrite" || name === "todoread")
    return {
      kind: "tool",
      category: "tool",
      detail: str(input.description) ?? (str(input.prompt) ? clean(input.prompt as string, 120) : undefined),
    }
  const keys = Object.keys(input)
  return {
    kind: "tool",
    category: "tool",
    detail: file ?? command ?? (keys.length ? clean(JSON.stringify(input), 120) : undefined),
    file,
  }
}

type OpenEntry = {
  at: number
  status: ConsoleStatus
  tokens: number
  cost: number
  search: string
  file?: string
}

export function createConsoleModel() {
  let seq = 0
  let lastAt = 0
  const open = new Map<string, OpenEntry>()

  const reset = () => {
    lastAt = 0
    open.clear()
  }

  /** Settle all currently open entries to the given status. Returns merged outcome. */
  const settleAllActive = (
    at: number,
    status: ConsoleStatus,
    reason?: string,
  ): ConsoleOutcome[] => {
    const outcomes: ConsoleOutcome[] = []
    for (const [key] of open) {
      const result = settle(key, at, { status, detail: reason }, { finishFile: true })
      if (result) outcomes.push(result)
    }
    return outcomes
  }

  const build = (input: {
    at: number
    type: string
    directory?: string
    payload: unknown
    kind: ConsoleKind
    category: ConsoleCategory
    status: ConsoleStatus
    title: string
    detail?: string
    provider?: string
    model?: string
    tool?: string
    file?: string
    group?: string
    tokens?: number
    cost?: number
    attempt?: number
  }): ConsoleEvent => {
    seq += 1
    const latency = lastAt ? input.at - lastAt : undefined
    const search = [input.type, input.title, input.detail, input.tool, input.file, input.provider, input.model]
      .filter((value): value is string => Boolean(value))
      .join(" ")
      .toLowerCase()
    return { id: seq, count: 1, latency, search, ...input }
  }

  const begin = (key: string | undefined, event: ConsoleEvent, extra: Partial<ConsoleOutcome> = {}): ConsoleOutcome => {
    lastAt = event.at
    if (key) {
      open.set(key, {
        at: event.at,
        status: event.status,
        tokens: event.tokens ?? 0,
        cost: event.cost ?? 0,
        search: event.search,
        file: event.file,
      })
      if (open.size > 2500) {
        const oldest = open.keys().next()
        if (!oldest.done) open.delete(oldest.value)
      }
    }
    return {
      append: event,
      appendKey: key,
      tokensDelta: event.tokens,
      costDelta: event.cost,
      countsError: event.status === "error" ? true : undefined,
      ...extra,
    }
  }

  const settle = (
    key: string,
    at: number,
    changes: Partial<ConsoleEvent>,
    opts: { bump?: boolean; files?: ConsoleFileActivity[]; finishFile?: boolean } = {},
  ): ConsoleOutcome | undefined => {
    const entry = open.get(key)
    if (!entry) return undefined
    lastAt = at
    const patch: Partial<ConsoleEvent> = {}
    for (const [field, value] of Object.entries(changes)) {
      if (value !== undefined) (patch as Record<string, unknown>)[field] = value
    }
    if (changes.status && changes.status !== "active" && changes.status !== entry.status) patch.duration = at - entry.at
    if (changes.detail) {
      entry.search = `${entry.search} ${changes.detail.toLowerCase()}`
      patch.search = entry.search
    }
    const outcome: ConsoleOutcome = { update: { key, patch, bump: opts.bump } }
    if (changes.status === "error" && entry.status !== "error") outcome.countsError = true
    if (changes.status) entry.status = changes.status
    if (changes.tokens !== undefined) {
      outcome.tokensDelta = changes.tokens - entry.tokens
      entry.tokens = changes.tokens
    }
    if (changes.cost !== undefined) {
      outcome.costDelta = changes.cost - entry.cost
      entry.cost = changes.cost
    }
    const files =
      opts.files ?? (opts.finishFile && entry.file ? [{ path: entry.file, state: "finished" as const }] : undefined)
    if (files?.length) outcome.files = files
    return outcome
  }

  const ingest = (envelope: ConsoleEnvelope | undefined): ConsoleOutcome | undefined => {
    const details = record(envelope?.details)
    const type = str(details.type) ?? "runtime.event"
    if (type === "server.connected") return undefined
    if (/(^|[._ -])(heartbeat|ping|pong)($|[._ -])/i.test(type)) return undefined

    const directory = str(envelope?.name)
    const p = extractProps(details)
    const at = Date.now()
    const base = { at, type, directory, payload: details as unknown }

    switch (type) {
      case "session.next.prompted":
      case "session.next.prompt.admitted": {
        const text = str(record(p.prompt).text)
        return begin(
          undefined,
          build({
            ...base,
            kind: "prompt",
            category: "llm",
            status: "neutral",
            title: type.endsWith("admitted") ? "Prompt Queued" : "Prompt",
            detail: text ? clean(text) : undefined,
            group: str(p.messageID),
          }),
        )
      }

      case "session.next.reasoning.started":
        return begin(
          `think:${str(p.reasoningID) ?? ""}`,
          build({
            ...base,
            kind: "thinking",
            category: "llm",
            status: "active",
            title: "Thinking",
            group: str(p.assistantMessageID),
          }),
        )
      case "session.next.reasoning.delta":
        return settle(`think:${str(p.reasoningID) ?? ""}`, at, {}, { bump: true })
      case "session.next.reasoning.ended": {
        const text = str(p.text)
        const changes = {
          status: "success" as const,
          detail: text ? clean(text) : undefined,
          payload: details as unknown,
        }
        return (
          settle(`think:${str(p.reasoningID) ?? ""}`, at, changes) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "thinking",
              category: "llm",
              status: "success",
              title: "Thinking",
              detail: changes.detail,
              group: str(p.assistantMessageID),
            }),
          )
        )
      }

      case "session.next.text.started":
        return begin(
          `text:${str(p.textID) ?? ""}`,
          build({
            ...base,
            kind: "response",
            category: "llm",
            status: "active",
            title: "Response",
            group: str(p.assistantMessageID),
          }),
        )
      case "session.next.text.delta":
        return settle(`text:${str(p.textID) ?? ""}`, at, {}, { bump: true })
      case "session.next.text.ended": {
        const text = str(p.text)
        const changes = {
          status: "success" as const,
          detail: text ? clean(text) : undefined,
          payload: details as unknown,
        }
        return (
          settle(`text:${str(p.textID) ?? ""}`, at, changes) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "response",
              category: "llm",
              status: "success",
              title: "Response",
              detail: changes.detail,
              group: str(p.assistantMessageID),
            }),
          )
        )
      }

      case "session.next.tool.input.started":
      case "session.next.tool.input.delta":
      case "session.next.tool.input.ended":
        return undefined

      case "session.next.tool.called": {
        const tool = str(p.tool) ?? "tool"
        const meta = toolMeta(tool, record(p.input))
        return begin(
          `tool:${str(p.callID) ?? ""}`,
          build({
            ...base,
            kind: meta.kind,
            category: meta.category,
            status: "active",
            title: label(tool),
            detail: meta.detail,
            tool,
            file: meta.file,
            group: str(p.assistantMessageID),
          }),
          {
            countsTool: true,
            files: meta.file && meta.fileState ? [{ path: meta.file, state: meta.fileState }] : undefined,
          },
        )
      }
      case "session.next.tool.progress":
        return settle(`tool:${str(p.callID) ?? ""}`, at, {}, { bump: true })
      case "session.next.tool.success":
        return (
          settle(`tool:${str(p.callID) ?? ""}`, at, { status: "success", payload: details }, { finishFile: true }) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "tool",
              category: "tool",
              status: "success",
              title: "Tool Finished",
              group: str(p.assistantMessageID),
            }),
          )
        )
      case "session.next.tool.failed": {
        const detail = errorMessage(p.error)
        return (
          settle(
            `tool:${str(p.callID) ?? ""}`,
            at,
            { status: "error", detail, payload: details },
            { finishFile: true },
          ) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "error",
              category: "tool",
              status: "error",
              title: "Tool Failed",
              detail,
              group: str(p.assistantMessageID),
            }),
          )
        )
      }

      case "session.next.shell.started": {
        const command = str(p.command)
        return begin(
          `shell:${str(p.callID) ?? ""}`,
          build({
            ...base,
            kind: command && BUILD_COMMAND.test(command) ? "build" : "terminal",
            category: "tool",
            status: "active",
            title: "Terminal",
            detail: command ? clean(command, 160) : undefined,
            tool: "shell",
            group: str(p.messageID),
          }),
          { countsTool: true },
        )
      }
      case "session.next.shell.ended": {
        const output = str(p.output)
        const changes = {
          status: "success" as const,
          detail: output ? clean(output, 160) : undefined,
          payload: details as unknown,
        }
        return (
          settle(`shell:${str(p.callID) ?? ""}`, at, changes) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "terminal",
              category: "tool",
              status: "success",
              title: "Terminal",
              detail: changes.detail,
            }),
          )
        )
      }

      case "session.next.step.started": {
        const model = record(p.model)
        const providerID = str(model.providerID)
        const modelID = str(model.id)
        const ref = providerID && modelID ? `${providerID}/${modelID}` : undefined
        return begin(
          `step:${str(p.assistantMessageID) ?? ""}`,
          build({
            ...base,
            kind: "response",
            category: "llm",
            status: "active",
            title: "LLM Step",
            detail: [str(p.agent), ref].filter((value): value is string => Boolean(value)).join(" · ") || undefined,
            provider: providerID,
            model: modelID,
            group: str(p.assistantMessageID),
          }),
          { provider: providerID, model: modelID },
        )
      }
      case "session.next.step.ended": {
        const tokens = extractTokens(details, p) ?? 0
        const cost = num(p.cost)
        const files = Array.isArray(p.files)
          ? p.files
              .filter((file): file is string => typeof file === "string")
              .map((path) => ({ path, state: "finished" as const }))
          : []
        return (
          settle(
            `step:${str(p.assistantMessageID) ?? ""}`,
            at,
            {
              status: "success",
              detail: str(p.finish),
              tokens: tokens || undefined,
              cost,
              payload: details,
            },
            { files: files.length ? files : undefined },
          ) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "response",
              category: "llm",
              status: "success",
              title: "LLM Step",
              detail: str(p.finish),
              tokens: tokens || undefined,
              cost,
              group: str(p.assistantMessageID),
            }),
            { files: files.length ? files : undefined },
          )
        )
      }
      case "session.next.step.failed": {
        const detail = errorMessage(p.error)
        return (
          settle(`step:${str(p.assistantMessageID) ?? ""}`, at, { status: "error", detail, payload: details }) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "error",
              category: "llm",
              status: "error",
              title: "LLM Step Failed",
              detail,
              group: str(p.assistantMessageID),
            }),
          )
        )
      }

      case "session.next.retried":
        return begin(
          undefined,
          build({
            ...base,
            kind: "error",
            category: "llm",
            status: "neutral",
            title: "Retry",
            detail: errorMessage(p.error),
            attempt: num(p.attempt),
            group: str(p.sessionID),
          }),
        )

      case "session.next.model.switched": {
        const model = record(p.model)
        const providerID = str(model.providerID)
        const modelID = str(model.id)
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "neutral",
            title: "Model Switched",
            detail: providerID && modelID ? `${providerID}/${modelID}` : modelID,
            provider: providerID,
            model: modelID,
          }),
          { provider: providerID, model: modelID },
        )
      }
      case "session.next.agent.switched":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "neutral",
            title: "Agent Switched",
            detail: str(p.agent),
          }),
        )

      case "session.next.compaction.started":
        return begin(
          `compact:${str(p.messageID) ?? ""}`,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "active",
            title: "Compaction",
            detail: str(p.reason),
            group: str(p.messageID),
          }),
        )
      case "session.next.compaction.delta":
        return settle(`compact:${str(p.messageID) ?? ""}`, at, {}, { bump: true })
      case "session.next.compaction.ended":
        return settle(`compact:${str(p.messageID) ?? ""}`, at, { status: "success", payload: details })

      case "message.updated": {
        const info = record(p.info)
        const id = str(info.id) ?? ""
        const role = str(info.role)
        const providerID = str(info.providerID)
        const modelID = str(info.modelID)
        const tokens = sumTokens(info.tokens)
        const cost = num(info.cost)
        const completed = record(info.time).completed !== undefined
        const errored = info.error !== undefined && info.error !== null
        const status: ConsoleStatus = errored ? "error" : completed ? "success" : "active"
        if (role === "user")
          return (
            settle(`msg:${id}`, at, {}, { bump: true }) ??
            begin(
              `msg:${id}`,
              build({
                ...base,
                kind: "prompt",
                category: "llm",
                status: "neutral",
                title: "Prompt",
                group: id,
              }),
            )
          )
        const outcome =
          settle(
            `msg:${id}`,
            at,
            {
              status,
              detail: errored ? errorMessage(info.error) : undefined,
              provider: providerID,
              model: modelID,
              tokens: tokens || undefined,
              cost,
              payload: details,
            },
            { bump: true },
          ) ??
          begin(
            `msg:${id}`,
            build({
              ...base,
              kind: "response",
              category: "llm",
              status,
              title: "Assistant Message",
              provider: providerID,
              model: modelID,
              tokens: tokens || undefined,
              cost,
              group: id,
            }),
          )
        outcome.provider = providerID
        outcome.model = modelID
        return outcome
      }

      case "message.part.updated": {
        const part = record(p.part)
        const partID = str(part.id) ?? ""
        const key = `part:${partID}`
        const partType = str(part.type)
        const group = str(part.messageID)

        if (partType === "text" || partType === "reasoning") {
          const ended = record(part.time).end !== undefined
          const text = str(part.text)
          const status: ConsoleStatus = ended ? "success" : "active"
          const detail = text ? clean(text) : undefined
          return (
            settle(key, at, { status, detail, payload: details }, { bump: true }) ??
            begin(
              key,
              build({
                ...base,
                kind: partType === "text" ? "response" : "thinking",
                category: "llm",
                status,
                title: partType === "text" ? "Response" : "Thinking",
                detail,
                group,
              }),
            )
          )
        }

        if (partType === "tool") {
          const tool = str(part.tool) ?? "tool"
          const state = record(part.state)
          const meta = toolMeta(tool, record(state.input))
          const stateStatus = str(state.status)
          const status: ConsoleStatus =
            stateStatus === "error" ? "error" : stateStatus === "completed" ? "success" : "active"
          const detail = str(state.title) ?? (status === "error" ? errorMessage(state.error) : undefined) ?? meta.detail
          const done = status !== "active"
          return (
            settle(
              key,
              at,
              { status, detail, payload: details },
              {
                bump: true,
                finishFile: done,
                files: !done && meta.file && meta.fileState ? [{ path: meta.file, state: meta.fileState }] : undefined,
              },
            ) ??
            begin(
              key,
              build({
                ...base,
                kind: meta.kind,
                category: meta.category,
                status,
                title: label(tool),
                detail,
                tool,
                file: meta.file,
                group,
              }),
              {
                countsTool: true,
                files: meta.file
                  ? [{ path: meta.file, state: done ? "finished" : (meta.fileState ?? "finished") }]
                  : undefined,
              },
            )
          )
        }

        if (partType === "file") {
          const filename = str(part.filename)
          return begin(
            undefined,
            build({
              ...base,
              kind: "file",
              category: "file",
              status: "neutral",
              title: "File Attachment",
              detail: filename,
              file: filename,
              group,
            }),
          )
        }

        if (partType === "patch") {
          const files = Array.isArray(part.files)
            ? part.files.filter((file): file is string => typeof file === "string")
            : []
          return begin(
            undefined,
            build({
              ...base,
              kind: "file",
              category: "file",
              status: "success",
              title: "Patch Applied",
              detail: files.length ? clean(files.join(", "), 160) : undefined,
              group,
            }),
            { files: files.map((path) => ({ path, state: "finished" as const })) },
          )
        }

        if (partType === "step-finish") {
          const tokens = sumTokens(part.tokens)
          return begin(
            undefined,
            build({
              ...base,
              kind: "response",
              category: "llm",
              status: "success",
              title: "Step Finished",
              tokens: tokens || undefined,
              cost: num(part.cost),
              group,
            }),
          )
        }

        return undefined
      }

      case "session.error":
        return begin(
          undefined,
          build({
            ...base,
            kind: "error",
            category: "system",
            status: "error",
            title: "Session Error",
            detail: errorMessage(p.error),
            group: str(p.sessionID),
          }),
        )

      case "session.idle": {
        const settled = settleAllActive(at, "success", "Session complete")
        return (
          settled[0] ??
          begin(
            undefined,
            build({
              ...base,
              kind: "success",
              category: "system",
              status: "success",
              title: "Session Idle",
              group: str(p.sessionID),
            }),
          )
        )
      }

      case "session.status": {
        const info = record(p.status)
        const statusType = str(info.type)
        if (statusType === "busy") {
          return begin(
            undefined,
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "active",
              title: "Session Busy",
              group: str(p.sessionID),
            }),
          )
        }
        if (statusType === "retry") {
          const attempt = num(info.attempt)
          const message = str(info.message)
          return begin(
            undefined,
            build({
              ...base,
              kind: "error",
              category: "system",
              status: "active",
              title: "Retrying",
              detail: message ? clean(message) : undefined,
              attempt,
              group: str(p.sessionID),
            }),
          )
        }
        if (statusType === "idle") {
          const settled = settleAllActive(at, "success", "Session complete")
          return (
            settled[0] ??
            begin(
              undefined,
              build({
                ...base,
                kind: "system",
                category: "system",
                status: "success",
                title: "Session Idle",
                group: str(p.sessionID),
              }),
            )
          )
        }
        return undefined
      }

      case "session.updated": {
        const info = record(p.info)
        const id = str(info.id) ?? ""
        return (
          settle(`sess:${id}`, at, { detail: str(info.title) }, { bump: true }) ??
          begin(
            `sess:${id}`,
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "neutral",
              title: "Session Updated",
              detail: str(info.title),
              group: id,
            }),
          )
        )
      }

      case "file.edited": {
        const file = str(p.file)
        return begin(
          undefined,
          build({
            ...base,
            kind: "file",
            category: "file",
            status: "success",
            title: "File Edited",
            detail: file,
            file,
          }),
          { files: file ? [{ path: file, state: "finished" }] : undefined },
        )
      }

      case "file.watcher.updated": {
        const file = str(p.file)
        return (
          settle(`watch:${file ?? ""}`, at, {}, { bump: true }) ??
          begin(
            `watch:${file ?? ""}`,
            build({
              ...base,
              kind: "file",
              category: "file",
              status: "neutral",
              title: "File Changed",
              detail: file,
              file,
            }),
          )
        )
      }

      case "permission.updated":
      case "permission.v2.asked": {
        const request = record(p.request)
        const id = str(p.id) ?? str(request.id) ?? ""
        return begin(
          `perm:${id}`,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "active",
            title: "Permission Requested",
            detail: str(p.title) ?? str(request.title) ?? str(p.permission),
          }),
        )
      }
      case "permission.replied":
      case "permission.v2.replied": {
        const id = str(p.id) ?? str(p.requestID) ?? str(p.permissionID) ?? ""
        return (
          settle(`perm:${id}`, at, { status: "success", detail: str(p.response), payload: details }) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "success",
              title: "Permission Replied",
              detail: str(p.response),
            }),
          )
        )
      }

      case "question.v2.asked":
        return begin(
          `question:${str(p.id) ?? ""}`,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "active",
            title: "Question",
            detail: str(record(p.question).text) ?? str(p.text),
          }),
        )
      case "question.v2.replied":
      case "question.v2.rejected":
        return (
          settle(`question:${str(p.id) ?? str(p.questionID) ?? ""}`, at, {
            status: type.endsWith("rejected") ? "neutral" : "success",
            payload: details,
          }) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "success",
              title: label(type),
            }),
          )
        )

      case "todo.updated": {
        const todos = Array.isArray(p.todos) ? p.todos.length : undefined
        return (
          settle(
            `todo:${str(p.sessionID) ?? ""}`,
            at,
            { detail: todos === undefined ? undefined : `${todos} todos` },
            { bump: true },
          ) ??
          begin(
            `todo:${str(p.sessionID) ?? ""}`,
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "neutral",
              title: "Todos Updated",
              detail: todos === undefined ? undefined : `${todos} todos`,
              group: str(p.sessionID),
            }),
          )
        )
      }

      case "pty.created": {
        const info = record(p.info)
        return begin(
          `pty:${str(p.id) ?? str(info.id) ?? ""}`,
          build({
            ...base,
            kind: "terminal",
            category: "system",
            status: "active",
            title: "Terminal Opened",
            detail: str(info.title) ?? str(info.command),
          }),
        )
      }
      case "pty.updated":
        return settle(`pty:${str(p.id) ?? str(record(p.info).id) ?? ""}`, at, {}, { bump: true })
      case "pty.exited":
      case "pty.deleted":
        return (
          settle(`pty:${str(p.id) ?? ""}`, at, { status: "success", payload: details }) ??
          begin(
            undefined,
            build({
              ...base,
              kind: "terminal",
              category: "system",
              status: "success",
              title: "Terminal Closed",
            }),
          )
        )

      case "lsp.updated":
        return (
          settle("lsp", at, {}, { bump: true }) ??
          begin(
            "lsp",
            build({
              ...base,
              kind: "system",
              category: "system",
              status: "neutral",
              title: "LSP Updated",
            }),
          )
        )

      case "vcs.branch.updated":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "neutral",
            title: "Branch Updated",
            detail: str(p.branch),
          }),
        )

      case "installation.updated":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "neutral",
            title: "Installation Updated",
            detail: str(p.version),
          }),
        )

      case "session.compacted":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "success",
            title: "Session Compacted",
            group: str(p.sessionID),
          }),
        )

      case "command.executed":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "success",
            title: "Command Executed",
            detail: str(p.name),
          }),
        )

      case "global.disposed":
        return begin(
          undefined,
          build({
            ...base,
            kind: "system",
            category: "system",
            status: "neutral",
            title: "Server Disposed",
          }),
        )
    }

    const status = classify(type)
    const tokens = sumTokens(p)
    return begin(
      undefined,
      build({
        ...base,
        kind: status === "error" ? "error" : status === "success" ? "success" : "system",
        category: "system",
        status,
        title: label(type),
        detail: textFrom(p),
        tokens: tokens || undefined,
      }),
    )
  }

  return { ingest, reset, settleAllActive }
}
