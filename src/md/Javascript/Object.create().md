# Object.create()

Object.create(proto [, propertiesObject])

* proto:(object) 要继承的原型
* propertiesObject:(object) 为新对象创建的属性，该对象是一组属性和属性描述符，其中属性描述符可以是和Object.defineProperty()参数一致

如果不想继承，可以使用create(null)创建一个全新的对象，如果proto不是null也不是一个对象的话，会抛出一个TypeError异常

```Javascript
// 基类
function Site() {
  this.name = 'Site';
  this.domain = 'domain';
}

Site.prototype.create = function(name, domain) {
  this.name = name;
  this.domain = domain;
};

// 子类
function Itbilu() {
  Site.call(this); //调用基类的构造函数
}

// 继承父类
Itbilu.prototype = Object.create(Site.prototype);

// 创建类实例
var itbilu = new Itbilu();

itbilu instanceof Site;  // true
tbilu instanceof Itbilu;  // true

itbilu.create('IT笔录', 'itbilu.com');
itbilu.name;    // 'IT笔录'
itbilu.domain;  // 'itbilu.com'
```

在不指定propertiesObject参数时，Object.create()实现继承的方式和原型继承的方式没有区别

```Javascript
// 继承父类
Itbilu.prototype = Site.prototype;

// 创建类实例
var itbilu = new Itbilu();

itbilu instanceof Site;  // true
tbilu instanceof Itbilu;  // true

itbilu.create('IT笔录', 'itbilu.com');
itbilu.name;    // 'IT笔录'
itbilu.domain;  // 'itbilu.com'
```

