---
title: "推理与服务部署"
date: 2026-05-05
weight: 4
---


# 推理与服务部署

## CLI 交互式推理

```bash
./build/bin/llama-cli \
  -m ~/.models/unsloth/Qwen3.5-0.8B-GGUF/Qwen3.5-0.8B-Q4_K_M.gguf \
  -p "Hello, please introduce yourself." \
  -n 128 \
  --temp 0.7 \
  -ngl 99
```

**关键参数**：

| 参数 | 简写 | 说明 | 默认值 |
|------|------|------|--------|
| `--model` | `-m` | 模型路径 | 必需 |
| `--prompt` | `-p` | 提示词 | 交互模式 |
| `--n-predict` | `-n` | 最大生成 token | -1（无限） |
| `--temperature` | | 采样温度 | 0.8 |
| `-ngl` | | GPU 卸载层数 | 99 |
| `-c` | | 上下文长度 | 4096 |
| `--threads` | `-t` | CPU 线程数 | 物理核心数 |

## llama-server：HTTP 服务

### 启动服务

```bash
./build/bin/llama-server \
  -m model.gguf \
  --port 8080 \
  --host 0.0.0.0 \
  -ngl 99
```

启动后浏览器访问 `http://192.168.1.237:8080`，自带 Web UI。

### OpenAI 兼容 API

**健康检查**：
```bash
curl -s http://localhost:8080/health
# {"status":"ok"}
```

**聊天补全**：
```bash
curl -s http://localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [{"role": "user", "content": "用中文解释什么是 llama.cpp"}],
    "max_tokens": 200
  }'
```

### 实测性能（Qwen3.5-0.8B Q4_K_M，RTX 3090）

| 指标 | 值 |
|------|------|
| Prompt 处理 | 39.11 ms / 16 tokens（409 tok/s） |
| 文本生成 | 546.59 ms / 200 tokens（366 tok/s） |
| 总响应时间 | 585.69 ms |
| 显存占用 | 约 8825 MB |

## llama-bench 性能基准

### 实测数据对比（RTX 3090 + i9-13900K）

| 配置 | Prompt 处理（pp512） | 文本生成（tg128） |
|------|---------------------|-------------------|
| **GPU（24 层全卸载）** | **6,128 tok/s** | **368 tok/s** |
| GPU + Flash Attention | 6,173 tok/s | 359 tok/s |
| **纯 CPU（8 线程）** | **750 tok/s** | **44 tok/s** |

**关键结论**：

1. **GPU 加速带来 8 倍以上速度提升**
2. **Flash Attention 对小模型影响很小**（+0.7% prompt，-2.5% 生成）
3. **纯 CPU 仍可流畅运行小模型**，44 tok/s 已足够对话使用
