# Node.js
1. 开源，跨平台的JavaScript运行时
2. 用于创建Web应用命令行工具等。因为是解释型语言，也会用于脚本编写

## 核心
有别于其他运行时或者其他服务端语言的核心特性

### 异步事件驱动特性
Node.js使用事件循环机制，所有的操作都是基于事件的。Node.js的I/O是异步的非阻塞的，无需等待执行，一旦I/O操作完成，相应的回调函数会被放入到事件队列中，等待事件循环处理

调用栈：是一个标准的先入后出的栈结构，每当一个函数被调用时，它会被推入栈顶；当函数执行完毕时，它会被弹出栈。因为Node.js是单线程模型，所以调用栈机制确保同时只有一个任务执行。

事件队列：当异步操作完成时，相关的回调函数会被放入事件队列中，等待被执行。

事件循环：事件循环会不断检查调用栈是否为空。如果调用栈为空，事件循环就会从事件队列中取出一个回调函数并推入调用栈，执行它。这个过程会不断循环，直到事件队列为空。

所以可以理解Node.js的程序执行本质上是一个调用栈和一个事件队列来维护函数，事件循环作为机制来控制栈和队列的入和出。

对于异步回调的函数根据执行任务的不同分为两种

宏任务：指那些较大、较复杂的异步操作，如 setTimeout、setInterval、I/O 操作等。每个宏任务会在事件循环中创建一个新的执行上下文。

微任务：是指那些更小、优先级更高的异步操作，如 Promise 的 .then()，MutationObserver 等

优先级：微任务优先级高于宏任务。

```
console.log('Start'); // 宏任务
setTimeout(() => {
  console.log('Timeout'); // 宏任务
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 1'); // 微任务
}).then(() => {
  console.log('Promise 2'); // 微任务
});

console.log('End'); // 宏任务

```
输出顺序是
```
Start
End
Promise 1
Promise 2
Timeout
```

事件循环机制导致Node.js的代码因为回调函数嵌套很多，可以使用async/await语法糖来将异步调用关系看起来像是同步调用一般。
浏览器的事件循环机制和Node.js的原理基本一致，但由于有些I/O是和Node.js不同，所以实现有所不同，这也可以看出事件循环机制没有坐在V8引擎的原因。


### 单线程模型
Node.js是单线程的，由于异步非阻塞性，它可以在同一个线程处理多个请求，避免了多线程变成的复杂性，比如不会遇到死锁问题，这是其高效利用系统资源的一种手段。

这是Node.js的优点，这里不能理解成因为异步单线程特性就认为Node.js的执行效率要高，具体的性能对比要看应用场景。

> 关于多线程和多进程的应用

进程：是运行中的程序实例，是操作系统分配资源的基本单位。
打开windows的资源管理器，可以形象化来看进程。
进程是独立的，相互切换和通信是需要消耗比较大的资源的。

线程：是进程的执行单元，是调度基本单位。

进程和线程的分配是操作系统级的调度机制，操作系统会根据资源可用性自动将 Node.js 的进程或线程分配到适当的核心，Node.js 本身并没有直接控制使用哪个CPU核心的能力。所以虽然Node.js是单线程模型，不代表多核心对于Node.js的程序没有价值，因为服务器上的应用程序不仅仅只有Node.js,关于调度的平衡性是操作系统级别考虑的事情。

即使这样，Node.js也可以进行多进程和多线程变成。
创建多进程可以使用cluster，child_process，一般的像Node.js薄弱的计算密集型的任务可以放在另外的子进程中执行，不会影响主进程的任务。   
多线程可以通过worker_threads来执行。
关于多线程和多进程之间的通信和资源利用后续探究


### V8引擎
Node.js和大部分浏览器包括EDGE也在2020年使用了V8引擎，不得不说如今前端的盛世一半的功劳在V8引擎上。

查看node的v8版本
```
node -p process.versions
```
虽然JavaScript是解释型语言，但是当代的JS引擎已经不再只是解释JS，而是对其进行编译。
#### 即时编译（JIT）
V8 使用即时编译技术，将 JavaScript 代码编译为机器代码，这样可以提高执行速度。它根据运行时的性能情况动态优化代码。JIT的过程有很多V8引擎做的优化，在这里朝纲暂且不深究。

#### 高校垃圾回收
v8的垃圾回收是自动管理内存的机制，因此开发者通常不需要直接干预或调用垃圾回收。
但是知道了其垃圾回收的原理后，我们在写程序时尽量减少频繁创建变量，减少变量的生命周期，尽量用年轻代回收代替老年代回收过程是对性能优化有帮助的。

因为我们无从处理v8的垃圾回收，所以一旦出现内存泄漏问题就是非常难以解决的问题。

一般我们用Chrome DevTools的Memory面板，在Node.js中我们可以使用工具生成一段时间的内存快照，然后导入到Chrome DevTools里进行分析，即使这样，我们也很难轻松的发现内存泄漏的点。

我们一般能做的就是添加内存监控工具，关注内存的变化情况，适当加大内存保证服务稳定性，同时认真审查代码，在审查代码时作增减量操作验证内存泄漏情况，这些操作。


## 版本

node 主版本(semver-major release)是每隔6个月从主分支(master)上创建分支。每个奇数版本(v5,v7)在每年10月份创建，偶数版本(v6,v8)是在每年4月份创建。当一个奇数版本创建之后，最近的一个偶数版本会立即进入LTS维护计划，一直持续18个月。过了18个月后会有12个月的延长维护期。版本的生存周期规则如下：

* 奇数版本：开发版本，每年10月份产生，到第二年4月份是current期，之后是2个月的维护期，一般不做为生产环境使用的版本。
* 偶数版本：稳定版本，每年4月份产生，到10月份是current期，之后是18个月的LTS期，之后是12个月的maintenance期。


处于不同的生命周期中，进行的更新是不同的：

* LTS期：bug fix, 安全更新, npm主版本更新，相关文档更新，某些性能改进及未来新特性兼容的更新
* maintenance期：严重bug fix,严重安全fix,文档更新

当前的node版本可以查看[schedule](https://github.com/nodejs/release#release-schedule)


## Node.js替代
bun
neno