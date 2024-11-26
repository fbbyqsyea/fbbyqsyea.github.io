(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{347:function(a,t,e){"use strict";e.r(t);var s=e(5),r=Object(s.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"golang获取指定git分支的模块"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#golang获取指定git分支的模块"}},[a._v("#")]),a._v(" golang获取指定git分支的模块")]),a._v(" "),t("h2",{attrs:{id:"问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[a._v("#")]),a._v(" 问题")]),a._v(" "),t("p",[a._v("今天早上接到通知，openai公布了最新的gpt-3.5-turbo和gpt-4的模型版本，gpt-3.5-turbo-0613和gpt4-0613。打算把模型换成最新的模型，打开openai接口的"),t("a",{attrs:{href:"https://github.com/sashabaranov/go-openai",target:"_blank",rel:"noopener noreferrer"}},[a._v("go sdk"),t("OutboundLink")],1),a._v("，发现已经有"),t("a",{attrs:{href:"https://github.com/sashabaranov/go-openai/issues/360",target:"_blank",rel:"noopener noreferrer"}},[a._v("issue"),t("OutboundLink")],1),a._v("提出和"),t("a",{attrs:{href:"https://github.com/sashabaranov/go-openai/pull/361",target:"_blank",rel:"noopener noreferrer"}},[a._v("pull request"),t("OutboundLink")],1),a._v("处理了。master分支已经包含了两个新增的最新的模型，但是tag标签中还未生成新的标签。这个时候我们如果需要使用master分支的代码，而不是最新的tag的代码。我们应该怎么做呢？\n"),t("img",{attrs:{src:"/images/openai-go-pull-request-361.png"}})]),a._v(" "),t("h2",{attrs:{id:"解答"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解答"}},[a._v("#")]),a._v(" 解答")]),a._v(" "),t("p",[a._v("我们知道我们在用"),t("code",[a._v("go get ...")]),a._v("和"),t("code",[a._v("go install ...")]),a._v("命令获取git仓库的代码时，优先获取最新tag作为module版本号，并且获取对应tag的的代码，如果没有tag则会根据主线分支("),t("strong",[a._v("master")]),a._v(")分支和时间序列的版本号同时获取主线的代码。针对上面的分支，tag代码版本落后于master。我们想要获取主线分支的代码，我们可以指定git 仓库分支进行拉取。具体命令如下。")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# go get github.com/xxxx/xxxxx@branch_name")]),a._v("\n$ go get "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" github.com/sashabaranov/go-openai@master\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# go install github.com/xxxx/xxxxx@branch_name")]),a._v("\n$ go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" github.com/sashabaranov/go-openai@master\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);