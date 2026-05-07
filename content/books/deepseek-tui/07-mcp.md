---
title: "MCP 支持"
date: 2026-05-06
weight: 7
---


# MCP 支持

DeepSeek-TUI 内置 MCP（Model Context Protocol）客户端，可连接外部 MCP 服务器扩展能力。

## 基本命令

```bash
# 列出已配置的 MCP 服务器
deepseek mcp list

# 验证配置是否正确
deepseek mcp validate
```

## 配置 MCP 服务器

MCP 服务器配置写入 `~/.deepseek/config.toml`。

### stdio 类型服务器

```toml
[mcp.servers.filesystem]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-filesystem", "/workspace"]
```

### HTTP 类型服务器

```toml
[mcp.servers.weather]
url = "http://localhost:8080/mcp"
```

## 常用 MCP 服务器

| 服务器 | 用途 |
|--------|------|
| `server-filesystem` | 增强文件操作能力 |
| `server-github` | GitHub API 集成 |
| `server-slack` | Slack 消息发送 |
| `server-playwright` | 浏览器自动化 |

## 验证配置

```bash
# 验证所有 MCP 服务器
deepseek mcp validate

# JSON 格式输出（适合脚本）
deepseek mcp list --json
```

如果配置有误，`validate` 命令会指出具体问题所在，帮助快速排查。
