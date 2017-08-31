# node 发布计划

*2017-08-31*

![release plan](https://github.com/nodejs/LTS/raw/master/schedule.png)

node 主版本(semver-major release)是每隔6个月从主分支(master)上创建分支。每个奇数版本(v5,v7)在每年10月份创建，偶数版本(v6,v8)是在每年4月份创建。当一个奇数版本创建之后，最近的一个偶数版本会立即进入LTS维护计划，一直持续18个月。过了18个月后会有12个月的延长维护期。版本的生存周期规则如下：

* 奇数版本：每年10月份产生，到第二年4月份是current期，之后是2个月的维护期
* 偶数版本：每年4月份产生，到10月份是current期，之后是18个月的LTS期，之后是12个月的maintenance期。

处于不同的生命周期中，进行的更新是不同的：

* LTS期：bug fix, 安全更新, npm主版本更新，相关文档更新，某些性能改进及未来新特性兼容的更新
* maintenance期：严重bug fix,严重安全fix,文档更新

当前的node版本可以查看[schedule json](https://github.com/nodejs/LTS/blob/master/schedule.json)

