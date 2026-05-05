---
title: "量化"
date: 2026-05-05
weight: 5
---


# 量化

## 什么是量化

量化是将模型权重从高精度（FP16/BF16）降低到低精度（INT4/INT8）的过程，目的是：

1. **减小模型体积** — 4 位量化可将模型缩小到原来的 1/4
2. **降低显存需求** — 更小的模型可以放入更小的 GPU/内存
3. **提升推理速度** — 更少的数据搬运和计算量

## K-Quant 格式详解

K-quants 使用**混合精度**策略：
- **注意力权重** — 较高精度（Q5/Q6），对输出质量更敏感
- **FFN 权重** — 较低精度（Q4），冗余度更高
- **归一化层** — 保持 FP32/FP16

### 命名规则

```
Q4_K_M
│  │ │
│  │ └─ M = Medium（中等质量）
│  │    S = Small / L = Large
│  └─── K = K-quant（混合精度方法）
└────── 4 = 4-bit 量化
```

### 质量权衡

| 格式 | 相对精度损失 | 大小缩减 | 推荐场景 |
|------|------------|---------|---------|
| FP16 | 0%（基准） | 无 | 精度要求极高 |
| Q8_0 | ~0.03% | 50% | 接近无损 |
| Q6_K | ~0.13% | 58% | 技术文档、代码生成 |
| **Q5_K_M** | **~0.39%** | **63%** | **高质量对话** |
| **Q4_K_M** | **~1.68%** | **68%** | **通用推荐，最佳性价比** |
| Q3_K_M | ~6.07% | 75% | 资源受限场景 |
| Q2_K | ~15.3% | 80% | 仅演示用途 |

## 量化操作

### 基本命令

```bash
./build/bin/llama-quantize \
  models/qwen35-0.8b-f16.gguf \
  models/qwen35-0.8b-Q4_K_M.gguf \
  Q4_K_M
```

### 批量生成

```bash
for quant in Q4_K_M Q5_K_M Q6_K Q8_0; do
  ./build/bin/llama-quantize \
    models/qwen35-0.8b-f16.gguf \
    models/qwen35-0.8b-${quant}.gguf \
    $quant
done
```

## 重要性矩阵（imatrix）

imatrix 通过在校准数据集上运行模型，记录每个权重对输出的重要性。量化时重要权重使用更高精度。

```bash
# 步骤 1：生成重要性矩阵
./build/bin/llama-imatrix \
  -m models/qwen35-0.8b-f16.gguf \
  -f calibration-data.txt \
  -o models/qwen35-0.8b.imatrix

# 步骤 2：使用 imatrix 量化
./build/bin/llama-quantize \
  --imatrix models/qwen35-0.8b.imatrix \
  models/qwen35-0.8b-f16.gguf \
  models/qwen35-0.8b-Q4_K_M.gguf \
  Q4_K_M
```

本测试使用的 Qwen3.5-0.8B GGUF 已内置 Unsloth 生成的 imatrix（80 个数据块、186 个条目）。

## 如何选择量化格式

```
你有足够的显存/内存吗？
├── 是 → 选 Q5_K_M 或 Q6_K
└── 否
    ├── 选 Q4_K_M（最佳性价比）
    └── 还是不够 → Q3_K_M
        └── 仍然不够 → Q2_K（质量会明显下降）
```

| 场景 | 推荐格式 | 理由 |
|------|---------|------|
| 日常对话 | Q4_K_M | 速度/质量最佳平衡 |
| 代码生成 | Q5_K_M 或 Q6_K | 高精度减少语法错误 |
| 技术文档 | Q6_K | 术语准确性要求高 |
| 嵌入式设备 | Q3_K_M | 内存受限 |
