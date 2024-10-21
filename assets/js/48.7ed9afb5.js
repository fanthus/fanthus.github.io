(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{343:function(t,e,s){t.exports=s.p+"assets/img/wechat_qrcode.c0c8a471.png"},413:function(t,e,s){t.exports=s.p+"assets/img/frontend.1af0ea2e.jpg"},644:function(t,e,s){"use strict";s.r(e);var r=s(5),v=Object(r.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("为了掌握应用内 H5 的开发流程，上个月算是系统的通过视频学习的方式，熟悉了下 Vue 这个前端框的流程。不过时间有限，Vue 很多知识还是没有看到，不过感觉把自己想要理解的大部分的内容都看了下，基本上也理解了前端开发目前的整体的流程。")]),t._v(" "),e("h2",{attrs:{id:"前端页面开发"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端页面开发"}},[t._v("#")]),t._v(" 前端页面开发")]),t._v(" "),e("p",[t._v("我理解前端开发目前的很多框架都是为了解决前端开发中很多代码没有方便复用，目的提升开发效率。其实 HTML+CSS+JS 这套理念还是有的，就算是使用了 Vue 框架，Vue 组件里的内容基本上还是这三大件，小程序开发也是类似的。")]),t._v(" "),e("p",[t._v("之前写过几周小程序的开发，我感觉前端开发还是需要很多时间去熟练 CSS 使用，以及提升对 JS 这门语言的理解，框架的入门反而还是挺快的。对于新入手前端的开发者来说，像是 CSS 的熟练使用还是 JS API 的熟悉程度是需要时间去积累的。Vue 开发和小程序开发大部分的时间其实是花在样式上和数据管理上。对不熟悉 CSS 样式的同学来说，CSS 样式和布局思路都是需要新接受的。")]),t._v(" "),e("p",[t._v("对于之前没有接触过状态管理的客户端同学来说，Vue 的状态管理 Vuex 框架也是比较新颖的数据管理方式。传统的客户端开发中基本上都还是命令式的状态管理，并不是声明式的状态管理，不过现在客户端开发也在向声明式或者说响应式的状态管理框架靠拢了，比如 iOS SwiftUI 这种状态管理框架，还有 Android  的 Compose  框架，都是客户端在往这方面转向的一个重要的信号。可以说状态管理框架这种非常方便实用的的声明式写法可能就是未来的方向。而前端的同仁们已经走在这方面的前列了。这是需要向前端同事学习的。甚至 Flutter 这种跨端的开发框架也使用了状态管理，我自己感觉是客户端在这方面的探索非常不足，投入还不够。对于客户端开发者来说，状态管理框架的学习还是应该提上日程，早学早享受。")]),t._v(" "),e("p",[t._v("Vue 里很多的细碎的概念其实和客户端本质上是类似的，比如提供了监视属性，计算属性等机制，甚至我看前端点击事件的响应流程和 iOS 里的事件响应流程都非常类似。感觉前端/客户端的很多机制也是互相借鉴的。其实从本质上来看，前端/客户端做的事儿也是类似的（提供用户交互界面），我觉得这也是很多人/公司前仆后继的想要创造跨平台框架的东西本质原因。")]),t._v(" "),e("p",[t._v("不过也有一些概念区分比如 Vue 里面的组件其实有点类似于 iOS 客户端中的 UIViewController 这种基础的视图控制器控件，客户端里说的组件化更多是工程上的组件化。")]),t._v(" "),e("h2",{attrs:{id:"前端打包部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端打包部署"}},[t._v("#")]),t._v(" 前端打包部署")]),t._v(" "),e("p",[t._v("学前端以前不是很明白前端的编译和打包是干嘛的。现在的话是有了一个基础的笼统的影响，前端的编译其实就是将文件编译成 HTML 而不是客户端最终打包成的二进制文件。其实最早的时候前端是不需要编译的，也没有编译这个概念，只不过为了提升效率引入了很多框架，为了方便开发者开发又引入了很多区别于 CSS 语法的别的语法，这些都需要进行转换。所以就有了编译这个概念。")]),t._v(" "),e("p",[t._v("打包是将前端脚手架工程最终生成一个浏览器能识别的文件，入口文件还必须是 HTML 文件。像是 Vue 打包就是生成一个 dist 文件夹，里面放着最终要拷贝到服务器上文件内容。其实和客户端的打包概念也是类似，目的是产出一个能供用户使用的产品。对于 iOS 来说最终的打包产品就是 IPA 包，开发者可以直接把包拖进自己的手机里运行。Android 类似。")]),t._v(" "),e("p",[t._v("客户端开发的时候，IDE 有都有内置的打包工具，前端也有对应的打包工具，比如 webpack，以及 Vue3 自带的 Vite 打包工具。像 VSCode 对 Node 工程兼容的比较好，还有图形化的按钮可以点击去 build。")]),t._v(" "),e("p",[t._v("前端的部署是直接部署在自己的服务器上，像我们公司的话就是部署在服务器的 Docker 容器里，之前的话应该就是放在服务器的某个目录下。基本上自己的公司都搞定了，相对于客户端来说发版还是比较容易的，客户端的话就还需要和各种商店打交道，把自己打包好的产品提交给各大商店审核。")]),t._v(" "),e("p",[e("img",{attrs:{src:s(413),alt:"前端学习体会.jpg"}})]),t._v(" "),e("p",[t._v("以前总是对以上的流程认识并不清晰，现在自己搞了一圈之后就大概明白了，也知道自己想要完整的构建一个网站应该如何做了。不管是部署在github pages的静态网站还是部署在自己服务器上本质上都是一样的。")]),t._v(" "),e("p",[t._v("虽然理解的还是非常粗糙，但是感觉自己还是入了前端开发的门，后面再有需要定制化自己网址界面的需求，或者定制自己博客类的需求，也知道应该从哪儿着手去做。我觉得这是最重要的，不像以前不理解的时候只能被动的跟着教程去做，出了问题也不知道怎么排查。")]),t._v(" "),e("hr"),t._v(" "),e("p",[t._v("关注我的微信公众号，我在上面会分享我的日常所思所想。")]),t._v(" "),e("div",{attrs:{align:"center"}},[e("img",{attrs:{src:s(343),width:"40%/"}})]),t._v(" "),e("Vssue",{attrs:{title:t.前端学习体会}})],1)}),[],!1,null,null,null);e.default=v.exports}}]);