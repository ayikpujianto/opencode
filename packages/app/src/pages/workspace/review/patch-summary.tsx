import { Show, createMemo } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import type { PatchReviewData } from "./patch-review"

interface PatchSummaryProps {
  data: PatchReviewData
  onRefresh: () => void
}

export function PatchSummary(props: PatchSummaryProps) {
  const stats = createMemo(() => {
    const files = props.data.status
    return {
      total: files.length,
      added: files.filter((f) => f.status === "added").length,
      modified: files.filter((f) => f.status === "modified").length,
      deleted: files.filter((f) => f.status === "deleted").length,
      renamed: files.filter((f) => f.status === "renamed").length,
      insertions: files.reduce((sum, f) => sum + f.additions, 0),
      deletions: files.reduce((sum, f) => sum + f.deletions, 0),
    }
  })

  const formatDuration = (started: string, finished: string) => {
    if (!started || !finished) return "N/A"
    const start = new Date(started)
    const end = new Date(finished)
    const diffMs = end.getTime() - start.getTime()
    const mins = Math.floor(diffMs / 60000)
    const secs = Math.floor((diffMs % 60000) / 1000)
    if (mins > 0) return `${mins}m ${secs}s`
    return `${secs}s`
  }

  return (
    <div class="border-b border-zinc-800 bg-zinc-900/50 px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-4">
          {/* Branch */}
          <div class="flex items-center gap-2">
            <Icon name="branch" class="h-4 w-4 text-zinc-400" />
            <span class="text-sm font-medium text-zinc-200">{props.data.branch ?? "detached"}</span>
          </div>

          {/* Session Info */}
          <Show when={props.data.session}>
            <div class="flex items-center gap-2 text-xs text-zinc-500">
              <span>·</span>
              <span>{props.data.session!.title}</span>
              <span>·</span>
              <span>{props.data.session!.agent}</span>
              <span>·</span>
              <span>{props.data.session!.model}</span>
            </div>
          </Show>

          {/* Timing */}
          <Show when={props.data.session?.startedAt && props.data.session?.finishedAt}>
            <div class="text-xs text-zinc-500">
              {formatDuration(props.data.session!.startedAt, props.data.session!.finishedAt)}
            </div>
          </Show>
        </div>

        {/* Stats */}
        <div class="flex items-center gap-3">
          <div class="flex items-center gap-1 text-xs">
            <span class="text-zinc-500">Files:</span>
            <span class="font-medium text-zinc-300">{stats().total}</span>
          </div>
          <Show when={stats().added > 0}>
            <span class="text-xs text-green-400">+{stats().added} added</span>
          </Show>
          <Show when={stats().modified > 0}>
            <span class="text-xs text-amber-400">{stats().modified} modified</span>
          </Show>
          <Show when={stats().deleted > 0}>
            <span class="text-xs text-red-400">-{stats().deleted} deleted</span>
          </Show>
          <div class="flex items-center gap-1 text-xs">
            <span class="text-green-400">+{stats().insertions}</span>
            <span class="text-red-400">-{stats().deletions}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
