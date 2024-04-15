(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{355:function(a,s,t){"use strict";t.r(s);var n=t(5),e=Object(n.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-ufw-command"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-ufw-command"}},[a._v("#")]),a._v(" Ubuntu UFW Command")]),a._v(" "),s("p",[a._v("根据"),s("a",{attrs:{href:"https://ubuntu.com/server/docs/security-firewall",target:"_blank",rel:"noopener noreferrer"}},[a._v("ubuntu官方文档关于UFW命令的介绍"),s("OutboundLink")],1),a._v(',UFW(Uncomplicated Firewall),UFW 旨在简化 iptables 防火墙配置，提供了一种用户友好的方法来创建基于 IPv4 或 IPv6 主机的防火墙。默认情况下，UFW 最初处于禁用状态。从 ufw 手册页："UFW并不打算通过其命令界面提供完整的防火墙功能，而是提供了一种添加或删除简单规则的简单方法。它目前主要用于基于主机的防火墙"。今天我们来学习一下ufw命令的基础使用。')]),a._v(" "),s("h2",{attrs:{id:"查看ufw防火墙状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看ufw防火墙状态"}},[a._v("#")]),a._v(" 查看UFW防火墙状态")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw status\nStatus: inactive\n")])])]),s("p",[a._v("查看防火墙详细状态信息")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw status verbose\n")])])]),s("p",[a._v("上面的命令代表ufw命令已安装，但是未激活。如果系统中没有安装 UFW，你可以使用以下命令进行安装：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" ufw\n")])])]),s("h2",{attrs:{id:"启用-ufw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启用-ufw"}},[a._v("#")]),a._v(" 启用 UFW")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v("\nCommand may disrupt existing "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ssh")]),a._v(" connections. Proceed with operation "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("y"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("? y\nFirewall is active and enabled on system startup\n")])])]),s("p",[a._v("上面命令在开始ufw的同时提示开启防火墙会导致ssh链接断开。这个时候我们先添加允许SSH连接的规则再开起防火墙。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$  "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\nRule added\nRule added "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("然后执行重启UFW的命令让规则生效")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw reload\nFirewall reloaded\n")])])]),s("h2",{attrs:{id:"配置默认策略"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置默认策略"}},[a._v("#")]),a._v(" 配置默认策略")]),a._v(" "),s("p",[a._v("在启用 UFW 之后，你需要配置默认的策略。默认情况下，所有的入站都会被拒绝，所有的出站流量都是被允许的。这意味着你需要明确地配置规则来允许特定的流量。你可以根据你的需求选择不同的默认策略。首先使用下面的命令查看防火墙的详细信息。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw status verbose\nStatus: active\nLogging: on "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("low"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nDefault: deny "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("incoming"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", allow "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("outgoing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(", disabled "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("routed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\nNew profiles: skip\n\nTo                         Action      From\n--                         ------      ----\n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("                         ALLOW IN    Anywhere                  \n"),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("                    ALLOW IN    Anywhere "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("       \n")])])]),s("p",[a._v("这会显示当前的 UFW 防火墙配置，包括默认策略。在输出中，你会看到以下信息之一：")]),a._v(" "),s("ul",[s("li",[a._v("Default: "),s("code",[a._v("deny (incoming), allow (outgoing)")]),a._v("：表示默认策略是拒绝所有入站流量，允许所有出站流量。")]),a._v(" "),s("li",[a._v("Default: "),s("code",[a._v("allow (incoming), deny (outgoing)")]),a._v("：表示默认策略是允许所有入站流量，拒绝所有出站流量。")]),a._v(" "),s("li",[a._v("Default: "),s("code",[a._v("deny (incoming), deny (outgoing)")]),a._v("：表示默认策略是拒绝所有入站流量和出站流量。")]),a._v(" "),s("li",[a._v("Default: "),s("code",[a._v("allow (incoming), allow (outgoing)")]),a._v("：表示默认策略是允许所有入站流量和出站流量。")])]),a._v(" "),s("h2",{attrs:{id:"添加规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加规则"}},[a._v("#")]),a._v(" 添加规则")]),a._v(" "),s("p",[a._v("要打开端口（在本例中为 SSH），请执行以下操作：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\n\n")])])]),s("p",[a._v("也可以使用编号格式添加规则：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw insert "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" allow "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("\nRule inserted\nRule inserted "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("v6"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("也可以使用常见的服务名称来添加规则")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow openSSH\n")])])]),s("p",[a._v("以下是一些ufw常见的服务别名的示例：")]),a._v(" "),s("ul",[s("li",[a._v("OpenSSH: 允许SSH远程访问，默认端口是22。")]),a._v(" "),s("li",[a._v("HTTP: 允许HTTP流量，默认端口是80。")]),a._v(" "),s("li",[a._v("HTTPS: 允许HTTPS安全HTTP流量，默认端口是443。")]),a._v(" "),s("li",[a._v("FTP: 允许FTP文件传输，默认端口是21。")]),a._v(" "),s("li",[a._v("SMTP: 允许SMTP邮件传输，默认端口是25。")]),a._v(" "),s("li",[a._v("IMAP: 允许IMAP电子邮件访问，默认端口是143。")]),a._v(" "),s("li",[a._v("POP3: 允许POP3电子邮件访问，默认端口是110。")]),a._v(" "),s("li",[a._v("DNS: 允许DNS域名解析，默认端口是53。")]),a._v(" "),s("li",[a._v("NTP: 允许网络时间协议（NTP）流量，默认端口是123。")]),a._v(" "),s("li",[a._v("Samba: 允许Samba文件共享服务，默认端口是139。")]),a._v(" "),s("li",[a._v("Squid: 允许Squid代理服务器，默认端口是3128。")]),a._v(" "),s("li",[a._v("MySQL: 允许MySQL数据库服务，默认端口是3306。")]),a._v(" "),s("li",[a._v("PostgreSQL: 允许PostgreSQL数据库服务，默认端口是5432。")]),a._v(" "),s("li",[a._v("Redis: 允许Redis数据库服务，默认端口是6379。")]),a._v(" "),s("li",[a._v("MongoDB: 允许MongoDB数据库服务，默认端口是27017。")]),a._v(" "),s("li",[a._v("BitTorrent: 允许BitTorrent文件共享服务，默认端口是6881。")])]),a._v(" "),s("p",[a._v("也可以允许从特定主机或网络访问端口。以下示例允许从主机 192.168.0.2 通过 SSH 访问此主机上的任何 IP 地址：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow proto tcp from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.2 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\n")])])]),s("p",[a._v("将 192.168.0.2 替换为 192.168.0.0/24 以允许从整个子网进行 SSH 访问。")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow proto tcp from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.0/24 to any port "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\n")])])]),s("h2",{attrs:{id:"关闭打开的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#关闭打开的端口"}},[a._v("#")]),a._v(" 关闭打开的端口")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw deny "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\n")])])]),s("h2",{attrs:{id:"删除规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除规则"}},[a._v("#")]),a._v(" 删除规则")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw delete deny "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("\n")])])]),s("h2",{attrs:{id:"禁用-ufw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#禁用-ufw"}},[a._v("#")]),a._v(" 禁用 UFW")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw disable\n")])])]),s("h2",{attrs:{id:"重启-ufw"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启-ufw"}},[a._v("#")]),a._v(" 重启 UFW")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw reload\n")])])]),s("h2",{attrs:{id:"dry-run"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dry-run"}},[a._v("#")]),a._v(" --dry-run")]),a._v(" "),s("p",[a._v("将 –dry-run 选项添加到 ufw 命令将输出生成的规则，但不会应用它们。例如，以下是打开 HTTP 端口时将应用的内容：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw --dry-run allow http\n")])])]),s("h2",{attrs:{id:"ufw应用集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ufw应用集成"}},[a._v("#")]),a._v(" UFW应用集成")]),a._v(" "),s("p",[a._v("打开端口的应用程序可以包含 ufw 配置文件，该配置文件详细说明了应用程序正常运行所需的端口。配置文件保留在 中 /etc/ufw/applications.d ，如果默认端口已更改，则可以对其进行编辑。")]),a._v(" "),s("h4",{attrs:{id:"要查看哪些应用程序安装了配置文件-请在终端中输入以下内容"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#要查看哪些应用程序安装了配置文件-请在终端中输入以下内容"}},[a._v("#")]),a._v(" 要查看哪些应用程序安装了配置文件，请在终端中输入以下内容：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw app list\nAvailable applications:\n  OpenSSH\n$ ll /etc/ufw/applications.d/\ntotal "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("12")]),a._v("\ndrwxr-xr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4096")]),a._v(" Apr "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" ./\ndrwxr-xr-x "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("3")]),a._v(" root root "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("4096")]),a._v(" Apr "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v("/\n-rw-r--r-- "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" root root  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("145")]),a._v(" Feb "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("26")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2022")]),a._v(" openssh-server\n")])])]),s("p",[a._v("与允许流量流向端口类似，使用应用程序配置文件是通过输入以下内容来完成的：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow Samba\n")])])]),s("p",[a._v("扩展语法也可用：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw allow from "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("192.168")]),a._v(".0.0/24 to any app Samba\n")])])]),s("p",[a._v("要查看有关为应用程序定义了哪些端口、协议等的详细信息，请输入：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" ufw app info Samba\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);