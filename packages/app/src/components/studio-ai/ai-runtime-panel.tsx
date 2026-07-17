import { For, Show, createMemo, createSignal, onCleanup, onMount } from "solid-js"

type RuntimeEvent = {
  id: number
  at: number
  type: string
  directory?: string
  title: string
  detail?: string
  status: "active" | "success" | "error" | "neutral"
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

const MAX_EVENTS = 120

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
    if (typeof data[key] === "string" && data[key]) return data[key] as string
  }
}

function classify(type: string): RuntimeEvent["status"] {
  if (/(error|failed|denied)/i.test(type)) return "error"
  if (/(completed|finished|success|idle)/i.test(type)) return "success"
  if (/(started|running|updated|created|delta)/i.test(type)) return "active"
  return "neutral"
}

function label(type: string): string {
  const value = type.replace(/[._-]+/g, " ").trim()
  return value ? value.replace(/\b\w/g, (x) => x.toUpperCase()) : "Runtime Event"
}

function compactNumber(value: number): string {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`
  if (value >= 1_000) return `${(value / 1_000).toFixed(1)}K`
  return String(value)
}

function time(value: number): string {
  return new Date(value).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })
}

export function AIRuntimePanel() {
  const [expanded, setExpanded] = createSignal(false)
  const [events, setEvents] = createSignal<RuntimeEvent[]>([])
  const [startedAt, setStartedAt] = createSignal(Date.now())

  const onRuntime = (raw: Event) => {
    const envelope = (raw as CustomEvent<RuntimeEnvelope>).detail
    const details = envelope?.details ?? {}
    const type = typeof details.type === "string" ? details.type : "runtime.event"
    const properties = details.properties
    const tokenCount = tokensFrom(details)
    const next: RuntimeEvent = {
      id: Date.now() * 1000 + Math.floor(Math.random() * 1000),
      at: Date.now(),
      type,
      directory: envelope?.name,
      title: label(type),
      detail: textFrom(properties) ?? textFrom(details),
      status: classify(type),
      tokens: tokenCount || undefined,
    }
    setEvents((current) => [...current, next].slice(-MAX_EVENTS))
  }

  onMount(() => {
    window.addEventListener("studio-ai:runtime", onRuntime)
    setStartedAt(Date.now())
  })
  onCleanup(() => window.removeEventListener("studio-ai:runtime", onRuntime))

  const totalTokens = createMemo(() => events().reduce((sum, item) => sum + (item.tokens ?? 0), 0))
  const errors = createMemo(() => events().filter((item) => item.status === "error").length)
  const current = createMemo(() => events().at(-1))
  const status = createMemo(() => {
    if (errors()) return "Needs attention"
    if (!events().length) return "Ready"
    if (current()?.status === "success") return "Completed"
    return "Running"
  })

  return (
    <aside
      class="fixed bottom-4 right-4 z-[90] w-[min(380px,calc(100vw-32px))] overflow-hidden rounded-xl border border-border-weak-base bg-background-base shadow-2xl"
      aria-label="AI Runtime"
    >
      <button
        type="button"
        class="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-background-weak"
        onClick={() => setExpanded((value) => !value)}
        aria-expanded={expanded()}
      >
        <span class={`h-2.5 w-2.5 shrink-0 rounded-full ${errors() ? "bg-red-500" : events().length ? "bg-blue-500 animate-pulse" : "bg-text-weak"}`} />
        <span class="min-w-0 flex-1">
          <span class="flex items-center justify-between gap-3">
            <strong class="text-13-medium text-text-strong">AI Runtime</strong>
            <span class="text-11-regular text-text-weak">{status()}</span>
          </span>
          <span class="mt-0.5 block truncate text-11-regular text-text-weak">
            {current()?.title ?? "Waiting for runtime activity"}
          </span>
        </span>
        <span class="text-14-regular text-text-weak">{expanded() ? "⌃" : "⌄"}</span>
      </button>

      <div class="grid grid-cols-4 border-t border-border-weak-base bg-background-weak/40">
        <Metric label="Events" value={String(events().length)} />
        <Metric label="Tokens" value={compactNumber(totalTokens())} />
        <Metric label="Errors" value={String(errors())} />
        <Metric label="Uptime" value={`${Math.max(0, Math.floor((Date.now() - startedAt()) / 60000))}m`} />
      </div>

      <Show when={expanded()}>
        <div class="max-h-[min(520px,60vh)] overflow-y-auto border-t border-border-weak-base">
          <Show
            when={events().length}
            fallback={
              <div class="px-4 py-8 text-center text-12-regular text-text-weak">
                Runtime detail will appear when the agent starts working.
              </div>
            }
          >
            <div class="divide-y divide-border-weak-base">
              <For each={[...events()].reverse()}>
                {(event) => (
                  <div class="flex gap-3 px-4 py-3">
                    <span class={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${event.status === "error" ? "bg-red-500" : event.status === "success" ? "bg-green-500" : event.status === "active" ? "bg-blue-500" : "bg-text-weak"}`} />
                    <div class="min-w-0 flex-1">
                      <div class="flex items-start justify-between gap-3">
                        <span class="truncate text-12-medium text-text-strong">{event.title}</span>
                        <span class="shrink-0 text-10-regular text-text-weak">{time(event.at)}</span>
                      </div>
                      <Show when={event.detail}>
                        <div class="mt-0.5 truncate text-11-regular text-text-weak">{event.detail}</div>
                      </Show>
                      <div class="mt-1 flex gap-2 text-10-regular text-text-weak">
                        <Show when={event.directory}>
                          <span class="max-w-[220px] truncate">{event.directory}</span>
                        </Show>
                        <Show when={event.tokens}>
                          <span>{compactNumber(event.tokens!)} tokens</span>
                        </Show>
                      </div>
                    </div>
                  </div>
                )}
              </For>
            </div>
          </Show>
        </div>
      </Show>
    </aside>
  )
}

function Metric(props: { label: string; value: string }) {
  return (
    <div class="border-r border-border-weak-base px-2 py-2 text-center last:border-r-0">
      <div class="text-12-medium text-text-strong">{props.value}</div>
      <div class="text-10-regular text-text-weak">{props.label}</div>
    </div>
  )
}
