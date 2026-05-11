---
title: "Hermes Agent Rust 核心实现 —— 1000 行代码重构"
date: 2026-05-11T23:00:00+08:00
draft: false
---

# Hermes Agent Rust 核心实现

> 参照 Python 版 Hermes Agent（~15,000 LOC 核心文件），用 Rust 实现了核心功能模块，总代码量 **1,015 行**。

---

## 项目结构

```
hermes-rs/
├── Cargo.toml              # 依赖配置
├── src/
│   ├── main.rs             # 入口点 (11 行)
│   ├── lib.rs              # 模块声明 (8 行)
│   ├── config.rs           # 配置加载 (152 行)
│   ├── agent.rs            # AIAgent 核心类 (324 行)
│   ├── tool.rs             # 工具注册系统 (111 行)
│   ├── tools/              # 工具实现
│   │   └── mod.rs
│   ├── terminal.rs         # 终端工具 (110 行)
│   ├── session.rs          # SQLite 会话存储 + FTS5 (136 行)
│   ├── memory.rs           # 记忆管理 (75 行)
│   └── cli.rs              # CLI 交互界面 (88 行)
```

---

## 核心模块

### 1. AIAgent 核心对话循环 (`agent.rs`)

```rust
pub struct AIAgent {
    pub config: Config,
    pub registry: ToolRegistry,
    pub session_db: Option<SessionDB>,
    pub memory: MemoryManager,
    pub terminal: TerminalTool,
    pub client: reqwest::Client,
    pub session_id: String,
    pub conversation_history: Vec<ChatMessage>,
}

impl AIAgent {
    pub async fn chat(&mut self, message: &str) -> anyhow::Result<String> {
        // 1. 保存用户消息到 SQLite
        // 2. 构建消息列表（系统 Prompt + 历史 + 记忆上下文）
        // 3. 获取工具 schema
        // 4. 调用 LLM API
        // 5. 如果有 tool_calls → 执行工具 → 追加结果 → 循环
        // 6. 返回最终响应
    }

    async fn call_api(&self, messages: &[ChatMessage], tools: &[ToolSchema])
        -> anyhow::Result<APIResponse> {
        // 自动检测提供商：OpenAI 兼容 vs Anthropic 原生
        // 构建对应的请求体格式
    }
}
```

**特性：**

- 支持 OpenAI 兼容 API 和 Anthropic 原生 API
- 自动工具调用循环（最多 `max_iterations` 次）
- 配置从 `~/.hermes/config.yaml` 加载，兼容嵌套格式
- API Key 从 config 或环境变量自动获取

### 2. 工具注册系统 (`tool.rs`)

```rust
pub struct ToolRegistry {
    tools: HashMap<String, ToolEntry>,
    toolsets: HashMap<String, ToolsetDef>,
}

impl ToolRegistry {
    pub fn register(&mut self, entry: ToolEntry);
    pub fn define_toolset(&mut self, name: &str, def: ToolsetDef);
    pub fn get_tool_schemas(&self, enabled: &[String]) -> Vec<ToolSchema>;
    pub async fn dispatch(&self, name: &str, args: serde_json::Value) -> ToolResult;
}
```

**特性：**

- 工具集（toolset）定义，支持嵌套包含
- 工具可用性检查（环境变量 + 自定义检查函数）
- 异步工具处理器（通过 `oneshot` channel 桥接）

### 3. 终端工具 (`terminal.rs`)

```rust
pub enum TerminalBackend {
    Local,
    Docker,
    Ssh { host: String, user: String },
}

impl TerminalTool {
    pub fn execute(&self, cmd: &str, timeout_secs: Option<u64>, background: bool)
        -> anyhow::Result<TerminalResult>;
}
```

**特性：**

- 3 种执行后端：本地、Docker、SSH
- 超时控制（SIGKILL 强制终止）
- 后台进程支持

### 4. SQLite 会话存储 (`session.rs`)

```rust
pub struct SessionDB {
    conn: Connection,
}

impl SessionDB {
    pub fn new(db_path: Option<PathBuf>) -> anyhow::Result<Self>;
    pub fn create_session(&self, platform: &str, session_id: Option<String>) -> anyhow::Result<Session>;
    pub fn add_message(&self, session_id: &str, role: &str, content: &str, task_id: Option<&str>) -> anyhow::Result<i64>;
    pub fn get_messages(&self, session_id: &str) -> anyhow::Result<Vec<Message>>;
    pub fn search_messages(&self, query: &str, limit: usize) -> anyhow::Result<Vec<Message>>;
}
```

**特性：**

- WAL 模式（并发读 + 单写）
- FTS5 全文搜索虚拟表
- 自动触发器维护 FTS 索引

### 5. 记忆管理 (`memory.rs`)

```rust
pub struct MemoryManager {
    pub memory_path: PathBuf,
    pub user_path: PathBuf,
}

impl MemoryManager {
    pub fn build_memory_context(&self) -> anyhow::Result<String>;
    pub fn save_memory(&self, content: &str) -> anyhow::Result<()>;
}
```

**特性：**

- MEMORY.md 加载，3,575 字符限制
- USER.md 用户档案加载

### 6. CLI 交互 (`cli.rs`)

```rust
pub struct HermesCLI {
    agent: AIAgent,
}

impl HermesCLI {
    pub async fn run(&mut self) -> anyhow::Result<()>;
    async fn handle_command(&mut self, cmd: &str) -> anyhow::Result<bool>;
}
```

**支持命令：**

| 命令 | 说明 |
|------|------|
| `/quit` | 退出 |
| `/new` | 新会话 |
| `/model <name>` | 切换模型 |
| `/tools` | 列出可用工具 |
| `/help` | 帮助 |

---

## 运行效果

```
╔══════════════════════════════════════════════════╗
║          Hermes Agent v0.1.0 (Rust)              ║
║          Built by Nous Research                  ║
╚══════════════════════════════════════════════════╝
Model: qwen3.6-plus
Provider: openrouter
Tools: web, file, terminal
Type /quit to exit, /new for new session

hermes>
```

---

## 与 Python 版对比

| 维度 | Python 版 | Rust 版 |
|------|-----------|---------|
| 核心代码行数 | ~15,000 (run_agent.py) | ~1,000 |
| 二进制大小 | N/A（解释型） | 7.0 MB |
| 内存占用 | ~200MB+ | ~20MB（预估） |
| 启动速度 | ~1-2s | ~50ms |
| 并发模型 | 同步为主 | 全异步 (tokio) |
| 类型安全 | 动态类型 | 编译时强类型 |
| 平台后端 | 7 种 | 3 种（本地/Docker/SSH） |
| 工具数量 | 94+ | 核心框架（可扩展） |
| 平台适配 | 38 个 | 未实现（CLI only） |

---

## 技术栈

| 组件 | 库 |
|------|-----|
| 异步运行时 | tokio |
| HTTP 客户端 | reqwest |
| 序列化 | serde + serde_json + serde_yaml |
| SQLite | rusqlite (bundled) |
| CLI | clap |
| 终端 UI | ratatui + crossterm |
| 错误处理 | anyhow + color-eyre |
| 系统调用 | nix + libc |

---

## 下一步

- [ ] 实现 `web_search` / `web_extract` 工具
- [ ] 实现 `read_file` / `write_file` / `patch` 工具
- [ ] 实现 `memory` / `session_search` 工具
- [ ] Ratatui TUI 界面
- [ ] Gateway 多平台支持
- [ ] 上下文压缩器
- [ ] 子 Agent 派生

---

*报告完成。Rust 实现位于 `/workspace/hermes-rs/`。*
