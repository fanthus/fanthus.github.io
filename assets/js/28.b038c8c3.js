(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{343:function(e,a,s){e.exports=s.p+"assets/img/wechat_qrcode.c0c8a471.png"},460:function(e,a,s){e.exports=s.p+"assets/img/ga_0.eecd9a41.png"},461:function(e,a,s){e.exports=s.p+"assets/img/ga_1.c85aad5a.png"},462:function(e,a,s){e.exports=s.p+"assets/img/ga_2.ab4a40cb.png"},463:function(e,a,s){e.exports=s.p+"assets/img/ga_3.00178a05.png"},689:function(e,a,s){"use strict";s.r(a);var t=s(5),o=Object(t.a)({},(function(){var e=this,a=e._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("相信很多人和我之前一样也搞不清楚 Firebase 里面内置的 Analytics 还有 Google Analytics 到底是什么关系，这篇文章尝试来说明一下这两者关系的同时，也从实践上来说明怎么做是最好的实践。")]),e._v(" "),a("h2",{attrs:{id:"google-analytics-的发展"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-analytics-的发展"}},[e._v("#")]),e._v(" Google Analytics 的发展")]),e._v(" "),a("p",[e._v("想要梳理 Google Analytics 和 Google Analytics for Firebase 的关系，就要搞清楚 Google Analytics 的发展历程。")]),e._v(" "),a("p",[e._v("Google Analytics 最开始统计的平台只有网页端数据，比如让人们知道他们的用户究竟在网页端花费了多少时间。")]),e._v(" "),a("p",[e._v("当大家开始做移动应用来作为触达用户的手段后，Google Analytics 开始制作面向移动应用(iOS/Android)的 SDK，这样就可以统计用户在应用上的一些交互事件。")]),e._v(" "),a("p",[e._v("但是因为一些技术原因，为移动端退出的 Google Analytics mobile SDK 被废弃了，")]),e._v(" "),a("p",[e._v("经过一番调整之后，Google 在 2016 年推出了 Firebase Analytics，这次推出的 SDK 的版本对移动开发比较友好，统计方式也更符合移动应用的交互习惯。")]),e._v(" "),a("p",[e._v("不断完善 Firebase Analytics 的时候，Google 也把 Firebase Analytics 改名成为了 Google Analytics  for Firebase。这个名字意味着 Firebase 的统计和 Google Analytics 本质上是一套人搞出来的东西。")]),e._v(" "),a("p",[e._v("2019 年的时候，Google Analytics  for Firebase 又升级为了 Google Analytics 4，这个新的升级能够将不同平台的用户行为结合起来。")]),e._v(" "),a("p",[e._v("简单来说就是上面这样，这篇文章 "),a("a",{attrs:{href:"https://medium.com/firebase-developers/google-analytics-vs-firebase-analytics-vs-google-analytics-97ca645a8aff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Analytics vs. Firebase Analytics vs. Google Analytics"),a("OutboundLink")],1),e._v(" 介绍的更加详细，有兴趣可以看看。")]),e._v(" "),a("p",[e._v("我自己理解 Google Analytics 和 Google Analytics  for Firebase 本质上其实是一个东西。我们接下来的实践也会证明这一点。")]),e._v(" "),a("h2",{attrs:{id:"google-analytics-和-firebase-analytics-的实践"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#google-analytics-和-firebase-analytics-的实践"}},[e._v("#")]),e._v(" Google Analytics 和 Firebase Analytics 的实践")]),e._v(" "),a("p",[e._v("我在 Firebase 后台创建了 fanthus blog 项目，然后在项目下创建了一个 Web 应用，系统会自动在 Google Analytics 后台也创建一个媒体资源。如图所示")]),e._v(" "),a("p",[a("img",{attrs:{src:s(460),alt:"Image 2023-06-08 12-04-30.png"}})]),e._v(" "),a("p",[e._v("将统计集成到网站有很多方式，Google Analytics 4 通过过在 html 中嵌入 JS 代码这种方式集成(gtag.js)，Firebase 则是通过 SDK 的方式集成。我的网站是通过 VuePress 搭建的，选择的是使用 Google Analytics 的集成方式。但是不管是哪种集成方式，最终打到的后端都是同一个数据库。")]),e._v(" "),a("p",[e._v("当我在网页上产生数据的时候，分别在 Google Analytics  和 Firebase 看页面数据，这两端的数据是一样的，如图所示")]),e._v(" "),a("p",[a("img",{attrs:{src:s(461),alt:"ga_1"}})]),e._v(" "),a("p",[a("img",{attrs:{src:s(462),alt:"ga_2"}})]),e._v(" "),a("p",[e._v("所以尽管我没有通过 Firebase 集成，但是两端使用的都是一份数据源，最终展示出来的效果是一样的。"),a("strong",[e._v("我之前还纠结到底用 Firebase 集成还是 Google Analytics 4 集成？这其实是个伪命题。")]),e._v(" 任何一种集成方式最终都能看到数据。")]),e._v(" "),a("p",[e._v("这里有个小的疑惑是，如果我并不是通过 Firebase 后台创建的应用，而是通过 Google Analytics 4 直接创建的媒体资源，似乎是没有办法将这个媒体资源关联到 FIrebase 的。旧的媒体资源有类似的 Firebase 关联的入口，但是新的 Google Analytics 4 是没有这个关联入口的，"),a("strong",[e._v("所以想要让自己的网站数据在 Firebase 和 Google Analytics 4 两边都展示就需要在 Firebase 上创建网站应用。")])]),e._v(" "),a("h2",{attrs:{id:"关于查看数据统计"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于查看数据统计"}},[e._v("#")]),e._v(" 关于查看数据统计")]),e._v(" "),a("p",[e._v("搞清楚 Google Analytics for Firebase 和 Google Analytics 4 的关系之后，我也想清楚了为什么 Firebase 没有单独提供的供用户查看的统计相关的 App，因为有 Google Analytics 应用其实就够了。")]),e._v(" "),a("p",[e._v("相对于 Firebase 的数据板，Google Analytics 提供的了更多维度的查看数据的方式，对应的角色也不同。")]),e._v(" "),a("p",[a("img",{attrs:{src:s(463),alt:"ga_3"}})]),e._v(" "),a("p",[e._v("以上，希望能帮你梳理清楚 Google Analytics for Firebase 和 Google Analytics 4 之间的关系。")]),e._v(" "),a("p",[e._v("参考地址:")]),e._v(" "),a("ol",[a("li",[e._v("https://github.com/vuejs/vuepress/issues/2713")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://medium.com/firebase-developers/google-analytics-vs-firebase-analytics-vs-google-analytics-97ca645a8aff",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Analytics vs. Firebase Analytics vs. Google Analytics"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.youtube.com/watch?v=j7Va1IufHMQ&t=396s",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google App Campaign第1课_什么是Google Analytics for Firebase"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("--\n关注我的微信公众号，我在上面会分享我的日常所思所想。")]),e._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:s(343),width:"40%/"}})])])}),[],!1,null,null,null);a.default=o.exports}}]);