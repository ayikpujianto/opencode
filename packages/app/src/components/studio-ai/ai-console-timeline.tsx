import { For, Show, createEffect, createMemo, createSignal, onMount } from "solid-js"
import { createVirtualizer } from "@tanstack/solid-virtual"
import { Icon, type IconProps } from "@opencode-ai/ui/icon"
import { virtualScrollElement } from "@/components/virtual-scroll-element"
import {
  compactNumber,
  eventTime,
  formatMs,
  type ConsoleEvent,
  type ConsoleKind,
  type ConsoleStatus,
} from "./ai-console-model"

export const KIND_ICON: Record<ConsoleKind, IconProps["name"]> = {
  prompt: "prompt",
  thinking: "brain",
  response: "bubble-5",
  tool: "task",
  file: "open-file",
  build: "code",
  terminal: "terminal",
  success: "circle-check",
  error: "circle-x",
  system: "settings-gear",
}

export const KIND_COLOR: Record<ConsoleKind, string> = {
  prompt: "text-sky-400",
  thinking: "text-purple-400",
  response: "text-blue-400",
  tool: "text-amber-400",
  file: "text-emerald-400",
  build: "text-yellow-500",
  terminal: "text-cyan-400",
  success: "text-green-500",
  error: "text-red-500",
  system: "text-text-weak",
}

export const STATUS_DOT: Record<ConsoleStatus, string> = {
  active: "bg-blue-500",
  success: "bg-green-500",
  error: "bg-red-500",
  neutral: "bg-text-weak",
}

const ROW_HEIGHT = 32

export function AIConsoleTimeline(props: {
  events: ConsoleEvent[]
  selected?: number
  follow: boolean
  onSelect: (id: number) => void
  onFollowChange: (follow: boolean) => void
  registerScrollTo?: (scroll: (id: number) => void) => void
}) {
  const [root, setRoot] = createSignal<HTMLDivElement>()

  const virtualizer = createVirtualizer<HTMLDivElement, HTMLDivElement>({
    get count() {
      return props.events.length
    },
    getScrollElement: () => virtualScrollElement(root()),
    initialRect: { width: 0, height: 400 },
    estimateSize: () => ROW_HEIGHT,
    overscan: 14,
    get getItemKey() {
      const events = props.events
      return (index: number) => events[index]?.id ?? index
    },
  })

  const virtualItemByKey = createMemo(
    () => new Map(virtualizer.getVirtualItems().map((item) => [item.key, item] as const)),
  )
  const virtualRowKeys = createMemo(() => virtualizer.getVirtualItems().map((item) => item.key))
  const eventByID = createMemo(() => new Map(props.events.map((event) => [event.id, event] as const)))

  createEffect(() => {
    const count = props.events.length
    if (!count || !props.follow) return
    queueMicrotask(() => {
      if (!props.follow) return
      virtualizer.scrollToIndex(count - 1, { align: "end" })
    })
  })

  onMount(() => {
    props.registerScrollTo?.((id) => {
      const index = props.events.findIndex((event) => event.id === id)
      if (index < 0) return
      virtualizer.scrollToIndex(index, { align: "center" })
    })
  })

  const onScroll = (event: Event) => {
    const el = event.currentTarget as HTMLDivElement
    const nearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 48
    if (nearBottom !== props.follow) props.onFollowChange(nearBottom)
  }

  return (
    <div class="scroll-view__viewport h-full overflow-y-auto overscroll-contain" onScroll={onScroll}>
      <Show
        when={props.events.length}
        fallback={
          <div class="flex h-full items-center justify-center px-6 text-center">
            <div>
              <div class="text-12-medium text-text-strong">No runtime activity</div>
              <div class="mt-1 text-11-regular text-text-weak">
                Prompts, thinking, tools, files, builds, and terminal events will stream here in real time.
              </div>
            </div>
          </div>
        }
      >
        <div
          ref={setRoot}
          data-component="ai-console-timeline"
          data-total-rows={props.events.length}
          style={{ position: "relative", height: `${virtualizer.getTotalSize()}px` }}
        >
          <For each={virtualRowKeys()}>
            {(key) => (
              <Show when={eventByID().get(key as number)}>
                {(event) => (
                  <Show when={virtualItemByKey().get(key)}>
                    {(item) => (
                      <div
                        style={{
                          position: "absolute",
                          top: "0",
                          left: "0",
                          width: "100%",
                          height: `${item().size}px`,
                          transform: `translateY(${item().start}px)`,
                        }}
                      >
                        <button
                          type="button"
                          data-selected={props.selected === event().id ? "" : undefined}
                          class={`grid h-full w-full grid-cols-[64px_10px_18px_minmax(0,1fr)_auto] items-center gap-2 border-l-2 px-3 text-left ${
                            props.selected === event().id
                              ? "border-blue-500 bg-background-weak"
                              : "border-transparent hover:bg-background-weak/60"
                          }`}
                          onClick={() => props.onSelect(event().id)}
                        >
                          <time class="text-10-regular tabular-nums text-text-weak">{eventTime(event().at)}</time>
                          <span
                            class={`h-1.5 w-1.5 justify-self-center rounded-full ${STATUS_DOT[event().status]} ${
                              event().status === "active" ? "animate-pulse" : ""
                            }`}
                          />
                          <Icon
                            name={KIND_ICON[event().kind]}
                            size="small"
                            class={`shrink-0 ${KIND_COLOR[event().kind]}`}
                          />
                          <span class="flex min-w-0 items-baseline gap-2">
                            <span class="max-w-[50%] shrink-0 truncate text-11-medium text-text-strong">
                              {event().title}
                            </span>
                            <Show when={event().detail}>
                              <span class="truncate text-11-regular text-text-weak">{event().detail}</span>
                            </Show>
                          </span>
                          <span class="flex shrink-0 items-center gap-1.5">
                            <Show when={event().count > 1}>
                              <span class="rounded bg-background-weak px-1 py-0.5 text-10-medium text-text-weak">
                                ×{event().count}
                              </span>
                            </Show>
                            <Show when={event().attempt}>
                              <span class="rounded bg-amber-500/15 px-1 py-0.5 text-10-medium text-amber-500">
                                retry {event().attempt}
                              </span>
                            </Show>
                            <Show when={event().duration !== undefined}>
                              <span class="rounded bg-background-weak px-1 py-0.5 text-10-medium text-text-weak">
                                {formatMs(event().duration!)}
                              </span>
                            </Show>
                            <Show when={event().tokens}>
                              <span class="rounded bg-background-weak px-1 py-0.5 text-10-medium text-text-weak">
                                {compactNumber(event().tokens!)} tok
                              </span>
                            </Show>
                          </span>
                        </button>
                      </div>
                    )}
                  </Show>
                )}
              </Show>
            )}
          </For>
        </div>
      </Show>
    </div>
  )
}
