---
title: "常见陷阱与注意事项"
weight: 10
---

# 常见陷阱与注意事项

## 1. 交互模式需要 tmux

Claude Code 是完整的 TUI 应用。单独使用 `pty=true` 的终端可以工作，但 tmux 提供 `capture-pane` 用于监控和 `send-keys` 用于输入，这对自动化编排至关重要。

**解决方案：** 始终使用 tmux 管理交互式会话。

## 2. --dangerously-skip-permissions 对话框默认是 "No, exit"

如果你使用 `--dangerously-skip-permissions`，权限对话框默认选择是 "No, exit"。**必须先发送 Down 再 Enter 才能接受。** Print 模式（`-p`）完全跳过此对话框。

**解决方案：** Print 模式优先使用；交互模式需要正确处理对话框。

## 3. --max-budget-usd 最低约 $0.05

系统提示缓存创建本身就需要这个金额。设置低于此值会立即报错。

**解决方案：** 设置至少 $0.05 的预算上限。

## 4. --max-turns 仅适用于 Print 模式

在交互会话中被忽略。

**解决方案：** 交互模式中使用 `/compact` 管理上下文，而不是依赖 `--max-turns`。

## 5. Claude 可能使用 python 而非 python3

在没有 `python` 符号链接的系统上，Claude 的 bash 命令首次会失败，但它会自我修正。

**解决方案：** 创建符号链接：`sudo ln -s /usr/bin/python3 /usr/bin/python`

## 6. 会话恢复需要相同目录

`--continue` 查找当前工作目录的最近会话。

**解决方案：** 确保在正确的工作目录中运行恢复命令。

## 7. --json-schema 需要足够的 --max-turns

Claude 必须先读取文件才能生成结构化输出，这需要多轮对话。

**解决方案：** 使用 JSON Schema 时设置 `--max-turns 5` 或更高。

## 8. 信任对话框每个目录只出现一次

首次访问目录时出现，之后被缓存。

**解决方案：** 首次使用时正确处理，后续无需担心。

## 9. 后台 tmux 会话会持续存在

**解决方案：** 完成后始终用 `tmux kill-session -t <name>` 清理。

## 10. 斜杠命令仅在交互模式有效

在 `-p` 模式下，用自然语言描述任务。

**解决方案：** Print 模式不使用 `/commit` 等命令，直接用自然语言指令。

## 11. --bare 跳过 OAuth

需要 `ANTHROPIC_API_KEY` 环境变量或设置中的 `apiKeyHelper`。

**解决方案：** bare 模式下确保 API Key 已正确配置。

## 12. 上下文退化是真实的

当上下文窗口使用率超过 70% 时，AI 输出质量可测量地下降。

**解决方案：** 使用 `/context` 监控，主动使用 `/compact`。

## 13. 权限模式混淆

| 错误用法 | 后果 |
|---------|------|
| `--dangerously-skip-permissions` 在交互模式 | 需要处理 "No, exit" 默认对话框 |
| `--allowedTools` 与 `--dangerously-skip-permissions` 混用 | 权限绕过优先，allowTools 被忽略 |
| 忘记设置 `--max-turns` | Print 模式可能无限循环 |

## 14. 第三方 API 兼容问题

Dashscope 等第三方 Anthropic 兼容代理可能不完全支持所有功能：

| 功能 | 官方 API | 第三方代理 |
|------|---------|-----------|
| 基础对话 | ✓ | ✓ |
| 流式输出 | ✓ | 部分支持 |
| 工具使用 | ✓ | 可能有限 |
| 结构化输出 | ✓ | 可能有限 |

**解决方案：** 测试关键功能，遇到问题时切换回官方 API。
