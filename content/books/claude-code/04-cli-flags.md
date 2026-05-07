---
title: "CLI 参数完整参考"
weight: 4
---

# CLI 参数完整参考

## 会话与环境

| 参数 | 作用 |
|------|------|
| `-p, --print` | 非交互式单发模式（完成后退出） |
| `-c, --continue` | 恢复当前目录最近的会话 |
| `-r, --resume <id>` | 按 ID 恢复特定会话（无 ID 时弹出交互式选择器） |
| `--fork-session` | 恢复时创建新会话 ID，而非复用原 ID |
| `--session-id <uuid>` | 使用指定 UUID 作为会话标识 |
| `--no-session-persistence` | 不保存会话到磁盘（仅 Print 模式） |
| `--add-dir <paths...>` | 授予 Claude 访问额外工作目录的权限 |
| `-w, --worktree [name]` | 在隔离的 git worktree 中运行（路径：`.claude/worktrees/<name>`） |
| `--tmux` | 为 worktree 创建 tmux 会话（需配合 `--worktree`） |
| `--ide` | 启动时自动连接 IDE |
| `--chrome` / `--no-chrome` | 启用/禁用 Chrome 浏览器集成（网页测试） |
| `--from-pr [number]` | 恢复与特定 GitHub PR 关联的会话 |
| `--file <specs...>` | 启动时下载的文件资源（格式：`file_id:relative_path`） |

## 模型与性能

| 参数 | 作用 |
|------|------|
| `--model <alias>` | 模型选择：`sonnet`、`opus`、`haiku`，或完整名称如 `claude-sonnet-4-6` |
| `--effort <level>` | 推理深度：`low`、`medium`、`high`、`xhigh`、`max`、`auto` |
| `--max-turns <n>` | 限制智能体循环次数（仅 Print 模式，防止失控） |
| `--max-budget-usd <n>` | 限制 API 花费（美元）（仅 Print 模式） |
| `--fallback-model <model>` | 默认模型过载时自动回退（仅 Print 模式） |
| `--betas <betas...>` | 在 API 请求中包含 Beta headers（仅 API Key 用户） |

## 权限与安全

| 参数 | 作用 |
|------|------|
| `--dangerously-skip-permissions` | 自动批准所有工具使用（文件写入、Bash、网络等） |
| `--allow-dangerously-skip-permissions` | 将绕过权限作为一个*选项*启用，而非默认启用 |
| `--permission-mode <mode>` | `default`、`acceptEdits`、`plan`、`auto`、`dontAsk`、`bypassPermissions` |
| `--allowedTools <tools...>` | 白名单特定工具 |
| `--disallowedTools <tools...>` | 黑名单特定工具 |
| `--tools <tools...>` | 覆盖内置工具集（`""` = 无，`"default"` = 全部，或指定工具名） |

## 输出与输入格式

| 参数 | 作用 |
|------|------|
| `--output-format <fmt>` | `text`（默认）、`json`（单个结果对象）、`stream-json`（换行分隔） |
| `--input-format <fmt>` | `text`（默认）或 `stream-json`（实时流式输入） |
| `--json-schema <schema>` | 强制输出符合指定 JSON Schema 的结构化数据 |
| `--verbose` | 输出逐轮详细信息 |
| `--include-partial-messages` | 包含到达时的部分消息片段（stream-json + print） |
| `--replay-user-messages` | 在 stdout 上重新发出用户消息（stream-json 双向） |

## 系统提示与上下文

| 参数 | 作用 |
|------|------|
| `--append-system-prompt <text>` | **追加**到默认系统提示（保留内置能力） |
| `--append-system-prompt-file <path>` | 将文件内容**追加**到默认系统提示 |
| `--system-prompt <text>` | **替换**整个系统提示（通常建议使用 --append） |
| `--system-prompt-file <path>` | 用文件内容**替换**系统提示 |
| `--bare` | 跳过 hooks、插件、MCP 发现、CLAUDE.md、OAuth（最快启动） |
| `--agents '<json>'` | 动态定义自定义子智能体（JSON 格式） |
| `--mcp-config <path>` | 从 JSON 文件加载 MCP 服务器（可重复使用） |
| `--strict-mcp-config` | 仅使用 `--mcp-config` 中的 MCP 服务器，忽略所有其他 MCP 配置 |
| `--settings <file-or-json>` | 从 JSON 文件或内联 JSON 加载额外设置 |
| `--setting-sources <sources>` | 加载设置的来源（逗号分隔）：`user`、`project`、`local` |
| `--plugin-dir <paths...>` | 从指定目录加载插件（仅本次会话） |
| `--disable-slash-commands` | 禁用所有技能/斜杠命令 |

## 调试

| 参数 | 作用 |
|------|------|
| `-d, --debug [filter]` | 启用调试日志，支持分类过滤（如 `"api,hooks"`、`"!1p,!file"`） |
| `--debug-file <path>` | 将调试日志写入指定文件（隐式启用调试模式） |

## 智能体团队

| 参数 | 作用 |
|------|------|
| `--teammate-mode <mode>` | 智能体团队显示方式：`auto`、`in-process` 或 `tmux` |
| `--brief` | 启用 `SendUserMessage` 工具，支持智能体向用户发送消息 |

## 模型选择速查

| 模型别名 | 适用场景 | 相对成本 |
|---------|---------|---------|
| `sonnet` | 日常编码、代码审查 | 中等 |
| `opus` | 复杂多步推理、架构设计 | 高 |
| `haiku` | 简单任务、快速响应 | 低 |

## 权限模式详解

| 模式 | 行为 | 适用场景 |
|------|------|---------|
| `default` | 每个工具使用前询问 | 默认安全模式 |
| `acceptEdits` | 自动接受文件编辑 | 信任 Claude 的修改 |
| `auto` | 自动决定权限 | 平衡安全与效率 |
| `plan` | 先进入规划模式 | 复杂任务先规划后执行 |
| `dontAsk` | 不询问，但不自动执行 | 只读场景 |
| `bypassPermissions` | 完全绕过权限检查 | 沙箱环境、CI/CD |
