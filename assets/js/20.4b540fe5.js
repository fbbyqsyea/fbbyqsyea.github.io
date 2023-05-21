(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{326:function(t,a,e){"use strict";e.r(a);var s=e(5),n=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"入门makefile"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#入门makefile"}},[t._v("#")]),t._v(" 入门makefile")]),t._v(" "),a("h4",{attrs:{id:"make是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make是什么"}},[t._v("#")]),t._v(" make是什么")]),t._v(" "),a("p",[t._v("make是一个自动化构建工具，会在当前目录寻找Makefile或者makefile文件。如果存在，会依据文件的构建规则去完成构建。\n当然了，实际商Makefile内都是依据make语法规则，自己编写的shell命令等。")]),t._v(" "),a("p",[t._v("它是一个简答的工具，规则也很简单。在支持的范围内，编译A，依赖B，再编译c，完全没问题。")]),t._v(" "),a("h4",{attrs:{id:"规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#规则"}},[t._v("#")]),t._v(" 规则")]),t._v(" "),a("p",[t._v("Makefile由多条规则构成。每个规则都以一个target开头。后跟一个:冒号。冒号后面是一个目标的prerequisites(前置条件)。紧跟着新开一行，必须以tab作为开头。后面紧跟着命令；也就是你希望target需要做的事情。")]),t._v(" "),a("div",{staticClass:"language-makefile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-makefile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("[target] ...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" [prerequisites] ...\n<tab>[command]\n    ...\n    ...\n")])])]),a("h4",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[t._v("#")]),t._v(" 例子")]),t._v(" "),a("p",[t._v("我们以go-gin-example项目为例编写makefile。在编写之前，需分析构建的先后顺序、依赖项和需要解决的问题。")]),t._v(" "),a("div",{staticClass:"language-makefile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-makefile"}},[a("code",[t._v(".PHONY build clean tool lint help\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("build")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tgo build -v .\n\t\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("tool")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tgo tool vet . "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("& grep -v vendor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" true\n\tgofmt -w .\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("lint")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\tgolint ./...\n\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("clean")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\trm -rf go-gin-example\n\tgo clean -i .\n\t\n"),a("span",{pre:!0,attrs:{class:"token target symbol"}},[t._v("help")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make: compile packages an dependencies"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make tool: run specified go tool"')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make lint: golint ./..."')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("echo "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"make clean: remove object files and cached files"')]),t._v("\n")])])]),a("p",[t._v(".PHONY 其作用是申明build clean tool lint help为伪目标。声明为伪目标后，在执行对应的命令时，make就不会去检查是否存在build clean tool lint help其对应的文件。而是每次都去运行标签内的命令。若不声明，恰好存在对应文件，则make将会认为文件已存在，没必要构建。")]),t._v(" "),a("h4",{attrs:{id:"为什么会打印执行的命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会打印执行的命令"}},[t._v("#")]),t._v(" 为什么会打印执行的命令")]),t._v(" "),a("p",[t._v("make 默认会打印每条命令，再执行。这个行为被定义为回声.\n可以在对应命令前加上 @，可指定该命令不被打印到标准输出上")])])}),[],!1,null,null,null);a.default=n.exports}}]);