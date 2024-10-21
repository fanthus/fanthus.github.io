(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{686:function(n,e,t){"use strict";t.r(e);var r=t(5),a=Object(r.a)({},(function(){var n=this,e=n._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("p",[n._v("客户端的项目不存在部署这个说法，一般打包生成 ipa 或者 apk 之后提交给商店，然后等待商店上架，用户就可以用手机在商店上下载到对应的应用了。")]),n._v(" "),e("p",[n._v("前端的项目一般最终都是以网页形式出现的（小程序有点特殊），那网页想要想要被用户看见的话，就需要放在一个云端的地方，这样所有人都能看见，这个云端的地方就是 Web 服务器。")]),n._v(" "),e("p",[n._v("Web 服务器最主要的功能就是托管前端项目构建后的静态资源文件，HTML、CSS、JS 以及图片，然后让用户通过 URL 访问到前端资源。")]),n._v(" "),e("p",[n._v("插个题外话，聊一下我最开始调试H5的几个误区和疑问")]),n._v(" "),e("ol",[e("li",[e("p",[n._v("有的时候浏览器不会执行 JS 代码。比如我直接建个文件夹，创建 html，CSS 和 JS 文件，在 html 文件里用 script 标签引入了同目录下的 js，然后用本地浏览器打开 html，我会纳闷为什么没有执行 JS 文件里代码。现在知道是因为浏览器的同源策略，导致没有办法加载 JS 文件内容导致的。")]),n._v(" "),e("p",[n._v("现在再有这种简单的测试 Demo 的话，会用 Visual Studio Code 插件库中的 LiveServer 这个插件来搞定。LiveServer 本质上就是开了本地的开发服务器。"),e("strong",[n._v("而当我们使用 Vue 开发调试的时候，本质上是本地起了一个 node 服务器。")])])]),n._v(" "),e("li",[e("p",[n._v("浏览器是怎么知道应该渲染 html 还是显示 html 源文件内容呢？这部分其实是没有考虑 http 协议，html 在网络上传输就是用的 http 协议，而浏览器通过响应头中的 Content-Type 字段来判断服务器返回的内容是 HTML 还是 HTML 源文件。很简单不再赘述。")])])]),n._v(" "),e("p",[n._v("当 Vue 项目需要部署到服务器的时候，我们需要先 build 出最终的结果，"),e("code",[n._v("npm run build")]),n._v(" 完之后会出现 dist 文件夹，我们最终就是想办法把这个文件夹搞到 web 服务器上。")]),n._v(" "),e("h2",{attrs:{id:"nginx-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-部署"}},[n._v("#")]),n._v(" Nginx 部署")]),n._v(" "),e("p",[n._v("Nginx 是一个高性能的 HTTP 和反向代理服务器,可以用作静态资源的 web 服务器。所以我们把 dist 目录放到 Nginx 上就好，我在自己的 mac 电脑上操作，具体步骤如下")]),n._v(" "),e("h3",{attrs:{id:"安装nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[n._v("#")]),n._v(" 安装Nginx")]),n._v(" "),e("p",[n._v("通过命令 "),e("code",[n._v("brew install nginx")]),n._v(" 方式安装 nginx，安装好的日志如下")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("The default port has been set in /usr/local/etc/nginx/nginx.conf to 8080 so that\nnginx can run without sudo.\n\nnginx will load all files in /usr/local/etc/nginx/servers/.\n\nTo start nginx now and restart at login:\n  brew services start nginx\nOr, if you don't want/need a background service you can just run:\n  /usr/local/opt/nginx/bin/nginx -g daemon off;\n")])])]),e("p",[n._v("这里面的 nginx.conf 文件非常重要，后面要对 nginx 配置的时候，大部分是在操作这个文件。备注：也可以通过 "),e("code",[n._v("nginx -t")]),n._v(" 命令来看这个配置文件的路径，并检查它的语法是否正确。")]),n._v(" "),e("h3",{attrs:{id:"启动nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx"}},[n._v("#")]),n._v(" 启动Nginx")]),n._v(" "),e("p",[n._v("通过直接执行可执行文件 "),e("code",[n._v("/usr/local/bin/nginx")]),n._v(" 可以运行 "),e("code",[n._v("nginx")]),n._v("，或者 "),e("code",[n._v("brew")]),n._v(" 提供的命令 "),e("code",[n._v("brew services start nginx")]),n._v(" 来启动。通过 "),e("code",[n._v("ps -ef | grep nginx")]),n._v(" 命令查看是否启动成功。")]),n._v(" "),e("p",[n._v("启动成功后，在浏览器上访问 "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:8080/"),e("OutboundLink")],1),n._v("  就能看到 "),e("code",[n._v("nginx")]),n._v(" 的欢迎页面。这个页面在本地路径 "),e("code",[n._v("/usr/local/var/www")]),n._v(" 下（感觉不同 nginx 的版本的默认加载路径不一样）")]),n._v(" "),e("h3",{attrs:{id:"配置nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置nginx"}},[n._v("#")]),n._v(" 配置Nginx")]),n._v(" "),e("p",[n._v("我希望直接把访问路径配置到我的 Vue 工程目录下的 "),e("code",[n._v("dist")]),n._v(" 文件夹位置处  "),e("code",[n._v("/Users/fanthus/Desktop/vue-practice/dist")]),n._v("，即当我访问 "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:8080/"),e("OutboundLink")],1),n._v("  的时候自动会访问我的编译好的各种前端资源。")]),n._v(" "),e("p",[n._v("这里就需要用到之前提到 "),e("code",[n._v("nginx.conf")]),n._v(" 这个配置文件，大致配置如下")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("server {\n    listen       8080;\n    server_name  localhost;\n    location / {\n        root /Users/fanthus/Desktop/vue-practice/dist/;\n        index index.html;\n    }\n}\n")])])]),e("blockquote",[e("p",[e("code",[n._v("nginx.conf")]),n._v(" 这个配置文件还是挺多东西的，这里不赘述，可以看官方的一些文档 "),e("a",{attrs:{href:"https://nginx.org/en/docs/beginners_guide.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("https://nginx.org/en/docs/beginners_guide.html"),e("OutboundLink")],1)])]),n._v(" "),e("p",[n._v("配置好之后需要重新加载一下 "),e("code",[n._v("/usr/local/bin/nginx -s reload")]),n._v(" 才会生效。这时候在 Vue 工程里 进行 build，构建完成后，直接在本地访问  "),e("a",{attrs:{href:"http://localhost:8080/",target:"_blank",rel:"noopener noreferrer"}},[n._v("http://localhost:8080/"),e("OutboundLink")],1),n._v("  就能看到最新的结果了。")]),n._v(" "),e("p",[n._v("之前一些公司的服务端部署差不多就是这个过程，只不过是加入了 CI/CD  让整个流程更加自动化了一些。但核心部署方式并没有实质性的改变。")]),n._v(" "),e("h2",{attrs:{id:"docker-部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-部署"}},[n._v("#")]),n._v(" Docker 部署")]),n._v(" "),e("p",[n._v("使用 Docker 是解决了标准化交付的问题。如果有多个机器需要配置的话，每个机器可能用的 "),e("code",[n._v("nginx")]),n._v(" 配置都不一样，比如目录配置。如果机器很多配置起来就很烦人，docker 就是解决这个问题的。我写过一篇 Docker 说明和基础使用的"),e("a",{attrs:{href:"https://www.notion.so/ab7ff88c6a7245a5a48bdb363ae489fa?pvs=21",target:"_blank",rel:"noopener noreferrer"}},[n._v("文章"),e("OutboundLink")],1),n._v("，可以建立一些基于 Docker 部署的背景信息。")]),n._v(" "),e("p",[n._v("Docker 部署其实只是在 "),e("code",[n._v("nginx")]),n._v(" 部署的基础上往前走了一步，将系统环境隔离为一个封闭可控的环境。这篇"),e("a",{attrs:{href:"https://www.notion.so/ab7ff88c6a7245a5a48bdb363ae489fa?pvs=21",target:"_blank",rel:"noopener noreferrer"}},[n._v("文章"),e("OutboundLink")],1),n._v("里 Docker 官方的样例里是通过运行 "),e("code",[n._v("serve -s build")]),n._v(" 这个命令起了一个简单高效的静态 web 服务器，所有的请求都会指向指定的网页。")]),n._v(" "),e("p",[n._v("我们这边的前端项目是 Nginx+Docker 的方式进行的部署。总的思路是将 nginx 官方镜像设置为此 Dockerfile 的基础镜像。然后替换 nginx 基础镜像中的配置文件，将本地或者打包好生成的 dist 目录（Vue 项目）拷贝到指定的 nginx.conf 指定的目录下，基本上镜像就可以按照这个流程构建。")]),n._v(" "),e("p",[n._v("镜像构建好之后，将镜像推到远端的 Docker 仓库，然后使用 K8S 的命令行工具进行发布。")]),n._v(" "),e("p",[n._v("总结这两种部署方式，我觉得 Docker 部署更适合比较大的业务，这种部署方式不关心具体部署后的环境是什么样子的，也很方便定位问题。如果只是在某个机器上部署的话，其实两者都无所谓，Nginx 部署的时候，写好自动化脚本，整个部署过程也很方便。")])])}),[],!1,null,null,null);e.default=a.exports}}]);