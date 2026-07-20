import { Show, createSignal, createEffect, createMemo, onCleanup } from "solid-js"
import { useSDK } from "@/context/sdk"
import { showToast } from "@/utils/toast"
import { PatchSummary } from "./patch-summary"
import { QualitySummary } from "./quality-summary"
import { ChangedFilesTree } from "./changed-files-tree"
import { DiffViewer } from "./diff-viewer"
import { PatchInsights } from "./patch-insights"
import { ReviewChecklist } from "./review-checklist"
import { ReviewApprovalPanel } from "./review-approval"
import { CommitDialog } from "./commit-dialog"
import { PushDialog } from "./push-dialog"
import { ExportDialog } from "./export-dialog"

export interface ChangedFile {
  file: string
  additions: number
  deletions: number
  status: string
}

export interface PatchReviewData {
  branch?: string
  defaultBranch?: string
  status: ChangedFile[]
  lastCommit?: { hash: string; subject: string; date: string }
  isGit: boolean
  session?: {
    id: string
    title: string
    agent: string
    model: string
    startedAt: string
    finishedAt: string
  }
}

export interface ReviewInsights {
  riskLevel: "low" | "medium" | "high"
  riskSummary: string
  impactSummary: {
    filesChanged: number
    additions: number
    deletions: number
    totalLines: number
  }
  fileCategories: { category: string; count: number }[]
  keyChanges: string[]
}

export interface QualitySummary {
  score: number
  summary: string
}

export interface ReviewChecklistItem {
  id: string
  text: string
  checked: boolean
  required: boolean
}

export interface ReviewApproval {
  status: "pending" | "approved" | "rejected"
  reviewer: string
  reviewedAt: string
  comment?: string
}

export function PatchReviewPage() {
  const sdk = useSDK()

  const [reviewData, setReviewData] = createSignal<PatchReviewData | null>(null)
  const [loading, setLoading] = createSignal(true)
  const [selectedFile, setSelectedFile] = createSignal<string | null>(null)
  const [diffMode, setDiffMode] = createSignal<"unified" | "split">("unified")
  const [diffs, setDiffs] = createSignal<Map<string, string>>(new Map())
  const [loadingDiffs, setLoadingDiffs] = createSignal(false)

  // Dialog states
  const [showCommitDialog, setShowCommitDialog] = createSignal(false)
  const [showPushDialog, setShowPushDialog] = createSignal(false)
  const [showExportDialog, setShowExportDialog] = createSignal(false)

  // Review state
  const [checklist, setChecklist] = createSignal<ReviewChecklistItem[]>([])
  const [approval, setApproval] = createSignal<ReviewApproval>({
    status: "pending",
    reviewer: "User",
    reviewedAt: new Date().toISOString(),
  })
  const [insights] = createSignal<ReviewInsights | null>(null)
  const [quality] = createSignal<QualitySummary | null>(null)

  const fetchReviewData = async () => {
    try {
      const result = await sdk().client.vcs.repository({
        directory: sdk().directory,
      })
      if (result.data) {
        setReviewData({
          ...result.data,
          session: undefined,
        })
      }
    } catch (error) {
      console.error("Failed to fetch review data:", error)
    } finally {
      setLoading(false)
    }
  }

  const loadDiff = async (file: string) => {
    setSelectedFile(file)
    if (diffs().has(file)) return

    setLoadingDiffs(true)
    try {
      const result = await sdk().client.vcs.diff(
        { mode: "git", directory: sdk().directory },
        { headers: { "Content-Type": "application/json" } },
      )
      if (result.data) {
        const newDiffs = new Map(diffs())
        for (const d of result.data) {
          if (d.patch) {
            newDiffs.set(d.file, d.patch)
          }
        }
        setDiffs(newDiffs)
      }
    } catch (_error) {
      showToast({ title: "Failed to load diff", variant: "error" })
    } finally {
      setLoadingDiffs(false)
    }
  }

  const refresh = async () => {
    setLoading(true)
    await fetchReviewData()
  }

  const updateChecklist = (items: ReviewChecklistItem[]) => {
    setChecklist(items)
  }

  const approve = () => {
    setApproval({
      status: "approved",
      reviewer: "User",
      reviewedAt: new Date().toISOString(),
      comment: "Approved via Patch Review",
    })
    showToast({ title: "Patch approved", variant: "success" })
  }

  const reject = () => {
    setApproval({
      status: "rejected",
      reviewer: "User",
      reviewedAt: new Date().toISOString(),
    })
    showToast({ title: "Patch rejected", variant: "default" })
  }

  const addComment = (comment: string) => {
    setApproval((prev) => ({
      ...prev,
      comment,
    }))
  }

  const commit = async (message: string) => {
    try {
      const allFiles = reviewData()?.status.map((f) => f.file) ?? []
      await sdk().client.vcs.stage({ files: allFiles, directory: sdk().directory })
      const result = await sdk().client.vcs.commit({ message, directory: sdk().directory })
      if (result.data) {
        showToast({ title: `Committed: ${result.data.hash.slice(0, 7)}`, variant: "success" })
        setShowCommitDialog(false)
        await refresh()
      }
    } catch (error) {
      showToast({ title: "Failed to commit", variant: "error" })
    }
  }

  const push = async () => {
    try {
      const result = await sdk().client.vcs.push({ directory: sdk().directory })
      if (result.data) {
        showToast({ title: "Pushed successfully", variant: "success" })
        setShowPushDialog(false)
        await refresh()
      }
    } catch (error) {
      showToast({ title: "Failed to push", variant: "error" })
    }
  }

  const exportReview = (format: "json" | "text" | "html") => {
    const data = reviewData()
    if (!data) return

    const summary = generateExportSummary(data, checklist(), format)

    if (format === "json") {
      const jsonData = JSON.stringify(data, null, 2)
      downloadFile(jsonData, "patch-review.json", "application/json")
      showToast({ title: "Exported as JSON", variant: "success" })
    } else if (format === "html") {
      downloadFile(summary, "patch-review.html", "text/html")
      showToast({ title: "Exported as HTML", variant: "success" })
    } else {
      downloadFile(summary, "patch-review.txt", "text/plain")
      showToast({ title: "Exported as text", variant: "success" })
    }
    setShowExportDialog(false)
  }

  const requiredChecklistCount = createMemo(() =>
    checklist().filter((item) => item.required).length
  )

  const completedChecklistCount = createMemo(() =>
    checklist().filter((item) => item.required && item.checked).length
  )

  createEffect(() => {
    fetchReviewData()
  })

  createEffect(() => {
    const unsub = sdk().event.listen((evt) => {
      if (evt.details.type === "vcs.branch.updated") {
        fetchReviewData()
      }
    })
    onCleanup(unsub)
  })

  return (
    <div class="flex h-full flex-col overflow-hidden">
      <Show when={!loading()} fallback={<ReviewLoadingSkeleton />}>
        <Show when={reviewData()?.isGit} fallback={<NotAGitRepository />}>
          <div class="flex flex-1 flex-col overflow-hidden">
            {/* Patch Summary */}
            <PatchSummary data={reviewData()!} onRefresh={refresh} />

            <div class="flex flex-1 overflow-hidden">
              {/* Left Column: Files + Diff */}
              <div class="flex w-2/3 flex-col border-r border-zinc-800">
                {/* Changed Files Tree */}
                <div class="flex h-1/2 flex-col border-b border-zinc-800">
                  <ChangedFilesTree
                    files={reviewData()?.status ?? []}
                    selectedFile={selectedFile()}
                    onSelectFile={loadDiff}
                  />
                </div>

                {/* Diff Viewer */}
                <div class="flex h-1/2 flex-col">
                  <DiffViewer
                    file={selectedFile()}
                    patch={selectedFile() ? diffs().get(selectedFile()!) ?? null : null}
                    loading={loadingDiffs()}
                    mode={diffMode()}
                    onModeChange={setDiffMode}
                  />
                </div>
              </div>

              {/* Right Column: Quality + Insights + Checklist + Actions */}
              <div class="flex w-1/3 flex-col overflow-y-auto">
                <QualitySummary score={quality()?.score ?? 0} summary={quality()?.summary ?? ""} />

                <PatchInsights insights={insights()} quality={quality()} loading={loading()} />

                <ReviewChecklist
                  items={checklist()}
                  loading={loading()}
                  onUpdate={updateChecklist}
                />

                <ReviewApprovalPanel
                  approval={approval()}
                  requiredChecklistCount={requiredChecklistCount()}
                  completedChecklistCount={completedChecklistCount()}
                  loading={loading()}
                  onApprove={approve}
                  onReject={reject}
                  onComment={addComment}
                />
              </div>
            </div>
          </div>
        </Show>
      </Show>

      {/* Dialogs */}
      <Show when={showCommitDialog()}>
        <CommitDialog
          isOpen={showCommitDialog()}
          stagedFiles={reviewData()?.status.map((f) => f.file) ?? []}
          loading={loading()}
          onCommit={commit}
          onClose={() => setShowCommitDialog(false)}
        />
      </Show>

      <Show when={showPushDialog()}>
        <PushDialog
          isOpen={showPushDialog()}
          loading={loading()}
          onPush={push}
          onClose={() => setShowPushDialog(false)}
        />
      </Show>

      <Show when={showExportDialog()}>
        <ExportDialog
          isOpen={showExportDialog()}
          loading={loading()}
          onExport={exportReview}
          onClose={() => setShowExportDialog(false)}
        />
      </Show>
    </div>
  )
}

function ReviewLoadingSkeleton() {
  return (
    <div class="flex h-full items-center justify-center">
      <div class="text-zinc-400">Loading patch review...</div>
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

function generateExportSummary(
  data: PatchReviewData,
  checklist: ReviewChecklistItem[],
  format: "json" | "text" | "html"
): string {
  if (format === "json") {
    return JSON.stringify({ data, checklist }, null, 2)
  }

  if (format === "html") {
    const lines: string[] = []
    lines.push("<!DOCTYPE html>")
    lines.push("<html><head><title>Patch Review</title></head><body>")
    lines.push("<h1>Patch Review Summary</h1>")
    lines.push(`<p><strong>Branch:</strong> ${data.branch ?? "detached"}</p>`)
    lines.push(`<p><strong>Files Changed:</strong> ${data.status.length}</p>`)
    lines.push("<h2>Changed Files</h2><ul>")
    for (const file of data.status) {
      lines.push(`<li>${file.file} (+${file.additions}, -${file.deletions})</li>`)
    }
    lines.push("</ul>")
    lines.push("<h2>Checklist</h2><ul>")
    for (const item of checklist) {
      lines.push(`<li>${item.checked ? "[x]" : "[ ]"} ${item.text}</li>`)
    }
    lines.push("</ul></body></html>")
    return lines.join("\n")
  }

  const lines: string[] = []
  lines.push("Patch Review Summary")
  lines.push("=".repeat(40))
  lines.push(`Branch: ${data.branch ?? "detached"}`)
  lines.push(`Files Changed: ${data.status.length}`)
  lines.push(`Insertions: ${data.status.reduce((sum, f) => sum + f.additions, 0)}`)
  lines.push(`Deletions: ${data.status.reduce((sum, f) => sum + f.deletions, 0)}`)
  lines.push("")
  lines.push("Changed Files:")
  for (const file of data.status) {
    lines.push(`  ${file.file} (+${file.additions}, -${file.deletions})`)
  }
  lines.push("")
  lines.push("Checklist:")
  for (const item of checklist) {
    lines.push(`  [${item.checked ? "x" : " "}] ${item.text}`)
  }
  return lines.join("\n")
}

function downloadFile(content: string, filename: string, mimeType: string) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}
