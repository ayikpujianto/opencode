import { For, Show, batch, createEffect, createMemo, createSignal, onCleanup, onMount } from "solid-js"
import { createStore, produce, reconcile } from "solid-js/store"
import { Icon } from "@opencode-ai/ui/icon"
import { AIConsoleInspector } from "./ai-console-inspector"
import { AIConsoleTimeline } from "./ai-console-timeline"
import {
  basename,
  compactNumber,
  createConsoleModel,
  formatElapsed,
  matchesFilter,
  type ConsoleEnvelope,
  type ConsoleEvent,
  type ConsoleFilter,
  type FileState,
} from "./ai-console-model"

const MAX_EVENTS = 5000
const TRIM_CHUNK = 1000

const FILTERS: { id: ConsoleFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "llm", label: "LLM" },
  { id: "tools", label: "Tools" },
  { id: "files", label: "Files" },
  { id: "system", label: "System" },
  { id: "error", label: "Errors" },
]

const FILE_TONE: Record<FileState, string> = {
  editing: "bg-amber-500/10 text-amber-500",
  reading: "bg-blue-500/10 text-blue-400",
  finished: "bg-green-500/10 text-green-500",
}

const FILE_ICON: Record<FileState, "pencil-line" | "eye" | "check-small"> = {
  editing: "pencil-line",
  reading: "eye",
  finished: "check-small",
}

export function AIRuntimePanel() {
  const model = createConsoleModel()
  const keyToID = new Map<string, number>()
  const idToIndex = new Map<number, number>()
  let scrollToEvent: ((id: number) => void) | undefined

  const [state, setState] = createStore({
    expanded: false,
    filter: "all" as ConsoleFilter,
    search: "",
    follow: true,
    selectedID: undefined as number | undefined,
    events: [] as ConsoleEvent[],
    files: {} as Record<string, { state: FileState; at: number }>,
    provider: undefined as string | undefined,
    model: undefined as string | undefined,
    stats: { received: 0, tools: 0, errors: 0, tokens: 0, cost: 0, startedAt: 0 },
  })
  const [now, setNow] = createSignal(Date.now())

  const trim = () => {
    const dropped = new Set(state.events.slice(0, TRIM_CHUNK).map((event) => event.id))
    setState(
      "events",
      produce((events) => {
        events.splice(0, TRIM_CHUNK)
      }),
    )
    idToIndex.clear()
    state.events.forEach((event, index) => idToIndex.set(event.id, index))
    for (const [key, id] of keyToID) {
      if (dropped.has(id)) keyToID.delete(key)
    }
    if (state.selectedID !== undefined && dropped.has(state.selectedID)) setState("selectedID", undefined)
  }

  const onRuntime = (raw: Event) => {
    const outcome = model.ingest((raw as CustomEvent<ConsoleEnvelope>).detail)
    if (!outcome) return
    batch(() => {
      setState("stats", "received", (value) => value + 1)
      if (!state.stats.startedAt) setState("stats", "startedAt", Date.now())
      if (outcome.append) {
        if (state.events.length >= MAX_EVENTS) trim()
        const event = outcome.append
        const index = state.events.length
        setState(
          "events",
          produce((events) => {
            events.push(event)
          }),
        )
        idToIndex.set(event.id, index)
        if (outcome.appendKey) keyToID.set(outcome.appendKey, event.id)
      }
      if (outcome.update) {
        const id = keyToID.get(outcome.update.key)
        const index = id === undefined ? undefined : idToIndex.get(id)
        if (index !== undefined) {
          setState("events", index, outcome.update.patch)
          if (outcome.update.bump) setState("events", index, "count", (value) => value + 1)
        }
      }
      if (outcome.countsTool) setState("stats", "tools", (value) => value + 1)
      if (outcome.countsError) setState("stats", "errors", (value) => value + 1)
      if (outcome.tokensDelta) setState("stats", "tokens", (value) => value + outcome.tokensDelta!)
      if (outcome.costDelta) setState("stats", "cost", (value) => value + outcome.costDelta!)
      if (outcome.provider) setState("provider", outcome.provider)
      if (outcome.model) setState("model", outcome.model)
      for (const file of outcome.files ?? []) setState("files", file.path, { state: file.state, at: Date.now() })
    })
  }

  onMount(() => {
    window.addEventListener("studio-ai:runtime", onRuntime)
    onCleanup(() => window.removeEventListener("studio-ai:runtime", onRuntime))
  })

  createEffect(() => {
    if (!state.expanded) return
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    onCleanup(() => window.clearInterval(timer))
  })

  const visible = createMemo(() => {
    const filter = state.filter
    const query = state.search.trim().toLowerCase()
    if (filter === "all" && !query) return state.events
    return state.events.filter((event) => matchesFilter(event, filter) && (!query || event.search.includes(query)))
  })

  const current = createMemo(() => state.events.at(-1))

  const selected = createMemo(() => {
    const id = state.selectedID
    if (id === undefined) return undefined
    const index = idToIndex.get(id)
    const event = index === undefined ? undefined : state.events[index]
    return event && event.id === id ? event : undefined
  })

  const related = createMemo(() => {
    const event = selected()
    if (!event?.group) return []
    const events = state.events
    const result: ConsoleEvent[] = []
    for (let index = events.length - 1; index >= 0 && result.length < 5; index--) {
      const item = events[index]!
      if (item.id !== event.id && item.group === event.group) result.push(item)
    }
    return result
  })

  const filesList = createMemo(() =>
    Object.entries(state.files)
      .map(([path, info]) => ({ path, state: info.state, at: info.at }))
      .sort((a, b) => b.at - a.at)
      .slice(0, 12),
  )
  const filesCount = createMemo(() => Object.keys(state.files).length)

  const consoleStatus = createMemo(() => {
    const last = current()
    if (!last) return "Ready"
    if (last.status === "active") return "Running"
    if (state.stats.errors) return "Issues"
    if (last.status === "success") return "Completed"
    return "Idle"
  })

  const elapsed = createMemo(() => (state.stats.startedAt ? formatElapsed(now() - state.stats.startedAt) : "0s"))

  const clear = () => {
    batch(() => {
      setState("events", [])
      setState("files", reconcile({}))
      setState("stats", { received: 0, tools: 0, errors: 0, tokens: 0, cost: 0, startedAt: 0 })
      setState("selectedID", undefined)
      setState("provider", undefined)
      setState("model", undefined)
      setState("follow", true)
    })
    keyToID.clear()
    idToIndex.clear()
    model.reset()
  }

  const select = (id: number) => setState("selectedID", state.selectedID === id ? undefined : id)

  const jumpTo = (id: number) => {
    batch(() => {
      setState("selectedID", id)
      setState("follow", false)
    })
    scrollToEvent?.(id)
  }

  return (
    <aside
      class="fixed inset-x-0 bottom-0 z-[90] border-t border-border-weak-base bg-background-base shadow-[0_-8px_30px_rgba(0,0,0,0.16)]"
      aria-label="AI Developer Console"
    >
      <Show when={state.expanded}>
        <section class="flex h-[min(540px,58vh)] min-h-[320px] flex-col border-b border-border-weak-base">
          <header class="shrink-0 border-b border-border-weak-base">
            <div class="flex h-10 items-center gap-3 px-3">
              <div class="flex min-w-0 shrink-0 items-center gap-2">
                <span aria-hidden>🤖</span>
                <strong class="text-12-medium text-text-strong">AI Developer Console</strong>
              </div>
              <div class="flex min-w-0 flex-1 items-center justify-end gap-1.5 overflow-x-auto">
                <HeaderStat
                  label="Status"
                  value={consoleStatus()}
                  tone={state.stats.errors ? "error" : consoleStatus() === "Running" ? "active" : undefined}
                />
                <HeaderStat label="Provider" value={state.provider ?? "—"} />
                <HeaderStat label="Model" value={state.model ?? "—"} />
                <HeaderStat label="Duration" value={elapsed()} />
                <HeaderStat label="Events" value={compactNumber(state.stats.received)} />
                <HeaderStat label="Tokens" value={compactNumber(state.stats.tokens)} />
                <HeaderStat label="Files" value={String(filesCount())} />
                <HeaderStat label="Tools" value={String(state.stats.tools)} />
              </div>
              <div class="flex shrink-0 items-center gap-1">
                <button
                  type="button"
                  class="rounded p-1 text-text-weak hover:bg-background-weak hover:text-text-strong"
                  title="Clear console"
                  onClick={clear}
                >
                  <Icon name="trash" size="small" />
                </button>
                <button
                  type="button"
                  class="rounded p-1 text-text-weak hover:bg-background-weak hover:text-text-strong"
                  aria-label="Collapse console"
                  onClick={() => setState("expanded", false)}
                >
                  <Icon name="chevron-down" size="small" />
                </button>
              </div>
            </div>
            <div class="flex h-9 items-center gap-2 border-t border-border-weak-base px-3">
              <nav class="flex shrink-0 items-center rounded-md bg-background-weak p-0.5">
                <For each={FILTERS}>
                  {(item) => (
                    <button
                      type="button"
                      class={`rounded px-2 py-1 text-10-medium ${
                        state.filter === item.id
                          ? "bg-background-base text-text-strong shadow-sm"
                          : "text-text-weak hover:text-text-strong"
                      } ${item.id === "error" && state.stats.errors ? "text-red-500" : ""}`}
                      onClick={() => setState("filter", item.id)}
                    >
                      {item.id === "error" && state.stats.errors ? `${item.label} ${state.stats.errors}` : item.label}
                    </button>
                  )}
                </For>
              </nav>
              <div class="relative min-w-0 max-w-64 flex-1">
                <Icon
                  name="magnifying-glass"
                  size="small"
                  class="pointer-events-none absolute left-1.5 top-1/2 -translate-y-1/2 text-text-weak"
                />
                <input
                  type="text"
                  value={state.search}
                  placeholder="Search events…"
                  class="h-6 w-full rounded border border-border-weak-base bg-background-weak pl-6 pr-2 text-11-regular text-text-strong placeholder:text-text-weak focus:outline-none"
                  onInput={(event) => setState("search", event.currentTarget.value)}
                />
              </div>
              <Show when={!state.follow}>
                <button
                  type="button"
                  class="shrink-0 rounded bg-background-weak px-2 py-1 text-10-medium text-text-weak hover:text-text-strong"
                  onClick={() => setState("follow", true)}
                >
                  Jump to latest
                </button>
              </Show>
              <span class="ml-auto shrink-0 text-10-regular text-text-weak">
                {visible().length} / {state.events.length} rows
              </span>
            </div>
          </header>

          <div class="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(260px,320px)]">
            <AIConsoleTimeline
              events={visible()}
              selected={state.selectedID}
              follow={state.follow}
              onSelect={select}
              onFollowChange={(follow) => setState("follow", follow)}
              registerScrollTo={(scroll) => {
                scrollToEvent = scroll
              }}
            />
            <div class="min-h-0 border-l border-border-weak-base bg-background-weak/30">
              <AIConsoleInspector
                event={selected()}
                related={related()}
                onSelect={jumpTo}
                onClose={() => setState("selectedID", undefined)}
              />
            </div>
          </div>

          <Show when={filesList().length}>
            <div class="flex h-9 shrink-0 items-center gap-1.5 overflow-x-auto border-t border-border-weak-base px-3">
              <span class="shrink-0 text-10-medium uppercase tracking-wide text-text-weak">Files</span>
              <For each={filesList()}>
                {(file) => (
                  <span
                    class={`flex shrink-0 items-center gap-1 rounded px-1.5 py-0.5 text-10-medium ${FILE_TONE[file.state]}`}
                    title={file.path}
                  >
                    <Icon name={FILE_ICON[file.state]} size="small" />
                    <span class="max-w-40 truncate">{basename(file.path)}</span>
                    <span class="opacity-70">{file.state}</span>
                  </span>
                )}
              </For>
            </div>
          </Show>

          <footer class="flex h-8 shrink-0 items-center gap-4 overflow-x-auto border-t border-border-weak-base px-3">
            <Metric label="Events" value={compactNumber(state.stats.received)} />
            <Metric label="Tools" value={String(state.stats.tools)} />
            <Metric label="Files" value={String(filesCount())} />
            <Metric label="Duration" value={elapsed()} />
            <Metric label="Errors" value={String(state.stats.errors)} error={state.stats.errors > 0} />
            <Metric label="Tokens" value={compactNumber(state.stats.tokens)} />
            <Show when={state.stats.cost > 0}>
              <Metric label="Cost" value={`$${state.stats.cost.toFixed(4)}`} />
            </Show>
          </footer>
        </section>
      </Show>

      <button
        type="button"
        class="flex h-8 w-full items-center justify-between gap-4 px-3 text-left hover:bg-background-weak"
        onClick={() => setState("expanded", (value) => !value)}
        aria-expanded={state.expanded}
      >
        <div class="flex min-w-0 items-center gap-2">
          <span
            class={`h-2 w-2 shrink-0 rounded-full ${
              state.stats.errors ? "bg-red-500" : state.events.length ? "bg-blue-500 animate-pulse" : "bg-text-weak"
            }`}
          />
          <strong class="shrink-0 text-11-medium text-text-strong">🤖 AI Developer Console</strong>
          <span class="truncate text-11-regular text-text-weak">{current()?.title ?? "Ready"}</span>
        </div>
        <div class="flex shrink-0 items-center gap-4 text-10-regular text-text-weak">
          <span>{compactNumber(state.stats.received)} events</span>
          <span>{compactNumber(state.stats.tokens)} tokens</span>
          <Show when={state.stats.errors}>
            <span class="text-red-500">{state.stats.errors} errors</span>
          </Show>
          <span>{state.expanded ? "⌄" : "⌃"}</span>
        </div>
      </button>
    </aside>
  )
}

function HeaderStat(props: { label: string; value: string; tone?: "error" | "active" }) {
  return (
    <div class="flex min-w-0 shrink-0 items-center gap-1.5 rounded bg-background-weak px-2 py-1">
      <span class="text-10-regular text-text-weak">{props.label}</span>
      <span
        class={`max-w-40 truncate text-10-medium ${
          props.tone === "error" ? "text-red-500" : props.tone === "active" ? "text-blue-500" : "text-text-strong"
        }`}
      >
        {props.value}
      </span>
    </div>
  )
}

function Metric(props: { label: string; value: string; error?: boolean }) {
  return (
    <span class="flex shrink-0 items-center gap-1.5 text-10-regular">
      <span class="text-text-weak">{props.label}</span>
      <span class={`text-10-medium ${props.error ? "text-red-500" : "text-text-strong"}`}>{props.value}</span>
    </span>
  )
}
