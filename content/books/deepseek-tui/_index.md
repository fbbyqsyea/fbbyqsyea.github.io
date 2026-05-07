---
title: "DeepSeek-TUI"
weight: 3
bookCollapseSection: true
---

# DeepSeek-TUI 完全指南

DeepSeek-TUI 是一个**终端原生的编码 Agent**，围绕 DeepSeek V4 模型的 **100 万 token 上下文窗口** 构建。纯 Rust 编写的单二进制文件，无需 Node.js 或 Python 运行时。

项目地址：https://github.com/Hmbown/DeepSeek-TUI

## 章节目录

| 章节 | 标题 | 内容 |
|------|------|------|
| 01 | 安装与认证 | 预编译安装、Cargo 编译、API Key 配置、环境变量 |
| 02 | 架构设计 | 四层架构、LSP、RLM、Task Queue 子系统 |
| 03 | 三种交互模式 | Plan、Agent、YOLO 模式，推理强度切换 |
| 04 | 工具系统 | 文件操作、Shell、Git、Web 搜索、子 Agent、工作区回滚 |
| 05 | Skills 系统 | 技能格式、发现顺序、安装与编写 |
| 06 | 会话管理 | 会话持久化、跨终端恢复、任务队列 |
| 07 | MCP 支持 | MCP 服务器配置、常用服务器、验证 |
| 08 | 与 Hermes Agent 对比 | 维度对比、选择建议、互补使用 |

## 快速上手

```bash
# 1. 安装
npm i -g deepseek-tui

# 2. 认证
deepseek auth set --provider deepseek

# 3. 启动
cd /your/project
deepseek
```
