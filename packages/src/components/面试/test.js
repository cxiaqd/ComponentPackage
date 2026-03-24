// 1. 使用 WeakRef 和 FinalizationRegistry（ES2021）
// const registry = new FinalizationRegistry((heldValue) => {
//   console.log(`${heldValue} 被回收了`);
// });

// let obj = { data: 'important' };
// registry.register(obj, 'obj');

// obj = null


// function partial(fn, ...preset) {
//   return function(...later) {
//     return fn.apply(this, preset.concat(later));
//   };
// }


// const log = (level, timestamp, message) => {
//   console.log(`[${level}] ${timestamp}: ${message}`);
// };

// const infoLog = partial(log, 'INFO', new Date().toISOString());
// infoLog('User logged in');


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

    console.log(this.events[event]);
    
    
    // 返回取消订阅函数
    return () => {
      console.log(callback);
      
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

unSubscribe()
// 发布者
bus.publish('user.login', { id: 1, name: 'John' });


function memoize(fn) {
  const cache = new Map();
  
  return function(...args) {
    console.log(args);
    
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

console.log(fibonacci(10));
