import { For, Show, createMemo, createSignal, onCleanup, onMount } from "solid-js"

type RuntimeStatus = "active" | "success" | "error" | "neutral"
type RuntimeFilter = "all" | "activity" | "errors"

type RuntimeEvent = {
  id: number
  at: number
  type: string
  directory?: string
  title: string
  detail?: string
  status: RuntimeStatus
  tokens?: number
}

type RuntimeEnvelope = {
  name?: string
  details?: {
    type?: string
    properties?: unknown
    [key: string]: unknown
  }
}

const MAX_EVENTS = 160

function numberFrom(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) ? value : 0
}

function tokensFrom(value: unknown, seen = new Set<object>()): number {
  if (!value || typeof value !== "object") return 0
  if (seen.has(value as object)) return 0
  seen.add(value as object)

  let total = 0
  for (const [key, item] of Object.entries(value as Record<string, unknown>)) {
    if (/^(input|output|cache(Read|Write)?|reasoning|total)Tokens?$/i.test(key)) {
      total += numberFrom(item)
      continue
    }
    if (key === "tokens" && typeof item === "object") {
      total += tokensFrom(item, seen)
      continue
    }
    if (typeof item === "object") total += tokensFrom(item, seen)
  }
  return total
}

function textFrom(value: unknown): string | undefined {
  if (typeof value === "string") return value
  if (!value || typeof value !== "object") return
  const data = value as Record<string, unknown>
  for (const key of ["title", "name", "command", "path", "file", "tool", "status"]) {
    const item = data[key]
    if (typeof item === "string" && item.trim()) return item
  }
}

function classify(type: string): RuntimeStatus {
  if (/(error|failed|failure|denied|rejected)/i.test(type)) return "error"
  if (/(completed|finished|success|succeeded|idle)/i.test(type)) return "success"
  if (/(started|running|updated|created|delta|stream)/i.test(type)) return "active"
  return "neutral"
}

function label(type: string): string {
  const value = type.replace(/[._-]+/g, " ").trim()
  return value ? value.replace(/\b\w/g, (character) => character.toUpperCase()) : "Runtime Event"
}

function compactNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return String(value)
}

function eventTime(value: number): string {
  return new Date(value).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  })
}

function statusDot(status: RuntimeStatus): string {
  if (status === "error") return "bg-red-500"
  if (status === "success") return "bg-green-500"
  if (status === "active") return "bg-blue-500"
  return "bg-text-weak"
}

export function AIRuntimePanel() {
  const [expanded, setExpanded] = createSignal(false)
  const [filter, setFilter] = createSignal<RuntimeFilter>("all")
  const [events, setEvents] = createSignal<RuntimeEvent[]>([])
  const [startedAt, setStartedAt] = createSignal(Date.now())
  const [now, setNow] = createSignal(Date.now())

  const onRuntime = (raw: Event) => {
    const envelope = (raw as CustomEvent<RuntimeEnvelope>).detail
    const details = envelope?.details ?? {}
    const type = typeof details.type === "string" ? details.type : "runtime.event"
    const tokenCount = tokensFrom(details)
    const next: RuntimeEvent = {
      id: Date.now() * 1000 + Math.floor(Math.random() * 1000),
      at: Date.now(),
      type,
      directory: envelope?.name,
      title: label(type),
      detail: textFrom(details.properties) ?? textFrom(details),
      status: classify(type),
      tokens: tokenCount || undefined,
    }
    setEvents((current) => [...current, next].slice(-MAX_EVENTS))
  }

  onMount(() => {
    window.addEventListener("studio-ai:runtime", onRuntime)
    setStartedAt(Date.now())
    const timer = window.setInterval(() => setNow(Date.now()), 30_000)
    onCleanup(() => window.clearInterval(timer))
  })

  onCleanup(() => window.removeEventListener("studio-ai:runtime", onRuntime))

  const totalTokens = createMemo(() => events().reduce((sum, event) => sum + (event.tokens ?? 0), 0))
  const errorCount = createMemo(() => events().filter((event) => event.status === "error").length)
  const current = createMemo(() => events().at(-1))
  const visibleEvents = createMemo(() => {
    if (filter() === "errors") return events().filter((event) => event.status === "error")
    if (filter() === "activity") return events().filter((event) => event.status === "active" || event.status === "success")
    return events()
  })
  const runtimeStatus = createMemo(() => {
    if (errorCount()) return "Needs attention"
    if (!events().length) return "Ready"
    if (current()?.status === "success") return "Completed"
    return "Running"
  })
  const uptime = createMemo(() => Math.max(0, Math.floor((now() - startedAt()) / 60_000)))

  const clearEvents = (event: MouseEvent) => {
    event.stopPropagation()
    setEvents([])
  }

  return (
    <aside
      class="fixed inset-x-0 bottom-0 z-[90] border-t border-border-weak-base bg-background-base shadow-[0_-8px_30px_rgba(0,0,0,0.16)]"
      aria-label="AI Runtime"
    >
      <Show when={expanded()}>
        <section class="h-[min(420px,46vh)] min-h-[240px] border-b border-border-weak-base">
          <header class="flex h-11 items-center justify-between gap-3 border-b border-border-weak-base px-4">
            <div class="flex min-w-0 items-center gap-3">
              <strong class="text-12-medium text-text-strong">AI Runtime</strong>
              <nav class="flex items-center rounded-md bg-background-weak p-0.5">
                <FilterButton active={filter() === "all"} onClick={() => setFilter("all")} label={`All ${events().length}`} />
                <FilterButton active={filter() === "activity"} onClick={() => setFilter("activity")} label="Activity" />
                <FilterButton active={filter() === "errors"} onClick={() => setFilter("errors")} label={`Errors ${errorCount()}`} />
              </nav>
            </div>
            <div class="flex items-center gap-2">
              <button type="button" class="rounded px-2 py-1 text-11-regular text-text-weak hover:bg-background-weak hover:text-text-strong" onClick={clearEvents}>
                Clear
              </button>
              <button type="button" class="rounded px-2 py-1 text-14-regular text-text-weak hover:bg-background-weak hover:text-text-strong" onClick={() => setExpanded(false)} aria-label="Collapse AI Runtime">
                ⌄
              </button>
            </div>
          </header>

          <div class="grid h-[calc(100%-44px)] grid-cols-[minmax(0,1fr)_220px]">
            <div class="overflow-y-auto">
              <Show
                when={visibleEvents().length}
                fallback={
                  <div class="flex h-full items-center justify-center px-6 text-center">
                    <div>
                      <div class="text-12-medium text-text-strong">No runtime activity yet</div>
                      <div class="mt-1 text-11-regular text-text-weak">
                        Start an AI task. Reads, edits, tools, verification, and usage events will appear here.
                      </div>
                    </div>
                  </div>
                }
              >
                <div class="divide-y divide-border-weak-base">
                  <For each={[...visibleEvents()].reverse()}>
                    {(event) => (
                      <article class="grid grid-cols-[84px_14px_minmax(0,1fr)_auto] items-start gap-3 px-4 py-2.5 hover:bg-background-weak/60">
                        <time class="pt-0.5 text-10-regular text-text-weak">{eventTime(event.at)}</time>
                        <span class={`mt-1.5 h-2 w-2 rounded-full ${statusDot(event.status)}`} />
                        <div class="min-w-0">
                          <div class="truncate text-12-medium text-text-strong">{event.title}</div>
                          <Show when={event.detail}>
                            <div class="mt-0.5 truncate text-11-regular text-text-weak">{event.detail}</div>
                          </Show>
                          <Show when={event.directory}>
                            <div class="mt-0.5 truncate text-10-regular text-text-weak">{event.directory}</div>
                          </Show>
                        </div>
                        <Show when={event.tokens}>
                          <span class="rounded bg-background-weak px-1.5 py-0.5 text-10-medium text-text-weak">{compactNumber(event.tokens!)} tokens</span>
                        </Show>
                      </article>
                    )}
                  </For>
                </div>
              </Show>
            </div>

            <aside class="border-l border-border-weak-base bg-background-weak/30 p-4">
              <div class="text-10-medium uppercase tracking-wide text-text-weak">Current session</div>
              <div class="mt-3 space-y-3">
                <SummaryRow label="Status" value={runtimeStatus()} />
                <SummaryRow label="Current" value={current()?.title ?? "Waiting for activity"} />
                <SummaryRow label="Events" value={String(events().length)} />
                <SummaryRow label="Tokens" value={compactNumber(totalTokens())} />
                <SummaryRow label="Errors" value={String(errorCount())} />
                <SummaryRow label="Uptime" value={`${uptime()}m`} />
              </div>
              <div class="mt-5 border-t border-border-weak-base pt-3 text-10-regular leading-4 text-text-weak">
                Detailed runtime data stays hidden until this panel is expanded.
              </div>
            </aside>
          </div>
        </section>
      </Show>

      <button
        type="button"
        class="flex h-8 w-full items-center justify-between gap-4 px-3 text-left hover:bg-background-weak"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded()}
      >
        <div class="flex min-w-0 items-center gap-2">
          <span class={`h-2 w-2 shrink-0 rounded-full ${errorCount() ? "bg-red-500" : events().length ? "bg-blue-500 animate-pulse" : "bg-text-weak"}`} />
          <strong class="shrink-0 text-11-medium text-text-strong">AI Runtime</strong>
          <span class="truncate text-11-regular text-text-weak">{current()?.title ?? "Ready"}</span>
        </div>
        <div class="flex shrink-0 items-center gap-4 text-10-regular text-text-weak">
          <span>{events().length} events</span>
          <span>{compactNumber(totalTokens())} tokens</span>
          <Show when={errorCount()}><span class="text-red-500">{errorCount()} errors</span></Show>
          <span>{expanded() ? "⌄" : "⌃"}</span>
        </div>
      </button>
    </aside>
  )
}

function FilterButton(props: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      class={`rounded px-2 py-1 text-10-medium ${props.active ? "bg-background-base text-text-strong shadow-sm" : "text-text-weak hover:text-text-strong"}`}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
}

function SummaryRow(props: { label: string; value: string }) {
  return (
    <div>
      <div class="text-10-regular text-text-weak">{props.label}</div>
      <div class="mt-0.5 truncate text-11-medium text-text-strong">{props.value}</div>
    </div>
  )
}
