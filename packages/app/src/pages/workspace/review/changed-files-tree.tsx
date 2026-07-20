import { Show, For, createMemo } from "solid-js"
import { Icon } from "@opencode-ai/ui/icon"

interface ChangedFile {
  file: string
  additions: number
  deletions: number
  status: string
}

interface ChangedFilesTreeProps {
  files: ChangedFile[]
  selectedFile: string | null
  onSelectFile: (file: string) => void
}

interface TreeNode {
  name: string
  path: string
  isDir: boolean
  children: TreeNode[]
  file?: ChangedFile
}

export function ChangedFilesTree(props: ChangedFilesTreeProps) {
  const tree = createMemo(() => buildTree(props.files))

  return (
    <div class="flex h-full flex-col overflow-hidden">
      <div class="flex items-center gap-2 border-b border-zinc-800 px-3 py-2">
        <Icon name="file-tree" class="h-4 w-4 text-zinc-400" />
        <span class="text-sm font-medium text-zinc-300">
          Changed Files ({props.files.length})
        </span>
      </div>

      <div class="flex-1 overflow-y-auto p-2">
        <Show
          when={props.files.length > 0}
          fallback={
            <div class="flex h-full items-center justify-center">
              <div class="text-center text-zinc-500">
                <Icon name="check" class="mx-auto h-8 w-8 text-green-500" />
                <div class="mt-2 text-sm">No changes</div>
              </div>
            </div>
          }
        >
          <For each={tree()}>
            {(node) => <TreeNodeItem node={node} selectedFile={props.selectedFile} onSelectFile={props.onSelectFile} />}
          </For>
        </Show>
      </div>
    </div>
  )
}

function statusColor(status: string) {
  switch (status) {
    case "added":
      return "text-green-400"
    case "deleted":
      return "text-red-400"
    case "modified":
      return "text-amber-400"
    default:
      return "text-zinc-400"
  }
}

function TreeNodeItem(props: { node: TreeNode; selectedFile: string | null; onSelectFile: (file: string) => void }) {
  if (props.node.isDir) {
    return (
      <div class="ml-2">
        <div class="flex items-center gap-1 py-0.5 text-xs text-zinc-400">
          <Icon name="folder" class="h-3 w-3" />
          <span>{props.node.name}</span>
        </div>
        <div class="ml-3">
          <For each={props.node.children}>
            {(child) => <TreeNodeItem node={child} selectedFile={props.selectedFile} onSelectFile={props.onSelectFile} />}
          </For>
        </div>
      </div>
    )
  }

  const file = props.node.file!
  const isSelected = () => props.selectedFile === file.file

  return (
    <div
      class={`flex cursor-pointer items-center gap-2 rounded px-2 py-1 text-xs hover:bg-zinc-800 ${isSelected() ? "bg-zinc-800" : ""}`}
      onClick={() => props.onSelectFile(file.file)}
    >
      <Icon name="file-tree" class={`h-3 w-3 ${statusColor(file.status)}`} />
      <span class="flex-1 truncate text-zinc-300">{props.node.name}</span>
      <span class={`text-xs ${statusColor(file.status)}`}>
        +{file.additions} -{file.deletions}
      </span>
    </div>
  )
}

function buildTree(files: ChangedFile[]): TreeNode[] {
  const root: TreeNode[] = []

  for (const file of files) {
    const parts = file.file.split("/")
    let current = root

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]
      const isLast = i === parts.length - 1
      const existing = current.find((n) => n.name === part)

      if (existing) {
        if (isLast) {
          existing.file = file
        }
        current = existing.children
      } else {
        const node: TreeNode = {
          name: part,
          path: parts.slice(0, i + 1).join("/"),
          isDir: !isLast,
          children: [],
          file: isLast ? file : undefined,
        }
        current.push(node)
        current = node.children
      }
    }
  }

  return sortTree(root)
}

function sortTree(nodes: TreeNode[]): TreeNode[] {
  return nodes
    .sort((a, b) => {
      if (a.isDir !== b.isDir) return a.isDir ? -1 : 1
      return a.name.localeCompare(b.name)
    })
    .map((node) => ({
      ...node,
      children: sortTree(node.children),
    }))
}
