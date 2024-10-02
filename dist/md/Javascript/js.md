# js 

1. javascript在Netscape Navigator2上开始使用，开始叫LiveScript,发布前为了搭Java的顺风车，改名JavaScript.随后在Netscape Navigator3上发布Javascript1.1,之后IE3加入JScript，实质是另一个JavaScript的实现，为了避开Netscape授权问题所以叫JScript。1997年Netscape以JavaScript1.1为蓝本提交给ECMA进行标准化。

2. JavaScript 组成

   * ECMAScript
   * DOM
   * BOM

3. ECMAScript4太激进，被放弃，ECMAScript3.1成为ECMAScript5

4. ECMAScript标准规定对于ECMAScript的实现要支持Unicode字符标准。Unicode是计算机科学领域里的一项业界标准。它对世界上大部分的文字系统进行了整理、编码，使得电脑可以用更为简单的方式来呈现和处理文字。目前最新的版本为2016年6月21日公布的9.0.0。Unicode组织和ISO-10646工作小组工作内容相互补充，而Unicode标准和ISO-10646标准也相互兼容的方向发展

5. [ECMAScript567浏览器兼容表](http://kangax.github.io/compat-table/es5/)

6. DHTML是指动态HTML。在IE4和Netscape Navigator4上实现不用重新加载页面就能更改其外观和内容，被网景和微软成为4.X代浏览器的新技术。然而DHTML并不是标准只是一个营销术语，所以微软和网景在DHTML上各抒己见，为了统一实现，W3C开始制定DOM标准。DOM1 于1998年10月成为W3C推荐标准。依据WHATWG的DOM Living Standard，最新版本DOM4,W3C关于DOM的工作小组似乎都关闭了，DOM4的Recommendation 也是抄的WHATWG的，只不过做了点保守的调整罢了。

7. BOM 浏览器对象模型，并不是一个真正的标准，在IE3和Netscape Navigator3中开发人员可以通过BOM控制浏览器显示页面以外的部分。HTML5致力于把很多BOM功能写入正式规范。

8. `<script>`出现的顺序决定外部js的解析顺序。除非设置defer和async属性。defer表示脚本可以延迟到文档完全被解析和显示之后再执行。async表示立即下载脚本但不妨碍页面中的其他操作。defer的脚本会在浏览器遇到`</html>`标签后再执行。HTML5规范要求脚本按照他们出现的顺序执行，且在DOMConentLoaded事件前执行。现实中脚本并不会按照顺序执行，也不一定会在DOMContentLoaded事件之前，所以最好还是把脚本放到body后边最好。

9. ECMAScript 标识符指变量，函数，属性，函数参数的名字。

   * 第一个必须是字母|_|$
   * 其他字符是字母|_|$|数字
   * 不能把关键字，保留字，true,false,null用作标识符

   标识符中的字母可以是扩展的ASCII或Unicode字符。

10. typeof 监测一个变量的基本数据类型，intanceof 监测一个变量是否是某个引用类型的实例

11. ```javascript
    var m1 
    console.log(typeof m1) //undefined 声明未定义
    console.log(typeof m2) //undefined 未声明
    ```

12. null值表示一个空对象指针，所以typeof null 返回‘object’

13. ```javascript
    console.log(null==undefined) //true   undefined值派生自null值
    console.log(null===undefined) //false
    ```

14. https://stackoverflow.com/questions/44453474/something-about-number-max-value

    ```javascript
    Number.MAX_VALUE  //能够表示的最大值 
    Number.MIN_VALUE  //能够表示的最小值	
    (Number.MAX_VALUE+123)==Number.MAX_VALUE   //true
    (Number.MAX_VALUE+Number.MAX_VALUE)==Number.MAX_VALUE  //false
    console.log(5.3e-324)  //5e-324 why?
    1.2+1.4        //2.5999999999999996
    1.2e10+1.4e10  //26000000000
    ```

15. NaN 表示本来要返回数值的操作数未返回数值的情况，这样避免抛出错误了。所以任何数学运算都不会抛出错误。

16. 数值转换方法比较

    Number() 可用于转换任何数据类型

    parseInt() 只用于转换字符串类型，如果第一个字符不是数字字符或负号就会返回NaN,如果是则解析第二个字符，知道解析完所有后续字符或遇到了一个非数字字符

    ```javascript
    parseInt(false) //NaN
    Number(false)  //0
    Numver('1a')  //NaN
    parseInt('1a') //1
    parseInt('22.5') //22
    parseInt('10',2) //2 按基数解析
    parseInt('20',2) //NaN
    ```

17. 递增递减操作符

    前置操作符，在语句被求值以前改变的。

    ```javascript
    var age=29
    var anotherage = --age + 2	
    console.log(age)  //28
    console.log(anotherage) 30
    ```

    后置操作符，在语句求值以后才执行

    ```javascript
    var num1 = 2
    var num2 = 20
    var num3 = num1-- + num2   //22
    var num4 = num1 + num2   //21
    ```

18. `!!obj = Boolean(obj)`

19. 任何数与NaN进行比较都是false

    ```javascript
    NaN<3 //false
    NaN>=3 //false		
    ```

20. break和continue在循环中精确控制代码执行

    break立即跳出循环；continue立即跳出本次循环，继续下次循环

    ```javascript
    var num = 0
    for(var i=0;i<10;i++){
      if(i%5==0){
        break
      }
      num++
    }
    console.log(num) //4
    /*------------------*/
    var num=0
    for(var i=0;i<10;i++){
      if(i%5==0){
        continue
      }
      num++
    }
    console.log(num) //8
    /*------------------*/
    var num = 0
    outer:
    for(var i=0;i<10;i++){
      for(var j=0;j<10;j++){
        if(i==5&&j==5){
          break outer
        }
        num++
      } 
    }
    console.log(num)  //55
    /*------------------*/
    var num = 0
    outer:
    for(var i=0;i<10;i++){
      for(var j=0;j<10;j++){
        if(i==5&&j==5){
          continue outer
        }
        num++
      } 
    }
    console.log(num)  //95
    ```

21. switch 执行语句比较时使用的是全等比较

22. ECMAScript所有参数传递都是值传递，不可能通过引用传递值

23. 延长作用域链

    * try-catch 语句的catch块
    * with语句

    这两个语句都会在作用域链的前端添加一个变量对象。对with语句来说，会将指定的对象添加到作用域链中。对catch语句来说，会创建一个新的变量对象，其中包含的是被抛出的错误对象的声明

24. IE8引入了一个新的概念“文档模式”（document mode）。文档模式决定了你可以使用哪几个级别的css，可以在JavaScript中使用哪些API,以及如何对待文档类型(doctype).要强制浏览器以某种模式渲染页面可以

    `<meta http-equiv="X-UA-Compatible" content="IE=IEVersion" />`

    IEVersion 有以下几种值

    * Edge,始终以最新的文档模式渲染页面
    * EmulateIE9,EmulateIE8……如果有文档类型声明则以IE9,IE8…标准模式渲染页面,否则文档模式设置为IE5
    * 9,8,7 强制以IE9,IE8,IE7标准模式渲染页面，忽略文档类型声明