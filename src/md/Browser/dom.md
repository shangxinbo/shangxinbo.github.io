# DOM

*2017-03-14*

## 什么是DOM？

文档对象模型 (DOM) 是HTML和XML文档的编程接口。它提供了对文档的结构化的表述，并定义了一种方式可以使从程序中对该结构进行访问，从而改变文档的结构，样式和内容。DOM 将文档解析为一个由节点和对象（包含属性和方法的对象）组成的结构集合。简言之，它会将web页面和脚本或程序语言连接起来，DOM就是浏览器为javascript提供的一系列接口，通过这些接口我们可以操作web页面，但是DOM不是编程语言，该模型独立于编程语言，比如除了js外python也是可以操作DOM的，然而一般讲的DOM API 是指 DOM + JS。

## W3C VS WHATWG

W3C(World Wide Web Consortium)万维网联盟，1994年成立。W3C标准是为解决web应用中不同平台，技术和开发者带来的兼容问题，制定的一系列Web应用开发者和内容提供者遵循的标准。但是W3C制定的标准并不是强制标准而是推荐标准。W3C制定的标准成为规范（specifications）

WHATWG(Web Hypertext Application Technology Working Group)网页超文本应用技术工作小组，2004年由Apple,Mozilla,Opera公司组成，目前的技术编者在Google任职，微软公司没有在其组织。成立之初是为了响应W3C对网页标准发展缓慢，且试图放弃HTML转而发展XML的目的。WHATWG制定的标准成为live Standard

由于历史原因HTML5其实是WHATWG先规范化的，因为W3C准备放弃HTML了。后来WHATWG推荐W3C规范HTML5，被认可后才在2008年开始HTML5的规范化。但两者的理念分裂，WHATWG认为HTML5应该是一直更新的动态标准，所以起名叫做'HTML Living Standard'，意指不再依赖于版本号；而W3C认为应该形成固定的规范所以命名成新一代的HTML标准，即HTML5。

[W3C DOM specification](https://www.w3.org/TR/dom/)

[WHATWG DOM Living Standard](https://dom.spec.whatwg.org/) 

这两个标准几乎是相同的，W3C的specification是依据WHATWG standard的快照，只是将最低限度的处理差异，将没有被实施的standard删除掉了，所以W3C DOM specification 是WHATWG DOM Living Standard的子集。

## DOM API使用的数据类型

既然DOM 提供了API 供编程语言调用，那么在调用过程中传递的数据是什么类型的？以下是调用DOM API所传递的数据类型：

| type        | des                                      |
| ----------- | ---------------------------------------- |
| document    | 文档对象本身                                   |
| element     | 一个元素或节点，例如使用document.createElement()方法返回一个node的对象引用就是一个element |
| nodeList    | 元素数组，例如 document.getElementsByTagName()方法返回的就是这种类型 |
| attribute   | 属性节点， createAttribute()方法返回              |
| nameNodeMap | 类似与nodeList                              |

## DOM 节点类型

操作dom的即是操作DOM的节点，节点类型可以通过node.nodeType得到，节点类型返回一个整数，节点类型映射表如下

| value    | description                              |
| -------- | ---------------------------------------- |
| 1        | 一个元素节点                                   |
| 2        | 属性节点，DOM4规范不再支持                          |
| 3        | Element或Attr 中的文字                        |
| 4，5，6，12 | DOM4移除                                   |
| 7        | XML相关                                    |
| 8        | 注释节点                                     |
| 9        | document节点                               |
| 10       | documentType节点，如`<!DOCTYPE html>` 就是用于 HTML5 的。 |
| 11       | documentfragment节点                       |

## DOM 节点的属性

* nodeValue

  nodeType 不同返回值不同  1 文本内容  2 特性的值  3 null

* nodeName

  nodeType不同返回值不同  1 元素标签名（大写） 2.特性的名称  3 #text

* nodeType

* parentNode

## DOM 操作

#### 创建

`document.createElement()`或者`document.createTextNode()`

`el.cloneNode(true) //true 是否克隆节点`

**注意：** 克隆节点时除了以内联形式添加的事件之外，其他注册的事件不会克隆，只克隆节点

`createDocumentFragment`创建一个DocumentFragment.这是一种轻量级document，他的作用是存储临时的节点用来准备添加到文档中。常用的是循环添加节点时，先讲节点添加到一个fragment上，然后将完整的fragment添加到document当中，可以防止回流并且节省性能。

#### 查询

* 绝对路径查询

  ```javascript
  document.querySelector() / document.querySelectAll() / document.getElementById() / document.getElementsByClassName() / document.getElementsByTagName()
  ```

  **注意：**由 `querySelectorAll()`返回的节点列表**不是动态实时**的。这和其他DOM查询方法返回动态实时节点列表不一样,而后三个返回的节点列表是实时的，也就是说nodelist的length是实时变化的。

* 相对路径查询

  ```
  element.parentNode / element.children / element.nextElementSibling / element.previousElementSibling / element.getElementById()
  ```

#### 更改

```
appendChild(el) / removeChild(el) / replaceChild(new,old) / insertBefore(new,refrence)
```

parent.appendChild(child)需要注意，当child是当前document中的节点，当添加到一个新位置时，原来位置上的节点将会被移除，当child中已经绑定了事件，那么移动完成后元素节点依然绑定着事件，这个原则同理其他更改的方法

removeChild(el) 将删除的节点保存在内存中，并作为该方法的返回值，所以可以进行下一步操作

#### 属性

```
el.attributes / getAttribute() / setAttribute(key,value) / hasAttribute() / removeAttribute()
```

#### 样式

`window.getComputedStyle() / getBoundingClientRect() ` 

## DOM 事件

为一个DOM 元素注册事件回调方式

* 使用target.addEventListener(ie8- 使用attachEvent)  推荐
* ~~html属性 `<button onclick="alert('123')"></button>`  影响结构行为分离~~
* ~~DOM 元素属性 `myButton.onclick = function(event){alert('Hello world')}`~~

当一个事件触发时会传一个Event对象到回调函数中，下面是常用的Event对象属性和方法：

```
type; target;currentTarget;stopPropagation();preventDefault();clientX,clientY;screenX,screenY;
```

事件流，分为事件捕获和事件冒泡阶段，详见[DOM3 event architechure](https://www.w3.org/TR/DOM-Level-3-Events/#dom-event-architecture)

![DOM3 event architechure](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg)



## 引用

[DOM概述](https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model/Introduction)

[DOM中空白节点引起的节点选择问题](https://developer.mozilla.org/zh-CN/docs/Web/Guide/API/DOM/Whitespace_in_the_DOM)

https://dom.spec.whatwg.org/