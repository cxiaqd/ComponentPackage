Vue2 和 Vue3 的响应式原理是其核心机制，它们都实现了**数据驱动视图**，但实现方式有本质不同。下面来详细解析。

## Vue2 响应式原理

Vue2 的核心是基于 **`Object.defineProperty`** 实现数据劫持，结合**发布-订阅模式**。

### 核心流程

1. **初始化阶段**
   - Vue 在 `data`、`props`、`computed` 等选项初始化时，递归遍历所有属性
   - 对每个属性使用 `Object.defineProperty` 重新定义 `getter` 和 `setter`

2. **依赖收集（getter）**
   - 每个组件实例都有一个 `Watcher` 实例
   - 当渲染或计算属性读取数据时，触发 `getter`
   - `getter` 将当前的 `Watcher` 添加到该属性的依赖列表（`Dep`）中

3. **派发更新（setter）**
   - 当数据被修改时，触发 `setter`
   - `setter` 通知 `Dep` 中收集的所有 `Watcher` 执行更新
   - `Watcher` 重新调用 `render` 函数或计算函数，触发视图更新

### 简化实现

```javascript
// Dep 依赖收集器
class Dep {
  constructor() {
    this.subs = []
  }
  addSub(sub) {
    this.subs.push(sub)
  }
  depend() {
    if (Dep.target) {
      this.addSub(Dep.target)
    }
  }
  notify() {
    this.subs.forEach(sub => sub.update())
  }
}
Dep.target = null

// Watcher 观察者
class Watcher {
  constructor(vm, expOrFn, cb) {
    this.vm = vm
    this.getter = expOrFn
    this.cb = cb
    this.value = this.get()
  }
  get() {
    Dep.target = this
    const value = this.getter.call(this.vm, this.vm)
    Dep.target = null
    return value
  }
  update() {
    const oldValue = this.value
    this.value = this.get()
    this.cb.call(this.vm, this.value, oldValue)
  }
}

// 响应式核心
function defineReactive(obj, key, val) {
  const dep = new Dep()
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get() {
      if (Dep.target) {
        dep.depend()
      }
      return val
    },
    set(newVal) {
      if (newVal === val) return
      val = newVal
      dep.notify()
    }
  })
}
```

### Vue2 的局限性

1. **无法检测对象属性的添加/删除**
   - 解决方案：`Vue.set(obj, key, value)` 或 `this.$set`

2. **无法直接检测数组变化**
   - 重写了数组的 7 个变异方法（`push`、`pop`、`shift`、`unshift`、`splice`、`sort`、`reverse`）
   - 通过索引直接修改数组项无法被检测，需使用 `Vue.set`

3. **初始化时需要递归遍历所有属性**
   - 性能开销较大，尤其对于深层嵌套对象

4. **必须使用 `data` 函数返回对象**
   - 确保每个组件实例有独立的响应式数据

## Vue3 响应式原理

Vue3 使用 **ES6 的 `Proxy`** 替代 `Object.defineProperty`，提供了更强大、更完整的拦截能力。

### 核心实现

```javascript
// 使用 Proxy 实现响应式
function reactive(target) {
  if (!isObject(target)) return target
  
  const handler = {
    get(target, key, receiver) {
      // 依赖收集
      track(target, key)
      const result = Reflect.get(target, key, receiver)
      // 如果返回值是对象，递归转换为响应式（懒代理）
      return isObject(result) ? reactive(result) : result
    },
    set(target, key, value, receiver) {
      const oldValue = target[key]
      const result = Reflect.set(target, key, value, receiver)
      if (oldValue !== value) {
        // 触发更新
        trigger(target, key)
      }
      return result
    },
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key)
      const result = Reflect.deleteProperty(target, key)
      if (hadKey && result) {
        trigger(target, key)
      }
      return result
    }
  }
  
  return new Proxy(target, handler)
}
```

### Vue3 响应式的改进

1. **全面的拦截能力**
   - 可监听对象属性的添加、删除
   - 可监听数组索引和 `length` 的变化
   - 无需特殊处理数组方法

2. **懒响应式**
   - 只在访问嵌套对象时才进行响应式转换
   - 大大提升了初始化性能

3. **更好的性能**
   - 不需要递归遍历所有属性
   - Proxy 作为代理层，性能开销更小

4. **支持更多数据类型**
   - Map、Set、WeakMap、WeakSet 等集合类型

### Vue3 的响应式 API

Vue3 提供了多种响应式 API：

```javascript
import { reactive, ref, computed, watchEffect } from 'vue'

// reactive：用于对象/数组
const state = reactive({
  count: 0,
  user: { name: 'Vue3' }
})

// ref：用于基本类型，也可用于对象
const count = ref(0)
count.value++

// computed：计算属性
const double = computed(() => count.value * 2)

// watchEffect：自动收集依赖
watchEffect(() => {
  console.log(`count is: ${count.value}`)
})
```

### 依赖收集的实现

Vue3 使用 **`WeakMap` + `Map` + `Set`** 的结构存储依赖关系：

```javascript
// 依赖存储结构
// targetMap: WeakMap<target, Map<key, Set<effect>>>
const targetMap = new WeakMap()

function track(target, key) {
  if (!activeEffect) return
  
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()))
  }
  
  let dep = depsMap.get(key)
  if (!dep) {
    depsMap.set(key, (dep = new Set()))
  }
  
  dep.add(activeEffect)
}

function trigger(target, key) {
  const depsMap = targetMap.get(target)
  if (!depsMap) return
  
  const dep = depsMap.get(key)
  if (dep) {
    dep.forEach(effect => effect())
  }
}
```

## 核心区别对比

| 特性 | Vue2 | Vue3 |
|------|------|------|
| **实现方式** | `Object.defineProperty` | `Proxy` |
| **对象属性添加/删除** | 无法检测，需用 `$set` | 自动检测 |
| **数组变化检测** | 重写数组方法，索引修改需用 `$set` | 完全支持 |
| **初始化性能** | 递归遍历所有属性，性能较差 | 懒代理，按需转换 |
| **嵌套对象响应式** | 初始化时深度遍历 | 访问时懒转换 |
| **依赖存储结构** | Dep 数组 | WeakMap + Map + Set |
| **TypeScript 支持** | 较弱，类型推断有限 | 原生支持，类型完善 |
| **API 风格** | Options API | Composition API + Options API |

## 总结

Vue2 的 `Object.defineProperty` 方案虽然经典，但在对象监听、数组处理、性能等方面存在固有局限。Vue3 引入 `Proxy` 后，不仅解决了这些问题，还带来了更灵活的 Composition API 和更好的 TypeScript 支持，使响应式系统更加完善和高效。

理解这些底层原理，对于性能优化、疑难问题排查以及编写高质量的 Vue 应用都有很大帮助。