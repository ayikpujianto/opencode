import { Show, createSignal } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"

interface PushDialogProps {
  isOpen: boolean
  loading: boolean
  onPush: () => void
  onClose: () => void
}

export function PushDialog(props: PushDialogProps) {
  const [confirmPush, setConfirmPush] = createSignal(false)

  const handlePush = () => {
    if (!confirmPush()) return
    props.onPush()
    setConfirmPush(false)
  }

  const handleClose = () => {
    setConfirmPush(false)
    props.onClose()
  }

  return (
    <Show when={props.isOpen}>
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="w-full max-w-md rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Header */}
          <div class="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <div class="flex items-center gap-2">
              <Icon name="cloud-upload" class="h-5 w-5 text-zinc-400" />
              <h2 class="text-lg font-medium text-zinc-300">Push Changes</h2>
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
            <div class="rounded-lg border border-zinc-800 bg-zinc-950 p-4">
              <div class="flex items-start gap-3">
                <Icon name="warning" class="mt-0.5 h-5 w-5 flex-shrink-0 text-yellow-400" />
                <div>
                  <h3 class="text-sm font-medium text-zinc-300">Push to Remote</h3>
                  <p class="mt-1 text-sm text-zinc-500">
                    This will push your local commits to the remote repository. Make sure you have reviewed all changes before pushing.
                  </p>
                </div>
              </div>
            </div>

            {/* Confirm Checkbox */}
            <div class="flex items-center gap-2">
              <input
                type="checkbox"
                id="confirm-push"
                checked={confirmPush()}
                onChange={(e) => setConfirmPush(e.currentTarget.checked)}
                class="h-4 w-4 rounded border-zinc-600 bg-zinc-800 text-green-500 focus:ring-green-500"
              />
              <label for="confirm-push" class="text-sm text-zinc-400">
                I have reviewed all changes and want to push
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
              icon="cloud-upload"
              onClick={handlePush}
              variant="primary"
              size="small"
              disabled={!confirmPush() || props.loading}
            >
              {props.loading ? "Pushing..." : "Push"}
            </IconButton>
          </div>
        </div>
      </div>
    </Show>
  )
}
