import { Show, For, createSignal } from "solid-js"
import { IconButton } from "@opencode-ai/ui/icon-button"
import type { ReviewChecklistItem } from "./patch-review"

interface ReviewChecklistProps {
  items: ReviewChecklistItem[]
  loading: boolean
  onUpdate: (items: ReviewChecklistItem[]) => void
}

export function ReviewChecklist(props: ReviewChecklistProps) {
  const [newItem, setNewItem] = createSignal("")

  const addItem = () => {
    const text = newItem().trim()
    if (!text) return

    const item: ReviewChecklistItem = {
      id: crypto.randomUUID(),
      text,
      checked: false,
      required: false,
    }

    props.onUpdate([...props.items, item])
    setNewItem("")
  }

  const toggleItem = (id: string) => {
    const updated = props.items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    props.onUpdate(updated)
  }

  const removeItem = (id: string) => {
    props.onUpdate(props.items.filter((item) => item.id !== id))
  }

  const toggleRequired = (id: string) => {
    const updated = props.items.map((item) =>
      item.id === id ? { ...item, required: !item.required } : item
    )
    props.onUpdate(updated)
  }

  const completedCount = () => props.items.filter((item) => item.checked).length
  const requiredCount = () => props.items.filter((item) => item.required).length
  const requiredCompleted = () =>
    props.items.filter((item) => item.required && item.checked).length

  return (
    <div class="space-y-4">
      {/* Progress */}
      <Show when={!props.loading}>
        <div class="flex items-center justify-between text-sm">
          <span class="text-zinc-400">
            {completedCount()}/{props.items.length} completed
          </span>
          <Show when={requiredCount() > 0}>
            <span class="text-zinc-500">
              {requiredCount()} required ({requiredCompleted()}/{requiredCount()})
            </span>
          </Show>
        </div>
        <div class="h-1.5 w-full overflow-hidden rounded-full bg-zinc-800">
          <div
            class="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{
              width: `${props.items.length > 0 ? (completedCount() / props.items.length) * 100 : 0}%`,
            }}
          />
        </div>
      </Show>

      {/* Checklist Items */}
      <Show when={!props.loading}>
        <div class="space-y-2">
          <For each={props.items}>
            {(item) => (
              <div class="flex items-start gap-2 rounded-lg border border-zinc-800 bg-zinc-900 p-3">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(item.id)}
                  class="mt-0.5 h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-green-500 focus:ring-green-500"
                />
                <div class="flex-1">
                  <p
                    class={`text-sm ${item.checked ? "text-zinc-500 line-through" : "text-zinc-300"}`}
                  >
                    {item.text}
                  </p>
                </div>
                <div class="flex items-center gap-1">
                  <IconButton
                    icon="check"
                    onClick={() => toggleRequired(item.id)}
                    variant={item.required ? "primary" : "ghost"}
                    size="small"
                  />
                  <IconButton
                    icon="trash"
                    onClick={() => removeItem(item.id)}
                    variant="ghost"
                    size="small"
                  />
                </div>
              </div>
            )}
          </For>
        </div>
      </Show>

      {/* Add New Item */}
      <Show when={!props.loading}>
        <div class="flex gap-2">
          <input
            type="text"
            value={newItem()}
            onInput={(e) => setNewItem(e.currentTarget.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addItem()
            }}
            placeholder="Add checklist item..."
            class="flex-1 rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
          />
<IconButton
              icon="plus"
              onClick={addItem}
              variant="primary"
              size="small"
            />
        </div>
      </Show>

      {/* Loading State */}
      <Show when={props.loading}>
        <div class="space-y-2">
          <div class="h-12 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-12 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-12 animate-pulse rounded-lg bg-zinc-800" />
        </div>
      </Show>
    </div>
  )
}
