# DOCTYPE

*2017-04-26*

<!DOCTYPE>文档声明，用来定义XML或(X)HTML的文件类型，浏览器会使用它来判断文档类型， 决定使用何种协议来解析，以切换浏览器模式

### USE

- 必须放在HTML文档的第一行，位于`<html>`之前
- HTML4.01/XHTML1.X中<!DOCTYPE>声明应用DTD,因为HTML4基于SGML,其中DTD规定了标记语言的规则，以使浏览器正确解析文档内容；HTML5不基于SGML，所以不需要应用DTD
- 如果不设置DOCTYPE声明，或者声明DOCTYPE及DTD不合法，浏览器会启动混杂模式渲染，就会出现很多怪异行为，比如盒子模型不正常等现象，所以为了让浏览器以标准模式渲染需要我们准确写DOCTYPE声明



### MORE

 #### SGML & XML & HTML & XHML

- SGML(Standard Generalized Markup Language)，即标准通用标记语言，是1986年出版发布的一个信息管理方面的国际标准(ISO 8879)
- HTML(HyperText Markup Language) ,即超文本标识语言
- XML(eXtensible Markup Language),即可扩展标记语言
- XHTML(e**X**tensible **H**yper**T**ext **M**arkup **L**anguage),即可扩展超文本标记语言

SGML最先出现，HTML和XML都源自于它。SGML非常复杂，XML出现就是为了简化它，可以说XML是SGML的子集。所以可以理解成：

> SGML 到XML的过程是一个进化(简化)的过程

而HTML(这里指HTML4)是SGML在web页面领域的一个应用实现（类->实例，规范->应用）

随后XML在各个应用场合比SGML更方便，所以演变出了XHTML(还有很多其他的应用实现，比如SVG)，所以XHTML是需要满足XML的语法格式的。那么可以这么理解：

> XML 是SGML的子集，所以XHTML是HTML的子集

#### DTD

DTD（Document Type Definition）概念缘于SGML，每一份SGML文件，均应有相对应的DTD。由于HTML4/XHTML1是都是基于SGML的，需要制定DTD规则。之所以要DTD，是因为SGML语法规范比较松散，对于机器来说，语法越松散就越难处理，为了简化处理难度，用DTD来约束语法规则来帮助机器处理。

HTML4.01/XHTML1.0/XHTML1.1的有效DTD

- Strict 不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Transitional 包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Frameset  包括展示性的和弃用的元素（比如 font）。允许框架集（Framesets）。

####  关于HTML5 & XHTML5

HTML5 是HTML的最新规范版本，之所以不需要制定DTD是因为HTML5规范里定义了浏览器解析规则，能够保证浏览器在不同设备上解析一样的规则。而HTML5是一个词汇两种序列化(HTML,XML)

https://www.w3.org/TR/html/introduction.html#html-vs-xhtml