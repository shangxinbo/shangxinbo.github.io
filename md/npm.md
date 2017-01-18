# npm
*2017-01-18*

npm，即Node Package Manager，是node的包管理工具。官方对于包的定义是指可重用的代码组合，有时也叫模块(modules)，一个包就是一个目录，这个目录中有多个文件，其中一个文件是package.json。npm的用途核心就是两个词“分享(share)”,“重用(reuse)”。

虽然npm开始是被用于node的包管理，但慢慢发展之后npm的包已经不局限于node服务器端的代码包，他还包括一些命令行使用的包，以及浏览器端使用的包。当我们谈到npm时，一般我们会关注以下三点

* [npm website](www.npmjs.com)  npm官方网站
* [npm registry]()  存储包含大家分享包的信息的大数据中心,这些数据会同步到网站上
* npm client      开发者用它将本地的包发布到npm registry上

## 由来
npm 是node第二继承人Isaac Z. Schlueter在2009年创造并维护。后来作为node的官方包管理工具并随node捆绑在一起。因node开源，npm也作为开源项目公布。2014年Isaac Z. Schlueter协同Laurie Voss和Rod Boothby创办npm有限公司，坐落于加利福尼亚奥克兰市中心,他作为CEO。这个公司主要做的3件事情
* 提供npm registry 源维护服务
* 为个人和企业安全使用包构建工具和操作
* 为社区创造新的工具和服务

##安装
* npm 在node v0.10之后就被捆绑在node中作为node官方内置包管理器，所以安装[node.js](https://nodejs.org/en/download/)会自动安装npm
* 还可通过下载安装 https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz 
* 一般npm更新会比node更新频率高，所以可以执行命令升级

```
[sudo] npm install npm@latest -g
```

## 安装一个npm包
* 全局安装(globally) —— 若你想使用这个包作为命令行工具(CLI)，使用全局安装

   ```npm install -g <package_name>```

* 本地安装(locally) —— 若你想在自己的模块中依赖这个包，使用本地安装，默认命令即可

  ```npm install <package_name> ```

  本地安装时，会在当前目录下的```node_modules```目录(如果没有会自动创建)解压包文件，这时，若你的当前目录中没有package.json，默认会安装包的最新版本；若存在package.json文件，npm会依据版本语义规则安装包的版本，下面是详细的版本语义规则，详见[The semantic versioner for npm](https://docs.npmjs.com/misc/semver)

对于发布者的规则，当你想在npm registry发布你的包时，应该以1.0.0开始，虽然很多人不遵守这条规则，此外变更应该遵循以下规则

* 补丁版本(Patch release) 修补bug时或者其他小改动，增加版本号的最后一位，例如1.0.1
* 次要版本(Minor release) 增加新功能不会破坏旧的功能，增加版本号的中间一位，例如1.1.0
* 主要版本(Major release)  改动会破坏旧的功能，增加版本号的第一位，例如2.0.0

对于使用者的规则，你可以在package.json 文件中指明哪些更新您的应用程序可以接受,如果你可接受的包版本是最小1.0.4,

* 补丁版本 1.0 or 1.0.x or ~1.0.4


* 次要版本 1 or 1.x or ^1.0.4
* 主要版本 * or x

##package.json
声明你的包的很多元数据信息
* 可以对你项目中依赖的模块做一个总体的描述
* 可以指定你要依赖的包的版本，可以使用语义规则
* 方便你分享你的模块

最少包含的元字段是name和version。详细的元字段信息见[package.json](http://mujiang.info/translation/npmjs/files/package.json.html)

* name 小写英文，一个词，不能有空格，可以使用破折号和下划线
* version 遵循上文说的语义规则
* description 包的描述信息，因为会影响npm search，当没有设置这个字段时，npm默认会选取README.MD/README的首行文字作为描述
* dependencies 生产环境依赖包，使用 ```--save``` 安装参数可自动添加
* devDependencies 开发和测试环境依赖包，使用 ```--save-dev``` 安装参数可自动添加

npm初始化项目时可以和用户交互填写这些元数据```npm init```,有些时候我们只是想很快的初始化文件，而不想立马填写元数据信息，可以使用--yes(-y)参数来生成默认的配置，达到快速初始化的目的

## 使用中其他命令

* 更新包 在package.json所在目录 ```npm update``` 
* 查看是否有更新包```npm outdated``````
* 卸载包```npm uninstall <package_name>```
* 全局安装卸载添加 ```-g```参数,例：```npm uninstall -g express```
* 更新全局安装包 ```npm install -g <package_name>```

## 发布包

首先要创建npm registry 的用户，如果没有需要创建一个```npm adduser```如果你已经在website上有了一个账号可以使用```npm login```在客户端存储你的凭证信息。

然后执行```npm publish```来发布包，需要注意的是除了.gitignore和.npmignore声明的文件外其他一律会包含在包里，

发布之后可以访问 https://npmjs.com/package/<package_name>来检查发布结果。

更新已经发布过的包时首先使用```npm version <update_type>```更新包中package.json的version信息。这里的update_type字段可以是patch, minor, major。除此之外这个命令还会创建一个git tag，这里需要注意以下。







* [About npm](https://docs.npmjs.com/company/about)
* [npm doc in chinese](http://coloration.cc/npmjs-documentation/)
