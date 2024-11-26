(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{362:function(s,a,t){"use strict";t.r(a);var n=t(5),r=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"如何在服务器上显示中国时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何在服务器上显示中国时间"}},[s._v("#")]),s._v(" 如何在服务器上显示中国时间")]),s._v(" "),a("p",[s._v("我们在搭建完服务器之后，默认的时区通常是"),a("strong",[s._v("Etc/UTC (UTC, +0000)")]),s._v("。")]),s._v(" "),a("p",[a("code",[s._v("Etc/UTC")]),s._v(' 是一个特殊的时区标识，代表协调世界时（Coordinated Universal Time，缩写为UTC）或格林威治标准时间（Greenwich Mean Time，缩写为GMT）。这是一个不考虑夏令时的时区，始终保持不变。\n"+0000" 是与UTC时区关联的时区偏移值，表示该时区与UTC的时间差为0小时，也就是与UTC时间完全一致。\n如果你的服务器时区设置为"Etc/UTC"，那么它将使用UTC时间作为系统的标准时间，不考虑夏令时的调整。这在一些服务器和应用程序中很常见，因为UTC时间通常用于记录日志和确保全球各地的时间一致性。')]),s._v(" "),a("p",[s._v("我们想要显示中国时间，只需要把时区切换到中国时区就好。下面我来聊聊如何切换时区。")]),s._v(" "),a("h2",{attrs:{id:"查看当前系统时间信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看当前系统时间信息"}},[s._v("#")]),s._v(" 查看当前系统时间信息")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ timedatectl\nLocal time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:22:14 UTC\nUniversal time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:22:14 UTC\nRTC time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:22:14\nTime zone: Etc/UTC "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("UTC, +0000"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSystem clock synchronized: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\nNTP service: active\nRTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" TZ: no\n")])])]),a("h2",{attrs:{id:"列出可用时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出可用时区"}},[s._v("#")]),s._v(" 列出可用时区")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ timedatectl list-timezones\nAfrica/Abidjan\nAfrica/Accra\nAfrica/Abidjan\nAfrica/Accra\nAfrica/Addis_Ababa\nAfrica/Algiers\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])]),a("h2",{attrs:{id:"设置时区"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置时区"}},[s._v("#")]),s._v(" 设置时区")]),s._v(" "),a("p",[s._v('要设置服务器的时区，使用以下命令，将时区替换为你希望设置的时区，例如将时区设置为"Asia/Shanghai"：')]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" timedatectl set-timezone Asia/Shanghai\n")])])]),a("p",[s._v("验证时区设置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ timedatectl\n               Local time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":33:17 CST\n           Universal time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:33:17 UTC\n                 RTC time: Fri "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("-09-08 09:33:17\n                Time zone: Asia/Shanghai "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("CST, +0800"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nSystem clock synchronized: "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n              NTP service: active\n          RTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" TZ: no\n")])])]),a("h2",{attrs:{id:"临时显示指定地区时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#临时显示指定地区时间"}},[s._v("#")]),s._v(" 临时显示指定地区时间")]),s._v(" "),a("p",[s._v("我们可以使用环境变量"),a("code",[s._v("TZ")]),s._v("来临时指定时区。下面是一些示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\nFri Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17")]),s._v(":36:25 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"America/New_York"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\nFri Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" 05:36:27 EDT "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2023")]),s._v("\n\n$ ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388700")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":17 ./\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("13")]),s._v(":17 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\nlrwxrwxrwx   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root        root                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" 08:17 bin -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" usr/bin/\ndrwxr-xr-x   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("14")]),s._v(":37 boot/\ndrwxr-xr-x   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" bingbing-fu bingbing-fu       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v(":32 data/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n$ $ "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("TZ")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"America/New_York"')]),s._v(" ll\ntotal "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8388700")]),s._v("\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" 01:17 ./\ndrwxr-xr-x  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Aug "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("31")]),s._v(" 01:17 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("/\nlrwxrwxrwx   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" root        root                 "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7")]),s._v(" Aug  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":17 bin -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" usr/bin/\ndrwxr-xr-x   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" root        root              "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 02:37 boot/\ndrwxr-xr-x   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),s._v(" bingbing-fu bingbing-fu       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" Sep  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" 04:32 data/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);