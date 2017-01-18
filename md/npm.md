# npm 及相关
*2017-01-18*

npm是node的包管理工具，全称Node Package Manager。npm 在node v0.10之后就被捆绑在node中作为node官方内置包管理器。
包： 官方指javascript零碎的代码，有时也叫模块(modules).一个包就是一个目录，这个目录中有多个文件，其中一个文件是package.json。
当你谈到npm时你可能会谈到其中之一
* www.npmjs.com npm的网站
* npm registry 一个包含人们分享的包的信息的大数据库
* npm 客户端，开发着用它将本地的包发布到registry上

## history
npm 是node第二继承人Isaac Z. Schlueter 在2009年创造并维护。因为node的开源，npm也作为开源项目公布。目的是方便javascript开发者分享模块。2014年Isaac Z. Schlueter协同Laurie Voss和Rod Boothby创办npm，Inc有限公司，坐落于加利福尼亚奥克兰市中心。这个公司做的3件事情
* 提供npm registry 源服务
* 为个人和企业安全使用包构建工具和操作
* 为社区创造新的工具和服务
npm 最新版本4.1.1

##install
* 随[node.js](https://nodejs.org/en/download/)安装
* 下载安装 https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz 

## UPDATE 
```
[sudo] npm install npm@latest -g
```

## install package
全局安装
你需要使用你的包作为命令行工具(CLI)时，使用全局安装，命令 ```npm install -g <package_name>```
本地安装
你要安装的包需要在你自己的模块中使用require依赖时，使用本地安装，default命令```npm install <package_name> ```,执行安装命令后会在你的当前目录下的```node_modules```目录(如果没有会自动创建)，届时你可检查这个目录下是否有你安装的包文件来证明是否安装成功
当你的本地目录没有package.json时会安装最新版的包文件，如果存在package.json npm会依据让人满意的规则安装包的版本，下面是npm的版本语义规则
发布的规则
* 当你想npm registry发布你的包时版本是从1.0.0开始，虽然很多人不是遵守这条规则
* 补丁版本(Patch release) 修补bug时或者其他次要版本，增加你的版本号的最后一位，例如1.0.1
* 次要版本(Minor release) 新的功能不会破坏旧的功能时，增加你版本号的中间一位，例如1.1.0
* 主要版本(Major release) 所做的改动会改变旧的功能时，增加你版本号的第一位，例如2.0.0
使用规则(以你的版本为1.0.4为例)详见[The semantic versioner for npm](https://docs.npmjs.com/misc/semver)
* 补丁版本 1.0 or 1.0.x or ~1.0.4
* 次要版本 1 or 1.x or ^1.0.4
* 主要版本 * or x

##package.json
包的很多元数据
* 可以对你项目中依赖的模块做一个总体的描述
* 可以指定你要依赖的包的版本
* 方便你分享与他人
最少包含的元字段
* name 小写，一个词不能有空格，可以使用破折号和下划线
* version 遵循上文说的版本规则
* dependencies 生产环境依赖包 使用 --save 安装参数
* devDependencies 开发和测试环境依赖包 使用 --save-dev 安装参数
可以使用npm init来创建元数据，可以添加--yes(-y)参数来生成默认的配置
NOTE: 当你没有设置description 字段时，npm默认会选取README.MD/README的首行文字作为描述


* [About npm](https://docs.npmjs.com/company/about)
