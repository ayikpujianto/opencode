import { Show, For, createSignal, batch } from "solid-js"
import { Button } from "@opencode-ai/ui/button"
import { IconButton } from "@opencode-ai/ui/icon-button"
import { Icon } from "@opencode-ai/ui/icon"
import { Tooltip } from "@opencode-ai/ui/tooltip"
import { showToast } from "@/utils/toast"
import { useDialog } from "@opencode-ai/ui/context/dialog"
import type { OpencodeClient } from "@opencode-ai/sdk/v2/client"

interface ChangedFile {
  file: string
  additions: number
  deletions: number
  status: string
}

interface WorkspaceSourceControlProps {
  files: ChangedFile[]
  onCommit: () => void
  directory: string
  client: OpencodeClient
}

export function WorkspaceSourceControl(props: WorkspaceSourceControlProps) {
  const [stagedFiles, setStagedFiles] = createSignal<Set<string>>(new Set())
  const [commitMessage, setCommitMessage] = createSignal("")
  const [committing, setCommitting] = createSignal(false)
  const [pushing, setPushing] = createSignal(false)
  const dialog = useDialog()

  const toggleStage = async (file: string) => {
    const newStaged = new Set(stagedFiles())
    if (newStaged.has(file)) {
      newStaged.delete(file)
      try {
        await props.client.vcs.unstage({
          files: [file],
          directory: props.directory,
        })
      } catch (error) {
        showToast({ title: "Failed to unstage file", variant: "error" })
        return
      }
    } else {
      newStaged.add(file)
      try {
        await props.client.vcs.stage({
          files: [file],
          directory: props.directory,
        })
      } catch (error) {
        showToast({ title: "Failed to stage file", variant: "error" })
        return
      }
    }
    setStagedFiles(newStaged)
  }

  const stageAll = async () => {
    const allFiles = props.files.map((f) => f.file)
    try {
      await props.client.vcs.stage({
        files: allFiles,
        directory: props.directory,
      })
      setStagedFiles(new Set(allFiles))
      showToast({ title: "All files staged", variant: "success" })
    } catch (error) {
      showToast({ title: "Failed to stage files", variant: "error" })
    }
  }

  const unstageAll = async () => {
    try {
      await props.client.vcs.unstage({
        files: [...stagedFiles()],
        directory: props.directory,
      })
      setStagedFiles(new Set())
      showToast({ title: "All files unstaged", variant: "success" })
    } catch (error) {
      showToast({ title: "Failed to unstage files", variant: "error" })
    }
  }

  const commit = async () => {
    if (!commitMessage().trim()) {
      showToast({ title: "Commit message is required", variant: "error" })
      return
    }
    if (stagedFiles().size === 0) {
      showToast({ title: "No files staged", variant: "error" })
      return
    }

    setCommitting(true)
    try {
      const result = await props.client.vcs.commit({
        message: commitMessage(),
        directory: props.directory,
      })
      if (result.data) {
        showToast({ title: `Committed: ${result.data.hash.slice(0, 7)}`, variant: "success" })
        setCommitMessage("")
        setStagedFiles(new Set())
        props.onCommit()
      }
    } catch (error) {
      showToast({ title: "Failed to create commit", variant: "error" })
    } finally {
      setCommitting(false)
    }
  }

  const push = async () => {
    setPushing(true)
    try {
      const result = await props.client.vcs.push({
        directory: props.directory,
      })
      if (result.data) {
        showToast({ title: "Pushed successfully", variant: "success" })
      }
    } catch (error) {
      showToast({ title: "Failed to push", variant: "error" })
    } finally {
      setPushing(false)
    }
  }

  return (
    <div class="flex flex-col overflow-hidden">
      <div class="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <Icon name="git-commit" class="h-4 w-4 text-zinc-400" />
        <span class="text-sm font-medium text-zinc-300">Source Control</span>
      </div>

      {/* Staged Files */}
      <div class="border-b border-zinc-800">
        <div class="flex items-center justify-between px-3 py-2">
          <span class="text-xs font-medium text-zinc-400">
            Staged ({stagedFiles().size})
          </span>
          <div class="flex gap-1">
            <Tooltip content="Stage all files">
              <IconButton
                icon={<Icon name="plus" class="h-3.5 w-3.5" />}
                onClick={stageAll}
                variant="ghost"
                size="small"
              />
            </Tooltip>
            <Tooltip content="Unstage all files">
              <IconButton
                icon={<Icon name="minus" class="h-3.5 w-3.5" />}
                onClick={unstageAll}
                variant="ghost"
                size="small"
                disabled={stagedFiles().size === 0}
              />
            </Tooltip>
          </div>
        </div>

        <div class="max-h-[150px] overflow-y-auto">
          <Show
            when={stagedFiles().size > 0}
            fallback={
              <div class="px-3 py-2 text-xs text-zinc-500">No staged files</div>
            }
          >
            <For each={[...stagedFiles()]}>
              {(file) => (
                <div class="flex items-center gap-2 px-3 py-1 hover:bg-zinc-800/50">
                  <Icon name="check" class="h-3 w-3 text-green-400" />
                  <span class="flex-1 truncate text-xs text-zinc-300">{file}</span>
                  <IconButton
                    icon={<Icon name="x" class="h-3 w-3" />}
                    onClick={() => toggleStage(file)}
                    variant="ghost"
                    size="small"
                  />
                </div>
              )}
            </For>
          </Show>
        </div>
      </div>

      {/* Unstaged Files */}
      <div class="border-b border-zinc-800">
        <div class="flex items-center justify-between px-3 py-2">
          <span class="text-xs font-medium text-zinc-400">
            Changes ({props.files.length - stagedFiles().size})
          </span>
        </div>

        <div class="max-h-[150px] overflow-y-auto">
          <Show
            when={props.files.length - stagedFiles().size > 0}
            fallback={
              <div class="px-3 py-2 text-xs text-zinc-500">No unstaged changes</div>
            }
          >
            <For each={props.files.filter((f) => !stagedFiles().has(f.file))}>
              {(file) => (
                <div class="flex items-center gap-2 px-3 py-1 hover:bg-zinc-800/50">
                  <Icon name="minus" class="h-3 w-3 text-zinc-400" />
                  <span class="flex-1 truncate text-xs text-zinc-300">{file.file}</span>
                  <IconButton
                    icon={<Icon name="plus" class="h-3 w-3" />}
                    onClick={() => toggleStage(file.file)}
                    variant="ghost"
                    size="small"
                  />
                </div>
              )}
            </For>
          </Show>
        </div>
      </div>

      {/* Commit Message + Actions */}
      <div class="p-3">
        <textarea
          class="w-full resize-none rounded border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 placeholder-zinc-500 focus:border-blue-500 focus:outline-none"
          placeholder="Commit message..."
          rows={2}
          value={commitMessage()}
          onInput={(e) => setCommitMessage(e.currentTarget.value)}
        />

        <div class="mt-2 flex gap-2">
          <Button
            variant="primary"
            size="small"
            onClick={commit}
            disabled={committing() || stagedFiles().size === 0 || !commitMessage().trim()}
            class="flex-1"
          >
            <Show when={!committing()} fallback={<span>Committing...</span>}>
              <Icon name="git-commit" class="mr-1 h-3.5 w-3.5" />
              Commit
            </Show>
          </Button>

          <Button
            variant="secondary"
            size="small"
            onClick={push}
            disabled={pushing()}
          >
            <Show when={!pushing()} fallback={<span>Pushing...</span>}>
              <Icon name="upload" class="mr-1 h-3.5 w-3.5" />
              Push
            </Show>
          </Button>
        </div>
      </div>
    </div>
  )
}
