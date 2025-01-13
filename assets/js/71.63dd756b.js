(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{372:function(a,s,t){"use strict";t.r(s);var e=t(5),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"grafana-安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#grafana-安装"}},[a._v("#")]),a._v(" Grafana 安装")]),a._v(" "),s("h2",{attrs:{id:"打开官网下载链接"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开官网下载链接"}},[a._v("#")]),a._v(" 打开官网下载链接")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://grafana.com/grafana/download?pg=oss-graf&plcmt=hero-btn-1",target:"_blank",rel:"noopener noreferrer"}},[a._v("官网下载链接"),s("OutboundLink")],1)]),a._v(" "),s("h2",{attrs:{id:"centos安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos安装"}},[a._v("#")]),a._v(" "),s("code",[a._v("centos")]),a._v("安装")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" https://dl.grafana.com/enterprise/release/grafana-enterprise-11.4.0-1.x86_64.rpm\n")])])]),s("h2",{attrs:{id:"启动服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),s("h6",{attrs:{id:"启动服务-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动服务-2"}},[a._v("#")]),a._v(" 启动服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start grafana-server\n")])])]),s("h6",{attrs:{id:"设置开机自启"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置开机自启"}},[a._v("#")]),a._v(" 设置开机自启")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" grafana-server\n")])])]),s("h6",{attrs:{id:"查看服务状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看服务状态"}},[a._v("#")]),a._v(" 查看服务状态")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# systemctl status grafana-server.service ")]),a._v("\n● grafana-server.service - Grafana instance\n   Loaded: loaded "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("/usr/lib/systemd/system/grafana-server.service"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" enabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" vendor preset: disabled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n   Active: active "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("running"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" since 五 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-10 09:31:13 CST"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" 24h ago\n     Docs: http://docs.grafana.org\n Main PID: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    Tasks: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("14")]),a._v("\n   Memory: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("71")]),a._v(".1M\n   CGroup: /system.slice/grafana-server.service\n           └─22957 /usr/share/grafana/bin/grafana server "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--config")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/etc/grafana/grafana.ini "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--pidfile")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/run/grafana/grafana-server.pid "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--packaging")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("rpm cfg:default.paths.logs"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/var/log/grafana cfg:default.paths.data"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/v"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\n\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" 09:41:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugins.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T09:41:14.642553206+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("312")]),a._v(".872818ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" 09:51:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cleanup "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T09:51:14.000627833+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Completed cleanup jobs"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".471875ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" 09:51:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("grafana.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T09:51:14.568002455+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("263")]),a._v(".799707ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" 09:51:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugins.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T09:51:14.665380195+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("335")]),a._v(".201599ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":01:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cleanup "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:01:14.000071983+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Completed cleanup jobs"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".580232ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":01:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("grafana.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:01:14.607055233+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("302")]),a._v(".638381ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":01:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugins.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:01:14.629948504+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("300")]),a._v(".641279ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":11:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("cleanup "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:11:13.999824857+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Completed cleanup jobs"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(".300565ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":11:14 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("plugins.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:11:14.63455366+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("info "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check succeeded"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("duration")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("304")]),a._v(".538392ms\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("月 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":11:44 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("78.174")]),a._v(" grafana"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22957")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(": "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("logger")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("grafana.update.checker "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("t")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2025")]),a._v("-01-11T10:11:44.304699229+08:00 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("level")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("error "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("msg")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Update check failed"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("error")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v('"failed to get latest.json repo from github.com: Get '),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v('"https://raw'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".\nHint: Some lines were ellipsized, use "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-l")]),a._v(" to show "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("in")]),a._v(" full.\n")])])]),s("h2",{attrs:{id:"访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#访问"}},[a._v("#")]),a._v(" 访问")]),a._v(" "),s("p",[a._v("浏览器输入"),s("code",[a._v("http://localhost:3000")]),a._v("即可访问"),s("code",[a._v("grafana")]),a._v("\n默认用户名和密码为"),s("code",[a._v("admin/admin")])])])}),[],!1,null,null,null);s.default=r.exports}}]);