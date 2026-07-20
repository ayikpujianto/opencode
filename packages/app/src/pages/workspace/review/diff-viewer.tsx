import { Show, For, createMemo, createSignal } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"
import { IconButton } from "@opencode-ai/ui/icon-button"

interface DiffViewerProps {
  file: string | null
  patch: string | null
  loading: boolean
  mode: "unified" | "split"
  onModeChange: (mode: "unified" | "split") => void
}

interface DiffLine {
  type: "context" | "addition" | "deletion"
  content: string
  oldLineNum?: number
  newLineNum?: number
}

export function DiffViewer(props: DiffViewerProps) {
  const [collapsedSections, setCollapsedSections] = createSignal<Set<number>>(new Set())

  const parsedLines = createMemo(() => {
    if (!props.patch) return []
    return parseDiff(props.patch)
  })

  const toggleSection = (index: number) => {
    const newCollapsed = new Set(collapsedSections())
    if (newCollapsed.has(index)) {
      newCollapsed.delete(index)
    } else {
      newCollapsed.add(index)
    }
    setCollapsedSections(newCollapsed)
  }

  const copyLine = (line: DiffLine) => {
    navigator.clipboard.writeText(line.content)
  }

  return (
    <div class="flex h-full flex-col overflow-hidden">
      {/* Header */}
      <div class="flex items-center justify-between border-b border-zinc-800 px-3 py-2">
        <div class="flex items-center gap-2">
          <Icon name="code" class="h-4 w-4 text-zinc-400" />
          <span class="text-sm font-medium text-zinc-300">
            {props.file ?? "Select a file"}
          </span>
        </div>

        <Show when={props.file}>
          <div class="flex items-center gap-1">
            <IconButton
              icon="layout-right"
              onClick={() => props.onModeChange("split")}
              variant={props.mode === "split" ? "primary" : "ghost"}
              size="small"
            />
            <IconButton
              icon="layout-left"
              onClick={() => props.onModeChange("unified")}
              variant={props.mode === "unified" ? "primary" : "ghost"}
              size="small"
            />
          </div>
        </Show>
      </div>

      {/* Content */}
      <div class="flex-1 overflow-y-auto bg-zinc-950">
        <Show
          when={!props.loading}
          fallback={
            <div class="flex h-full items-center justify-center">
              <div class="text-sm text-zinc-500">Loading diff...</div>
            </div>
          }
        >
          <Show
            when={props.file && props.patch}
            fallback={
              <div class="flex h-full items-center justify-center">
                <div class="text-center text-zinc-500">
                  <Icon name="code" class="mx-auto h-8 w-8" />
                  <div class="mt-2 text-sm">Select a file to view diff</div>
                </div>
              </div>
            }
          >
            {props.mode === "unified" ? (
              <UnifiedDiffView
                lines={parsedLines()}
                collapsedSections={collapsedSections()}
                onToggleSection={toggleSection}
                onCopyLine={copyLine}
              />
            ) : (
              <SplitDiffView
                lines={parsedLines()}
                collapsedSections={collapsedSections()}
                onToggleSection={toggleSection}
                onCopyLine={copyLine}
              />
            )}
          </Show>
        </Show>
      </div>
    </div>
  )
}

function UnifiedDiffView(props: {
  lines: DiffLine[]
  collapsedSections: Set<number>
  onToggleSection: (index: number) => void
  onCopyLine: (line: DiffLine) => void
}) {
  const lineStyle = (type: string) => {
    switch (type) {
      case "addition":
        return "bg-green-500/10 text-green-400"
      case "deletion":
        return "bg-red-500/10 text-red-400"
      default:
        return "text-zinc-400"
    }
  }

  const linePrefix = (type: string) => {
    switch (type) {
      case "addition":
        return "+"
      case "deletion":
        return "-"
      default:
        return " "
    }
  }

  return (
    <div class="font-mono text-xs">
      <For each={props.lines}>
        {(line) => (
          <div
            class={`flex items-center px-3 py-0.5 ${lineStyle(line.type)} hover:bg-zinc-800/50`}
            onClick={() => props.onCopyLine(line)}
          >
            <span class="w-12 flex-shrink-0 text-right text-zinc-600">{line.oldLineNum ?? ""}</span>
            <span class="w-12 flex-shrink-0 text-right text-zinc-600">{line.newLineNum ?? ""}</span>
            <span class="w-4 flex-shrink-0 text-zinc-600">{linePrefix(line.type)}</span>
            <span class="flex-1 whitespace-pre">{line.content}</span>
          </div>
        )}
      </For>
    </div>
  )
}

function SplitDiffView(props: {
  lines: DiffLine[]
  collapsedSections: Set<number>
  onToggleSection: (index: number) => void
  onCopyLine: (line: DiffLine) => void
}) {
  const lineStyle = (type: string) => {
    switch (type) {
      case "addition":
        return "bg-green-500/10 text-green-400"
      case "deletion":
        return "bg-red-500/10 text-red-400"
      default:
        return "text-zinc-400"
    }
  }

  return (
    <div class="font-mono text-xs">
      <For each={props.lines}>
        {(line) => (
          <div class={`flex items-center ${lineStyle(line.type)} hover:bg-zinc-800/50`}>
            <span class="w-12 flex-shrink-0 px-1 text-right text-zinc-600">{line.oldLineNum ?? ""}</span>
            <span class="w-4 flex-shrink-0 text-zinc-600">
              {line.type === "deletion" ? "-" : line.type === "context" ? " " : ""}
            </span>
            <span class="flex-1 whitespace-pre border-r border-zinc-800 px-1">{line.type !== "addition" ? line.content : ""}</span>
            <span class="w-12 flex-shrink-0 px-1 text-right text-zinc-600">{line.newLineNum ?? ""}</span>
            <span class="w-4 flex-shrink-0 text-zinc-600">
              {line.type === "addition" ? "+" : line.type === "context" ? " " : ""}
            </span>
            <span class="flex-1 whitespace-pre px-1">{line.type !== "deletion" ? line.content : ""}</span>
          </div>
        )}
      </For>
    </div>
  )
}

function parseDiff(patch: string): DiffLine[] {
  const lines: DiffLine[] = []
  const patchLines = patch.split("\n")
  let oldLine = 0
  let newLine = 0

  for (const line of patchLines) {
    // Skip diff headers
    if (line.startsWith("diff --git") || line.startsWith("index ") || line.startsWith("---") || line.startsWith("+++")) {
      continue
    }

    // Parse hunk header
    const hunkMatch = line.match(/^@@ -(\d+),?\d* \+(\d+),?\d* @@/)
    if (hunkMatch) {
      oldLine = parseInt(hunkMatch[1], 10)
      newLine = parseInt(hunkMatch[2], 10)
      continue
    }

    // Parse content lines
    if (line.startsWith("+")) {
      lines.push({
        type: "addition",
        content: line.slice(1),
        newLineNum: newLine++,
      })
    } else if (line.startsWith("-")) {
      lines.push({
        type: "deletion",
        content: line.slice(1),
        oldLineNum: oldLine++,
      })
    } else if (line.startsWith(" ")) {
      lines.push({
        type: "context",
        content: line.slice(1),
        oldLineNum: oldLine++,
        newLineNum: newLine++,
      })
    }
  }

  return lines
}
