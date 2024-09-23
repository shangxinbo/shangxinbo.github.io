# JS 作用域

*2017-06-05*

### 变量对象

执行环境决定了Js执行过程中可以获取哪些变量、函数、数据。一段程序可能被分割成多个不同的执行环境。每个执行环境都有一个与之关联的__变量对象__.变量对象存储着在对应执行环境中定义的以下内容：

1. 函数形参
2. var 声明的变量
3. 函数声明

```javascript
var a = 10
function test(x) {
  var b = 20
}
test(30)
```

对应的变量对象是

```javascript
// 全局执行环境的变量对象
全局环境的变量对象= {
  a: 10,
  test: 指向test()函数
}
 
// test函数执行环境的变量对象
test函数环境的变量对象 = {
  x: 30,
  b: 20
}
```

### 变量对象的区分

* 全局环境变量对象

  全局对象的变量对象就是它自己

  ```javascript
  globla = {
     Math:
     String:
     ...
     ...
     window:globla   //引用自身
  };
  ```

* 函数环境中的变量对象

  在函数执行环境中，活动对象就是变量对象，在进入函数执行环境时创建。

### 变量对象的处理

环境中的代码被分为两个阶段来处理：进入执行环境阶段，执行代码阶段

* 进入执行环境阶段

  当进入执行环境时（代码执行之前），变量对象包含下列属性

  * 函数的所有形参（如果是在函数执行环境中。因为全局环境没有形参。）

    由 形参名称 和 对应值 组成，作为变量对象的属性。如果没有传递对应的参数，将undefined作为对应值。

  * 所有函数声明

    由 函数名 和 对应值（函数对象）组成，作为变量对象的属性。如果变量对象已经存在同名的属性，则覆盖这个属性。

  * 所有变量声明（由var声明的变量）

    由 变量名 和 对应值（undefined） 组成，作为变量对象的属性。如果变量名与已经声明的形参或函数相同，则变量声明不会干扰已经存在的这类属性。
    注意：此时的对应值是undefined。

  ```javascript
  function test(a, b) {
    alert(c)   
    alert(d)   
    alert(e) 
    alert(x)
    var c = 10
    function d() {}
    var e = function _e() {}
  }
   
  test(10)
  ```

  在进入执行环境阶段

  ```javascript
  活动对象(test) = {
    a: 10,
    b: undefined,  
    c: undefined,
    d: 指向函数d,
    e: undefined
  }
  ```

* 代码执行阶段

  ```javascript
  活动对象(test) = {
    a: 10,
    b: undefined,  //没有相应该参数传入，undefined
    c: 10,         //之前是undefined
    d: 指向函数d，
    e: 指向函数表达式_e   //之前是undefined
  };
  ```



### 解释题

```javascript
function test(x){
	console.log(x)
	var x = 2
	function x(){}
	console.log(x)
}
test(1) // function 2
```

