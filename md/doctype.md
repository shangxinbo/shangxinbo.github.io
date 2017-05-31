# DOCTYPE

*2017-04-26*

<!DOCTYPE>文档声明，用来定义XML或(X)HTML的文档类型，浏览器会使用它来决定使用何种协议来解析，以切换浏览器模式

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

SGML最先出现，HTML和XML都源自于它。SGML非常复杂，XML出现就是为了简化它，可以说XML是SGML的子集。可以理解成：

> SGML 到XML的过程是一个进化(简化)的过程

而HTML(这里指HTML4)是SGML在web页面领域的一个应用实现（类->实例，规范->应用）

随后XML在各个应用场合比SGML更方便，所以演变出了XHTML(还有很多其他的应用实现，比如SVG)，所以XHTML是需要满足XML的语法格式的。可以这么理解：

> XML 是SGML的子集，所以XHTML是HTML的子集

#### DTD

DTD（Document Type Definition）概念缘于SGML，每一份SGML文件，均应有相对应的DTD。由于HTML4/XHTML1是都是基于SGML的，需要制定DTD规则。之所以要DTD，是因为SGML语法规范比较松散，对于机器来说，语法越松散就越难处理，为了简化处理难度，用DTD来约束语法规则来帮助机器处理。

HTML4.01/XHTML1.0/XHTML1.1的有效DTD

- Strict 不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Transitional 包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Frameset  包括展示性的和弃用的元素（比如 font）。允许框架集（Framesets）。

####  关于HTML5 & XHTML5

HTML5 是HTML的最新规范版本，而HTML5是一个词汇两种序列化(HTML,XML)

HTML5不需要DTD，讲到这个需要详细解释一下：

>  HTML 并不能很容易地用常规解析器所需的与上下文无关的语法来定义。这初看起来很奇怪：HTML 和 XML 非常相似。有很多 XML 解析器可以使用。HTML 存在一个 XML 变体 (XHTML)，那么有什么大的区别呢？
>
>  区别在于 HTML 的处理更为“宽容”，它允许您省略某些隐式添加的标记，有时还能省略一些起始或者结束标记等等。和 XML 严格的语法不同，HTML 整体来看是一种“软性”的语法。
>
>  概括地说，HTML 无法很容易地通过常规解析器解析（因为它的语法不是与上下文无关的语法），也无法通过 XML 解析器来解析。
>
>  所以HTML 的定义采用了 DTD 格式。它包括所有允许使用的元素及其属性和层次结构的定义。
>
>  __然而，HTML DTD 无法构成与上下文无关的语法。__
>
>  由于不能使用常规的解析技术，浏览器就创建了自定义的解析器来解析 HTML。所以HTML5 规范详细地描述了解析算法。所以HTML5 不需要DTD声明也能解析。



https://www.w3.org/TR/html/introduction.html#html-vs-xhtml

https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/