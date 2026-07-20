import { Show, For, createSignal, createEffect, onCleanup, batch } from "solid-js"
import { useParams } from "@solidjs/router"
import { useSDK } from "@/context/sdk"
import { decode64 } from "@/utils/base64"
import { showToast } from "@/utils/toast"
import { WorkspaceHeader } from "./workspace-header"
import { WorkspaceChangedFiles } from "./workspace-changed-files"
import { WorkspaceTaskActivity } from "./workspace-task-activity"
import { WorkspaceSourceControl } from "./workspace-source-control"

export function WorkspacePage() {
  const params = useParams<{ dir: string }>()
  const directory = () => decode64(params.dir)
  const sdk = useSDK()

  const [repositoryInfo, setRepositoryInfo] = createSignal<{
    branch?: string
    defaultBranch?: string
    status: Array<{ file: string; additions: number; deletions: number; status: string }>
    lastCommit?: { hash: string; subject: string; date: string }
    isGit: boolean
  } | null>(null)
  const [loading, setLoading] = createSignal(true)
  const [refreshing, setRefreshing] = createSignal(false)

  const fetchRepositoryInfo = async () => {
    try {
      const result = await sdk().client.vcs.repository({
        directory: directory(),
      })
      if (result.data) {
        setRepositoryInfo(result.data)
      }
    } catch (error) {
      console.error("Failed to fetch repository info:", error)
    } finally {
      setLoading(false)
    }
  }

  const refresh = async () => {
    setRefreshing(true)
    try {
      await fetchRepositoryInfo()
    } finally {
      setRefreshing(false)
    }
  }

  createEffect(() => {
    fetchRepositoryInfo()
  })

  // Refresh on VCS events
  createEffect(() => {
    const unsubscribe = sdk().event.listen((evt) => {
      if (evt.details.type === "vcs.branch.updated") {
        fetchRepositoryInfo()
      }
    })
    onCleanup(unsubscribe)
  })

  return (
    <div class="flex h-full flex-col overflow-hidden">
      <Show when={!loading()} fallback={<WorkspaceLoadingSkeleton />}>
        <Show when={repositoryInfo()?.isGit} fallback={<NotAGitRepository />}>
          <div class="flex flex-1 flex-col overflow-hidden">
            <WorkspaceHeader
              branch={repositoryInfo()?.branch}
              defaultBranch={repositoryInfo()?.defaultBranch}
              lastCommit={repositoryInfo()?.lastCommit}
              statusCount={repositoryInfo()?.status.length ?? 0}
              onRefresh={refresh}
              refreshing={refreshing()}
            />

            <div class="flex flex-1 overflow-hidden">
              {/* Changed Files Panel */}
              <div class="flex w-1/2 flex-col border-r border-zinc-800">
                <WorkspaceChangedFiles
                  files={repositoryInfo()?.status ?? []}
                  onRefresh={refresh}
                  directory={directory() ?? ""}
                  client={sdk().client}
                />
              </div>

              {/* Right Column: Task Activity + Source Control */}
              <div class="flex w-1/2 flex-col overflow-hidden">
                <WorkspaceTaskActivity directory={directory() ?? ""} client={sdk().client} />

                <WorkspaceSourceControl
                  files={repositoryInfo()?.status ?? []}
                  onCommit={refresh}
                  directory={directory() ?? ""}
                  client={sdk().client}
                />
              </div>
            </div>
          </div>
        </Show>
      </Show>
    </div>
  )
}

function WorkspaceLoadingSkeleton() {
  return (
    <div class="flex h-full items-center justify-center">
      <div class="text-zinc-400">Loading repository...</div>
    </div>
  )
}

function NotAGitRepository() {
  return (
    <div class="flex h-full items-center justify-center">
      <div class="text-center">
        <div class="text-lg font-medium text-zinc-300">Not a Git repository</div>
        <div class="mt-1 text-sm text-zinc-500">This directory is not a git repository.</div>
      </div>
    </div>
  )
}
