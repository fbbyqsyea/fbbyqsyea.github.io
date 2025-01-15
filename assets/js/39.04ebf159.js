(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{343:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"http断开后-如何继续执行服务端代码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http断开后-如何继续执行服务端代码"}},[t._v("#")]),t._v(" http断开后，如何继续执行服务端代码")]),t._v(" "),s("h2",{attrs:{id:"问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[t._v("#")]),t._v(" 问题")]),t._v(" "),s("h4",{attrs:{id:"业务需求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#业务需求"}},[t._v("#")]),t._v(" 业务需求")]),t._v(" "),s("ul",[s("li",[t._v("服务端需要调用一个event stream格式响应的接口，实时响应数据给客户端。")]),t._v(" "),s("li",[t._v("响应数据是被分为多个数据块，以流失数据的形式给到。")]),t._v(" "),s("li",[t._v("服务端能够实现对event stream接口的完整调用")])]),t._v(" "),s("h4",{attrs:{id:"遇到问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#遇到问题"}},[t._v("#")]),t._v(" 遇到问题")]),t._v(" "),s("p",[t._v("由于公司主流的技术架构还是lamp那一套，apache服务器通过调用php module来执行php的脚本。当http请求断开后，php脚本就会终止执行。当客户端没有等待http响应完成就主动断开了连接，就会导致服务端没有从封装的event stream接口中获取到完整的数据。是一次无效的接口调用。")]),t._v(" "),s("h2",{attrs:{id:"思考"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思考"}},[t._v("#")]),t._v(" 思考")]),t._v(" "),s("p",[t._v("为了解决上面的问题，基于公司现有的技术架构，我首先想到了如下方案:")]),t._v(" "),s("h4",{attrs:{id:"方案1-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案1-0"}},[t._v("#")]),t._v(" 方案1.0")]),t._v(" "),s("ul",[s("li",[t._v("开启多个常驻的php进程来处理event stream接口的调用，生产数据。")]),t._v(" "),s("li",[t._v("使用redis list来进行数据之间的同步。")]),t._v(" "),s("li",[t._v('服务端通告轮询redis list消费数据，直到接受到"data [done]"结束。')])]),t._v(" "),s("h6",{attrs:{id:"优缺点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#优缺点"}},[t._v("#")]),t._v(" 优缺点")]),t._v(" "),s("ul",[s("li",[t._v("优点是http断开后常驻脚本依旧能够完成接口的调用。")]),t._v(" "),s("li",[t._v("缺点是无法解决多用户的并发问题，同一个常驻脚本同一时间只能处理一个请求。")])]),t._v(" "),s("p",[t._v("在考虑到并发之后，我想到了下面的第二个方案:")]),t._v(" "),s("h4",{attrs:{id:"方案2-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方案2-0"}},[t._v("#")]),t._v(" 方案2.0")]),t._v(" "),s("ul",[s("li",[t._v("使用go来实现业务逻辑，并以api或者让rpc的形式暴露服务，供php调用。这样既能解决调用event stream接口调用完整性的问题，同时还能实现高并发的能力。而且go有着比php更高的性能。")])]),t._v(" "),s("h2",{attrs:{id:"解答"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[t._v("#")]),t._v(" 解答")]),t._v(" "),s("p",[t._v("下面的解答示例只演示了http主动断开后go继续执行直到结束的相关demo")]),t._v(" "),s("h4",{attrs:{id:"demo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[t._v("#")]),t._v(" DEMO")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" main\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"log"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tr "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Default")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/long_async_operation"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 启动goroutine")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("go")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 进行耗时操作")]),t._v("\n\t\t\t\ttime"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sleep")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Second"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束时打印日志")]),t._v("\n\t\t\t\tlog"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"long_async_operation done"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\tr"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('":8081"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[t._v("#")]),t._v(" 启动服务")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ go run main.go\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARNING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Creating an Engine instance with the Logger and Recovery middleware already attached.\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARNING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Running "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debug"')]),t._v(" mode. Switch to "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"release"')]),t._v(" mode "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" production.\n - using env:   "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("GIN_MODE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("release\n - using code:  gin.SetMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("gin.ReleaseMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" GET    /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" POST   /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" PUT    /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" PATCH  /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" HEAD   /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" OPTIONS /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" DELETE /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" CONNECT /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" TRACE  /long_async_operation     --"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" main.main.func1 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" handlers"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("WARNING"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" You trusted all proxies, this is NOT safe. We recommend you to "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" a value.\nPlease check https://pkg.go.dev/github.com/gin-gonic/gin"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#readme-don-t-trust-all-proxies for details.")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN-debug"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" Listening and serving HTTP on :8081\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("GIN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 - "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:34 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("         750ns "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" HEAD     "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/long_async_operation"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:35 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:36 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:37 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:38 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:39 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:40 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:41 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:42 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:43 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v("/05/21 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),t._v(":17:44 long_async_operation "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),s("h4",{attrs:{id:"客户端调用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端调用"}},[t._v("#")]),t._v(" 客户端调用")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-I")]),t._v(" http://localhost:8081/long_async_operation\nHTTP/1.1 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),t._v(" OK\nDate: Sun, "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("21")]),t._v(" May "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2023")]),t._v(" 04:17:34 GMT\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);