---
title: "会话管理"
date: 2026-05-06
weight: 6
---


# 会话管理

DeepSeek-TUI 的会话状态持久化，支持跨终端恢复。

## 基本命令

```bash
# 列出所有会话
deepseek sessions

# 恢复最近的会话
deepseek resume --last

# 恢复指定会话
deepseek resume <session-id>
```

## 会话持久化

会话数据会自动保存，包括：

- 完整的对话历史
- Agent 的工作状态
- 已执行的工具和结果
- 当前任务进度

这意味着即使终端关闭、网络中断或系统重启，会话状态都不会丢失。

## 跨终端恢复

在不同终端中可以无缝恢复同一会话：

```bash
# 终端 A：启动会话并工作
cd /my/project
deepseek
# ... 工作一段时间后 Ctrl+C 退出

# 终端 B：恢复同一会话
deepseek resume --last
# 继续之前的工作
```

## 任务队列

DeepSeek-TUI 提供持久化任务队列，带回合追踪：

- **离线排队**：网络中断时任务保持排队状态
- **自动恢复**：连接恢复后自动继续执行
- **回合追踪**：每轮对话的状态独立记录
