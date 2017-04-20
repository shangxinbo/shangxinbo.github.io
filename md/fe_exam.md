# 前端知识点

*2017-04-19*

## HTML

1. <!DOCTYPE>文档声明

   用来定义XML或(X)HTML的文件类型，浏览器会使用它来判断文档类型， 决定使用何种协议来解析，以及切换浏览器模式

   HTML4.01/XHTML1.X中<!DOCTYPE>声明应用DTD,因为HTML4基于SGML,其中DTD规定了标记语言的规则，以使浏览器正确解析文档内容；HTML5不基于SGML，所以不需要应用DTD

   HTML4.01/XHTML1.0/XHTML1.1的有效DTD

   -  Strict 不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
   - Transitional 包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
   - Frameset  包括展示性的和弃用的元素（比如 font）。允许框架集（Framesets）。

   在每个有效的DTD下的可用标签详见 http://www.w3school.com.cn/tags/html_ref_dtd.asp

   如果不设置DOCTYPE声明，或者生命DOCTYPE及DTD不合法，浏览器会启动混杂模式渲染，就会出现很多怪异行为，比如盒子模型不正常等现象，所以为了让浏览器以标准模式渲染需要我们准确写DOCTYPE声明

2. 浏览器组成及工作原理

   感谢[以色列开发人员塔利·加希尔的研究成果](https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/)

3. HTML5  Application Cache

   [应用缓存初级使用指南](https://www.html5rocks.com/zh/tutorials/appcache/beginner/)

4. cookie vs sessionStorage vs localStorage

   - cookie 最大4k，每次请求都会在同源request header中传递，有效期过期后失效否则一直存在
   - sessionStorage  可支持5M+，仅用在本地存储(同源)，仅在当前会话窗口有效，当用户新开窗口不会起作用
   - localStorage   可支持5M+，仅用在本地存储(同源)，除非主动删除否则一直有效

5. 如何实现跨页传值

   - 使用URL query传参，形如 `/project/name?tag=1`
   - 使用本地存储方案cookie/storage 

6. Page Visibility API

   当一个网页可见或点击选中状态时Page Visibility API可以让你获取到这个状态，属性有`document.hidden/document.visibilityState`,监听事件`document.addEventListener('visibilitychange',callback)`

   详情见[MDN -> Page Visibility API](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)

7. 网页验证码是做什么用的

   区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水； 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

## CSS

1. 盒子模型

   ![盒子模型](https://leohxj.gitbooks.io/front-end-database/html-and-css-basic/assets/box-model.svg)

   witdh = content-width + padding-left + padding-right + border-left + border-right

   height = content-height + padding-top + padding-bottom + border-top + border-bottom

   margin叠加

   当两个或更多个垂直边距相遇时， 它们将形成一个外边距。这个外边距的高度等于两个发生叠加的外边距的高度中的较大者。但是注意只有普通文档流中块框的垂直外边距才会发生外边距叠加。 行内框、 浮动框或绝对定位框之间的外边距不会叠加。垂直外边距叠加一般的三种情况：

   - 元素自身叠加 当元素没有内容（即空元素）、内边距、边框时， 它的上下边距就相遇了， 即会产生叠加（垂直方向）。 当为元素添加内容、 内边距、 边框任何一项， 就会取消叠加。
   - 相邻元素叠加 相邻的两个元素， 如果它们的上下边距相遇，即会产生叠加。
   - 包含（父子）元素叠加 包含元素的外边距隔着 父元素的内边距和边框， 当这两项都不存在的时候， 父子元素垂直外边距相邻， 产生叠加。 添加任何一项即会取消叠加。

2. 如何让一个元素相对屏幕水平垂直居中

   - css2,给子元素添加如下样式，关键点:绝对定位;top:50%,left:50%;margin-left:-元素宽1/2,margin-top:-元素高1/2;

     ````css
     position: absolute;
     width: 300px;
     height: 200px;
     margin-left:-150px;
     margin-top:-100px;
     top: 50%;
     left: 50%;
     ````

   - css3,同上，讲margin替换成transform

     ```css
     position: absolute;		/* 相对定位或绝对定位均可 */
     width:500px;
     height:300px;
     top: 50%;
     left: 50%;
     transform: translate(-50%, -50%);
     ```

   - css3,在父元素添加样式，使得子元素垂直水平居中

     ```css
     display: flex;
     align-items: center; 		/* 垂直居中 */
     justify-content: center;	/* 水平居中 */
     ```

3. display

   - block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
   - inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示
   - inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。

4. position 

   - absolute  相对于第一个position不为static的父元素定位
   - fixed  老版本ie不支持。相对于浏览器窗口定位
   - relative 相对于正常位置定位
   - static 默认值，没有定位，在正常的文档流中，会忽略`top,left,bottom,right,z-index`声明

5. 初始化css

   不同的浏览器默认的样式可能不尽相同，所以开发时的第一件事可能就是如何把它们统一,以下是我们团队的初始化css内容

   ```css
   body,h1,h2,h3,h4,h5,h6,hr,p,blockquote,dl,dt,dd,ul,ol,li,pre,form,fieldset,legend,button,input,select,textarea,th,td{margin:0;padding:0;}
   h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal;}
   address,cite,dfn,em,i,var{font-style:normal;}
   small{font-size:12px;}
   dl,ol,ul,li{list-style-type:none;}
   a{text-decoration:none;outline:none;}
   a:hover{text-decoration:none;}
   sup{vertical-align:text-top;}
   sub{vertical-align:text-bottom;}
   button,input,select,textarea{font-size:100%;outline:none;}
   input[type="submit"],input[type="password"],input[type="reset"],input[type="button"],button{-webkit-appearance:none;}
   input::-ms-clear,input::-ms-reveal{display: none;}  /*去掉IE下输入内容自动出现的叉号和密码输入框出现的眼睛符号*/
   textarea{resize:none;}
   table{border-collapse:collapse;border-spacing:0;}
   img{border:none;vertical-align:top;}
   article,aside,details,figcaption,figure,footer,header,main,nav,section,summary{display:block;}
   audio,canvas,video{display:inline-block;}
   ```

   ​