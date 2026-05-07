---
title: "tmux 编排详解"
weight: 3
---

# tmux 编排详解

在使用 Claude Code 的交互式模式时，tmux 是最可靠、最强大的编排工具。本章深入讲解 tmux 的价值、核心用法和高级技巧。

## 为什么需要 tmux

Claude Code 是一个完整的 TUI（终端用户界面）应用程序，不是简单的命令行工具。这意味着：

- 它有自己的界面刷新逻辑
- 它需要实时接收键盘输入
- 它可能弹出确认对话框
- 它会动态显示工具使用状态
- 它的输出包含 ANSI 转义序列

如果直接用 `terminal(pty=true)` 运行，你能看到输出并发送输入，但无法可靠地**监控进度**和**捕获状态**。tmux 解决了这两个关键问题。

### tmux 带来的核心能力

| 能力 | 对应命令 | 作用 |
|------|---------|------|
| 启动后台会话 | `tmux new-session -d` | 在后台创建独立终端会话 |
| 发送键盘输入 | `tmux send-keys` | 向会话发送按键（包括 Enter、Tab、方向键） |
| 捕获屏幕输出 | `tmux capture-pane -p` | 获取当前屏幕内容，用于监控和决策 |
| 查看会话列表 | `tmux list-sessions` | 查看所有活跃的 tmux 会话 |
| 附加到会话 | `tmux attach` | 人工介入查看 Claude 工作状态 |
| 清理会话 | `tmux kill-session` | 任务完成后释放资源 |

## 基础工作流

### 1. 创建并启动

```bash
# 创建一个名为 claude-work 的后台会话，尺寸 140x40
tmux new-session -d -s claude-work -x 140 -y 40

# 在会话中启动 Claude Code
tmux send-keys -t claude-work 'cd /path/to/project && claude' Enter
```

### 2. 处理确认对话框

Claude Code 首次启动时会弹出对话框：

```bash
# 等待欢迎界面出现
sleep 5

# 发送任务提示
tmux send-keys -t claude-work "重构认证模块" Enter
```

如果使用 `--dangerously-skip-permissions`：

```bash
# 发送带权限绕过的启动命令
tmux send-keys -t claude-work 'claude --dangerously-skip-permissions "你的任务"' Enter

# 处理信任对话框（Enter = 选择默认的 "Yes, I trust this folder"）
sleep 4 && tmux send-keys -t claude-work Enter

# 处理权限对话框（需要先按 Down，然后 Enter）
sleep 3 && tmux send-keys -t claude-work Down && sleep 0.3 && tmux send-keys -t claude-work Enter
```

### 3. 监控进度

```bash
# 捕获最后 50 行内容
tmux capture-pane -t claude-work -p -S -50
```

关键状态指示器：

| 指示器 | 含义 |
|--------|------|
| `❯` 在底部 | Claude 已完成，等待输入 |
| `●` 行 | Claude 正在积极使用工具 |
| 思考符号 | Claude 正在推理 |
| 错误信息 | 需要人工介入 |

### 4. 发送后续任务

```bash
# 查看状态确认完成
tmux capture-pane -t claude-work -p -S -20

# 发送下一个任务
tmux send-keys -t claude-work "现在为认证模块添加单元测试" Enter
```

### 5. 人工介入（可选）

```bash
# 附加到会话，实时查看和交互
tmux attach -t claude-work

# 退出附加模式（不关闭会话）
Ctrl+B, D
```

### 6. 清理

```bash
# 任务完成后关闭会话
tmux kill-session -t claude-work
```

## 高级编排模式

### 模式一：轮询检查

```bash
# 启动任务
tmux send-keys -t claude-work "运行测试并修复失败项" Enter

# 循环检查直到完成
for i in $(seq 1 30); do
  output=$(tmux capture-pane -t claude-work -p -S -5)
  if echo "$output" | grep -q "❯"; then
    echo "任务完成"
    break
  fi
  sleep 10
done

# 获取最终结果
tmux capture-pane -t claude-work -p -S -100
```

### 模式二：条件分支

```bash
# 发送编译命令
tmux send-keys -t claude-work "编译项目" Enter

# 等待并检查
sleep 30
output=$(tmux capture-pane -t claude-work -p -S -20)

if echo "$output" | grep -q "error"; then
  tmux send-keys -t claude-work "编译出错，请修复错误" Enter
else
  tmux send-keys -t claude-work "编译成功，运行测试" Enter
fi
```

### 模式三：多会话并行

```bash
# 创建三个独立任务
tmux new-session -d -s task-backend -x 140 -y 40
tmux new-session -d -s task-frontend -x 140 -y 40
tmux new-session -d -s task-docs -x 140 -y 40

# 发送不同任务
tmux send-keys -t task-backend 'cd ~/project && claude -p "修复 API Bug" --max-turns 5' Enter
tmux send-keys -t task-frontend 'cd ~/project && claude -p "优化 UI 组件" --max-turns 5' Enter
tmux send-keys -t task-docs 'cd ~/project && claude -p "更新 API 文档" --max-turns 3' Enter

# 并行监控
for i in $(seq 1 20); do
  for s in task-backend task-frontend task-docs; do
    status=$(tmux capture-pane -t $s -p -S -3 2>/dev/null | tail -1)
    echo "$s: $status"
  done
  sleep 15
done
```

## 实用命令参考

### 会话管理

```bash
# 列出所有会话
tmux list-sessions

# 列出会话详情
tmux list-sessions -F "#S: #{session_name}, Windows: #{session_windows}"

# 创建会话
tmux new-session -d -s <name> [-x <width>] [-y <height>]

# 附加到会话
tmux attach -t <name>

# 分离当前会话
tmux detach

# 重命名会话
tmux rename-session -t <old> <new>

# 关闭会话
tmux kill-session -t <name>

# 关闭所有会话
tmux kill-server
```

### 面板操作

```bash
# 捕获面板内容（纯文本）
tmux capture-pane -t <session> -p

# 捕获指定行范围
tmux capture-pane -t <session> -p -S -100 -E -10

# 捕获带 ANSI 转义的内容
tmux capture-pane -t <session> -p -e

# 复制面板内容到文件
tmux capture-pane -t <session> -p -S - -E - > /tmp/output.txt
```

### 按键发送

```bash
# 发送普通文本
tmux send-keys -t <session> "some text"

# 发送特殊键
tmux send-keys -t <session> Enter      # 回车
tmux send-keys -t <session> Tab        # 制表符
tmux send-keys -t <session> Escape     # 退出键
tmux send-keys -t <session> Up         # 上箭头
tmux send-keys -t <session> Down       # 下箭头
tmux send-keys -t <session> Left       # 左箭头
tmux send-keys -t <session> Right      # 右箭头

# 组合键
tmux send-keys -t <session> C-c        # Ctrl+C
tmux send-keys -t <session> C-d        # Ctrl+D
```

## 在 AI Agent 中的典型使用模式

当 AI Agent（如 Hermes Agent）编排 Claude Code 时，通常遵循以下模式：

```
1. 创建 tmux 会话
   ↓
2. 启动 Claude Code
   ↓
3. 处理确认对话框（如果需要）
   ↓
4. 发送任务描述
   ↓
5. 等待 + 捕获面板检查状态
   ↓
6. 判断是否完成/出错/需要跟进
   ↓
7a. 完成 → 捕获结果 → 关闭会话
7b. 出错 → 发送修复指令 → 回到步骤 5
7c. 需要人工 → 通知用户介入
```

## 最佳实践

1. **命名规范**：使用描述性名称，如 `claude-refactor-auth` 而非 `s1`
2. **合理尺寸**：`-x 140 -y 40` 适合大多数任务，避免内容换行
3. **超时保护**：设置最大等待时间，防止 Claude 卡死
4. **及时清理**：任务完成后立即 `kill-session`
5. **日志记录**：重要任务将面板输出保存到文件
6. **错误处理**：检查面板内容中的错误模式
7. **避免冲突**：每个任务使用独立的会话名称

## 常见陷阱

| 陷阱 | 解决方案 |
|------|---------|
| 会话已存在 | 创建前检查或使用唯一名称 |
| 对话框未处理 | Claude 可能退出或挂起，需要重新发送 |
| 面板内容截断 | 使用 `-S -` 和 `-E -` 捕获全部 |
| ANSI 转义干扰解析 | 使用 `-p` 获取纯文本，或后处理清理 |
| 资源泄漏 | 确保所有分支都执行 `kill-session` |
