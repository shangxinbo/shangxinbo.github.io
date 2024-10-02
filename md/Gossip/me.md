# 尚新波

男 1988.7.1  

河北农业大学 本科 计算机科学与技术专业 2012年毕业

户籍：河北廊坊霸州

常用邮箱：[314911714@qq.com](mailto:314911714@qq.com)

常用电话：1861211498

工作年限：12年

我的主页 [https://shangxinbo.github.io](https://shangxinbo.github.io)  
GitHub [https://github.com/shangxinbo](https://github.com/shangxinbo) 

## 嫌太长这里有个简略版
- 2012年毕业起从事前端工作，经历过 jQuery、Backbone.js、Angular 时代，现 Vue 生态用过 7 年，React 生态用过 3 年，可借助 Node.js 或 PHP 做全栈开发，熟悉 Koa、Express 和 Laravel，熟悉 MySQL，小项目运用过 MongoDB，在大流量场景中运用过 Redis 和 Memcached。
- 大前端概念里基本都有涉略，CSR/SSR，Webapp/NativeApp/HybridApp，早年有用过 Cordova、AppCan 等 hybrid 方案，现如今有过 React Native 开发经验，有过 Uniapp 开发小程序经验。
- 前端独立工程化有丰富的经验，熟悉 Nginx 以及 Node.js 的部署，使用过包括 Jenkins 在内的多种 CI/CD 持续集成化方案，对于 K8s、Kafka、Kibana 等工具有过使用经验。
- 常见的前端解决方案，比如响应式、多媒体、动画以及 Canvas、WebSocket 等有着丰富的经验。
- 熟悉软件开发模式，尤其敏捷式开发，熟悉包括 Jira 在内的项目管理工具。
- 计算机专业，数据结构、算法和网络协议这些都没有问题，熟悉浏览器 HTTP 层的实现，熟悉以 Chrome 为准的浏览器渲染引擎的工作原理。
- 喜欢安静的 coding。

## 工作经历与技能成长
### 2023.01.01 ~ 至今 自由职业

期间持续从事技术类项目，列举 3 个说明，除以下项目还接手过微信小程序和 Electron 做的一些私人工具类项目，可以参见 GitHub 主页。

1. 个人独立完成简要眼镜店管理
   
    线上地址 [https://tuzki.cc/](https://tuzki.cc/) 
    
    GitHub 项目：[https://github.com/shangxinbo/glass](https://github.com/shangxinbo/glass)

    技术栈：Nuxt.js + Vant UI，服务端通过 serverMiddleware + MySQL（先 MongoDB 后为 MySQL）
   - 全栈式开发，包括数据库设计、前后端交互数据接口、MySQL 调用。
   - 独立部署使用 [https://buddy.works/](https://buddy.works/) 持续集成化部署项目，Nginx + PM2 配置。
   - 日常维护工作，数据库自动备份脚本、日志分割保存、自动化定期发送数据汇总邮件脚本。
   - 系统内存优化等运维工作。

2. 基于 Cockpit 二次开发运维管理平台
   
    线上测试地址：[https://116.204.86.81:9854/](https://116.204.86.81:9854/)

    技术栈：Esbuild + React + PatternFly + Warewulf Shell 
   - 以 React 编写核心逻辑，通过 Cockpit 提供的 Socket API 调用系统层接口，实现视图化的 Linux 命令行工具。
   - 包括节点管理、文件目录的拖拽复制、集群管理等模块。
   - ESLint 9 的配置，Esbuild 的打包配置。

3. AI 写作的平台 Dream Ink Flora
   
    技术栈：Vue3 Composition API + TypeScript + Element Plus + vue-router + Pinia，包括 SCSS 等。
   - 前端独立工程化，Vite 本地开发服务器，生产 Nginx 代理解决跨域。
   - 移动端和 PC 端两套视图调用核心公共化模块，响应式，移动端处理。
   - WebSocket 对接 AI 模型输出，API 调用使用 Fetch。


### 2020.5 ~ 2022.12.31 快手 用户增长部

1. 快手极速版赚钱页 主 Owner 项目
  
    项目地址：[https://nebula.kuaishou.com/](https://nebula.kuaishou.com/) 
    
    主要承担快手极速版用户留存的金币激励项目，因为调用了端上的能力，所以只有在快手极速版内打开才能体验完整功能。
    
    技术栈：Vue 2 + Koa SSR, Redis, Docker
   - 高并发特性，日均 PV 3000，DPS 峰值 5W，高并发压测，做到系统资源监控并配套预案措施，服务可靠性保证。
   - 处理内存泄漏、数据缓存、服务端渲染技术难题。
   - 高可配置性组件，响应式，Lottie 动画，需求的及时应变能力。
   - 完成首屏渲染、白屏时间等性能指标把控。
   - 容器云持续集成。

2. 拉新拉活活动页 主 Owner 项目

    用户增长裂变需要的活动分享页，支持参数变动和动态化页面元素。
  
    技术栈：Vue 2 SPA，React SPA
   - 落地页微信对抗策略，为防鉴别，做动态背景、动态 HTML 混淆、动态域名等措施。
   - 指令码复制粘贴板，用户逐级递减数据跟进，来评定拉新和拉活的活动效果。
   - 承接 2020 中央电视台春晚红包活动以及 2021 年跨年活动，封闭式开发。

3. 分享中台前端
  
    配合用户增长需求，开发可配置从端内到端外再到端内的分享流程管理平台，承接整个快手的用户增长需求。
  
    技术栈：Vue 3 + Element Plus。

### 2018.06 ~ 2020.5 四大时代集团 研究院 前端 Leader

1. 移动业务 Webapp  

    主要承接四达时代在非洲的视频媒体业务、电视机顶盒充值业务等，其中还会定期迭代如非洲好声音、非典疫情实时通报等活动页面。

    线上地址：[https://m.startimestv.com/](https://m.startimestv.com/)
  
    技术栈：PHP，Nuxt.js，Vue SPA，Jenkins，PWA
   - 主导技术重构、技术选型，作为前端负责人，把控技术风险，提供技术指导。
   - 和上下游同事紧密协作。
   - 配置 Cloudflare CDN，负责服务端运维部分工作。
   - 内嵌 Android/iOS 的 H5 页，部分用到客户端能力才能完整体验。

2. 四达时代集团官网

    线上地址：[https://www.startimes.com.cn/](https://www.startimes.com.cn/)
  
    技术栈：WordPress，响应式，Slider 等等小前端组件。
   - 与总裁办公室协定需求，直到竣工为其一个多月的时间，负责前端的技术选型、部署和资源申请等工作。

### 2017.11 ~ 2018.06 京东金融 企业征信部 高级前端

1. 京东蓝鲸征信

    线上地址：[https://icredit.jd.com/](https://icredit.jd.com/)

    技术栈：Vue 2 + ArtTemplate + Echarts + D3.js
   - 类似企查查的企业征信平台，承担全部的前端开发工作。
   - 上游是京东 UED，整个项目是各种排期，完全的瀑布流式开发模式，项目推动问题严重。
   - 包含企业图谱、企业舆情、企业画像、交易征信、蓝精灵等模块。

### 2015.10 ~ 2017.11 集奥聚合科技有限公司 UED 高级前端

1. 易获客数据营销平台
   
    私有云部署，之前的公有云地址 [ana.geotmt.com](http://ana.geotmt.com)。
    
    技术栈：ArtTemplate + jQuery + Sea.js + Vue 2 + Gulp + Webpack + Less
   - 自主探索的前端工程化项目搭建，ArtTemplate 作为模板引擎渲染 HTML，Sea.js 作为前端的模块化工具，通过 Gulp 做前端代码合并和替换等工作。
   - 2017 年左右用 Vue 2 生态全家桶重构项目，Webpack 配置组件懒加载等优化工作。

2. 数据可视化大屏项目
   
    技术栈：Echarts.js, D3.js + Express, MongoDB, Mock Server
   - 使用 Echarts.js 地图图标，D3 的树形图关系图表等。
   - 大屏开机自启动，编写 Shell 脚本自动化打开浏览器，编写浏览器插件实现自动打开页面。
   - 数据量大，缓存到 IndexedDB，通过版本校验来迭代更新数据。

### 2012.06 ~ 2015.10 拉手网

1. 负责拉手网主站和 WAP 站的前端页面制作。
   
    技术栈：ThinkPHP + FiSP + Bootstrap
   - 百度的 FiSP 是我最早接触前端组件化概念的框架。
   - 按照设计图保质保量完成前端页面。
