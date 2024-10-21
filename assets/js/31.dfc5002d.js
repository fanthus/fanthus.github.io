(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{451:function(t,e,s){t.exports=s.p+"assets/img/css-box-1.31c2daa0.png"},452:function(t,e,s){t.exports=s.p+"assets/img/css-box-2.23fbce5e.png"},453:function(t,e,s){t.exports=s.p+"assets/img/css-box-3.0cde7682.png"},454:function(t,e,s){t.exports=s.p+"assets/img/css-box-4.9dcd3c59.png"},682:function(t,e,s){"use strict";s.r(e);var o=s(5),r=Object(o.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("今天在实现一个前端效果的时候才发现 CSS 的盒子模型并不是只有一种，而且之前对盒模型也没有太深入了解过，盒子模型其实 CSS 布局的基础，不了解盒子模型的花，那 CSS 布局过程中一定会踩到很多坑，遇到很多不明白的现象。")]),t._v(" "),e("h2",{attrs:{id:"什么是盒子模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#什么是盒子模型"}},[t._v("#")]),t._v(" 什么是盒子模型？")]),t._v(" "),e("p",[t._v("所谓盒子模型（Box Model）就是把HTML页面中的元素看作是一个矩形的盒子，也就是一个盛装内容的容器。整个 H5 页面就是由这些盒子模型组成的元素来构成。")]),t._v(" "),e("p",[t._v("当对一个文档进行布局（lay out）的时候，浏览器的渲染引擎会根据标准之一的 CSS 基础框盒模型（CSS basic box model），将所有元素表示为一个个矩形的盒子（box）。CSS 决定这些盒子的大小、位置以及属性（例如颜色、背景、边框尺寸…）")]),t._v(" "),e("p",[t._v("每个盒子由四个部分（或称区域）组成，其效用由它们各自的边界（Edge）所定义（原文：defined by their respective edges，可能意指容纳、包含、限制等）。如图，与盒子的四个组成区域相对应，每个盒子有四个边界：内容边界 Content edge、内边距边界 Padding Edge、边框边界 Border Edge、外边框边界 Margin Edge。")]),t._v(" "),e("p",[t._v("CSS 中组成一个块级盒子需要：")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("内容区("),e("strong",[t._v("Content box")]),t._v(")")]),t._v(": 这个区域是用来显示内容，大小可以通过设置 "),e("code",[t._v("[width](https://developer.mozilla.org/zh-CN/docs/Web/CSS/width)")]),t._v(" 和 "),e("code",[t._v("[height](https://developer.mozilla.org/zh-CN/docs/Web/CSS/height)")]),t._v(".")]),t._v(" "),e("li",[e("strong",[t._v("内边距")]),t._v("(Padding box): 包围在内容区域外部的空白区域；大小通过 "),e("code",[t._v("[padding](https://developer.mozilla.org/zh-CN/docs/Web/CSS/padding)")]),t._v(" 相关属性设置。")]),t._v(" "),e("li",[e("strong",[t._v("边框")]),t._v("(Border box): 边框盒包裹内容和内边距。大小通过 "),e("code",[t._v("[border](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border)")]),t._v(" 相关属性设置。")]),t._v(" "),e("li",[e("strong",[t._v("外边距")]),t._v("(Margin box): 这是最外面的区域，是盒子和其他元素之间的空白区域。大小通过 "),e("code",[t._v("[margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)")]),t._v(" 相关属性设置。")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(451),alt:"1"}})]),t._v(" "),e("p",[t._v("Note")]),t._v(" "),e("ol",[e("li",[t._v("完整的 CSS 盒模型应用于块级盒子(block)，内联盒子(inline)只使用盒模型中定义的部分内容。")])]),t._v(" "),e("h2",{attrs:{id:"不同的盒子模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#不同的盒子模型"}},[t._v("#")]),t._v(" 不同的盒子模型")]),t._v(" "),e("p",[t._v("CSS 通过 box-sizing 属性来控制不同的盒子模型，有两种取值方案标准盒子模型(content-box) 以及 IE 怪异盒子模型(border-box) 。")]),t._v(" "),e("p",[e("code",[t._v("box-sizing")]),t._v(" 默认取值是 "),e("code",[t._v("content-box")]),t._v("，如果我们给一个元素设置宽度，那么其实是设置的是内容区域的宽度，"),e("strong",[t._v("此时盒子的大小是「内容区+内边距+边框宽度」。")])]),t._v(" "),e("p",[t._v("假设我们按照如下的 CSS 设置来设置一个元素")]),t._v(" "),e("div",{staticClass:"language-css extra-class"},[e("pre",{pre:!0,attrs:{class:"language-css"}},[e("code",[e("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".content-box-inner")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-sizing")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" content-box"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1px solid #888888"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 10px"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("那最终盒子的大小（元素的宽度）是 100+10"),e("em",[t._v("2+1")]),t._v("2 = 122px，即这个元素最终在页面上占据的控件是 122px。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(452),alt:"2"}})]),t._v(" "),e("p",[t._v("如果我们将 "),e("code",[t._v("box-sizing")]),t._v(" 设置为 "),e("code",[t._v("border-box")]),t._v("，我们设置 width 为 100 相当于是设置了盒子整体除了 margin 外占据的宽度为 100，还是上面的 CSS 样式，我们只修改 "),e("code",[t._v("box-sizing")]),t._v(" 属性，发现内容区变成了 100-10*2-2 = 78。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(453),alt:"3"}})]),t._v(" "),e("p",[t._v("我自己从使用角度理解是 "),e("code",[t._v("box-sizing")]),t._v(" 属性，它其实控制的是 CSS 中元素 width 设置的含义。在默认的 "),e("code",[t._v("content-box")]),t._v(" 中，width 表示真实内容区域的大小，在 "),e("code",[t._v("border-box")]),t._v(" 的设置中， width 表示的是盒子真实占据的宽度的大小，内容区需要反推才能得到。")]),t._v(" "),e("p",[t._v("Note")]),t._v(" "),e("ol",[e("li",[t._v("不管 box-sizing 属性是哪种，给元素设置背景色，padding 区域也会生效。")]),t._v(" "),e("li",[t._v("元素的宽度和内容区的宽度并不是一个概念。")]),t._v(" "),e("li",[t._v("如果 CSS 样式有 margin 配置的话，那盒子的最终宽度要把 margin 算进去。")])]),t._v(" "),e("p",[e("strong",[t._v("下面这幅图可以非常直观的说明不同 width 在两种模式下对应的盒子内的不同区域的宽度")])]),t._v(" "),e("p",[e("img",{attrs:{src:s(454),alt:"4"}})]),t._v(" "),e("h2",{attrs:{id:"微信小程序的盒模型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序的盒模型"}},[t._v("#")]),t._v(" 微信小程序"),e("strong",[t._v("的")]),t._v("盒模型")]),t._v(" "),e("p",[t._v("微信小程序的默认 box-sizing 属性是 border-box，和标准盒模型不太一样，要注意。")]),t._v(" "),e("p",[t._v("参考地址:")]),t._v(" "),e("ol",[e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/The_box_model#%E4%BB%80%E4%B9%88%E6%98%AF_css_%E7%9B%92%E6%A8%A1%E5%9E%8B%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - 盒子模型"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://www.notion.so/CSS-4468faba4a7040b8bc1432af6331ad37",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 基础框盒模型介绍"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/box-sizing",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - box-sizing"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/width",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN - width"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://vue3js.cn/interview/css/box.html#%E4%B8%80%E3%80%81%E6%98%AF%E4%BB%80%E4%B9%88",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://vue3js.cn/interview/css/box.html#一、是什么"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);e.default=r.exports}}]);