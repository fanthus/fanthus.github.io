(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{631:function(e,t,o){"use strict";o.r(t);var n=o(5),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("XPC 是 macOS 里经常用到的进程间通信机制。本文不关注 XPC 的内部机制，而是一篇教你如何上手 XPC 的文章。")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("创建 "),t("code",[e._v("macOS")]),e._v(" 工程 "),t("code",[e._v("FRTestXPC")]),e._v("，选择 "),t("code",[e._v("Cocoa App Template")]),e._v("。")])]),e._v(" "),t("li",[t("p",[e._v("在工程 "),t("code",[e._v("FRTestXPC")]),e._v(" 里点击增加 "),t("code",[e._v("Target")]),e._v("，在弹出框搜索 "),t("code",[e._v("XPC")]),e._v(", 选择搜索结果中的 "),t("code",[e._v("XPC Service")]),e._v("，然后命名 "),t("code",[e._v("Target")]),e._v(" 为 "),t("code",[e._v("FRTestXPC_Helper")]),e._v(" 并将 "),t("code",[e._v("target")]),e._v(" 对应的 info.plist 文件中 "),t("code",[e._v("bundle id")]),e._v(" 修改为 'com.frank.xpchelper'")])]),e._v(" "),t("li",[t("p",[e._v("选择 "),t("code",[e._v("FRTestXPC Target")]),e._v(" -> "),t("code",[e._v("Build Phases")]),e._v(" 然后新增 "),t("code",[e._v("CopyFiles")]),e._v(" 项目，将刚刚的 "),t("code",[e._v("FRTestXPC_Helper.xpc")]),e._v(" 加进去，注意 "),t("code",[e._v("Destination")]),e._v(" 必须要选择 "),t("code",[e._v("XPC Services")]),e._v("。否则后续主程序和 XPC 会无法建立连接。")])]),e._v(" "),t("li",[t("p",[e._v("回过头来看工程目录里 "),t("code",[e._v("FRTestXPC_Helper")]),e._v(" -> "),t("code",[e._v("main.m")]),e._v(" 文件，这里 "),t("code",[e._v("main")]),e._v(" 函数是 "),t("code",[e._v("XPC")]),e._v(" 程序的入口函数。可以看到 "),t("code",[e._v("Xcode")]),e._v(" 已经帮助生成很多 demo code。我们已经不需要做太多。")])]),e._v(" "),t("li",[t("p",[e._v("在主程序的窗口里增加一个 button,在点击方法里实现如下代码")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('NSXPCConnection *con = [[NSXPCConnection alloc]     initWithServiceName:@"com.frank.xpchelper"];\nNSXPCInterface *remoteInterface = [NSXPCInterface interfaceWithProtocol:@protocol(FRTestXPC_HelperProtocol)];\ncon.remoteObjectInterface = remoteInterface;\n[[con remoteObjectProxy]  upperCaseString:@"hello" withReply:^(NSString *reply) {\nNSLog(@"reply = %@",reply);\n    }];\n[con resume];\n')])])])]),e._v(" "),t("li",[t("p",[e._v("启动程序，点击 button，观察终端输出为 HELLO")])])]),e._v(" "),t("h2",{attrs:{id:"一些说明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些说明"}},[e._v("#")]),e._v(" 一些说明")]),e._v(" "),t("ol",[t("li",[e._v("Tips :作为 demo 可以删除掉 "),t("code",[e._v("Project")]),e._v(" 里的各种 "),t("code",[e._v("Test Target")]),e._v(" 和 Test 文件，保持工程清爽直观。")]),e._v(" "),t("li",[e._v("我用的是 "),t("code",[e._v("Xcode9.1")]),e._v("版本，创建好的 XPC 中的代码完全为 Xcode 自动生成的，"),t("code",[e._v("(void)upperCaseString:(NSString *)aString withReply:(void (^)(NSString *))reply;")]),e._v(" 这个协议也是 Xcode 生成的，所以看上面代码不要太突兀，你自己试试就知道了。")]),e._v(" "),t("li",[e._v("初始化主程序 "),t("code",[e._v("NSXPCConnection")]),e._v(" 的时候必须写正确 XPC 的 "),t("code",[e._v("service name.")])])]),e._v(" "),t("h2",{attrs:{id:"一些-qa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些-qa"}},[e._v("#")]),e._v(" 一些 QA")]),e._v(" "),t("p",[t("strong",[e._v("Q: 什么场景下会用到 XPC? 具体到项目中说一下。")]),e._v("\nA: 我觉得用到 XPC 的地方主要还是希望让别的进程分担自己的任务，同时又能够及时的和主进程进行通信。(比如一些网络处理的服务)")]),e._v(" "),t("blockquote",[t("p",[e._v("Apple WWDC 的讲解也是这么说的 So if you just have some background piece of work that needs to happen every so often, you can use XPC to talk to it, initiate it, and get it running.")])]),e._v(" "),t("p",[e._v("其次是考虑一些其他因素，比如")]),e._v(" "),t("ul",[t("li",[e._v("增加程序稳定性(XPC Service crash 但主程序不 crash).")]),e._v(" "),t("li",[e._v("XPC 服务处理一些不够安全的东西，这时候我们不提供 XPC 任何权限，比如网络访问，文件访问等，但是主程序还是保留所有的权限。\n相当于让小弟干活儿，但是不给小弟太多权利，干的了就干，干不了就别干…..")]),e._v(" "),t("li",[e._v("很重要一点：是这是 App Store 允许的多进程的方式。")])]),e._v(" "),t("p",[t("strong",[e._v("Q: XPC 服务有界面吗?")]),e._v("\nA: 一般都是后台进程。没见过有人用 XPC 搭建界面的。")]),e._v(" "),t("p",[t("strong",[e._v("Q: 系统是怎么通过以下这些 API 方法找到 XPC 服务的 ？")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('NSXPCInterface *myCookieInterface = [NSXPCInterfaceinterfaceWithProtocol:@protocol(XPC_HelperProtocol)];\nNSXPCConnection *myConnection = [[NSXPCConnection alloc]    initWithServiceName:@"com.frank.xpchelper"];\n')])])]),t("p",[e._v("A: 当 app 启动的时候，系统自动注册 app 中可见的 XPC 服务，当 app 与某个 XPC 服务建立连接，然后向他发送包含事件服务的消息。")]),e._v(" "),t("blockquote",[t("p",[e._v("When the app is launched, the system automatically registers each XPC service it finds into the namespace visible to the app. An app establishes a connection with one of its XPC services and sends it messages containing events that the service then handles")])]),e._v(" "),t("h2",{attrs:{id:"一个-demo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一个-demo"}},[e._v("#")]),e._v(" 一个 Demo")]),e._v(" "),t("p",[e._v("以上的 demo 是最简单的，一般 XPC 用来做后台下载处理比较合适，所以写了一个比上面代码复杂一点点(不过还是很简单)的 demo 放到 github 上，这个 demo 是 XPC 双向同步的。即 "),t("code",[e._v("XPC Service")]),e._v(" 可以不依赖于代理方法的回调而是直接给 "),t("code",[e._v("Client app")]),e._v(" 发送消息。")]),e._v(" "),t("p",[t("code",[e._v("NSXPCConnection")]),e._v(" 是最主要的 API，其余的 API 比如 "),t("code",[e._v("NSXPCInterface")]),e._v("，都是依附于 "),t("code",[e._v("Connection")]),e._v("。构建双向通信的 XPC Demo 在 "),t("code",[e._v("ClientApp")]),e._v(" 和 XPC 里有一些代码非常相似。即互相暴露接口，互相暴露交接的对象。Demo 也提供了一些非常实用的构建 XPC 时用的 API。")]),e._v(" "),t("p",[e._v("Demo 地址: https://github.com/fanxiushan/Demo.XPCTestDemo")]),e._v(" "),t("h2",{attrs:{id:"参考地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考地址"}},[e._v("#")]),e._v(" 参考地址")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/BPSystemStartup/Chapters/CreatingXPCServices.html#//apple_ref/doc/uid/10000172i-SW6-SW1",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating XPC Services"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/MacOSX/Conceptual/OSX_Technology_Overview/SystemTechnology/SystemTechnology.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Mac Technology Overview -> Kernel and Device Drivers Layer -> High-Level Features -> XPC Interprocess Communication and Services"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://developer.apple.com/videos/wwdc2013",target:"_blank",rel:"noopener noreferrer"}},[e._v("WWDC"),t("OutboundLink")],1),e._v(" "),t("a",{attrs:{href:"https://developer.apple.com/documentation/xpc",target:"_blank",rel:"noopener noreferrer"}},[e._v("XPC"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);