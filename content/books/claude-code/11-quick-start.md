---
title: "快速上手"
weight: 11
---

# 快速上手

## 一键启动

```bash
# 安装
npm install -g @anthropic-ai/claude-code

# 认证（任选其一）
export ANTHROPIC_API_KEY="sk-ant-xxxxx"                     # 官方 API
export ANTHROPIC_BASE_URL="https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy"  # 第三方
export ANTHROPIC_AUTH_TOKEN="sk-your-key"

# 验证
claude --version
claude doctor
```

## 常用命令速查

```bash
# 单发任务（Print 模式）
claude -p "修复 auth.py 中的 Bug" --max-turns 5
claude -p "为 API 添加分页" --max-turns 10

# 交互式会话
claude                                    # 进入 REPL
claude "重构认证模块"                      # 带初始提示进入

# PR 审查
git diff main...feature | claude -p "审查此 diff" --max-turns 1
claude -p "审查此 PR" --from-pr 42 --max-turns 10

# 管道输入
cat src/*.py | claude -p "找出所有 TODO" --max-turns 1

# 结构化输出
claude -p "列出所有函数" --output-format json --json-schema '{"type":"object","properties":{"functions":{"type":"array","items":{"type":"string"}}}}' --max-turns 5

# 指定模型和推理深度
claude -p "复杂架构设计" --model opus --effort high --max-turns 15

# 工作树模式
claude -w feature-x --tmux
```

## 配置文件模板

```json
// ~/.claude/settings.json
{
  "env": {
    "ANTHROPIC_API_KEY": "sk-ant-xxxxx"
  },
  "permissions": {
    "allow": ["Read", "Bash(npm run lint:*)", "WebSearch"],
    "ask": ["Write(*.ts)", "Bash(git push*)"],
    "deny": ["Read(.env)", "Bash(rm -rf *)"]
  }
}
```

## 项目 CLAUDE.md 模板

```markdown
# 项目名

## 架构
- 技术栈说明
- 数据库、缓存等基础设施

## 关键命令
- 构建、测试、运行命令

## 代码规范
- 缩进、类型注解、文档风格
- 禁止事项
```

## 下一步

- 阅读各章深入了解特定功能
- 创建自己的 `.claude/agents/` 和 `.claude/skills/`
- 配置 MCP 服务器连接外部服务
- 尝试 `/batch` 和并行工作流处理大规模任务
