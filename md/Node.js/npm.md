# npm

Node Package Manager
package就是指可重用的代码组合，一个包就是一个目录。

我们一说到npm本来是要包含3个内容
* CLI npm 命令行工具
* www.npmjs.com 网站，可以查看和搜索已经注册的包
* registry.npmjs.org 包注册地址


npm 的registry 因为翻墙的原因，很多人推荐用镜像，但是镜像有两个问题，
1.要保证团队里的其他人也都要作镜像代理
2.不能保证安装的包是最新版，当然这个问题可以通过一些方法解决掉

但我们这里只讨论命令行工具这部分

## 其他包管理工具
yarn 通过一些并行安装和缓存措施保证安装依赖的速度提高
pnpm 设计初衷是为了节省磁盘空间，他使用硬链接和符号链接来共享依赖项，避免重复安装相同的包，从而节省打量磁盘空间
bun 是一个集成化的前端JavaScript运行时，它也对标npm的包管理工具

目前包管理工具无非就是包管理的功能，至于安装的速度和磁盘占用的问题都是项目进行中非常无足轻重的事情，对于目前的包管理器还没有革新到突破性的地步，如果开发借助Node.js的能力，最简单最直白最官方的方式还是使用npm
虽然理论上node内置的npm版本不是最新的，但因为npm日渐稳定，更新频率也没有那么高，除非大版本更新阶段，为了尝试新的功能特性可以用最新版本的npm覆盖默认的npm，
corepack

npx 软件包运行期
* 运行本地包：npx 允许你直接运行项目中的本地安装的包，而不需要在 node_modules/.bin 目录中查找和手动调用。
* 执行远程包：你可以用 npx 执行未安装的 npm 包，npx 会自动下载并运行最新版本的包。
* 避免全局安装：使用 npx 可以避免全局安装不常用的工具，保持环境的整洁。
* 版本控制：你可以指定要使用的包的版本，从而避免与全局或其他项目中版本冲突。
npx的执行原理
1. 解析命令：当你使用 npx <package> 时，npx 首先检查该包是否在项目的 node_modules 目录中。
2. 执行本地包：如果找到了，它将执行该包。
3. 下载并执行远程包：如果没有找到，npx 会从 npm 仓库下载该包的最新版本，并将其临时安装到一个目录中，然后执行。
4. 清理临时文件：执行完毕后，npx 会自动清理临时文件（如果是远程下载）。


Node.js虽然安装时会自带npm包管理工具，但从种种迹象看Node.js团队并没有对包管理工具作全心的投入，1是npm作为Node.js的官方包管理工具，但一直被其他包管理工具挑衅，却无动于衷，而且本身使用corepack来支持其他包管理工具，还有Node.js安装进程安装的npm在本地的的文件目录会有权限问题，造成当安装全局packages时会出现权限问题
所以虽然npm 在需求上已经满足，但我们不排斥使用其他包管理工具



## npm语义安装包

 npm会依据版本语义规则安装包的版本，否则默认会安装包的最新版本。下面是详细的版本__语义规则__，详见[The semantic versioner for npm](https://docs.npmjs.com/misc/semver)

  对于发布者，当你想在npm registry发布你的包时，应该以1.0.0开始(很多人不遵守这条规则)，此外变更时应该遵循以下规则

  * 补丁版本(Patch release) 修补bug时或者其他小改动，增加版本号的最后一位，例如1.0.1
  * 次要版本(Minor release) 增加新功能不会破坏旧的功能，增加版本号的中间一位，例如1.1.0
  * 主要版本(Major release)  改动会破坏旧的功能，增加版本号的第一位，例如2.0.0

  对于使用者，你可以在package.json 文件中指明哪些更新您的应用程序可以接受，规则详见上文链接


## package.json
https://docs.npmjs.com/creating-a-package-json-file

声明你的包的很多元数据信息，最少包含的元字段是name和version。
* name 小写英文，一个词，不能有空格，可以使用破折号和下划线
* version 遵循上文说的语义规则
* main 默认是index.js，当你发布成npm模块时模块的默认入口文件
* description 包的描述信息，因为会影响npm search，当没有设置这个字段时，npm默认会选取README.MD/README的首行文字作为描述

npm初始化项目时可以和用户交互填写这些元数据`npm init`,有些时候我们只是想很快的初始化文件，而不想立马填写元数据信息，可以使用--yes(-y)参数来生成默认的配置，达到快速初始化的目的

## 发布包

首先要创建npm registry的用户，如果没有需要创建一个`npm adduser`如果你已经在website上有了一个账号可以使用`npm login`在客户端存储你的凭证信息,如果你已经登陆了，可以使用`npm who `来查看登陆账号。

然后执行`npm publish`来发布包，需要注意的是除了.gitignore和.npmignore声明的文件外其他一律会包含在包里，

发布之后可以访问 https://npmjs.com/package/<package_name>来检查发布结果。

更新已经发布过的包时首先使用`npm version <update_type>`更新包中package.json的version信息。这里的update_type字段可以是patch, minor, major。除此之外这个命令还会创建一个git tag，这里需要注意以下。

## npm scripts

npm 允许在package.json文件里使用scripts字段定义脚本命令

```json
{
  // ...
  "scripts": {
    "build": "node build.js"
  }
}
```

每一组key/value值对应一条脚本命令。你可以在命令行下执行`npm run <script>`来运行设置的脚本。这里npm run的脚本实质是新建一个shell，几乎所有的shell命令都可以在这里作为脚本命令，比较特别的是当执行脚本时，新建的shell会把node_modules/.bin子目录加入到环境变量（PATH变量）中，执行结束后PATH变量恢复原样，这意味着当前目录node_modules/.bin子目录中的所有脚本都可以直接调用而不需要加上路径。

当执行多条脚本命令时可以使用`&`符号并行执行

`npm run scrit1 & npm run script2 //script1 和script2 同时执行`

也可使用`&&`继发执行

`mpm run script1 && npm run script2 //script1 执行完后再执行script2`

每个脚本有两个钩子`pre`和`post`,比如你要在build脚本执行前执行另一个脚本在执行后执行另一个脚本

```json
{
  "prebuild":"script1",
  "build":"script2",
  "postbuild":"script3"
}
```

但需要注意，双重的pre/post无效，如preprebuild是无效的

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
