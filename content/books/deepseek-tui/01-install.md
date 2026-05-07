---
title: "安装与认证"
date: 2026-05-06
weight: 1
---


# 安装与认证

## 什么是 DeepSeek-TUI

DeepSeek-TUI 是一个**终端原生的编码 Agent**，围绕 DeepSeek V4 模型的 **100 万 token 上下文窗口** 构建。它是纯 Rust 编写的单二进制文件，无需 Node.js 或 Python 运行时即可运行。

项目地址：https://github.com/Hmbown/DeepSeek-TUI

## 安装方式

### 预编译二进制（最快）

```bash
npm i -g deepseek-tui
deepseek
```

支持 Linux/macOS/Windows（x64 & ARM64 v0.8.8+）。

### Cargo 编译安装

适用于 ARM64、musl、FreeBSD 等平台：

```bash
cargo install deepseek-tui-cli --locked   # 提供 deepseek 命令
cargo install deepseek-tui     --locked   # 提供 deepseek-tui 命令
```

### 国内加速

如果使用 Cargo，配置清华源加快下载。在 `~/.cargo/config.toml` 中添加：

```toml
[source.crates-io]
replace-with = "tuna"
[source.tuna]
registry = "sparse+https://mirrors.tuna.tsinghua.edu.cn/crates.io-index/"
```

## 认证配置

### 方式一：推荐配置命令

```bash
deepseek auth set --provider deepseek
# 交互式输入 API Key
```

### 方式二：环境变量

```bash
export DEEPSEEK_API_KEY="YOUR_DEEPSEEK_API_KEY"
deepseek
```

### 验证配置

```bash
deepseek doctor
```

配置文件位于 `~/.deepseek/config.toml`。

### 环境变量完整列表

| 变量 | 用途 |
|------|------|
| `DEEPSEEK_API_KEY` | API 密钥 |
| `DEEPSEEK_PROVIDER` | Provider：`deepseek`、`nvidia-nim`、`fireworks`、`sglang` |
| `DEEPSEEK_BASE_URL` | API 端点 |
| `DEEPSEEK_MODEL` | 默认模型 |
| `NVIDIA_API_KEY` | NVIDIA NIM 密钥 |
| `FIREWORKS_API_KEY` | Fireworks 密钥 |
| `SGLANG_BASE_URL` | 自托管 SGLang 端点 |

## 支持的模型

| 模型 | 上下文 | 输入(缓存命中) | 输入(缓存未命中) | 输出 |
|------|--------|---------------|-----------------|------|
| `deepseek-v4-pro` | 1M | $0.0036/1M | $0.435/1M | $0.87/1M |
| `deepseek-v4-flash` | 1M | $0.0028/1M | $0.14/1M | $0.28/1M |
