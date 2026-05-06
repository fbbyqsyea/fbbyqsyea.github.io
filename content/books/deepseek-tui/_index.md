---
title: "DeepSeek-TUI"
date: 2026-05-06
weight: 2
---

# DeepSeek-TUI 完全指南

## 什么是 DeepSeek-TUI

DeepSeek-TUI 是一个**终端原生的编码 Agent**，围绕 DeepSeek V4 模型的 **100 万 token 上下文窗口** 构建。它是一个纯 Rust 编写的单二进制文件，无需 Node.js 或 Python 运行时即可运行。

项目地址：https://github.com/Hmbown/DeepSeek-TUI

## 核心架构

```
dispatcher (deepseek CLI) → TUI (deepseek-tui) → engine → tools
```

整体架构分为四层：

- **Dispatcher**：`deepseek` CLI 二进制文件，解析子命令并委托给 `deepseek-tui` 伴侣二进制
- **TUI**：键盘驱动的终端界面，提供交互层
- **Engine**：异步 Agent 循环，使用 OpenAI 兼容的流式客户端，从 LLM 响应中提取工具调用并通过类型化注册表分发（shell、文件、git、web、子 Agent、MCP）
- **Tools**：工具注册表，提供文件操作、命令执行、网络搜索等能力

### 子系统

| 子系统 | 说明 |
|--------|------|
| **LSP** | 自动启动语言服务器（rust-analyzer、pyright 等），代码编辑后将诊断结果注入上下文 |
| **RLM** | 沙盒 Python REPL，用于批量分类和子 LLM 编排 |
| **Task Queue** | 持久化任务队列，带回合追踪，离线时可排队 |

## 安装

### 预编译二进制

```bash
npm i -g deepseek-tui
deepseek
```

支持 Linux/macOS/Windows（x64 & ARM64 v0.8.8+）。

### Cargo 编译安装

适用于 ARM64、musl、FreeBSD 等平台：

```bash
cargo install deepseek-tui-cli --locked   # 提供 deepseek 命令
cargo install deepseek-tui     --locked   # 提供 deepseek-tui 命令
```

### 国内加速

如果使用 Cargo，可配置清华源加快下载。在 `~/.cargo/config.toml` 中添加：

```toml
[source.crates-io]
replace-with = "tuna"
[source.tuna]
registry = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"
```

## 认证与配置

```bash
# 推荐方式：保存到 ~/.deepseek/config.toml
deepseek auth set --provider deepseek

# 环境变量方式
export DEEPSEEK_API_KEY="YOUR_DEEPSEEK_API_KEY"
deepseek

# 验证配置
deepseek doctor
```

配置文件位于 `~/.deepseek/config.toml`。

### 环境变量覆盖

| 变量 | 用途 |
|------|------|
| `DEEPSEEK_API_KEY` | API 密钥 |
| `DEEPSEEK_PROVIDER` | Provider：`deepseek`、`nvidia-nim`、`fireworks`、`sglang` |
| `DEEPSEEK_BASE_URL` | API 端点 |
| `DEEPSEEK_MODEL` | 默认模型 |
| `NVIDIA_API_KEY` | NVIDIA NIM 密钥 |
| `FIREWORKS_API_KEY` | Fireworks 密钥 |
| `SGLANG_BASE_URL` | 自托管 SGLang 端点 |

## 支持的模型

DeepSeek-TUI 原生支持 DeepSeek V4 系列模型，具备 **1M token 上下文窗口** 和 **prefix cache** 自动成本追踪。

| 模型 | 上下文 | 输入(缓存命中) | 输入(缓存未命中) | 输出 |
|------|--------|---------------|-----------------|------|
| `deepseek-v4-pro` | 1M | $0.0036/1M | $0.435/1M | $0.87/1M |
| `deepseek-v4-flash` | 1M | $0.0028/1M | $0.14/1M | $0.28/1M |

## 三种交互模式

### Plan 模式 🔍

只读探索模式。模型会先提出工作分解方案（通过 `update_plan` 和 `checklist_write`），经确认后再执行。适合不确定的重构或复杂分析。

### Agent 模式 🤖

默认交互模式。支持多步工具调用，每个工具调用前有审批门控。通过 `checklist_write` 和 `update_plan` 保持工作可见性。

### YOLO 模式 ⚡

自动批准所有工具调用，适合可信工作区。仍然使用 `checklist_write` 和 `update_plan` 保持操作记录。

```bash
deepseek          # 默认 Agent 模式
deepseek --yolo   # YOLO 模式，自动批准
```

## 常用 CLI 命令

```bash
deepseek                          # 启动交互式 TUI
deepseek "explain this function"  # 一次性提示，非交互
deepseek --yolo                   # 自动批准所有工具
deepseek serve --http             # 无头 HTTP/SSE API 服务
deepseek doctor                   # 环境诊断
deepseek doctor --json            # JSON 格式诊断
deepseek sessions                 # 列出会话
deepseek resume --last            # 恢复最近会话
deepseek mcp list                 # 列出 MCP 服务器
deepseek mcp validate             # 验证 MCP 配置
```

## 键盘快捷键

| 快捷键 | 功能 |
|--------|------|
| `Tab` | 补全 `/` 命令或 `@` 引用；在生成中时将草稿排队为后续问题；循环模式 |
| `Shift+Tab` | 切换推理强度：`off → high → max` |
| `F1` / `Ctrl+/` | 可搜索的帮助面板 |
| `Ctrl+K` | 命令面板 |
| `Alt+R` | 搜索提示历史并恢复草稿 |
| `@path` | 附加文件或目录到上下文 |
| `Alt+↑` | 编辑最后一条排队的消息 |
| `/attach <path>` | 附加图片/视频等媒体文件 |

## 文件与工具能力

### 核心工具

- **read_file / write_file / edit_file**：文件读写编辑，edit_file 提供内联 diff 渲染
- **shell**：执行 shell 命令
- **git**：内置 git 操作管理
- **web_search**：网络搜索
- **sub_agents**：启动子 Agent 并行处理

### 工作区回滚

通过 git 快照实现自动回滚。每轮对话前后自动创建快照（不影响仓库本身的 `.git`），可通过 `/restore` 和 `revert_turn` 恢复。

## Skills 系统

DeepSeek-TUI 支持可加载的技能文件，格式与 Claude Code / OpenCode 兼容。

### 发现顺序

```
.agents/skills → ./skills → ~/.deepseek/skills → .opencode/skills → .claude/skills
```

按此顺序查找，首次匹配优先。

### 技能文件格式

每个技能是一个包含 `SKILL.md` 的目录：

```yaml
---
name: my-skill
description: 当需要执行自定义工作流时使用此技能。
---
# 技能的详细说明和步骤写在这里
```

### 技能命令

```bash
/skills                    # 列出可用技能
/skill <name>              # 激活指定技能
/skill install github:<owner>/<repo>  # 从 GitHub 安装技能
```

## 会话管理

```bash
deepseek sessions          # 列出所有会话
deepseek resume --last     # 恢复最近的会话
```

会话状态持久化，支持跨终端恢复。

## MCP 支持

DeepSeek-TUI 内置 MCP（Model Context Protocol）客户端，可连接外部 MCP 服务器扩展能力。

```bash
deepseek mcp list      # 列出已配置的 MCP 服务器
deepseek mcp validate  # 验证配置是否正确
```

MCP 服务器配置写入 `~/.deepseek/config.toml`。

## 与 Hermes Agent 的对比

| 维度 | DeepSeek-TUI | Hermes Agent |
|------|-------------|-------------|
| 后端 | 绑定 DeepSeek API（也可接 NIM/Fireworks/SGLang） | 通用框架，支持 OpenRouter、Anthropic 等多种 Provider |
| 运行时 | 纯 Rust 单二进制 | Python/Go 混合 |
| 扩展 | Skills + MCP | Skills + Cron + Messaging + Webhook + 插件系统 |
| 调度 | 无内置调度 | 内置 cron 定时任务 |
| 通信 | 终端内交互 | 支持 Telegram/Discord/Slack/CLI 多平台 |
| 上下文 | 1M token | 取决于后端模型 |
| 子 Agent | 支持 fan-out | 支持 delegate_task |

**选择建议**：如果需要深度绑定 DeepSeek 生态且偏好纯终端体验，选 DeepSeek-TUI；如果需要多后端、定时任务、消息平台集成等扩展能力，选 Hermes Agent。

## 快速上手

```bash
# 1. 安装
npm i -g deepseek-tui

# 2. 认证
deepseek auth set --provider deepseek
# 输入 API Key

# 3. 启动
cd /your/project
deepseek

# 4. 附加文件上下文
@README.md 帮我解释这个项目的架构

# 5. 切换 YOLO 模式
deepseek --yolo

# 6. 查看帮助
# 在 TUI 中按 F1 或 Ctrl+/
```
