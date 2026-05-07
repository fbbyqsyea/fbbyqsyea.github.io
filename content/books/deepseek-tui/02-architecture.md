---
title: "架构设计"
date: 2026-05-06
weight: 2
---


# 架构设计

## 整体架构

DeepSeek-TUI 的核心架构分为四层：

```
dispatcher (deepseek CLI) → TUI (deepseek-tui) → engine → tools
```

| 层 | 说明 |
|------|------|
| **Dispatcher** | `deepseek` CLI 二进制文件，解析子命令并委托给 `deepseek-tui` 伴侣二进制 |
| **TUI** | 键盘驱动的终端界面，提供交互层 |
| **Engine** | 异步 Agent 循环，使用 OpenAI 兼容的流式客户端，从 LLM 响应中提取工具调用并通过类型化注册表分发 |
| **Tools** | 工具注册表，提供文件操作、命令执行、网络搜索等能力 |

## 子系统

### LSP（Language Server Protocol）

自动启动语言服务器（rust-analyzer、pyright 等），代码编辑后将诊断结果注入上下文。这意味着 Agent 可以在修改代码后立即看到编译错误，无需用户手动运行检查。

### RLM（Runtime Language Model）

沙盒 Python REPL，用于批量分类和子 LLM 编排。Agent 可以在隔离的 Python 环境中执行数据分析、分类等任务。

### Task Queue

持久化任务队列，带回合追踪，离线时可排队。即使网络中断，任务也会保持排队状态，恢复连接后自动继续。

## 数据流

```
用户输入 → TUI 渲染 → Engine 接收 → LLM API 调用
    ↑                                         ↓
TUI 更新 ← 工具执行 ← 工具分发 ← LLM 工具调用响应
```

Agent 循环的核心流程：

1. 用户输入提示
2. 流式发送到 LLM API
3. 解析 LLM 响应中的工具调用
4. 通过类型化注册表分发到对应工具
5. 执行工具并收集结果
6. 将结果注入上下文，继续下一轮
