import { Show, For, createSignal, createEffect, onCleanup, createResource } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import type { OpencodeClient } from "@opencode-ai/sdk/v2/client"

interface WorkspaceTaskActivityProps {
  directory: string
  client: OpencodeClient
}

interface SessionInfo {
  id: string
  title: string
  status: string
  agent: string
  updatedAt: string
}

export function WorkspaceTaskActivity(props: WorkspaceTaskActivityProps) {
  const [sessions, setSessions] = createSignal<SessionInfo[]>([])

  const fetchSessions = async () => {
    try {
      const result = await props.client.session.list({
        directory: props.directory,
      })
      if (result.data) {
        const recentSessions = result.data
          .sort((a, b) => {
            const aTime = a.updatedAt ? new Date(a.updatedAt).getTime() : 0
            const bTime = b.updatedAt ? new Date(b.updatedAt).getTime() : 0
            return bTime - aTime
          })
          .slice(0, 5)
          .map((s) => ({
            id: s.id,
            title: s.title ?? "Untitled",
            status: s.status?.type ?? "unknown",
            agent: s.agent ?? "default",
            updatedAt: s.updatedAt ?? "",
          }))
        setSessions(recentSessions)
      }
    } catch (error) {
      console.error("Failed to fetch sessions:", error)
    }
  }

  createEffect(() => {
    fetchSessions()
  })

  const statusIcon = (status: string) => {
    switch (status) {
      case "running":
        return <Icon name="loader" class="h-3.5 w-3.5 animate-spin text-blue-400" />
      case "completed":
        return <Icon name="check" class="h-3.5 w-3.5 text-green-400" />
      case "failed":
        return <Icon name="x" class="h-3.5 w-3.5 text-red-400" />
      default:
        return <Icon name="clock" class="h-3.5 w-3.5 text-zinc-400" />
    }
  }

  const statusColor = (status: string) => {
    switch (status) {
      case "running":
        return "text-blue-400"
      case "completed":
        return "text-green-400"
      case "failed":
        return "text-red-400"
      default:
        return "text-zinc-400"
    }
  }

  const formatTime = (dateStr: string) => {
    if (!dateStr) return ""
    const date = new Date(dateStr)
    const now = new Date()
    const diffMs = now.getTime() - date.getTime()
    const diffMins = Math.floor(diffMs / 60000)
    if (diffMins < 1) return "just now"
    if (diffMins < 60) return `${diffMins}m ago`
    const diffHours = Math.floor(diffMins / 60)
    if (diffHours < 24) return `${diffHours}h ago`
    const diffDays = Math.floor(diffHours / 24)
    return `${diffDays}d ago`
  }

  return (
    <div class="flex flex-1 flex-col overflow-hidden border-b border-zinc-800">
      <div class="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <Icon name="activity" class="h-4 w-4 text-zinc-400" />
        <span class="text-sm font-medium text-zinc-300">Recent Activity</span>
      </div>

      <div class="flex-1 overflow-y-auto">
        <Show
          when={sessions().length > 0}
          fallback={
            <div class="flex h-full items-center justify-center">
              <div class="text-center text-zinc-500">
                <Icon name="inbox" class="mx-auto h-6 w-6" />
                <div class="mt-2 text-xs">No recent sessions</div>
              </div>
            </div>
          }
        >
          <For each={sessions()}>
            {(session) => (
              <div class="flex items-center gap-2 border-b border-zinc-800/50 px-3 py-2 hover:bg-zinc-800/50">
                {statusIcon(session.status)}
                <div class="flex-1 overflow-hidden">
                  <div class="truncate text-sm text-zinc-300">{session.title}</div>
                  <div class="flex items-center gap-2 text-xs text-zinc-500">
                    <span>{session.agent}</span>
                    <span>·</span>
                    <span class={statusColor(session.status)}>{session.status}</span>
                  </div>
                </div>
                <span class="text-xs text-zinc-600">{formatTime(session.updatedAt)}</span>
              </div>
            )}
          </For>
        </Show>
      </div>
    </div>
  )
}
