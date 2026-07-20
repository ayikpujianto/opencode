import { Show, createSignal, For } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"

interface CommitDialogProps {
  isOpen: boolean
  stagedFiles: string[]
  loading: boolean
  onCommit: (message: string) => void
  onClose: () => void
}

export function CommitDialog(props: CommitDialogProps) {
  const [message, setMessage] = createSignal("")
  const [extendMessage, setExtendMessage] = createSignal(false)

  const handleSubmit = () => {
    const text = message().trim()
    if (!text) return
    props.onCommit(text)
    setMessage("")
    setExtendMessage(false)
  }

  const handleClose = () => {
    setMessage("")
    setExtendMessage(false)
    props.onClose()
  }

  return (
    <Show when={props.isOpen}>
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Header */}
          <div class="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <div class="flex items-center gap-2">
              <Icon name="code" class="h-5 w-5 text-zinc-400" />
              <h2 class="text-lg font-medium text-zinc-300">Commit Changes</h2>
            </div>
            <IconButton
              icon="close"
              onClick={handleClose}
              variant="ghost"
              size="small"
            />
          </div>

          {/* Content */}
          <div class="space-y-4 p-4">
            {/* Staged Files */}
            <div>
              <h3 class="mb-2 text-sm font-medium text-zinc-400">
                Staged Files ({props.stagedFiles.length})
              </h3>
              <div class="max-h-40 overflow-y-auto rounded-lg border border-zinc-800 bg-zinc-950 p-2">
                <Show
                  when={props.stagedFiles.length > 0}
                  fallback={
                    <p class="text-center text-sm text-zinc-600">No files staged</p>
                  }
                >
                  <For each={props.stagedFiles}>
                    {(file) => (
                      <div class="flex items-center gap-2 py-1">
                        <Icon name="file-tree" class="h-3 w-3 text-zinc-500" />
                        <span class="text-xs text-zinc-400">{file}</span>
                      </div>
                    )}
                  </For>
                </Show>
              </div>
            </div>

            {/* Commit Message */}
            <div>
              <h3 class="mb-2 text-sm font-medium text-zinc-400">Commit Message</h3>
              <textarea
                value={message()}
                onInput={(e) => setMessage(e.currentTarget.value)}
                placeholder="Describe your changes..."
                class="h-32 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-3 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
              />
            </div>

            {/* Options */}
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="extend-message"
                checked={extendMessage()}
                onChange={(e) => setExtendMessage(e.currentTarget.checked)}
                class="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-green-500 focus:ring-green-500"
              />
              <label for="extend-message" class="text-sm text-zinc-400">
                Extend commit message
              </label>
            </div>
          </div>

          {/* Footer */}
          <div class="flex justify-end gap-2 border-t border-zinc-800 px-4 py-3">
            <IconButton
              icon="close"
              onClick={handleClose}
              variant="ghost"
              size="small"
            >
              Cancel
            </IconButton>
            <IconButton
              icon="code"
              onClick={handleSubmit}
              variant="primary"
              size="small"
              disabled={!message().trim() || props.stagedFiles.length === 0 || props.loading}
            >
              {props.loading ? "Committing..." : "Commit"}
            </IconButton>
          </div>
        </div>
      </div>
    </Show>
  )
}
