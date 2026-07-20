import { Show } from "solid-js"
import { IconButton } from "@opencode-ai/ui/icon-button"
import { Icon } from "@opencode-ai/ui/icon"
import { Tooltip } from "@opencode-ai/ui/tooltip"

interface WorkspaceHeaderProps {
  branch: string | undefined
  defaultBranch: string | undefined
  lastCommit: { hash: string; subject: string; date: string } | undefined
  statusCount: number
  onRefresh: () => void
  refreshing: boolean
}

export function WorkspaceHeader(props: WorkspaceHeaderProps) {
  const isDirty = () => props.statusCount > 0
  const isOnDefaultBranch = () => props.branch === props.defaultBranch

  return (
    <div class="flex items-center justify-between border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
      <div class="flex items-center gap-3">
        {/* Branch info */}
        <div class="flex items-center gap-2">
          <Icon name="branch" class="h-4 w-4 text-zinc-400" />
          <span class="text-sm font-medium text-zinc-200">{props.branch ?? "detached"}</span>
          <Show when={isDirty()}>
            <span class="rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-medium text-amber-400">
              {props.statusCount} changed
            </span>
          </Show>
          <Show when={isOnDefaultBranch()}>
            <span class="rounded-full bg-zinc-700 px-2 py-0.5 text-xs text-zinc-400">default</span>
          </Show>
        </div>

        {/* Last commit */}
        <Show when={props.lastCommit}>
          <div class="flex items-center gap-2 text-xs text-zinc-500">
            <span class="font-mono">{props.lastCommit!.hash.slice(0, 7)}</span>
            <span>·</span>
            <span class="max-w-[300px] truncate">{props.lastCommit!.subject}</span>
          </div>
        </Show>
      </div>

      <div class="flex items-center gap-2">
        <Tooltip value="Refresh repository status">
          <IconButton
            icon={<Icon name="reset" class={`h-4 w-4 ${props.refreshing ? "animate-spin" : ""}`} />}
            onClick={props.onRefresh}
            variant="ghost"
            size="small"
            disabled={props.refreshing}
          />
        </Tooltip>
      </div>
    </div>
  )
}
