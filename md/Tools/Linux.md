dpkg -s nginx 查找软件包
删除软件 apt autoremove    xx --purge


centos 7 8 生命周期结束
centos stream 是redhat的先行版本，是不稳定版本，不应用于生产环境


关闭mysql performance_schema 内存占用缩减一半


查看系统日志 /var/log/syslog


 top命令 free -m


 cat /etc/redhat-release
lsb_release -a 
sudo apt update && sudo apt upgrade

nodesource 安装nodejs

nginx  
https://nginx.org/en/linux_packages.html
systemctl enable nginx 


curl -LO https://repo.mysql.com//mysql-apt-config_0.8.29-1_all.deb
dpkg -i ./mysql-apt-config_0.8.29-1_all.deb
apt update  
apt install -y mysql-server
rm mysql-apt-config_0.8.29-1_all.deb
远程登录update user  set host = '%' where user = 'root';   

关闭mysql performance_schema 内存占用缩减一半

更改glass文件夹权限 chmod 777 glass

设置环境变量
查看环境变量   echo $NUXT_ENV_DB

安装pm2

安装 pm2-logrotate
开机自启服务
pm2 startup
pm2 startup systemd
pm2 save



红帽系列
cat /etc/redhat-release

centos 8
MiB Mem :    804.3 total,    383.0 free,    132.6 used,    288.7 buff/cache
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.    540.3 avail Mem 


lsb_release -a
ubuntu
MiB Mem :    957.1 total,    521.1 free,    182.7 used,    253.3 buff/cache
MiB Swap:   4096.0 total,   4096.0 free,      0.0 used.    627.9 avail Mem 


debian12 直接装

不管哪个发行版都要装最新的lts
npx create-next-app@latest 需要安装npm


next.js 默认是ssr，整体方案是ssr
next.js 还是用webpack打包

remix性能更好

expo是基于react native

create-react-app



包管理工具

node 16 默认带着corepack  而enable 之后会自动下载yarn 和pnpm

刚装的npm 只要没有在全局安装其他包，会包找不到npm目录
15 error path C:\Users\shangxinbo\AppData\Roaming\npm
16 error errno -4058
17 error enoent ENOENT: no such file or directory, lstat 'C:\Users\shangxinbo\AppData\Roaming\npm'
18 error enoent This is related to npm not being able to find a file.

corepack eable需要管理员权限运行shell，enable之后想用yarn和pnpm时候会提示安装

corepack disable后yarn 和pnpm不能使用

存在就有道理，那node加入corepack 的目的也证明了yarn和pnpm的好处


nuxt.js 也支持混合渲染 egg.js对标的是koa

tailwindcss是已经写好的样式，不用更多style，直接用class

用vite创建react直接在命令行中选择模板就行


域名配置a记录，设置到github的4个ip上，在项目中setting-pages里设置域名


dns解析的过程
dig命令的使用

荣耀笔记本x 14 plus 2024

可以理解成dns的查询入口
1。1.1.1 cloudflare 
8.8.8.8 google
114.114.114.114 移动电信和联通

根域名顶级域名一级域名二级域名

先到跟服务器查询顶级域名服务器ip，在查一级域名服务器ip，再查二级ip
根域名服务器一共有13个ip a-m.root-servers.net 集成在系统中

递归服务器，和级联服务器


dig +trace example.com
https://www.ruanyifeng.com./blog/2022/08/dns-query.html



公积金  -单温信息变更，单位状态， 找封存，  提示红框，邮箱输入，虚拟的单位 12  
联行号10310008287   农行
银行账号随便的18位账号 

