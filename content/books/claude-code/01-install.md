---
title: "安装与配置"
weight: 1
---

# 安装与配置

## 环境要求

Claude Code 基于 Node.js 构建，需要以下环境：

| 依赖 | 最低版本 | 推荐版本 |
|------|---------|---------|
| Node.js | 18.x | 20.x+ |
| npm | 9.x | 10.x+ |
| 操作系统 | macOS 12+ / Ubuntu 20.04+ / Windows 11 | 任意现代系统 |

验证环境：

```bash
node --version   # v20.x+
npm --version    # 10.x+
```

## 安装方式

### 全局安装（推荐）

```bash
npm install -g @anthropic-ai/claude-code
```

如果权限不足，使用 sudo：

```bash
sudo npm install -g @anthropic-ai/claude-code
```

### 原生构建安装

原生构建版本性能更优，启动更快：

```bash
claude install stable
```

支持的目标版本：

| 目标 | 说明 |
|------|------|
| `stable` | 最新稳定版 |
| `latest` | 最新测试版 |
| `1.0.0` | 指定版本号 |

### 版本检查与升级

```bash
# 查看当前版本
claude --version

# 检查更新
claude update

# 升级到最新版
claude upgrade
```

## 认证配置

Claude Code 支持多种认证方式，选择适合你的一种。

### 方式一：Anthropic 官方 API Key

最直接的认证方式，使用 Anthropic 官方 API：

```bash
export ANTHROPIC_API_KEY="sk-ant-xxxxx"

# 或者写入配置文件
mkdir -p ~/.claude
cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx"
  }
}
EOF
```

获取 API Key：访问 [console.anthropic.com](https://console.anthropic.com/) 创建。

### 方式二：OAuth 浏览器登录

适合 Claude Pro/Max 订阅用户：

```bash
claude auth login
```

运行后会打开浏览器进行 OAuth 授权，授权完成后自动保存凭证。

### 方式三：控制台认证（API Key 计费）

适合无图形界面的服务器环境：

```bash
claude auth login --console
```

会输出一个 URL，在浏览器中打开后获取授权码，粘贴回终端完成认证。

### 方式四：SSO 企业登录

Enterprise 用户使用：

```bash
claude auth login --sso
```

### 认证状态检查

```bash
# JSON 格式输出（适合脚本）
claude auth status

# 人类可读格式
claude auth status --text
```

### 方式五：第三方兼容 API（通义千问等）

对于使用国内大模型的用户，Dashscope 提供了 Anthropic 兼容代理：

```bash
mkdir -p ~/.claude
cat > ~/.claude/settings.json << 'EOF'
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy",
    "ANTHROPIC_AUTH_TOKEN": "sk-your-dashscope-key"
  },
  "model": "qwen3.6-plus"
}
EOF
```

关键环境变量对照：

| 变量 | Anthropic 官方 | 第三方兼容 |
|------|--------------|-----------|
| API Key | `ANTHROPIC_API_KEY` | `ANTHROPIC_AUTH_TOKEN` |
| Base URL | 默认（无需设置） | `ANTHROPIC_BASE_URL` |

## 健康检查

安装完成后运行：

```bash
claude doctor
```

检查项包括：

- 自动更新器状态
- 安装完整性
- 认证有效性
- Node.js 版本兼容性

## 项目上下文文件

Claude Code 自动加载项目根目录下的 `CLAUDE.md` 文件作为项目上下文。这是与 Claude Code 协作的核心机制。

### 文件层级

| 文件路径 | 作用域 | 建议 |
|---------|-------|------|
| `~/.claude/CLAUDE.md` | 所有项目（全局） | 通用编码偏好 |
| `./CLAUDE.md` | 当前项目 | 项目架构、规范 |
| `.claude/CLAUDE.local.md` | 当前项目（个人） | 个人偏好，gitignored |

### 示例 CLAUDE.md

```markdown
# Project: My API

## 架构
- FastAPI 后端 + SQLAlchemy ORM
- PostgreSQL 数据库，Redis 缓存
- pytest 测试，覆盖率目标 90%

## 关键命令
- `make test` — 运行完整测试套件
- `make lint` — ruff + mypy 检查
- `make dev` — 启动开发服务器 (:8000)

## 代码规范
- 所有公共函数必须有类型注解
- 文档字符串使用 Google 风格
- YAML 用 2 空格缩进，Python 用 4 空格
- 禁止使用通配符导入
```

### 模块化规则目录

当项目规则较多时，使用规则目录替代单个大型 CLAUDE.md：

| 路径 | 作用域 | Git 追踪 |
|------|-------|---------|
| `.claude/rules/*.md` | 项目级（团队共享） | 是 |
| `~/.claude/rules/*.md` | 用户级（个人） | 否 |

每个 `.md` 文件作为独立上下文加载，比单文件更清晰易维护。

## 设置文件层级

Claude Code 的配置文件按优先级从高到低：

1. **CLI 参数** — 覆盖所有设置
2. **本地项目：** `.claude/settings.local.json`（个人，gitignored）
3. **项目：** `.claude/settings.json`（团队共享，git 追踪）
4. **用户：** `~/.claude/settings.json`（全局）

### 权限配置示例

```json
{
  "permissions": {
    "allow": ["Bash(npm run lint:*)", "WebSearch", "Read"],
    "ask": ["Write(*.ts)", "Bash(git push*)"],
    "deny": ["Read(.env)", "Bash(rm -rf *)"]
  }
}
```

权限类型说明：

| 类型 | 行为 |
|------|------|
| `allow` | 自动执行，无需确认 |
| `ask` | 每次执行前询问用户 |
| `deny` | 禁止执行 |

### 工具名语法

`--allowedTools` 和 `--disallowedTools` 中使用的工具名格式：

```
Read                    # 所有文件读取
Edit                    # 文件编辑（已存在文件）
Write                   # 文件创建（新文件）
Bash                    # 所有 Shell 命令
Bash(git *)             # 仅 git 命令
Bash(git commit *)      # 仅 git commit 命令
Bash(npm run lint:*)    # 支持通配符的模式匹配
WebSearch               # 网络搜索
WebFetch                # 网页抓取
mcp__<server>__<tool>   # 特定 MCP 工具
```

## 环境变量完整列表

| 变量 | 作用 |
|------|------|
| `ANTHROPIC_API_KEY` | 官方 API 认证密钥 |
| `ANTHROPIC_AUTH_TOKEN` | 第三方 API 认证密钥 |
| `ANTHROPIC_BASE_URL` | 自定义 API 端点 |
| `CLAUDE_CODE_EFFORT_LEVEL` | 默认推理深度：low/medium/high/max/auto |
| `MAX_THINKING_TOKENS` | 思考 Token 上限（0 = 禁用思考） |
| `MAX_MCP_OUTPUT_TOKENS` | MCP 输出上限 |
| `CLAUDE_CODE_NO_FLICKER=1` | 启用备用屏幕渲染，消除终端闪烁 |
| `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` | 从子进程中剥离凭据 |
