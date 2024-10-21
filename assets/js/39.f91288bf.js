(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{400:function(_,e,o){_.exports=o.p+"assets/img/15268076432722.df3fdd4e.jpg"},401:function(_,e,o){_.exports=o.p+"assets/img/15268143127436.1a446f41.jpg"},402:function(_,e,o){_.exports=o.p+"assets/img/15268110185323.a633354c.jpg"},630:function(_,e,o){"use strict";o.r(e);var c=o(5),t=Object(c.a)({},(function(){var _=this,e=_._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[e("p",[_._v("本文将按照如下顺序逐个说明")]),_._v(" "),e("ol",[e("li",[_._v("Block 的本质")]),_._v(" "),e("li",[_._v("Block 捕获成员变量")]),_._v(" "),e("li",[_._v("Block 的存储域以及内存生命周期分析")]),_._v(" "),e("li",[_._v("Block 捕获成员变量的生命周期")]),_._v(" "),e("li",[_._v("GCD 里面的 Block 分析")]),_._v(" "),e("li",[_._v("MRC & ARC 下 Block 内存管理区别")]),_._v(" "),e("li",[_._v("Block **weak 分析 / **strongSelf 分析")]),_._v(" "),e("li",[_._v("一些常问的关于 Block 的面试题回答")])]),_._v(" "),e("p",[_._v("本文不关注 Block 的语法，只尝试说明 Block 捕获变量的方式，Block 捕获的变量的生命周期以及 Block 自身的生命周期。最后对一些常见的自己的疑问进行一些梳理归纳。")]),_._v(" "),e("h2",{attrs:{id:"block-的本质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-的本质"}},[_._v("#")]),_._v(" Block 的本质")]),_._v(" "),e("p",[_._v("使用 "),e("code",[_._v("clang -rewrite-objc main.m")]),_._v(" 编译如下代码")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    void(^block)(void) = ^() { NSLog(@"hello world"); };\n    block();\n    return 0;\n}\n')])])]),e("p",[_._v("得到结果是")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __main_block_impl_0 {\n  struct __block_impl impl;\n  struct __main_block_desc_0* Desc;\n  __main_block_impl_0(void *fp, struct __main_block_desc_0 *desc, int flags=0) {\n    impl.isa = &_NSConcreteStackBlock;\n    impl.Flags = flags;\n    impl.FuncPtr = fp;\n    Desc = desc;\n  }\n};\n//---\nstruct __block_impl {\n  void *isa;\n  int Flags;\n  int Reserved;\n  void *FuncPtr;\n};\n//---\nstatic struct __main_block_desc_0 {\n  size_t reserved;\n  size_t Block_size;\n} __main_block_desc_0_DATA = { 0, sizeof(struct __main_block_impl_0)};\n//---\nint main(int argc, const char * argv[]) {\n    //初始化 block\n    void(*block)(void) = ((void (*)())&__main_block_impl_0((void *)__main_block_func_0, &__main_block_desc_0_DATA));\n    //执行 block 对应方法\n    ((void (*)(__block_impl *))((__block_impl *)block)->FuncPtr)((__block_impl *)block);\n    return 0;\n}\n//---\nstatic void __main_block_func_0(struct __main_block_impl_0 *__cself) {\n    NSLog((NSString *)&__NSConstantStringImpl__var_folders_9w_q4lvthyn17v0cxxm5s7fsb500000gn_T_main_aef28d_mi_0);\n}\n")])])]),e("p",[_._v("从上面编译后的文件里可以看到一些信息"),e("code",[_._v("block")]),_._v("实现的主体就是"),e("code",[_._v("__main_block_impl_0")]),_._v("，这个结构体里面嵌套了一个名字为"),e("code",[_._v("__block_impl")]),_._v("的结构体以及名为"),e("code",[_._v("__main_block_desc_0")]),_._v("的结构体指针。闭包里面的代码部分被抽出来生成了一个 "),e("code",[_._v("C")]),_._v(" 语言的函数实现 "),e("code",[_._v("__main_block_func_0")]),_._v("，注意的是这个函数的参数就是结构体本身，这么做有啥用呢？方法实现里根本没用到 "),e("code",[_._v("block")]),_._v(" 实例啊，后面会用到的...")]),_._v(" "),e("p",[_._v("说明一下这个 "),e("code",[_._v("__block_impl")]),_._v(" 结构体:")]),_._v(" "),e("ul",[e("li",[e("code",[_._v("__block_impl")]),_._v("结构体里面有"),e("code",[_._v("void *isa")]),_._v("成员变量，很眼熟对不对，这个就是"),e("code",[_._v("Objective-C")]),_._v("对象实现中的对象指针，所以我们通常认为"),e("code",[_._v("block")]),_._v("也算是"),e("code",[_._v("Objective-C")]),_._v("对象。")]),_._v(" "),e("li",[e("code",[_._v("__main_block_impl_0")]),_._v("初始化方法"),e("code",[_._v("impl.isa = &_NSConcreteStackBlock;")]),_._v(" Demo 里的 "),e("code",[_._v("block")]),_._v(" 类型属于 "),e("code",[_._v("_NSConcreteStackBlock")]),_._v("。")]),_._v(" "),e("li",[e("code",[_._v("__block_impl")]),_._v("结构体里有函数指针 "),e("code",[_._v("FuncPtr")]),_._v("，在 "),e("code",[_._v("__main_block_impl_0")]),_._v(" 初始化的时候指向"),e("code",[_._v("block")]),_._v("闭包里面函数的实现。")])]),_._v(" "),e("h2",{attrs:{id:"block-捕获变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获变量"}},[_._v("#")]),_._v(" Block 捕获变量")]),_._v(" "),e("h3",{attrs:{id:"block-捕获普通类型自动变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获普通类型自动变量"}},[_._v("#")]),_._v(" Block 捕获普通类型自动变量")]),_._v(" "),e("p",[e("code",[_._v("Block")]),_._v(" 的一个强大之处在于能捕获变量，在执行闭包方法的时候利用外部捕获的变量得到一些想要的结果，这是怎么做到的？将 "),e("code",[_._v("demo")]),_._v(" 稍作改动，添加一个自动变量，如下：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    int a = 0;\n    void(^block)(void) = ^() { NSLog(@"hello world a = %d",a); };\n    a = 3;\n    block();\n    return 0;\n}\n//执行结果如下\nhello world a = 0;\n')])])]),e("p",[_._v("继续使用 "),e("code",[_._v("clang -rewrite-objc main.m")]),_._v(" 进行编译，得到如下结果（已精简）")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __main_block_impl_0 {\n  struct __block_impl impl;\n  struct __main_block_desc_0* Desc;\n  int a;\n  __main_block_impl_0(void *fp, struct __main_block_desc_0 *desc, int _a, int flags=0) : a(_a) {\n    impl.isa = &_NSConcreteStackBlock;\n    impl.Flags = flags;\n    impl.FuncPtr = fp;\n    Desc = desc;\n  }\n};\nstatic void __main_block_func_0(struct __main_block_impl_0 *__cself) {\n    int a = __cself->a; // bound by copy\n    NSLog((NSString *)&__NSConstantStringImpl__var_folders_9w_q4lvthyn17v0cxxm5s7fsb500000gn_T_main_473c35_mi_0,a);\n}\nint main(int argc, const char * argv[]) {\n    int a = 0;\n    void(*block)(void) = ((void (*)())&__main_block_impl_0((void *)__main_block_func_0, &__main_block_desc_0_DATA, a));\n    a = 3;\n    ((void (*)(__block_impl *))((__block_impl *)block)->FuncPtr)((__block_impl *)block);\n    return 0;\n}\n")])])]),e("p",[_._v("这次跟没有捕获成员变量时候比，在 "),e("code",[_._v("__main_block_impl_0")]),_._v(" 结构体里多了一个成员变量 "),e("code",[_._v("a")]),_._v("，结合 "),e("code",[_._v("main.m")]),_._v(" 实现以及 "),e("code",[_._v("__main_block_impl_0()")]),_._v(" 的初始化方法可以看到这个成员变量 "),e("code",[_._v("a")]),_._v(" 的初始化是依靠外部同名自动变量 "),e("code",[_._v("a")]),_._v(" 的赋值，所以打印的时候会打印初始化 "),e("code",[_._v("block")]),_._v(" 时候外部变量的 "),e("code",[_._v("a")]),_._v(" 的值。如果在 block 初始化之后再次对外部自动变量 "),e("code",[_._v("a")]),_._v(" 进行了修改，则 "),e("code",[_._v("block")]),_._v(" 自动变量不会被修改。参考上面 demo 的执行结果。")]),_._v(" "),e("h3",{attrs:{id:"block-捕获并修改普通类型自动变量-block-修饰符分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获并修改普通类型自动变量-block-修饰符分析"}},[_._v("#")]),_._v(" Block 捕获并修改普通类型自动变量/__block 修饰符分析")]),_._v(" "),e("p",[_._v("有一个值得思考的问题，如果我想要在 "),e("code",[_._v("block")]),_._v(" 的闭包函数里修改外部变量的值该怎么做？目前的实现只是打印了 "),e("code",[_._v("block")]),_._v(" 成员变量"),e("code",[_._v("a")]),_._v("的值，如果修改的话，我们也仅仅只能修改成员变量"),e("code",[_._v("a")]),_._v("的值，而没有途径修改外部变量的值。怎么办？一个方法就是在 "),e("code",[_._v("block")]),_._v(" 内部做一个指针，指向外部自动变量 "),e("code",[_._v("a")]),_._v(",这样就能在执行方法的时候通过指针去修改外部变量的值。怎么样才能实现我们这个方案呢，"),e("code",[_._v("block")]),_._v(" 提供了一个修饰符 "),e("code",[_._v("__block")]),_._v(" 去修饰外部成员变量，当 "),e("code",[_._v("block")]),_._v(" 捕获了带有 "),e("code",[_._v("__block")]),_._v(" 修饰的外部成员变量的时候会自动在结构体内部生成一个引用外部变量的指针变量。如下 demo 所示：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    __block int a = 0; ①\n    void(^block)(void) = ^() { NSLog(@"hello world a = %d",a); ②};\n    ③\n    a = 3;\n    block();\n    return 0;\n}\n//执行结果是\nhello world a = 3\n')])])]),e("blockquote",[e("p",[_._v("注：①②③ 处分别打印 "),e("code",[_._v("a")]),_._v(" 的内存地址，在 "),e("code",[_._v("ARC/MRC")]),_._v(" 下会有不同的结果，在 "),e("code",[_._v("MRC")]),_._v(" 下内存地址打印都是一样的，但是在 "),e("code",[_._v("ARC")]),_._v(" 下，① 和 ②③ 打印的地址不一样，① 打印的是栈上地址，②③ 打印的是堆上的地址，原因是在 "),e("code",[_._v("ARC")]),_._v(" 下向 "),e("code",[_._v("block")]),_._v(" 赋值的时候，会自动将 "),e("code",[_._v("block")]),_._v(" 从栈上拷贝到堆上。这个现象和后面说到的像 "),e("code",[_._v("strong")]),_._v(" 修饰符修饰的 "),e("code",[_._v("block")]),_._v(" 属性赋值是一个道理。")])]),_._v(" "),e("p",[_._v("编译后的结果为")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __Block_byref_a_0 {\n  void *__isa;\n__Block_byref_a_0 *__forwarding;\n int __flags;\n int __size;\n int a;\n};\nstruct __main_block_impl_0 {\n  struct __block_impl impl;\n  struct __main_block_desc_0* Desc;\n  __Block_byref_a_0 *a; // by ref\n  __main_block_impl_0(void *fp, struct __main_block_desc_0 *desc, __Block_byref_a_0 *_a, int flags=0) : a(_a->__forwarding) {\n    impl.isa = &_NSConcreteStackBlock;\n    impl.Flags = flags;\n    impl.FuncPtr = fp;\n    Desc = desc;\n  }\n};\nstatic void __main_block_func_0(struct __main_block_impl_0 *__cself) {\n    __Block_byref_a_0 *a = __cself->a; // bound by ref\n    NSLog((NSString *)&__NSConstantStringImpl__var_folders_9w_q4lvthyn17v0cxxm5s7fsb500000gn_T_main_bd6f8c_mi_0,(a->__forwarding->a));\n}\nstatic void __main_block_copy_0(struct __main_block_impl_0*dst, struct __main_block_impl_0*src) {\n    _Block_object_assign((void*)&dst->a, (void*)src->a, 8/*BLOCK_FIELD_IS_BYREF*/);\n}\nstatic void __main_block_dispose_0(struct __main_block_impl_0*src) {\n    _Block_object_dispose((void*)src->a, 8/*BLOCK_FIELD_IS_BYREF*/);\n}\nstatic struct __main_block_desc_0 {\n  size_t reserved;\n  size_t Block_size;\n  void (*copy)(struct __main_block_impl_0*, struct __main_block_impl_0*);\n  void (*dispose)(struct __main_block_impl_0*);\n} __main_block_desc_0_DATA = { 0, sizeof(struct __main_block_impl_0), __main_block_copy_0, __main_block_dispose_0\n};\n\nint main(int argc, const char * argv[]) {\n    __attribute__((__blocks__(byref))) __Block_byref_a_0 a = {(void*)0,(__Block_byref_a_0 *)&a, 0, sizeof(__Block_byref_a_0), 0};\n    void(*block)(void) = ((void (*)())&__main_block_impl_0((void *)__main_block_func_0, &__main_block_desc_0_DATA, (__Block_byref_a_0 *)&a, 570425344));\n    (a.__forwarding->a) = 3;\n    ((void (*)(__block_impl *))((__block_impl *)block)->FuncPtr)((__block_impl *)block);\n    return 0;\n}\n")])])]),e("p",[_._v("根据编译后的结果来看，"),e("code",[_._v("block")]),_._v(" 捕获了带有 "),e("code",[_._v("__block")]),_._v(" 的自动变量之后生成的代码变的很多，而且出现了很多新的方法，比如 "),e("code",[_._v("__main_block_dispose_0")]),_._v(" 和 "),e("code",[_._v("__main_block_copy_0")]),_._v("。同时 "),e("code",[_._v("block")]),_._v(" 对应的结构体 "),e("code",[_._v("__main_block_impl_0")]),_._v(" 里多出来一项 "),e("code",[_._v("__Block_byref_a_0 *a;")]),_._v("，这个跟我们之前预想的并不一样，我们之前预想的就是多出来一个 "),e("code",[_._v("int *a")]),_._v(" 应该就好了，但是这里多出了一个 "),e("code",[_._v("__Block_byref_a_0")]),_._v(" 结构体类型的指针，来看一下定义 ：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __Block_byref_a_0 {\n  void *__isa;\n  __Block_byref_a_0 *__forwarding;\n int __flags;\n int __size;\n int a;\n};\n")])])]),e("p",[_._v("包含 "),e("code",[_._v("void *__isa")]),_._v(" 成员变量，"),e("code",[_._v("__Block_byref_a_0")]),_._v(" 这个也算是一个对象类型，里面包含了一个 "),e("code",[_._v("int a")]),_._v(" 的成员变量，以及一个指向自己的指针。\n被 "),e("code",[_._v("__block")]),_._v(" 修饰符修饰的成员变量被编译器转化为 "),e("code",[_._v("__Block_byref_a_0")]),_._v(" 类型的变量。初始化的时候将外部的 "),e("code",[_._v("__Block_byref_a_0")]),_._v(" 变量地址赋值给 "),e("code",[_._v("block")]),_._v(" 结构体成员变量里的 "),e("code",[_._v("__Block_byref_a_0")]),_._v(" 指针。在 "),e("code",[_._v("block")]),_._v(" 闭包函数执行的时候通过这个指针来去修改外部变量的值。")]),_._v(" "),e("p",[_._v("但是有个问题，为啥不直接生成一个 "),e("code",[_._v("int *a")]),_._v(" 这样的指针，而去生成一个那么麻烦的类型呢？后面详细说明")]),_._v(" "),e("p",[_._v("思考一下，为什么"),e("code",[_._v("block")]),_._v("捕获带有 "),e("code",[_._v("__block")]),_._v(" 修饰符的时候，闭包执行永远输出外部变量"),e("code",[_._v("a")]),_._v("的当前值？")]),_._v(" "),e("h3",{attrs:{id:"block-捕获对象"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获对象"}},[_._v("#")]),_._v(" Block 捕获对象")]),_._v(" "),e("p",[_._v("先上个 demo")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    NSString * a = @"hello";\n    void(^block)(void) = ^() { NSLog(@"hello world a = %@",a); };\n    a = @"world";\n    block();\n    return 0;\n}\n')])])]),e("p",[_._v("编译后")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __main_block_impl_0 {\n  struct __block_impl impl;\n  struct __main_block_desc_0* Desc;\n  NSString *a;\n  __main_block_impl_0(void *fp, struct __main_block_desc_0 *desc, NSString *_a, int flags=0) : a(_a) {\n    impl.isa = &_NSConcreteStackBlock;\n    impl.Flags = flags;\n    impl.FuncPtr = fp;\n    Desc = desc;\n  }\n};\n//\nint main(int argc, const char * argv[]) {\n    NSString * a = (NSString *)&__NSConstantStringImpl__var_folders_r4_93dvjwh16d17_brzl2bv_xb40000gn_T_main_0c7a66_mi_0;\n    void(*block)(void) = ((void (*)())&__main_block_impl_0((void *)__main_block_func_0, &__main_block_desc_0_DATA, a, 570425344));\n    a = (NSString *)&__NSConstantStringImpl__var_folders_r4_93dvjwh16d17_brzl2bv_xb40000gn_T_main_0c7a66_mi_2;\n    ((void (*)(__block_impl *))((__block_impl *)block)->FuncPtr)((__block_impl *)block);\n    return 0;\n}\n//\nstatic void __main_block_func_0(struct __main_block_impl_0 *__cself) {\n  NSString *a = __cself->a; // bound by copy\n NSLog((NSString *)&__NSConstantStringImpl__var_folders_r4_93dvjwh16d17_brzl2bv_xb40000gn_T_main_0c7a66_mi_1,a);\n}\n")])])]),e("p",[e("code",[_._v("block")]),_._v("实现的结构体"),e("code",[_._v("__main_block_impl_0")]),_._v("里多了一个 "),e("code",[_._v("NSString *a")]),_._v("，貌似和捕获正常的自动变量没什么差别。从 "),e("code",[_._v("mian.m")]),_._v(" 方法里的 "),e("code",[_._v("block")]),_._v(" 初始化过程里可以看到，这个结构体成员变量的具体的赋值过程其实就是外部字符串对象 "),e("code",[_._v("a")]),_._v(" 直接赋值给了 "),e("code",[_._v("block")]),_._v(" 结构体成员变量 "),e("code",[_._v("a")]),_._v("，具体的 "),e("code",[_._v("block")]),_._v(" 闭包实现中也是直接从 "),e("code",[_._v("block")]),_._v(" 结构体中取出 "),e("code",[_._v("a")]),_._v(" 直接进行的访问。所以其实闭包里面可以修改对象指针的话也丝毫不会影响外部的同名自动变量 "),e("code",[_._v("a")]),_._v("（这俩根本就不是一个对象指针...），但是如果直接在里面修改的话，编译器是不支持的，会报错（跟捕获普通自动变量时候报一个错）如下：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("Error:Variable is not assignable (missing __block type specifier)\n")])])]),e("p",[_._v("但是，如果不是对捕获的外部变量进行指针修改的话，是可以对这些外部变量进行一些操作的，比如说我们捕获的变量是一个可变数组，demo 如下:")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    NSMutableArray *muarr = [NSMutableArray arrayWithCapacity:0];\n    void(^block)(void) = ^() {\n        [muarr addObject:@"1"];\n        NSLog(@"muarr = %@",muarr);\n    };\n    block();\n    return 0;\n}\n//执行结果如下:\nBlockDemo[1088:31899] muarr = (\n    1\n)\n')])])]),e("p",[_._v("可以看到我们在不改变外部对象指针的情况下，对外部对象进行了操作。")]),_._v(" "),e("blockquote",[e("p",[_._v("写到这儿不知道为啥想起来，其实跟字符串对象用 strong 修饰还是 copy 修饰有异曲同工之妙了，一般面试题问起来的话，字符串都是用 copy 修饰的，原因是如果字符串 NSString 类型指向了一个 NSMutableString 类型，那当可变字符串的字符更改的时候，看起来就是虽然 NSString 指针没变，但是内容发生了改变，会引起使用上的一些矛盾之处。所以尽量会使用 copy 修饰符修饰。")])]),_._v(" "),e("p",[_._v("同理，想要修改对象指针的话，还是要加上 "),e("code",[_._v("__block")]),_._v(" 修饰符。可以自己使用 "),e("code",[_._v("clang -rewrite-objc main.m")]),_._v(" 的方式生成一下源代码分析一下。需要注意在 "),e("code",[_._v("block")]),_._v(" 闭包实现的时候对变量访问的方式。")]),_._v(" "),e("p",[_._v("看编译后的代码被捕获的"),e("code",[_._v("__block")]),_._v("变量是在栈上"),e("code",[_._v("__Block_byref_fan_0 object")]),_._v("，初始化"),e("code",[_._v("Block")]),_._v("对象的时候使用"),e("code",[_._v("object->forwarding")]),_._v("指针去初始化"),e("code",[_._v("Block")]),_._v("内部对应生成的 "),e("code",[_._v("__Block_byref_fan_0 *")]),_._v("指针，而"),e("code",[_._v("object->forwarding")]),_._v("这个指针是指向"),e("code",[_._v("object")]),_._v("自身的内存地址。这块儿的分析有助于我们后面对"),e("code",[_._v("__block")]),_._v("修饰的变量内存进行分析。")]),_._v(" "),e("h2",{attrs:{id:"block-的存储域以及内存生命周期分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-的存储域以及内存生命周期分析"}},[_._v("#")]),_._v(" Block 的存储域以及内存生命周期分析")]),_._v(" "),e("h3",{attrs:{id:"block-存储域"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-存储域"}},[_._v("#")]),_._v(" Block 存储域")]),_._v(" "),e("p",[e("code",[_._v("Block")]),_._v(" 存储域分为三种类型：栈上(_NSConcreteStackBlock)，堆上(_NSConcreteMallocBlock)和数据区(_NSConcreteGlobalBlock)。上面的例子中"),e("code",[_._v("Block")]),_._v("都是存在栈上的，和普通的变量一样声明在函数外的话"),e("code",[_._v("Block")]),_._v("就是存在数据区中，比如下面这种 case:")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('void(^block)(void) = ^() {\n    NSLog(@"hello world");\n};\nint main(int argc, const char * argv[]) {\n    block();\n    return 0;\n}\n')])])]),e("p",[e("code",[_._v("Block")]),_._v(" 就是存储在数据区，"),e("code",[_._v("clang -rewrite-objc main.m")]),_._v(" 之后生成的代码中，"),e("code",[_._v("Block")]),_._v(" 初始化方法中有这样一行 "),e("code",[_._v("impl.isa = &_NSConcreteGlobalBlock;")]),_._v("，说明 "),e("code",[_._v("Block")]),_._v(" 所属的类是 "),e("code",[_._v("_NSConcreteGlobalBlock")]),_._v("。")]),_._v(" "),e("p",[_._v("值得分析的是，"),e("code",[_._v("Block")]),_._v(" 存储域存在堆上的情况，<OC 高级编程> 一书举了如下的例子")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('typedef int(^blk_t)(int);\nblk_t func(int rate) {\n    return ^(int count) { return rate *count; };\n}\nint main(int argc, const char * argv[]) {\n    blk_t blk = func(5);\n    NSLog(@"%d",blk(10));\n    return 0;\n}\n')])])]),e("p",[e("code",[_._v("func()")]),_._v("方法中"),e("code",[_._v("Block")]),_._v("作为了返回值返回，按道理来讲 "),e("code",[_._v("Block")]),_._v(" 超出其函数作用域之后就会被销毁，但是在 ARC 环境下这个 "),e("code",[_._v("main.m")]),_._v(" 能正常输出执行结果。当我们修改 "),e("code",[_._v("main.m")]),_._v(" 文件的编译选项为 "),e("code",[_._v("-fno-objc-arc")]),_._v(" 的时候编译器会报错：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('Error"Returning block that lives on the local stack\n')])])]),e("p",[_._v("说明是 ARC 下编译器帮我们做了一些事情，避免了 "),e("code",[_._v("block")]),_._v(" 在栈上不能返回的问题。将非 ARC 下的代码修改为")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("blk_t func(int rate) {\n    return [^(int count) { return rate *count; } copy];\n}\n")])])]),e("p",[_._v("才能避免编译失败问题，并正确得到执行结果。")]),_._v(" "),e("p",[_._v("书上给出的在 ARC 下"),e("code",[_._v("func")]),_._v("方法编译完后大致的代码如下")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("blk_t func(int rate) {\n   blk_t tmp = ((int (*)(int))&__func_block_impl_0((void *)__func_block_func_0, &__func_block_desc_0_DATA, rate));\n   tmp = objc_retainBlock(tmp);\n   return objc_autoreleaseReturnValue(tmp);\n}\n")])])]),e("p",[_._v("即 ARC 下编译器对本身是存在于栈上的"),e("code",[_._v("Block")]),_._v("对象执行了一次"),e("code",[_._v("copy")]),_._v("操作，转移到堆上。")]),_._v(" "),e("blockquote",[e("p",[_._v("运行时库中 "),e("code",[_._v("NSObject.mm")]),_._v(" 文件中可以看到"),e("code",[_._v("objc_retainBlock")]),_._v("就是"),e("code",[_._v("_Block_copy")]),_._v("方法。")])]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("id objc_retainBlock(id x) {\n    return (id)_Block_copy(x);\n}\n")])])]),e("p",[_._v("大部分情况下编译器都会处理将栈上的"),e("code",[_._v("Block")]),_._v("复制到堆上的 case.")]),_._v(" "),e("h3",{attrs:{id:"block-内存分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-内存分析"}},[_._v("#")]),_._v(" Block 内存分析")]),_._v(" "),e("p",[_._v("存在栈上的"),e("code",[_._v("Block")]),_._v("，如果所属的作用域结束，该"),e("code",[_._v("Block")]),_._v("就被废弃，由于"),e("code",[_._v("__block")]),_._v("修饰的变量也在栈上那么"),e("code",[_._v("__block")]),_._v("修饰的变量也会被废弃。")]),_._v(" "),e("blockquote",[e("p",[_._v("使用栈来存储变量的优点是内存是自动为你管理的。你无需手动分配内存，或者在你不再需要时释放内存。"),e("a",{attrs:{href:"https://tomatosx.github.io/%E6%8A%80%E6%9C%AF%E5%AD%A6%E4%B9%A0/2018/03/14/%E5%86%85%E5%AD%98-%E6%A0%88%E5%92%8C%E5%A0%86-C-Swift/",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考地址"),e("OutboundLink")],1)])]),_._v(" "),e("p",[_._v("刚才说过在 ARC 下，编译器会自动将 "),e("code",[_._v("Block")]),_._v(" 从栈上复制到堆上，使用的方法为 "),e("code",[_._v("_Block_copy")]),_._v(" 下面是官方的的 API 说明")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("// Create a heap based copy of a Block or simply add a reference to an existing one. This must be paired with Block_release to recover memory, even when running under Objective-C Garbage Collection.\nBLOCK_EXPORT void *_Block_copy(const void *aBlock)\n    __OSX_AVAILABLE_STARTING(__MAC_10_6, __IPHONE_3_2);\n//Lose the reference, and if heap based and last reference, recover the memory\nBLOCK_EXPORT void _Block_release(const void *aBlock)\n    __OSX_AVAILABLE_STARTING(__MAC_10_6, __IPHONE_3_2);\n")])])]),e("p",[_._v("即使用 "),e("code",[_._v("_Block_copy")]),_._v(" 可以创建基于堆上的一份儿"),e("code",[_._v("Block")]),_._v("的复制，同时"),e("code",[_._v("_Block_copy")]),_._v("一定是配合"),e("code",[_._v("_Block_release")]),_._v("使用，否则会造成内存泄漏。")]),_._v(" "),e("p",[e("img",{attrs:{src:o(400),alt:""}})]),_._v(" "),e("h2",{attrs:{id:"block-捕获成员变量的生命周期"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获成员变量的生命周期"}},[_._v("#")]),_._v(" Block 捕获成员变量的生命周期")]),_._v(" "),e("h3",{attrs:{id:"block-捕获普通对象的生命周期分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获普通对象的生命周期分析"}},[_._v("#")]),_._v(" Block 捕获普通对象的生命周期分析")]),_._v(" "),e("p",[_._v("捕获普通自动变量对象 A 的话，"),e("code",[_._v("Block")]),_._v(" 会影响普通自动变量的生命周期，即自动变量作用域结束，A 并不会被立即释放。而是跟捕获了它的 "),e("code",[_._v("Block")]),_._v(" 的生命周期同步。原因是为了捕获自动变量 A，"),e("code",[_._v("Block")]),_._v(" 对象内部会生成一个捕获对象的同类型的对象 A' 来对捕获对象进行持有，即使得 A 的引用计数加一。所以当 A 的作用域结束之后 A 依然能存活，直到 "),e("code",[_._v("Block")]),_._v(" 被释放，A 跟着一起被释放。")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('int main(int argc, const char * argv[]) {\n    blk_t blk;\n    {\n        Fan *fan = [[Fan alloc] init];\n        blk = ^() {\n            NSLog(@"a = %@",fan);\n        };\n    }\n    blk();\n    return 0;\n}\n')])])]),e("p",[_._v("我们编译完的这部分代码中包含如下代码，这是为了管理"),e("code",[_._v("__block")]),_._v("结构体中捕获的对应外部变量的"),e("code",[_._v("fan")]),_._v("的内存而生。")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("struct __main_block_impl_0 {\n  struct __block_impl impl;\n  struct __main_block_desc_0* Desc;\n  Fan *fan;\n  ...\n};\nstatic void __main_block_copy_0(struct __main_block_impl_0*dst, struct __main_block_impl_0*src) {_Block_object_assign((void*)&dst->fan, (void*)src->fan, 3/*BLOCK_FIELD_IS_OBJECT*/);}\n\nstatic void __main_block_dispose_0(struct __main_block_impl_0*src) {_Block_object_dispose((void*)src->fan, 3/*BLOCK_FIELD_IS_OBJECT*/);}\n")])])]),e("p",[_._v("编译后的代码中这两个方法并没有被调用，而是当"),e("code",[_._v("Block")]),_._v("被从栈上拷到堆上，以及在堆上被释放的时候才会被调用。如图：")]),_._v(" "),e("p",[e("img",{attrs:{src:o(401),alt:""}})]),_._v(" "),e("p",[_._v("但是实践中很奇怪的一点是在 ARC 环境下，对"),e("code",[_._v("Block")]),_._v("对象进行了 copy 操作还是没能触发"),e("code",[_._v("_Block_object_assign")]),_._v("这个方法的执行，但是在 MRC 环境下同样条件就能触发"),e("code",[_._v("_Block_object_assign")]),_._v("这个方法。这里 ARC 编译后的代码应该是做了一些额外的操作。")]),_._v(" "),e("h3",{attrs:{id:"block-捕获带有-block-修饰符对象的声明周期分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-捕获带有-block-修饰符对象的声明周期分析"}},[_._v("#")]),_._v(" Block 捕获带有 __block 修饰符对象的声明周期分析")]),_._v(" "),e("p",[_._v("如果被"),e("code",[_._v("__block")]),_._v("修饰的对象是自动变量，而且"),e("code",[_._v("Block")]),_._v("并没有执行从栈拷贝到堆上的操作，那和普通的自动变量对象一样并没有什么区别，"),e("code",[_._v("__block")]),_._v("修饰的对象也是跟着"),e("code",[_._v("Block")]),_._v("对象一起释放。")]),_._v(" "),e("p",[_._v("但是实际情况里"),e("code",[_._v("__block")]),_._v("修饰对象可能存在栈上，可能存在堆上，而"),e("code",[_._v("Block")]),_._v("对象也有可能从栈上被复制到堆上，这些场景下，"),e("code",[_._v("__block")]),_._v("修饰对象的生命周期是什么样的？")]),_._v(" "),e("p",[e("img",{attrs:{src:o(402),alt:""}})]),_._v(" "),e("p",[_._v("当"),e("code",[_._v("Block")]),_._v("捕获带有"),e("code",[_._v("__block")]),_._v("修饰符的自动变量的时候，编译后代码出现下面的一些源码，即 "),e("code",[_._v("Block")]),_._v("对象除了管理自己的内存之外还要额外操心"),e("code",[_._v("__block")]),_._v("修饰变量的内存了。")]),_._v(" "),e("p",[_._v("这里 "),e("code",[_._v("__block")]),_._v("变量对象内存管理和普通的引用计数管理思想基本一致了，即哪个"),e("code",[_._v("Block")]),_._v("对象持有了"),e("code",[_._v("__block")]),_._v("变量，则该"),e("code",[_._v("Block")]),_._v("对象有义务对"),e("code",[_._v("__block")]),_._v("变量进行释放。当所有"),e("code",[_._v("Block")]),_._v("都被释放的时候"),e("code",[_._v("__block")]),_._v("变量也跟着一起释放掉。")]),_._v(" "),e("h2",{attrs:{id:"gcd-里面的-block-分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gcd-里面的-block-分析"}},[_._v("#")]),_._v(" GCD 里面的 Block 分析")]),_._v(" "),e("p",[_._v("GCD 提供的 API 里大量使用了 Block 作为参数，比如我们常用的 API "),e("code",[_._v("dispatch_async(queue, ^(void){})")]),_._v(" 等，通常来说，我们并不需要过分关注 API 中 Block 的内存管理。因为 GCD 会自动帮我们处理，参考 "),e("code",[_._v("dispatch_async")]),_._v(" API 的官方说明(其实 "),e("code",[_._v("dispatch_after")]),_._v(" API 里也是这么说的)")]),_._v(" "),e("blockquote",[e("p",[_._v("dispatch_async 参数 block 的解释\nThe block to submit to the target dispatch queue. This function performs Block_copy and Block_release on behalf of callers. This parameter cannot be NULL.\n即这个方法会自动在合适的时机执行 "),e("code",[_._v("Block_Copy")]),_._v(" 和 "),e("code",[_._v("Block_release")]),_._v(" 两个方法。这样就保证了在执行 Block 之前不会因为 Block 的作用域的原因而是的 Block 提前被释放，将 Block 放到堆上是比较安全的做法。")])]),_._v(" "),e("p",[_._v("现在有个问题，Block 被谁持有了？通过写 demo 打符号断点 "),e("code",[_._v("_Block_copy")]),_._v("，跟到了其上一步调用 "),e("code",[_._v("_dispatch_Block_copy")]),_._v(" ，然后在 GCD 的 "),e("a",{attrs:{href:"https://opensource.apple.com/source/libdispatch/libdispatch-84.5/src/queue.c",target:"_blank",rel:"noopener noreferrer"}},[_._v("queue.c 源码"),e("OutboundLink")],1),_._v("中找到了答案，是一个 "),e("code",[_._v("dispatch_block_t")]),_._v(" 的类型的变量持有了 Block 对象。")]),_._v(" "),e("p",[_._v("关于 GCD 里面的 Block 里面是否应该使用 self，YYKit 的一个 "),e("a",{attrs:{href:"https://github.com/ibireme/YYKit/issues/41",target:"_blank",rel:"noopener noreferrer"}},[_._v("issue"),e("OutboundLink")],1),_._v(" 里讨论的比较火热。但是很多评论都是有问题的，包括 YY 的理解都是有问题的，YY 对 block 的理解就是「self->_queue->block->self 这不是循环引用吗」但是根据我们刚才的分析，其实 GCD 的 queue 并没有持有 block，GCD 的 Block 内存管理跟当前执行所在的类没有任何关系，系统负责"),e("code",[_._v("Block_Copy")]),_._v("和"),e("code",[_._v("Block_release")]),_._v("，我理解这种 case 算不上循环引用。所以可以放心的在 GCD 里面使用 self，而不需要 weak dance.")]),_._v(" "),e("blockquote",[e("p",[_._v("Block_Copy 内部的实现机制可以参考"),e("a",{attrs:{href:"http://www.galloway.me.uk/2013/05/a-look-inside-blocks-episode-3-block-copy/",target:"_blank",rel:"noopener noreferrer"}},[_._v("这篇文章"),e("OutboundLink")],1)])]),_._v(" "),e("p",[_._v("还有一个 GCD 中应该注意的内存问题，即 ARC 和 dispatch queues 以及 GCD Block 内存管理之间的关系。\n需要分类讨论")]),_._v(" "),e("ol",[e("li",[e("p",[_._v("If your deployment target is lower than iOS 6.0 or Mac OS X 10.8")]),_._v(" "),e("blockquote",[e("p",[_._v("You need to use "),e("code",[_._v("dispatch_retain")]),_._v(" and "),e("code",[_._v("dispatch_release")]),_._v(" on your queue. ARC does not manage them.")])])]),_._v(" "),e("li",[e("p",[_._v("If your deployment target is iOS 6.0 or Mac OS X 10.8 or later")]),_._v(" "),e("blockquote",[e("p",[_._v("ARC will manage your queue for you. You do not need to (and cannot) use "),e("code",[_._v("dispatch_retain")]),_._v(" or "),e("code",[_._v("dispatch_release")]),_._v(" if ARC is enabled.")])])])]),_._v(" "),e("p",[e("a",{attrs:{href:"https://stackoverflow.com/questions/8618632/does-arc-support-dispatch-queues",target:"_blank",rel:"noopener noreferrer"}},[_._v("参考地址 - Does ARC support dispatch queues?"),e("OutboundLink")],1)]),_._v(" "),e("p",[_._v("在 MRC 下 GCD 也会自动执行 "),e("code",[_._v("Block_Copy")]),_._v(" 和 "),e("code",[_._v("Block_Release")]),_._v(" 方法，所以在 MRC 下的 GCD Block 里面继续使用 self 也不会产生内存的问题。")]),_._v(" "),e("p",[_._v("总结就是在古老的系统中，即使编译器开启了 ARC 也不一定能管理 "),e("code",[_._v("dispatch_object")]),_._v(" 对象，还好我们现在早已经过了兼容的那个阶段。")]),_._v(" "),e("h2",{attrs:{id:"mrc-arc-下-block-内存管理区别"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mrc-arc-下-block-内存管理区别"}},[_._v("#")]),_._v(" MRC & ARC 下 Block 内存管理区别")]),_._v(" "),e("p",[_._v("MRC 和 ARC 下 Block 内存管理的区别主要在于 MRC 下并不会对"),e("code",[_._v("Block")]),_._v("进行主动 copy 操作。举个例子：")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('blk returnblk() {\n    int a = 0;\n    blk tempblk = ^(){\n        NSLog(@"hello world,a = %d",a);\n    };\n    return tempblk;\n}\nint main(int argc, const char * argv[]) {\n    blk newblk = returnblk();\n    newblk();  ①\n    return 0;\n}\n')])])]),e("p",[_._v("MRC 下在 ① 的位置打断点，观察 "),e("code",[_._v("newblk")]),_._v(" 的类型为 "),e("code",[_._v("__NSStackBlock__")]),_._v("，同样断点 ARC 下观察到 "),e("code",[_._v("newblk")]),_._v(" 的类型为 "),e("code",[_._v("__NSMallocBlock__")]),_._v("。说明在 ARC 下 "),e("code",[_._v("tempblk")]),_._v(" 在返回的时候自动执行了一次 copy 操作。")]),_._v(" "),e("p",[_._v("还有一个更经典的例子")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('@interface Fan : NSObject {\n    dispatch_queue_t queue;\n    Blk blk;\n}\n@end\n- (instancetype)init {\n    self = [super init];\n    if (self) {\n        blk = ^() {NSLog(@"self %@",self);};\n        ①\n    }\n    return self;\n}\n')])])]),e("p",[_._v("MRC 下在 ① 处打断点，"),e("code",[_._v("blk")]),_._v(" 的类型为 "),e("code",[_._v("__NSStackBlock__")]),_._v("，同样断点 ARC 下观察到 "),e("code",[_._v("blk")]),_._v(" 的类型为 "),e("code",[_._v("__NSMallocBlock__")]),_._v("。ARC 自动在给成员变量 "),e("code",[_._v("blk")]),_._v(" 赋值的时候进行了一次 copy 操作。上面这个例子还引出了一个循环引用的问题，我们下面说。")]),_._v(" "),e("h3",{attrs:{id:"mrc-下-retain-方法使用注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mrc-下-retain-方法使用注意"}},[_._v("#")]),_._v(" MRC 下 retain 方法使用注意")]),_._v(" "),e("p",[_._v("MRC 下还需要注意的是，如果"),e("code",[_._v("Block")]),_._v("在栈上的话，对"),e("code",[_._v("Block")]),_._v("进行 retain 操作没有任何意义。必须对其进行 copy 操作才能将其从栈上复制到堆上。如果"),e("code",[_._v("Block")]),_._v("在堆上的话，对其进行 retain 操作，"),e("code",[_._v("Block")]),_._v("对象的引用计数会加一。")]),_._v(" "),e("blockquote",[e("p",[_._v("在对 "),e("code",[_._v("Block")]),_._v(" 对象进行 copy 操作的时候，"),e("code",[_._v("Block_copy")]),_._v(" 方法和 "),e("code",[_._v("copy")]),_._v(" 方法执行的效果是一样的，同理，"),e("code",[_._v("Block_release")]),_._v(" 和 "),e("code",[_._v("release")]),_._v(" 方法效果也一样。")])]),_._v(" "),e("h3",{attrs:{id:"mrc-下破解循环引用的方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mrc-下破解循环引用的方式"}},[_._v("#")]),_._v(" MRC 下破解循环引用的方式")]),_._v(" "),e("p",[_._v("对于 MRC 下，为了防止循环引用，我们使用"),e("code",[_._v("__block")]),_._v("来修饰在 Block 中使用的对象。")]),_._v(" "),e("blockquote",[e("p",[_._v("原因是在当 Block 被从栈拷贝到堆上的时候，不会对带有"),e("code",[_._v("__block")]),_._v("修饰符的自动变量对象进行 retain 操作，不带有 "),e("code",[_._v("__block")]),_._v("修饰符的自动变量对象会被 retain 操作。\n所以上面的例子需要现用 "),e("code",[_._v("__block id temp = self;")]),_._v(" 也对 "),e("a",{attrs:{href:"%5B%5D()"}}),_._v("self 进行一次引用，然后在 "),e("code",[_._v("block")]),_._v(" 里面使用 temp.")])]),_._v(" "),e("p",[_._v("对于 ARC 下，为了防止循环引用，我们使用"),e("code",[_._v("__weak")]),_._v("来修饰在 Block 中使用的对象。")]),_._v(" "),e("h2",{attrs:{id:"block-weak-分析-strongself-分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#block-weak-分析-strongself-分析"}},[_._v("#")]),_._v(" Block **weak 分析 / **strongSelf 分析")]),_._v(" "),e("p",[_._v("关于 Block weak 和 strong 的说明，这两个配合使用存在的意义就是让 block 避免循环引用。举个例子，在视图控制器 (VC) 的 "),e("code",[_._v("viewDidLoad")]),_._v(" 方法里执行如下代码 ,"),e("code",[_._v("FRButton")]),_._v(" 内部持有了这个点击 "),e("code",[_._v("block")]),_._v("。")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('__weak typeof(self) weakSelf = self;\n[button setClickBlk:^{\n    __strong typeof(weakSelf) strongSelf = weakSelf;\n    dispatch_after(dispatch_time(DISPATCH_TIME_NOW, (int64_t)(3 * NSEC_PER_SEC)), dispatch_get_main_queue(), ^{\n        NSLog(@"strongSelf = %@",strongSelf);\n    });\n}];\n')])])]),e("p",[_._v("当 dismiss 的时候，VC 并没有被释放，而是等 "),e("code",[_._v("dispatch_after")]),_._v(" 的 block 执行之后 VC 才被释放。\n分析在 button 赋值 block 对象时候 "),e("code",[_._v("__weak")]),_._v(" 和 "),e("code",[_._v("__strong")]),_._v(" 的用法，通过引用计数和持有关系进行内存分析。")]),_._v(" "),e("ol",[e("li",[_._v("首先在 button block 的外部使用 "),e("code",[_._v("__weak")]),_._v(" 对 "),e("code",[_._v("self")]),_._v(" 进行持有，并没有增加 "),e("code",[_._v("self")]),_._v(" 的引用计数。")]),_._v(" "),e("li",[_._v("在 button block 内部进行对 "),e("code",[_._v("weakSelf")]),_._v(" 进行 "),e("code",[_._v("__strong")]),_._v(" 修饰符的 "),e("code",[_._v("strongSelf")]),_._v(" 持有，增加了 "),e("code",[_._v("self")]),_._v(" 的引用计数")]),_._v(" "),e("li",[_._v("分析一下引用关系啊， VC 持有了 button，button 内部持有了 "),e("code",[_._v("block")]),_._v("，"),e("code",[_._v("block")]),_._v(" 捕获的是 VC 的 "),e("code",[_._v("weakSelf")]),_._v("。 Block 里面的 "),e("code",[_._v("strongSelf")]),_._v(" 仅仅是个自动变量而已（看上面 clang 编译出来的代码就知道，"),e("code",[_._v("strongSelf")]),_._v(" 应该是在编译后的闭包函数对应的内联方法里声明的），不用分析其引用关系。但是 "),e("code",[_._v("strongSelf")]),_._v(" 增加了 VC 的引用计数。")]),_._v(" "),e("li",[_._v("当点击之后，然后用另外的方法让 VC 迅速(3 秒) dismiss，这个时候 VC 并没有被释放，因为 "),e("code",[_._v("strongSelf")]),_._v(" 增加了 VC 的引用计数。而 "),e("code",[_._v("dispatch_after")]),_._v(" 的 block 持有了 strongSelf，"),e("code",[_._v("dispatch_after")]),_._v(" 的 block 在延时 3 秒后执行，执行完之后 "),e("code",[_._v("dispatch_after")]),_._v(" 的 strongSelf 也被释放(自动变量作用域结束自动被回收)，这个时候 VC 的引用计数变为 0 才会被释放。此时 weakSelf 被置为了 nil，第 3 步里面的引用关系断掉了，即 Block 不再持有 VC 了。所以不会出现循环引用的问题。")])]),_._v(" "),e("p",[_._v("释放顺序是：1、 VC; 2、Button;3、Block。")]),_._v(" "),e("blockquote",[e("p",[e("strong",[_._v("误区一")]),_._v("，"),e("code",[_._v("Block")]),_._v("捕获"),e("code",[_._v("__weak")]),_._v("修饰符的对象，虽然我们不能通过执行 "),e("code",[_._v("clang -rewrite-objc BlockDemo/main.m")]),_._v(" 来看最后的编译结果（会报错，`cannot create __weak reference because the current deployment target does")])]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[_._v("  not support weak references`），但我猜原理是`Block`对象结构体内部直接生成一个 `__weak`修饰的成员变量指向`__weak`修饰的对象，而不是生成`__block`修饰的那种结构来，这样才能保证`Block`不会对`self`进行强持有来增加引用计数。\n")])])]),e("blockquote",[e("p",[e("strong",[_._v("误区二")]),_._v("，另外一个之前分析时候陷入误区的点是，总会纠结"),e("code",[_._v("block")]),_._v("里面的代码会不会执行，其实执行与否都不会影响当前这种结构的的内存分析，执行匿名函数代码的话"),e("code",[_._v("strongSelf")]),_._v("到最后会被释放，"),e("code",[_._v("block")]),_._v("跟着一起释放。不执行的话"),e("code",[_._v("self")]),_._v("其实也没有强持有"),e("code",[_._v("block")]),_._v("，所以不会造成内存引用问题。")])]),_._v(" "),e("p",[_._v("正是因为误区二，我们引出另外一个问题，即在下面的 ① 的位置添加了一个判断，有必要吗？")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v("__weak typeof(self) weakSelf = self;\n[networkManager fetchFinishBlk:^(response){\n    __strong typeof(weakSelf) strongSelf = weakSelf;\n    if (nil == strongSelf) {  ①\n        return;\n    }\n    [strongSelf xxx];\n}];\n")])])]),e("p",[_._v("之前总是觉得 "),e("code",[_._v("strongSelf")]),_._v(" 会强引用 "),e("code",[_._v("self")]),_._v("，所以 "),e("code",[_._v("self")]),_._v(" 在执行 "),e("code",[_._v("block")]),_._v(" 闭包函数之前不会被释放，其实有可能在执行 "),e("code",[_._v("block")]),_._v(" 之前，"),e("code",[_._v("self")]),_._v(" 已经被释放掉了，则 "),e("code",[_._v("weakSelf")]),_._v(" 为 "),e("code",[_._v("nil")]),_._v(", 这个时候 "),e("code",[_._v("strongSelf")]),_._v(" 还没有来得及增加的引用计数呢... 所以加上这个判断是必要的。")]),_._v(" "),e("p",[_._v("那又引出一个问题，如果我一定想要执行 "),e("code",[_._v("block")]),_._v(" 闭包函数里的方法呢，可以参考"),e("a",{attrs:{href:"https://juejin.im/entry/594a2aa8ac502e5490f9598d",target:"_blank",rel:"noopener noreferrer"}},[_._v("这篇文章"),e("OutboundLink")],1),_._v("里的做法，大体思路是先触发循环引用，然后在 "),e("code",[_._v("block")]),_._v(" 执行完毕之后再将循环引用破解掉。")]),_._v(" "),e("p",[_._v("再进一步思考，如果是下面这种情况，会造成循环引用吗？")]),_._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[_._v('__weak typeof(self) weakSelf = self;\n[cell setEditPressedBlk:^{\n    __strong typeof(weakSelf) strongSelf = weakSelf; ①\n    [strongSelf pickerCancel];\n    strongSelf.textFiledView = [TFAlertView Title:@"Title" message:@"" complete:^(NSString *text, TFAlertView *alertview) {\n        [strongSelf modifyNameWithValue:text];  ②\n    }];\n}];\n')])])]),e("h2",{attrs:{id:"一些常见的关于-block-的面试题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#一些常见的关于-block-的面试题"}},[_._v("#")]),_._v(" 一些常见的关于 Block 的面试题")]),_._v(" "),e("p",[e("strong",[_._v("Q: Block 作为对象的属性应该用 copy 修饰还是 strong 修饰??")]),_._v("\nA: 在 MRC 下的话，必须用 copy 修饰，用 retain 修饰的话，栈上的 Block 无法被拷贝对堆上，导致使用的时候可能出问题。\n在 ARC 下用 strong 即可，当给 block 属性赋值的时候会自动将栈上的 block 拷贝到堆上，用 copy 的话效果是一样的，但是苹果的官方文档还是建议我们即使是在 ARC 上也使用 copy 修饰符，因为 copy 会显式地说明我们对 block 的操作。同时，我们的工程偶尔也会看到给 block 属性进行赋值的时候，手动添加了一个 copy 方法，比如 "),e("code",[_._v("self.block = [blk copy];")]),_._v(" 其实是完全没有必要的。\n官方地址 - "),e("a",{attrs:{href:"https://developer.apple.com/library/content/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/WorkingwithBlocks/WorkingwithBlocks.html#//apple_ref/doc/uid/TP40011210-CH8-SW12",target:"_blank",rel:"noopener noreferrer"}},[_._v("Objects Use Properties to Keep Track of Blocks"),e("OutboundLink")],1)]),_._v(" "),e("p",[_._v("#参考地址#\n"),e("a",{attrs:{href:"https://developer.apple.com/videos/play/wwdc2012/712/",target:"_blank",rel:"noopener noreferrer"}},[_._v("WWDC_712"),e("OutboundLink")],1),_._v(" "),e("RouterLink",{attrs:{to:"shttps://developer.apple.com/library/content/documentation/Cocoa/Conceptual/Blocks/Articles/00_Introduction.html"}},[_._v("Blocks Programming Topic")]),_._v(" "),e("a",{attrs:{href:"https://draveness.me/block-retain-object",target:"_blank",rel:"noopener noreferrer"}},[_._v("iOS 中的 block 是如何持有对象的"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://www.jianshu.com/p/ee9756f3d5f6",target:"_blank",rel:"noopener noreferrer"}},[_._v("深入研究 Block 捕获外部变量和__block 实现原理"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"http://www.galloway.me.uk/2013/05/a-look-inside-blocks-episode-3-block-copy/",target:"_blank",rel:"noopener noreferrer"}},[_._v("A look inside blocks: Episode 3 (Block_copy)"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://elliotsomething.github.io/2016/07/28/OC%E9%AB%98%E7%BA%A7%E7%BC%96%E7%A8%8B%E5%AD%A6%E4%B9%A0%E6%80%BB%E7%BB%93%E4%B9%8BGCD-%E4%B8%80/",target:"_blank",rel:"noopener noreferrer"}},[_._v("OC 高级编程学习总结之 GCD"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://blog.csdn.net/abc649395594/article/details/45476925",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[_._v("weak 与")]),_._v("block 修饰符到底有什么区别"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://blog.6ag.cn/1186.html",target:"_blank",rel:"noopener noreferrer"}},[_._v("Block 在 ARC 和 MRC 下的使用分析"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"http://ios.jobbole.com/88708/",target:"_blank",rel:"noopener noreferrer"}},[_._v("深入研究 Block 用 weakSelf、strongSelf、@weakify、@strongify 解决循环引用"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://juejin.im/entry/594a2aa8ac502e5490f9598d",target:"_blank",rel:"noopener noreferrer"}},[_._v("循环引用的破局法门"),e("OutboundLink")],1),_._v(" "),e("a",{attrs:{href:"https://www.jianshu.com/p/a5dd014edb13",target:"_blank",rel:"noopener noreferrer"}},[_._v("深入分析 Objective-C block、weakself、strongself 实现原理"),e("OutboundLink")],1)],1),_._v(" "),e("p",[_._v("最后送上两个关于 block 的语法说明")]),_._v(" "),e("ol",[e("li",[_._v("https://weibo.com/1765732340/GfRtraOYj?type=comment")]),_._v(" "),e("li",[_._v("http://fuckingblocksyntax.com")])])])}),[],!1,null,null,null);e.default=t.exports}}]);