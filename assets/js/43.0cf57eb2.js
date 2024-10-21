(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{448:function(t,s,a){t.exports=a.p+"assets/img/front-unit-1.4a961728.png"},449:function(t,s,a){t.exports=a.p+"assets/img/front-unit-2.f02a7f6b.png"},450:function(t,s,a){t.exports=a.p+"assets/img/front-unit-3.41eae7d0.png"},681:function(t,s,a){"use strict";a.r(s);var e=a(5),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"问题起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题起源"}},[t._v("#")]),t._v(" 问题起源")]),t._v(" "),s("p",[t._v("前几天做前端 Vue 项目的时候发现一个有意思的事情，就是当我要设置一个瀑布流样式的视图的时候，类似下面这种样式，我怎么设置一个信息组件（带文字的小图片）的宽度是屏幕宽度的一半呢？有前端经验的小伙伴会说直接用 50vw 啊？但是如果考虑到两边的间距（比如容器标签有padding设置）的话，50vw 的设置可能会让一行只能展示出一个组件（展示两个就超出屏幕宽度了），那怎么设置这个小的信息组件的宽度就是个问题。")]),t._v(" "),s("div",{attrs:{align:"center"}},[s("img",{attrs:{src:a(448),width:"40%/"}})]),t._v(" "),s("p",[t._v("最后前端同事跟我说可以直接按照设计稿标注的组件的宽度进行设置，而且单位是px，当时我就懵了，那如果设备屏幕变大的话，不就有可能横向会展示三个信息组件了吗？前端同事嘿嘿一笑，说项目里有个库可以把 px 转化为 rem，rem 是什么鬼？")]),t._v(" "),s("h3",{attrs:{id:"不同单位长度对比"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不同单位长度对比"}},[t._v("#")]),t._v(" 不同单位长度对比")]),t._v(" "),s("p",[t._v("这篇文章就说一下这几个单位之间的关系：")]),t._v(" "),s("p",[t._v("px: 表示像素，是绝对长度的单位。")]),t._v(" "),s("p",[t._v("vw: 视口宽度的 1%，是相对长度单位。")]),t._v(" "),s("p",[t._v("rem: 根元素的字体大小，也是相对长度单位。")]),t._v(" "),s("p",[t._v("因为我之前是写iOS 端的代码，最早的时候 iOS 端设置 frame 其实就是类似 px 概念是绝对布局，后面随着屏幕尺寸不断变多才引入了自动布局概念。")]),t._v(" "),s("p",[t._v("vw 其实也很好理解，我这儿简单理解为屏幕宽度。当然真实的环境里视口和屏幕不是一个概念，比如想带安全区的 iPhoneX 这种设备，视口和屏幕就不是一个概念，这里先忽略这些细节。")]),t._v(" "),s("p",[t._v("rem 这个概念我理解的时候我还是花了点时间，这个词是 font size of the root element 的缩写，我最开始看这个概念的时候心想，rem 和字体有什么关系啊？")]),t._v(" "),s("p",[t._v("这里需要引入另外一个概念 em, em 是 font size of the element 的缩写，即在 font-size 中使用是相对于父元素的字体大小，在其他属性中使用是相对于自身的字体大小，如 width。这么说还是有点抽象，举个例子吧，用户的浏览器默认渲染的文字大小是“16px”，如果你设置一个标签的宽度为 1em，那这个标签的宽度就是 16px，由此可见 “em”是一个相对长度的单位，我们设置标签宽度为 1.5em，那这个标签宽度就是 16px*1.5=24px，这里的相对是相对父元素的。")]),t._v(" "),s("h3",{attrs:{id:"em-单位的起源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-单位的起源"}},[t._v("#")]),t._v(" em 单位的起源")]),t._v(" "),s("p",[t._v("但是对于刚入行的小白还是很困惑怎么会有这样奇怪的关联关系呢？我在"),s("a",{attrs:{href:"https://levelup.gitconnected.com/what-is-the-em-unit-in-css-3985d8e68060",target:"_blank",rel:"noopener noreferrer"}},[t._v("这篇文章"),s("OutboundLink")],1),t._v("找到了答案：「em 的起源可以追溯到印刷术，当时印刷过程使用木头和金属块在纸上创建字母，该容器具有固定的高度和不同的宽度，具体取决于字体，字体设计师决定了容器的尺寸。这个容器叫做"),s("strong",[t._v("Em(Ephemeral) Box")]),t._v("。」")]),t._v(" "),s("p",[s("img",{attrs:{src:a(449),alt:"1"}})]),t._v(" "),s("p",[t._v("回到上面 em 是相对父元素的，而不是根元素的，假设我有代码如下")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root-div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second-div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      HelloWorld!\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("那最后 HelloWorld 的大小是 16px*2*2=64px，很多时候这并不是我们想要的，我们想要一个唯一的标准，于是 rem 来了，rem 的相对于根元素的字体大小。")]),t._v(" "),s("h3",{attrs:{id:"em-和-rem-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-和-rem-的区别"}},[t._v("#")]),t._v(" em 和 rem 的区别")]),t._v(" "),s("p",[t._v("em 和 rem 的区别就是就是参考系不一样，em 是相对于父元素的，rem 是相对于根元素的。")]),t._v(" "),s("h3",{attrs:{id:"em-设置组件宽度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#em-设置组件宽度"}},[t._v("#")]),t._v(" em 设置组件宽度")]),t._v(" "),s("p",[s("strong",[t._v("当然 em 并不仅仅设置字体大小，还能设置组件宽度，因为不管是字体还是组件它们的单位都是统一的，最终还是根据 px 为基准单位。")])]),t._v(" "),s("p",[t._v("举个 em 设置宽度的例子")]),t._v(" "),s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("root-div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("//需设置font-size,设置width:2em不管用\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("second-div"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token special-attr"}},[s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token value css language-css"}},[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 3em"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" antiquewhite"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n      HelloWorld!\n    ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n  ")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token plain-text"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("second-div")]),t._v(" 这个组件的宽度是多少？应该是 16px*2*3=96px。如果 "),s("code",[t._v("second-div")]),t._v(" 的宽度是 16px*2=32px。所以看到不管是 em 还是 rem 就是相对字体的长度单位(只不过参考系不一样)，然后它为什么这么设计也说清楚了。")]),t._v(" "),s("p",[s("img",{attrs:{src:a(450),alt:"1"}})]),t._v(" "),s("h3",{attrs:{id:"回到开始问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回到开始问题"}},[t._v("#")]),t._v(" 回到开始问题")]),t._v(" "),s("p",[t._v("回到我们刚开始的例子:")]),t._v(" "),s("blockquote",[s("p",[t._v("最后前端同事跟我说可以直接按照设计稿标注的组件的宽度进行设置，而且单位是px，当时我就懵了，那如果设备屏幕变大的话，不就有可能横向会展示三个信息组件了吗？前端同事嘿嘿一笑，说项目里有个库可以把 px 转化为 rem，rem 是什么鬼？")])]),t._v(" "),s("p",[t._v("我们已经知道了 rem 是怎么回事了，然后就是 px 怎么转换为 rem，尽管我们知道公式 root-font-size*rem=px，但是对于屏幕宽度可变的情况下我们是怎么能把 px 转化为 rem呢？")]),t._v(" "),s("p",[t._v("举个例子吧，对于屏幕宽度为 300px 和 1000px 的设备，我想要设置组件长度为屏幕宽度的一半，那我们怎么能够设置一个 px 然后转化为一个 rem， 然后映射到两个对应的像素 150px 和 500px 呢？**答案是如果可以动态修改 html 的 font-size 就能做到了。**比如设计稿按照给的 375px 宽度进行的设计，"),s("code",[t._v("postcss-pxtorem")]),t._v(" 将 "),s("code",[t._v("rootValue")]),t._v(" 配置为 375，那我们设置屏幕宽度为 187.5，即 0.5rem，然后当屏幕宽度为 300px 的时候，"),s("code",[t._v("postcss-pxtorem")]),t._v(" 将 "),s("code",[t._v("html")]),t._v(" 设置 "),s("code",[t._v("font-size")]),t._v(" 为 300px，那 300px*0.5rem=150px。这样就能满足我们的需求了。")]),t._v(" "),s("blockquote",[s("p",[t._v("一般设计师切图要么是 375px 要么是 750px")])]),t._v(" "),s("p",[t._v("所以有了 "),s("code",[t._v("postcss-pxtorem")]),t._v(" 我们就可以很方便的进行一些等比缩放的布局要求了。")]),t._v(" "),s("p",[t._v("参考地址:")]),t._v(" "),s("ol",[s("li",[t._v("https://github.com/cuth/postcss-pxtorem")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Values_and_units",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN CSS 的值与单位"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);