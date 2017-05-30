# npm
*2017-01-18*

npm(Node Package Manager)是node的包管理工具。官方对于包的定义是指可重用的代码组合，有时也叫模块(modules)，一个包就是一个目录，这个目录中有一个或多个文件，其中一个文件是package.json。npm的用途核心就是两个词“分享(share)”,“重用(reuse)”。

当我们谈到npm时，一般我们会关注以下三点

* [npm website](www.npmjs.com)  npm官方网站
* [npm registry](https://registry.npmjs.org/)  存储包含大家分享包的信息的大数据中心,这些数据会同步到网站上
* npm client      开发者用它将本地的包发布到npm registry上

## 由来

npm 是node第二继承人Isaac Z. Schlueter在2009年创造并维护，后来作为node的官方包管理工具并随node捆绑在一起。因node开源，npm也作为开源项目公布。现在npm的维护工作由Isaac Z. Schlueter协同Laurie Voss和Rod Boothby创办的npm有限公司负责。
## 安装

* npm 在node v0.10之后安装[node.js](https://nodejs.org/en/download/)会自动安装npm
* 还可通过下载安装 https://registry.npmjs.org/npm/-/npm-{VERSION}.tgz 
* 一般npm更新会比node更新频率高，所以可以执行命令升级

```shell
[sudo] npm install npm@latest -g
```

## 使用npm安装包
* 全局安装(globally) —— 若你想使用这个包作为命令行工具(CLI)，使用全局安装

   `npm install -g <package_name>`

* 本地安装(locally) —— 若你想在自己的模块中依赖这个包，使用本地安装，默认命令即可

  `npm install <package_name> `

  本地安装时，会在当前目录下的`node_modules`目录(如果没有会自动创建)解压包文件。若当前package.json中有声明当前包的版本信息，npm会依据版本语义规则安装包的版本，否则默认会安装包的最新版本。下面是详细的版本__语义规则__，详见[The semantic versioner for npm](https://docs.npmjs.com/misc/semver)

  对于发布者，当你想在npm registry发布你的包时，应该以1.0.0开始(很多人不遵守这条规则)，此外变更时应该遵循以下规则

  * 补丁版本(Patch release) 修补bug时或者其他小改动，增加版本号的最后一位，例如1.0.1
  * 次要版本(Minor release) 增加新功能不会破坏旧的功能，增加版本号的中间一位，例如1.1.0
  * 主要版本(Major release)  改动会破坏旧的功能，增加版本号的第一位，例如2.0.0

  对于使用者，你可以在package.json 文件中指明哪些更新您的应用程序可以接受，规则详见上文链接


## package.json

声明你的包的很多元数据信息，最少包含的元字段是name和version。详细的元字段信息见[package](https://docs.npmjs.com/files/package.json)
* name 小写英文，一个词，不能有空格，可以使用破折号和下划线
* version 遵循上文说的语义规则
* description 包的描述信息，因为会影响npm search，当没有设置这个字段时，npm默认会选取README.MD/README的首行文字作为描述
* dependencies 生产环境依赖包，使用 `--save` 安装参数可自动添加
* devDependencies 开发和测试环境依赖包，使用 `--save-dev` 安装参数可自动添加

npm初始化项目时可以和用户交互填写这些元数据`npm init`,有些时候我们只是想很快的初始化文件，而不想立马填写元数据信息，可以使用--yes(-y)参数来生成默认的配置，达到快速初始化的目的

## 使用中其他命令

* 更新包 在package.json所在目录执行 `npm update` 
* 查看是否有更新包`npm outdated`
* 卸载包`npm uninstall/remove <package_name>`
* 全局安装卸载添加 `-g`参数,例：`npm uninstall -g express`
* 更新全局安装包 `npm install -g <package_name>`

## 发布包

首先要创建npm registry的用户，如果没有需要创建一个`npm adduser`如果你已经在website上有了一个账号可以使用`npm login`在客户端存储你的凭证信息,如果你已经登陆了，可以使用`npm who `来查看登陆账号。

然后执行`npm publish`来发布包，需要注意的是除了.gitignore和.npmignore声明的文件外其他一律会包含在包里，

发布之后可以访问 https://npmjs.com/package/<package_name>来检查发布结果。

更新已经发布过的包时首先使用`npm version <update_type>`更新包中package.json的version信息。这里的update_type字段可以是patch, minor, major。除此之外这个命令还会创建一个git tag，这里需要注意以下。

##  npm编码风格

* 每行代码长度少于80个字符

* 2个空格缩进

* 大括号与需要他的代码在同一行,而不是另起一行，如果一个需要大括号包裹的块在一行上则不要写大括号，如果不是就要写

  ```
  ~ function(){
  ~ if (foo) bar()
  ~ while (foo) {
      bar()
    }
  ```

* 分号，出了以下4种情况不要使用

  * `for (;;)`
  * `while (something) ;` 这样的空循环，但你应该避免这样写
  * `case 'foo': doSomething(); break`
  * `(` , `[` , `+` , `-` 在首行的时候，为了阻止解析器认为它是一个函数或属性

  依据这个原则的正规的代码格式如下：

  ```
  ;(x || y).doSomething()
  ;[a, b, c].forEach(doSomething)
  for (var i = 0; i < 10; i ++) {
    switch (state) {
      case 'begin': start(); continue
      case 'end': finish(); break
      default: throw new Error('unknown state')
    }
    end()
  }
  ```

* 逗号前置，如下

  ```
  var magicWords = [ 'abracadabra'
                   , 'gesundheit'
                   , 'ventrilo'
                   ]
    , spells = { 'fireball' : function () { setOnFire() }
               , 'water' : function () { putOut() }
               }
    , a = 1
    , b = 'abc'
    , etc
    , somethingElse
  ```

* 使用单引号，防止escaping

* 除了函数调用外，所有的`(`前加一个空格；不要在行尾加空格；不要对空行缩进；不要用没有意义的空格；

* 尽量使用命名函数

* 尽量使用异步式编程，`callback`回调函数要作为参数的最后一个，callback的第一个参数应该是`Error`or`null`；永远不要在回调中抛出异常，这比不写都糟糕，你可以尝试传一个Error message来解决问题。

* 永远使用`new Error` 的形式生成Error message，不要只传一个字符串错误信息。

* 清除没用的logs。一直重复打印日志没有任何意义。当有错误发生时才应该打印日志

* 使用小驼峰`lowerCamelCase`命名变量；使用大驼峰`UpperCamelCase`命名Class;使用连字符号`all-lower-hyphen-css-case`命名文件名或config键名;使用`CAPS_SNAKE_CASE`形式命名常量

* 如果一个变量是Boolen类型那它永远只能是`true/false`,不要给他设置成0;移除一个变量要把这个变量设为null；永远不要把一个变量定义成undefined

## npm scripts

阮大已经总结好[npm scripts 使用指南](http://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)

## npm CLI

常用命令 

```shell
npm adduser // 注册npm registry用户
npm config set <key> [<value>]
npm config delete <key>
npm config list
npm config edit
npm init    // 初始化项目
npm install // 安装依赖
npm ls      // 同名list，la,ll
npm outdated  // 检查更新
npm publish   //发布
npm uninstall
npm whoami
```

## configuring npm

npm 可以从很多地方读取配置信息，读取的优先级顺序如下：

* 通过命令行读取 

  ```shell
  npm --foo bar  //set foo to bar
  ```

* 环境变量

  设置前缀‘npm_config_’的环境变量

  ```shelll
  npm_config_foo=bar
  ```

* .npmrc文件

  * 存放在项目根目录的.npmrc文件
  * 存放在用户根目录下的.npmrc. windows下是%USERPROFILE%/.npmrc,Linux下是$HOME/.npmrc
  * 全局.npmrc文件，node全局.npmrc文件，windows是%APPDATA%/etc/.npmrc,Linux 是$PREFIX/etc/.npmrc
  * npm内置的.npmrc
  * npm默认配置。你可以通过npm config ls -l 查看默认配置

## links

* [npm docs](https://docs.npmjs.com/)
* [npm doc in chinese](http://coloration.cc/npmjs-documentation/)