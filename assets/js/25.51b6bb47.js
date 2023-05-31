(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{329:function(s,a,t){"use strict";t.r(a);var n=t(5),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"multipass教程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#multipass教程"}},[s._v("#")]),s._v(" multipass教程")]),s._v(" "),a("h2",{attrs:{id:"how-to-create-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-an-instance"}},[s._v("#")]),s._v(" How to create an instance")]),s._v(" "),a("h3",{attrs:{id:"create-a-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-instance"}},[s._v("#")]),s._v(" create a instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 创建一个默认实例 ")]),s._v("\n$ multipass launch\nLaunched: enjoyed-coatimundi\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看实例详情")]),s._v("\n$  multipass info enjoyed-coatimundi\nName:           enjoyed-coatimundi\nState:          Running\nIPv4:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.2\nRelease:        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(".4 LTS\nImage hash:     75a04c7eed58 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(" LTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLoad:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.05")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.15")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("\nDisk usage:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".4G out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7G\nMemory usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("139")]),s._v(".4M out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("976")]),s._v(".9M\nMounts:         --\n")])])]),a("h3",{attrs:{id:"create-an-instance-with-a-specific-image"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-instance-with-a-specific-image"}},[s._v("#")]),s._v(" create an instance with a specific image")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查找可用的镜像")]),s._v("\n$ multipass "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v("\nImage                       Aliases           Version          Description\nsnapcraft:core18            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20201111")]),s._v("         Snapcraft builder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Core "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18")]),s._v("\nsnapcraft:core20            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20210921")]),s._v("         Snapcraft builder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Core "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nsnapcraft:core22            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.04")]),s._v("             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20220426")]),s._v("         Snapcraft builder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" Core "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v("                       bionic            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20220615")]),s._v("         Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v("                       focal,lts         "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20220615")]),s._v("         Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(" LTS\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.10")]),s._v("                       impish            "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20220616")]),s._v("         Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("21.10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.04")]),s._v("                       jammy             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20220622")]),s._v("         Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("22.04")]),s._v(" LTS\nanbox-cloud-appliance                         latest           Anbox Cloud Appliance\ncharm-dev                                     latest           A development and testing environment "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" charmers\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v("                                        latest           A Docker environment with Portainer and related tools\nminikube                                      latest           minikube is "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("local")]),s._v(" Kubernetes\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 运行ubuntu 18.04， 别称:bionic")]),s._v("\n$ multipass launch bionic\nLaunched: intimate-monkey\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看实例详情")]),s._v("\n$ multipass info intimate-monkey\nName:           intimate-monkey\nState:          Running\nIPv4:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.3\nRelease:        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".6 LTS\nImage hash:     babb200587b4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLoad:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.04")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.01")]),s._v("\nDisk usage:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".1G out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7G\nMemory usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("73")]),s._v(".1M out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("985")]),s._v(".6M\nMounts:         --\n")])])]),a("h3",{attrs:{id:"create-an-instance-with-a-custom-name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-instance-with-a-custom-name"}},[s._v("#")]),s._v(" create an instance with a custom name")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用--name参数指定创建实例的名字")]),s._v("\n$ multipass launch bionic "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" test111\nLaunched: test111\n")])])]),a("h3",{attrs:{id:"create-an-instance-with-custom-cpu-number-disk-and-ram"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-instance-with-custom-cpu-number-disk-and-ram"}},[s._v("#")]),s._v(" create an instance with custom cpu number, disk, and RAM")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 使用--cpu, --disk, --mem来指定创建实例的cpu核数、磁盘大小、内存大小")]),s._v("\n$ multipass launch bionic "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" test222 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--cpu")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--disk")]),s._v(" 20G "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--mem")]),s._v(" 8G\nLaunched: test222\n")])])]),a("h3",{attrs:{id:"create-an-instance-with-primary-status"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-an-instance-with-primary-status"}},[s._v("#")]),s._v(" create an instance with primary status")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 如果实例名称为primary 则此实例为默认实例")]),s._v("\n$ multipass launch "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--name")]),s._v(" primary\nLaunched: primary\nMounted "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/Users/bingbing.fu'")]),s._v(" into "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'primary:Home'")]),s._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看实例信息")]),s._v("\n$ multipass info primary\nName:           primary\nState:          Running\nIPv4:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.5\nRelease:        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".6 LTS\nImage hash:     babb200587b4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLoad:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.54")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.24")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.09")]),s._v("\nDisk usage:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".2G out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7G\nMemory usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("108")]),s._v(".5M out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("985")]),s._v(".6M\nMounts:         /Users/bingbing.fu "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" Home\n                    "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("UID")]),s._v(" map: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("501")]),s._v(":default\n                    GID map: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(":default\n")])])]),a("h3",{attrs:{id:"other-condition-to-create-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-condition-to-create-an-instance"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://multipass.run/docs/create-an-instance"}},[s._v("other condition to create an instance.")])]),s._v(" "),a("h2",{attrs:{id:"how-to-use-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-use-an-instance"}},[s._v("#")]),s._v(" How to use an instance")]),s._v(" "),a("h3",{attrs:{id:"open-a-shell-prompt-inside-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-a-shell-prompt-inside-an-instance"}},[s._v("#")]),s._v(" open a shell prompt inside an instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看实例列表")]),s._v("\n$ multipass list\nName                    State             IPv4             Image\nprimary                 Running           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.5     Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS\nenjoyed-coatimundi      Running           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.2     Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20.04")]),s._v(" LTS\nintimate-monkey         Running           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.3     Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS\ntest111                 Running           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.4     Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 登录实例shell")]),s._v("\n$ multipass shell test111\nWelcome to Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".6 LTS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU/Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.15")]),s._v(".0-187-generic x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Tue Jul  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:22:20 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("\n\n  System load:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.08")]),s._v("              Processes:             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v("\n  Usage of /:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("23.9")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".67GB   Users logged in:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  Memory usage: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("12")]),s._v("%               IP address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" enp0s2: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.4\n  Swap usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\n\n * Super-optimized "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" small spaces - "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" how we shrank the memory\n   footprint of MicroK8s to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" it the smallest full K8s around.\n\n   https://ubuntu.com/blog/microk8s-memory-optimisation\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" updates can be applied immediately.\n\n\nTo run a "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" as administrator "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"root"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(", use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sudo <command>"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\nSee "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"man sudo_root"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## multipass shell默认登录primary实例")]),s._v("\n$ multipass shell\nWelcome to Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".6 LTS "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("GNU/Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.15")]),s._v(".0-187-generic x86_64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n * Documentation:  https://help.ubuntu.com\n * Management:     https://landscape.canonical.com\n * Support:        https://ubuntu.com/advantage\n\n  System information as of Tue Jul  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" 09:23:32 CST "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2022")]),s._v("\n\n  System load:  "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v("               Processes:             "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("101")]),s._v("\n  Usage of /:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("25.0")]),s._v("% of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".67GB   Users logged in:       "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n  Memory usage: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16")]),s._v("%               IP address "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" enp0s2: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.5\n  Swap usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("%\n\n * Super-optimized "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" small spaces - "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("read")]),s._v(" how we shrank the memory\n   footprint of MicroK8s to "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" it the smallest full K8s around.\n\n   https://ubuntu.com/blog/microk8s-memory-optimisation\n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" updates can be applied immediately.\n\nNew release "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'20.04.4 LTS'")]),s._v(" available.\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'do-release-upgrade'")]),s._v(" to upgrade to it.\n\n\nubuntu@primary:~$\n")])])]),a("h3",{attrs:{id:"exec-a-command-inside-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exec-a-command-inside-an-instance"}},[s._v("#")]),s._v(" Exec a command inside an instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## exec 命令用来远程调用执行实例的命令")]),s._v("\n$ multipass "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" test111 -- "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("pwd")]),s._v("\n/home/ubuntu\n")])])]),a("h3",{attrs:{id:"start-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-an-instance"}},[s._v("#")]),s._v(" Start an instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动实例")]),s._v("\n$ multipass start test111\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看启动后的实例状态")]),s._v("\n$ multipass info test111\nName:           test111\nState:          Running\nIPv4:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.4\nRelease:        Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(".6 LTS\nImage hash:     babb200587b4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLoad:           "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.72")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.16")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.05")]),s._v("\nDisk usage:     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(".3G out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(".7G\nMemory usage:   "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("91")]),s._v(".7M out of "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("985")]),s._v(".6M\nMounts:         --\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动多个实例")]),s._v("\n$ multipass start test111 test112 test113\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 启动所有的实例")]),s._v("\n$ multipass start "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-all")]),s._v("\n")])])]),a("h3",{attrs:{id:"stop-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stop-an-instance"}},[s._v("#")]),s._v(" Stop an instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止实例")]),s._v("\n$ multiopass stop test111\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 查看停止后的实例状态")]),s._v("\n$ multipass info test111\nName:           test111\nState:          Stopped\nIPv4:           --\nRelease:        --\nImage hash:     babb200587b4 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Ubuntu "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("18.04")]),s._v(" LTS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nLoad:           --\nDisk usage:     --\nMemory usage:   --\nMounts:         --\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止多个实例")]),s._v("\n$ multipass start test111 test112 test113\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 停止所有的实例")]),s._v("\n$ multipass start "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--all")]),s._v("\n")])])]),a("h3",{attrs:{id:"suspend-an-instance"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#suspend-an-instance"}},[s._v("#")]),s._v(" Suspend an instance")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 挂起实例")]),s._v("\n$ multipass "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("suspend")]),s._v(" test111\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);