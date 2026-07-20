import { Show, For, createMemo } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import type { ReviewInsights, QualitySummary } from "./patch-review"

interface PatchInsightsProps {
  insights: ReviewInsights | null
  quality: QualitySummary | null
  loading: boolean
}

export function PatchInsights(props: PatchInsightsProps) {
  const riskColor = createMemo(() => {
    if (!props.insights) return "text-zinc-500"
    switch (props.insights.riskLevel) {
      case "high":
        return "text-red-400"
      case "medium":
        return "text-yellow-400"
      case "low":
        return "text-green-400"
      default:
        return "text-zinc-500"
    }
  })

  const riskIcon = createMemo(() => {
    if (!props.insights) return "shield"
    switch (props.insights.riskLevel) {
      case "high":
        return "warning"
      case "medium":
        return "warning"
      case "low":
        return "circle-check"
      default:
        return "shield"
    }
  })

  return (
    <div class="space-y-4">
      {/* Risk Assessment */}
      <Show when={!props.loading && props.insights}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <div class="mb-3 flex items-center justify-between">
            <h3 class="text-sm font-medium text-zinc-300">Risk Assessment</h3>
            <div class={`flex items-center gap-1 ${riskColor()}`}>
              <Icon name={riskIcon()!} class="h-4 w-4" />
              <span class="text-sm font-medium capitalize">{props.insights!.riskLevel} Risk</span>
            </div>
          </div>
          <p class="text-sm text-zinc-400">{props.insights!.riskSummary}</p>
        </div>
      </Show>

      {/* Impact Summary */}
      <Show when={!props.loading && props.insights}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <h3 class="mb-3 text-sm font-medium text-zinc-300">Impact Summary</h3>
          <div class="grid grid-cols-2 gap-3">
            <div class="text-center">
              <div class="text-2xl font-bold text-zinc-300">{props.insights!.impactSummary.filesChanged}</div>
              <div class="text-xs text-zinc-500">Files Changed</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-green-400">+{props.insights!.impactSummary.additions}</div>
              <div class="text-xs text-zinc-500">Additions</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-red-400">-{props.insights!.impactSummary.deletions}</div>
              <div class="text-xs text-zinc-500">Deletions</div>
            </div>
            <div class="text-center">
              <div class="text-2xl font-bold text-zinc-300">{props.insights!.impactSummary.totalLines}</div>
              <div class="text-xs text-zinc-500">Total Lines</div>
            </div>
          </div>
        </div>
      </Show>

      {/* File Categories */}
      <Show when={!props.loading && props.insights}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <h3 class="mb-3 text-sm font-medium text-zinc-300">File Categories</h3>
          <div class="space-y-2">
            <For each={props.insights!.fileCategories}>
              {(category) => (
                <div class="flex items-center justify-between">
                  <span class="text-sm text-zinc-400">{category.category}</span>
                  <span class="text-sm text-zinc-500">{category.count} files</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </Show>

      {/* Key Changes */}
      <Show when={!props.loading && props.insights}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <h3 class="mb-3 text-sm font-medium text-zinc-300">Key Changes</h3>
          <ul class="space-y-2">
            <For each={props.insights!.keyChanges}>
              {(change) => (
                <li class="flex items-start gap-2">
                  <Icon name="arrow-right" class="mt-0.5 h-3 w-3 flex-shrink-0 text-zinc-500" />
                  <span class="text-sm text-zinc-400">{change}</span>
                </li>
              )}
            </For>
          </ul>
        </div>
      </Show>

      {/* Quality Score */}
      <Show when={!props.loading && props.quality}>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 p-4">
          <div class="mb-3 flex items-center justify-between">
            <h3 class="text-sm font-medium text-zinc-300">Quality Score</h3>
            <span class="text-2xl font-bold text-zinc-300">{props.quality!.score}/100</span>
          </div>
          <div class="h-2 w-full overflow-hidden rounded-full bg-zinc-800">
            <div
              class="h-full rounded-full bg-green-500 transition-all duration-500"
              style={{ width: `${props.quality!.score}%` }}
            />
          </div>
          <p class="mt-2 text-sm text-zinc-500">{props.quality!.summary}</p>
        </div>
      </Show>

      {/* Loading State */}
      <Show when={props.loading}>
        <div class="space-y-3">
          <div class="h-24 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-32 animate-pulse rounded-lg bg-zinc-800" />
          <div class="h-24 animate-pulse rounded-lg bg-zinc-800" />
        </div>
      </Show>
    </div>
  )
}
