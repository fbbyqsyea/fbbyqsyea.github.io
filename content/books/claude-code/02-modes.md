---
title: "两种使用模式"
weight: 2
---

# 两种使用模式

Claude Code 提供两种截然不同的运行模式，选择取决于任务的复杂度和交互需求。

## 模式一：Print 模式（非交互式）

Print 模式是单发执行模式，接收任务后自动完成并输出结果，然后退出。无需 PTY，无需交互式确认。这是最干净的集成路径，适合自动化。

### 基本用法

```bash
claude -p "为所有 API 调用添加错误处理" --max-turns 10
```

关键参数：

| 参数 | 作用 | 建议值 |
|------|------|-------|
| `-p` / `--print` | 启用非交互模式 | 必选 |
| `--max-turns` | 限制最大循环次数 | 5-10 |
| `--max-budget-usd` | 花费上限（美元） | 按需 |
| `--allowedTools` | 白名单工具 | 按需 |

### 使用场景

| 场景 | 示例命令 |
|------|---------|
| 修复 Bug | `claude -p "修复 src/auth.py 中的空指针异常" --max-turns 5` |
| 添加功能 | `claude -p "为 API 端点添加分页支持" --max-turns 10` |
| 代码重构 | `claude -p "将回调风格改为 async/await" --max-turns 8` |
| CI/CD 自动化 | 见下方 CI/CD 章节 |
| 管道输入处理 | `cat file.py | claude -p "分析此代码" --max-turns 1` |
| 结构化数据提取 | 见下方 JSON Schema 章节 |

### 结构化 JSON 输出

使用 `--output-format json` 获取机器可读的结果：

```bash
claude -p "分析 auth.py 中的安全问题" \
  --output-format json \
  --max-turns 5
```

返回的 JSON 对象包含：

```json
{
  "type": "result",
  "subtype": "success",
  "result": "分析结果文本...",
  "session_id": "75e2167f-...",
  "num_turns": 3,
  "total_cost_usd": 0.0787,
  "duration_ms": 10276,
  "stop_reason": "end_turn",
  "terminal_reason": "completed",
  "usage": {
    "input_tokens": 5,
    "output_tokens": 603
  },
  "modelUsage": {
    "claude-sonnet-4-6": {
      "costUSD": 0.078,
      "contextWindow": 200000
    }
  }
}
```

关键字段说明：

| 字段 | 用途 |
|------|------|
| `session_id` | 用于后续会话恢复 |
| `num_turns` | 智能体循环次数 |
| `total_cost_usd` | 实际花费追踪 |
| `subtype` | 成功/错误状态（success/error_max_turns/error_budget） |

### 流式 JSON 输出

实时 Token 流，适合需要即时反馈的场景：

```bash
claude -p "解释这段代码" \
  --output-format stream-json \
  --verbose \
  --include-partial-messages
```

配合 jq 过滤实时文本：

```bash
claude -p "解释 X" --output-format stream-json --verbose --include-partial-messages | \
  jq -rj 'select(.type == "stream_event" and .event.delta.type? == "text_delta") | .event.delta.text'
```

流事件包含 `system/api_retry`，带有 `attempt`、`max_retries` 和 `error` 字段（如 `rate_limit`、`billing_error`）。

### 管道输入

```bash
# 管道单个文件进行分析
cat src/auth.py | claude -p "审查此代码的 Bug" --max-turns 1

# 管道多个文件
cat src/*.py | claude -p "找出所有 TODO 注释" --max-turns 1

# 管道命令输出
git diff HEAD~3 | claude -p "总结这些更改" --max-turns 1
```

### JSON Schema 结构化提取

强制 Claude 按指定格式输出：

```bash
claude -p "列出 src/ 中的所有函数" \
  --output-format json \
  --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}},"required":["functions"]}' \
  --max-turns 5
```

解析结果中的 `structured_output` 字段。Claude 会在返回前验证输出是否符合 Schema。

### Bare 模式（CI/CD 专用）

最快速的启动模式，跳过所有非必要加载：

```bash
claude --bare -p "运行所有测试并报告失败" \
  --allowedTools "Read,Bash" \
  --max-turns 10
```

`--bare` 跳过的内容：

- Hooks
- 插件
- MCP 发现
- CLAUDE.md 自动加载
- OAuth（需要 `ANTHROPIC_API_KEY` 环境变量）

在 bare 模式下选择性加载上下文：

| 要加载的内容 | 对应参数 |
|------------|---------|
| 系统提示补充 | `--append-system-prompt "text"` 或 `--append-system-prompt-file path` |
| 设置 | `--settings <file-or-json>` |
| MCP 服务器 | `--mcp-config <file-or-json>` |
| 自定义智能体 | `--agents '<json>'` |

### 会话恢复与延续

```bash
# 启动一个任务并保存 session_id
claude -p "开始重构数据库层" --output-format json --max-turns 10 > /tmp/session.json

# 用 session_id 恢复
claude -p "继续并添加连接池" \
  --resume $(cat /tmp/session.json | python3 -c 'import json,sys; print(json.load(sys.stdin)["session_id"])') \
  --max-turns 5

# 或恢复当前目录最近的会话
claude -p "上次做了什么？" --continue --max-turns 1

# 分叉会话（新 ID，保留历史）
claude -p "尝试不同的方法" --resume <id> --fork-session --max-turns 10
```

### 故障回退模型

当默认模型过载时自动回退：

```bash
claude -p "你的任务" --fallback-model haiku --max-turns 5
```

仅在 Print 模式下有效。

## 模式二：交互式 PTY（多轮对话）

交互式模式提供完整的多轮 REPL，可以发送后续提示、使用斜杠命令、实时观察 Claude 的工作过程。**需要 tmux 编排。**

### 为什么需要 tmux

Claude Code 是完整的 TUI 应用程序。仅使用 `pty=true` 的终端可以工作，但 tmux 提供了 `capture-pane` 用于监控和 `send-keys` 用于输入，这对自动化编排至关重要。

### 完整启动流程

```bash
# 1. 创建 tmux 会话
tmux new-session -d -s claude-work -x 140 -y 40

# 2. 在 tmux 中启动 Claude Code
tmux send-keys -t claude-work 'cd /path/to/project && claude' Enter

# 3. 等待启动（欢迎界面约 3-5 秒）
sleep 5

# 4. 发送任务
tmux send-keys -t claude-work "重构认证模块使用 JWT tokens" Enter

# 5. 监控进度
sleep 15 && tmux capture-pane -t claude-work -p -S -50

# 6. 发送后续任务
tmux send-keys -t claude-work "现在为新的 JWT 代码添加单元测试" Enter

# 7. 完成后退出
tmux send-keys -t claude-work '/exit' Enter
```

### 交互式对话模式场景

| 场景 | 说明 |
|------|------|
| 多轮迭代工作 | 重构 → 审查 → 修复 → 测试循环 |
| 需要人工决策 | 涉及架构选择的场景 |
| 探索性编码 | 不确定最终方案，需要边试边改 |
| 使用斜杠命令 | `/compact`、`/review`、`/model` 等 |

## 交互式对话的确认对话框处理（关键）

Claude Code 首次启动时会弹出最多两个确认对话框。**必须正确处理**，否则会退出。

### 对话框一：工作区信任（首次访问目录）

```
❯ 1. Yes, I trust this folder    ← 默认（直接按 Enter）
  2. No, exit
```

处理：`tmux send-keys -t <session> Enter` — 默认选择就是正确的。

### 对话框二：跳过权限警告（仅使用 --dangerously-skip-permissions 时）

```
❯ 1. No, exit                    ← 默认（错误选项！）
  2. Yes, I accept
```

处理：**必须先向下选择**，然后 Enter：

```bash
tmux send-keys -t <session> Down && sleep 0.3 && tmux send-keys -t <session> Enter
```

### 健壮的对话框处理模式

```bash
# 启动并跳过权限
tmux send-keys -t claude-work 'claude --dangerously-skip-permissions "你的任务"' Enter

# 处理信任对话框（Enter 选择默认 "Yes"）
sleep 4 && tmux send-keys -t claude-work Enter

# 处理权限对话框（Down 然后 Enter 选择 "Yes, I accept"）
sleep 3 && tmux send-keys -t claude-work Down && sleep 0.3 && tmux send-keys -t claude-work Enter

# 现在等待 Claude 工作
sleep 15 && tmux capture-pane -t claude-work -p -S -60
```

**注意：** 首次信任某个目录后，信任对话框不再出现。只有权限对话框在每次使用 `--dangerously-skip-permissions` 时都会出现。

## 模式对比总结

| 维度 | Print 模式 | 交互式模式 |
|------|-----------|-----------|
| 交互性 | 无，单发执行 | 完整 REPL，多轮对话 |
| 对话框 | 自动跳过 | 需要手动处理 |
| 适用场景 | 单次任务、CI/CD | 迭代工作、探索性编码 |
| 编排方式 | 直接命令行 | tmux 编排 |
| 结构化输出 | 支持 JSON | 不适用 |
| 斜杠命令 | 不支持 | 全部支持 |
| `--max-turns` | 有效 | 忽略 |
