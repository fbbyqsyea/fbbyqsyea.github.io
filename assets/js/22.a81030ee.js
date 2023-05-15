(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{327:function(a,s,t){"use strict";t.r(s);var e=t(5),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"centos安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#centos安装docker"}},[a._v("#")]),a._v(" centos安装docker")]),a._v(" "),s("h3",{attrs:{id:"删除老版本的docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除老版本的docker"}},[a._v("#")]),a._v(" 删除老版本的docker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum remove "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-common "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine\n")])])]),s("h3",{attrs:{id:"安装yum-utils工具-添加docker源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装yum-utils工具-添加docker源"}},[a._v("#")]),a._v(" 安装yum-utils工具 添加docker源")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum-config-manager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --add-repo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    https://download.docker.com/linux/centos/docker-ce.repo\n")])])]),s("h3",{attrs:{id:"替换阿里云docker镜像仓库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#替换阿里云docker镜像仓库"}},[a._v("#")]),a._v(" 替换阿里云docker镜像仓库")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum-config-manager "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    --add-repo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo \n")])])]),s("h3",{attrs:{id:"选择安装版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择安装版本"}},[a._v("#")]),a._v(" 选择安装版本")]),a._v(" "),s("p",[a._v("docker支持安装尝鲜版(nightly)、测试版(test)和稳定版(默认版本)")]),a._v(" "),s("h5",{attrs:{id:"尝鲜版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#尝鲜版"}},[a._v("#")]),a._v(" 尝鲜版")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum-config-manager "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enable")]),a._v(" docker-ce-nightly\n")])])]),s("h5",{attrs:{id:"测试版"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试版"}},[a._v("#")]),a._v(" 测试版")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum-config-manager "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enable")]),a._v(" docker-ce-test\n")])])]),s("h3",{attrs:{id:"安装docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装docker"}},[a._v("#")]),a._v(" 安装docker")]),a._v(" "),s("h5",{attrs:{id:"安装最新版的docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装最新版的docker"}},[a._v("#")]),a._v(" 安装最新版的docker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce docker-ce-cli containerd.io\n")])])]),s("h5",{attrs:{id:"安装指定版本的docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装指定版本的docker"}},[a._v("#")]),a._v(" 安装指定版本的docker")]),a._v(" "),s("h6",{attrs:{id:"查找支持的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找支持的版本"}},[a._v("#")]),a._v(" 查找支持的版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ yum list docker-ce "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--showduplicates")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sort")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-r")]),a._v("\n")])])]),s("h6",{attrs:{id:"安装指定的版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装指定的版本"}},[a._v("#")]),a._v(" 安装指定的版本")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" docker-ce-cli-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("VERSION_STRING"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" containerd.io\n")])])]),s("h3",{attrs:{id:"启动docker服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动docker服务"}},[a._v("#")]),a._v(" 启动docker服务")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])]),s("h3",{attrs:{id:"验证安装是否成功"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证安装是否成功"}},[a._v("#")]),a._v(" 验证安装是否成功")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run hello-world\n")])])]),s("h3",{attrs:{id:"配置docker开机自启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置docker开机自启动"}},[a._v("#")]),a._v(" 配置docker开机自启动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" systemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" containerd\n")])])]),s("h3",{attrs:{id:"以非管理员身份运行docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#以非管理员身份运行docker"}},[a._v("#")]),a._v(" 以非管理员身份运行docker")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 1. 新建docker组")]),a._v("\n $ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("groupadd")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 2. 将当前用户加入docker组")]),a._v("\n $ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("usermod")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-aG")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[a._v("$USER")]),a._v("\n \n "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 3. 将当前用户登入docker组")]),a._v("\n $ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" newgrp "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);