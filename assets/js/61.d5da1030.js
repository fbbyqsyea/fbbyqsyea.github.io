(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{368:function(_,e,v){"use strict";v.r(e);var o=v(5),c=Object(o.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("h1",{attrs:{id:"nginx配置wss反向代理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx配置wss反向代理"}},[_._v("#")]),_._v(" nginx配置wss反向代理")]),_._v(" "),e("h2",{attrs:{id:"背景"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[_._v("#")]),_._v(" 背景")]),_._v(" "),e("p",[_._v("最近需要配置一个web服务，该web服务提供了"),e("code",[_._v("HTTP")]),_._v("和"),e("code",[_._v("wss")]),_._v("两种协议通信，在配置反向代理的过程中，"),e("code",[_._v("wss")]),_._v("协议的请求一直失败。了解后发现是相关参数未设置的问题，下面我将就我遇到的这个问题，简要的介绍一下什么是wss协议，以及如何正确的配置"),e("code",[_._v("nginx")]),_._v("代理"),e("code",[_._v("wss")]),_._v("。")]),_._v(" "),e("h2",{attrs:{id:"什么是wss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是wss"}},[_._v("#")]),_._v(" 什么是wss")]),_._v(" "),e("p",[_._v("WSS， 全称："),e("code",[_._v("WebSocket Secure")]),_._v("。顾名思义，就是安全的"),e("code",[_._v("WebSocket")]),_._v("协议。")]),_._v(" "),e("p",[e("code",[_._v("WebSocket")]),_._v("是一种网络协议，它允许在客户端和服务器之间建立全双工的通信连接，这意味着双方可以同时发送和接收数据。与传统的"),e("code",[_._v("HTTP")]),_._v("协议不同，"),e("code",[_._v("WebSocket")]),_._v("连接在建立之后保持打开状态，可以实时传输数据，而不需要不断地发起新的"),e("code",[_._v("HTTP")]),_._v("请求。")]),_._v(" "),e("p",[_._v("WSS协议是"),e("code",[_._v("WebSocket")]),_._v("协议的加密版本，用于在安全的TLS/SSL连接上进行"),e("code",[_._v("WebSocket")]),_._v("通信。以下是WSS协议的一些关键步骤：")]),_._v(" "),e("ol",[e("li",[_._v("握手过程：")])]),_._v(" "),e("ul",[e("li",[_._v("客户端向服务器发起"),e("code",[_._v("WebSocket")]),_._v("握手请求，这与普通的"),e("code",[_._v("HTTP")]),_._v("握手类似。")]),_._v(" "),e("li",[_._v("但在WSS中，客户端与服务器之间的通信将使用TLS/SSL进行加密，确保数据的机密性和完整性。")]),_._v(" "),e("li",[_._v("服务器接收握手请求后，响应并建立"),e("code",[_._v("WebSocket")]),_._v("连接，确认使用WSS协议进行加密通信。")])]),_._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[_._v("数据传输：")])]),_._v(" "),e("ul",[e("li",[_._v("一旦握手成功，"),e("code",[_._v("WebSocket")]),_._v("连接就建立起来了，客户端和服务器可以开始实时地在双方之间传输数据。")]),_._v(" "),e("li",[_._v("这些数据可以是文本、二进制数据或任何其他格式，具体取决于应用程序的需求。")])]),_._v(" "),e("ol",{attrs:{start:"3"}},[e("li",[_._v("保持连接：")])]),_._v(" "),e("ul",[e("li",[e("code",[_._v("WebSocket")]),_._v("连接是持久的，不像"),e("code",[_._v("HTTP")]),_._v("协议那样每次请求都需要重新建立连接。这使得"),e("code",[_._v("WebSocket")]),_._v("非常适合需要实时通信的应用，如聊天应用、在线游戏等。")])]),_._v(" "),e("ol",{attrs:{start:"4"}},[e("li",[_._v("关闭连接：")])]),_._v(" "),e("ul",[e("li",[_._v("当通信结束或需要关闭连接时，可以通过发送特定的关闭帧来关闭"),e("code",[_._v("WebSocket")]),_._v("连接。")])]),_._v(" "),e("h2",{attrs:{id:"如何正确的配置nginx代理wss"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#如何正确的配置nginx代理wss"}},[_._v("#")]),_._v(" 如何正确的配置"),e("code",[_._v("nginx")]),_._v("代理"),e("code",[_._v("wss")])]),_._v(" "),e("p",[_._v("通过上面的简要学习，我们知道了wss协议是基于"),e("code",[_._v("WebSocket")]),_._v("的，而"),e("code",[_._v("WebSocket")]),_._v("协议通常需要使用"),e("code",[_._v("HTTP")]),_._v("/1.1或更高版本的"),e("code",[_._v("HTTP")]),_._v("协议来建立初始连接。"),e("code",[_._v("WebSocket")]),_._v("连接的建立过程始于一个"),e("code",[_._v("HTTP")]),_._v("握手（handshake），其中包括客户端向服务器发送一个"),e("code",[_._v("HTTP")]),_._v("请求，并在服务器响应中包含与"),e("code",[_._v("WebSocket")]),_._v("相关的头信息。")]),_._v(" "),e("p",[_._v("具体来说，"),e("code",[_._v("WebSocket")]),_._v("连接建立过程如下：")]),_._v(" "),e("ul",[e("li",[_._v("客户端发起一个"),e("code",[_._v("HTTP")]),_._v("请求到"),e("code",[_._v("WebSocket")]),_._v("服务器，该请求包含一个特殊的"),e("code",[_._v("HTTP")]),_._v("头字段："),e("code",[_._v("Upgrade:")]),_._v("WebSocket``和"),e("code",[_._v("Connection: Upgrade")]),_._v("，以表示客户端希望升级到"),e("code",[_._v("WebSocket")]),_._v("协议。")]),_._v(" "),e("li",[_._v("服务器接收到这个"),e("code",[_._v("HTTP")]),_._v("请求后，如果支持"),e("code",[_._v("WebSocket")]),_._v("，会响应一个101状态码的"),e("code",[_._v("HTTP")]),_._v("响应，同时包含一些"),e("code",[_._v("WebSocket")]),_._v("特定的头信息，如"),e("code",[_._v("Upgrade:")]),_._v("WebSocket``和"),e("code",[_._v("Connection: Upgrade")]),_._v("。这表示升级到"),e("code",[_._v("WebSocket")]),_._v("协议。")]),_._v(" "),e("li",[_._v("一旦这个"),e("code",[_._v("HTTP")]),_._v("握手成功完成，连接将从普通的"),e("code",[_._v("HTTP")]),_._v("协议切换到"),e("code",[_._v("WebSocket")]),_._v("协议，允许双向实时通信。")])]),_._v(" "),e("p",[_._v("所以相比常规的"),e("code",[_._v("HTTP")]),_._v("协议代理，我们需要新增下面两项：")]),_._v(" "),e("div",{staticClass:"language-conf extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('proxy_set_header Upgrade $`HTTP`_upgrade;\nproxy_set_header Connection "upgrade";\n')])])]),e("p",[_._v("其中，$"),e("code",[_._v("HTTP")]),_._v("_upgrade 是一个Nginx内置变量，通常用于配置"),e("code",[_._v("WebSocket")]),_._v("反向代理时。它用于控制升级头部的值，这在"),e("code",[_._v("WebSocket")]),_._v("连接中非常重要。当客户端发送"),e("code",[_._v("WebSocket")]),_._v("连接请求时，服务器需要升级"),e("code",[_._v("HTTP")]),_._v("协议为"),e("code",[_._v("WebSocket")]),_._v("协议。")])])}),[],!1,null,null,null);e.default=c.exports}}]);