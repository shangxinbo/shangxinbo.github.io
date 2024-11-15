

多久能看到结果
有些几小时能生效，有些需要几个月才能生效。一般来说，您可能需要等待几周的时间来评估您的工作是否对 Google 搜索结果产生了有益影响


site:运算符
查询是一个搜索运算符，您可以使用它请求来自运算符中指定的特定网域、网址或网址前缀的搜索结果

| 实例 |结果 |
|--|---|
|site:example.com|	仅显示来自 example.com 网域（www.example.com 和 recipes.example.com）的结果。|
|site:https://www.example.com/ramen tsukemen |	显示包含以 https://www.example.com/ramen 开头的网址并与 tsukemen 一词相关的网页的结果。|

https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=zh-cn#promoting


搜索要素

Googlebot  未被屏蔽 robots.txt
网页正常运行   http 200
网页包含可编入索引内容


搜索引擎运作方式

抓取：Google 会使用名为“抓取工具”的自动程序从互联网上发现各类网页，并下载其中的文本、图片和视频。

索引编制：Google 会分析网页上的文本、图片和视频文件，并将信息存储在大型数据库 Google 索引中。

呈现搜索结果：当用户在 Google 中搜索时，Google 会返回与用户查询相关的信息。


抓取工具
googlebot
在抓取过程中，Google 会使用最新版 Chrome 渲染网页并运行它找到的所有 JavaScript，此过程与浏览器渲染您访问的网页的方式类似。渲染很重要，因为网站经常依靠 JavaScript 将内容引入网页，缺少了渲染过程，Google 可能就看不到相应内容。
不同的抓取工具会有不同的抓取令牌（UA）
会有不同的UA作用不同，常用googlebot,指定用户代理再robots.txt

抓取速度会根据算法计算，不会过于频繁的抓取，减少服务器的带宽压力，其中更新频率可能会影响抓取频率
主动减慢抓取速度返回500，503,429这类非200状态码，谨慎，可能会被移除索引

googlebot 通过http1.1和http2

googlebot 抓取文件内容只抓取前15M内容，编入索引也是这前15M内容




google搜索使用常青chrome（最新版chrome）执行JavaScript，可支持我们实现的图片懒加载能力

https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics?hl=zh-cn

这个过程可能会花费几秒中时间,googlebot会再次解析html
![image](https://developers.google.com/static/search/docs/images/googlebot-crawl-render-index.png?hl=zh-cn)


googlebot会主动缓存内容，所以类似css和js这种打包最好带上hash值，以穿透缓存



服务端渲染方案
预渲染方案
prerender-spa-plugin 主体程序在18年左右就已经停更了，借助webpack

模拟无头浏览器访问站点服务端生成静态站点，坑多
再nginx层做ua判断如果发现是爬虫过来则返回渲染的html,robots,sitemap.xml，
路由fallback http状态码


https://developers.google.com/search/blog/2022/06/googlebot-15mb?hl=zh-cn


https://cn.vuejs.org/guide/scaling-up/ssr.html#why-ssr
https://cn.vuejs.org/guide/extras/ways-of-using-vue

https://asperbrothers.com/blog/vue-seo/#anchor-1

https://docs.pingcode.com/ask/ask-ask/171515.html


https://www.humanlevel.com/en/blog/seo/how-does-javascript-and-ajax-affect-google-indexing.html

编入索引


因为googlebot现在也是全新的chrome无头，所以预渲染的方案没有什么价值

beforemount

多语言

404