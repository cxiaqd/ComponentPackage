好的，我将从**语言核心、异步编程、内存管理、原型继承、函数式编程、模块化、设计模式、性能优化、错误处理、安全、工程化、新特性**等12个维度，整理30个有深度的JavaScript面试问题，并提供详细解答。

---

## 一、语言核心（4题）

### 问题1：JavaScript中的变量提升（Hoisting）机制是怎样的？`var`、`let`、`const`在提升上有什么区别？暂时性死区（TDZ）是什么？

**考察点**：对JS执行上下文的理解

**参考答案**：

**变量提升的本质**：JS在编译阶段会收集所有变量和函数声明，并将其提升到当前作用域的顶部。

**三种声明的区别**：

```javascript
// 1. var：声明提升，初始化为 undefined
console.log(a); // undefined
var a = 1;
// 等价于
var a;
console.log(a); // undefined
a = 1;

// 2. let/const：声明提升，但未初始化（TDZ）
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

// 3. const：必须在声明时赋值，且不可重新赋值
const c; // SyntaxError: Missing initializer in const declaration
```

**暂时性死区（TDZ）**：
```javascript
// TDZ 开始
if (true) {
  // TDZ 开始
  console.log(x); // ReferenceError
  let x = 1;      // TDZ 结束
  console.log(x); // 1
}

// 函数参数中的 TDZ
function test(a = b, b = 2) {
  // 参数 a 的默认值无法访问到 b（还在 TDZ）
  console.log(a, b);
}
test(); // ReferenceError: Cannot access 'b' before initialization
```

**函数提升的特殊性**：
```javascript
// 函数声明：整体提升
foo(); // 可以执行
function foo() {
  console.log('foo');
}

// 函数表达式：只提升变量
bar(); // TypeError: bar is not a function
var bar = function() {
  console.log('bar');
};
```

---

### 问题2：JavaScript中的类型转换规则是什么？`==`和`===`的区别？什么情况下推荐使用`==`？

**考察点**：对JS弱类型系统的理解

**参考答案**：

**ToPrimitive 转换规则**：
```javascript
// 对象转原始值
const obj = {
  valueOf() { return 42; },
  toString() { return '42'; }
};

console.log(obj + 1); // 43（优先调用 valueOf）
console.log(String(obj)); // '42'（字符串转换优先 toString）
```

**`==` 的抽象相等比较算法**（简化版）：
```javascript
// 1. 同类型：直接比较
// 2. null == undefined：true
// 3. 数字 vs 字符串：字符串转数字
// 4. 布尔值 vs 其他：布尔值转数字
// 5. 对象 vs 原始值：对象转原始值

// 经典案例
console.log([] == false); // true
// 解析：[] 转字符串 '' → 数字 0，false 转数字 0 → 0 == 0

console.log([] == ![]); // true
// 解析：![] 是 false → 数字 0，[] 转数字 0 → 0 == 0

console.log({} == {}); // false（不同对象引用）
console.log({} == '[object Object]'); // true
```

**`===` 的比较规则**：
- 同类型直接比较值
- 不同类型直接返回 false（NaN 除外）

**推荐使用场景**：
```javascript
// 1. 检测 null 或 undefined（唯一推荐使用 == 的场景）
if (obj == null) {
  // 等价于 obj === null || obj === undefined
}

// 2. 其他所有场景都推荐使用 ===
// 原因：避免隐式转换带来的意外
```

---

### 问题3：闭包的原理是什么？实际开发中有哪些应用场景？如何避免闭包导致的内存泄漏？

**考察点**：对作用域链和内存管理的理解

**参考答案**：

**闭包原理**：
```javascript
function outer() {
  let count = 0; // 被内部函数引用，不会被垃圾回收
  
  return function inner() {
    count++; // 保留对 count 的引用
    return count;
  };
}

const counter = outer();
console.log(counter()); // 1
console.log(counter()); // 2
// count 变量仍然存在于内存中
```

**执行上下文视角**：
- outer 执行时创建执行上下文，count 存储在其中
- inner 被返回时，其 `[[Scope]]` 属性引用了 outer 的变量对象
- 即使 outer 执行完毕，其变量对象也不会被回收，因为仍有引用

**应用场景**：

1. **数据私有化**
```javascript
function createBankAccount(initialBalance) {
  let balance = initialBalance;
  
  return {
    deposit(amount) {
      balance += amount;
      return balance;
    },
    withdraw(amount) {
      if (amount > balance) {
        throw new Error('余额不足');
      }
      balance -= amount;
      return balance;
    },
    getBalance() {
      return balance;
    }
  };
}
```

2. **函数柯里化**
```javascript
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...more) {
      return curried.apply(this, args.concat(more));
    };
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
```

3. **防抖节流**
```javascript
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
```

4. **模块化模式**
```javascript
const Module = (function() {
  let privateVar = 0;
  
  function privateMethod() {
    return privateVar;
  }
  
  return {
    publicMethod() {
      return privateMethod();
    },
    increment() {
      privateVar++;
    }
  };
})();
```

**内存泄漏问题**：
```javascript
// 1. 闭包引用大对象
function leak() {
  const largeData = new Array(1000000).fill('data');
  
  return function() {
    // 即使不需要 largeData，仍被引用
    console.log('hello');
  };
}

// 解决方案：切断引用
function noLeak() {
  const largeData = new Array(1000000).fill('data');
  const result = function() {
    console.log('hello');
  };
  // 主动释放
  largeData = null;
  return result;
}

// 2. 事件监听未移除
function setup() {
  const element = document.getElementById('btn');
  const data = { /* 大量数据 */ };
  
  element.addEventListener('click', () => {
    console.log(data);
  });
  // 即使移除元素，闭包仍持有 data 引用
  
  // 解决方案：移除监听或使用弱引用
  element.removeEventListener('click', handler);
}
```

---

### 问题4：`this` 的绑定规则是什么？箭头函数中的 `this` 有何不同？如何实现 `bind`、`call`、`apply`？

**考察点**：对 this 机制的深入理解

**参考答案**：

**this 的四种绑定规则**：

```javascript
// 1. 默认绑定（严格模式指向 undefined，非严格指向全局对象）
function foo() {
  console.log(this);
}
foo(); // 浏览器：window，严格模式：undefined

// 2. 隐式绑定（对象方法调用）
const obj = {
  name: 'obj',
  foo() {
    console.log(this.name);
  }
};
obj.foo(); // 'obj'

// 隐式丢失
const bar = obj.foo;
bar(); // undefined（指向全局）

// 3. 显式绑定（call、apply、bind）
obj.foo.call({ name: 'explicit' }); // 'explicit'

// 4. new 绑定（构造函数调用）
function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name); // 'John'

// 优先级：new 绑定 > 显式绑定 > 隐式绑定 > 默认绑定
```

**箭头函数的 this**：
```javascript
// 箭头函数没有自己的 this，继承外层作用域的 this
const obj = {
  name: 'obj',
  foo: function() {
    const arrow = () => {
      console.log(this.name); // this 继承自 foo 的 this
    };
    arrow();
  },
  bar: () => {
    console.log(this.name); // this 继承自外层（window）
  }
};

obj.foo(); // 'obj'
obj.bar(); // undefined

// 场景：避免 this 丢失
class Component {
  constructor() {
    this.count = 0;
    // 使用箭头函数自动绑定 this
    this.handleClick = () => {
      this.count++;
    };
  }
}
// handleClick 定义时，constructor 内部的 this 指向当前创建的实例（例如 comp）。
// 箭头函数捕获了这个 this，所以无论之后 handleClick 如何被调用（直接调用、作为回调、传给 setTimeout 等），函数体内的 this 始终指向那个实例。
```

**手写 bind**：
```javascript
Function.prototype.myBind = function(context, ...args) {
  const fn = this;
  
  // 处理构造函数调用的情况
  function bound(...newArgs) {
    const isConstructor = this instanceof bound;
    const ctx = isConstructor ? this : (context || globalThis);
    
    return fn.apply(ctx, [...args, ...newArgs]);
  }
  
  // 维护原型链
  if (fn.prototype) {
    bound.prototype = Object.create(fn.prototype);
  }
  
  return bound;
};

// 手写 call
Function.prototype.myCall = function(context, ...args) {
  const ctx = context || globalThis;
  const fnSymbol = Symbol();
  ctx[fnSymbol] = this;
  const result = ctx[fnSymbol](...args);
  delete ctx[fnSymbol];
  return result;
};

// 手写 apply
Function.prototype.myApply = function(context, args) {
  const ctx = context || globalThis;
  const fnSymbol = Symbol();
  ctx[fnSymbol] = this;
  const result = ctx[fnSymbol](...args);
  delete ctx[fnSymbol];
  return result;
};
```

---

## 二、异步编程（4题）

### 问题5：Promise 的实现原理是什么？如何手写一个符合 Promises/A+ 规范的 Promise？

**考察点**：对异步编程底层的理解

**参考答案**：

**核心设计**：
- Promise 有三种状态：pending、fulfilled、rejected，状态一旦改变不可逆
- 必须支持链式调用，then 方法返回新的 Promise
- 微任务执行回调

**简化实现**：

```javascript
class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];
    
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        // 异步执行回调
        this.onFulfilledCallbacks.forEach(fn => fn());
      }
    };
    
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectedCallbacks.forEach(fn => fn());
      }
    };
    
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }
  
  then(onFulfilled, onRejected) {
    // 参数默认值
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    
    const promise2 = new MyPromise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        queueMicrotask(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      
      if (this.state === 'rejected') {
        queueMicrotask(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(promise2, x, resolve, reject);
          } catch (err) {
            reject(err);
          }
        });
      }
      
      if (this.state === 'pending') {
        this.onFulfilledCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          });
        });
        
        this.onRejectedCallbacks.push(() => {
          queueMicrotask(() => {
            try {
              const x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (err) {
              reject(err);
            }
          });
        });
      }
    });
    
    return promise2;
  }
  
  catch(onRejected) {
    return this.then(null, onRejected);
  }
  
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      reason => MyPromise.resolve(callback()).then(() => { throw reason })
    );
  }
  
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise(resolve => resolve(value));
  }
  
  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason));
  }
  
  static all(promises) {
    return new MyPromise((resolve, reject) => {
      const results = [];
      let count = 0;
      
      promises.forEach((promise, index) => {
        MyPromise.resolve(promise).then(
          value => {
            results[index] = value;
            count++;
            if (count === promises.length) resolve(results);
          },
          reject
        );
      });
    });
  }
  
  static race(promises) {
    return new MyPromise((resolve, reject) => {
      promises.forEach(promise => {
        MyPromise.resolve(promise).then(resolve, reject);
      });
    });
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    reject(new TypeError('Chaining cycle detected'));
  }
  
  let called = false;
  
  if (x instanceof MyPromise) {
    x.then(
      y => {
        if (called) return;
        called = true;
        resolvePromise(promise2, y, resolve, reject);
      },
      r => {
        if (called) return;
        called = true;
        reject(r);
      }
    );
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      const then = x.then;
      if (typeof then === 'function') {
        then.call(
          x,
          y => {
            if (called) return;
            called = true;
            resolvePromise(promise2, y, resolve, reject);
          },
          r => {
            if (called) return;
            called = true;
            reject(r);
          }
        );
      } else {
        resolve(x);
      }
    } catch (err) {
      if (called) return;
      called = true;
      reject(err);
    }
  } else {
    resolve(x);
  }
}
```

---

### 问题6：async/await 的原理是什么？它是如何与 Promise 配合工作的？如何实现一个 async/await 的转换器？

**考察点**：对异步语法糖本质的理解

**参考答案**：

**原理**：async/await 是 Generator 函数 + 自动执行器的语法糖。

**Generator 实现 async/await**：

```javascript
// 自动执行器
function run(genFn) {
  const gen = genFn();
  
  function next(value) {
    const result = gen.next(value);
    if (result.done) {
      return Promise.resolve(result.value);
    }
    return Promise.resolve(result.value).then(next, err => {
      gen.throw(err);
    });
  }
  
  return next();
}

// 使用 Generator 模拟 async/await
function* asyncTask() {
  try {
    const data1 = yield fetch('/api/user');
    const data2 = yield fetch(`/api/profile/${data1.id}`);
    return data2;
  } catch (err) {
    console.error(err);
  }
}

run(asyncTask).then(result => {
  console.log(result);
});
```

**async/await 的转换**：
```javascript
// 原始代码
async function fetchData() {
  const user = await fetch('/user');
  const posts = await fetch(`/posts/${user.id}`);
  return posts;
}

// 转换后（简化）
function fetchData() {
  return new Promise((resolve, reject) => {
    function* generator() {
      const user = yield fetch('/user');
      const posts = yield fetch(`/posts/${user.id}`);
      return posts;
    }
    
    const gen = generator();
    
    function step(key, arg) {
      let result;
      try {
        result = gen[key](arg);
      } catch (err) {
        reject(err);
        return;
      }
      
      if (result.done) {
        resolve(result.value);
      } else {
        return Promise.resolve(result.value).then(
          v => step('next', v),
          e => step('throw', e)
        );
      }
    }
    
    step('next');
  });
}
```

**错误处理**：
```javascript
async function getData() {
  try {
    const data = await fetch('/api/data');
    return data.json();
  } catch (err) {
    // 网络错误或 reject 都会进入这里
    console.error('请求失败', err);
    return { default: true };
  }
}

// 等价于
function getData() {
  return fetch('/api/data')
    .then(res => res.json())
    .catch(err => {
      console.error('请求失败', err);
      return { default: true };
    });
}
```

---

### 问题7：如何实现一个可取消的异步任务？AbortController 的原理是什么？

**考察点**：对异步控制的理解

**参考答案**：

**AbortController 的使用**：

```javascript
// 取消 fetch 请求
const controller = new AbortController();
const { signal } = controller;

fetch('/api/data', { signal })
  .then(res => res.json())
  .catch(err => {
    if (err.name === 'AbortError') {
      console.log('请求已取消');
    }
  });

// 取消请求
controller.abort();
```

**手写 AbortController**：

```javascript
class MyAbortController {
  constructor() {
    this.signal = new MyAbortSignal();
  }
  
  abort() {
    this.signal.dispatchEvent(new Event('abort'));
  }
}

class MyAbortSignal extends EventTarget {
  constructor() {
    super();
    this.aborted = false;
  }
  
  dispatchEvent(event) {
    this.aborted = true;
    return super.dispatchEvent(event);
  }
}

// 实现可取消的 Promise
function cancellablePromise(executor) {
  let rejectFn = null;
  const abortController = new MyAbortController();
  
  const promise = new Promise((resolve, reject) => {
    rejectFn = reject;
    executor(resolve, reject, abortController.signal);
  });
  
  abortController.signal.addEventListener('abort', () => {
    rejectFn(new Error('Promise cancelled'));
  });
  
  promise.cancel = () => abortController.abort();
  
  return promise;
}

// 使用
const task = cancellablePromise((resolve, reject, signal) => {
  const timer = setTimeout(() => {
    resolve('完成');
  }, 5000);
  
  signal.addEventListener('abort', () => {
    clearTimeout(timer);
  });
});

task.cancel(); // 取消任务
```

**自定义可取消异步函数**：

```javascript
function cancellableDelay(ms) {
  let timeoutId = null;
  const controller = new AbortController();
  
  const promise = new Promise((resolve, reject) => {
    timeoutId = setTimeout(resolve, ms);
    
    controller.signal.addEventListener('abort', () => {
      clearTimeout(timeoutId);
      reject(new Error('Delay cancelled'));
    });
  });
  
  promise.cancel = () => controller.abort();
  return promise;
}

// 使用
const delay = cancellableDelay(3000);
delay.cancel(); // 取消延迟
```

---

### 问题8：Event Loop 中宏任务和微任务的执行顺序是怎样的？如何利用微任务优化性能？

**考察点**：对事件循环机制的深入理解

**参考答案**：

**执行顺序**：
```
1. 执行同步代码（当前调用栈）
2. 清空微任务队列（Promise.then, MutationObserver, queueMicrotask）
3. 执行一个宏任务（setTimeout, setInterval, I/O, UI渲染）
4. 重复步骤 2-3
```

**复杂案例**：

```javascript
console.log(1);

setTimeout(() => {
  console.log(2);
  Promise.resolve().then(() => {
    console.log(3);
  });
}, 0);

Promise.resolve().then(() => {
  console.log(4);
  setTimeout(() => {
    console.log(5);
  }, 0);
});

console.log(6);

// 输出顺序：1, 6, 4, 2, 3, 5
// 解析：
// 同步：1, 6
// 微任务：4
// 宏任务：2（执行时产生微任务3）
// 微任务：3
// 宏任务：5
```

**利用微任务优化性能**：

1. **批量 DOM 更新**
```javascript
class BatchUpdater {
  constructor() {
    this.queue = new Set();
    this.pending = false;
  }
  
  update(element, prop, value) {
    this.queue.add({ element, prop, value });
    
    if (!this.pending) {
      this.pending = true;
      queueMicrotask(() => {
        this.flush();
      });
    }
  }
  
  flush() {
    this.queue.forEach(item => {
      item.element[item.prop] = item.value;
    });
    this.queue.clear();
    this.pending = false;
  }
}

const updater = new BatchUpdater();
// 多次更新只会触发一次 DOM 操作
updater.update(div, 'textContent', 'A');
updater.update(div, 'textContent', 'B');
updater.update(div, 'textContent', 'C');


// 第一次调用 update
// this.queue 添加一条更新记录 { element, prop, value }。
// 此时 this.pending 为 false，进入条件分支：
// 设置 this.pending = true；
// 调用 queueMicrotask(() => this.flush())，将 flush 函数放入微任务队列。

// 第二次调用 update
// 添加第二条更新记录。
// 此时 this.pending 已经是 true（因为第一次调用时已设为 true），所以不会再次调用 queueMicrotask。
// 因此微任务队列中仍然只有第一次放入的那个 flush。

// 第三次调用 update
// 添加第三条更新记录。
// pending 仍为 true，依然不产生新的微任务。
// 同步代码执行完毕
// 当前宏任务（整个脚本）结束。
// 事件循环开始处理微任务队列，其中只有一个任务：flush 函数。
// 执行 flush
// 遍历 this.queue 中的所有更新记录（此时包含了三次添加的记录），依次执行 item.element[item.prop] = item.value。
// 清空队列，将 this.pending 重置为 false。
```

2. **延迟非关键操作**
```javascript
// 将非关键操作放到微任务中，让出主线程
function processData(data) {
  // 关键操作立即执行
  const result = data.map(x => x * 2);
  
  // 非关键操作（如日志上报）放到微任务
  queueMicrotask(() => {
    console.log('数据已处理', result);
    reportAnalytics(result);
  });
  
  return result;
}
```

3. **避免重复计算**
```javascript
class ComputedValue {
  constructor(getter) {
    this.getter = getter;
    this.cached = null;
    this.dirty = true;
    this.pending = false;
  }
  
  get value() {
    if (this.dirty) {
      if (!this.pending) {
        this.pending = true;
        queueMicrotask(() => {
          this.cached = this.getter();
          this.dirty = false;
          this.pending = false;
        });
      }
    }
    return this.cached;
  }
  
  invalidate() {
    this.dirty = true;
  }
}

// get value()：每次访问时，如果 dirty 为 true，并且没有 pending 计算，就会通过 queueMicrotask 调度一次真正的计算。计算完成后更新 cached，重置 dirty 和 pending。
// invalidate()：将 dirty 设为 true，表示缓存失效。下次访问时会重新调度计算。
// pending 标志：确保在同一个宏任务中，即使多次访问，也只调度一次微任务，避免重复计算。

// 1. 创建计算值实例，传入一个 getter 函数
const fullName = new ComputedValue(() => {
  console.log('重新计算 fullName');
  return `${user.firstName} ${user.lastName}`;
});

// 2. 访问 .value 属性
console.log(fullName.value);  // 第一次访问时，会调度微任务，但立刻返回 null（因为计算还没完成）
// 微任务执行后，cached 被更新，后续访问就能得到正确值

// 3. 当依赖变化时，调用 invalidate 标记为脏
user.firstName = 'Jane';
fullName.invalidate();

// 4. 下次访问 .value 会重新调度计算（异步），并返回旧缓存值
console.log(fullName.value);  // 仍然返回 "John Doe"，但在微任务中会更新为 "Jane Doe"


// 详细使用示例：假设我们有一个购物车，总价需要根据商品数量和单价实时计算，但为了性能，我们不想每次修改商品时都立即重算，而是在真正需要时才重算。

class ShoppingCart {
  constructor() {
    this.items = [];
    // 创建计算属性：总价
    this.totalPrice = new ComputedValue(() => {
      console.log('计算总价...');
      return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    });
  }

  addItem(price, quantity) {
    this.items.push({ price, quantity });
    // 标记总价需要重新计算
    this.totalPrice.invalidate();
  }

  removeItem(index) {
    this.items.splice(index, 1);
    this.totalPrice.invalidate();
  }

  // 获取总价（异步计算，但会立即返回上次结果）
  getTotal() {
    return this.totalPrice.value;
  }
}

// 使用
const cart = new ShoppingCart();
cart.addItem(10, 2);  // 添加商品，invalidate 标记脏
cart.addItem(20, 1);

console.log(cart.getTotal());  // 第一次获取，调度微任务，但返回 null（因为还没计算过）
// 等待微任务执行后...
setTimeout(() => {
  console.log(cart.getTotal());  // 现在返回计算后的值：40
}, 0);
```

---

## 三、内存管理与垃圾回收（3题）

### 问题9：JavaScript 的垃圾回收机制是怎样的？什么情况下会导致内存泄漏？如何排查和解决？

**考察点**：对内存管理的理解

**参考答案**：

**垃圾回收算法**：

1. **引用计数**（已淘汰）
```javascript
// 问题：循环引用导致内存泄漏
let obj1 = {};
let obj2 = {};
obj1.ref = obj2;
obj2.ref = obj1;
// 引用计数永远不会归零
```

2. **标记清除**（主流）
- 从根对象（全局对象、执行上下文）开始遍历
- 标记所有可达对象
- 清除未标记的对象

**内存泄漏的常见场景**：

```javascript
// 1. 全局变量
function leak() {
  // 忘记使用 var/let/const，意外创建全局变量
  leakedVar = 'This is a leak';
}

// 2. 闭包引用大对象
function createClosure() {
  const largeData = new Array(1000000);
  return function() {
    // 虽然不需要 largeData，但闭包持有引用
    console.log('hello');
  };
}

// 3. 未清理的定时器
function startTimer() {
  const data = { /* 大量数据 */ };
  setInterval(() => {
    console.log(data);
  }, 1000);
  // 忘记清理定时器，data 永远不会被回收
}

// 4. 事件监听未移除
function setupListener() {
  const element = document.getElementById('btn');
  const handler = () => {
    console.log('clicked');
  };
  element.addEventListener('click', handler);
  // 即使 element 被移除，handler 仍被引用
}

// 5. DOM 引用
const elements = [];
function addElement() {
  const div = document.createElement('div');
  elements.push(div); // 即使 DOM 被移除，数组仍持有引用
  document.body.appendChild(div);
}

// 6. Map/Set 中未清理的引用
const cache = new Map();
function cacheData(key, data) {
  cache.set(key, data);
  // 忘记清理，key 和 data 都无法回收
}

// 使用 WeakMap/WeakSet 解决
const weakCache = new WeakMap();
```

**排查内存泄漏**：

```javascript
// Chrome DevTools 排查步骤
1. 打开 Performance 面板，录制内存变化
2. 打开 Memory 面板，拍摄堆快照（Heap Snapshot）
3. 对比不同时刻的快照，查看持续增长的对象
4. 使用 Allocation instrumentation 追踪对象分配
5. 查看 Retainers（保留器）找到引用链

// 代码层面排查
function debugMemory() {
  console.log(performance.memory);
  // 输出：{ usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit }
}
```

**解决方案**：

```javascript
// 1. 使用 WeakRef 和 FinalizationRegistry（ES2021）
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`${heldValue} 被回收了`);
});

let obj = { data: 'important' };
registry.register(obj, 'obj');

// 2. 手动清理
class Component {
  constructor() {
    this.timer = setInterval(() => {}, 1000);
    this.element = document.getElementById('btn');
    this.handler = () => {};
    this.element.addEventListener('click', this.handler);
  }
  
  destroy() {
    clearInterval(this.timer);
    this.element.removeEventListener('click', this.handler);
    this.element = null;
  }
}
```

---

### 问题10：WeakMap 和 Map 有什么区别？WeakSet 和 Set 呢？实际开发中的应用场景？

**考察点**：对弱引用的理解

**参考答案**：

**核心区别**：

| 特性 | Map/Set | WeakMap/WeakSet |
|------|---------|-----------------|
| 键类型 | 任意类型 | 必须是对象 |
| 引用类型 | 强引用 | 弱引用 |
| 可迭代 | 是 | 否 |
| 大小属性 | size | 无 |
| 垃圾回收 | 阻止回收 | 不阻止回收 |

**WeakMap 示例**：

```javascript
let obj = { name: 'John' };
const weakMap = new WeakMap();
weakMap.set(obj, 'some data');

obj = null; // obj 可以被垃圾回收
// weakMap 中的条目也会自动清除
```

**应用场景**：

1. **私有数据存储**
```javascript
const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    privateData.set(this, { name, age });
  }
  
  getName() {
    return privateData.get(this).name;
  }
  
  getAge() {
    return privateData.get(this).age;
  }
}
```

2. **DOM 元素关联数据**
```javascript
const domData = new WeakMap();

function setData(element, data) {
  domData.set(element, data);
}

function getData(element) {
  return domData.get(element);
}

// 当 DOM 元素被移除时，关联数据自动回收
const div = document.getElementById('app');
setData(div, { clicks: 0 });
div.remove(); // div 被回收，数据也自动回收
```

3. **缓存计算结果**
```javascript
const cache = new WeakMap();

function processObject(obj) {
  if (cache.has(obj)) {
    return cache.get(obj);
  }
  
  const result = expensiveComputation(obj);
  cache.set(obj, result);
  return result;
}
// 当 obj 不再使用时，缓存自动清除
```

4. **防止内存泄漏的监听器**
```javascript
const listeners = new WeakMap();

function addListener(element, callback) {
  if (!listeners.has(element)) {
    listeners.set(element, []);
  }
  listeners.get(element).push(callback);
  element.addEventListener('click', callback);
}

// element 被移除时，所有监听器自动释放
```

---

### 问题11：`new` 操作符的内部实现原理是什么？如何手写一个 `new`？

**考察点**：对对象创建机制的理解

**参考答案**：

**new 的操作步骤**：
1. 创建一个空对象
2. 将空对象的原型指向构造函数的 prototype
3. 将 this 绑定到新对象，执行构造函数
4. 如果构造函数返回对象，则返回该对象，否则返回新对象

**手写 new**：

```javascript
function myNew(Constructor, ...args) {
  // 1. 创建新对象，原型指向 Constructor.prototype
  const obj = Object.create(Constructor.prototype);
  
  // 2. 执行构造函数，绑定 this
  const result = Constructor.apply(obj, args);
  
  // 3. 如果构造函数返回对象，则返回该对象，否则返回新对象
  return result instanceof Object ? result : obj;
}

// 测试
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
};

const p = myNew(Person, 'John', 25);
p.sayHello(); // Hello, I'm John
console.log(p instanceof Person); // true
```

**特殊情况处理**：

```javascript
// 构造函数返回对象
function PersonWithReturn(name) {
  this.name = name;
  return { custom: true };
}

const p1 = myNew(PersonWithReturn, 'John');
console.log(p1 instanceof PersonWithReturn); // false
console.log(p1.custom); // true

// 构造函数返回原始值（被忽略）
function PersonWithPrimitive(name) {
  this.name = name;
  return 'primitive';
}

const p2 = myNew(PersonWithPrimitive, 'John');
console.log(p2 instanceof PersonWithPrimitive); // true
console.log(p2.name); // 'John'
```

---

## 四、原型与继承（2题）

### 问题12：JavaScript 的原型链是如何工作的？如何实现继承？Class 语法是语法糖吗？

**考察点**：对原型系统的理解

**参考答案**：

**原型链原理**：

```javascript
function Foo(name) {
  this.name = name;
}

Foo.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}`);
};

const foo = new Foo('John');

// 原型链查找
foo.sayHello(); // 实例 → Foo.prototype → Object.prototype → null

// 关系
console.log(foo.__proto__ === Foo.prototype); // true
console.log(Foo.prototype.__proto__ === Object.prototype); // true
console.log(Foo.__proto__ === Function.prototype); // true
```

**继承的实现方式**：

```javascript
// 1. 原型链继承
function Parent() {
  this.names = ['a', 'b'];
}
Parent.prototype.getName = function() {
  return this.names;
};

function Child() {}
Child.prototype = new Parent();

const child1 = new Child();
const child2 = new Child();
child1.names.push('c');
console.log(child2.names); // ['a', 'b', 'c'] 被污染

// 2. 构造函数继承
function Child(name) {
  Parent.call(this, name);
}
// 问题：无法继承原型上的方法

// 3. 组合继承（最常用）
function Child(name) {
  Parent.call(this, name); // 第二次调用
}
Child.prototype = new Parent(); // 第一次调用
Child.prototype.constructor = Child;

// 4. 寄生组合继承（最优）
function inherit(Child, Parent) {
  const prototype = Object.create(Parent.prototype);
  prototype.constructor = Child;
  Child.prototype = prototype;
}

function Child(name) {
  Parent.call(this, name);
}
inherit(Child, Parent);

// 5. ES6 Class（语法糖）
class Parent {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
}
```

**Class 的本质**：

```javascript
// Class 转换为 ES5
class Person {
  constructor(name) {
    this.name = name;
  }
  
  sayHello() {
    console.log(`Hello, ${this.name}`);
  }
  
  static staticMethod() {
    return 'static';
  }
}

// 等价于
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function() {
  console.log(`Hello, ${this.name}`);
};

Person.staticMethod = function() {
  return 'static';
};
```

---

### 问题13：`Object.create` 和 `new` 有什么区别？如何实现 `Object.create`？

**考察点**：对对象创建方式的理解

**参考答案**：

**区别对比**：

```javascript
// 1. Object.create：创建一个新对象，指定原型
const obj = Object.create({ x: 1 });
console.log(obj.x); // 1（继承）
console.log(obj.hasOwnProperty('x')); // false

// 2. new：执行构造函数，this 绑定到新对象
function Person(name) {
  this.name = name;
}
const p = new Person('John');
console.log(p.name); // 'John'

// 3. Object.create(null)：创建没有原型的对象（纯字典）
const dict = Object.create(null);
dict.toString // undefined
```

**手写 Object.create**：

```javascript
Object.myCreate = function(proto, propertiesObject) {
  if (proto !== null && typeof proto !== 'object' && typeof proto !== 'function') {
    throw new TypeError('Object prototype may only be an Object or null');
  }
  
  function F() {}
  F.prototype = proto;
  const obj = new F();
  
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  
  return obj;
};

// 或者使用 Object.setPrototypeOf
Object.myCreate2 = function(proto, propertiesObject) {
  const obj = {};
  Object.setPrototypeOf(obj, proto);
  
  if (propertiesObject !== undefined) {
    Object.defineProperties(obj, propertiesObject);
  }
  
  return obj;
};
```

**实际应用**：

```javascript
// 1. 实现纯对象（避免原型污染）
const safeMap = Object.create(null);
safeMap.key = 'value';
console.log('toString' in safeMap); // false

// 2. 继承
const animal = {
  eat() {
    console.log('eating');
  }
};
const dog = Object.create(animal);
dog.bark = () => console.log('barking');
dog.eat(); // eating

// 3. 复制对象
const clone = Object.create(original, 
  Object.getOwnPropertyDescriptors(original)
);
```

---

## 五、函数式编程（2题）

### 问题14：什么是纯函数？什么是副作用？函数式编程在 React/Vue 中的应用？

**考察点**：对函数式编程范式的理解

**参考答案**：

**纯函数定义**：
- 相同输入产生相同输出
- 无副作用（不修改外部状态）

```javascript
// 纯函数
function add(a, b) {
  return a + b;
}

// 不纯函数
let count = 0;
function increment() {
  count++; // 修改外部状态
  return count;
}

function getRandom() {
  return Math.random(); // 相同输入不同输出
}
```

**常见副作用**：
- 修改外部变量
- 控制台输出
- DOM 操作
- 网络请求
- 定时器
- 日期/随机数

**React/Vue 中的应用**：

```javascript
// 1. React 组件应当是纯函数（理想情况）
function PureComponent({ name }) {
  // 相同 props 产生相同 JSX
  return <div>{name}</div>;
}

// 2. Redux reducer 必须是纯函数
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1; // 返回新状态，不修改原状态
    default:
      return state;
  }
}

// 3. Vue 计算属性（基于依赖的纯函数）
computed: {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

// 4. React useMemo/useCallback（记忆化纯函数）
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**函数组合**：

```javascript
// 函数组合
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

const toUpper = str => str.toUpperCase();
const addExclaim = str => `${str}!`;
const greet = name => `Hello, ${name}`;

const formatGreeting = compose(addExclaim, toUpper, greet);
console.log(formatGreeting('John')); // HELLO, JOHN!
```

---

### 问题15：柯里化（Currying）和偏函数（Partial Application）的区别？如何实现？

**考察点**：对函数变换的理解

**参考答案**：

**柯里化**：将多参数函数转换为一系列单参数函数

```javascript
// 普通函数
function add(a, b, c) {
  return a + b + c;
}

// 柯里化
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// 使用
curriedAdd(1)(2)(3); // 6

// 通用柯里化
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...more) {
      return curried.apply(this, args.concat(more));
    };
  };
}

const curriedAdd = curry((a, b, c) => a + b + c);
curriedAdd(1)(2)(3); // 6
curriedAdd(1, 2)(3); // 6
```

**偏函数**：固定部分参数，返回接受剩余参数的新函数

```javascript
// 偏函数实现
function partial(fn, ...preset) {
  return function(...later) {
    return fn.apply(this, preset.concat(later));
  };
}

const add = (a, b, c) => a + b + c;
const addOne = partial(add, 1);
console.log(addOne(2, 3)); // 6

// 带占位符的偏函数
function partialWithPlaceholder(fn, ...preset) {
  return function(...later) {
    const args = [];
    let laterIndex = 0;
    
    for (let i = 0; i < preset.length; i++) {
      if (preset[i] === partial._) {
        args.push(later[laterIndex++]);
      } else {
        args.push(preset[i]);
      }
    }
    
    return fn.apply(this, args.concat(later.slice(laterIndex)));
  };
}

partialWithPlaceholder._ = Symbol('placeholder');
```

**实际应用**：

```javascript
// 1. 日志函数
const log = (level, timestamp, message) => {
  console.log(`[${level}] ${timestamp}: ${message}`);
};

const infoLog = partial(log, 'INFO', new Date().toISOString());
infoLog('User logged in');

// 2. 事件处理
const handleClick = (fn, event) => {
  fn(event.target);
};

const handleButtonClick = partial(handleClick, target => {
  console.log('Button clicked', target);
});
```

---

## 六、模块化（2题）

### 问题16：CommonJS 和 ES Modules 的区别？它们的实现原理是什么？

**考察点**：对模块化规范的理解

**参考答案**：

**核心区别**：

| 特性 | CommonJS | ES Modules |
|------|----------|------------|
| 加载时机 | 运行时同步加载 | 编译时异步加载 |
| 导出方式 | module.exports | export/export default |
| 导入方式 | require() | import |
| 值的类型 | 值的拷贝 | 值的引用 |
| 动态导入 | 同步（模块加载会阻塞后续代码） | import() |
| Tree Shaking | 不支持 | 支持 |
| this | 当前模块 | undefined |

**值的拷贝 vs 值的引用**：

```javascript
// CommonJS（值的拷贝）
// a.js
let count = 1;
function inc() { count++; }
module.exports = { count, inc };

// b.js
const { count, inc } = require('./a');
console.log(count); // 1
inc();
console.log(count); // 1（仍然是1，值未变）

// ES Modules（值的引用）
// a.js
export let count = 1;
export function inc() { count++; }

// b.js
import { count, inc } from './a.js';
console.log(count); // 1
inc();
console.log(count); // 2（值已变）
```

**CommonJS 实现原理**：

```javascript
// 简化版 require 实现
const fs = require('fs');
const path = require('path');

function require(modulePath) {
  // 1. 解析路径
  const absolutePath = Module._resolveFilename(modulePath);
  
  // 2. 检查缓存
  if (Module._cache[absolutePath]) {
    return Module._cache[absolutePath].exports;
  }
  
  // 3. 创建模块对象
  const module = {
    id: absolutePath,
    exports: {},
    loaded: false
  };
  Module._cache[absolutePath] = module;
  
  // 4. 读取并编译模块
  const code = fs.readFileSync(absolutePath, 'utf8');
  const wrappedCode = `(function(exports, require, module, __filename, __dirname) {
    ${code}
  })`;
  
  const compiledFn = eval(wrappedCode);
  compiledFn(module.exports, require, module, absolutePath, path.dirname(absolutePath));
  
  module.loaded = true;
  return module.exports;
}
```

**ES Modules 实现原理**：

```javascript
// 简化版 ESM 处理
// 1. 解析阶段：构建模块依赖图
// 2. 实例化阶段：为每个模块创建模块记录
// 3. 求值阶段：执行模块代码

// 浏览器中的 <script type="module">
// 自动启用严格模式
// 具有模块作用域
// 延迟执行，类似 defer
```

**动态导入**：

```javascript
// 按需加载
button.addEventListener('click', async () => {
  const module = await import('./heavy-module.js');
  module.doSomething();
});

// 条件加载
if (isFeatureEnabled) {
  const feature = await import('./feature.js');
  feature.init();
}
```

---

### 问题17：Tree Shaking 的原理是什么？如何编写可 Tree Shaking 的代码？

**考察点**：对打包优化的理解

**参考答案**：

**原理**：
- 基于 ES Modules 的静态结构（编译时确定导入导出）
- 通过标记未使用的代码，在打包时删除
- 依赖静态分析，无法处理动态导入

**标记过程**：

```javascript
// 1. 标记（Mark）
// 从入口开始，标记所有被使用的导出

// 2. 删除（Sweep）
// 删除未被标记的代码

// 使用 UglifyJS/Terser 进行死代码消除（DCE）
```

**可 Tree Shaking 的代码**：

```javascript
// ✅ 可 Tree Shaking
export function used() { ... }
export function unused() { ... } // 会被删除

// ✅ 使用具名导出
export const utils = {
  used() { ... },
  unused() { ... } // 无法被删除（整个对象被使用）
};

// ✅ 使用纯函数
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }

// ❌ 不可 Tree Shaking
export default { // 整个对象被导入
  used() { ... },
  unused() { ... } // 无法删除
};

// ❌ 副作用
import './polyfill.js'; // 无法确定是否有副作用

// ❌ 动态导入
export function foo() { 
  return Math.random(); 
} // 无法确定是否有副作用
```

**配置 Tree Shaking**：

```javascript
// webpack.config.js
module.exports = {
  mode: 'production',
  optimization: {
    usedExports: true, // 标记未使用导出
    sideEffects: false, // 声明无副作用
    minimize: true
  }
};

// package.json
{
  "sideEffects": false, // 所有文件无副作用
  // 或指定有副作用的文件
  "sideEffects": ["*.css", "*.scss"]
}
```

**编写技巧**：

```javascript
// 1. 使用具名导出
// ✅ 好
export const Button = () => {};
export const Input = () => {};

// ❌ 差
export default {
  Button,
  Input
};

// 2. 避免副作用
// 确保函数是纯的，使用 PURE 注释
/*#__PURE__*/ export const config = {
  version: '1.0'
};

// 3. 在 lodash 中使用具名导入
import { debounce } from 'lodash-es'; // ✅ 可 Tree Shaking
import _ from 'lodash'; // ❌ 导入全部

// 4. 条件导出
// constants.js
export const __PROD__ = process.env.NODE_ENV === 'production';
export const __DEV__ = !__PROD__;

// 只有 __DEV__ 被使用时，__PROD__ 才会被标记未使用
```

---

## 七、设计模式（2题）

### 问题18：JavaScript 中常用的设计模式有哪些？请举例说明在项目中的应用。

**考察点**：对设计模式的理解和应用

**参考答案**：

**1. 单例模式**

```javascript
// 实现1：闭包
const Singleton = (function() {
  let instance;
  
  class SingletonClass {
    constructor(name) {
      this.name = name;
    }
  }
  
  return {
    getInstance(name) {
      if (!instance) {
        instance = new SingletonClass(name);
      }
      return instance;
    }
  };
})();

// 实现2：ES6
class Singleton {
  constructor(name) {
    if (!Singleton.instance) {
      this.name = name;
      Singleton.instance = this;
    }
    return Singleton.instance;
  }
}

// 应用：全局状态管理（Vuex/Redux Store）
```

**2. 观察者模式**

```javascript
class EventEmitter {
  constructor() {
    this.events = new Map();
  }
  
  on(event, callback) {
    if (!this.events.has(event)) {
      this.events.set(event, []);
    }
    this.events.get(event).push(callback);
  }
  
  off(event, callback) {
    if (!this.events.has(event)) return;
    const callbacks = this.events.get(event);
    const index = callbacks.indexOf(callback);
    if (index !== -1) callbacks.splice(index, 1);
  }
  
  emit(event, ...args) {
    if (!this.events.has(event)) return;
    this.events.get(event).forEach(cb => cb(...args));
  }
  
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}

// 使用示例
const emitter = new EventEmitter();

function onData(data) {
  console.log('收到数据：', data);
}

emitter.on('data', onData);
emitter.emit('data', { id: 1 }); // 输出：收到数据：{ id: 1 }

emitter.off('data', onData);
emitter.emit('data', { id: 2 }); // 无输出

emitter.once('once', () => console.log('只触发一次'));
emitter.emit('once'); // 输出：只触发一次
emitter.emit('once'); // 无输出

// 应用：Vue 的 $on/$emit，Node.js 的 EventEmitter
```

**3. 工厂模式**

```javascript
class Button {
  render() {
    throw new Error('需实现');
  }
}

class PrimaryButton extends Button {
  render() {
    return '<button class="primary">Primary</button>';
  }
}

class DangerButton extends Button {
  render() {
    return '<button class="danger">Danger</button>';
  }
}

class ButtonFactory {
  static createButton(type) {
    switch (type) {
      case 'primary':
        return new PrimaryButton();
      case 'danger':
        return new DangerButton();
      default:
        throw new Error('Unknown button type');
    }
  }
}

// 应用：Vue 的异步组件、React.createElement
```

**4. 装饰器模式**

```javascript
// 高阶函数装饰器
function logger(fn) {
  return function(...args) {
    console.log(`调用 ${fn.name}，参数:`, args);
    const result = fn(...args);
    console.log(`返回值:`, result);
    return result;
  };
}

function measureTime(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn(...args);
    const end = performance.now();
    console.log(`${fn.name} 耗时: ${end - start}ms`);
    return result;
  };
}

// 组合使用
const enhancedFn = logger(measureTime(expensiveFunction));

// 应用：React 高阶组件、Vue 混入
function withAuth(Component) {
  return function AuthenticatedComponent(props) {
    const user = useAuth();
    if (!user) return <LoginPage />;
    return <Component {...props} user={user} />;
  };
}
```

**5. 策略模式**

```javascript
// 验证策略
const strategies = {
  isNonEmpty(value, errorMsg) {
    if (value === '') return errorMsg;
  },
  minLength(value, length, errorMsg) {
    if (value.length < length) return errorMsg;
  },
  isMobile(value, errorMsg) {
    if (!/^1[3-9]\d{9}$/.test(value)) return errorMsg;
  }
};

class Validator {
  constructor() {
    this.cache = [];
  }
  
  add(value, rules) {
    rules.forEach(rule => {
      const [strategy, ...args] = rule.split(':');
      this.cache.push(() => strategies[strategy](value, ...args, rule.errorMsg));
    });
  }
  
  validate() {
    for (let fn of this.cache) {
      const errorMsg = fn();
      if (errorMsg) return errorMsg;
    }
    return null;
  }
}

// 应用：表单验证、权限控制
```

---

### 问题19：发布-订阅模式和观察者模式有什么区别？

**考察点**：对两种模式的理解

**参考答案**：

**核心区别**：

| 特性 | 观察者模式 | 发布-订阅模式 |
|------|-----------|--------------|
| 耦合度 | 松耦合（观察者知道被观察者） | 完全解耦（通过中间件） |
| 通信方式 | 直接通信 | 通过消息代理 |
| 灵活性 | 较低 | 较高 |
| 典型应用 | Vue 响应式、DOM 事件 | EventBus、消息队列 |

**观察者模式示例**：

```javascript
// 观察者（知道被观察者）
class Observer {
  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
  }
  
  update() {
    console.log(`${this.name} 收到更新: ${this.subject.state}`);
  }
}

// 被观察者（维护观察者列表）
class Subject {
  constructor() {
    this.observers = [];
    this.state = 0;
  }
  
  attach(observer) {
    this.observers.push(observer);
  }
  
  setState(state) {
    this.state = state;
    this.notify();
  }
  
  notify() {
    this.observers.forEach(observer => observer.update());
  }
}
```

**发布-订阅模式示例**：

```javascript
// 中间件（完全解耦）
class EventBus {
  constructor() {
    this.events = {};
  }
  
  publish(event, data) {
    if (!this.events[event]) return;
    this.events[event].forEach(callback => callback(data));
  }
  
  subscribe(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    
    // 返回取消订阅函数
    return () => {
      this.events[event] = this.events[event].filter(cb => cb !== callback);
    };
  }
}

// 发布者和订阅者不知道彼此存在
const bus = new EventBus();

// 订阅者 A
bus.subscribe('user.login', (user) => {
  console.log('A 收到登录:', user);
});

// 订阅者 B
bus.subscribe('user.login', (user) => {
  console.log('B 收到登录:', user);
});

const unSubscribe = bus.subscribe('user.login', (user) => {
  console.log('B 收到登录:', user);
});
// 取消订阅
unSubscribe()

// 发布者
bus.publish('user.login', { id: 1, name: 'John' });
```

**Vue 中的应用**：

```javascript
// Vue 响应式系统（观察者模式）
// - 数据对象是被观察者（Subject）
// - Watcher 是观察者（Observer）
// - 数据变化时通知 Watcher 更新

// Vue 事件总线（发布-订阅模式）
const bus = new Vue();

// 组件 A（发布者）
bus.$emit('event', data);

// 组件 B（订阅者）
bus.$on('event', (data) => {});
```

---

## 八、性能优化（2题）

### 问题20：如何优化 JavaScript 的加载和执行性能？关键渲染路径是什么？

**考察点**：对性能优化的理解

**参考答案**：

**关键渲染路径优化**：

```html
<!-- 1. 关键 CSS 内联 -->
<style>
  /* 首屏关键样式内联 */
  .hero { background: blue; }
</style>

<!-- 2. 非关键 CSS 异步加载 -->
<link rel="preload" href="non-critical.css" as="style" onload="this.onload=null;this.rel='stylesheet'">

<!-- 3. 脚本异步加载 -->
<script src="async.js" async></script>  <!-- 下载后立即执行，不阻塞 HTML 解析 -->
<script src="defer.js" defer></script>  <!-- 下载不阻塞，HTML 解析完成后执行 -->

<!-- 4. 预加载关键资源 -->
<link rel="preload" href="font.woff2" as="font" crossorigin>

<!-- 5. 预连接第三方域名 -->
<link rel="preconnect" href="https://api.example.com">
```

**代码层面优化**：

```javascript
// 1. 防抖节流
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function throttle(fn, delay) {
  let last = 0;
  return function(...args) {
    const now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

// 2. 惰性加载
let lazyValue;
function getExpensiveValue() {
  if (!lazyValue) {
    lazyValue = computeExpensiveValue();
  }
  return lazyValue;
}

// 3. 虚拟滚动
// 只渲染可视区域的内容

// 4. Web Worker 处理密集计算
// Web Worker 是 HTML5 中提出的一种技术，允许在后台线程中运行 JavaScript 脚本，从而避免阻塞主线程，提升网页的性能。Web Worker 分为两种类型：专用线程（Dedicated Web Worker） 和 共享线程（Shared Web Worker）。
const worker = new Worker('worker.js');
worker.postMessage(largeData);
worker.onmessage = (e) => {
  console.log('计算结果:', e.data);
};

// 5. 使用 requestAnimationFrame 做动画
// requestAnimationFrame 是一个由浏览器提供的方法，用于在下一次重绘之前执行动画。这个方法允许浏览器在适当的时机调用用户提供的回调函数，以便更新动画。这种方式比传统的 setTimeout 或 setInterval 更高效，因为它能够保证回调函数在屏幕刷新之前执行，从而确保动画的流畅性。
function animate() {
  updatePosition();
  requestAnimationFrame(animate);
}

// 6. 使用 requestIdleCallback 执行非关键任务
// requestIdleCallback 是一个 Web API，允许开发者在浏览器的空闲时期执行后台和低优先级的任务，而不会影响关键事件如动画和输入响应的延迟。这个函数的调用通常会按照先进先出的顺序执行，但如果回调函数指定了执行超时时间（timeout），则可能会为了在超时前执行函数而改变执行顺序。
requestIdleCallback(() => {
  sendAnalytics();
  preloadNextPage();
}, { timeout: 2000 });
```

**内存优化**：

```javascript
// 1. 及时清理引用
function process() {
  const largeData = new Array(1000000);
  // 使用后释放
  largeData = null;
}

// 2. 使用对象池
class ObjectPool {
  constructor(createFn, resetFn, size = 10) {
    this.pool = [];
    this.createFn = createFn;
    this.resetFn = resetFn;
    for (let i = 0; i < size; i++) {
      this.pool.push(createFn());
    }
  }
  
  acquire() {
    return this.pool.pop() || this.createFn();
  }
  
  release(obj) {
    this.resetFn(obj);
    this.pool.push(obj);
  }
}

// 3. 避免闭包持有大对象
function createHandler(data) {
  const largeData = data; // 大对象
  return () => {
    // 只使用 smallData
    console.log('handler');
  };
}
```

---

### 问题21：JavaScript 代码如何实现最优的缓存策略？

**考察点**：对缓存机制的理解

**参考答案**：

**1. 浏览器缓存策略**

```javascript
// 强制缓存
// Cache-Control: max-age=31536000
// 命中后直接从磁盘/内存读取

// 协商缓存
// ETag + If-None-Match
// Last-Modified + If-Modified-Since
```

**2. 应用层缓存**

```javascript
// 内存缓存
class MemoryCache {
  constructor(maxSize = 100) {
    this.cache = new Map();
    this.maxSize = maxSize;
  }
  
  set(key, value, ttl = 60000) {
    if (this.cache.size >= this.maxSize) {
      const oldestKey = this.cache.keys().next().value;
      this.cache.delete(oldestKey);
    }
    
    const expires = Date.now() + ttl;
    this.cache.set(key, { value, expires });
    
    // 自动清理
    setTimeout(() => {
      if (this.cache.has(key) && Date.now() > expires) {
        this.cache.delete(key);
      }
    }, ttl);
  }
  
  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    if (Date.now() > item.expires) {
      this.cache.delete(key);
      return null;
    }
    return item.value;
  }
}


const cache = new MemoryCache(3); // 最多缓存 3 条

cache.set('user', { name: 'Alice' }, 2000); // 2 秒后过期
cache.set('theme', 'dark');
cache.set('lang', 'zh');

// 超出容量，会淘汰最早插入的键（'user' 可能已被删除）
cache.set('token', 'abc123');

console.log(cache.get('user'));    // null（因为被淘汰或已过期）
console.log(cache.get('theme'));   // 'dark'
console.log(cache.get('lang'));    // 'zh'
console.log(cache.get('token'));   // 'abc123'

// 使用 WeakMap 缓存 DOM 相关数据
const domCache = new WeakMap();
function getData(element) {
  if (domCache.has(element)) {
    return domCache.get(element);
  }
  const data = computeData(element);
  domCache.set(element, data);
  return data;
}
```

**3. 计算缓存（Memoization）**

```javascript
function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// 递归 Fibonacci 优化
const fibonacci = memoize(function(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
});

// React 中的 useMemo
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
```

**4. 请求缓存**

```javascript
class RequestCache {
  constructor() {
    this.cache = new Map();
  }
  
  async fetch(url, options = {}) {
    const cacheKey = `${url}:${JSON.stringify(options)}`;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() < cached.expires) {
      return cached.data;
    }
    
    const response = await fetch(url, options);
    const data = await response.json();
    
    this.cache.set(cacheKey, {
      data,
      expires: Date.now() + (options.ttl || 60000)
    });
    
    return data;
  }
  
  invalidate(pattern) {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }
}

// 使用 SWR 模式
function useSWR(key, fetcher) {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    let stale = false;
    
    // 先返回缓存
    const cached = cache.get(key);
    if (cached) {
      setData(cached);
    }
    
    // 再发起请求
    fetcher(key).then(newData => {
      if (!stale) {
        cache.set(key, newData);
        setData(newData);
      }
    });
    
    return () => { stale = true; };
  }, [key]);
  
  return data;
}
```

---

## 九、错误处理（2题）

### 问题22：JavaScript 的错误处理机制是怎样的？如何设计一个全局错误监控系统？

**考察点**：对错误处理和监控的理解

**参考答案**：

**错误类型**：

```javascript
// 1. 语法错误（SyntaxError）
eval('foo bar'); // 解析时抛出

// 2. 运行时错误（ReferenceError, TypeError, RangeError）
console.log(undefinedVar); // ReferenceError
null.foo(); // TypeError

// 3. 自定义错误
class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}
```

**错误捕获**：

```javascript
// 1. try-catch-finally
try {
  riskyOperation();
} catch (error) {
  console.error(error.message);
  // 根据错误类型处理
  if (error instanceof ValidationError) {
    showValidationError(error.field);
  }
} finally {
  cleanup(); // 总是执行
}

// 2. 全局捕获
window.addEventListener('error', (event) => {
  console.log('资源加载错误:', event.target);
  // 上报错误
  reportError({
    type: 'resource',
    url: event.target.src || event.target.href
  });
});

window.addEventListener('unhandledrejection', (event) => {
  console.log('未处理的 Promise 拒绝:', event.reason);
  reportError({
    type: 'unhandledRejection',
    error: event.reason
  });
});

// 3. Promise 错误链
fetch('/api/data')
  .then(res => res.json())
  .catch(err => {
    // 统一处理网络错误
    console.error('网络请求失败');
    return { default: true };
  });
```

**全局错误监控系统**：

```javascript
class ErrorMonitor {
  constructor(config) {
    this.config = config;
    this.errors = [];
    this.init();
  }
  
  init() {
    // 捕获同步错误
    window.onerror = (message, source, lineno, colno, error) => {
      this.capture(error || { message, source, lineno, colno });
    };
    
    // 捕获 Promise 错误
    window.addEventListener('unhandledrejection', (event) => {
      this.capture(event.reason);
    });
    
    // 捕获资源加载错误
    window.addEventListener('error', (event) => {
      if (event.target !== window) {
        this.capture({
          type: 'resource',
          tag: event.target.tagName,
          src: event.target.src || event.target.href
        });
      }
    }, true);
    
    // 劫持 console.error
    const originalError = console.error;
    console.error = (...args) => {
      this.capture(args);
      originalError.apply(console, args);
    };
  }
  
  capture(error, context = {}) {
    const errorInfo = this.formatError(error, context);
    this.errors.push(errorInfo);
    
    // 异步上报
    this.report(errorInfo);
    
    // 开发环境打印
    if (process.env.NODE_ENV === 'development') {
      console.group('错误捕获');
      console.error(errorInfo);
      console.groupEnd();
    }
  }
  
  formatError(error, context) {
    if (error instanceof Error) {
      return {
        name: error.name,
        message: error.message,
        stack: error.stack,
        timestamp: Date.now(),
        url: window.location.href,
        userAgent: navigator.userAgent,
        ...context
      };
    }
    
    return {
      type: typeof error,
      value: error,
      timestamp: Date.now(),
      ...context
    };
  }
  
  report(errorInfo) {
    // 批量上报
    if (this.reportTimer) clearTimeout(this.reportTimer);
    
    this.reportTimer = setTimeout(() => {
      if (this.errors.length === 0) return;
      
      const errors = [...this.errors];
      this.errors = [];
      
      // 发送到服务器
      fetch(this.config.endpoint, {
        method: 'POST',
        body: JSON.stringify({
          errors,
          project: this.config.project,
          version: this.config.version
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).catch(e => {
        // 上报失败，暂存到 localStorage
        localStorage.setItem('pendingErrors', JSON.stringify(errors));
      });
    }, this.config.batchDelay || 3000);
  }
}

// 使用
const monitor = new ErrorMonitor({
  endpoint: '/api/errors',
  project: 'my-app',
  version: '1.0.0'
});
```

**错误边界（React）**：

```javascript
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  componentDidCatch(error, errorInfo) {
    // 上报错误
    monitor.capture(error, {
      componentStack: errorInfo.componentStack
    });
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>出错了，请刷新重试</h1>;
    }
    return this.props.children;
  }
}
```

---

### 问题23：如何优雅地处理异步错误？Promise 和 async/await 的错误处理最佳实践？

**考察点**：对异步错误处理的理解

**参考答案**：

**Promise 错误处理**：

```javascript
// 1. 链式 catch
fetch('/api/user')
  .then(res => {
    if (!res.ok) throw new Error('网络错误');
    return res.json();
  })
  .then(data => processData(data))
  .catch(err => {
    console.error('错误:', err);
    return { default: true };
  });

// 2. 全局捕获
process.on('unhandledRejection', (reason, promise) => {
  console.error('未处理的 Promise 拒绝:', reason);
});

// 3. Promise.all 错误处理
Promise.all([
  fetch('/api/user'),
  fetch('/api/posts')
]).catch(err => {
  // 任何一个失败都会触发
  console.error('至少一个请求失败');
});

// 4. Promise.allSettled（所有请求完成，无论成功失败）
const results = await Promise.allSettled([
  fetch('/api/user'),
  fetch('/api/posts')
]);

results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log('成功:', result.value);
  } else {
    console.log('失败:', result.reason);
  }
});
```

**async/await 错误处理**：

```javascript
// 1. try-catch
async function getData() {
  try {
    const user = await fetchUser();
    const posts = await fetchPosts(user.id);
    return posts;
  } catch (err) {
    console.error('获取数据失败:', err);
    // 可以返回默认值或重新抛出
    return [];
  }
}

// 2. 包装函数
function to(promise) {
  return promise
    .then(data => [null, data])
    .catch(err => [err, null]);
}

// 使用
const [err, data] = await to(fetchUser());
if (err) {
  console.error('错误:', err);
  // 处理错误
} else {
  console.log('数据:', data);
}

// 3. 重试机制
async function retry(fn, maxRetries = 3, delay = 1000) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (err) {
      if (i === maxRetries - 1) throw err;
      console.log(`第 ${i + 1} 次失败，${delay}ms 后重试`);
      await new Promise(resolve => setTimeout(resolve, delay * Math.pow(2, i)));
    }
  }
}

// 使用
const data = await retry(() => fetchUser(), 3);
```

**最佳实践**：

```javascript
// 1. 统一错误处理
class APIError extends Error {
  constructor(code, message) {
    super(message);
    this.code = code;
  }
}

async function request(url, options) {
  const response = await fetch(url, options);
  
  if (!response.ok) {
    throw new APIError(response.status, await response.text());
  }
  
  return response.json();
}

// 2. 错误处理中间件
const errorHandler = {
  handle(error) {
    if (error.code === 401) {
      redirectToLogin();
    } else if (error.code === 403) {
      showPermissionDenied();
    } else if (error.code === 404) {
      showNotFound();
    } else {
      showGenericError();
    }
    
    // 上报
    monitor.capture(error);
  }
};

// 3. 异步迭代器错误处理
async function* asyncGenerator() {
  for (let i = 0; i < 5; i++) {
    try {
      yield await fetchItem(i);
    } catch (err) {
      yield { error: err };
    }
  }
}
```

---

## 十、安全（2题）

### 问题24：前端常见的 XSS 和 CSRF 攻击原理及防御措施？

**考察点**：对前端安全的理解

**参考答案**：

**XSS（跨站脚本攻击）**：

```javascript
// 反射型 XSS
// URL: https://example.com?q=<script>alert('xss')</script>
// 服务端直接返回输入内容

// 存储型 XSS
// 评论内容：<script>stealCookie()</script>
// 存储到数据库，所有用户访问时执行

// DOM 型 XSS
// 通过 innerHTML 插入恶意代码
element.innerHTML = userInput; // 危险

// 防御措施
// 1. 输出转义
function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// 2. 使用 textContent 代替 innerHTML
element.textContent = userInput; // 安全

// 3. 使用 DOMPurify 清理 HTML
import DOMPurify from 'dompurify';
const cleanHtml = DOMPurify.sanitize(userInput, {
  ALLOWED_TAGS: ['b', 'i', 'p'],
  ALLOWED_ATTR: []
});

// 4. CSP（内容安全策略）
// meta 标签或 HTTP 头
// Content-Security-Policy: default-src 'self'; script-src 'self' https://trusted.cdn.com
```

**CSRF（跨站请求伪造）**：

```html
<!-- 攻击者网站 -->
<img src="https://bank.com/transfer?to=hacker&amount=10000" style="display:none">
```

```javascript
// 防御措施

// 1. CSRF Token
// 后端生成 token 存入 session，前端表单携带
<input type="hidden" name="csrf_token" value="{{token}}">

// 2. SameSite Cookie
Set-Cookie: session=xxx; SameSite=Strict; Secure

// 3. 双重 Cookie 验证
// 前端从 Cookie 读取 token，添加到请求头
const csrfToken = getCookie('csrf_token');
fetch('/api/transfer', {
  method: 'POST',
  headers: {
    'X-CSRF-Token': csrfToken
  }
});

// 4. 验证 Referer
if (req.headers.referer && !req.headers.referer.startsWith('https://yourdomain.com')) {
  reject();
}
```

**其他安全措施**：

```javascript
// 1. 防止点击劫持
// 设置 X-Frame-Options: DENY

// 2. 敏感信息不存 localStorage（易被 XSS 读取）
// 使用 httpOnly Cookie

// 3. 依赖库漏洞扫描
npm audit

// 4. 使用 Subresource Integrity (SRI)
<script 
  src="https://cdn.example.com/app.js"
  integrity="sha384-xxxxx"
  crossorigin="anonymous">
</script>
```

---

### 问题25：如何防止原型污染攻击（Prototype Pollution）？

**考察点**：对 JS 原型链安全的理解

**参考答案**：

**攻击原理**：

```javascript
// 攻击者通过用户输入污染原型
const userInput = JSON.parse('{"__proto__": {"isAdmin": true}}');
Object.assign({}, userInput);

// 所有对象的 isAdmin 属性都变成 true
console.log({}.isAdmin); // true
```

**防御措施**：

```javascript
// 1. 使用 Object.create(null) 创建无原型对象
const safeObj = Object.create(null);
safeObj.user = {};

// 2. 冻结原型
Object.freeze(Object.prototype);

// 3. 检查键名
function safeMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (key === '__proto__' || key === 'constructor') {
      continue;
    }
    target[key] = source[key];
  }
  return target;
}

// 4. 使用 Map 替代普通对象
const map = new Map();
map.set('__proto__', 'value'); // 安全

// 5. 使用 Object.create(null) 解析 JSON
const safeParse = (json) => {
  const obj = JSON.parse(json);
  return Object.assign(Object.create(null), obj);
};

// 6. 使用深度冻结
function deepFreeze(obj) {
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(prop => {
    if (obj[prop] !== null && typeof obj[prop] === 'object') {
      deepFreeze(obj[prop]);
    }
  });
}

// 7. 依赖库安全
// 使用 lodash.merge 时注意配置
_.mergeWith(obj, source, (objValue, srcValue, key) => {
  if (key === '__proto__') return undefined;
});
```

---

## 十一、工程化（2题）

### 问题26：Babel 的原理是什么？如何编写一个 Babel 插件？

**考察点**：对编译原理和工具链的理解

**参考答案**：

**Babel 工作流程**：
```
源代码 → 解析（Parse）→ AST → 转换（Transform）→ AST → 生成（Generate）→ 目标代码
```

**AST 节点类型**：

```javascript
// 源代码
const a = 1;

// AST 结构
{
  type: 'VariableDeclaration',
  kind: 'const',
  declarations: [{
    type: 'VariableDeclarator',
    id: { type: 'Identifier', name: 'a' },
    init: { type: 'NumericLiteral', value: 1 }
  }]
}
```

**编写 Babel 插件**：

```javascript
// 插件：将 console.log 替换为自定义日志
module.exports = function({ types: t }) {
  return {
    name: 'custom-console',
    visitor: {
      CallExpression(path) {
        const { node } = path;
        
        // 检查是否是 console.log 调用
        if (
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.object, { name: 'console' }) &&
          t.isIdentifier(node.callee.property, { name: 'log' })
        ) {
          // 创建新的函数调用
          const newCall = t.callExpression(
            t.identifier('customLog'),
            node.arguments
          );
          
          // 替换
          path.replaceWith(newCall);
        }
      }
    }
  };
};

// 插件：移除所有 console
module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        const { node } = path;
        
        if (
          t.isMemberExpression(node.callee) &&
          t.isIdentifier(node.callee.object, { name: 'console' })
        ) {
          path.remove();
        }
      }
    }
  };
};
```

**实际应用**：

```javascript
// 自定义插件：国际化自动替换
// 输入：<div>{t('hello')}</div>
// 输出：<div>你好</div>

module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        if (t.isIdentifier(path.node.callee, { name: 't' })) {
          const key = path.node.arguments[0].value;
          const translation = translations[key] || key;
          
          path.replaceWith(t.stringLiteral(translation));
        }
      }
    }
  };
};
```

---

### 问题27：如何实现一个简单的 Webpack Loader 和 Plugin？

**考察点**：对打包工具的理解

**参考答案**：

**Loader 实现**：

```javascript
// markdown-loader.js
const marked = require('marked');

module.exports = function(source) {
  // source 是文件内容
  const html = marked(source);
  
  // 返回 JavaScript 模块
  return `module.exports = ${JSON.stringify(html)}`;
};

// 带配置的 Loader
module.exports = function(source) {
  const options = this.getOptions();
  const html = marked(source, options);
  
  // 异步处理
  const callback = this.async();
  
  setTimeout(() => {
    callback(null, `module.exports = ${JSON.stringify(html)}`);
  }, 100);
  
  // 返回缓存
  this.cacheable(true);
};

// 在 webpack 中使用
module.exports = {
  module: {
    rules: [{
      test: /\.md$/,
      use: [
        'html-loader',
        'markdown-loader'
      ]
    }]
  }
};
```

**Plugin 实现**：

```javascript
// 插件：生成 HTML 并注入资源
class HtmlWebpackPlugin {
  constructor(options = {}) {
    this.options = options;
  }
  
  apply(compiler) {
    // 监听 emit 事件（输出前）
    compiler.hooks.emit.tapAsync('HtmlWebpackPlugin', (compilation, callback) => {
      // 获取所有生成的资源
      const assets = compilation.assets;
      
      // 生成 HTML 内容
      let html = this.options.template || '<!DOCTYPE html><html><head></head><body></body></html>';
      
      // 注入脚本链接
      Object.keys(assets).forEach(filename => {
        if (filename.endsWith('.js')) {
          html = html.replace('</body>', `<script src="${filename}"></script></body>`);
        }
        if (filename.endsWith('.css')) {
          html = html.replace('</head>', `<link href="${filename}" rel="stylesheet"></head>`);
        }
      });
      
      // 添加新资源
      compilation.assets['index.html'] = {
        source: () => html,
        size: () => html.length
      };
      
      callback();
    });
  }
}

// 插件：打包分析
class BundleAnalyzerPlugin {
  apply(compiler) {
    compiler.hooks.done.tap('BundleAnalyzerPlugin', (stats) => {
      const { assets } = stats.toJson();
      
      // 分析打包结果
      const analysis = assets.map(asset => ({
        name: asset.name,
        size: asset.size,
        type: asset.name.split('.').pop()
      }));
      
      console.table(analysis);
      
      // 输出报告
      const report = JSON.stringify(analysis, null, 2);
      require('fs').writeFileSync('bundle-report.json', report);
    });
  }
}
```

---

## 十二、新特性（2题）

### 问题28：ES2020+ 有哪些实用新特性？如何在项目中使用？

**考察点**：对 JS 新特性的了解

**参考答案**：

**1. 可选链操作符（?.）**

```javascript
// 旧写法
const name = user && user.profile && user.profile.name;

// 新写法
const name = user?.profile?.name;

// 函数调用
const result = obj.method?.();

// 数组索引
const item = arr?.[index];
```

**2. 空值合并操作符（??）**

```javascript
// 只对 null/undefined 生效，不包括 false/0/''
const value = input ?? 'default';

// 与 || 的区别
0 || 'default'; // 'default'
0 ?? 'default'; // 0
```

**3. 动态导入（import()）**

```javascript
// 按需加载
button.addEventListener('click', async () => {
  const module = await import('./module.js');
  module.default();
});
```

**4. 全局对象（globalThis）**

```javascript
// 跨平台获取全局对象
globalThis.setTimeout(() => {}, 1000);
```

**5. Promise.allSettled**

```javascript
const results = await Promise.allSettled([
  fetch('/api/user'),
  fetch('/api/posts')
]);

results.forEach(result => {
  if (result.status === 'fulfilled') {
    console.log('成功:', result.value);
  } else {
    console.log('失败:', result.reason);
  }
});
```

**6. 数字分隔符**

```javascript
const billion = 1_000_000_000;
const bytes = 0xFF_FF_FF;
```

**7. WeakRef 和 FinalizationRegistry**

```javascript
// 弱引用
const weakRef = new WeakRef(obj);
const obj = weakRef.deref();

// 回收回调
const registry = new FinalizationRegistry((heldValue) => {
  console.log(`${heldValue} 被回收`);
});

registry.register(obj, 'obj');
```

**8. Top-level await**

```javascript
// 模块顶层直接使用 await
const data = await fetch('/api/data');

export default data;
```

**9. 逻辑赋值操作符**

```javascript
// &&=, ||=, ??=
x ||= y; // x || (x = y)
x &&= y; // x && (x = y)
x ??= y; // x ?? (x = y)
```

**10. 数组方法**

```javascript
// at() - 支持负数索引
arr.at(-1); // 最后一个元素

// findLast, findLastIndex
const lastEven = arr.findLast(x => x % 2 === 0);
```

---

### 问题29：TypeScript 中的类型体操是什么？如何实现高级类型？

**考察点**：对 TypeScript 类型系统的理解

**参考答案**：

**常用工具类型实现**：

```typescript
// Partial（所有属性可选）
type MyPartial<T> = {
  [P in keyof T]?: T[P];
};

// Required（所有属性必选）
type MyRequired<T> = {
  [P in keyof T]-?: T[P];
};

// Readonly（所有属性只读）
type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Pick（选取指定属性）
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// Omit（排除指定属性）
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Record（构造对象类型）
type MyRecord<K extends keyof any, T> = {
  [P in K]: T;
};

// ReturnType（获取函数返回类型）
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;

// Parameters（获取函数参数类型）
type MyParameters<T> = T extends (...args: infer P) => any ? P : never;
```

**条件类型**：

```typescript
// 类型判断
type IsString<T> = T extends string ? true : false;

// 递归类型
type DeepReadonly<T> = {
  readonly [P in keyof T]: DeepReadonly<T[P]>;
};

// 分发条件类型
type ToArray<T> = T extends any ? T[] : never;
type Result = ToArray<string | number>; // string[] | number[]
```

**模板字面量类型**：

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<'click'>; // 'onClick'

// 解析路径
type ParseRoute<T extends string> = 
  T extends `${infer Start}/${infer Rest}`
    ? Start | ParseRoute<Rest>
    : T;

type Routes = ParseRoute<'user/profile/settings'>; // 'user' | 'profile' | 'settings'
```

**映射类型**：

```typescript
// 添加或移除修饰符
type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

// 属性转换
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

interface User {
  name: string;
  age: number;
}

type UserGetters = Getters<User>;
// { getName: () => string; getAge: () => number; }
```

**实际应用**：

```typescript
// 类型安全的 Redux
type Action<T extends string, P = void> = P extends void
  ? { type: T }
  : { type: T; payload: P };

type Actions = 
  | Action<'INCREMENT'>
  | Action<'SET_COUNT', number>;

function reducer(state: number, action: Actions): number {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'SET_COUNT':
      return action.payload; // 类型安全
    default:
      return state;
  }
}
```

---

### 问题30：JavaScript 的未来发展方向是什么？如何看待 WebAssembly？

**考察点**：技术视野和前瞻性

**参考答案**：

**JS 未来发展方向**：

1. **类型系统增强**（TypeScript 成为主流）
2. **性能优化**（JIT、即时编译优化）
3. **并发模型**（Worker、Atomics、SharedArrayBuffer）
4. **工具链 Rust 化**（SWC、esbuild、Turbopack）
5. **边缘计算**（Cloudflare Workers、Deno Deploy）

**WebAssembly 的定位**：

```javascript
// WebAssembly 优势
// 1. 接近原生性能（C/C++/Rust 编译）
// 2. 安全沙箱
// 3. 跨平台

// 应用场景
// - 计算密集型（视频/图像处理、游戏引擎）
// - 移植 C/C++ 库（FFmpeg、TensorFlow）
// - 加密算法
// - 虚拟机（容器化）

// 与 JS 的关系：互补而非替代
// JS：UI 交互、业务逻辑、DOM 操作
// WASM：高性能计算、算法密集型
```

**WebAssembly 使用示例**：

```javascript
// 加载 WASM 模块
const response = await fetch('module.wasm');
const bytes = await response.arrayBuffer();
const { instance } = await WebAssembly.instantiate(bytes, {
  env: {
    console_log: (ptr, len) => {
      const memory = instance.exports.memory;
      const bytes = new Uint8Array(memory.buffer, ptr, len);
      const str = new TextDecoder().decode(bytes);
      console.log(str);
    }
  }
});

// 调用 WASM 函数
const result = instance.exports.add(1, 2);
console.log(result); // 3
```

**趋势总结**：
- **工具链进化**：Rust 替代 JavaScript 工具链（SWC、Rspack、Biome）
- **运行时多样化**：Deno、Bun 挑战 Node.js
- **边缘计算**：JS 成为边缘函数首选
- **类型安全**：TypeScript 逐渐成为事实标准
- **性能追求**：WebAssembly + JS 混合开发成为常态

---

以上30个问题覆盖了 JavaScript 的各个深度维度，每个答案都提供了详尽的实现原理和实际应用场景，希望对你的面试准备有所帮助。