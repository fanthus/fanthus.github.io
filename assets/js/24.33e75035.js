(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{343:function(e,r,t){e.exports=t.p+"assets/img/wechat_qrcode.c0c8a471.png"},455:function(e,r,t){e.exports=t.p+"assets/img/docker_image_0.ce2730f5.png"},456:function(e,r,t){e.exports=t.p+"assets/img/docker_image_1.5de8217c.png"},457:function(e,r,t){e.exports=t.p+"assets/img/docker_image_2.e6e8a268.png"},458:function(e,r,t){e.exports=t.p+"assets/img/docker_image_3.9baaddbb.png"},459:function(e,r,t){e.exports=t.p+"assets/img/docker_image_4.d3d39671.png"},688:function(e,r,t){"use strict";t.r(r);var o=t(5),n=Object(o.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("作为一个从客户端工程师，之前并没有接触过 Docker 这类工具只是听说过，现在做了一些前端项目之后发现很多前端项目是部署在 Docker 上的，于是给了学习 Docker 的契机，这篇文章就是初始 Docker 的一些过程和体会。")]),e._v(" "),r("p",[e._v("在 Docker "),r("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("官网"),r("OutboundLink")],1),e._v("下载好对应的版本客户端版本，打开 Docker 客户端之后，会有默认的 Guide，这个 Guide 是个挺好的感受 Docker 的教程。")]),e._v(" "),r("p",[e._v("Docker 里面最重要的概念就是容器，我自己理解容器就像是个虚拟的系统一样，我们可以看它里面的文件结构，以及看这个「虚拟系统」运行时产生的日志，容器也向外暴露了自己的端口，让外部用户能够访问到它，像官方提供的这个例子里面容器暴露了 8088 端口，我们运行容器后，在浏览器访问 "),r("a",{attrs:{href:"http://localhost:8088/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8088/"),r("OutboundLink")],1),e._v("  就能访问容器内部署好的前端服务。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(455),alt:"Untitled"}})]),e._v(" "),r("p",[e._v("明白了 Docker 容器概念之后，接下来看下如何运行 Docker，也就是官方 Guide 里面的第二个内容「How do I run a container」，在这个例子我们可以看到如何通过 Dockerfile 生成一个镜像。按步骤拆解说明一下")]),e._v(" "),r("h3",{attrs:{id:"准备一个前端工程"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#准备一个前端工程"}},[e._v("#")]),e._v(" 准备一个"),r("a",{attrs:{href:"https://github.com/docker/welcome-to-docker",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端工程"),r("OutboundLink")],1)]),e._v(" "),r("p",[e._v("工程大致如下，和之前的工程不同的是当前的工程里面包含一个 Dockerfile 的文件。这个文件是创建 Docker 镜像的关键文件，如果是我们自己的工程的话，就需要创建自己的 Dockerfile")]),e._v(" "),r("p",[r("img",{attrs:{src:t(456),alt:"Untitled"}})]),e._v(" "),r("h3",{attrs:{id:"构建-docker-镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#构建-docker-镜像"}},[e._v("#")]),e._v(" 构建 Docker 镜像")]),e._v(" "),r("p",[e._v("执行命令 "),r("code",[e._v("docker build -t welcome-to-docker .")]),e._v(" ，问下 ChatGPT 这个命令是嘛意思，给出解释如是「使用当前目录下的 Dockerfile 构建一个 Docker 镜像,并给这个镜像打上标签 welcome-to-docker」。我现在并不理解打标签的含义，感觉有点像给镜像命名，不过也不妨碍我们可以先执行这个命令构建一下 Docker 镜像。")]),e._v(" "),r("p",[e._v("构建完之后本地目录并不会出现任何 Docker 的镜像，镜像会出现在 Docker 客户端的 images tab 里。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(457),alt:"Untitled"}})]),e._v(" "),r("h3",{attrs:{id:"运行-docker-镜像"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#运行-docker-镜像"}},[e._v("#")]),e._v(" 运行 Docker 镜像")]),e._v(" "),r("p",[e._v("点击运行按钮，在 Optional Settings 里指定端口 3333。回到 Container Tab 查看，会看到和镜像对应的容器。点击端口位置，打开 "),r("a",{attrs:{href:"http://localhost:3333/",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:3333/"),r("OutboundLink")],1),e._v(" 会看到已经部署在 Docker 容器里的内容。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(458),alt:"Untitled"}})]),e._v(" "),r("p",[e._v("基本上整体配置就到这儿，还有一些额外的疑问：")]),e._v(" "),r("p",[r("strong",[e._v("Q: Docker 镜像和 Docker 容器之间的关系？")])]),e._v(" "),r("p",[e._v("A: 镜像(Image)是容器(Container)的模板。一个容器只对应一个镜像。")]),e._v(" "),r("p",[e._v("Docker 镜像是一个只读的模板,创建容器时需要指定一个镜像作为基础。容器是镜像的运行实例,容器会创建一个可写层作为最上层,我们通常会在容器中安装软件、创建文件等，这些变化会记录在容器层中。")]),e._v(" "),r("p",[r("strong",[e._v("Q: 制作镜像这个过程有点疑问？我们是怎么把前端项目构建成一个 Docker 镜像的？")])]),e._v(" "),r("p",[e._v("A: 核心还是 Dockerfile. 可以看一下示例中的 Dockerfile 的内容，并带上注释说明一下")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('//1. 选择官方的 node:18-alpine 镜像作为基础镜像\nFROM node:18-alpine\n//2. 将工作目录设置为 /app\nWORKDIR /app\n//3. 复制文件到工作目录。\nCOPY package*.json ./\nCOPY ./src ./src\nCOPY ./public ./public\n//4. 按顺序执行 npm 命令\nRUN npm install \\\n    && npm install -g serve \\\n    && npm run build \\\n    && rm -fr node_modules\n//5. 导出容器的 3000 端口。\nEXPOSE 3000\n//6. 容器启动后,执行 serve -s build 命令,以 production 模式启动 Node 应用。\nCMD [ "serve", "-s", "build" ]\n')])])]),r("p",[e._v("我自己理解其实就是把一个前端项目拷贝到了 Docker 镜像里面，如图然后就像是安装一些必要的依赖，同时删除掉无用的依赖，最后在容器里面启动前端应用。")]),e._v(" "),r("p",[e._v("查看构建好正在运行的容器文件结构，可以看到之前的拷贝都生效了，所以 Dockerfile 其实就是构建镜像的一些规则文件，Dockerfile 里面的命令就是用来操作镜像内容的。")]),e._v(" "),r("p",[r("img",{attrs:{src:t(459),alt:"Untitled"}})]),e._v(" "),r("p",[e._v("学习 Docker 这部分内容主要是尝试理解公司的前端项目是如何部署在 Docker 上，上面这些Docker知识基本上能帮助梳理清大部分的部署流程。")]),e._v(" "),r("hr"),e._v(" "),r("p",[e._v("关注我的微信公众号，我在上面会分享我的日常所思所想。")]),e._v(" "),r("div",{attrs:{align:"center"}},[r("img",{attrs:{src:t(343),width:"40%/"}})])])}),[],!1,null,null,null);r.default=n.exports}}]);