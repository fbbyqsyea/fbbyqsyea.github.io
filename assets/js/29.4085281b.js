(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{332:function(t,a,s){"use strict";s.r(a);var e=s(5),n=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jwt学习和使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt学习和使用"}},[t._v("#")]),t._v(" jwt学习和使用")]),t._v(" "),a("h2",{attrs:{id:"学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习"}},[t._v("#")]),t._v(" 学习")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("我们通过 jwt.io网站关于jwt的介绍文章(https://jwt.io/introduction)来学习jwt。\n")])])]),a("h4",{attrs:{id:"jwt是什么-what-is-json-web-token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt是什么-what-is-json-web-token"}},[t._v("#")]),t._v(" jwt是什么？(What is JSON Web Token?)")]),t._v(" "),a("h5",{attrs:{id:"原文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文"}},[t._v("#")]),t._v(" 原文")]),t._v(" "),a("p",[t._v("JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.")]),t._v(" "),a("p",[t._v("Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.")]),t._v(" "),a("h5",{attrs:{id:"翻译"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻译"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),a("p",[t._v("JSON Web Token (JWT)是一个开放标准(RFC 7519)，它定义了一种紧凑且自包含的方式，用于作为JSON对象在各方之间安全地传输信息。该信息是经过数字签名的，因此可以对其进行验证和信任。jwt可以使用加密算法(使用HMAC算法)或使用RSA或ECDSA的公钥/私钥对进行签名。")]),t._v(" "),a("p",[t._v("虽然jwt也可以加密以提供各方之间的保密，但我们将重点关注签名令牌。签名令牌可以验证其中包含的声明的完整性，而加密令牌对其他方隐藏了这些声明。当使用公钥/私钥对对令牌进行签名时，签名还证明只有持有私钥的一方是签名方。")]),t._v(" "),a("h4",{attrs:{id:"什么时候使用jwt-when-should-you-use-json-web-tokens"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么时候使用jwt-when-should-you-use-json-web-tokens"}},[t._v("#")]),t._v(" 什么时候使用jwt？(When should you use JSON Web Tokens?)")]),t._v(" "),a("h5",{attrs:{id:"原文-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文-2"}},[t._v("#")]),t._v(" 原文")]),t._v(" "),a("p",[t._v("Here are some scenarios where JSON Web Tokens are useful:")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Authorization: This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.")])]),t._v(" "),a("li",[a("p",[t._v("Information Exchange: JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.")])])]),t._v(" "),a("h5",{attrs:{id:"翻译-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻译-2"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),a("p",[t._v("以下是一些JSON Web令牌很有用的场景:")]),t._v(" "),a("p",[t._v("授权:这是使用JWT最常见的场景。用户登录后，后续的每个请求都将包括JWT，允许用户访问该令牌允许的路由、服务和资源。单点登录是JWT目前广泛使用的一个特性，因为它的开销小，而且能够在不同的域中轻松使用。")]),t._v(" "),a("p",[t._v("信息交换:JSON Web令牌是在各方之间安全地传输信息的好方法。因为jwt可以被签名——例如，使用公共/私有密钥对——您可以确定发送者是他们自称的那个人。此外，由于签名是使用报头和有效负载计算的，您还可以验证内容没有被篡改。")]),t._v(" "),a("h4",{attrs:{id:"jwt的构成是什么-what-is-the-json-web-token-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt的构成是什么-what-is-the-json-web-token-structure"}},[t._v("#")]),t._v(" jwt的构成是什么？(What is the JSON Web Token structure?)")]),t._v(" "),a("h5",{attrs:{id:"原文-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文-3"}},[t._v("#")]),t._v(" 原文")]),t._v(" "),a("p",[t._v("In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:")]),t._v(" "),a("ul",[a("li",[t._v("Header")]),t._v(" "),a("li",[t._v("Payload")]),t._v(" "),a("li",[t._v("Signature")])]),t._v(" "),a("p",[t._v("Therefore, a JWT typically looks like the following.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("xxxxx.yyyyy.zzzzz\n")])])]),a("p",[t._v("Let's break down the different parts.")]),t._v(" "),a("h6",{attrs:{id:"header"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header"}},[t._v("#")]),t._v(" Header")]),t._v(" "),a("p",[t._v("The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Then, this JSON is Base64Url encoded to form the first part of the JWT.")]),t._v(" "),a("h6",{attrs:{id:"payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload"}},[t._v("#")]),t._v(" Payload")]),t._v(" "),a("p",[t._v("The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.")]),t._v(" "),a("p",[t._v("Registered claims: These are a set of predefined claims which are not mandatory but recommended, to provide a set of useful, interoperable claims. Some of them are: iss (issuer), exp (expiration time), sub (subject), aud (audience), and others.")]),t._v(" "),a("p",[t._v("Notice that the claim names are only three characters long as JWT is meant to be compact.")]),t._v(" "),a("p",[t._v("Public claims: These can be defined at will by those using JWTs. But to avoid collisions they should be defined in the IANA JSON Web Token Registry or be defined as a URI that contains a collision resistant namespace.")]),t._v(" "),a("p",[t._v("Private claims: These are the custom claims created to share information between parties that agree on using them and are neither registered or public claims.")]),t._v(" "),a("p",[t._v("An example payload could be:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("The payload is then Base64Url encoded to form the second part of the JSON Web Token.")]),t._v(" "),a("p",[t._v("Do note that for signed tokens this information, though protected against tampering, is readable by anyone. Do not put secret information in the payload or header elements of a JWT unless it is encrypted.")]),t._v(" "),a("h6",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" Signature")]),t._v(" "),a("p",[t._v("To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.")]),t._v(" "),a("p",[t._v("For example if you want to use the HMAC SHA256 algorithm, the signature will be created in the following way:")]),t._v(" "),a("p",[t._v('HMACSHA256(\nbase64UrlEncode(header) + "." +\nbase64UrlEncode(payload),\nsecret)\nThe signature is used to verify the message wasn\'t changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.')]),t._v(" "),a("p",[t._v("Putting all together\nThe output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments, while being more compact when compared to XML-based standards such as SAML.")]),t._v(" "),a("p",[t._v("The following shows a JWT that has the previous header and payload encoded, and it is signed with a secret. Encoded JWT")]),t._v(" "),a("p",[t._v("If you want to play with JWT and put these concepts into practice, you can use jwt.io Debugger to decode, verify, and generate JWTs.")]),t._v(" "),a("h5",{attrs:{id:"翻译-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻译-3"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),a("p",[t._v("在其紧凑的形式中，JSON Web令牌由点(.)分隔的三个部分组成，分别是:")]),t._v(" "),a("ul",[a("li",[t._v("Header(标头)")]),t._v(" "),a("li",[t._v("Payload(负载)")]),t._v(" "),a("li",[t._v("Signature(签名)")])]),t._v(" "),a("p",[t._v("因此，JWT通常看起来如下所示。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("xxxxx.yyyyy.zzzzz\n")])])]),a("p",[t._v("让我们来分析一下不同的部分。")]),t._v(" "),a("h6",{attrs:{id:"header-标头"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#header-标头"}},[t._v("#")]),t._v(" Header(标头)")]),t._v(" "),a("p",[t._v("标头通常由两部分组成:令牌的类型，即JWT，以及正在使用的签名算法，如HMAC SHA256或RSA。")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"alg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"HS256"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 算法")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"typ"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JWT"')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 类型")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后，这个JSON经过Base64Url编码，形成JWT的第一部分。")]),t._v(" "),a("h6",{attrs:{id:"payload-负载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#payload-负载"}},[t._v("#")]),t._v(" Payload(负载)")]),t._v(" "),a("p",[t._v("令牌的第二部分是有效负载，其中包含声明。声明是关于实体(通常是用户)和其他数据的语句。声明有三种类型:")]),t._v(" "),a("ul",[a("li",[t._v("注册声明")]),t._v(" "),a("li",[t._v("公开声明")]),t._v(" "),a("li",[t._v("私人声明。")])]),t._v(" "),a("p",[t._v("注册声明:这是一组预定义的声明，不是强制性的，而是推荐的，以提供一组有用的、可互操作的声明。其中一些是:iss(发行者)、exp(过期时间)、sub(主题)、aud(受众)和其他。")]),t._v(" "),a("p",[t._v("注意，声明要求名称只有三个字符长，因为JWT是为了紧凑。")]),t._v(" "),a("p",[t._v("公共声明:使用jwt的人可以随意定义这些声明。但是为了避免冲突，应该在IANA JSON Web令牌注册表中定义它们，或者定义为包含抗冲突命名空间的URI。")]),t._v(" "),a("p",[t._v("私有声明:这些是为在同意使用它们的各方之间共享信息而创建的定制声明，它们既不是注册的声明，也不是公共声明。")]),t._v(" "),a("p",[t._v("An example payload could be:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"sub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1234567890"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"name"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"John Doe"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"admin"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后对有效负载进行Base64Url编码，形成JSON Web令牌的第二部分。")]),t._v(" "),a("p",[t._v("请注意，对于签名令牌，尽管受保护不受篡改，但任何人都可以读取该信息。不要将秘密信息放在JWT的有效负载或头元素中，除非它是加密的。")]),t._v(" "),a("h6",{attrs:{id:"signature-签名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature-签名"}},[t._v("#")]),t._v(" Signature(签名)")]),t._v(" "),a("p",[t._v("要创建签名部分，您必须获取已编码的标头、已编码的负载、一个秘钥、标头中指定的算法，并在其上签名。")]),t._v(" "),a("p",[t._v("以使用HMAC SHA256算法为例，签名的创建方式如下:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("HMACSHA256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("header"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("base64UrlEncode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("payload"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  secret"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("签名用于验证消息在发送过程中没有被更改，并且，在用私钥签名的令牌的情况下，它还可以验证JWT的发送者就是它所说的那个人。")]),t._v(" "),a("p",[t._v("把所有在一起\n输出是三个用圆点分隔的Base64-URL字符串，可以很容易地在HTML和HTTP环境中传递，同时与基于xml的标准(如SAML)相比更紧凑。")]),t._v(" "),a("p",[t._v("下面显示了一个JWT，它对前面的标头和有效负载进行了编码，并用一个秘钥签名。")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[t._v("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c\n")])])]),a("p",[t._v("如果您想使用JWT并将这些概念付诸实践，可以使用"),a("a",{attrs:{href:"JWT.io"}},[t._v("JWT.io")]),t._v("调试器来解码、验证和生成jwt。")]),t._v(" "),a("h4",{attrs:{id:"jwt是如何工作的-how-do-json-web-tokens-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jwt是如何工作的-how-do-json-web-tokens-work"}},[t._v("#")]),t._v(" jwt是如何工作的？(How do JSON Web Tokens work?)")]),t._v(" "),a("h5",{attrs:{id:"原文-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原文-4"}},[t._v("#")]),t._v(" 原文")]),t._v(" "),a("p",[t._v("In authentication, when the user successfully logs in using their credentials, a JSON Web Token will be returned. Since tokens are credentials, great care must be taken to prevent security issues. In general, you should not keep tokens longer than required.")]),t._v(" "),a("p",[t._v("You also should not store sensitive session data in browser storage due to lack of security.")]),t._v(" "),a("p",[t._v("Whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer schema. The content of the header should look like the following:")]),t._v(" "),a("div",{staticClass:"language-header extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Authorization: Bearer <token>\n")])])]),a("p",[t._v("This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.")]),t._v(" "),a("p",[t._v("Note that if you send JWT tokens through HTTP headers, you should try to prevent them from getting too big. Some servers don't accept more than 8 KB in headers. If you are trying to embed too much information in a JWT token, like by including all the user's permissions, you may need an alternative solution, like Auth0 Fine-Grained Authorization.")]),t._v(" "),a("p",[t._v("If the token is sent in the Authorization header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.")]),t._v(" "),a("p",[t._v("The following diagram shows how a JWT is obtained and used to access APIs or resources:\n"),a("img",{attrs:{src:"/images/client-credentials-grant.png"}})]),t._v(" "),a("ul",[a("li",[t._v("The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.")]),t._v(" "),a("li",[t._v("When the authorization is granted, the authorization server returns an access token to the application.")]),t._v(" "),a("li",[t._v("The application uses the access token to access a protected resource (like an API).")])]),t._v(" "),a("p",[t._v("Do note that with signed tokens, all the information contained within the token is exposed to users or other parties, even though they are unable to change it. This means you should not put secret information within the token.")]),t._v(" "),a("h5",{attrs:{id:"翻译-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#翻译-4"}},[t._v("#")]),t._v(" 翻译")]),t._v(" "),a("p",[t._v("在身份验证中，当用户使用他们的凭证成功登录时，将返回一个JSON Web令牌。因为令牌是凭据，所以必须非常注意防止安全问题。通常，您不应该保留令牌的时间超过所需的时间。")]),t._v(" "),a("p",[t._v("由于缺乏安全性，您也不应该在浏览器存储中存储敏感的会话数据。")]),t._v(" "),a("p",[t._v("每当用户想要访问受保护的路由或资源时，用户代理应该发送JWT，通常在使用承载模式的Authorization头中。头文件的内容应该如下所示:")]),t._v(" "),a("div",{staticClass:"language-header extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("Authorization: Bearer <token>\n")])])]),a("p",[t._v("在某些情况下，这可能是一种无状态授权机制。服务器的受保护路由将在Authorization头中检查有效的JWT，如果存在，则允许用户访问受保护的资源。如果JWT包含必要的数据，为某些操作查询数据库的需求可能会减少，尽管情况不一定总是如此。")]),t._v(" "),a("p",[t._v("注意，如果通过HTTP头发送JWT令牌，应该尽量防止它们变得太大。有些服务器不接受超过8 KB的头文件。如果您试图在JWT令牌中嵌入太多的信息，比如包含所有用户的权限，那么您可能需要一个替代解决方案，比如Auth0细粒度授权。")]),t._v(" "),a("p",[t._v("如果令牌是在授权头中发送的，跨域资源共享(CORS)不会是一个问题，因为它不使用cookie。")]),t._v(" "),a("p",[t._v("下图显示了JWT是如何获取并用于访问api或资源的:\n"),a("img",{attrs:{src:"/images/client-credentials-grant.png"}})]),t._v(" "),a("ul",[a("li",[t._v("The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the /oauth/authorize endpoint using the authorization code flow.")]),t._v(" "),a("li",[t._v("When the authorization is granted, the authorization server returns an access token to the application.")]),t._v(" "),a("li",[t._v("The application uses the access token to access a protected resource (like an API).")])]),t._v(" "),a("p",[t._v("请注意，使用签名令牌，令牌中包含的所有信息都会向用户或其他方公开，即使他们无法更改这些信息。这意味着不应该将秘钥信息放在令牌中。")]),t._v(" "),a("h2",{attrs:{id:"使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),a("h4",{attrs:{id:"定义声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义声明"}},[t._v("#")]),t._v(" 定义声明")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" AuthorizationClaims "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tjwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StandardClaims                  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jwt标准声明")]),t._v("\n\tRefreshAfter "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("int64")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"rfa"`')]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 刷新Authorization时间")]),t._v("\n\tId           "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`json:"id"`')]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前登录用户Id")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"创建authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建authorization"}},[t._v("#")]),t._v(" 创建Authorization")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("us "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("UserService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("uint64")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" e "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tunix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Unix")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\tc "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" AuthorizationClaims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\tStandardClaims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("StandardClaims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\tAudience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Audience"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tExpiresAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExpireTime"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("        cryptx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Md5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fmt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Sprintf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%s:%s:%d:%d"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tIssuedAt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tIssuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Issuer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tNotBefore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unix"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tSubject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("   global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Subject"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tRefreshAfter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" unix "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ExpireTime"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\tId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("           id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NewWithClaims")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SigningMethodHS256"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("SignedString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"解析authorization"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解析authorization"}},[t._v("#")]),t._v(" 解析Authorization")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("us "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("UserService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseAuthorization")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authorization "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("AuthorizationClaims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" claims AuthorizationClaims\n\ttoken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ParseWithClaims")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("authorization"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("claims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("token "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("byte")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SecretKey"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" token"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Valid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("claims"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ok "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":=")]),t._v(" err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidationError"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" ok "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidationErrorMalformed "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Err_User_Illegal_Authorization_Response\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" ve"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Errors"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidationErrorExpired"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("jwt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ValidationErrorNotValidYet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Err_User_Out_Login_Time_Response\n\t\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\tzap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("L")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"can\'t parse authorization error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" zap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("Error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("nil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Err_System_Response\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);