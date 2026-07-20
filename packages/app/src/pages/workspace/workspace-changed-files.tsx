import { Show, For, createSignal, createResource, batch } from "solid-js"
import { IconButton } from "@opencode-ai/ui/icon-button"
import { Icon } from "@opencode-ai/ui/icon"
import { Tooltip } from "@opencode-ai/ui/tooltip"
import { showToast } from "@/utils/toast"
import type { OpencodeClient } from "@opencode-ai/sdk/v2/client"

interface ChangedFile {
  file: string
  additions: number
  deletions: number
  status: string
}

interface WorkspaceChangedFilesProps {
  files: ChangedFile[]
  onRefresh: () => void
  directory: string
  client: OpencodeClient
}

export function WorkspaceChangedFiles(props: WorkspaceChangedFilesProps) {
  const [selectedFile, setSelectedFile] = createSignal<string | null>(null)
  const [diffContent, setDiffContent] = createSignal<string | null>(null)
  const [loadingDiff, setLoadingDiff] = createSignal(false)

  const loadDiff = async (file: string) => {
    setSelectedFile(file)
    setLoadingDiff(true)
    try {
      const result = await props.client.vcs.diff(
        { mode: "git", directory: props.directory },
        { headers: { "Content-Type": "application/json" } },
      )
      if (result.data) {
        const fileDiff = result.data.find((d) => d.file === file)
        setDiffContent(fileDiff?.patch ?? null)
      }
    } catch (error) {
      showToast({ title: "Failed to load diff", variant: "error" })
    } finally {
      setLoadingDiff(false)
    }
  }

  const statusIcon = (status: string) => {
    switch (status) {
      case "added":
        return <Icon name="plus" class="h-3.5 w-3.5 text-green-400" />
      case "deleted":
        return <Icon name="minus" class="h-3.5 w-3.5 text-red-400" />
      case "modified":
        return <Icon name="pencil" class="h-3.5 w-3.5 text-amber-400" />
      default:
        return <Icon name="file" class="h-3.5 w-3.5 text-zinc-400" />
    }
  }

  const statusColor = (status: string) => {
    switch (status) {
      case "added":
        return "text-green-400"
      case "deleted":
        return "text-red-400"
      case "modified":
        return "text-amber-400"
      default:
        return "text-zinc-400"
    }
  }

  return (
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
        <div class="flex items-center gap-2">
          <Icon name="file-text" class="h-4 w-4 text-zinc-400" />
          <span class="text-sm font-medium text-zinc-300">
            Changed Files ({props.files.length})
          </span>
        </div>
        <Tooltip content="Refresh files">
          <IconButton
            icon={<Icon name="refresh" class="h-3.5 w-3.5" />}
            onClick={props.onRefresh}
            variant="ghost"
            size="small"
          />
        </Tooltip>
      </div>

      <div class="flex-1 overflow-y-auto">
        <Show
          when={props.files.length > 0}
          fallback={
            <div class="flex h-full items-center justify-center">
              <div class="text-center text-zinc-500">
                <Icon name="check" class="mx-auto h-8 w-8 text-green-500" />
                <div class="mt-2 text-sm">Working tree clean</div>
              </div>
            </div>
          }
        >
          <For each={props.files}>
            {(file) => (
              <div
                class={`flex cursor-pointer items-center gap-2 border-b border-zinc-800/50 px-3 py-2 hover:bg-zinc-800/50 ${
                  selectedFile() === file.file ? "bg-zinc-800" : ""
                }`}
                onClick={() => loadDiff(file.file)}
              >
                {statusIcon(file.status)}
                <span class="flex-1 truncate text-sm text-zinc-300">{file.file}</span>
                <span class={`text-xs ${statusColor(file.status)}`}>
                  +{file.additions} -{file.deletions}
                </span>
              </div>
            )}
          </For>
        </Show>
      </div>

      {/* Diff Preview */}
      <Show when={selectedFile()}>
        <div class="border-t border-zinc-800">
          <div class="flex items-center justify-between bg-zinc-900 px-3 py-2">
            <span class="text-xs font-medium text-zinc-400">{selectedFile()}</span>
            <IconButton
              icon={<Icon name="x" class="h-3.5 w-3.5" />}
              onClick={() => {
                setSelectedFile(null)
                setDiffContent(null)
              }}
              variant="ghost"
              size="small"
            />
          </div>
          <div class="max-h-[300px] overflow-y-auto bg-zinc-950 p-3">
            <Show
              when={!loadingDiff()}
              fallback={<div class="text-xs text-zinc-500">Loading diff...</div>}
            >
              <Show
                when={diffContent()}
                fallback={<div class="text-xs text-zinc-500">No diff available</div>}
              >
                <pre class="whitespace-pre-wrap font-mono text-xs text-zinc-300">{diffContent()}</pre>
              </Show>
            </Show>
          </div>
        </div>
      </Show>
    </div>
  )
}
