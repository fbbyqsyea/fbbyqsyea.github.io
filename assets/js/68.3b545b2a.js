(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{370:function(s,t,a){"use strict";a.r(t);var e=a(5),n=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"linux-修改磁盘分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-修改磁盘分区"}},[s._v("#")]),s._v(" Linux 修改磁盘分区")]),s._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),t("p",[s._v("最近，在编译打包镜像的老是会失败，查看"),t("code",[s._v("jenkins")]),s._v("编译日志，发现是磁盘空间不足导致的。报错日志如下：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('#14 97.58 go: failed to trim cache: open /root/.cache/go-build/trim.txt: no space left on device\n------\nDockerfile:41\n--------------------\n  39 |     \n  40 |     # 编译项目可执行文件，并压缩生成的二进制文件\n  41 | >>> RUN go build -ldflags="-s -w" -o api/bin/main api/main.go\n  42 |     \n  43 |     # 容器运行镜像为alpine\n--------------------\nERROR: failed to solve: process "/bin/sh -c go build -ldflags=\\"-s -w\\" -o api/bin/main api/main.go" did not complete successfully: exit code: 1\nBuild step \'Execute shell\' marked build as failure\nFinished: FAILURE\n')])])]),t("p",[s._v("之前发生过一次磁盘空间不足，当时的处理方案是使用定时脚本每天凌晨清理掉之前产生的"),t("code",[s._v("docker build")]),s._v("缓存层。命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Y'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" buildx prune --keep-storage 10GB "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" /tmp/docker_prune.log "),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("2")]),s._v(">")]),t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("&1")]),s._v("\n")])])]),t("p",[s._v("上面的命令会保留最近10GB的缓存，其余的缓存都会被清理掉。但是，现在还是出现了磁盘空间不足的问题，所以需要重新考虑一下磁盘空间不足的解决方案。")]),s._v(" "),t("h2",{attrs:{id:"解决方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解决方案"}},[s._v("#")]),s._v(" 解决方案")]),s._v(" "),t("h3",{attrs:{id:"_1-查看磁盘空间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-查看磁盘空间"}},[s._v("#")]),s._v(" 1. 查看磁盘空间")]),s._v(" "),t("p",[s._v("首先，我们需要查看一下磁盘空间的使用情况，使用"),t("code",[s._v("df")]),s._v("命令可以查看磁盘空间的使用情况。命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n")])])]),t("p",[s._v("输出结果如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\n文件系统                 容量  已用  可用 已用% 挂载点\ndevtmpfs                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G  117M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".8G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("% /run\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/mapper/centos-root   50G   49G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("97")]),s._v("% /\n/dev/sda1               1014M  154M  861M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("% /boot\n/dev/mapper/centos-home  441G   33M  441G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /home\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("p",[s._v("从上面的输出结果可以看出，根分区"),t("code",[s._v("/dev/mapper/centos-root")]),s._v("已经使用了97%的空间，而"),t("code",[s._v("/dev/mapper/centos-home")]),s._v("分区还有441G的空间可用。因此我们可以将"),t("code",[s._v("dev/mapper/centos-home")]),s._v("分区中的部分空间划分出来分配给"),t("code",[s._v("/dev/mapper/centos-root")]),s._v("分区。")]),s._v(" "),t("h3",{attrs:{id:"_2-划分分区"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-划分分区"}},[s._v("#")]),s._v(" 2. 划分分区")]),s._v(" "),t("h4",{attrs:{id:"_2-1-备份数据"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-备份数据"}},[s._v("#")]),s._v(" 2.1 备份数据")]),s._v(" "),t("p",[s._v("在开始操作之前，我们首先需要备份"),t("code",[s._v("/dev/mapper/centos-home")]),s._v("分区中的数据。")]),s._v(" "),t("h4",{attrs:{id:"_2-2-检查-lvm-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-检查-lvm-配置"}},[s._v("#")]),s._v(" 2.2 检查 LVM 配置")]),s._v(" "),t("p",[s._v("使用"),t("code",[s._v("lvdisplay")]),s._v("命令检查 LVM 配置，确认"),t("code",[s._v("/dev/mapper/centos-home")]),s._v("分区是否已经挂载到 LVM 上。命令如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lvdisplay\n")])])]),t("p",[s._v("输出结果如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvdisplay")]),s._v("\n  --- Logical volume ---\n  LV Path                /dev/centos/root\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# open                 1")]),s._v("\n  LV Size                "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.00")]),s._v(" GiB\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n   \n  --- Logical volume ---\n  LV Path                /dev/centos/home\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# open                 1")]),s._v("\n  LV Size                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("441.12")]),s._v(" GiB\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n   \n  --- Logical volume ---\n  LV Path                /dev/centos/swap\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# open                 0")]),s._v("\n  LV Size                "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("7.88")]),s._v(" GiB\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n")])])]),t("h4",{attrs:{id:"_2-3-调整分区大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-调整分区大小"}},[s._v("#")]),s._v(" 2.3 调整分区大小")]),s._v(" "),t("p",[s._v("首先减少 "),t("code",[s._v("/dev/mapper/centos-home")]),s._v(" 分区的大小。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvreduce -L -200G /dev/centos/home")]),s._v("\n  WARNING: Reducing active and "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("open")]),s._v(" logical volume to "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("241.12")]),s._v(" GiB.\n  THIS MAY DESTROY YOUR DATA "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("filesystem etc."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nDo you really want to reduce centos/home? "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("y/n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": y\n  Size of logical volume centos/home changed from "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("441.12")]),s._v(" GiB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("112926")]),s._v(" extents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("241.12")]),s._v(" GiB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("61726")]),s._v(" extents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  Logical volume centos/home successfully resized.\n")])])]),t("p",[s._v("然后，扩展 "),t("code",[s._v("/dev/mapper/centos-root")]),s._v(" 分区的大小。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# lvextend -L +200G /dev/centos/root")]),s._v("\n  Size of logical volume centos/root changed from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("50.00")]),s._v(" GiB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("12800")]),s._v(" extents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("250.00")]),s._v(" GiB "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("64000")]),s._v(" extents"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(".\n  Logical volume centos/root successfully resized.\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])])]),t("p",[s._v("这个时候我们查看一下分区情况")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -h")]),s._v("\n文件系统                 容量  已用  可用 已用% 挂载点\ndevtmpfs                 "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G  117M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".8G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("% /run\ntmpfs                    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/mapper/centos-root   50G   49G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("97")]),s._v("% /\n/dev/sda1               1014M  154M  861M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("% /boot\n/dev/mapper/centos-home  441G   33M  441G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /home\n")])])]),t("p",[s._v("会发现刚才的修改并没有生效，这是因为我们在修改完逻辑卷之后还没有将修改应用到文件系统上。我们需要重新调整文件系统的大小。")]),s._v(" "),t("h4",{attrs:{id:"_2-4-调整文件系统大小"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-调整文件系统大小"}},[s._v("#")]),s._v(" 2.4 调整文件系统大小")]),s._v(" "),t("p",[s._v("首先我们需要查看文件系统的类型。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# df -Th")]),s._v("\n文件系统                类型      容量  已用  可用 已用% 挂载点\ndevtmpfs                devtmpfs  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev\ntmpfs                   tmpfs     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /dev/shm\ntmpfs                   tmpfs     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G  117M  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".8G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("% /run\ntmpfs                   tmpfs     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G     "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(".9G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("% /sys/fs/cgroup\n/dev/mapper/centos-root   50G   49G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".7G  "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("97")]),s._v("% /\n/dev/sda1               xfs      1014M  154M  861M   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("% /boot\n/dev/mapper/centos-home xfs       441G   33M  441G    "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("% /home\n")])])]),t("p",[s._v("文件系统类型是"),t("code",[s._v("XFS")]),s._v("。因此我们可以使用"),t("code",[s._v("xfs_growfs")]),s._v("命令来调整文件系统的大小。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# xfs_growfs /dev/centos/root")]),s._v("\nmeta-data"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/dev/mapper/centos-root "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("isize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agcount")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("agsize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3276800")]),s._v(" blks\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sectsz")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("attr")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("projid32bit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("crc")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("        "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("finobt")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("spinodes")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndata     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13107200")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("imaxpct")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("25")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sunit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("      "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("swidth")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blks\nnaming   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("version "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("              "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   ascii-ci"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ftype")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlog      "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("internal               "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("bsize")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6400")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("version")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n         "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("                       "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sectsz")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("512")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("sunit")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" blks, lazy-count"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nrealtime "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("none                   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("extsz")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("   "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("blocks")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("rtextents")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\ndata blocks changed from "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("13107200")]),s._v(" to "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65536000")]),s._v("\n")])])]),t("p",[s._v("如果文件系统类型是"),t("code",[s._v("ext4")]),s._v("，我们可以使用"),t("code",[s._v("resize2fs")]),s._v("命令来调整文件系统的大小。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@harbor ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# resize2fs /dev/mapper/centos-root")]),s._v("\n")])])]),t("p",[s._v("到这里我们已经调整完了磁盘空间，后面编译"),t("code",[s._v("docker")]),s._v("镜像的时候就不会出现空间不足的问题了。")])])}),[],!1,null,null,null);t.default=n.exports}}]);