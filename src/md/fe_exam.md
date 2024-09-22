# 前端知识点

*2017-04-19*

## HTML

1. 为什么HTML5 不需要DTD

2. 页面导入样式时，使用link和@import的区别

   link会异步加载，不会影响浏览器对文档的处理。

3. 浏览器内核的理解

   浏览器内核主要分为渲染引擎和js引擎

   常见的渲染引擎有Trident,Gecko,Webkit,Blink

   常见的js引擎有spiderMonkey,V8,Chakra

4. cookie vs sessionStorage vs localStorage

   - cookie 最大4k，每次请求都会在同源request header中传递，有效期过期后失效否则一直存在
   - sessionStorage  可支持5M+，仅用在本地存储(同源)，仅在当前会话窗口有效，当用户新开窗口不会起作用
   - localStorage   可支持5M+，仅用在本地存储(同源)，除非主动删除否则一直有效

5. 如何实现跨页传值

   - 使用URL query传参，形如 `/project/name?tag=1`
   - 使用本地存储方案cookie/storage 

6. HTML5的离线存储怎么使用

   application/cache 已经不被支持,详情见[使用应用缓存](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Using_the_application_cache)

7. Page Visibility API

   当一个网页可见或点击选中状态时Page Visibility API可以让你获取到这个状态，属性有`document.hidden/document.visibilityState`,监听事件`document.addEventListener('visibilitychange',callback)`

   详情见[MDN -> Page Visibility API](https://developer.mozilla.org/zh-CN/docs/Web/API/Page_Visibility_API)

8. 网页验证码是做什么用的

   区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水； 有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

9. HTML meta viewport

   手机浏览器是把页面放在一个虚拟的“窗口”（viewport）中，通常这个虚拟的“窗口”（viewport）比屏幕宽，这样就不用把每个网页挤到很小的窗口中（这样会破坏没有针对手机浏览器优化的网页的布局），用户可以通过平移和缩放来看网页的不同部分。移动版的 Safari 浏览器最新引进了 viewport 这个 meta tag，让网页开发者来控制 viewport 的大小和缩放，其他手机浏览器也基本支持。

10. 什么叫渐进增强，优雅降级

  - 渐进增强 progressive enhancement：针对低版本浏览器进行构建页面，保证最基本的功能，然后再针对高级浏览器进行效果、交互等改进和追加功能达到更好的用户体验。
  - 优雅降级 graceful degradation：一开始就构建完整的功能，然后再针对低版本浏览器进行兼容。

11. 什么是XSS，如何防止XSS攻击

    XSS是一种前端代码注入的攻击，它允许恶意用户将代码注入到网页上，其他用户在观看网页时就会受到影响。一般这种攻击注入的是JavaScript代码，不过如果是动态网页的话被注入的代码也可以是Java等后端代码。攻击成功后攻击者可能得到更高的权限，如获取cookie，不用登录即可获取会话等。

    一般操作的流程是先在一个网页上表单中填写代码，发布成功后用户访问该页面，代码可执行。例如在input框中输入`/><script>alert(123)</script>`发布成功后每个用户进入这个页面就会提示123。同样可以获取其他用户信息比如登录信息或者其他，也可以使页面跳转到其他链接。防御手段是对下列特殊字符进行编码：

    ```html
    &     –>     &amp;
    <     –>     &lt;
    >     –>     &gt;
    ”     –>     &quot;
    ‘     –>     &#x27;
    /     –>     &#x2f;
    ```

12. CSRF攻击

13. Clickjacking攻击

14. link标签可以放到head之外的标签元素么

15. HTML中元素分为那几种类型（HTML5,HTML4）HTML5的内容模型

16. [表单验证](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Data_form_validation)

17. indexedDB

18. requestAnimationFrame(https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/HTML5)

19. 现代浏览器icon解决方案对比

    * SVG
    * PNG
    * FONT





## CSS

1. 盒子模型

   ![盒子模型](https://leohxj.gitbooks.io/front-end-database/html-and-css-basic/assets/box-model.svg)

2. margin叠加

   当两个或更多个垂直边距相遇时， 它们将形成一个外边距。这个外边距的高度等于两个发生叠加的外边距的高度中的较大者。但是注意只有普通文档流中块框的垂直外边距才会发生外边距叠加。 行内框、 浮动框或绝对定位框之间的外边距不会叠加。垂直外边距叠加一般的三种情况：

   - 元素自身叠加 当元素没有内容（即空元素）、内边距、边框时， 它的上下边距就相遇了， 即会产生叠加（垂直方向）。 当为元素添加内容、 内边距、 边框任何一项， 就会取消叠加。
   - 相邻元素叠加 相邻的两个元素， 如果它们的上下边距相遇，即会产生叠加。
   - 包含（父子）元素叠加 包含元素的外边距隔着 父元素的内边距和边框， 当这两项都不存在的时候， 父子元素垂直外边距相邻， 产生叠加。 添加任何一项即会取消叠加。

3. css选择器权重计算(specificity)

   - 内联样式表的权值1000
   - id选择器的权值100
   - class类选择器，属性选择器，伪类选择器权值10
   - 元素选择器，伪元素选择器权值1

4. css的层叠顺序

   | 顺序   | 来源   | 重要程度       |
   | ---- | ---- | ---------- |
   | 1    | 用户代理 | 普通         |
   | 2    | 用户代理 | !important |
   | 3    | 用户   | 普通         |
   | 4    | 页面作者 | 普通         |
   | 5    | 页面作者 | !important |
   | 6    | 用户   | !important |

5. 如何让一个元素相对屏幕水平垂直居中

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

6. display

   - block 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
   - inline 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示
   - inline-block 默认宽度为内容宽度，可以设置宽高，同行显示。
   - none  不显示
   - list-item 
   - table
   - inherit 继承父元素

7. position 

   - absolute  相对于第一个position不为static的父元素定位
   - fixed  老版本ie不支持。相对于浏览器窗口定位
   - relative 相对于正常位置定位
   - static 默认值，没有定位，在正常的文档流中，会忽略`top,left,bottom,right,z-index`声明

8. 初始化css

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

9. inline-block元素间隙

10. 什么是文档流(普通流normal-flow)

  在窗口**自上而下**分成一行行, 并在每行中按**从左至右**的顺序排放元素,即为文档流.

  CSS中脱离文档流，就是将元素从普通的布局排版中拿走，其他盒子在定位的时候，会当做脱离文档流的元素不存在而进行定位。脱离文档流的元素已经不属于文档流的范畴中，相当于自定义排位，就相当于它可以不用再排队了，想去哪里就去哪里。

11. 如何防止浮动造成的父元素高度塌陷

    详细了解 http://www.iyunlu.com/view/css-xhtml/55.html

    ```css
    .clearfix:after {
    	content:"."; 
    	display:block; 
    	height:0; 
    	visibility:hidden; 
    	clear:both; 
    }
    ```

12. 使用css预处理器么？

    less,sass, Stylus

13. css后处理器

    PostCSS

14. css匹配规则是从左向右还是从右向左

    简言之就是 浏览器css匹配核心算法的规则是以 right-to-left 方式匹配节点的。
    这样做是为了使规则能够快、准、狠地与render树上的节点匹配，通俗地将就是 **就近原则**。

15. 元素竖向的百分比设定是相对于容器的高度吗？

    https://jsfiddle.net/shangxinbo/q27bxtgb/

    百分比属性值其实没有竖向和横向之分，依据是在属性定义里，属性定义里规定百分比相对的值是什么就是什么这里的padding-top和padding-bottom都是相对于width而言的，具体见css2.1规范http://www.ayqy.net/doc/css2-1/box.html#padding-properties

16. `::after`和`:after`区别

    双引号的出现是CSS为了区分伪类和伪元素的

17. 如果需要手动写动画，你认为最小时间间隔是多久，为什么

    多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

18. `<link ref="stylesheet">`可以放到body中么？（HTML standard vs w3c Specification）

    https://html.spec.whatwg.org/multipage/semantics.html#the-link-element

    ​


## js

1. js里的基本数据类型

   Undefined,Null,Boolean,Number,String,Symbol(ES6)

2. 原型链

   ```javascript
   var A = function(){
     this.arr = [1,2,3]
   }
   var a1 = new A()
   var a2 = new A()
   a1.arr.push(4)
   //new 为每个实例分配一个内存
   console.log(a2.arr)  //[1,2,3]
   ```

   ```javascript
   var A = function(){
     this.arr = [1,2,3]
   }
   var B = function(){}
   B.prototype = new A()
   var a1 = new B()
   var a2 = new B()
   a1.arr.push(4)
   //a1,a2 公用一个原型，而这个原型是A的实例
   console.log(a2.arr)  //[1,2,3,4]
   ```

3. javascript的变量的内存占用

   原始数据类型直接存储在栈（stack）中,占用空间小，大小固定

   引用数据类型存储在堆(heap),占用空间大，大小不固定，引用数据类型在栈中存储了指针，该指针指向堆中实体的起始地址，当解释器寻找引用值时，先找到栈中的地址然后再取得实体。

   ![](https://segmentfault.com/img/bVlSc9)

4. new 操作符都做了什么

   * 创建一个空对象，this变量指向该对象同时继承该函数的原型
   * 构造函数的属性和方法被加入this指向的对象中
   * 如果构造函数返回一个非引用类型的数据，则返回这个数据，如果构造函数返回值类型数据或者没有返回值，则返回这个this指向的新对象 

5. 随机排序

   ```javascript
   var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   //solution1
   function randSort1(arr) {
       for (var i = 0, len = arr.length; i < len; i++) {
           var rand = parseInt(Math.random() * len)
           var temp = arr[rand]
           arr[rand] = arr[i]
           arr[i] = temp
       }
       return arr
   }
   //solution2
   function randSort2(arr) {
       var mixedArray = []
       while (arr.length > 0) {
           var randomIndex = parseInt(Math.random() * arr.length)
           mixedArray.push(arr[randomIndex])
           arr.splice(randomIndex, 1)
       }
       return mixedArray
   }
   //solution3
   arr.sort(function(){
     	return Math.random() - 0.5;
   })
   ```

6. javascript作用域链

7. this指向函数的直接调用者

8. eval('('+str+')')处理json的原理是什么

   eval接收一个字符串解析成js代码执行，一个json字符串形式执行形成一个对象，类似于('{"name":"xiaoming"}')=> {name:"xiaoming"}

9. undefined和null的区别

   undefined是声明未定义

   null是定义为空值

10. ["1", "2", "3"].map(parseInt)输出是什么

  Array.prototype.map(callback(value,index,array))

  parseInt(string,radix) //radix 数值基数，介于2~36之间

