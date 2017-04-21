# 视觉格式化模型(visual formatting model)

*2017-4-21*

## CSS框模型(Box Model)

Box 是 CSS 布局的对象和基本单位，直观点来说，就是一个页面是由很多个 Box 组成的。CSS 框模型描述了为文档树中的元素而生成的矩形框。这些框会按照**视觉格式化模型**来排列显示。

每个框都有一个内容区域(content)及周围可选的内边距(padding)、边框(border)和外边距区域(margin)

![box model](https://www.w3.org/TR/CSS2/images/boxdim.png)

#### 折叠外边距(**Collapsing margins**)

概念：两个以上的框之间的相邻外边距可以被合并成一个单独的外边距。通过此方式合并外边距被称为折叠，且产生的已合并的外边距被称为折叠外边距。只有垂直方向上的外边距才会合并。

条件：解释相邻

- 边距之间没有间隙（border,inline box,padding）

  > 例如一个父框有border则不会与子框外边距折叠,其中有行内元素也不会折叠

- 双方都属于正常排版(normal flow)上下文中

  > 如果父框或子框又float,overflow不是visible的属性则不折叠

- 双方的框边缘垂直相邻：

  - 框的上边距和其内部正常排版(normal flow)的第一个子框上边距
  - 框的下边距和其内部正常排版(normal flow)的最后一个子框下边距
  - 框的下边距和其正常排版(normal flow)的兄弟框的上边距
  - 框的上下边距，如果框没有建立新的块格式上下文(block formatting context),且height是0属于正常排版的

计算（当参与的边距出现正负之分）：

- 都是正值，取最大值
- 都是负值，取绝对值最大的负值
- 有正有负，取绝对值最大的正值加上绝对值最大的负值



## 包含块(containing block)

每个元素都是相对于包含块摆放，包含块就是一个元素的“布局上下文(formatting context)”。一个元素盒子的位置和大小有时是通过相对于一个特定的长方形来计算的，这个长方形就被称之为元素的 containing block。但是元素盒并不受限于他的包含块，当他的布局跑到包含块外时成为溢出(overflow)

建立包含块的规则如下：

- 根元素的包含块（也叫初始包含块）由user-agent生成，在HTML中，根元素是HTML元素，尽管有的浏览器会不正确地使用body元素。
- 如果元素的`position:relative/static`,元素的包含块设置为最近的块级祖先元素的内容框(Content edge)
- 如果元素设置了’position: fixed’，包含块由viewport创建
- 如果非根元素`positionk:absoluted`，包含块为最近的`position`不是`static`的祖先元素。此时：
  - 如果祖先元素是块级元素，包含块设为祖先元素的内边距框(Padding edge)
  - 如果祖先元素是行级元素，包含块设为祖先元素的内容框(Content edge)
- 如果没有祖先元素,包含块是根元素盒子的内容框



## 替换元素/非替换元素

浏览器只根据元素的标签和属性来决定元素的显示内容的元素成为__替换元素__。常有img标签，标签内包含的内容不会影响到元素的显示，即`<img>asdfa</img>`不会显示内容，而只会根据img的src属性来决定显示内容，同样的有`<img><input><textarea><select><object>`.通过CSS content 属性插入的对象被称为__匿名可替换元素__。除了替换元素外的元素都成为__非替换元素__



## 块级元素(block-level elements),块级框(block-level boxes),块容器框(block container boxes)，块框(block boxes)

__块级元素：__`display:block/list-item/table`的元素

__块级框：__每个块级元素生成一个主要的块级框来包含其子框和生成的内容。这里一个元素有可能产生多个块级框，比如`<li>`会产生标识列表序号的块级框，这个次要框会依据主要框布局

__块容器框：__除table框和可替换元素外，其他所有的块级框都是块容器框。一个块容器框要么只包含块级框要么创建一个行格式上下文(LFC)而只包含行级框。

__块框：__ 并非所有的块容器框都是块级框，不可替换的inline -block和不可替换的 table-cell 也是块容器但不是块级框。是块级框的块容器称作块框。

> 解释一下一个块容器框的包含内容。
>
> ```html
> <DIV>
> Some text
> <P>More text</P>
> </DIV>
> ```
>
> 如果一个块容器框(如上例中为 DIV 生成的框)有一个块级框(如上例中的 P)，那么我们强制它只包含块级框在其中,所以"some text"会强制被一个__匿名块框__包围。当一个行内框(inline box)包含一个属于normal flow的块级框，这个行内框（及与其位于同一行框(line box)的行内祖先）会被从周围的块级框（及其连续的块级兄弟 ）中分离出来，把行内框分离成两个框，它在块级框两边。在打断之前和打断之后的行框都附入匿名块框，并且该块级框与匿名块框成为兄弟。当这样的行内框受到相对定位影响，任何产生的移动同样影响到包含在行内框内的块级框。



## 行级元素(inline-level elements),行内框(inline boxes),行级框(inline level boxes)

__行级元素：__`display:inline/inline-block/inline-table`的元素。

__行级框：__ 行级元素产生的框，这些框会参与某个行格式上下文(LFC)

__行内框：__ 一个`display:inline`的非替换元素会生成一个行内框.每一个行内框都是一个行级框

__原子行级框(Atomic inline-level box)：__那些不是行内框的行级框(例如可替换的行级元素、inline-block元素和 inline-table元素)被称为原子行级框，因为它们是以单一不透明框的形式来参与其行格式化上下文

__匿名行内框：__任何直接被包含在一个块容器元素（而不是行内元素）中的文本必须视为匿名行内元素



## 定位方案 Positioning schemes

1. 正常排版normal flow。正常排版包括对块级框的块格式化bfc，对行级框的行格式化ifc，对块级框和行级框的相对定位。
2. 浮动。在浮动模型中，一个框先按照正常排版来摆放，再将它从排版流中取出并尽可能地向左或向右偏移。其它内容可以排在一个浮动的周围。
3. 绝对定位。在绝对定位模型中，一个框会从排版流中完全脱离出来（它对后续的兄弟没有影响），并相对其包含块来指定其位置。

> 一个元素如果它是浮动、绝对定位或根元素，则被称为排版流之外out of flow的元素。
>
> user-agent可将根元素上的position视为static正常排版normal flow。

**‘display’、 ‘position’ 与 ‘float’ 的关系 **

影响框的生成和布局的三个属性——’display’，’position’和’float’——间的相互关系如下:

1. 如果’display’值为’none’，那么’position’和’float’无效，元素不生成框。
2. 否则，如果’position’值为’absolute’或者’fixed’，框绝对地定位’float’计算的值为’none’，并且 display 根据下面的表格进行设定。框的位置由’top’, ‘right’,’bottom’和’left’属性和包含块决定。
3. 否则，如果’float’的值不是’none’，该框是浮动的，且’display’值根据下面的表格进行设定。
4. 否则，如果元素是根元素，’display’值根据下面的表格进行设定，除了其在 CSS2.1 里面没有定义是否指定值’list-item’对应计算值’block’或者’list-item’。
5. 否则，’display’ 的计算值为指定的值。



##  格式化上下文 Formatting context

Formatting context 是 W3C CSS2.1 规范中的一个概念，它是页面中的一块渲染区域，并且有一套渲染规则，它决定了其子元素将如何定位，以及和其他元素的关系和相互作用。最常见的 Formatting context 有 Block fomatting context (简称BFC)和 Inline formatting context (简称IFC)

### BFC

块格式化上下文对于定位与清除浮动很重要。定位和清除浮动的样式规则只适用于处于同一块格式化上下文内的元素。浮动不会影响其它块格式化上下文中元素的布局，并且清除浮动只能清除同一块格式化上下文中在它前面的元素的浮动。

块格式化上下文由以下之一创建：

- 根元素或其它包含它的元素
- 浮动 (元素的` float` 不是 `none`)
- 绝对定位的元素
- 内联块 inline-blocks
- 表格单元格 / 表格标题
- 块元素具有`overflow`，且值不是 `visible`

### IFC

布局规则：

1. 框会从包含块的顶部开始，一个接一个地水平摆放。
2. 摆放这些框的时候，它们在水平方向上的外边距、边框、内边距所占用的空间都会被考虑在内。在垂直方向上，这些框可能会以不同形式来对齐：它们可能会把底部或顶部对齐，也可能把其内部的文本基线对齐。能把在一行上的框都完全包含进去的一个矩形区域，被称为该行的行框。水平的margin、padding、border有效，垂直无效。不能指定宽高。
3. 行框的宽度是由包含块和存在的浮动来决定。行框的高度由行高计算这一章所描述的规则来决定。