(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{318:function(s,a,t){"use strict";t.r(a);var e=t(5),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"启动k8s服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动k8s服务"}},[s._v("#")]),s._v(" 启动k8s服务")]),s._v(" "),a("h3",{attrs:{id:"kubeadm、kubelet、kubectl简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm、kubelet、kubectl简介"}},[s._v("#")]),s._v(" kubeadm、kubelet、kubectl简介")]),s._v(" "),a("p",[s._v("参照前一篇的文章，在k8s-master和k8s-node节点上都安装了kubeadm、kubelet、kubectl服务。")]),s._v(" "),a("p",[s._v("Kubeadm是一个提供了 kubeadm init 和 kubeadm join 的工具，作为创建 Kubernetes 集群的 “快捷途径” 的最佳实践。kubeadm 通过执行必要的操作来启动和运行最小可用集群。 按照设计，它只关注启动引导，而非配置机器。同样的， 安装各种 “锦上添花” 的扩展，例如 Kubernetes Dashboard、 监控方案、以及特定云平台的扩展，都不在讨论范围内。相反，我们希望在 kubeadm 之上构建更高级别以及更加合规的工具， 理想情况下，使用 kubeadm 作为所有部署工作的基准将会更加易于创建一致性集群。")]),s._v(" "),a("p",[s._v("kubelet 是在每个 Node 节点上运行的主要 “节点代理”。它可以使用以下之一向 apiserver 注册： 主机名（hostname）；覆盖主机名的参数；某云驱动的特定逻辑。kubelet 是基于 PodSpec 来工作的。每个 PodSpec 是一个描述 Pod 的 YAML 或 JSON 对象。 kubelet 接受通过各种机制（主要是通过 apiserver）提供的一组 PodSpec，并确保这些 PodSpec 中描述的容器处于运行状态且运行状况良好。 kubelet 不管理不是由 Kubernetes 创建的容器。")]),s._v(" "),a("p",[s._v("你可以使用 Kubectl 命令行工具管理 Kubernetes 集群。 kubectl 在 $HOME/.kube 目录中查找一个名为 config 的配置文件。 你可以通过设置 KUBECONFIG 环境变量或设置 --kubeconfig 参数来指定其它 kubeconfig 文件。")]),s._v(" "),a("h3",{attrs:{id:"启动master节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动master节点"}},[s._v("#")]),s._v(" 启动master节点")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在master机器商运行如下明令")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" kubeadm init --control-plane-endpoint "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"k8s.cnblogs.com:6443"')]),s._v(" --upload-certs --image-repository registry.aliyuncs.com/google_containers --pod-network-cidr"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.244")]),s._v(".0.0/16\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --control-plane-endpoint string 为控制平面指定一个稳定的 IP 地址或 DNS 名称。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --upload-certs 将控制平面证书上传到 kubeadm-certs Secret")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# --image-repository string     默认值："k8s.gcr.io" 选择用于拉取控制平面镜像的容器仓库')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --pod-network-cidr string 指明 pod 网络可以使用的 IP 地址段。如果设置了这个参数，控制平面将会为每一个节点自动分配 CIDRs。")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装成功后显示以下提示信息 按照提示信息操作")]),s._v("\nYour Kubernetes control-plane has initialized successfully"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\n\nTo start using your cluster, you need to run the following as a regular user:\n\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\nAlternatively, "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" you are the root user, you can run:\n\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("KUBECONFIG")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/kubernetes/admin.conf\n\nYou should now deploy a pod network to the cluster.\nRun "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubectl apply -f [podnetwork].yaml"')]),s._v(" with one of the options listed at:\n  https://kubernetes.io/docs/concepts/cluster-administration/addons/\n\nYou can now "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" any number of the control-plane "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v(" running the following "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("command")]),s._v(" on each as root:\n\n  kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" k8s.cnblogs.com:6443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" g4mcrb.9tzs4qwkuk4ccdkl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --discovery-token-ca-cert-hash sha256:1c0ae36b1c28ea6c7d3092f85614fed02281be851034c04cd3260792f0481f98 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --control-plane --certificate-key 7bb2e92f9fbf21eb05b2dc88e19de2dbbdd9471dea646c8fc9fdaa099e8661c9\n\nPlease note that the certificate-key gives access to cluster sensitive data, keep it secret"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("\nAs a safeguard, uploaded-certs will be deleted "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" two hours"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" If necessary, you can use\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"kubeadm init phase upload-certs --upload-certs"')]),s._v(" to reload certs afterward.\n\nThen you can "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" any number of worker nodes by running the following on each as root:\n\nkubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" k8s.cnblogs.com:6443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" g4mcrb.9tzs4qwkuk4ccdkl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --discovery-token-ca-cert-hash sha256:1c0ae36b1c28ea6c7d3092f85614fed02281be851034c04cd3260792f0481f98 \n\n")])])]),a("h3",{attrs:{id:"以非管理员身份运行kubectl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以非管理员身份运行kubectl"}},[s._v("#")]),s._v(" 以非管理员身份运行kubectl")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# master节点")]),s._v("\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# node节点")]),s._v("\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 从master节点复制文件")]),s._v("\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" /etc/kubernetes/admin.conf "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.130:/usr/local/webdata/.kube/config\n$  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-g")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$HOME")]),s._v("/.kube/config\n")])])]),a("h3",{attrs:{id:"在node节点上加入k8s集群"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在node节点上加入k8s集群"}},[s._v("#")]),s._v(" 在node节点上加入k8s集群")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在node节点host增加k8s.cnblogs.com解析 解析到master节点ip")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.128 k8s.cnblogs.com "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/hosts\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 加入k8s集群")]),s._v("\n$ kubeadm "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("join")]),s._v(" k8s.cnblogs.com:6443 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--token")]),s._v(" g4mcrb.9tzs4qwkuk4ccdkl "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n        --discovery-token-ca-cert-hash sha256:1c0ae36b1c28ea6c7d3092f85614fed02281be851034c04cd3260792f0481f98 \n")])])]),a("h3",{attrs:{id:"查看集群情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看集群情况"}},[s._v("#")]),s._v(" 查看集群情况")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("$ kubectl cluster-info\nKubernetes control plane is running at https://k8s.cnblogs.com:6443\nCoreDNS is running at https://k8s.cnblogs.com:6443/api/v1/namespaces/kube-system/services/kube-dns:dns/proxy\n\nTo further debug and diagnose cluster problems, use "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kubectl cluster-info dump'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n$ kubectl get "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("node")]),s._v("\nNAME             STATUS   ROLES                  AGE     VERSION\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.128   Ready    control-plane,master   111m    v1.23.4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.129   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 6m32s   v1.23.4\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".64.130   Ready    "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("                 7m5s    v1.23.4\n")])])]),a("h3",{attrs:{id:"安装pod网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装pod网络"}},[s._v("#")]),s._v(" 安装POD网络")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 要让Kubernetes Cluster能够工作，必须安装Pod网络，否则Pod之间无法通信。Kubernetes支持多种网络方案，这里我们先使用flannel。")]),s._v("\n$ kubectl apply "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f")]),s._v(" https://raw.githubusercontent.com/flannel-io/flannel/master/Documentation/kube-flannel.yml\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);