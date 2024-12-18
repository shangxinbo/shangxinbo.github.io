# 低代码

低代码旨在用户无需大量代码即可构建应用程序。按照最初的定义低代码是用可视化可拖拽的视图化编辑创建应用平台，在这个过程中代码量要比传统开发要少很多甚至无代码。

其实根据低代码这个概念，上边的定义是不够准确的，任何形式的降低代码量的方式都可以称作低代码，我所理解的低代码形式：
1. 一站式低代码平台，可以在平台上可视化的操作进行应用构建，比如阿里的[低代码引擎](https://lowcode-engine.cn/index)
2. 集成在现有系统中的低代码能力，比如在现有OA系统中可以配置表单，图标等信息模块
3. 可视化编辑器插件或者开发工具插件，比如微信小程序的开发工具，HBuilder这些

低代码最根本解决的问题低成本高效性，那么低代码是不是真的能做到低成本和高效呢？

因为个人对低代码平台应用的经验少，目前以我的经验看不一定，要看应用场景。

对于频繁迭代更新的业务场景，低代码反而会变得低效，这时候不只牵涉到使用低代码平台的人工作，还要牵涉到开发低代码功能模块的开发人员工作，也就是迭代产品需求时要跟着迭代低代码平台的能力。迭代更新低代码平台的工作量就会设计到通用性考量各种测试的工作，正常的工作留下来反倒更花费时间。

有些低代码平台为了解决上述问题，会赋予低代码模块自定义原生代码的能力，也就是半自动半手动的代码，这样确实可以解决问题，但在实际操作中可能会出现分工不明确的问题，比如本来低代码平台是交给产品经理那些代码小白使用的，这个时候你让他们写一部分代码逻辑，他们显然是不能的，只有把这部分工作交给前端开发工程师，但是对于前端开发工程师而言，你让它用低代码工具生成代码再在此基础上做二次调整或集成有时候还不如让他纯手工写代码。

## 那我们如今应该如何使用低代码

### 一站式低代码平台这种形式的使用局限
这种平台的搭建是非常考研架构能力和时间成本以及通用性设计等等能力。所以构建一个低代码平台是前期要投入打量的开发和时间成本，我们在使用时要认真考虑清除构建平台额成本和使用平台而减少的成本，比如说我们花了2个月的时间构建出一套低代码平台，它能让我们未来1年内的活动页不用代码即可构建，那我们是可以接受的。如果用了1个月发现我们平台满足不了我们日常迭代的需求，需要进一步升级低代码平台，那这样我们无法接受。

有很多企业为了使用低代码平台而放弃需求的定制化，当一个工具让一个需求不得不因为工具而严格功能时，这个工具的价值就需要重新考量了。

一站式低代码平台的使用对象最主要的是不会代码的用户，在这点上，有些概念和使用上需要对这部分用户进行培训，这也是一站式低代码平台的一个成本方面。

所以一站式低代码平台更适配业务逻辑简单，更新迭代频率很低的业务需求，比如建立站外分享活动页。

### 目前使用场景更有价值的是第二种低代码形式

集成在现有系统的低代码能力，比如一些OA系统，管理员可以配置工资单的页面显示，或者考勤，发布及时的消息通知这些能力。
针对模块低代码方案，边界清晰，功能迭代频率会降低很多，可以保证一次开发后很久效用

### 第三种方案大部分是针对开发者的

这种形式虽然是方便和简化开发者工作的，但往往开发者并不一定会喜欢这种低代码能力。因为大部分低代码插件生成的代码都是开发者自己技术栈中的代码，比如HBuilder生成的代码都是JavaScript，但前端工程师明明可以自己写JavaScript，你说我快速帮你生成了，但最终代码的负责人还是开发者自己，开发者也需要去阅读和修改生成的代码。你要知道自己写代码和该别人的代码是两种体验。
所以这种方式往往是开发工具自己具备的能力，但开发者不一定使用。 