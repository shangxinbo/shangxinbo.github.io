## 我的记录

Esbuild打包

* 安装依赖
```
npm install 
```
* 打包脚本
```
npm run build
```

配置打包流程见.github/workflows/deploy.yml

部署脚本会把打包后的发布代码提交到gh-pages 分支，

在github pages页签配置 Build and deployment 
source deploy from a branch 选择gh-pages分支即可

esbuild 原生支持typescript