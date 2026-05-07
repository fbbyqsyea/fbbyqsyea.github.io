---
title: "PR 审查与工作树"
weight: 6
---

# PR 审查与工作树

Claude Code 的代码审查能力是其核心亮点之一，支持从快速检查到深度多智能体审查的多种模式。

## 快速审查（Print 模式）

```bash
cd /path/to/repo
git diff main...feature-branch | claude -p \
  "审查此 diff 的 Bug、安全问题和风格问题。要彻底。" \
  --max-turns 1
```

适合单次快速检查，不改变代码库。

## 深度审查（交互式 + 工作树）

```bash
# 创建 tmux 会话
tmux new-session -d -s review -x 140 -y 40

# 在工作树中启动 Claude
tmux send-keys -t review 'cd /path/to/repo && claude -w pr-review' Enter

# 信任对话框
sleep 5 && tmux send-keys -t review Enter

# 发送审查指令
sleep 2 && tmux send-keys -t review \
  "审查与 main 的所有变更。检查 Bug、安全问题、竞态条件和缺失测试。" \
  Enter

# 监控进度
sleep 30 && tmux capture-pane -t review -p -S -60
```

工作树模式在 `.claude/worktrees/pr-review` 创建隔离的 git worktree，确保审查和修改不会污染主分支。

## PR 审查（按 PR 编号）

```bash
claude -p "彻底审查此 PR" \
  --from-pr 42 \
  --max-turns 10
```

Claude 会自动获取 PR diff 并进行深度分析。

## Claude 工作树 + tmux

```bash
claude -w feature-x --tmux
```

为 feature-x 创建隔离的 git worktree（路径：`.claude/worktrees/feature-x`）**并**创建一个 tmux 会话。使用 iTerm2 原生窗格（如果可用）；添加 `--tmux=classic` 使用传统 tmux。

### 工作树的优势

| 优势 | 说明 |
|------|------|
| 隔离性 | 修改发生在独立 worktree，不影响主分支 |
| 并行性 | 可同时运行多个 Claude 实例处理不同功能 |
| 安全性 | 实验性修改可随时丢弃，不会污染 git 历史 |
| 可追溯性 | 每个工作树有独立的 git 历史 |

## 并行 Claude 实例

同时运行多个独立的 Claude 任务：

```bash
# 任务 1：修复后端
tmux new-session -d -s task1 -x 140 -y 40 && \
tmux send-keys -t task1 \
  'cd ~/project && claude -p "修复 src/auth.py 中的认证 Bug" \
  --allowedTools "Read,Edit" --max-turns 10' Enter

# 任务 2：编写测试
tmux new-session -d -s task2 -x 140 -y 40 && \
tmux send-keys -t task2 \
  'cd ~/project && claude -p "为 API 端点编写集成测试" \
  --allowedTools "Read,Write,Bash" --max-turns 15' Enter

# 任务 3：更新文档
tmux new-session -d -s task3 -x 140 -y 40 && \
tmux send-keys -t task3 \
  'cd ~/project && claude -p "用新的 API 端点更新 README.md" \
  --allowedTools "Read,Edit" --max-turns 5' Enter

# 监控所有任务
sleep 30 && for s in task1 task2 task3; do
  echo "=== $s ==="
  tmux capture-pane -t $s -p -S -5 2>/dev/null
done
```

### 并行实例最佳实践

| 实践 | 说明 |
|------|------|
| 独立工作树 | 每个任务使用不同的 `--worktree` 名称 |
| 限制工具 | 使用 `--allowedTools` 限制每个任务的权限 |
| 设置上限 | 每个任务设置 `--max-turns` 防止失控 |
| 命名会话 | tmux 会话使用描述性名称，方便管理 |
| 清理资源 | 完成后用 `tmux kill-session -t <name>` 清理 |
