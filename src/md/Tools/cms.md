# 内容管理系统

* 要解决一键式建站的需求；
* 要有管理后台和前台开发的必备条件；
* 要在自己能接受的技术栈范围内（Node.js 和 PHP）。受此限制，有些 CMS 虽然功能强大，但一旦遇到坑则无计可施；
* 要有很好的模型结构，支持分类、标签、可自定义字段等；
* 要以开源项目为基础支持二次开发，对于商业或以商业为目的的免费版本不做探讨；
* 要有很好的扩展性。

### WordPress （推荐）

WordPress 是强耦合式 CMS，前后台在一套代码中。
1. 诟病的响应速度等性能问题，在清楚了它的 hook 插件模式之后可以尽量避免。最近几个项目的性能问题已经可以忽略不计，再出现性能问题时要查找自己代码的原因。
2. 关于插件，虽然插件丰富，但能用的插件还是不够多：
   * 很多插件的版本更新频率跟不上 WordPress 主程序的版本迭代；
   * 使用量较大的优秀插件一般会分为免费版和收费版，为了收费版的销量，免费版的功能可能会被阉割，导致很多受众广泛的插件无法免费使用；
   * 插件的文档参差不齐，使用一个插件需要阅读其文档。正常的插件文档应该简单易懂，但部分文档结构不清晰，造成二次开发困难；
   * 插件生态会随着业务功能使用范围的缩减而逐级递减，比如使用一个 WooCommerce 的插件时，用户量可能只有几百，遇到问题的概率较高。
3. 如果长期使用 WordPress，会发现它现在已经转变成非二次开发类的 CMS，受众完全倾向于普通用户，不再是开发人员。现如今开发人员投入的成本与收益已经不成比例。

纵然 WordPress 现在的问题有很多不友好，但到目前为止，如果要推荐一款建站 CMS，它依然是首选。

### Strapi（无头 CMS 中推荐）
headless 无头，意指没有用户界面的软件
转了一圈回头看，Strapi 是唯一一个可以花时间深入研究的 headless CMS：
* 用户量和 star 数量是最高的 headless CMS；
* 扩展性和可配置性较强；
* 前后台分离，前端可以发挥工程师的价值，编写形式多样的可视化内容。

可配置性要比ghost要强很多，按它的内容类型管理器和插件机制理论上可以实现比较复杂的功能，但是这种类似于数据库管理器的东西其实真的会降低开发成本吗
那我们看strapi对于我们纯Node.js搭建后台系统有哪些优势
* 有现成的后台管理系统，虽然这个管理系统不算是企业级的，除此之外我也没有什么其他的槽点，功能点简洁无冗余。
* 有用户角色和登录校验等功能
* 现成的接口实现，虽然我们可能需要聚合一下
* 有多语言支持，以及虽然不算大，但是也有一定作用的插件系统，可以节省开发时间

综合看，如果受够了 WordPress 生态的问题，这是一款非常推荐尝试的 CMS。
不过要清楚它的试用场景，无头CMS只提供数据管理部分，前端显示部分需要新的项目搭配，同时要配置跨域请求，相比于WordPress的二次开发，要做的工作相对多一些


不管怎样，可拓展性和二次开发成本是成反相关的，这个要做到平衡可以按场景决策使用哪个方案
Wordpress不管怎么说对于私人项目都是妥妥的首选
Strapi 可以作为公司内部系统使用，对于c端用户的产品尽量不用，私人项目的话对于后台管理功能薄弱的客户可以使用，或者要求跨平台交付产品的能力时是比较好的方案。

### 不推荐的

* **TinaCMS & Ghost**：都是商业化的免费版，功能单一，其受众应该是个人博客类型的站点，不太适合企业级开发。它们属于 Node.js 生态，技术较新，基本没有技术攻坚点。这类 CMS 的存在价值在于让作者更专注于写作，但我个人更倾向于通过文档编写内容，因此这类工具不适合我。**不推荐理由**：功能单一，不适合企业级商业化二次开发。

* **Joomla**：功能强大，但概念较多，二次开发成本非常大，还不如找个团队前后台各自开发的成本低。**不推荐理由**：技术熟练成本太高。

* **Halo**：目前很活跃，技术类型看似很新。它看似是耦合 CMS，但实际上使用 Java + 前端的混合模式开发，使用 Docker 作为集成环境。在我看来，一个 CMS 要跨越多个技术体系来实现二次开发，那么这个 CMS 就没有什么价值。我不清楚这个 CMS 的受众群体，可能不适合个人开发者，也不适合经验丰富的团队。开发者文档基本只讲一些皮毛，一旦触及核心的改动将无从下手。**不推荐理由**：国内 CMS 方面已有类似产品，文档不行，因此技术产品形态上有问题。

* 还有一些其他用户量不够，一眼看过去就能发现很多问题的 CMS。
* 早年使用过的帝国 CMS 和织梦 CMS，捞够钱后就不再更新，技术上已经落后，其商业价值与我无关。
