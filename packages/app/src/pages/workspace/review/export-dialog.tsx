import { Show, For, createSignal } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"

interface ExportDialogProps {
  isOpen: boolean
  loading: boolean
  onExport: (format: "json" | "text" | "html") => void
  onClose: () => void
}

export function ExportDialog(props: ExportDialogProps) {
  const [selectedFormat, setSelectedFormat] = createSignal<"json" | "text" | "html">("json")

  const handleExport = () => {
    props.onExport(selectedFormat())
  }

  const handleClose = () => {
    setSelectedFormat("json")
    props.onClose()
  }

  const formats = [
    {
      id: "json" as const,
      name: "JSON",
      description: "Structured data format, ideal for programmatic use",
      icon: "code" as const,
    },
    {
      id: "text" as const,
      name: "Plain Text",
      description: "Simple text format, easy to read and share",
      icon: "file-tree" as const,
    },
    {
      id: "html" as const,
      name: "HTML",
      description: "Formatted document with styling, ready for sharing",
      icon: "review" as const,
    },
  ]

  return (
    <Show when={props.isOpen}>
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div class="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl">
          {/* Header */}
          <div class="flex items-center justify-between border-b border-zinc-800 px-4 py-3">
            <div class="flex items-center gap-2">
              <Icon name="download" class="h-5 w-5 text-zinc-400" />
              <h2 class="text-lg font-medium text-zinc-300">Export Review</h2>
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
            <p class="text-sm text-zinc-500">
              Choose a format to export your review report and analysis.
            </p>

            {/* Format Selection */}
            <div class="space-y-2">
              <For each={formats}>
                {(format) => (
                  <div
                    class={`cursor-pointer rounded-lg border p-3 transition-colors ${
                      selectedFormat() === format.id
                        ? "border-green-500 bg-green-500/10"
                        : "border-zinc-800 bg-zinc-950 hover:border-zinc-700"
                    }`}
                    onClick={() => setSelectedFormat(format.id)}
                  >
                    <div class="flex items-center gap-3">
                      <Icon name={format.icon} class="h-5 w-5 text-zinc-400" />
                      <div>
                        <h3 class="text-sm font-medium text-zinc-300">{format.name}</h3>
                        <p class="text-xs text-zinc-500">{format.description}</p>
                      </div>
                    </div>
                  </div>
                )}
              </For>
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
              icon="download"
              onClick={handleExport}
              variant="primary"
              size="small"
              disabled={props.loading}
            >
              {props.loading ? "Exporting..." : "Export"}
            </IconButton>
          </div>
        </div>
      </div>
    </Show>
  )
}
