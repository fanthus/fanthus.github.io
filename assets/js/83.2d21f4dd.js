(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{343:function(t,s,a){t.exports=a.p+"assets/img/wechat_qrcode.c0c8a471.png"},702:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("fastlane 是 iOS 平台的一个自动传包工具，非常好用。")]),t._v(" "),s("p",[t._v("fastlane 使用过程中有个痛点是：在和 CI 工具集成的时候总是需要输入验证码，起因是苹果账号目前是强制开启二次验证的，系统会向信任的机器或者手机号发验证码，这时候就需要人手动输入，但是 CI 是没有交互环境的，所以就没办法顺利传包。")]),t._v(" "),s("h2",{attrs:{id:"身份验证方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#身份验证方式"}},[t._v("#")]),t._v(" 身份验证方式")]),t._v(" "),s("p",[t._v("官方提供了几种身份验证的方式如下，文档地址在"),s("a",{attrs:{href:"https://docs.fastlane.tools/getting-started/ios/authentication/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"两步身份验证。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两步身份验证。"}},[t._v("#")]),t._v(" 两步身份验证。")]),t._v(" "),s("p",[t._v("传包的时候进行手动验证，即我们上面提到的情况，CI 是不支持的。")]),t._v(" "),s("p",[t._v("如果能在有交互的命令行上完成输入验证码这个过程的话，系统会将会话信息缓存在 "),s("code",[t._v("~/.fastlane/spaceship/[email]/cookie")]),t._v(" 这里。")]),t._v(" "),s("p",[t._v("不过 fastlane 还提供了一种直接生成 AppleID 登录会话的机制：")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("fastlane spaceauth "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("u user"),s("span",{pre:!0,attrs:{class:"token attribute atrule"}},[t._v("@email")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//替换为自己的苹果账号")]),t._v("\n")])])]),s("p",[t._v("执行命令后会在命令行尝试登录操作，然后生成一段变量值，大致如下")]),t._v(" "),s("blockquote",[s("p",[t._v("--\\n- !ruby/object:HTTP::Cookie\\n name: myacinfo\\n value: …. created_at: &2 2023-07-13 19:00:55.561831000 +08:00\\n accessed_at: *2\\n")])]),t._v(" "),s("p",[t._v("生成的变量值必须存储在 CI 系统上的 "),s("code",[t._v("FASTLANE_SESSION")]),t._v(" 环境变量中。每次 fastlane 与 Apple 的 API 通信时，该会话将被重用，而不是触发新的登录（下面会有设置 fastlane 环境变量的介绍）")]),t._v(" "),s("p",[t._v("理论上这种方式也能用于 CI 的自动化，避免每次输验证码。"),s("strong",[t._v("但其中是有一个严重缺陷的，即会话有效期，最长也就一个月。")]),t._v(" 即至少每个月你都得为 CI 生成一次新的会话。有可能一两天就得来一次，非常麻烦。Session 过期时间的长短取决于很多因素，并不是可控的。")]),t._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://github.com/fastlane/fastlane/blob/master/spaceship/docs/Authentication.md#auto-select-sms-via-spaceship_2fa_sms_default_phone_number",target:"_blank",rel:"noopener noreferrer"}},[t._v("一个小技巧是可以通过 -check_session 判断 session 是否有效。"),s("OutboundLink")],1)])]),t._v(" "),s("h3",{attrs:{id:"应用程序专用密码-application-specific-passwords"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用程序专用密码-application-specific-passwords"}},[t._v("#")]),t._v(" 应用程序专用密码(Application-specific passwords)")]),t._v(" "),s("p",[t._v("如果您想将构建上传到 App Store Connect（"),s("code",[t._v("upload_to_app_store")]),t._v(" 和 "),s("code",[t._v("deliver")]),t._v(" ）或 TestFlight（操作 "),s("code",[t._v("upload_to_testflight")]),t._v(" 、 "),s("code",[t._v("pilot")]),t._v(" 或 "),s("code",[t._v("testflight")]),t._v(" ）。我们可以生成应用程序特定密码：")]),t._v(" "),s("ol",[s("li",[t._v("访问 "),s("a",{attrs:{href:"https://appleid.apple.com/account/manage",target:"_blank",rel:"noopener noreferrer"}},[t._v("appleid.apple.com/account/manage"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("生成新的应用程序特定密码。")]),t._v(" "),s("li",[t._v("使用环境变量 "),s("code",[t._v("FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD")]),t._v(" 提供应用程序特定密码")])]),t._v(" "),s("p",[t._v("后续如果上传的话就直接用应用专用密码，就避免每次输验证码了。但是这种方式也有个限制，即如果做除了上传二进制文件之外的其他操作，则应用程序特定密码将不起作用，官方的这个限制其实说的很笼统，理论上我执行 upload_to_testflight 是不涉及到别的操作的。")]),t._v(" "),s("p",[t._v("其实不仅要设置 "),s("code",[t._v("FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD")]),t._v(" 也要设置 "),s("code",[t._v("FASTLANE_USER")]),t._v(" 的环境变量。")]),t._v(" "),s("p",[t._v("但是重点来了，我按照上面的说明，配置好 "),s("code",[t._v("FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD")]),t._v(" 环境变量后，依然让我输入验证码，似乎这个配置并没有生效，有人遇到"),s("a",{attrs:{href:"https://github.com/fastlane/fastlane/discussions/16935",target:"_blank",rel:"noopener noreferrer"}},[t._v("类似的问题 → Github ISSUE-2FA code still required for pilot even with FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD set)"),s("OutboundLink")],1),t._v("，不过官方没有回应。")]),t._v(" "),s("p",[t._v("排查了半天之后发现一个"),s("a",{attrs:{href:"https://github.com/fastlane/fastlane/issues/17062",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),s("OutboundLink")],1),t._v("，可能还是 Fastfile 里面的 "),s("code",[t._v("upload_to_testflight")]),t._v(" 这个操作缺少一些参数，于是将 Fastfile 里面的 "),s("code",[t._v("upload_to_testflight")]),t._v(" 加了俩参数")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("upload_to_testflight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("skip_waiting_for_build_processing"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" apple_id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" 12345"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("blockquote",[s("p",[t._v("这里 apple_id 就是 AppleStore 后台为应用自动生成的 Apple ID，可以在 AppleStore 后台看。")])]),t._v(" "),s("p",[s("code",[t._v("skip_waiting_for_build_processing")]),t._v(" 如果设置为 true，则该 "),s("code",[t._v("distribute_external")]),t._v(" 选项将不起作用，并且不会将任何生成分发给测试人员。而 "),s("code",[t._v("distribute_external")]),t._v(" 选项又会用到 "),s("code",[t._v("groups")]),t._v(" 选项，似乎 "),s("code",[t._v("groups")]),t._v(" 选项对后台进行了二进制外的额外操作，导致没能使 fastlane 正确使用应用程序专用密码。")]),t._v(" "),s("p",[t._v("这时候再执行上传操作就没有问题了，基本上是完美解决。")]),t._v(" "),s("h3",{attrs:{id:"app-store-connect-api-密钥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#app-store-connect-api-密钥"}},[t._v("#")]),t._v(" App Store Connect API 密钥")]),t._v(" "),s("p",[t._v("这个本文不涉及。")]),t._v(" "),s("h2",{attrs:{id:"设置环境变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置环境变量"}},[t._v("#")]),t._v(" 设置环境变量")]),t._v(" "),s("p",[t._v("有几种不同的方式可以设置 fastlane 的环境变量")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("通过 Fastfile 预定义的方式。**不推荐使用这种方式，主要是出于安全原因。**如果工程是 git 管理的话，你的苹果账号专用密码就会暴露。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENV")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FASTLANE_USER"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user@email.com"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ENV")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxyyy"')])]),t._v("\n\nlane "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("beta "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v("\n  upload_to_testflight\nend\n")])])])]),t._v(" "),s("li",[s("p",[t._v("通过在 bashfile 中定义。如果终端使用的 zsh，则使用 ~/.zshrc 文件进行定义。定义完记得 source 一下让改动生效。这种定义方式是在本地，相对安全，但有的 CI 的环境是不支持加载这些环境变量的。")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[t._v("export "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxyyy"')])]),t._v("\nexport "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FASTLANE_USER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user@email.com"')])]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("通过 "),s("a",{attrs:{href:"https://github.com/bkeepers/dotenv",target:"_blank",rel:"noopener noreferrer"}},[t._v("dotenv"),s("OutboundLink")],1),t._v(" 方式进行定义。 dotenv 用于将环境存储在特定于项目的文件中。这里你需要创建一个 "),s("code",[t._v(".env.default")]),t._v(" 文件。内容如下")]),t._v(" "),s("div",{staticClass:"language-swift extra-class"},[s("pre",{pre:!0,attrs:{class:"language-swift"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xxxyyy"')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("FASTLANE_USER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string-literal"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"user@email.com"')])]),t._v("\n")])])])])]),t._v(" "),s("p",[t._v("大家可以根据自己的情况选择合适的设置变量的方式。")]),t._v(" "),s("p",[t._v("参考地址:")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://github.com/fastlane/fastlane/blob/master/spaceship/docs/Authentication.md#auto-select-sms-via-spaceship_2fa_sms_default_phone_number",target:"_blank",rel:"noopener noreferrer"}},[t._v("fastlane » spaceship doc » Authentication.md"),s("OutboundLink")],1),t._v("   #身份验证相关文档")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.fastlane.tools/best-practices/continuous-integration/#method-3-application-specific-passwords",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs » Best Practices » Continuous Integration"),s("OutboundLink")],1),t._v("  #CI 集成相关的文档")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs.fastlane.tools/best-practices/keys/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Docs » Best Practices » Keys"),s("OutboundLink")],1),t._v("    #fastlane 设置环境变量方式")])]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("关注我的微信公众号，我在上面会分享我的日常所思所想。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:a(343),width:"40%/"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);