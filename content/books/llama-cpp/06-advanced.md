---
title: "高级用法"
date: 2026-05-05
weight: 6
---


# 高级用法

## GPU 卸载策略

### `-ngl`（GPU Layers）参数

```bash
# 全部卸载到 GPU（推荐，如果有足够 VRAM）
llama-server -m model.gguf -ngl 99

# 部分卸载（VRAM 有限时）
llama-server -m model.gguf -ngl 12

# 纯 CPU（没有 GPU）
llama-server -m model.gguf -ngl 0
```

### VRAM 估算

| 量化格式 | 每 10 亿参数的 VRAM 需求 |
|---------|-----------------------|
| Q2_K | ~1.2 GB/B |
| Q4_K_M | ~2.2 GB/B |
| Q5_K_M | ~2.7 GB/B |
| Q6_K | ~3.1 GB/B |
| Q8_0 | ~4.0 GB/B |

0.8B Q4_K_M 模型实测：
- 模型权重：~500 MB
- KV Cache：~3 GB（取决于上下文长度）
- 总 VRAM：~3.5-8.8 GB（含计算缓冲区）

## KV Cache 显存优化

```bash
# KV Cache 量化（节省 50-75%）
llama-server -m model.gguf \
  --cache-type-k q4_0 \
  --cache-type-v q4_0

# 限制上下文长度
llama-server -m model.gguf -c 4096
```

**注意**：Qwen3.5 使用混合 Attention + SSM 架构，实测中 `--cache-type-k q8_0` 不支持 SSM 层的 recurrent state。

## 上下文长度 vs 性能

| 上下文长度 | KV Cache 大小 | 速度影响 |
|-----------|-------------|---------|
| 2048 | ~25 MB | 最小 |
| 8192 | ~100 MB | 轻微 |
| 32768 | ~400 MB | 中等 |
| 131072 | ~1.6 GB | 明显 |
| 262144 | ~3.2 GB | 最大 |

## Flash Attention

```bash
llama-server -m model.gguf --flash-attn on
```

**实测效果**（Qwen3.5-0.8B，RTX 3090）：

| 指标 | 默认 | Flash Attention | 变化 |
|------|------|----------------|------|
| Prompt 处理 | 6,128 tok/s | 6,173 tok/s | **+0.7%** |
| 文本生成 | 368 tok/s | 359 tok/s | **-2.5%** |

对于小模型，Flash Attention 的提升不明显。大模型（7B+）和长上下文下收益更显著。

## 采样参数

```bash
# 温度
llama-cli -m model.gguf --temp 0.1    # 确定性（代码/数学）
llama-cli -m model.gguf --temp 0.7    # 平衡（默认）
llama-cli -m model.gguf --temp 1.2    # 创造性

# Top-p
llama-cli -m model.gguf --top-p 0.95

# 重复惩罚
llama-cli -m model.gguf --repeat-penalty 1.1
```

## Python 集成

```python
from llama_cpp import Llama

llm = Llama(
    model_path="/path/to/model-Q4_K_M.gguf",
    n_ctx=4096,
    n_gpu_layers=99,
    n_threads=8,
)

# 生成文本
out = llm("解释什么是量化", max_tokens=256)
print(out["choices"][0]["text"])

# 聊天模式
resp = llm.create_chat_completion(
    messages=[
        {"role": "user", "content": "你好"},
    ],
    max_tokens=256,
)
print(resp["choices"][0]["message"]["content"])
```
