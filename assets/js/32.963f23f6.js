(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{343:function(t,e,r){t.exports=r.p+"assets/img/wechat_qrcode.c0c8a471.png"},482:function(t,e,r){t.exports=r.p+"assets/img/charles.2888b5b3.png"},483:function(t,e,r){t.exports=r.p+"assets/img/show_payload.92347154.png"},484:function(t,e,r){t.exports=r.p+"assets/img/car.2dde02ff.png"},700:function(t,e,r){"use strict";r.r(e);var s=r(5),o=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("获取iOS应用图片素材大致需要两个步骤：1.下载应用; 2.从应用包中提取素材。")]),t._v(" "),e("h2",{attrs:{id:"下载商店应用包"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#下载商店应用包"}},[t._v("#")]),t._v(" 下载商店应用包")]),t._v(" "),e("p",[t._v("AppleStore 目前是没有提供官方的渠道来获取商店上的应用包，需要我们自己想办法获取。目前网上能看到的几种获取包的方式，有一些方式已经被废弃了，有一些还能用，这里都列出来给大家做个参考")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("找到低版本的 iTunes 下载安装。如果你当前 macOS 系统太高的话，会提示「您的系统不支持本软件」。")])]),t._v(" "),e("li",[e("p",[t._v("通过一些第三方商店下载越狱应用，有一些网站也提供 IPA 包，但是很多资源也不全。")])]),t._v(" "),e("li",[e("p",[t._v("如果你有越狱手机的话，也可以直接直接从越狱的机器目录下往外导 ipa 包。")])]),t._v(" "),e("li",[e("p",[e("s",[t._v("抓包")]),t._v("。这个比较麻烦，抓包需要技巧，因为连着代理的话商店是没有联网的，只能在下载应用的时候开代理。而且现在"),e("a",{attrs:{href:"http://10.10.116.31:58288/itunes-assets/Purple112/v4/b5/dc/be/b5dcbeb0-42f1-cc5f-f2db-e905bc2ce59d/pre-thinned17344030805441429813.thinned.signed.dpkg.ipa?accessKey=xx&source=iosapps.itunes.apple.com&sourceScheme=https",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),e("OutboundLink")],1),t._v("到的 ipa 包是没有办法通过解压工具解压的，看"),e("a",{attrs:{href:"https://iosre.com/t/appstore-%E6%8A%93%E5%8C%85%E4%B8%8B%E8%BD%BD%E7%9A%84ipa%E6%96%87%E4%BB%B6-%E6%97%A0%E6%B3%95%E5%AE%89%E8%A3%85/7799",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("。这条路现在是被堵死了。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(482),alt:"Untitled"}})])]),t._v(" "),e("li",[e("p",[t._v("通过 Apple Configurator 软件。这个软件有点类似之前的 iTunes 软件，能管理手机上的应用，下载应用，但是只能下载当前登录的苹果账号下的已购买的应用。")]),t._v(" "),e("p",[t._v("想要获取应用包 X 的话，还有一个前提是，你需要现在手机上装好 X 应用。这样在下载的时候会弹窗提示「新下载的 App 是否要覆盖当前 App」，这时候不要操作这个弹窗。去 Apple Configurator 对应的缓存目录 "),e("code",[t._v("~/Library/Group Containers/K36BKF7T3D.group.com.apple.configurator/Library/Caches/Assets/TemporaryItems/MobileApps/")]),t._v(" 会出现刚下载的应用包。解压即可。")]),t._v(" "),e("blockquote",[e("p",[t._v("如果手机上不提前装好 X 应用的话，AppleConfigurator 会直接把应用同步到手机上后，将缓存的 IPA 包删掉。")])])]),t._v(" "),e("li",[e("p",[t._v("如果你的苹果电脑是基于 M 系列芯片的，则可以直接在电脑端的 AppStore 上搜索对应的应用，下载完应用之后，去应用程序文件夹查看应用包。")])])]),t._v(" "),e("p",[t._v("你可以根据自己的情况去选择具体的获取应用的方式。")]),t._v(" "),e("h2",{attrs:{id:"从应用包中获取素材"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从应用包中获取素材"}},[t._v("#")]),t._v(" 从应用包中获取素材")]),t._v(" "),e("p",[t._v("获取 IPA 包并解压之后，拿到包的具体信息，右键查看包内容，具体如图")]),t._v(" "),e("p",[e("img",{attrs:{src:r(483),alt:"Untitled"}})]),t._v(" "),e("p",[e("a",{attrs:{href:"http://Assets.car",target:"_blank",rel:"noopener noreferrer"}},[t._v("Assets.car"),e("OutboundLink")],1),t._v(" 就是我们希望拿到的目标素材资源包。我们需要一个额外的工具 cartool 打开它，这个工具在"),e("a",{attrs:{href:"https://github.com/chenjie1219/cartool/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),e("OutboundLink")],1),t._v("下载。")]),t._v(" "),e("p",[t._v("打开 cartool，如图所示，将 car 文件拖到这里，当前目录下就会出现一个 assets 的文件夹，里面就是解压好的资源。")]),t._v(" "),e("p",[e("img",{attrs:{src:r(484),alt:"Untitled"}})]),t._v(" "),e("p",[t._v("参考地址:")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6847902223553265672",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载应用ipa包的方法"),e("OutboundLink")],1),t._v("   #Apple Configurator 方法")]),t._v(" "),e("li",[t._v("https://github.com/chenjie1219/cartool/releases")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://iosre.com/t/appstore-%E6%8A%93%E5%8C%85%E4%B8%8B%E8%BD%BD%E7%9A%84ipa%E6%96%87%E4%BB%B6-%E6%97%A0%E6%B3%95%E5%AE%89%E8%A3%85/7799",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://iosre.com/t/appstore-抓包下载的ipa文件-无法安装/7799"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://awesome-tips.gitbook.io/ios/qi-ta/content-13",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://awesome-tips.gitbook.io/ios/qi-ta/content-13"),e("OutboundLink")],1)])]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("关注我的微信公众号，我在上面会分享我的日常所思所想。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:r(343),width:"40%/"}})])])}),[],!1,null,null,null);e.default=o.exports}}]);