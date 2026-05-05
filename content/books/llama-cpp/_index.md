---
title: "llama.cpp 本地推理指南"
weight: 1
---

# llama.cpp 本地推理指南

从源码编译到模型量化，完整覆盖 llama.cpp 的使用场景。所有实验数据基于 RTX 3090 + Qwen3.5-0.8B 实测。

## 实测数据速览

**硬件环境**：Intel i9-13900K + RTX 3090 (24GB) + 64GB RAM  
**模型**：Qwen3.5-0.8B Q4_K_M（508 MB，752M 参数）

| 场景 | 速度 |
|------|------|
| GPU Prompt 处理（512 tokens） | 6,128 tok/s |
| GPU 文本生成（128 tokens） | 368 tok/s |
| CPU Prompt 处理（512 tokens） | 750 tok/s |
| CPU 文本生成（128 tokens） | 44 tok/s |
| Server API 响应（200 tokens） | 366 tok/s，585ms |
