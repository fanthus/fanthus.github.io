(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{646:function(t,s,a){"use strict";a.r(s);var n=a(5),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("系统提供了两种计算对象实例内存大小的方式")]),t._v(" "),s("ol",[s("li",[t._v("通过 runtime 提供的 "),s("code",[t._v("class_getInstanceSize")]),t._v(" API")]),t._v(" "),s("li",[t._v("通过底层的 "),s("code",[t._v("malloc_size")]),t._v(" 方法。")])]),t._v(" "),s("p",[t._v("但是这两个 API 可能会返回不同的结果，看下下面的代码预期会发生什么")]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" size "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSObject class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" msize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__bridge "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("NSObject alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%zu\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("printf")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%zu\\n"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("我们知道 NSObject 的成员变量仅仅是包含一个8字节的 isa 指针，所以预期结果是，两个 API 返回的结果都是 8 字节。事实上 "),s("code",[t._v("malloc_size")]),t._v(" API 返回的结果是 16 字节。")]),t._v(" "),s("p",[t._v("为什么？")]),t._v(" "),s("p",[s("strong",[t._v("我们看下 "),s("code",[t._v("class_getInstanceSize")]),t._v(" API 的实现")])]),t._v(" "),s("div",{staticClass:"language-c extra-class"},[s("pre",{pre:!0,attrs:{class:"language-c"}},[s("code",[s("span",{pre:!0,attrs:{class:"token macro property"}},[s("span",{pre:!0,attrs:{class:"token directive-hash"}},[t._v("#")]),s("span",{pre:!0,attrs:{class:"token directive keyword"}},[t._v("define")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token macro-name"}},[t._v("WORD_MASK")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token expression"}},[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("7UL")])])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("size_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Class cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("cls"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" cls"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alignedInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("alignedInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("word_align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unalignedInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("inline")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("word_align")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" x"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" WORD_MASK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v("WORD_MASK"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("uint32_t")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("unalignedInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ro")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("->")]),t._v("instanceSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("先获取未对齐的实例大小（OC 编译后实例的内存大小布局就已经确定了），然后将实例大小进行字对齐操作（64 位系统的按照 8 字节对齐），最终得到的大小就是 "),s("code",[t._v("class_getInstanceSize")]),t._v(" 的值。这种计算方式其实并不需要系统真正的分配对象，而是在编译期就能拿到编译后的类实例所占用的内存大小。")]),t._v(" "),s("p",[t._v("在上面的例子里面 isa 是 8 个字节，对齐后依然是 8 字节，所以 "),s("code",[t._v("class_getInstanceSize")]),t._v(" 返回 8 字节没有问题。")]),t._v(" "),s("p",[s("strong",[t._v("再看 "),s("code",[t._v("malloc_size")]),t._v(" 为什么返回 16 字节？")])]),t._v(" "),s("p",[s("code",[t._v("malloc_size")]),t._v(" API 的介绍如下，它是返回系统分配给指定指针指向内存的内存块的大小。")]),t._v(" "),s("blockquote",[s("p",[t._v("The "),s("code",[t._v("malloc_size()")]),t._v(" function returns the size of the memory block that\nbacks the allocation pointed to by ptr.  The memory block size is always\nat least as large as the allocation it backs, and may be larger.")])]),t._v(" "),s("p",[t._v("但是在 iOS 在分配内存的时候，最小分配的颗粒度是 16 字节，参考官方文档 "),s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/MemoryAlloc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tips for Allocating Memory"),s("OutboundLink")],1)]),t._v(" "),s("blockquote",[s("p",[t._v("When allocating any small blocks of memory, remember that the granularity for blocks allocated by the malloc library is 16 bytes. "),s("strong",[t._v("Thus, the smallest block of memory you can allocate is 16 bytes and any blocks larger than that are a multiple of 16")]),t._v(". For example, if you call malloc and ask for 4 bytes, it returns a block whose size is 16 bytes; if you request 24 bytes, it returns a block whose size is 32 bytes. Because of this granularity, you should design your data structures carefully and try to make them multiples of 16 bytes whenever possible.")])]),t._v(" "),s("p",[t._v("任何小于 16 字节的内存会按照最小颗粒度 16 字节进行大小分配。所以这就是在运行时分配内存的时候，尽管 NSObject 实例只占用 8 个字节，但是也要按照 16 字节分配的原因。")]),t._v(" "),s("p",[s("strong",[t._v("下面这个例子中预期的输出结果是什么？")])]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Person "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" NSString "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" argc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" argv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("@")]),t._v("autoreleasepool "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        size_t isize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("class_getInstanceSize")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Person class"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"class_getInstanceSize %zu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("isize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\t\tPerson "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("person "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Person alloc"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" init"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        size_t msize "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("malloc_size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__bridge "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("person"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("NSLog")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('@"malloc_size %zu"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("msize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("class_getInstanceSize")]),t._v(" API 计算的时候，还是按照编译后的成员变量大小占用来计算， "),s("code",[t._v("Person")]),t._v(" 类有 "),s("code",[t._v("isa")]),t._v(" 指针成员变量以及 "),s("code",[t._v("NSString")]),t._v(" 指针。两个指针分别占用 8 个字节，所以输出结果是 16 字节。")]),t._v(" "),s("p",[t._v("再看  "),s("code",[t._v("malloc_size")]),t._v(" API 输出的结果也是 16 个字节。可能会疑惑刚从说的分配内存不是按照最小颗粒度是 16 字节分配吗？为啥一个 "),s("code",[t._v("isa")]),t._v(" 指针分配是 16 字节，多了一个 "),s("code",[t._v("NSString")]),t._v(" 指针还是 16 字节。")]),t._v(" "),s("p",[t._v("我认为这里涉及到内存对齐的概念，即两个指针都占用 8 个字节，而最小颗粒度 16 字节能容纳下来两个指针的大小。所以系统没有必要再额外分配多余的内存给成员变量。")]),t._v(" "),s("p",[t._v("如果将 Person 中的 NSString 替换为占用 8 字节的 int 类型，结果如何呢？")]),t._v(" "),s("div",{staticClass:"language-objectivec extra-class"},[s("pre",{pre:!0,attrs:{class:"language-objectivec"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@interface")]),t._v(" Person "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" NSObject\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@property")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("nonatomic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@end")]),t._v("\n")])])]),s("p",[t._v("通过 "),s("code",[t._v("class_getInstanceSize")]),t._v(" API 计算得到的结果是 16 字节，这里依然是考虑了内存对齐，如果不考虑内存对齐，Person 实例实际占用的内存是 isa(8字节)+ int(4字节) = 12 字节大小，但是因为内存对齐的缘故，实际计算结果是 16 字节。")]),t._v(" "),s("p",[t._v("所以其实不论是 "),s("code",[t._v("class_getInstanceSize")]),t._v(" 还是 "),s("code",[t._v("malloc_size")]),t._v(" 在实际计算内存的时候都会考虑到内存对齐的操作。")]),t._v(" "),s("p",[t._v("参考地址:")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.jianshu.com/p/abe6f927df8a",target:"_blank",rel:"noopener noreferrer"}},[t._v("iOS底层探索之内存对齐和calloc"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/Performance/Conceptual/ManagingMemory/Articles/MemoryAlloc.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tips for Allocating Memory"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.apple.com/library/archive/documentation/System/Conceptual/ManPages_iPhoneOS/man3/malloc_size.3.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("malloc_size API"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://fanthus.github.io/2023/02/07/swift-%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swift 内存模型"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=e.exports}}]);