---
title: "斜杠命令与键盘快捷键"
weight: 5
---

# 斜杠命令与键盘快捷键

交互式会话中，斜杠命令和键盘快捷键是高效使用 Claude Code 的核心。

## 会话与上下文管理

| 命令 | 作用 |
|------|------|
| `/help` | 显示所有命令（包括自定义和 MCP 命令） |
| `/compact [focus]` | 压缩上下文以节省 Token；CLAUDE.md 在压缩后仍然保留。例如：`/compact focus on auth logic` |
| `/clear` | 清除对话历史，重新开始 |
| `/context` | 以彩色网格可视化上下文使用情况，附带优化建议 |
| `/cost` | 查看 Token 使用情况，包含按模型和缓存命中率的细分 |
| `/resume` | 切换或恢复其他会话 |
| `/rewind` | 回退到对话或代码中的先前检查点 |
| `/btw <question>` | 询问附带问题，不计入上下文成本 |
| `/status` | 显示版本、连接性和会话信息 |
| `/todos` | 列出对话中跟踪的行动项 |
| `/exit` 或 `Ctrl+D` | 结束会话 |

## 开发与审查

| 命令 | 作用 |
|------|------|
| `/review` | 请求对当前变更进行代码审查 |
| `/security-review` | 对当前变更执行安全分析 |
| `/plan [description]` | 进入规划模式，自动开始任务规划 |
| `/loop [interval]` | 在会话中安排循环执行的任务 |
| `/batch` | 自动创建工作树以进行大规模并行变更（5-30 个工作树） |

## 配置与工具

| 命令 | 作用 |
|------|------|
| `/model [model]` | 在会话中切换模型（使用方向键调整推理深度） |
| `/effort [level]` | 设置推理深度：`low`、`medium`、`high`、`xhigh`、`max` 或 `auto` |
| `/init` | 创建 CLAUDE.md 文件作为项目记忆 |
| `/memory` | 打开 CLAUDE.md 进行编辑 |
| `/config` | 打开交互式设置配置 |
| `/permissions` | 查看/更新工具权限 |
| `/agents` | 管理专用子智能体 |
| `/mcp` | 交互式 UI 管理 MCP 服务器 |
| `/add-dir` | 添加额外工作目录（适用于单体仓库） |
| `/usage` | 显示计划限制和速率限制状态 |
| `/voice` | 启用按住说话语音模式（20 种语言；按住 Space 录音，松开发送） |
| `/release-notes` | 交互式选择器查看版本发布说明 |

## 键盘快捷键

### 通用控制

| 按键 | 作用 |
|------|------|
| `Ctrl+C` | 取消当前输入或生成 |
| `Ctrl+D` | 退出会话 |
| `Ctrl+R` | 反向搜索命令历史 |
| `Ctrl+B` | 后台运行中的任务 |
| `Ctrl+V` | 粘贴图片到对话 |
| `Ctrl+O` | 转录模式 — 查看 Claude 的思考过程 |
| `Ctrl+G` 或 `Ctrl+X Ctrl+E` | 在外部编辑器中打开提示词 |
| `Esc Esc` | 回退对话或代码状态 / 总结 |

### 模式切换

| 按键 | 作用 |
|------|------|
| `Shift+Tab` | 循环切换权限模式（正常 → 自动接受 → 规划） |
| `Alt+P` | 切换模型 |
| `Alt+T` | 切换思考模式 |
| `Alt+O` | 切换快速模式 |

### 多行输入

| 按键 | 作用 |
|------|------|
| `\` + `Enter` | 快速换行 |
| `Shift+Enter` | 换行（备选） |
| `Ctrl+J` | 换行（备选） |

### 输入前缀

| 前缀 | 作用 |
|------|------|
| `!` | 直接执行 Bash，绕过 AI（如 `!npm test`）。单独使用 `!` 切换 Shell 模式 |
| `@` | 引用文件/目录，带自动补全（如 `@./src/api/`） |
| `#` | 快速添加到 CLAUDE.md 记忆（如 `# 使用 2 空格缩进`） |
| `/` | 斜杠命令 |

### 小技巧：ultrathink

在提示词中使用关键词 `ultrathink` 触发最大推理深度。无论当前 `/effort` 设置如何，这都会触发最深层次的思考模式。

## TUI 状态指示器解读

通过捕获 tmux 面板来检查 Claude 的状态：

```bash
tmux capture-pane -t dev -p -S -10
```

关键指示器：

| 指示器 | 含义 |
|--------|------|
| `❯` 在底部 | 等待输入（Claude 已完成或正在提问） |
| `●` 行 | Claude 正在积极使用工具（读取、写入、运行命令） |
| `⏵⏵ bypass permissions on` | 状态栏显示权限模式已开启 |
| `◐ medium · /effort` | 当前推理深度 |
| `ctrl+o to expand` | 工具输出被截断（可交互式展开） |

## 上下文窗口健康度

在交互模式中使用 `/context` 查看彩色网格的上下文使用情况。关键阈值：

| 使用率 | 状态 | 建议 |
|--------|------|------|
| < 70% | 正常运行，完整精度 | 继续 |
| 70-85% | 精度开始下降 | 考虑 `/compact` |
| > 85% | 幻觉风险显著增加 | 必须 `/compact` 或 `/clear` |

## 自定义斜杠命令

在 `.claude/commands/<name>.md`（项目共享）或 `~/.claude/commands/<name>.md`（个人）中创建：

```markdown
# .claude/commands/deploy.md
运行部署流程：
1. 运行所有测试
2. 构建 Docker 镜像
3. 推送到仓库
4. 更新 $ARGUMENTS 环境（默认：staging）
```

使用方式：`/deploy production` — `$ARGUMENTS` 会被用户的输入替换。

## 技能（自然语言调用）

与手动触发的斜杠命令不同，`.claude/skills/` 中的技能是 Markdown 指南，当任务匹配时 Claude 会通过自然语言自动调用：

```markdown
# .claude/skills/database-migration.md
当被要求创建或修改数据库迁移时：
1. 使用 Alembic 生成迁移
2. 始终创建回滚函数
3. 针对本地数据库副本测试迁移
```
