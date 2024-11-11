(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{353:function(a,s,r){"use strict";r.r(s);var t=r(5),e=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"ubuntu-server-install-nvidia-driver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-server-install-nvidia-driver"}},[a._v("#")]),a._v(" Ubuntu Server Install Nvidia Driver")]),a._v(" "),s("h2",{attrs:{id:"添加graphics-drivers-ppa"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加graphics-drivers-ppa"}},[a._v("#")]),a._v(" 添加Graphics Drivers PPA")]),a._v(" "),s("p",[a._v("PPA（Personal Package Archive）是一种用于在Ubuntu中安装软件的方式。输入以下命令将Graphics Drivers PPA添加到系统中：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" add-apt-repository ppa:graphics-drivers/ppa\n")])])]),s("p",[a._v("按下回车后，系统可能会要求你输入管理员密码。")]),a._v(" "),s("h2",{attrs:{id:"更新软件包信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新软件包信息"}},[a._v("#")]),a._v(" 更新软件包信息")]),a._v(" "),s("p",[a._v("执行以下命令来更新软件包信息：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n")])])]),s("h2",{attrs:{id:"查找nvidia驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查找nvidia驱动"}},[a._v("#")]),a._v(" 查找NVIDIA驱动")]),a._v(" "),s("p",[a._v("执行下列命令查询NVIDIA驱动")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" list nvidia-driver-*\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("sudo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" password "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("for")]),a._v(" ubuntu: \nListing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(". Done\nnvidia-driver-390/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("390.157")]),a._v("-0ubuntu0.22.04.2 amd64\nnvidia-driver-418-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("418.226")]),a._v(".00-0ubuntu5~0.22.04.1 amd64\nnvidia-driver-418/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("430.50")]),a._v("-0ubuntu3 amd64\nnvidia-driver-430/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("440.100")]),a._v("-0ubuntu1 amd64\nnvidia-driver-435/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("455.45")]),a._v(".01-0ubuntu1 amd64\nnvidia-driver-440-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("450.248")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-440/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("450.119")]),a._v(".03-0ubuntu1 amd64\nnvidia-driver-450-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("450.248")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-450/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("460.91")]),a._v(".03-0ubuntu1 amd64\nnvidia-driver-455/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("460.91")]),a._v(".03-0ubuntu1 amd64\nnvidia-driver-460-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-460/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-465/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-470-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02-0ubuntu0.22.04.1 amd64\nnvidia-driver-470/jammy-updates,jammy-security,jammy,now "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02-0ubuntu0.22.04.1 amd64 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("installed"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\nnvidia-driver-495/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("510.108")]),a._v(".03-0ubuntu0.22.04.1 amd64\nnvidia-driver-510-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("515.105")]),a._v(".01-0ubuntu0.22.04.1 amd64\nnvidia-driver-510/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-515-open/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-515-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-515/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-520-open/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-520/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-525-open/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-525-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-525/jammy-updates,jammy-security,jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("525.125")]),a._v(".06-0ubuntu0.22.04.1 amd64\nnvidia-driver-530-open/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-530/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-535-open/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-535-server-open/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.54")]),a._v(".03-0ubuntu0.22.04.1 amd64\nnvidia-driver-535-server/jammy-updates,jammy-security "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.54")]),a._v(".03-0ubuntu0.22.04.1 amd64\nnvidia-driver-535/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-core-535-open/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-core-535/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-lrm-535-open/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\nnvidia-driver-lrm-535/jammy "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("535.104")]),a._v(".05-0ubuntu0.22.04.1 amd64\n")])])]),s("h2",{attrs:{id:"安装nvidia驱动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装nvidia驱动"}},[a._v("#")]),a._v(" 安装NVIDIA驱动")]),a._v(" "),s("p",[a._v("安装NVIDIA显卡驱动的命令会根据你的显卡型号和系统需求而有所不同。一般来说，你可以使用以下命令来安装推荐的稳定版本驱动：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nvidia-driver-"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("版本号"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n")])])]),s("p",[a._v("在上面的命令中，将<版本号>替换为你想要安装的驱动版本号。例如，如果要安装版本号为470的驱动，命令将是：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" nvidia-driver-470\n")])])]),s("h2",{attrs:{id:"重启系统"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#重启系统"}},[a._v("#")]),a._v(" 重启系统")]),a._v(" "),s("p",[a._v("安装完成后，重新启动系统以使新的驱动生效。")]),a._v(" "),s("h2",{attrs:{id:"验证驱动安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#验证驱动安装"}},[a._v("#")]),a._v(" 验证驱动安装")]),a._v(" "),s("p",[a._v("安装完成后，你可以使用以下命令来验证驱动是否正确安装：")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ nvidia-smi\nWed Aug "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),a._v(" 05:39:41 "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2023")]),a._v("       \n+-----------------------------------------------------------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" NVIDIA-SMI "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02   Driver Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("470.199")]),a._v(".02   CUDA Version: "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("11.4")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("-------------------------------+----------------------+----------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" GPU  Name        Persistence-M"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" Bus-Id        Disp.A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" Volatile Uncorr. ECC "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" Fan  Temp  Perf  Pwr:Usage/Cap"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("         Memory-Usage "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" GPU-Util  Compute M. "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                               "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("               MIG M. "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("  NVIDIA GeForce "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".  Off  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 00000000:01:00.0 Off "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                  N/A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("%   61C    P0   118W / 350W "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      0MiB / 24268MiB "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("%      Default "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                               "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                  N/A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+-------------------------------+----------------------+----------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("  NVIDIA GeForce "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("..")]),a._v(".  Off  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" 00000000:05:00.0 Off "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                  N/A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("%   57C    P0   100W / 350W "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      0MiB / 24268MiB "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("      "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("%      Default "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                               "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("                  N/A "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+-------------------------------+----------------------+----------------------+\n                                                                               \n+-----------------------------------------------------------------------------+\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" Processes:                                                                  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  GPU   GI   CI        PID   Type   Process name                  GPU Memory "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("        ID   ID                                                   Usage      "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("  No running processes found                                                 "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("\n+-----------------------------------------------------------------------------+\n")])])]),s("p",[a._v("如上该命令显示了关于NVIDIA显卡的信息，那么驱动安装成功。")])])}),[],!1,null,null,null);s.default=e.exports}}]);