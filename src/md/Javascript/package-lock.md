# package-lock.json

*2017-08-31*

Package-lock.json 文件会在node_modules和package.json 文件更新时更新，它的作用是准确描述生成的依赖树，使用它能够保证在以后的每次安装依赖时能够得到唯一的依赖树结构而不管中间的依赖关系升级。

这个文件被强烈建议提交到版本控制库里，这样做的好处有：

* 准确描述依赖树结构，使得团队成员，部署工具，持续集成工具每次安装依赖都能得到唯一的结果。
* 可以避免上传node_modules目录到仓库中。
* 可以通过package-lock可视化的查看依赖树
* 可以帮助npm跳过重复性检查来安装依赖，来提高再次安装的速度。

请注意这个package-lock.json 不能随着包发不到npm服务器上，如果你要发布可以使用npm-shrinkwarp.json，这个文件盒package-lock.json 是一样的功能，只是可以发布。如果npm-shrinkwarp.json和package-lock.json同时存在，package-lock.json会被忽略。

## 锁定原理

使用原来的package.json安装依赖会出现以下问题：

* 不同版本的npm 安装依赖的算法不同，造成安装依赖的结果树不同
* 直接引用的依赖版本更新后，你安装后再次安装时会安装更新版本的依赖，造成两次安装依赖版本不同
* 一个依赖的依赖版本更新了，就会安装新的版本，即使你声明了准确的版本号如：1.2.3
* 你使用的注册中心(registry,比如阿里registry)不再可用了，或者它允许重复版本，或者同一版本号下存在多个版本的情况，会出现问题

举个简单例子，A依赖B依赖C，A可以设置B的固定版本号来约束B的版本不变化，但他对C的版本是无法控制的。也就是说如果C版本升级了(这个升级是在B声明允许的情况下)，那么A再次安装时就会安装新版本的C，并且无法控制这个过程。

这时就需要package-lock.json了

Package-lock.json 的原理是：

* Package-lock.json 确切描述树结构，当安装时如果package-lock.json存在就按描述安装，如果不存在就按正常的安装方式安装
* 当整个树走完了剩下的依赖按照普通的方式安装

当你执行npm命令时只要命令会修改node_modules或package.json，就会更新package-lock.json。



参考：

[package-lock.json](https://docs.npmjs.com/files/package-lock.json)

[npm-package-lock](https://docs.npmjs.com/files/package-locks)