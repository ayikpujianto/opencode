import { Show, createSignal, createMemo } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"
import type { ReviewApproval } from "./patch-review"

interface ReviewApprovalProps {
  approval: ReviewApproval | null
  requiredChecklistCount: number
  completedChecklistCount: number
  loading: boolean
  onApprove: () => void
  onReject: () => void
  onComment: (comment: string) => void
}

export function ReviewApprovalPanel(props: ReviewApprovalProps) {
  const [comment, setComment] = createSignal("")
  const [showCommentInput, setShowCommentInput] = createSignal(false)

  const canApprove = createMemo(() => {
    if (props.loading) return false
    if (props.requiredChecklistCount > 0) {
      return props.completedChecklistCount >= props.requiredChecklistCount
    }
    return true
  })

  const handleApprove = () => {
    if (!canApprove()) return
    props.onApprove()
  }

  const handleReject = () => {
    props.onReject()
  }

  const handleAddComment = () => {
    const text = comment().trim()
    if (!text) return
    props.onComment(text)
    setComment("")
    setShowCommentInput(false)
  }

  const statusColor = createMemo(() => {
    if (!props.approval) return "text-zinc-500"
    switch (props.approval.status) {
      case "approved":
        return "text-green-400"
      case "rejected":
        return "text-red-400"
      case "pending":
        return "text-yellow-400"
      default:
        return "text-zinc-500"
    }
  })

  const statusIcon = createMemo(() => {
    if (!props.approval) return "status"
    switch (props.approval.status) {
      case "approved":
        return "circle-check"
      case "rejected":
        return "close"
      case "pending":
        return "status"
      default:
        return "help"
    }
  })

  return (
    <div class="space-y-4">
      {/* Current Status */}
      <Show when={!props.loading && props.approval}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <div class="mb-3 flex items-center justify-between">
            <h3 class="text-sm font-medium text-zinc-300">Review Status</h3>
            <div class={`flex items-center gap-1 ${statusColor()}`}>
              <Icon name={statusIcon()!} class="h-4 w-4" />
              <span class="text-sm font-medium capitalize">{props.approval!.status}</span>
            </div>
          </div>

          <Show when={props.approval!.status !== "pending"}>
            <div class="space-y-2 border-t border-zinc-800 pt-3">
              <div class="flex items-center justify-between text-sm">
                <span class="text-zinc-500">Reviewer</span>
                <span class="text-zinc-300">{props.approval!.reviewer}</span>
              </div>
              <div class="flex items-center justify-between text-sm">
                <span class="text-zinc-500">Reviewed at</span>
                <span class="text-zinc-300">
                  {new Date(props.approval!.reviewedAt).toLocaleString()}
                </span>
              </div>
              <Show when={props.approval!.comment}>
                <div class="mt-2 rounded-lg bg-zinc-800 p-3">
                  <p class="text-sm text-zinc-400">{props.approval!.comment}</p>
                </div>
              </Show>
            </div>
          </Show>
        </div>
      </Show>

      {/* Checklist Requirements */}
      <Show when={!props.loading && props.requiredChecklistCount > 0}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <h3 class="mb-2 text-sm font-medium text-zinc-300">Requirements</h3>
          <div class="flex items-center gap-2">
            <Icon
              name={canApprove() ? "circle-check" : "warning"}
              class={`h-4 w-4 ${canApprove() ? "text-green-400" : "text-yellow-400"}`}
            />
            <span class="text-sm text-zinc-400">
              {props.completedChecklistCount}/{props.requiredChecklistCount} required items completed
            </span>
          </div>
        </div>
      </Show>

      {/* Action Buttons */}
      <Show when={!props.loading && props.approval?.status === "pending"}>
        <div class="flex flex-col gap-2">
          <IconButton
            icon="check"
            onClick={handleApprove}
            variant="primary"
            size="normal"
            disabled={!canApprove()}
          >
            Approve
          </IconButton>

          <IconButton
            icon="close"
            onClick={handleReject}
            variant="secondary"
            size="normal"
          >
            Reject
          </IconButton>

          <IconButton
            icon="comment"
            onClick={() => setShowCommentInput(!showCommentInput())}
            variant="ghost"
            size="normal"
          >
            Add Comment
          </IconButton>
        </div>
      </Show>

      {/* Comment Input */}
      <Show when={showCommentInput()}>
        <div class="space-y-2">
          <textarea
            value={comment()}
            onInput={(e) => setComment(e.currentTarget.value)}
            placeholder="Add your review comment..."
            class="h-24 w-full resize-none rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-sm text-zinc-300 placeholder-zinc-600 focus:border-zinc-700 focus:outline-none"
          />
          <div class="flex justify-end gap-2">
            <IconButton
              icon="close"
              onClick={() => {
                setShowCommentInput(false)
                setComment("")
              }}
              variant="ghost"
              size="small"
            >
              Cancel
            </IconButton>
<IconButton
            icon="arrow-right"
            onClick={handleAddComment}
            variant="primary"
            size="small"
            disabled={!comment().trim()}
          >
            Submit
          </IconButton>
          </div>
        </div>
      </Show>

      {/* Loading State */}
      <Show when={props.loading}>
        <div class="space-y-3">
          <div class="h-20 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-10 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-10 animate-pulse rounded-lg bg-zinc-800" />
        </div>
      </Show>
    </div>
  )
}
