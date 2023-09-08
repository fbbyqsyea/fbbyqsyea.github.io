(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{343:function(a,t,s){"use strict";s.r(t);var r=s(5),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"go项目开发热更新-fresh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#go项目开发热更新-fresh"}},[a._v("#")]),a._v(" go项目开发热更新-fresh")]),a._v(" "),t("h2",{attrs:{id:"什么是热更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是热更新"}},[a._v("#")]),a._v(" 什么是热更新")]),a._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("代码热更新是在研发过程中，修改代码后能够实时生效。方便测试修改代码是否达到了预期的结果。\n像php这样的动态语言是在运行过程中实时编译的，所以不存在热更新的问题。而像golang这样的\n静态语言，由于先要编译成二进制文件才能运行。在研发过程中修改完代码后，再手动生成二进制文\n件运行，这样会导致研发效率低下的问题。因此“热更新”这个词就孕育而生。所谓的代码热更新就是\n在像golang这样的静态语言研发过程中，修改完代码后能够自动实现代码重新编译运行的软件服务。\n")])])]),t("h2",{attrs:{id:"热更新的原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#热更新的原理"}},[a._v("#")]),a._v(" 热更新的原理")]),a._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("热更新的原理很简单，无非是监控指定项目下的所有文件，在文件发生改动后，自动运行编译命令和\n启动命令。\n")])])]),t("h2",{attrs:{id:"fresh的使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fresh的使用"}},[a._v("#")]),a._v(" fresh的使用")]),a._v(" "),t("h4",{attrs:{id:"项目地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#项目地址"}},[a._v("#")]),a._v(" 项目地址")]),a._v(" "),t("div",{staticClass:"language-markdown extra-class"},[t("pre",{pre:!0,attrs:{class:"language-markdown"}},[t("code",[a._v("https://github.com/gravityblast/fresh\n")])])]),t("h4",{attrs:{id:"命令安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令安装"}},[a._v("#")]),a._v(" 命令安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ go "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" github.com/pilu/fresh@latest\n")])])]),t("h4",{attrs:{id:"命令说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令说明"}},[a._v("#")]),a._v(" 命令说明")]),a._v(" "),t("h6",{attrs:{id:"命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#命令"}},[a._v("#")]),a._v(" 命令")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("$ fresh "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v("\nUsage of C:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bingbing.fu"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("go"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("bin"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("fresh.exe:\n  "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" string\n        config "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("file")]),a._v(" path\n")])])]),t("h6",{attrs:{id:"说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#说明"}},[a._v("#")]),a._v(" 说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[a._v("root:              .                                        // 根目录地址\ntmp_path:          ./tmp                                    // 生成临时文件地址\nbuild_name:        runner-build                             // 编译项目名称\nbuild_log:         runner-build-errors.log                  // 编译项目错误日志\nvalid_ext:         .go, .tpl, .tmpl, .html                  // 可用的文件后缀\nno_rebuild_ext:    .tpl, .tmpl, .html                       // 不不变异的文件后缀\nignored:           assets, tmp                              // 忽略的监控目录\nbuild_delay:       600                                      // 编译延时\ncolors:            1                                        // 编译命令行颜色\nlog_color_main:    cyan                                     // 主色调\nlog_color_build:   yellow                                   // 编译命令色调\nlog_color_runner:  green                                    // 运行命令色调\nlog_color_watcher: magenta                                  // 监控命令色调\nlog_color_app:                                              // app 色调\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);