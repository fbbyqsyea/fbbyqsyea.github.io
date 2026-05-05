---
title: "简介"
date: 2026-05-05
weight: 1
---


# 简介

## 什么是 llama.cpp

llama.cpp 是一个用纯 C/C++ 编写的轻量级大语言模型（LLM）推理框架，由 [Georgi Gerganov](https://github.com/ggerganov) 创建。它的核心目标是在**消费级硬件**上高效运行大语言模型，无需依赖 Python 生态。

## 为什么选择 llama.cpp

| 对比维度 | llama.cpp | vLLM / HuggingFace |
|----------|-----------|-------------------|
| 运行时 | 纯 C/C++，零 Python 依赖 | 需要 Python + PyTorch |
| 内存占用 | 极低，直接加载 GGUF | PyTorch 本身占用数百 MB |
| 启动速度 | 秒级启动 | 需要加载整个 Python 生态 |
| 硬件兼容 | CPU / CUDA / Metal / Vulkan / ROCm | 主要依赖 CUDA |
| 部署方式 | 单个二进制文件 | 需要 pip 安装大量依赖 |

## 核心特点

### GGUF 格式

**GGUF**（GPT-Generated Unified Format）是 llama.cpp 专为本地推理设计的模型格式。它将模型权重、元数据和分词器打包在单一文件中，支持：

- 多种量化精度（Q2_K 到 Q8_0）
- 混合精度量化（K-quants：Q4_K_M、Q5_K_M 等）
- 内置模型架构元数据
- 内存映射（mmap）加载，减少内存复制

### 多后端支持

| 后端 | 适用硬件 | 构建参数 |
|------|----------|----------|
| CPU | 任意 x86/ARM | 默认 |
| CUDA | NVIDIA GPU | `-DGGML_CUDA=ON` |
| Metal | Apple Silicon | `-DGGML_METAL=ON` |
| Vulkan | 跨平台 GPU | `-DGGML_VULKAN=ON` |
| ROCm | AMD GPU | `-DGGML_HIPBLAS=ON` |
| SYCL | Intel GPU | `-DGGML_SYCL=ON` |

### 支持的模型架构

- **Llama 系列**：Llama 2/3/3.1/3.2
- **Qwen 系列**：Qwen2/2.5/3/3.5
- **Mistral**：Mistral 7B、Mixtral 8x7B/8x22B
- **Gemma**：Gemma/Gemma 2/Gemma 3
- **Phi**：Phi-2/Phi-3/Phi-3.5
- **DeepSeek**：DeepSeek-V2/V3
- **其他**：Falcon、Baichuan、Yi、StarCoder 等

### 内置 Server

llama.cpp 自带 HTTP 服务器（`llama-server`），提供：

- **OpenAI 兼容 API**：`/v1/chat/completions`、`/v1/completions`、`/v1/models`
- **Web UI**：内置聊天界面，直接浏览器访问
- **流式输出**：Server-Sent Events (SSE)
- **多请求并发**：支持批量处理

## 适用场景

- **本地部署大模型**：无需云端，完全离线运行
- **边缘设备推理**：树莓派、Jetson Nano 等低功耗设备
- **API 服务化**：作为 OpenAI 兼容的后端服务
- **模型量化研究**：探索不同量化格式对质量的影响

## 测试环境

| 组件 | 规格 |
|------|------|
| CPU | Intel i9-13900K（32 核） |
| 内存 | 64GB DDR5 |
| GPU | NVIDIA RTX 3090（24GB VRAM） |
| 系统 | Ubuntu 24.04 |
| llama.cpp | 版本 9016（commit 846262d78） |
| 编译器 | GNU 13.3.0 |

## 测试模型

| 参数 | 值 |
|------|------|
| 架构 | qwen35（混合 Attention + SSM） |
| 参数量 | 752M |
| 层数 | 24 |
| 嵌入维度 | 1024 |
| 上下文长度 | 262,144 tokens |
| 词表大小 | 248,320 |
| 量化格式 | Q4_K_M |
| 文件大小 | 508 MB |
