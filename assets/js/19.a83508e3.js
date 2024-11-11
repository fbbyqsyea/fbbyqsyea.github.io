(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{320:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"go-modules-配置-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-modules-配置-命令"}},[t._v("#")]),t._v(" Go Modules 配置 & 命令")]),t._v(" "),s("h3",{attrs:{id:"初始化行为"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化行为"}},[t._v("#")]),t._v(" 初始化行为")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建项目目录")]),t._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" go-gin-example "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" go-gin-example\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开go modules开关(目前在1.18中默认值为 auto)")]),t._v("\n$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GO111MODULE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("on\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置goproxy代理，解决国内外网访问不了导致的包下载不了的问题  该配置有两个参数，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第一个是 https://goproxy.cn，它是由七牛云背书的一个强大稳定的 Go 模块代理，可以有效地解决你的外网问题；")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 第二个是 direct，它是一个特殊的 fallback 选项，它的作用是用于指示 Go 在拉取模块时遇到错误会回源到模块版本的源地址去抓取（比如 GitHub 等）。")]),t._v("\n$ go "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("env")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-w")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GOPROXY")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://goproxy.cn,direct\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化Modules 它将会生成 go.mod 文件，需要注意的是 MODULE_PATH 填写的是模块引入路径，你可以根据自己的情况修改路径。")]),t._v("\n$ go mod init github.com/fbbyqsyea/go-gin-example\n")])])]),s("h3",{attrs:{id:"基础使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基础使用"}},[t._v("#")]),t._v(" 基础使用")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# go get 拉去最新的依赖")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取最新的版本(优先选取的tag)")]),t._v("\n$ go get golang.org/x/text@latest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取master分支的最新commit")]),t._v("\n$ go get golang.org/x/text@master\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取tag指定版本的commit")]),t._v("\n$ go get golang.org/x/text@v0.1.2.3\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 拉取 hash 为 342b231 的 commit")]),t._v("\n$ go get golang.org/x/text@342b231\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 更新现有的依赖")]),t._v("\n$ go get "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-u")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载go.mod文件中指明的所有依赖")]),t._v("\n$ go mod download\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整理现有的依赖")]),t._v("\n$ go mod tidy\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看现有的依赖结构")]),t._v("\n$ go mod graph\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 初始化go.mod文件")]),t._v("\n$ go mod init moduleName\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑go.mod文件")]),t._v("\n$ go mod edit\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 导出现有的所有依赖 (事实上 Go modules 正在淡化 Vendor 的概念)")]),t._v("\n$ go mod vendor\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 校验一个模块是否被篡改过")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$go")]),t._v(" mod verify\n")])])]),s("h3",{attrs:{id:"go-sum"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-sum"}},[t._v("#")]),t._v(" go.sum")]),t._v(" "),s("div",{staticClass:"language-text extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("go.sum 文件详细罗列了当前项目直接或间接依赖的所有模块版本，并写明了那些模块版本的 SHA-256 哈希值以备 Go 在今后的操作中保证项目所依赖的那些模块版本不会被篡改。\n")])])]),s("h3",{attrs:{id:"go-mod"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#go-mod"}},[t._v("#")]),t._v(" go.mod")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("go.mod文件是启用go modules的项目所必需的最重要的文件，他描述了当前模块的元信息，每一行以一个动词开头，目前有以下5个动词。\n\nmodule：用于定义当前项目的模块路径\ngo:用于设置预期的go版本\nrequire：用于设置一个特定的模块版本\nexclude：用于从使用中排除一个特定的模块版本\nreplace：用于将一个模块版本替换为另一个模块版本\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);