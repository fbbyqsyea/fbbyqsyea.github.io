(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{329:function(a,s,t){"use strict";t.r(s);var e=t(5),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"常用docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#常用docker"}},[a._v("#")]),a._v(" 常用Docker")]),a._v(" "),s("h2",{attrs:{id:"mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[a._v("#")]),a._v(" mysql")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" mysql "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3306")]),a._v(":3306 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("MYSQL_ROOT_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Aa!23456'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mysql:5.7\n")])])]),s("h2",{attrs:{id:"redis"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis"}},[a._v("#")]),a._v(" redis")]),a._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" redis "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6379")]),a._v(":6379 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" redis redis-server\n\n")])])]),s("h2",{attrs:{id:"etcd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#etcd"}},[a._v("#")]),a._v(" etcd")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" Etcd-server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2379")]),a._v(":2379 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2380")]),a._v(":2380 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--privileged")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--restart")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("always "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--env")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ALLOW_NONE_AUTHENTICATION")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("yes "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    bitnami/etcd:latest\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);