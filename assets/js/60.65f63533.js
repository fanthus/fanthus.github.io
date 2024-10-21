(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{399:function(e,t,n){e.exports=n.p+"assets/img/15218123235013.9000b4a8.jpg"},628:function(e,t,n){"use strict";n.r(t);var _=n(5),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("p",[e._v("Clang 编译器提供了 OC 自动合成属性的功能。如果一个属性没有被声明为 "),t("code",[e._v("@dynamic")]),e._v(" 或者开发者没有自定制它的 "),t("code",[e._v("getter")]),e._v(" 或者 "),t("code",[e._v("setter")]),e._v(" 方法实现。那 "),t("code",[e._v("Clang")]),e._v(" 会自动为你合成 "),t("code",[e._v("getter")]),e._v(" 和 "),t("code",[e._v("setter")]),e._v(" 方法的实现同时生成对应的成员变量，检查 "),t("code",[e._v("Clang")]),e._v(" 编译器是否支持自动合成使用"),t("code",[e._v("__has_feature(objc_default_synthesize_properties)")]),e._v(" 这个条件判断。举例")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("#if __has_feature(objc_default_synthesize_properties)\n    //support autosynthesis\n#else\n    //not support\n#endif\n")])])]),t("p",[e._v("当编译器不能自动为你合成属性的时候，需要开发者手动进行。其实也可以换个说法，什么时候需要开发者手动 "),t("code",[e._v("@synthesize")]),e._v("。")]),e._v(" "),t("p",[e._v("举个例子，开发中偶尔会遇到这种报错的情况：")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@property (nonatomic,strong) NSString *name;\n.....\n@implementation\n- (void)setName:(NSString *)name {\n    _name = name; #编译错误:Use of undeclared identifier '_name'; did you mean 'name'?\n}\n-  (NSString *)name {\n    return @\"\";\n}\n@end\n")])])]),t("p",[e._v("这个时候需要我们手动的添加一行代码 "),t("code",[e._v("@synthesize name = _name;")]),e._v(" 编译错误就会消失。或者你把编译错误的那行去掉，然后使用命令 "),t("code",[e._v("clang -rewrite-objc main.m")]),e._v(" 编译原文件，发现生成的对象结构体中并没有 "),t("code",[e._v("name")]),e._v(" 对应的成员变量。")]),e._v(" "),t("p",[e._v("接下来就是总结什么场景下需要我们手动添加 "),t("code",[e._v("@synthesize")]),e._v("。")]),e._v(" "),t("ol",[t("li",[e._v("就是我们上面 "),t("code",[e._v("demo")]),e._v(" 展示的这种可读写的属性，但是开发者自定义了 "),t("code",[e._v("getter")]),e._v(" 和 "),t("code",[e._v("setter")]),e._v(" 方法，注意必须是同时复写，如果只复写 "),t("code",[e._v("setter")]),e._v(" 或者 "),t("code",[e._v("getter")]),e._v(" 的话是不会出现问题的。这也是 "),t("code",[e._v("clang")]),e._v(" 编译器不支持的自动合成的场景。")]),e._v(" "),t("li",[e._v("只读属性，开发者自定义了 "),t("code",[e._v("getter")]),e._v(" 方法。")]),e._v(" "),t("li",[t("code",[e._v("@dynamic")]),e._v(" 修饰的属性，"),t("code",[e._v("@dynamic")]),e._v(" 本质是告诉编译器 "),t("code",[e._v("setter")]),e._v(" 与 "),t("code",[e._v("getter")]),e._v(" 方法由开发者自己定义，不自动合成。")]),e._v(" "),t("li",[e._v("在协议 "),t("code",[e._v("@protocol")]),e._v(" 中声明的属性。")]),e._v(" "),t("li",[e._v("在类别 "),t("code",[e._v("@category")]),e._v(" 中声明的属性。这是因为类别不支持自动添加成员变量，需要手动进行引用关联。")]),e._v(" "),t("li",[e._v("如果你复写了父类的属性，你也需要显式地添加 "),t("code",[e._v("@synthesize")])]),e._v(" "),t("li",[e._v("如果你想手动修改成员变量名的话，可以使用 "),t("code",[e._v("@synthesize")]),e._v(" 修改，比如默认成员变量名是 "),t("code",[e._v("_name")]),e._v(" 使用 "),t("code",[e._v("@synthesize name = yname;")]),e._v(" 修改成员变量名为 "),t("code",[e._v("yname")]),e._v("，但是不建议这么做。")])]),e._v(" "),t("p",[e._v("2018-03-23")]),e._v(" "),t("p",[e._v("补充一些关于第 6 点的说明。")]),e._v(" "),t("p",[e._v("如果父类自动生成属性成员变量和 getter, setter 方法。子类对父类的属性重新进行了 "),t("code",[e._v("@synthesize")]),e._v(" 那将会生成新的实例变量。")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@interface Fan : NSObject\n@property (nonatomic, strong) NSString *name;\n@end\n//父类 Fan 并没有 @synthesize 而且没有复写 getter 和 setter 方法.\n......\n@interface FanSub : Fan\n@property (nonatomic, strong) NSString *name;\n....\n@implementation FanSub\n@synthesize name = fname;\n- (void)setName:(NSString *)name {\n    fname = name;\n}\n- (NSString *)name {\n    return fname;\n}\n@end\n")])])]),t("p",[e._v("注意的是此时子类中的 "),t("code",[e._v("name")]),e._v(" 属性对应的实例变量其实是 "),t("code",[e._v("fname")]),e._v(". 即它自己生成的实例变量，而不是父类的 "),t("code",[e._v("_name")]),e._v(" 了。可以通过查看编译后的选项来验证 "),t("code",[e._v("clang -rewrite-objc main.m")]),e._v("。结合编译后对应的结构体看一下，确实是成员变量发生了变化。"),t("strong",[e._v("所以这个时候要注意，不能把子类的属性成员变量和父类的成员变量混为一谈。")])]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("//编译后的结构体.\nstruct Fan_IMPL {\n\tstruct NSObject_IMPL NSObject_IVARS;\n\tNSString *_name;\n};\nstruct FanSub_IMPL {\n\tstruct Fan_IMPL Fan_IVARS;\n\tNSString *fname;\n};\n")])])]),t("p",[e._v("一点总结：\n"),t("img",{attrs:{src:n(399),alt:"xxx"}})]),e._v(" "),t("p",[e._v("所以子类合成和使用属性对应自动变量的两个原则：")]),e._v(" "),t("ol",[t("li",[e._v("不允许合成和父类名字一样自动变量")]),e._v(" "),t("li",[e._v("如果在子类中有用到父类属性对应的成动变量，则需要显式地在父类头文件的成员变量区域去进行自动变量的声明。")])]),e._v(" "),t("h2",{attrs:{id:"一些-qa"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一些-qa"}},[e._v("#")]),e._v(" 一些 QA")]),e._v(" "),t("p",[t("strong",[e._v("Q:@synthesize 合成实例变量的规则是什么？假如 property 名为 foo，存在一个名为_foo 的实例变量，那么还会自动合成新变量么？")]),e._v("\nA: 默认合成带属性名字前面带下划线的成员变量。如果这个下划线的成员变量已经存在，就不会合成新的成员变量了。即上面问题答案是不会合成新的成员变量了。")]),e._v(" "),t("p",[e._v("#参考地址#")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://stackoverflow.com/questions/19784454/when-should-i-use-synthesize-explicitly",target:"_blank",rel:"noopener noreferrer"}},[e._v("When should I use @synthesize explicitly?"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"http://clang.llvm.org/docs/LanguageExtensions.html#objective-c-autosynthesis-of-properties",target:"_blank",rel:"noopener noreferrer"}},[e._v("Objective-C Autosynthesis of Properties"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://www.jianshu.com/p/beefa2da05b5",target:"_blank",rel:"noopener noreferrer"}},[e._v("@synthesize 和 @dynamic 的作用"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);