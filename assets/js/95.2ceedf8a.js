(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{629:function(e,r,t){"use strict";t.r(r);var n=t(5),a=Object(n.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h2",{attrs:{id:"方法一"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法一"}},[e._v("#")]),e._v(" 方法一")]),e._v(" "),r("p",[e._v("通用的做法是使用 "),r("code",[e._v("getifaddrs")]),e._v(" 方法获取到指向本机网络接口信息的一个链表,然后通过遍历该链表拿到当前的网卡对应的 "),r("code",[e._v("IP")]),e._v(" 地址。\n"),r("code",[e._v("iPhone")]),e._v(" 上的无线网卡是 "),r("code",[e._v("en0")]),e._v(" ，所以拿到 "),r("code",[e._v("ifaddrs")]),e._v(" 结构体后去判断其 "),r("code",[e._v("name")]),e._v(" 成员变量的时候，判定 "),r("code",[e._v("name")]),e._v(" 是否等于 "),r("code",[e._v("en0")]),e._v("。")]),e._v(" "),r("p",[e._v("如果是运行 "),r("code",[e._v("iPhone")]),e._v(" 模拟器的话 "),r("code",[e._v("en0")]),e._v(" 是代表当前电脑上 "),r("code",[e._v("en0")]),e._v(" 对应的网卡地址。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('#include <netinet/in.h>\n#include <sys/socket.h>\n#include <ifaddrs.h>\n#include <arpa/inet.h>\n...\nstruct ifaddrs *address = NULL;\nstruct ifaddrs *temp = NULL;\nif (0 != getifaddrs(&address)) {\n    NSLog(@"getifaddrs error = %s",strerror(errno));\n    return;\n}\ntemp = address;\nwhile (temp->ifa_next != NULL) {\n    NSString *if_name = [NSString stringWithUTF8String:temp->ifa_name];\n    if ([if_name isEqualToString:@"en0"]) {\n        struct sockaddr *ifa_addr = temp->ifa_addr;\n        if (ifa_addr->sa_family == AF_INET) {\n            struct sockaddr_in *in_address = (struct sockaddr_in *)ifa_addr;\n            char *ip_str = inet_ntoa(in_address->sin_addr);\n            NSLog(@"ip %@",[NSString stringWithFormat:@"%s",ip_str]);\n        }\n    }\n    temp = temp->ifa_next;\n}\nfreeifaddrs(address);\n')])])]),r("h2",{attrs:{id:"方法二"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法二"}},[e._v("#")]),e._v(" 方法二")]),e._v(" "),r("p",[r("code",[e._v("iOS")]),e._v(" 上还有一种方式来获取，拿到通过解析当前机器的 "),r("code",[e._v("hostname")]),e._v(" 返回地址链表中的第一个地址作为主 "),r("code",[e._v("IP")]),e._v("。但是这种方法并不适用于 "),r("code",[e._v("macOS")]),e._v(".")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('+ (NSString *)hostname {\n    char baseHostName[256];\n    int success = gethostname(baseHostName, 255);\n    if (success != 0) return nil;\n    baseHostName[255] = \'\\0\';\n#if !TARGET_IPHONE_SIMULATOR\n    return [NSString stringWithFormat:@"%s.local", baseHostName];\n#else\n    return [NSString stringWithFormat:@"%s", baseHostName];\n#endif\n}\n\n// return IP Address\n+ (NSString *)localIPAddress {\n    struct hostent *host = gethostbyname([[self hostname] UTF8String]);\n    if (!host) {herror("resolv"); return nil;}\n    struct in_addr **list = (struct in_addr **)host->h_addr_list;\n    return [NSString stringWithCString:inet_ntoa(*list[0]) encoding:NSUTF8StringEncoding];\n}\n')])])]),r("h2",{attrs:{id:"方法三"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法三"}},[e._v("#")]),e._v(" 方法三")]),e._v(" "),r("p",[r("code",[e._v("macOS")]),e._v(" 不能使用第二种方法，但是可以使用第一种的方法，但是有一个问题，在带有网口的 "),r("code",[e._v("Mac")]),e._v(" 电脑上，"),r("code",[e._v("en0")]),e._v(" 是代表以太网网卡地址，你获取到的 "),r("code",[e._v("IP")]),e._v(" 也是该网卡地址，若想要只获取 "),r("code",[e._v("WIFI")]),e._v(" 的对应网卡地址，则需要使用别的关键词，通常是 "),r("code",[e._v("en1")]),e._v(" 去筛选。")]),e._v(" "),r("p",[e._v("可以使用 "),r("code",[e._v("networksetup -listallhardwareports")]),e._v(" 命令来查看当前的网络硬件配置。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Hardware Port: Ethernet\nDevice: en0\nEthernet Address: 68:5b:35:a5:a2:d5\n\nHardware Port: Wi-Fi\nDevice: en1\nEthernet Address: c8:e0:eb:4c:f9:bf\n....\n")])])]),r("p",[e._v("所以想获取 "),r("code",[e._v("WIFI")]),e._v(" 的网卡地址话需要将 "),r("code",[e._v("en0")]),e._v(" 替换为 "),r("code",[e._v("en1")]),e._v("，但是这并不是通用的方案，因为在 Mac Air 上 "),r("code",[e._v("en0")]),e._v(" 再次代表了 "),r("code",[e._v("WIFI")]),e._v("，"),r("code",[e._v("enX")]),e._v(" 这种判断方式不够靠谱，我们想要一个更加通用的解决方案。")]),e._v(" "),r("p",[e._v("通用的解决方案如下，获取系统配置，通过匹配 "),r("code",[e._v("AirPort")]),e._v(" 关键字来进行匹配，里面的关键字参考 "),r("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/Networking/Conceptual/SystemConfigFrameworks/SC_UnderstandSchema/SC_UnderstandSchema.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("System Configuration Programming Guidelines"),r("OutboundLink")],1)]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//1. 创建 dynamic store.\nSCDynamicStoreRef store = SCDynamicStoreCreate(NULL, (__bridge CFStringRef)@"example", NULL, NULL);\n//2. 通过 keystore 从 dynamic store 中获取数据.\nNSString *keyStr = @"Setup:/Network/Global/IPv4";\nNSDictionary *global = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)keyStr);\n//3. 根据 IPv4 的全局数据拿所有 services\nNSArray *services = [global objectForKey:@"ServiceOrder"];\n//4. 取出 wifi 相关 service.\n//Note: wifi serviceId 和 \'/Library/Preferences/SystemConfiguration/preferences.plist\' 里 wifi serviceID 一样.\nfor (NSString *serviceID in services) {\n    NSString *serviceKeyStr = [NSString stringWithFormat:@"State:/Network/Service/%@/IPv4",serviceID];\n    NSDictionary *serviceInfo = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)serviceKeyStr);\n    if (serviceInfo) {\n        NSString *interfaceKeyStr = [NSString stringWithFormat:@"Setup:/Network/Service/%@/Interface",serviceID];\n        NSDictionary *globalInterface = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)interfaceKeyStr);\n        if ([[globalInterface objectForKey:@"Hardware"] isEqualToString:@"AirPort"] ) {\n            NSString *wifiAddress = [[serviceInfo objectForKey:@"Addresses"] objectAtIndex:0];\n            return wifiAddress;\n        }\n    }\n}\n')])])]),r("p",[e._v("但是这个方法并不适用于 "),r("code",[e._v("iOS")]),e._v("，因为 "),r("code",[e._v("iOS")]),e._v(" 不支持上面的 "),r("code",[e._v("API")])]),e._v(" "),r("h1",{attrs:{id:"获取空闲端口"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取空闲端口"}},[e._v("#")]),e._v(" 获取空闲端口")]),e._v(" "),r("p",[e._v("大概思路：")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("创建套接字。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("int local_sock = socket(temp_addr->ifa_addr->sa_family,SOCK_DGRAM, 0);\n")])])])]),e._v(" "),r("li",[r("p",[e._v("构建本地 "),r("code",[e._v("sockaddr")]),e._v(" 的时候 "),r("code",[e._v("sin_port")]),e._v(" 变量传入 0 。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("struct sockaddr_in local_addr;\nbzero(&local_addr, sizeof(local_addr));\nlocal_addr.sin_family = AF_INET;\nlocal_addr.sin_port = 0;\nlocal_addr.sin_addr.s_addr = htonl(INADDR_ANY);\n")])])])]),e._v(" "),r("li",[r("p",[e._v("然后 "),r("code",[e._v("bind")]),e._v(" 这个套接字到本地 "),r("code",[e._v("sockaddr")]),e._v(" 地址。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("result = bind(local_sock, (struct sockaddr *)&local_addr, sizeof(local_addr));\n")])])])]),e._v(" "),r("li",[r("p",[e._v("如果 "),r("code",[e._v("bind")]),e._v(" 成功，接下来通过 "),r("code",[e._v("getsockname")]),e._v(" 方法来获取 "),r("code",[e._v("sockaddr")]),e._v(" 地址。这时候 "),r("code",[e._v("sockaddr")]),e._v(" 里的 "),r("code",[e._v("sin_port")]),e._v(" 即为没有被占用的端口。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("getsockname(local_sock, (struct sockaddr *)&sin, &len)\n")])])])])]),e._v(" "),r("p",[e._v("有点空手套白狼的意思。")]),e._v(" "),r("h1",{attrs:{id:"macos-上监听-wifi-切换引起-ip-变化的方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#macos-上监听-wifi-切换引起-ip-变化的方法"}},[e._v("#")]),e._v(" macOS 上监听 WIFI 切换引起 IP 变化的方法")]),e._v(" "),r("p",[e._v("之前使用的 "),r("code",[e._v("AFNetworkReachabilityManager")]),e._v(" 不太符合要求，有的时候切换了 WIFI 也不能及时进行变化。 "),r("code",[e._v("CoreWLAN")]),e._v(" 框架提供了一个监听的方法")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("- (BOOL)startMonitoringEventWithType:(CWEventType)type error:(out NSError * _Nullable *)error;\n")])])]),r("p",[e._v("不幸的是，这个方法不能再沙盒之外使用。")]),e._v(" "),r("p",[e._v("经过搜索发现一个方法能完整实现改功能，其实就是上面的获取 IP 的第三个方法，只不过需要增加点东西。具体可以参考下面代码。")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('static NSString *wifiServiceKeyStr;\n//监听 WIFI 变化的回调方法\nvoid dynamicStoreChange(SCDynamicStoreRef store,CFArrayRef changedKeys, void * __nullable info) {\n    NSLog(@"store %@,changedKeys %@,info %s",store,changedKeys,info);\n    for (NSString *changeKey in (__bridge NSArray *)changedKeys) {\n        if ([changeKey isEqualToString:wifiServiceKeyStr]) {\n            NSDictionary *serviceInfo = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)changeKey);\n            NSLog(@"now server info %@",serviceInfo);\n        }\n    }\n}\n\n\n//1. 创建 dynamic store.\nSCDynamicStoreRef store = SCDynamicStoreCreate(NULL, (__bridge CFStringRef)@"example", dynamicStoreChange, NULL);\n\nNSString *interfaceKey = @"State:/Network/Interface";\nNSDictionary *interfaces = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)interfaceKey);\nNSLog(@"interfaces = %@",interfaces);\n\n//2. 通过 keystore 从 dynamic store 中获取数据.\nNSString *keyStr = @"Setup:/Network/Global/IPv4";\nNSDictionary *global = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)keyStr);\n//3. 根据 IPv4 的全局数据拿所有 services\nNSArray *services = [global objectForKey:@"ServiceOrder"];\n//4. 取出 wifi 相关 service.\n//Note: wifi serviceId 和 \'/Library/Preferences/SystemConfiguration/preferences.plist\' 里 wifi serviceID 一样.\n//注意不能用 en0 和 en1 进行判断。en0 和 en1 在 iMac 和 macAir 上有对应不同的网卡。\nfor (NSString *service in services) {\n    NSString *serviceKeyStr = [NSString stringWithFormat:@"State:/Network/Service/%@/IPv4",service];\n    NSDictionary *serviceInfo = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)serviceKeyStr);\n    if (serviceInfo) {\n        NSString *interfaceKeyStr = [NSString stringWithFormat:@"Setup:/Network/Service/%@/Interface",service];\n        NSDictionary *globalInterface = (__bridge NSDictionary *)SCDynamicStoreCopyValue(store, (__bridge CFStringRef)interfaceKeyStr);\n        if ([[globalInterface objectForKey:@"Hardware"] isEqualToString:@"AirPort"] ) {\n            NSLog(@"service info = %@",serviceInfo);\n            wifiServiceKeyStr = serviceKeyStr;\n        }\n    }\n}\n//5. 监听 wifi 相关 service 的变化.\nif (wifiServiceKeyStr) {\n    SCDynamicStoreSetNotificationKeys(store, NULL,(__bridge CFArrayRef)@[wifiServiceKeyStr]);\n    CFRunLoopAddSource(CFRunLoopGetCurrent(),\n                       SCDynamicStoreCreateRunLoopSource(NULL, store, 0),\n                       kCFRunLoopCommonModes);\n}\n')])])])])}),[],!1,null,null,null);r.default=a.exports}}]);