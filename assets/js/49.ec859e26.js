(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{350:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ubuntu系统安装和以守护进程运行jupyter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu系统安装和以守护进程运行jupyter"}},[t._v("#")]),t._v(" Ubuntu系统安装和以守护进程运行jupyter")]),t._v(" "),a("p",[t._v("Jupyter是一个开源的交互式计算环境，最初是用于支持Python编程语言的交互式数据分析和可视化工作。它的名称由三个主要支持的编程语言，即Julia、Python和R（R语言）的开头字母组成。Jupyter提供了一个基于Web的界面，允许用户在浏览器中创建和分享文档，这些文档可以包含实时代码、方程、图表、可视化结果以及文本说明，从而实现了代码和解释性内容的结合。")]),t._v(" "),a("p",[t._v("Jupyter最显著的特点之一是它支持多种编程语言的内核，使得用户可以在同一个环境中使用不同的编程语言进行交互式计算。除了Python、Julia和R，Jupyter还可以通过内核扩展支持其他编程语言。")]),t._v(" "),a("p",[t._v("下面我将详细的介绍一下在"),a("code",[t._v("Ubuntu")]),t._v("环境下安装"),a("code",[t._v("jupyter")]),t._v("的流程。")]),t._v(" "),a("h2",{attrs:{id:"使用conda命令创建jupyter环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用conda命令创建jupyter环境"}},[t._v("#")]),t._v(" 使用"),a("code",[t._v("conda")]),t._v("命令创建"),a("code",[t._v("jupyter")]),t._v("环境")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建一个名称为jupyter的python环境，使用python 3.10.6版本")]),t._v("\n$ conda create "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" jupyter "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("python")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.10")]),t._v(".6\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 激活jupyter环境")]),t._v("\n$ conda activate jupyter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在jupyter环境中安装jupyter")]),t._v("\n$ conda "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" jupyter\n")])])]),a("h2",{attrs:{id:"使用jupyter命令初始化配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用jupyter命令初始化配置文件"}},[t._v("#")]),t._v(" 使用"),a("code",[t._v("jupyter")]),t._v("命令初始化配置文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 生成jupyter配置文件   ")]),t._v("\n$ jupyter notebook --generate-config\n")])])]),a("h2",{attrs:{id:"修改jupyter相关配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改jupyter相关配置"}},[t._v("#")]),t._v(" 修改"),a("code",[t._v("jupyter")]),t._v("相关配置")]),t._v(" "),a("h4",{attrs:{id:"修改-jupyter-jupyter-notebook-config-py文件一下内容"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-jupyter-jupyter-notebook-config-py文件一下内容"}},[t._v("#")]),t._v(" 修改"),a("code",[t._v("~/.jupyter/jupyter_notebook_config.py")]),t._v("文件一下内容")]),t._v(" "),a("div",{staticClass:"language-python extra-class"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定jupyter的工作目录")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotebookApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("notebook_dir "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/data/jupyter_data'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定jupyter的允许访问地址为0.0.0.0")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotebookApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ip "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'0.0.0.0'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 指定jupyter启动时不自动打开浏览器")]),t._v("\nc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("NotebookApp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("open_browser "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n")])])]),a("h4",{attrs:{id:"生成jupyter相关密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#生成jupyter相关密码"}},[t._v("#")]),t._v(" 生成"),a("code",[t._v("jupyter")]),t._v("相关密码")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 执行下面命令 输入密码和确认密码")]),t._v("\n$ jupyter notebook password\n")])])]),a("h2",{attrs:{id:"以systemd启动jupyter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以systemd启动jupyter"}},[t._v("#")]),t._v(" 以"),a("code",[t._v("systemd")]),t._v("启动"),a("code",[t._v("jupyter")])]),t._v(" "),a("h4",{attrs:{id:"新建jupyter-systemd文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建jupyter-systemd文件"}},[t._v("#")]),t._v(" 新建"),a("code",[t._v("jupyter systemd")]),t._v("文件")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/systemd/system/jupyter.service\n")])])]),a("h4",{attrs:{id:"新增一下配置信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新增一下配置信息"}},[t._v("#")]),t._v(" 新增一下配置信息")]),t._v(" "),a("div",{staticClass:"language-systemd extra-class"},[a("pre",{pre:!0,attrs:{class:"language-systemd"}},[a("code",[a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Unit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Description")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("Jupyter Notebook Server")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("After")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("network.target")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Service")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("Type")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("simple")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("User")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("fbbyqsyea")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("/home/fbbyqsyea/miniconda3/envs/jupyter/bin/jupyter notebook")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token section"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token section-name selector"}},[t._v("Install")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key attr-name"}},[t._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token value attr-value"}},[t._v("multi-user.target")]),t._v("\n")])])]),a("h4",{attrs:{id:"运行jupyter"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行jupyter"}},[t._v("#")]),t._v(" 运行"),a("code",[t._v("jupyter")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 载入jupyter")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl daemon-reload\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置开机自启动")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("enable")]),t._v(" jupyter.service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 运行jupyter")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" systemctl start jupyter.service\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);