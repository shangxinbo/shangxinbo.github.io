# Object.defineProperty()

*2017-09-01*

该方法允许精确添加或修改对象的属性。一般我们通过赋值的方式添加或修改的属性，可以枚举，也可以被修改删除。而Object.defineProperty()允许我们设置这个属性的这些细节。

### 语法

Oboject.defineProperty(obj,prop,descriptor)

* obj(Object), 要被操作的对象
* prop(String), 目标对象要被定义的属性名
* descriptor(Object), 描述符

### 描述符

* 公共描述符

  configurable 当且仅当该值为true时，该属性描述符才能被改变(write 属性除外，但如果configurable设置为false时，write只能从true变成false,不能由false变成true)，同时该属性才能被删除,默认是false

  enumerable 当且仅当该值为true时，该值才能出现在对象的枚举属性中。默认时false

   ```Javascript
  let obj = Object.create(null)
  Object.defineProperty(obj,'name',{
  	get:function(){
    	return 'aa'
    }
  })
  Object.defineProperty(obj,'name',{
    set:function(value){
    	this.name = value
    }
  })
  // 因为configurable 默认是false,第一次定义的属性不能再此修改属性的描述符
  // Uncaught TypeError: Cannot redefine property: name
   ```

  ```Javascript
  let obj = {
  	id:1,
    name:'smallhead'
  }
  delete obj.name  //可以删除
  Object.defineProperty(obj,'name',{
  	get:function(){
    	return 'aa'
    }
  })
  delete obj.name  //不可以删除，但不报错，严格模式下会报错
  ```

  ```Javascript
  let obj = {
  	id:1
  }
  Object.defineProperty(obj,'name',{
  	enumerable:true
  })
  console.log(obj) //{id:1,name:undefined}
  ```

  ```Javascript
  let obj = Object.create(null)
  Object.defineProperty(obj,'name',{
  	configurable:false,
   	writable:true,
    enumerable:true
  })
  // 报错 Uncaught TypeError: Cannot redefine property: name
  Object.defineProperty(obj,'name',{
   	enumerable:true
  })
  // 可以执行
  Object.defineProperty(obj,'name',{
   	writable:false
  })
  console.log(obj)
  ```

  ​

* 数据描述符

  value(any js type) 该属性对应的值,默认时undefined

  Writable(Boollen) 当且仅当该值该值为true 时，该属性才能被赋值运算符改变，默认false

  ```javascript
  let obj = Object.create(null)
  Object.defineProperty(obj,'name',{
  	enumerable:true	,
  	value:'aa',
    writable:false
  })
  obj.name = 'sdfa'
  console.log(obj) //{name:'aa'}
  ```

* 存取描述符

  get 一个给属性提供getter的方法，getter的返回值用作属性值，若没有getter则为undefined

  set  一个给属性提供setter的方法，该方法接受唯一参数是要设置的新值，若没有setter则为undefined



NOTE :数据描述符合存取描述符不能同时出现

```Javascript
let obj = Object.create(null)
Object.defineProperty(obj,'name',{
	enumerable:true,
 	writable:false,
	get:function(){
  	return 'aa'
  }
})
console.log(obj)
// 不能同时有数据描述符合存取描述符
// Uncaught TypeError: Invalid property descriptor. Cannot both specify accessors and a value or writable attribute
```

NOTE : 使用 . 运算符和defineProperty定义的属性描述符默认值是不一样的

```javascript
var o = {};

o.a = 1;
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : true,
  configurable : true,
  enumerable : true
});

// 另一方面，
Object.defineProperty(o, "a", { value : 1 });
// 等同于 :
Object.defineProperty(o, "a", {
  value : 1,
  writable : false,
  configurable : false,
  enumerable : false
});
```

 使用getter 和setter 的例子

```Javascript
function Archiver() {
  var temperature = null;
  var archive = [];

  Object.defineProperty(this, 'temperature', {
    get: function() {
      console.log('get!');
      return temperature;
    },
    set: function(value) {
      temperature = value;
      archive.push({ val: temperature });
    }
  });

  this.getArchive = function() { return archive; };
}

var arc = new Archiver();
arc.temperature; // 'get!'
arc.temperature = 11;
arc.temperature = 13;
arc.getArchive(); // [{ val: 11 }, { val: 13 }]
```



和Object.defineProperty()类似的还有一个Object.defineProperties(),功能类似，只是可以一次定义多个属性的描述

Object.defineProperties(*obj*, *props*)

```javascript
var obj = {};
Object.defineProperties(obj, {
  "property1": {
    value: true,
    writable: true
  },
  "property2": {
    value: "Hello",
    writable: false
  }
})
```



