(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{325:function(a,s,t){"use strict";t.r(s);var r=t(5),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos7中配置开机自动执行不生效问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos7中配置开机自动执行不生效问题"}},[a._v("#")]),a._v(" Centos7中配置开机自动执行不生效问题")]),a._v(" "),s("h2",{attrs:{id:"正常配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#正常配置"}},[a._v("#")]),a._v(" 正常配置")]),a._v(" "),s("p",[a._v("我们正常的业务中，有很多需要开启自动执行的诉求，比如挂在数据盘到数据系统。")]),a._v(" "),s("h6",{attrs:{id:"打开rc-local文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#打开rc-local文件"}},[a._v("#")]),a._v(" 打开rc.local文件")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("vim")]),a._v(" /etc/rc.d/rc.local\n")])])]),s("h6",{attrs:{id:"在文件最后新增如下内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#在文件最后新增如下内容"}},[a._v("#")]),a._v(" 在文件最后新增如下内容")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("mount")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-t")]),a._v(" cifs //192.168.73.1/webdata/golang /usr/local/webdata/golang "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("uid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(",gid"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1000")]),a._v(",username"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("share,password"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("share123456\n")])])]),s("p",[a._v("这个时候，正常来说下次启动的时候会自动挂载文件，但是并没有。")]),a._v(" "),s("h2",{attrs:{id:"不生效原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不生效原因"}},[a._v("#")]),a._v(" 不生效原因")]),a._v(" "),s("p",[a._v("从CentOS7.0开始，/etc/rc.d/rc.local文件的初始权限变成了644，默认是不使用/etc/rc.local文件作为开机启动了，\n并且rc-local.service服务的状态是disabled状态。所以我们需要从下面两个方面检查。")]),a._v(" "),s("h6",{attrs:{id:"给-etc-rc-d-rc-local文件新增执行权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#给-etc-rc-d-rc-local文件新增执行权限"}},[a._v("#")]),a._v(" 给/etc/rc.d/rc.local文件新增执行权限")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+x /etc/rc.d/rc.local\n")])])]),s("h6",{attrs:{id:"启动rc-local-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动rc-local-service"}},[a._v("#")]),a._v(" 启动rc-local.service")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" rc-local.service\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start rc-local.service\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);