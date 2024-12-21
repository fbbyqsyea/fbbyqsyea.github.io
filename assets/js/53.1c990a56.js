(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{355:function(e,t,o){"use strict";o.r(t);var s=o(5),_=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-支持-wss协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-支持-wss协议"}},[e._v("#")]),e._v(" Nginx 支持 "),t("code",[e._v("WSS")]),e._v("协议")]),e._v(" "),t("h2",{attrs:{id:"背景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[e._v("#")]),e._v(" 背景")]),e._v(" "),t("p",[e._v("最近在配置一个web代理服务，除了http代理外，还需配置wss协议代理。这篇博客记录一下如何使用nginx配置wss代理。")]),e._v(" "),t("h2",{attrs:{id:"配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[e._v("#")]),e._v(" 配置")]),e._v(" "),t("p",[e._v("如何配置Nginx支持"),t("code",[e._v("WSS")]),e._v("协议。")]),e._v(" "),t("div",{staticClass:"language-conf extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('location /websocket {\n   proxy_pass http://backend_server;  # WebSocket后端的地址\n   proxy_http_version 1.1;\n   proxy_set_header Upgrade $http_upgrade;\n   proxy_set_header Connection "upgrade";\n   proxy_set_header Host $host;\n}\n')])])]),t("p",[t("code",[e._v("location /websocket")]),e._v("： 这定义了Nginx将代理的WebSocket的路径。这个路径应该与你的前端应用程序中使用的WebSocket路径匹配。")]),e._v(" "),t("p",[t("code",[e._v("proxy_pass http://backend_server;")]),e._v("： 这是WebSocket后端服务器的地址，Nginx会将所有WebSocket连接请求转发到这个地址。这个设置非常关键，因为它指定了WebSocket流量的目的地。")]),e._v(" "),t("p",[t("code",[e._v("proxy_http_version 1.1;")]),e._v("： 这一行确保Nginx使用HTTP/1.1协议来代理WebSocket连接。WebSocket要求使用HTTP/1.1或更高版本。")]),e._v(" "),t("p",[t("code",[e._v("proxy_set_header Upgrade $http_upgrade;")]),e._v('： 这个设置告诉Nginx将Upgrade标头设置为与客户端请求中的相同值，通常是"websocket"。这是WebSocket握手的一部分。')]),e._v(" "),t("p",[t("code",[e._v('proxy_set_header Connection "upgrade";')]),e._v('： 这个设置告诉Nginx将Connection标头设置为"upgrade"，以确保WebSocket连接可以成功升级。')]),e._v(" "),t("p",[t("code",[e._v("proxy_set_header Host $host;")]),e._v("： 这一行将请求的Host标头设置为与客户端请求中的相同值，以确保WebSocket连接的目标主机信息正确传递。")]),e._v(" "),t("p",[e._v("这些设置是确保Nginx正确代理WebSocket流量所必需的。确保按照需要修改location中的路径和proxy_pass中的后端服务器地址，以适应你的具体应用场景。")])])}),[],!1,null,null,null);t.default=_.exports}}]);