import { For } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"

interface QualityCard {
  name: string
  status: "pass" | "fail" | "warning" | "not-run" | "skipped"
  icon: string
  color: string
}

interface QualitySummaryProps {
  score?: number
  summary?: string
}

export function QualitySummary(_props: QualitySummaryProps) {
  const cards: QualityCard[] = [
    { name: "Build", status: "not-run", icon: "server", color: "text-zinc-400" },
    { name: "Tests", status: "not-run", icon: "review", color: "text-zinc-400" },
    { name: "Typecheck", status: "not-run", icon: "code", color: "text-zinc-400" },
    { name: "Lint", status: "not-run", icon: "circle-check", color: "text-zinc-400" },
    { name: "Security", status: "not-run", icon: "shield", color: "text-zinc-400" },
    { name: "Performance", status: "not-run", icon: "reset", color: "text-zinc-400" },
  ]

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "pass":
        return "bg-green-500/20 text-green-400"
      case "fail":
        return "bg-red-500/20 text-red-400"
      case "warning":
        return "bg-amber-500/20 text-amber-400"
      case "skipped":
        return "bg-zinc-500/20 text-zinc-400"
      default:
        return "bg-zinc-800 text-zinc-500"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pass":
        return "check"
      case "fail":
        return "close"
      case "warning":
        return "warning"
      case "skipped":
        return "dash"
      default:
        return "circle-check"
    }
  }

  return (
    <div class="border-b border-zinc-800 p-3">
      <div class="mb-2 text-xs font-medium text-zinc-400">Quality Summary</div>
      <div class="grid grid-cols-3 gap-2">
        <For each={cards}>
          {(card) => (
            <div class={`flex items-center gap-2 rounded p-2 ${getStatusStyle(card.status)}`}>
              <Icon name={card.icon as any} class={`h-3.5 w-3.5 ${card.color}`} />
              <span class="text-xs font-medium">{card.name}</span>
              <Icon name={getStatusIcon(card.status) as any} class="ml-auto h-3 w-3" />
            </div>
          )}
        </For>
      </div>
    </div>
  )
}
