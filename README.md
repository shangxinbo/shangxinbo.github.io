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

### 处理前端路由服务器配置问题
正常前端路由配置时要配置所有流量都能打到index.html，通过前端路由进行匹配页面组件
```
server {
    ....

    index index.html;

    # 流量处理
    location / {
        try_files $uri /index.html;
    }

    # 优先级更高：处理其他资源，如图像、字体等
    location ~* \.(?:css|js|jpg|jpeg|gif|png|svg|ico|woff2?)$ {
        expires 1y;
        access_log off;
        add_header Cache-Control "public";
    }
}

```
但是github pages没有开放nginx的配置能力，所以当我们使用Vue/React Router这种路由开启 History Router模式时，一个非根目录的页面刷新时会出现404，也就是github pages找不到路径中的index.html静态文件

还好github开放了404.html的定制能力，我们将index.html在发布时同时复制成404.html，那么当github在找不到匹配的文件时就会用404.html做fallback



esbuild 原生支持typescript