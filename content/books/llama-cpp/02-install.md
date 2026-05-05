---
title: "编译与安装"
date: 2026-05-05
weight: 2
---


# 编译与安装

## 从源码构建

### 克隆仓库

```bash
git clone https://github.com/ggml-org/llama.cpp
cd llama.cpp
```

### CPU 编译（默认）

```bash
cmake -B build
cmake --build build --config Release -j$(nproc)
```

### CUDA 编译（NVIDIA GPU）

推荐使用，可获得 8-10 倍的推理速度提升：

```bash
cmake -B build \
  -DGGML_CUDA=ON \
  -DGGML_NATIVE=OFF \
  -DCMAKE_BUILD_TYPE=Release

cmake --build build -j$(nproc)
```

**关键参数说明**：

| 参数 | 说明 | 推荐值 |
|------|------|--------|
| `GGML_CUDA` | 启用 CUDA 后端 | `ON`（有 NVIDIA GPU） |
| `GGML_NATIVE` | 启用 CPU 特定指令集优化 | `OFF`（避免跨机器兼容问题） |
| `CMAKE_BUILD_TYPE` | 构建类型 | `Release`（启用优化） |

### 其他 GPU 后端

```bash
# Metal（Apple Silicon）
cmake -B build -DGGML_METAL=ON
cmake --build build --config Release -j$(sysctl -n hw.ncpu)

# ROCm（AMD GPU）
cmake -B build -DGGML_HIPBLAS=ON -DAMDGPU_TARGETS=gfx1100
cmake --build build -j$(nproc)

# Vulkan（跨平台）
cmake -B build -DGGML_VULKAN=ON
cmake --build build -j$(nproc)
```

## 验证构建

```bash
$ ./build/bin/llama-cli --version
ggml_cuda_init: found 1 CUDA devices (Total VRAM: 24124 MiB):
  Device 0: NVIDIA GeForce RTX 3090, compute capability 8.6, VMM: yes, VRAM: 24124 MiB
version: 9016 (846262d78)
built with GNU 13.3.0 for Linux x86_64
```

### 查看可用设备

```bash
$ ./build/bin/llama-cli --list-devices
CUDA0: NVIDIA GeForce RTX 3090 (24124 MiB, 23859 MiB free)
```

## 生成的工具

| 工具 | 用途 |
|------|------|
| `llama-cli` | 交互式推理终端 |
| `llama-server` | HTTP 服务器（OpenAI 兼容 API） |
| `llama-bench` | 性能基准测试 |
| `llama-quantize` | 模型量化工具 |
| `llama-embedding` | 向量嵌入提取 |
| `llama-perplexity` | 困惑度评估 |
| `llama-gguf` | GGUF 文件信息查看 |
| `llama-imatrix` | 生成重要性矩阵 |
| `llama-tokenize` | 分词器测试 |

## 常见问题

### `ggml_cuda_init: failed to initialize CUDA`

确认驱动已加载：
```bash
nvidia-smi
```
如果显示 `NVML: Driver/library version mismatch`：
```bash
sudo rmmod nvidia_uvm nvidia_drm nvidia_modeset nvidia
sudo modprobe nvidia
```

### `cmake` 未安装

```bash
sudo apt install cmake build-essential
```

### CUDA Toolkit 未安装

```bash
sudo apt install nvidia-cuda-toolkit
```
