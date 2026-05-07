---
title: "Tmux 详细使用教程"
date: 2026-05-07T15:40:00+08:00
---

# Tmux 详细使用教程

## 什么是 Tmux

Tmux（Terminal Multiplexer）是一个终端复用器，允许你在一个终端窗口中管理多个会话、窗口和面板。核心优势：

- **会话持久化**：断开 SSH 连接后任务继续运行，重新连接后可恢复
- **多面板工作区**：单屏幕分割多个终端，并行工作
- **窗口管理**：每个会话可包含多个窗口，类似浏览器的标签页

## 安装

```bash
# Ubuntu/Debian
sudo apt install tmux

# 查看版本
tmux -V
```

## 核心概念

Tmux 的层级结构：**会话（Session） → 窗口（Window） → 面板（Pane）**

- **Session**：最高层级，一个独立的工作环境
- **Window**：会话中的标签页，全屏显示
- **Pane**：窗口中分割出的矩形区域

## 基本操作

### 会话管理

```bash
# 创建新会话（默认命名 0, 1, 2...）
tmux

# 创建命名会话
tmux new -s work

# 列出所有会话
tmux ls
# 或 tmux list-sessions

# 附加到会话
tmux attach -t work
# 简写
tmux a -t work

# 附加到最新会话
tmux attach

# 切换到会话（在 tmux 内部）
Prefix + s    # 交互式选择
Prefix + (    # 上一个会话
Prefix + )    # 下一个会话

# 重命名会话
Prefix + $

# 杀死会话
tmux kill-session -t work

# 杀死所有会话
tmux kill-server
```

### 窗口管理

```bash
# 创建新窗口
Prefix + c

# 关闭当前窗口
Prefix + &    # 或 exit

# 切换到窗口
Prefix + 数字键    # 直接跳转（0-9）
Prefix + w         # 交互式选择
Prefix + p         # 上一个窗口
Prefix + n         # 下一个窗口
Prefix + l         # 上一次使用的窗口

# 重命名窗口
Prefix + ,

# 移动窗口位置
Prefix + .         # 修改窗口编号
Prefix + :move-window -t 3    # 移动到编号 3

# 交换窗口
Prefix + :swap-window -t 2    # 与编号 2 交换
```

### 面板管理

```bash
# 分割面板
Prefix + %         # 垂直分割（左右）
Prefix + "         # 水平分割（上下）

# 切换面板焦点
Prefix + 方向键    # 上下左右
Prefix + o         # 下一个面板
Prefix + ;         # 上一个活动面板

# 调整面板大小
Prefix + Ctrl+方向键    # 逐步调整
Prefix + M-方向键       # 快速调整（Alt+方向键）

# 面板布局
Prefix + Space         # 切换预设布局
Prefix + :select-layout even-horizontal    # 水平均分
Prefix + :select-layout even-vertical      # 垂直均分
Prefix + :select-layout main-horizontal    # 主面板在上
Prefix + :select-layout main-vertical      # 主面板在左
Prefix + :select-layout tiled              # 平铺

# 关闭面板
Prefix + x         # 确认后关闭
# 或直接 exit

# 面板操作
Prefix + z         # 全屏切换当前面板（zoom）
Prefix + !         # 拆分为独立窗口
Prefix + {         # 与前一个面板交换位置
Prefix + }         # 与后一个面板交换位置

# 从面板创建新窗口
Prefix + :break-pane

# 从其他窗口引入面板
Prefix + :join-pane -t :1    # 从窗口1引入
```

## Prefix 键

默认前缀键是 `Ctrl+b`，所有 tmux 快捷键都需先按 Prefix。

常用操作统一模式：**Prefix + 按键**

## 复制模式（Copy Mode）

tmux 的复制模式类似 vim，用于浏览历史和复制文本：

```bash
# 进入复制模式
Prefix + [

# 导航（vim 风格）
h/j/k/l    # 左下上右
Ctrl+b/f   # 上一页/下一页
Ctrl+d/u   # 半页下/上
g/G        # 行首/行尾
0/$        # 行首/行尾
w/b        # 下一个/上一个单词

# 搜索
/          # 向下搜索
?          # 向上搜索
n          # 下一个匹配
N          # 上一个匹配

# 选择文本
Space      # 开始选择
Enter      # 复制并退出

# 粘贴
Prefix + ]    # 粘贴缓冲区内容
```

### 鼠标支持

在配置文件中启用鼠标后，可以直接用鼠标操作：

```bash
# ~/.tmux.conf
set -g mouse on
```

启用后可：鼠标点击切换面板、拖拽调整大小、滚轮浏览历史、拖选复制文本。

## 常用命令模式

Prefix + : 进入命令模式，类似 vim 的 `:`，可执行：

```bash
# 查看所有命令
:list-commands

# 设置选项
:set -g mouse on

# 查看所有选项
:show-options -g

# 查看所有窗口选项
:show-window-options -g

# 重新加载配置
:source-file ~/.tmux.conf
# 快捷键
Prefix + r（需自行绑定）
```

## 配置文件 ~/.tmux.conf

### 基础配置示例

```bash
# 基础设置
set -g default-terminal "screen-256color"    # 终端类型
set -g history-limit 50000                   # 滚动历史行数
setw -g aggressive-resize on                 # 动态调整窗口大小

# 启用鼠标
set -g mouse on

# 修改前缀键为 Ctrl+a（可选，更像 screen）
# set -g prefix C-a
# unbind C-b
# bind C-a send-prefix

# 窗口编号从 1 开始
set -g base-index 1
setw -g pane-base-index 1

# 重新加载配置快捷键
bind r source-file ~/.tmux.conf \; display "Config reloaded!"

# 更快的按键响应
set -sg escape-time 0

# 分割路径保持当前目录
bind '"' split-window -v -c "#{pane_current_path}"
bind % split-window -h -c "#{pane_current_path}"
bind c new-window -c "#{pane_current_path}"

# vim 风格面板切换
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R
```

### 高级配置

```bash
# 状态栏配置
set -g status-position bottom
set -g status-bg colour235
set -g status-fg colour137
set -g status-interval 5
set -g status-left-length 40
set -g status-right-length 80

# 状态栏左侧
set -g status-left "#[fg=colour137,bold] #S #[fg=colour240]│"

# 状态栏右侧
set -g status-right "#[fg=colour240]│ %Y-%m-%d %H:%M "

# 窗口状态颜色
setw -g window-status-current-style "fg=colour166,bold"
setw -g window-status-current-format " #I│#W "
setw -g window-status-format " #I│#W "

# 面板边框
set -g pane-border-style "fg=colour240"
set -g pane-active-border-style "fg=colour137"

# 活动提醒
setw -g monitor-activity on
set -g visual-activity on

# 插件管理器 TPM
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-sensible'
set -g @plugin 'tmux-plugins/tmux-resurrect'    # 持久化会话
set -g @plugin 'tmux-plugins/tmux-continuum'    # 自动保存
set -g @continuum-save-interval '15'            # 15分钟自动保存
```

### 安装 TPM（Tmux Plugin Manager）

```bash
# 克隆 TPM
git clone https://github.com/tmux-plugins/tpm ~/.tmux/plugins/tpm

# 在 ~/.tmux.conf 末尾添加（插件列表必须放在末尾）
set -g @plugin 'tmux-plugins/tpm'
set -g @plugin 'tmux-plugins/tmux-resurrect'

# 重新加载配置
tmux source ~/.tmux.conf

# 安装插件
Prefix + I（大写 i）
```

## 常用工作流

### 日常开发工作区

```bash
# 创建项目会话
tmux new -s myproject

# 布局：左侧编辑器，右侧终端
Prefix + %          # 垂直分割
Prefix + :select-layout main-horizontal

# 在下方添加第三个面板运行服务
Prefix + "          # 水平分割右侧面板

# 保存会话（使用 resurrect 插件）
Prefix + Ctrl+s     # 保存
Prefix + Ctrl+r     # 恢复
```

### 远程工作

```bash
# SSH 到服务器后创建会话
tmux new -s remote

# 断开连接（会话继续运行）
Prefix + d

# 本地重新连接
tmux attach -t remote
```

### 多窗口监控

```bash
# 创建监控会话
tmux new -s monitor

# 窗口 0：日志
tail -f /var/log/app.log

# 窗口 1：系统资源
htop

# 窗口 2：网络监控
watch -n 1 'netstat -an | grep ESTABLISHED | wc -l'

# 窗口 3：服务状态
watch -n 5 'systemctl status myservice'
```

## 快捷键速查表

| 快捷键 | 功能 |
|--------|------|
| `Prefix + c` | 新建窗口 |
| `Prefix + n` | 下一个窗口 |
| `Prefix + p` | 上一个窗口 |
| `Prefix + w` | 窗口列表 |
| `Prefix + 数字` | 切换窗口 |
| `Prefix + ,` | 重命名窗口 |
| `Prefix + %` | 垂直分割面板 |
| `Prefix + "` | 水平分割面板 |
| `Prefix + 方向键` | 切换面板 |
| `Prefix + z` | 面板全屏切换 |
| `Prefix + x` | 关闭面板 |
| `Prefix + [` | 进入复制模式 |
| `Prefix + ]` | 粘贴 |
| `Prefix + d` | 分离会话 |
| `Prefix + s` | 会话列表 |
| `Prefix + $` | 重命名会话 |
| `Prefix + :` | 命令模式 |
| `Prefix + ?` | 快捷键列表 |

## 常见问题

### 滚动历史不够

```bash
# ~/.tmux.conf
set -g history-limit 50000
```

### 颜色显示异常

```bash
# ~/.tmux.conf
set -g default-terminal "screen-256color"
# 如果终端支持真彩色
set -g terminal-overrides ",xterm-256color:Tc"
```

### 复制粘贴不工作

启用鼠标后使用鼠标选择，或在复制模式下用 vim 风格操作。确保终端和 tmux 的剪贴板集成正确：

```bash
# macOS iTerm2
bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "pbcopy"

# Linux xclip
bind -T copy-mode-vi y send-keys -X copy-pipe-and-cancel "xclip -selection clipboard"
```

### 重新连接后窗口大小不对

```bash
# ~/.tmux.conf
setw -g aggressive-resize on
```

## 总结

Tmux 是终端工作流的强大工具，掌握基本操作后即可大幅提升效率。建议：

1. 先熟悉会话/窗口/面板的创建和切换
2. 配置 `~/.tmux.conf` 启用鼠标和常用快捷键
3. 安装 resurrect 插件实现会话持久化
4. 逐步探索高级功能如脚本化和自定义状态栏
