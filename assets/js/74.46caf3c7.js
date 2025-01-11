(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{377:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"gin集成prometheus"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#gin集成prometheus"}},[t._v("#")]),t._v(" Gin集成Prometheus")]),t._v(" "),s("p",[s("code",[t._v("prometheus")]),t._v(" 是一款开源的监控和告警系统，它可以帮助你收集和存储各种指标数据，并提供查询和可视化功能。"),s("code",[t._v("Gin")]),t._v(" 是一款高性能的 Go 语言 Web 框架，它可以用来构建高性能的 Web 应用程序。 在本教程中，我们将介绍如何在 "),s("code",[t._v("Gin")]),t._v(" 集成 "),s("code",[t._v("Prometheus")]),t._v(" 来收集和存储该应用程序的指标数据。")]),t._v(" "),s("h2",{attrs:{id:"初始化prometheus服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#初始化prometheus服务"}},[t._v("#")]),t._v(" 初始化"),s("code",[t._v("prometheus")]),t._v("服务")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" service\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"os"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gitea.fbbmore.com/goweb/fsdk-go/fsdkutils"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/prometheus/client_golang/prometheus"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局获取主机名称")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" HostName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("_")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" os"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Hostname")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个容器名称的 Gauge")]),t._v("\n\tNexcoContainer "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewGaugeVec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tprometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GaugeOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nexco_container"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tHelp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Gauge of container name."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ip"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个 HTTP 请求计数器")]),t._v("\n\tNexcoHttpRequestsTotal "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewCounterVec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tprometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CounterOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nexco_http_requests_total"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tHelp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Total number of HTTP requests processed, partitioned by status code and method."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个 HTTP 请求处理时间的直方图")]),t._v("\n\tNexcoHttpRequestDuration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewHistogramVec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t\tprometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HistogramOpts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nexco_http_request_duration_seconds"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tHelp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Histogram of HTTP request durations in seconds."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tBuckets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefBuckets"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以自定义桶")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"method"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"path"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"status"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义全局标签")]),t._v("\n\tpodLabel "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Labels"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"container"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" HostName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 包装默认注册器，添加统一的 container 标签")]),t._v("\n\tregistry "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WrapRegistererWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("podLabel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prometheus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefaultRegisterer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置容器的ip")]),t._v("\n\tNexcoContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithLabelValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fsdkutils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustIPv4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Set")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 注册指标")]),t._v("\n\tregistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustRegister")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NexcoContainer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tregistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustRegister")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NexcoHttpRequestsTotal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tregistry"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("MustRegister")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("NexcoHttpRequestDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("code",[t._v("NexcoContainer")]),t._v(" 是一个 "),s("code",[t._v("GaugeVec")]),t._v(" 类型的指标，它用于表示容器的名称。我们使用 "),s("code",[t._v("WithLabelValues")]),t._v(" 方法为该指标添加了一个标签，标签的值为当前主机的 IP 地址。")]),t._v(" "),s("li",[s("code",[t._v("NexcoHttpRequestsTotal")]),t._v(" 是一个 "),s("code",[t._v("CounterVec")]),t._v(" 类型的指标，它用于表示 HTTP 请求的总数。我们使用 "),s("code",[t._v("WithLabelValues")]),t._v(" 方法为该指标添加了三个标签，分别是请求的方法、路径和状态码。")]),t._v(" "),s("li",[s("code",[t._v("NexcoHttpRequestDuration")]),t._v(" 是一个 "),s("code",[t._v("HistogramVec")]),t._v(" 类型的指标，它用于表示 HTTP 请求的处理时间。我们使用 "),s("code",[t._v("WithLabelValues")]),t._v(" 方法为该指标添加了三个标签，分别是请求的方法、路径和状态码。")]),t._v(" "),s("li",[t._v("在初始化的时候，首先给这些注册器添加了一个全局标签 "),s("code",[t._v("container")]),t._v("，然后使用 "),s("code",[t._v("WrapRegistererWith")]),t._v(" 方法包装了默认的注册器，这样在注册指标的时候，就会自动添加这个全局标签。")]),t._v(" "),s("li",[t._v("最后将这些指标注册到 "),s("code",[t._v("prometheus.DefaultRegisterer")]),t._v(" 中。这样，这些指标就可以被 Prometheus 收集和存储了。")])]),t._v(" "),s("h2",{attrs:{id:"上报指标数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上报指标数据"}},[t._v("#")]),t._v(" 上报指标数据")]),t._v(" "),s("p",[t._v("上面的代码中，我们定义了三个指标，但是并没有将它们的数据上报到 Prometheus。接下来，我们需要在应用程序中添加一些代码，将这些指标的数据上报到 Prometheus。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" middleware\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"strconv"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"time"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gitea.fbbmore.com/goweb/nexco/api/internal/service"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrometheusMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HandlerFunc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tstart "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理请求")]),t._v("\n\t\tctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Next")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n\t\tduration "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Since")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Seconds")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tstatus "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Writer"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Status")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tmethod "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Method\n\t\tpath "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" ctx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("URL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Path\n\n\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新指标")]),t._v("\n\t\tservice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NexcoHttpRequestsTotal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithLabelValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Inc")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t\tservice"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NexcoHttpRequestDuration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WithLabelValues")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" path"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" strconv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Itoa")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Observe")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("duration"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局使用中间件")]),t._v("\nengine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RecoveryMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("         "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// panic recovery")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrometheusMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// prometheus监控")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("TraceIdMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("          "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 全局请求ID生成")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CorsMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("             "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许跨域请求")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RequestBodyCacheMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求body缓存")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RequestLoggerMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请求日志记录")]),t._v("\n    middleware"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("RateLimitMiddleware")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 限流处理")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在上面的代码中，我们定义了一个 "),s("code",[t._v("PrometheusMiddleware")]),t._v(" 中间件，它会在每个请求处理之前和之后更新指标数据。")]),t._v(" "),s("li",[t._v("在请求处理之前，我们记录了请求开始的时间。")]),t._v(" "),s("li",[t._v("在请求处理之后，我们记录了请求结束的时间，并计算了请求的处理时间。")]),t._v(" "),s("li",[t._v("然后，我们使用 "),s("code",[t._v("WithLabelValues")]),t._v(" 方法为指标添加了标签，并使用 "),s("code",[t._v("Inc")]),t._v(" 方法更新了 "),s("code",[t._v("NexcoHttpRequestsTotal")]),t._v(" 指标的值。这个指标表示 HTTP 请求的总数。")]),t._v(" "),s("li",[t._v("使用 "),s("code",[t._v("Observe")]),t._v(" 方法更新了 "),s("code",[t._v("NexcoHttpRequestDuration")]),t._v(" 指标的值。这个指标表示 HTTP 请求的处理时间。")]),t._v(" "),s("li",[t._v("最后，我们将这个中间件添加到 Gin 的路由中，这样每个请求都会经过这个中间件，并更新指标数据。")])]),t._v(" "),s("h2",{attrs:{id:"暴露指标数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#暴露指标数据"}},[t._v("#")]),t._v(" 暴露指标数据")]),t._v(" "),s("p",[t._v("在应用程序中定义了指标之后，我们需要将这些指标暴露给 Prometheus，以便 Prometheus 可以收集和存储这些指标。在 Go 中，我们可以使用 "),s("code",[t._v("promhttp")]),t._v(" 包来暴露指标数据。")]),t._v(" "),s("div",{staticClass:"language-go extra-class"},[s("pre",{pre:!0,attrs:{class:"language-go"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("package")]),t._v(" handler\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"net/http"')]),t._v("\n\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"gitea.fbbmore.com/goweb/nexco/api/internal/service"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/gin-gonic/gin"')]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"github.com/prometheus/client_golang/prometheus/promhttp"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\troutes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("routes"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" prometheusRoutes"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" prometheusRoutes "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("Route"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tMethod"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("MethodGet"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tPath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/metrics"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" PrometheusHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("PrometheusHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("svc "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("HandlerFunc "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" gin"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WrapH")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("promhttp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Handler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在上面的代码中，我们定义了一个 "),s("code",[t._v("PrometheusHandler")]),t._v(" 函数，它返回一个 "),s("code",[t._v("gin.HandlerFunc")]),t._v("，这个函数会使用 "),s("code",[t._v("promhttp.Handler()")]),t._v(" 函数来创建一个 HTTP 处理器，这个处理器会将指标数据暴露给 Prometheus。")]),t._v(" "),s("li",[t._v("然后，我们将这个处理器添加到 Gin 的路由中，这样当用户访问 "),s("code",[t._v("/metrics")]),t._v(" 路径时，Prometheus 就可以收集和存储指标数据了。")])])])}),[],!1,null,null,null);s.default=e.exports}}]);