# Window.performance

Performance API 是几个api的组合，用于精确度量网页在浏览器中的性能表现。

### PerformanceTiming API

以前我们使用Date.getTime()的方法来测量网页的性能

```Html
<html>
<head>
<script type="text/javascript">

var start = new Date().getTime();
function onLoad() {
  var now = new Date().getTime();
  var latency = now - start;
  alert("page loading time: " + latency);
}

</script>
</head>
<body onload="onLoad()">
<!- Main page body goes from here. -->
</body>
</html>
```

这样我们可以测量出网页加载完成需要的时间，现在有了PerformanceTiming ，你可以将上面的程序改成

```Html
<html>
<head>
<script type="text/javascript">
function onLoad() {
  var now = new Date().getTime();
  var page_load_time = now - performance.timing.navigationStart;
  alert("User-perceived page loading time: " + page_load_time);
}

</script>
</head>
<body onload="onLoad()">
<!- Main page body goes from here. -->
</body>
</html>
```

这个API主要解决两个问题

* 原先用Date().getTime()方式只能精确到毫秒级别，但是网页性能应该更精确，比如requestAnimationFrame的每次执行可以算作16.67毫秒。
* 解决一些程序不能捕捉到的执行时间，比如网页从请求到得到请求的时间等等

这个API 有以下属性

```c++
interface PerformanceTiming {
  readonly attribute unsigned long long navigationStart;
  readonly attribute unsigned long long unloadEventStart;
  readonly attribute unsigned long long unloadEventEnd;
  readonly attribute unsigned long long redirectStart;
  readonly attribute unsigned long long redirectEnd;
  readonly attribute unsigned long long fetchStart;
  readonly attribute unsigned long long domainLookupStart;
  readonly attribute unsigned long long domainLookupEnd;
  readonly attribute unsigned long long connectStart;
  readonly attribute unsigned long long connectEnd;
  readonly attribute unsigned long long secureConnectionStart;
  readonly attribute unsigned long long requestStart;
  readonly attribute unsigned long long responseStart;
  readonly attribute unsigned long long responseEnd;
  readonly attribute unsigned long long domLoading;
  readonly attribute unsigned long long domInteractive;
  readonly attribute unsigned long long domContentLoadedEventStart;
  readonly attribute unsigned long long domContentLoadedEventEnd;
  readonly attribute unsigned long long domComplete;
  readonly attribute unsigned long long loadEventStart;
  readonly attribute unsigned long long loadEventEnd;
};
```

* **navigationStart**：当前浏览器窗口的前一个网页关闭，发生unload事件时的Unix毫秒时间戳。如果没有前一个网页，则等于fetchStart属性。
* **unloadEventStart**：如果前一个网页与当前网页属于同一个域名，则返回前一个网页的unload事件发生时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。
* **unloadEventEnd**：如果前一个网页与当前网页属于同一个域名，则返回前一个网页unload事件的回调函数结束时的Unix毫秒时间戳。如果没有前一个网页，或者之前的网页跳转不是在同一个域名内，则返回值为0。
* **redirectStart**：返回第一个HTTP跳转开始时的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。
* **redirectEnd**：返回最后一个HTTP跳转结束时（即跳转回应的最后一个字节接受完成时）的Unix毫秒时间戳。如果没有跳转，或者不是同一个域名内部的跳转，则返回值为0。
* **fetchStart**：返回浏览器准备使用HTTP请求读取文档时的Unix毫秒时间戳。该事件在网页查询本地缓存之前发生。
* **domainLookupStart**：返回域名查询开始时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。
* **domainLookupEnd**：返回域名查询结束时的Unix毫秒时间戳。如果使用持久连接，或者信息是从本地缓存获取的，则返回值等同于fetchStart属性的值。
* **connectStart**：返回HTTP请求开始向服务器发送时的Unix毫秒时间戳。如果使用持久连接（persistent connection），则返回值等同于fetchStart属性的值。
* **connectEnd**：返回浏览器与服务器之间的连接建立时的Unix毫秒时间戳。如果建立的是持久连接，则返回值等同于fetchStart属性的值。连接建立指的是所有握手和认证过程全部结束。
* **secureConnectionStart**：返回浏览器与服务器开始安全链接的握手时的Unix毫秒时间戳。如果当前网页不要求安全连接，则返回0。
* **requestStart**：返回浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的Unix毫秒时间戳。
* **responseStart**：返回浏览器从服务器收到（或从本地缓存读取）第一个字节时的Unix毫秒时间戳。
* **responseEnd**：返回浏览器从服务器收到（或从本地缓存读取）最后一个字节时（如果在此之前HTTP连接已经关闭，则返回关闭时）的Unix毫秒时间戳。
* **domLoading**：返回当前网页DOM结构开始解析时（即Document.readyState属性变为“loading”、相应的readystatechange事件触发时）的Unix毫秒时间戳。
* **domInteractive**：返回当前网页DOM结构结束解析、开始加载内嵌资源时（即Document.readyState属性变为“interactive”、相应的readystatechange事件触发时）的Unix毫秒时间戳。
* **domContentLoadedEventStart**：返回当前网页DOMContentLoaded事件发生时（即DOM结构解析完毕、所有脚本开始运行时）的Unix毫秒时间戳。
* **domContentLoadedEventEnd**：返回当前网页所有需要执行的脚本执行完成时的Unix毫秒时间戳。
* **domComplete**：返回当前网页DOM结构生成时（即Document.readyState属性变为“complete”，以及相应的readystatechange事件发生时）的Unix毫秒时间戳。
* **loadEventStart**：返回当前网页load事件的回调函数开始时的Unix毫秒时间戳。如果该事件还没有发生，返回0。
* **loadEventEnd**：返回当前网页load事件的回调函数运行结束时的Unix毫秒时间戳。如果该事件还没有发生，返回0。



![](https://www.w3.org/TR/navigation-timing/timing-overview.png)

### PerformanceNavigation API

```C++
interface PerformanceNavigation {
  const unsigned short TYPE_NAVIGATE = 0;
  const unsigned short TYPE_RELOAD = 1;
  const unsigned short TYPE_BACK_FORWARD = 2;
  const unsigned short TYPE_RESERVED = 255;
  readonly attribute unsigned short type;
  readonly attribute unsigned short redirectCount;
};
```

两个属性 type ／redirectCount

* type 
  * 0 网页通过点击链接、地址栏输入、表单提交、脚本操作等方式加载，相当于常数 TYPE_NAVIGATENEXT
  * 1 网页通过“重新加载”按钮或者location.reload()方法加载，相当于常数TYPE_RELOAD
  * 2 网页通过“前进”或“后退”按钮加载，相当于常数TYPE_BACK_FORWARD
  * 255 任何其他来源的加载，相当于常数TYPE_UNDEFINED
* redirectCount 表示当前网页经过了多少次重定向跳转



以上API 在HTML5 规范中定义了一个在window对象上的接口 performance

```Java
interface Performance {
  readonly attribute PerformanceTiming timing;
  readonly attribute PerformanceNavigation navigation;
};

partial interface Window {
  [Replaceable] readonly attribute Performance performance;
};
```

除此之外在chrome上为window.performance添加了memory属性

Performance.memory 非标准属性，提供内存占用情况，不被建议使用。

### performance methods

* clearMarks()
* clearMeasures()
* clearResourceTimings()
* getEntries()
* getEntriesByType()
* mark()
* measure()
* now()
* setResourceTimingBufferSize()
* toJSON()





https://www.w3.org/TR/navigation-timing/

https://www.w3.org/TR/user-timing/#performancemark

https://developer.mozilla.org/en-US/docs/Web/API/Performance_API

https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline

http://javascript.ruanyifeng.com/bom/performance.html

https://www.w3.org/TR/hr-time-2/