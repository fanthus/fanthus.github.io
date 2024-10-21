(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{343:function(t,a,v){t.exports=v.p+"assets/img/wechat_qrcode.c0c8a471.png"},654:function(t,a,v){"use strict";v.r(a);var e=v(5),_=Object(e.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"学习时间历程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习时间历程"}},[t._v("#")]),t._v(" 学习时间历程")]),t._v(" "),a("p",[t._v("先说一下自己的学习和开发的历程，可以从 2022 年 二三月份学习开始算起，刚开始就是熟悉区块链的知识，基本上可以说是从零开始吧，学了半个月之后开始慢慢进入开发状态，熟悉和开发智能合约。开发过程花了一个多月的时间，基本上也是边开发边学习，进入五月份之后开始进行新项目的开发，一直开发到六月份，还没等项目上线，项目人员就已经解散了…")]),t._v(" "),a("h2",{attrs:{id:"学习过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#学习过程"}},[t._v("#")]),t._v(" 学习过程")]),t._v(" "),a("p",[t._v("整体的学习过程是先掌握了基础的知识，区块链的基础概念，比如以太坊和区块链比特币的关系等等，去中心化到底是怎么回事，以及 Solidity 智能合约的学习，学习过程中的内容，我基本上是保留了比较完整的 QA 笔记。然后 ZP 找了一个比较完整的开源项目，就开始对着项目研究里面用到的具体的实例，研究合约和前后端交互的流程，职责划分这些东西，这样对整体项目开发架构就有了一些了解，学习过程也离不开自己的实践，我们搭建了开发环境之后，尝试在以太坊测试网络上进行合约的部署，比如 NFT 关联的标准 ERC721 合约等。然后就开始慢慢的接入合约的开发，然后在开发中不断的查漏补缺，找到自己还不理解的地方去进行学习以及阅读别人的开源代码，但是其实我在阅读别人开源代码这方面做的不够好。最后就是结合项目需求进行整体项目设计和开发了。")]),t._v(" "),a("h1",{attrs:{id:"整体区块链项目的结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体区块链项目的结构"}},[t._v("#")]),t._v(" 整体区块链项目的结构")]),t._v(" "),a("p",[t._v("我们参与的两个项目从结构上很类似，链上+后端+前端 链上职责：主要是负责处理链上的业务逻辑，保存用户真正care的数据（保证去中心化），这些链上数据是用户真正关心的资产。 后端职责：做一些辅助链操作的接口，提供一些聚合的数据结构，合约部署上之后是不能修改的，但是后端的接口聚合是可以实时的修改，方便前端展示。还有一些逻辑是因为合约的限制，所以需要让后端去做，比如关于随机数的生成算法，链上做到真正的随机需要引入预言机机制，对于开发者和用户都有额外的花费，这时候不那么中心化的方案就是服务器去做随机。所以去中心化开发里后端的主要职责还是配合合约去工作。 前端职责：和正常的前端应用其实很类似，有一点区别就是前端有一些交互是直接跟链打交道的，从链上直接获取数据，所以需要前端开发者去理解区块链开发的一些基础知识，否则面对新的和链交互的框架会比较茫然。")]),t._v(" "),a("h1",{attrs:{id:"开发过程中的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发过程中的问题"}},[t._v("#")]),t._v(" 开发过程中的问题")]),t._v(" "),a("ol",[a("li",[t._v("对去中心化项目产品的理解。其实也不算太大的问题，主要还是对链上的业务不太熟悉，我记得刚开始的时候光熟悉产品文档我就花了很多的时间。")]),t._v(" "),a("li",[t._v("质押收益的计算逻辑，主要是 accPerShare 的计算逻辑，这部分刚开始自己总是没有理解到位后来不断和同事沟通，才慢慢理解了计算机制，就感慨非常的巧妙，而且几乎业内的所有的质押都用同样的方案。因为这个质押收益的计算逻辑还和产品battle了好久，最后还是我们的技术顾问给了定论，按区块计算收益而不是按时间计算收益。这部分其实花的时间还蛮长。算是开发过程中的难点。")]),t._v(" "),a("li",[t._v("升级合约和合约大小优化的问题。这个问题在开发的最后阶段比较耗时，引入了代理合约后，需要对合约的升级机制做个系统的理解，这部分的学习最后又深入到目前合约代理最新的钻石标准领域，前后花了半个多月的时间学习理解，但这段时间的理解也加深了我对整体 EVM 的存储系统的底层理解，还是有收获的。合约优化也花了很多的奇淫技巧，总之是优化到了可用的范围内，这部分好在是官方有对应的文档可以帮我们参考。")]),t._v(" "),a("li",[t._v("还有上线之后的运营相关的技术。这部分因为项目没有正式上线所以也没什么可总结的，但是我觉得正规上线的项目应该是比较重视项目的持续维护的。")])]),t._v(" "),a("h1",{attrs:{id:"对去中心化开发的看法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对去中心化开发的看法"}},[t._v("#")]),t._v(" 对去中心化开发的看法")]),t._v(" "),a("ol",[a("li",[t._v("开发思路的转换。去中心化开发里最重要的就是区分中心化服务器和合约服务器的职责。传统的 Web2 世界里中心化服务器掌握了所有的数据大全，但在 Web3 世界，这点就有所改变，区分这部分职责还是要搞清楚 Web3 的理念，否则会陷入到哪些内容应该放到服务器哪些内容放到合约上的困惑。 同时，又因为智能合约的缺陷，比如合约大小限制，合约执行效率限制以及合约没办法获取外部世界的数据的限制（当然最后这步可以引入目前蓬勃发展的预言机机制解决），所以后端作为合约的补充就显得必不可少了。")]),t._v(" "),a("li",[t._v("因为去中心化的特性决定了合约在部署后是不能被修改的，但是人非圣贤，开发出的软件总是或多或少的有问题，去中心化的世界里也不乏因为智能合约漏洞被黑客利用引起巨额经济损失的案例，所以很多人开始推崇在智能合约的升级，作为很多 EIP 标准实现的结构 Openzeppenlin 也提供了可升级的方案，不过和传统的代码升级已经是不同，也因为合约大小的限制，决定了合约不能无限升级（钻石合约可以做到没有限制，但是这个方案还在审议中）")]),t._v(" "),a("li",[t._v("关于安全。主要就是智能合约的安全，正常的合约开发流程是代码开发完毕之后，需要经过的完整的单元测试，然后送给审计机构，所以智能合约对安全的要求是比较高的。除了一些正常的开发之外，要着重注意合约权限的控制，尤其是暴露合约写方法的权限。正常的中心化开发基本上不操心这个，因为代码是闭源的，所以不存在我的代码被别人调用这种可能性。但是智能合约是暴露在链上的（尽管智能合约可以闭源，但是还是可以通过反编译，风险还是存在的），这也是和传统开发模式不同的点。")])]),t._v(" "),a("h1",{attrs:{id:"整体项目的反思"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整体项目的反思"}},[t._v("#")]),t._v(" 整体项目的反思")]),t._v(" "),a("ol",[a("li",[t._v("重视项目在学习中的应用。这次开发的时候，初期的项目对我们加强对项目的理解起到了很关键的作用。我其实刚开始的时候还是太注重了理论学习了，因为感觉自己啥也不懂，弄啥项目呢，但是通过项目学习是一种非常快速的暴露自己缺陷的问题。我那种一本正经的学习思路，可能还是一种学习上路径依赖，而且直接弄项目可能会让自己觉得不舒服。之后在学习新领域的时候，需要克服自己这种学习效率比较低的学习路径。项目+DEMO+理论这三者不断的互相碰撞，要明白学习的过程本来就是一个不那么舒服的过程，我们的目标是快速掌握知识，而不是让自己舒服，感动自己。")]),t._v(" "),a("li",[t._v("看别人的源码非常重要。这次写智能合约，很多地方就是参考了 Openzeppelin 的官方实现，权限控制等，以及写质押合约的时候参考别人的实现，但还是看的太少，Openzeppenlin 是个巨大的宝库，里面有很多各种各样的工具库和标准的实现，是非常的标准。值得去深入学习，能提升我们的工程质量。")]),t._v(" "),a("li",[t._v("协作的重要性。学习的过程中和别人不断的沟通会极大地加快学习的进度，有点类似相当于多线程学习，然后线程之间不断同步学习知识，有的时候自己的思维容易陷入误区，可能别人一句话就帮你搞定了，所谓人多力量大。有的时候和别人聊天也会理清楚自己的逻辑思路。我自己感觉是如果我自己学区块链的这些技术，可能得多花一倍的时间。")]),t._v(" "),a("li",[t._v("单元测试的重要性。因为合约这部分是非常重视安全的，所以合约的主要逻辑都要进行单元测试，在开发合约的过程当中我们有很多时间都花在了写 JS 的测试代码上。单元测试可以保证我们在修改了主合约的代码后验证修改后的逻辑是否正确，有问题可以直接暴露出来。而且我也确实在单元测试中发现了自己合约当中存在的问题。")]),t._v(" "),a("li",[t._v("后端业务逻辑的重要性。这次我们写合约我们变成了数据提供方，这和以前 iOS 端的开发逻辑不一样，以前开发客户端程序，并不太关心服务端的数据是怎么来的，久而久之其实距离核心的业务逻辑比较远，最核心的业务逻辑应该是服务器中的，中心化开发嘛，服务器是数据逻辑的中转存储站。所以想要深入理解业务逻辑还是要理解服务端的逻辑。")])]),t._v(" "),a("p",[t._v("对于后续回归到本身业务的开发上的话，我觉得有指导意义是，做好 iOS 工程核心逻辑的自动化测试，比如下单支付相关的业务逻辑。要参与到服务端逻辑的 reivew 当中，看明白服务端的逻辑，以前觉得很复杂，其实复杂是因为自己没接触，实际看看，可能觉得代码写的也就那样。")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("关注我的微信公众号，我在上面会分享我的日常所思所想。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:v(343),width:"40%/"}})]),t._v(" "),a("Vssue",{attrs:{title:t.今年的Web3学习经历}})],1)}),[],!1,null,null,null);a.default=_.exports}}]);