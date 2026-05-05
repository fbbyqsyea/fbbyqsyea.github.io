---
title: "完整工具参考"
date: 2026-05-05
weight: 7
---


# 完整工具参考

## 工具速查表

| 工具 | 用途 | 常用程度 |
|------|------|---------|
| `llama-cli` | 交互式推理 | ★★★★★ |
| `llama-server` | HTTP 服务 / API | ★★★★★ |
| `llama-bench` | 性能基准测试 | ★★★★ |
| `llama-quantize` | 模型量化 | ★★★★ |
| `llama-embedding` | 提取嵌入向量 | ★★★ |
| `llama-perplexity` | 困惑度评估 | ★★★ |
| `llama-gguf` | GGUF 文件信息 | ★★★ |
| `llama-imatrix` | 重要性矩阵 | ★★ |
| `llama-tokenize` | 分词测试 | ★★ |
| `llama-speculative` | 投机解码 | ★★ |

## llama-server API 端点

| 端点 | 方法 | 说明 |
|------|------|------|
| `/` | GET | Web 聊天 UI |
| `/health` | GET | 健康检查 |
| `/v1/models` | GET | 列出模型 |
| `/v1/chat/completions` | POST | 聊天补全 |
| `/v1/completions` | POST | 文本补全 |
| `/v1/embeddings` | POST | 嵌入向量 |

## llama-bench 输出指标

| 指标 | 含义 |
|------|------|
| `pp` | Prompt Processing（prompt 处理速度，tok/s） |
| `tg` | Text Generation（文本生成速度，tok/s） |
| `avg_ns` | 平均耗时（纳秒） |
| `avg_ts` | 平均速度（tokens/second） |

## llama-quantize 支持的格式

| 格式 | 说明 |
|------|------|
| `Q4_K_M` | 4-bit K-quant Medium（推荐） |
| `Q5_K_M` | 5-bit K-quant Medium |
| `Q6_K` | 6-bit K-quant |
| `Q8_0` | 8-bit（接近无损） |
| `IQ3_S` | 3-bit Extra Small |
| `IQ4_NL` | 4-bit No Lookup |
