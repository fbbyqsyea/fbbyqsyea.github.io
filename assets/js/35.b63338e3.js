(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{336:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"php-curl-write-function"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-curl-write-function"}},[t._v("#")]),t._v(" PHP Curl Write Function")]),t._v(" "),s("h2",{attrs:{id:"write-function-介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#write-function-介绍"}},[t._v("#")]),t._v(" Write Function 介绍")]),t._v(" "),s("p",[t._v("在PHP的cURL库中，CURLOPT_WRITEFUNCTION选项用于指定在HTTP请求期间接收到的每个数据块的回调函数。该选项允许您以自定义方式处理接收到的数据。")]),t._v(" "),s("p",[t._v("以下是在PHP中如何使用CURLOPT_WRITEFUNCTION和cURL的示例：")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个cURL句柄")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置URL")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'http://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置WRITEFUNCTION选项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_WRITEFUNCTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$curl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理接收到的数据")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在此示例中，我们只是将数据输出到屏幕上")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回已处理的字节数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strlen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行请求")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭cURL句柄")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在上面的示例中，为CURLOPT_WRITEFUNCTION指定的匿名函数将在接收到每个数据块时调用。该函数接受两个参数：cURL句柄（$curl）和接收到的数据（$data）。")]),t._v(" "),s("p",[t._v("在回调函数内部，您可以对接收到的数据执行任何自定义处理。在此示例中，我们只是将数据输出到屏幕上，但您可以修改它，将其保存到文件中或执行任何其他所需的操作。该函数应返回从接收到的数据中处理的字节数。")]),t._v(" "),s("p",[t._v("请注意，CURLOPT_WRITEFUNCTION选项从PHP 5.1.3开始可用，并且需要将CURLOPT_RETURNTRANSFER选项设置为true（1）以正常工作。")]),t._v(" "),s("h2",{attrs:{id:"统计多个数据块时间间隔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#统计多个数据块时间间隔"}},[t._v("#")]),t._v(" 统计多个数据块时间间隔")]),t._v(" "),s("p",[t._v("要统计每个数据块之间的间隔时间，您可以使用PHP的microtime()函数来获取当前时间的微秒数。在CURLOPT_WRITEFUNCTION回调函数内部，您可以记录每个数据块的接收时间，并计算与上一个数据块之间的时间差。")]),t._v(" "),s("p",[t._v("以下是修改后的示例代码，以包括每个数据块之间的时间间隔统计：")]),t._v(" "),s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个cURL句柄")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_init")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置URL")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string single-quoted-string"}},[t._v("'http://example.com'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置WRITEFUNCTION选项")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_setopt")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("CURLOPT_WRITEFUNCTION")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$curl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$previousTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 上一个数据块的时间")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$currentTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("microtime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token constant boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前时间")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是第一个数据块，则不计算时间间隔")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$previousTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$interval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$currentTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$previousTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('"Time interval: "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$interval")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(".")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string double-quoted-string"}},[t._v('" seconds\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 处理接收到的数据")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 在此示例中，我们只是将数据输出到屏幕上")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 更新上一个数据块的时间")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$previousTime")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$currentTime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 返回已处理的字节数")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("strlen")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 执行请求")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_exec")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭cURL句柄")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl_close")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$ch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("在上述示例中，我们使用static关键字在回调函数内部声明了一个静态变量$previousTime，用于存储上一个数据块的时间。通过使用microtime(true)获取当前时间的微秒数，并计算与上一个数据块的时间差，您可以获得每个数据块之间的时间间隔。在示例中，我们将时间间隔以秒为单位输出到屏幕上。")]),t._v(" "),s("p",[t._v("请注意，对于第一个数据块，由于没有前一个数据块，因此没有时间间隔可计算，因此我们在回调函数内添加了一个条件来排除第一个数据块的时间间隔统计。")])])}),[],!1,null,null,null);s.default=e.exports}}]);