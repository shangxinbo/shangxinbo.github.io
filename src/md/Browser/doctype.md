# DOCTYPE

这已经是一个历史性知识点，现在很少人去研究这个事情
```
<!DOCTYPE html>
```

## 文档类型定义 DTD

1. HTML是不带逻辑的标记型语言，解析语法是一个很麻烦的事情
- HTML是SGML在web页面领域的一个应用实现（可以理解成类->实例，规范->应用）
- XML是SGML的子集,可以理解成进化版
- XHTML是基于XML对HTML的简化，当然比如SVG也是XML的另一种实现

2. DTD这个概念源于SGML
因为SGML语法规范比较松散，对于机器来说，语法越松散就越难处理，为了简化处理难度，用DTD来约束语法规则来帮助机器处理。
由于HTML4/XHTML1是都是基于SGML的，需要制定DTD规则。

HTML4.01/XHTML1.0/XHTML1.1的有效DTD

- Strict 不包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Transitional 包括展示性的和弃用的元素（比如 font）。不允许框架集（Framesets）
- Frameset  包括展示性的和弃用的元素（比如 font）。允许框架集（Framesets）。

文档类型声明的方式是在文档的第一行添加<!DOCTYPE>，位于`<html>`之前，浏览器会使用它来决定使用何种协议来解析，以切换浏览器模式来正确解析文档内容。
如果不设置DTD或者DTD不合法，浏览器会启动怪异模式混杂模式渲染，就会出现很多怪异行为，比如盒子模型不正常等现象

# HTML5 独有的Doctype

HTML5 已经不再是基于SGML，他是针对之前HTML补充和优化

HTML 无法很容易地通过常规解析器解析（因为它的语法不是与上下文无关的语法），也无法通过 XML 解析器来解析，因为HTML 的处理更为“宽容”，它允许您省略某些隐式添加的标记，有时还能省略一些起始或者结束标记等等。所以HTML 的定义采用了 DTD 格式。它包括所有允许使用的元素及其属性和层次结构的定义。后来浏览器创建了自定义的解析器来解析 HTML，HTML5 规范详细地描述了解析算法。所以从解析语法上讲HTML5 不再需要DTD声明也能正常解析，由此它也不再是基于SGML的标记语言。

# HTML Living Standard
向来HTML的标准都是W3C制定，但是WHATWG认为这种指定标准的方式不符合他们的意愿，于是推出HTML Living Standard，这是一个动态更新的标准，会持续添加或修改的活标准，这意味着HTML不在像以前那样有固定的版本发布，而是随着新功能的提出和实现，逐渐融入到现有标准中。