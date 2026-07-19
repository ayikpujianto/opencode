import { For, Show, createMemo } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { compactNumber, eventTime, formatMs, type ConsoleEvent } from "./ai-console-model"
import { KIND_COLOR, KIND_ICON, STATUS_DOT } from "./ai-console-timeline"

const MAX_PAYLOAD = 20_000

export function AIConsoleInspector(props: {
  event?: ConsoleEvent
  related: ConsoleEvent[]
  onSelect: (id: number) => void
  onClose: () => void
}) {
  return (
    <Show
      when={props.event}
      fallback={
        <div class="flex h-full items-center justify-center px-5 text-center">
          <div>
            <div class="text-11-medium text-text-strong">Inspector</div>
            <div class="mt-1 text-10-regular leading-4 text-text-weak">
              Select a timeline event to inspect its payload, provider, timing, tokens, and related events.
            </div>
          </div>
        </div>
      }
    >
      {(event) => {
        const payload = createMemo(() => {
          const text = JSON.stringify(event().payload, null, 2) ?? String(event().payload)
          return text.length > MAX_PAYLOAD ? `${text.slice(0, MAX_PAYLOAD)}\n…` : text
        })
        return (
          <div class="flex h-full min-h-0 flex-col">
            <header class="flex h-9 shrink-0 items-center justify-between gap-2 border-b border-border-weak-base px-3">
              <div class="flex min-w-0 items-center gap-1.5">
                <Icon name={KIND_ICON[event().kind]} size="small" class={`shrink-0 ${KIND_COLOR[event().kind]}`} />
                <span class="truncate text-11-medium text-text-strong">{event().title}</span>
              </div>
              <button
                type="button"
                class="rounded p-0.5 text-text-weak hover:bg-background-weak hover:text-text-strong"
                onClick={props.onClose}
                aria-label="Close inspector"
              >
                <Icon name="close-small" size="small" />
              </button>
            </header>
            <div class="min-h-0 flex-1 overflow-y-auto p-3">
              <div class="grid grid-cols-2 gap-x-3 gap-y-2">
                <Field label="Type" value={event().type} mono />
                <Field label="Time" value={eventTime(event().at)} />
                <Field label="Status" value={event().status} />
                <Field label="Category" value={event().category} />
                <Show when={event().provider}>
                  <Field label="Provider" value={event().provider!} />
                </Show>
                <Show when={event().model}>
                  <Field label="Model" value={event().model!} mono />
                </Show>
                <Show when={event().tool}>
                  <Field label="Tool" value={event().tool!} mono />
                </Show>
                <Show when={event().file}>
                  <Field label="File" value={event().file!} mono />
                </Show>
                <Show when={event().duration !== undefined}>
                  <Field label="Duration" value={formatMs(event().duration!)} />
                </Show>
                <Show when={event().latency !== undefined}>
                  <Field label="Latency" value={formatMs(event().latency!)} />
                </Show>
                <Show when={event().attempt}>
                  <Field label="Retry Attempt" value={String(event().attempt)} />
                </Show>
                <Show when={event().tokens}>
                  <Field label="Tokens" value={compactNumber(event().tokens!)} />
                </Show>
                <Show when={event().cost !== undefined}>
                  <Field label="Cost" value={`$${event().cost!.toFixed(4)}`} />
                </Show>
                <Show when={event().count > 1}>
                  <Field label="Stream Updates" value={`×${event().count}`} />
                </Show>
                <Show when={event().directory}>
                  <Field label="Directory" value={event().directory!} mono />
                </Show>
              </div>

              <Show when={props.related.length}>
                <div class="mt-4">
                  <div class="text-10-medium uppercase tracking-wide text-text-weak">Related Events</div>
                  <div class="mt-1.5 space-y-0.5">
                    <For each={props.related}>
                      {(item) => (
                        <button
                          type="button"
                          class="flex w-full items-center gap-2 rounded px-1.5 py-1 text-left hover:bg-background-weak"
                          onClick={() => props.onSelect(item.id)}
                        >
                          <span class={`h-1.5 w-1.5 shrink-0 rounded-full ${STATUS_DOT[item.status]}`} />
                          <span class="truncate text-11-regular text-text-strong">{item.title}</span>
                          <span class="ml-auto shrink-0 text-10-regular text-text-weak">{eventTime(item.at)}</span>
                        </button>
                      )}
                    </For>
                  </div>
                </div>
              </Show>

              <div class="mt-4">
                <div class="text-10-medium uppercase tracking-wide text-text-weak">Payload</div>
                <pre class="mt-1.5 overflow-x-auto whitespace-pre-wrap break-all rounded bg-background-weak p-2 font-mono text-10-regular leading-4 text-text-strong">
                  {payload()}
                </pre>
              </div>
            </div>
          </div>
        )
      }}
    </Show>
  )
}

function Field(props: { label: string; value: string; mono?: boolean }) {
  return (
    <div class="min-w-0">
      <div class="text-10-regular text-text-weak">{props.label}</div>
      <div
        class={`mt-0.5 truncate text-11-medium text-text-strong ${props.mono ? "font-mono" : ""}`}
        title={props.value}
      >
        {props.value}
      </div>
    </div>
  )
}
