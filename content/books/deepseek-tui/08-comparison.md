---
title: "与 Hermes Agent 对比"
date: 2026-05-06
weight: 8
---


# 与 Hermes Agent 对比

## 维度对比

| 维度 | DeepSeek-TUI | Hermes Agent |
|------|-------------|-------------|
| 后端 | 绑定 DeepSeek API（也可接 NIM/Fireworks/SGLang） | 通用框架，支持 OpenRouter、Anthropic 等多种 Provider |
| 运行时 | 纯 Rust 单二进制 | Python/Go 混合 |
| 扩展 | Skills + MCP | Skills + Cron + Messaging + Webhook + 插件系统 |
| 调度 | 无内置调度 | 内置 cron 定时任务 |
| 通信 | 终端内交互 | 支持 Telegram/Discord/Slack/CLI 多平台 |
| 上下文 | 1M token | 取决于后端模型 |
| 子 Agent | 支持 fan-out | 支持 delegate_task |
| 上下文文件 | CLAUDE.md 兼容 | AGENTS.md / CLAUDE.md / .cursorrules |
| 工作区回滚 | git 快照 | 无内置 |
| LSP 集成 | 内置 | 无内置 |

## 选择建议

### 选择 DeepSeek-TUI 的场景

- 深度绑定 DeepSeek 生态
- 偏好纯终端体验
- 需要 1M token 超大上下文
- 偏好 Rust 单二进制，零依赖
- 需要 LSP 自动诊断集成

### 选择 Hermes Agent 的场景

- 需要多后端灵活切换
- 需要定时任务（cron）
- 需要消息平台集成（Telegram/Discord/Slack）
- 需要完整的插件系统
- 本地部署（llama.cpp + GGUF）

## 互补使用

两者可以配合使用：

- DeepSeek-TUI 作为日常交互式编码 Agent
- Hermes Agent 作为自动化调度、消息推送和定时任务的后台引擎

两者都支持 Skills 系统（CLAUDE.md 兼容格式），技能可以在两个工具间复用。
