---
title: "自定义子智能体与钩子"
weight: 8
---

# 自定义子智能体与钩子

## 自定义子智能体

在 `.claude/agents/`（项目级）、`~/.claude/agents/`（用户级）或通过 `--agents` CLI 参数（会话级）定义专用智能体。

### 智能体位置优先级

1. `.claude/agents/` — 项目级，团队共享
2. `--agents` CLI 参数 — 会话级，动态
3. `~/.claude/agents/` — 用户级，个人

### 创建智能体

```markdown
# .claude/agents/security-reviewer.md
---
name: security-reviewer
description: 专注于安全的代码审查
model: opus
tools: [Read, Bash]
---
你是一名资深安全工程师。审查代码是否存在：
- 注入漏洞（SQL、XSS、命令注入）
- 认证/授权缺陷
- 代码中的密钥
- 不安全的反序列化
```

调用方式：`@security-reviewer 审查认证模块`

### 动态智能体（CLI 参数）

```bash
claude --agents '{
  "reviewer": {
    "description": "审查代码",
    "prompt": "你是一名专注于性能的代码审查员"
  }
}' -p '使用 @reviewer 检查 auth.py'
```

Claude 可以编排多个智能体："使用 @db-expert 优化查询，然后 @security 审计变更。"

### 智能体配置字段

| 字段 | 说明 | 必需 |
|------|------|------|
| `name` | 智能体唯一标识 | 是 |
| `description` | 智能体能力描述，用于自动触发 | 是 |
| `model` | 使用的模型（sonnet/opus/haiku） | 否 |
| `tools` | 允许使用的工具列表 | 否 |
| `prompt` | 智能体系统提示 | 是 |

## 钩子（Hooks）— 事件自动化

在 `.claude/settings.json`（项目）或 `~/.claude/settings.json`（全局）中配置：

```json
{
  "hooks": {
    "PostToolUse": [{
      "matcher": "Write(*.py)",
      "hooks": [{
        "type": "command",
        "command": "ruff check --fix $CLAUDE_FILE_PATHS"
      }]
    }],
    "PreToolUse": [{
      "matcher": "Bash",
      "hooks": [{
        "type": "command",
        "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -q 'rm -rf'; then echo 'Blocked!' && exit 2; fi"
      }]
    }],
    "Stop": [{
      "hooks": [{
        "type": "command",
        "command": "echo 'Claude 完成了一次响应' >> /tmp/claude-activity.log"
      }]
    }]
  }
}
```

### 全部 8 种钩子类型

| 钩子 | 触发时机 | 常见用途 |
|------|---------|---------|
| `UserPromptSubmit` | Claude 处理用户提示之前 | 输入验证、日志记录 |
| `PreToolUse` | 工具执行之前 | 安全门控、阻止危险命令（exit 2 = 阻止） |
| `PostToolUse` | 工具完成后 | 自动格式化代码、运行 linter |
| `Notification` | 权限请求或输入等待时 | 桌面通知、警报 |
| `Stop` | Claude 完成响应后 | 完成日志、状态更新 |
| `SubagentStop` | 子智能体完成后 | 智能体编排 |
| `PreCompact` | 上下文内存清除之前 | 备份会话转录 |
| `SessionStart` | 会话开始时 | 加载开发上下文（如 `git status`） |

### 钩子环境变量

| 变量 | 内容 |
|------|------|
| `CLAUDE_PROJECT_DIR` | 当前项目路径 |
| `CLAUDE_FILE_PATHS` | 被修改的文件列表 |
| `CLAUDE_TOOL_INPUT` | 工具参数（JSON 格式） |

### 安全钩子示例

```json
{
  "PreToolUse": [{
    "matcher": "Bash",
    "hooks": [{
      "type": "command",
      "command": "if echo \"$CLAUDE_TOOL_INPUT\" | grep -qE 'rm -rf|git push.*--force|:(){ :|:& };:'; then echo 'Dangerous command blocked!' && exit 2; fi"
    }]
  }]
}
```

阻止的命令模式：

- `rm -rf` — 递归强制删除
- `git push --force` — 强制推送
- Fork 炸弹 — `:(){ :|:& };:`

## 智能体与钩子配合使用

智能体负责专业任务，钩子负责安全防护。两者结合可以实现安全的自主编码工作流：

```
用户请求 → 钩子验证安全 → 智能体执行任务 → 钩子自动格式化/测试 → 完成
```
