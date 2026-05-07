---
title: "MCP 集成"
weight: 7
---

# MCP 集成

MCP（Model Context Protocol）允许 Claude Code 连接外部工具服务器，如数据库、API 和服务。

## 添加 MCP 服务器

```bash
# GitHub 集成
claude mcp add -s user github -- npx @modelcontextprotocol/server-github

# PostgreSQL 查询
claude mcp add -s local postgres -- npx @anthropic-ai/server-postgres \
  --connection-string postgresql://localhost/mydb

# Puppeteer 网页测试
claude mcp add puppeteer -- npx @anthropic-ai/server-puppeteer
```

## MCP 作用域

| 参数 | 作用域 | 存储位置 |
|------|-------|---------|
| `-s user` | 全局（所有项目） | `~/.claude.json` |
| `-s local` | 当前项目（个人） | `.claude/settings.local.json`（gitignored） |
| `-s project` | 当前项目（团队共享） | `.claude/settings.json`（git 追踪） |

## 管理 MCP 服务器

```bash
# 列出已配置的服务器
claude mcp list

# 移除服务器
claude mcp remove <name>
```

## CI/Print 模式中的 MCP

```bash
claude --bare -p "查询数据库" \
  --mcp-config mcp-servers.json \
  --strict-mcp-config
```

`--strict-mcp-config` 忽略除 `--mcp-config` 指定的所有 MCP 服务器之外的配置。

在聊天中引用 MCP 资源：`@github:issue://123`

## MCP 限制与调优

| 配置项 | 默认值 | 说明 |
|--------|-------|------|
| 工具描述 | 2KB 上限 | 每个服务器的工具描述和说明 |
| 结果大小 | 默认受限 | 使用 `maxResultSizeChars` 注解允许最多 **500K** 字符 |
| 输出 Token | 可变 | `export MAX_MCP_OUTPUT_TOKENS=50000` 防止上下文被淹没 |
| 传输方式 | - | `stdio`（本地进程）、`http`（远程）、`sse`（服务器发送事件） |

## 热门 MCP 服务器

| 服务器 | 用途 | 安装命令 |
|--------|------|---------|
| GitHub | 仓库、Issue、PR 管理 | `claude mcp add github -- npx @modelcontextprotocol/server-github` |
| PostgreSQL | 数据库查询 | `claude mcp add postgres -- npx @anthropic-ai/server-postgres` |
| Puppeteer | 浏览器自动化 | `claude mcp add puppeteer -- npx @anthropic-ai/server-puppeteer` |
| Filesystem | 受限文件访问 | `claude mcp add fs -- npx @modelcontextprotocol/server-filesystem /path` |
| Slack | Slack 消息和频道 | `claude mcp add slack -- npx @modelcontextprotocol/server-slack` |
| Google Drive | 文件搜索和访问 | `claude mcp add drive -- npx @modelcontextprotocol/server-google-drive` |

## MCP 配置示例

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["@modelcontextprotocol/server-github"],
      "env": {
        "GITHUB_PERSONAL_ACCESS_TOKEN": "ghp_xxx"
      }
    },
    "postgres": {
      "command": "npx",
      "args": [
        "@anthropic-ai/server-postgres",
        "--connection-string",
        "postgresql://localhost/mydb"
      ]
    }
  }
}
```

通过 `--mcp-config` 加载：

```bash
claude --mcp-config mcp-servers.json -p "查询数据库并报告结果"
```
