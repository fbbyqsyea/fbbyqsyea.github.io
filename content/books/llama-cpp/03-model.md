---
title: "模型下载与转换"
date: 2026-05-05
weight: 3
---


# 模型下载与转换

## 方式一：直接使用预量化 GGUF（推荐）

### 从 Hugging Face 下载

```bash
hf download unsloth/Qwen3.5-0.8B-GGUF \
  --include "*Q4_K_M*" \
  --local-dir ./models/
```

### 从 Hub 直接启动

```bash
# 自动下载并启动（默认 Q4_K_M）
llama-server -hf bartowski/Llama-3.2-3B-Instruct-GGUF

# 指定量化格式
llama-server -hf bartowski/Llama-3.2-3B-Instruct-GGUF:Q8_0

# 指定具体文件
llama-server \
  --hf-repo unsloth/Qwen3.5-0.8B-GGUF \
  --hf-file Qwen3.5-0.8B-Q4_K_M.gguf \
  -c 4096
```

### 搜索可用模型

- 所有 llama.cpp 兼容模型：https://huggingface.co/models?apps=llama.cpp&sort=trending
- 按名称搜索：https://huggingface.co/models?search=qwen3&apps=llama.cpp
- 按大小筛选：https://huggingface.co/models?search=qwen&apps=llama.cpp&num_parameters=min:0,max:8B

常用量化上传者：
- `bartowski` — 覆盖面最广
- `unsloth` — 高质量量化
- `MaziyarPanahi` — 多格式支持

## 方式二：从原始模型转换

### 步骤一：下载原始模型

```bash
hf download Qwen/Qwen3.5-0.8B --local-dir models/qwen35-0.8b/
```

### 步骤二：转换为 FP16 GGUF

```bash
cd llama.cpp
python convert_hf_to_gguf.py \
  ../models/qwen35-0.8b/ \
  --outfile ../models/qwen35-0.8b-f16.gguf \
  --outtype f16
```

转换后的 FP16 文件大小约为 `参数量 × 2` 字节。0.8B 模型约 1.6GB。

### 步骤三：量化

```bash
./build/bin/llama-quantize \
  ../models/qwen35-0.8b-f16.gguf \
  ../models/qwen35-0.8b-Q4_K_M.gguf \
  Q4_K_M
```

## 查看模型元信息

```bash
$ ./build/bin/llama-gguf model.gguf
general.architecture    = qwen35
general.name            = Qwen3.5-0.8B
qwen35.block_count      = 24
qwen35.context_length   = 262144
```

## ⚠️ 重要限制：不能从已量化的模型再量化

```bash
# ❌ 会失败
./build/bin/llama-quantize model-Q4_K_M.gguf model-Q8_0.gguf Q8_0

# 报错：requantizing from type q6_K is disabled
```

**原因**：量化是有损压缩，低精度丢失的信息无法恢复。必须从 FP16/BF16 原始模型开始。

## 模型格式对比（0.8B）

| 格式 | 大小 | 说明 |
|------|------|------|
| FP16 | ~1.6 GB | 原始精度，转换起点 |
| Q8_0 | ~850 MB | 接近无损 |
| Q6_K | ~660 MB | 高质量/体积比 |
| Q5_K_M | ~580 MB | 均衡选择 |
| Q4_K_M | ~508 MB | **推荐默认** |
| Q3_K_M | ~410 MB | 较小质量损失 |
| Q2_K | ~330 MB | 仅限极端资源限制 |
