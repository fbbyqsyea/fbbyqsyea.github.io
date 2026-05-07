---
title: "Skills 系统"
date: 2026-05-06
weight: 5
---


# Skills 系统

DeepSeek-TUI 支持可加载技能文件，格式与 Claude Code / OpenCode 兼容。技能是封装特定工作流的可复用指令集。

## 发现顺序

技能文件按以下顺序查找，首次匹配优先：

```
.agents/skills → ./skills → ~/.deepseek/skills → .opencode/skills → .claude/skills
```

这个设计确保了跨工具的技能兼容性——如果你在 Claude Code 中已经定义了技能，DeepSeek-TUI 也可以直接使用。

## 技能文件格式

每个技能是一个包含 `SKILL.md` 的目录：

```
skills/
└── my-skill/
    └── SKILL.md
```

`SKILL.md` 的格式：

```yaml
---
name: my-skill
description: 当需要执行自定义工作流时使用此技能。
---
# 技能的详细说明和步骤写在这里
```

- `name`：技能标识符，用于命令引用
- `description`：简短描述，帮助用户和 Agent 理解何时使用此技能
- 正文部分：详细的工作流步骤、注意事项和命令参考

## 技能命令

```bash
/skills                              # 列出可用技能
/skill <name>                        # 激活指定技能
/skill install github:<owner>/<repo> # 从 GitHub 安装技能
```

## 编写高质量技能

好的技能应该包含：

1. **触发条件**：什么情况下使用此技能
2. **分步流程**：编号的执行步骤
3. **常用命令**：精确的命令示例
4. **注意事项**：已知的陷阱和边界情况

## 技能分享

技能可以通过 GitHub 仓库分享和安装：

```bash
# 安装社区技能
/skill install github:username/repo-name

# 社区技能也会按照发现顺序查找
# 安装后位于 ~/.deepseek/skills/
```
