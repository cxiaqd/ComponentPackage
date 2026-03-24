Pinia 和 Vuex 的面试题通常围绕**设计思想、核心 API 差异、响应式原理、TypeScript 支持、模块化机制、组合式 API vs Options API** 等展开。下面整理了一些高频题目，对于需要代码举例的，我会给出具体示例并标注执行步骤。

---

## 1. Pinia 与 Vuex 的核心区别是什么？

**答题要点：**

- **设计理念**：Vuex 严格遵循 Flux 模式，有 `state`、`mutations`、`actions`、`getters` 和模块命名空间；Pinia 去掉了 `mutations`，同时拥有 `state`、`getters`、`actions`，更简洁。
- **TypeScript 支持**：Pinia 天生为 TS 设计，无需额外类型声明即可获得完整类型推断；Vuex 4 虽然支持 TS，但需要更多样板代码。
- **模块化**：Vuex 通过 `modules` 进行嵌套，访问路径长；Pinia 每个 store 都是独立的模块，直接导入使用，天然支持代码分割。
- **组合式 API 支持**：Pinia 同时支持 Options API 和 Composition API 写法；Vuex 4 在 Vue 3 中虽然可用，但组合式函数不如 Pinia 自然。
- **DevTools 支持**：两者都支持 Vue DevTools，但 Pinia 提供了更直观的时间旅行调试。

---

## 2. 如何在 Pinia 中定义一个 Store？与 Vuex 的模块有何不同？

### Pinia 示例（组合式 API 风格）

```javascript
// stores/counter.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)
  
  // getters
  const doubleCount = computed(() => count.value * 2)
  
  // actions
  function increment() {
    count.value++
  }
  
  return { count, doubleCount, increment }
})
```

**执行步骤：**

1. 调用 `defineStore`，传入唯一 ID `'counter'` 和一个 setup 函数。
2. 在 setup 函数中使用 `ref` 定义响应式状态，`computed` 定义派生状态。
3. 返回暴露的状态和方法，组件通过 `useCounterStore()` 调用后可直接使用。

### Vuex 模块示例

```javascript
// store/modules/counter.js
export default {
  namespaced: true,
  state: () => ({ count: 0 }),
  mutations: {
    increment(state) {
      state.count++
    }
  },
  actions: {
    increment({ commit }) {
      commit('increment')
    }
  },
  getters: {
    doubleCount: (state) => state.count * 2
  }
}
```

**区别总结：**

- Pinia 直接导出 `useXXXStore` 函数，无需注册到根 store。
- Vuex 需要将模块注册到 `modules` 选项，访问时通过 `store.state.moduleName.xxx`。
- Pinia 没有 `mutations`，状态变更直接写在 actions 中（同步异步均可）。

---

## 3. Pinia 中如何实现数据持久化？（举例说明）

Pinia 官方推荐使用插件 `pinia-plugin-persistedstate`。

### 安装与配置

```bash
npm i pinia-plugin-persistedstate
```

```javascript
// main.js
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

createApp(App).use(pinia).mount('#app')
```

### Store 中开启持久化

```javascript
// stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref('')
  const setToken = (newToken) => { token.value = newToken }
  
  return { token, setToken }
}, {
  persist: true   // 开启持久化，默认存储到 localStorage，key 为 store id
})
```

**执行步骤：**

1. 安装插件并在 pinia 实例上注册。
2. 在 defineStore 的第三个配置对象中设置 `persist: true`。
3. 当 token 变化时，插件自动将整个 state 同步到 localStorage。
4. 页面刷新后，store 初始化时会自动从 localStorage 恢复状态。

更精细的配置（如使用 sessionStorage、指定需要持久化的字段）：

```javascript
persist: {
  key: 'user-store',
  storage: sessionStorage,
  paths: ['token']   // 只持久化 token 字段
}
```

---

## 4. 在组件中使用 Pinia 和 Vuex 分别怎么写？（代码对比）

### Pinia 使用（Vue 3 组合式 API）

```vue
<template>
  <div>
    <p>{{ counter.count }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
import { storeToRefs } from 'pinia'

const counter = useCounterStore()

// 直接解构会失去响应性，需要用 storeToRefs
const { count, doubleCount } = storeToRefs(counter)
const { increment } = counter   // actions 可以直接解构
</script>
```

**执行步骤：**

1. 调用 `useCounterStore()` 获取 store 实例。
2. 使用 `storeToRefs` 解构 state 和 getters 以保持响应性。
3. 模板中直接使用解构后的响应式变量，调用 action 直接触发状态变更。

### Vuex 使用（Vue 3 组合式 API）

```vue
<template>
  <div>
    <p>{{ count }}</p>
    <p>{{ doubleCount }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()

const count = computed(() => store.state.counter.count)
const doubleCount = computed(() => store.getters['counter/doubleCount'])

const increment = () => {
  store.dispatch('counter/increment')
}
</script>
```

**区别总结：**

- Pinia 直接获取 store 实例，解构时需用 `storeToRefs`；Vuex 通过 `useStore` 获取根 store，用 `computed` 包裹访问路径。
- Pinia 的 action 直接调用；Vuex 通过 `dispatch` 触发。

---

## 5. Pinia 中 $patch 和直接修改 state 有什么区别？

Pinia 提供了两种批量修改 state 的方式：

- **直接修改**：`store.count++` 或 `store.$state.count++`
- **$patch**：接收一个对象或函数，用于批量更新

```javascript
// 对象方式
store.$patch({
  count: store.count + 1,
  name: 'new name'
})

// 函数方式（可执行复杂逻辑）
store.$patch((state) => {
  state.count++
  state.user.name = 'Alice'
})
```

**区别：**

- `$patch` 允许在一次操作中更新多个属性，且会合并更新，减少不必要的响应式触发次数。
- 直接修改多个属性会触发多次更新，性能略差。
- 在 DevTools 中，`$patch` 会记录为单次 mutation，调试更清晰。

---

## 6. 如何理解 Pinia 的 “Store 是使用组合式 API 封装的”？

Pinia 的 setup store 本质上是将 Vue 的组合式 API（`ref`、`computed`、`watch` 等）封装在一个函数中，并通过 `defineStore` 返回一个 store 实例。

**示例：在 store 中使用 watch 监听状态变化**

```javascript
import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref([])
  
  // 监听 items 变化，自动保存到 localStorage
  watch(items, (newVal) => {
    localStorage.setItem('cart', JSON.stringify(newVal))
  }, { deep: true })
  
  function addItem(item) {
    items.value.push(item)
  }
  
  return { items, addItem }
})
```

**执行步骤：**

1. 在 setup 函数内部，可以使用所有 Vue 组合式 API。
2. `watch` 会在 store 初始化时自动运行，依赖 `items` 的变化。
3. 这种写法让 store 拥有了更强大的逻辑封装能力，而 Vuex 需要在外部或插件中实现类似逻辑。

---

## 7. 面试中的场景题：如何重构一个大型 Vuex 项目到 Pinia？

**回答思路：**

1. **逐步迁移**：保持 Vuex 和 Pinia 共存，新功能用 Pinia，旧功能逐步替换。
2. **模块转 Store**：Vuex 的每个模块对应 Pinia 的一个独立 store，移除 `namespaced`。
3. **mutations 合并到 actions**：将 mutation 中的同步逻辑直接放入 action 函数。
4. **getters 改为 computed**：Vuex 的 getters 在 Pinia 中用 `computed` 实现。
5. **根 store 状态处理**：Vuex 根 store 的状态可以单独抽成一个 Pinia store。
6. **插件迁移**：Vuex 插件（如持久化）替换为 Pinia 对应插件。

**代码示例（Vuex module → Pinia store）：**

```javascript
// Vuex module (counter.js)
export default {
  namespaced: true,
  state: { count: 0 },
  mutations: { increment: state => state.count++ },
  actions: { incrementAsync({ commit }) { setTimeout(() => commit('increment'), 1000) } },
  getters: { double: state => state.count * 2 }
}

// 迁移后的 Pinia store (counter.js)
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const double = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }
  
  function incrementAsync() {
    setTimeout(() => {
      count.value++
    }, 1000)
  }
  
  return { count, double, increment, incrementAsync }
})
```

---

## 8. Pinia 是否支持服务端渲染（SSR）？与 Vuex 有何不同？

- **Pinia**：官方提供了对 SSR 的良好支持，通过在服务端创建新的 pinia 实例，并在每个请求中注入 store，避免跨请求状态污染。配合 Nuxt 3 使用时开箱即用。
- **Vuex**：也支持 SSR，但需要手动处理 store 的实例化和状态注水（hydration），配置相对复杂。

**在 Nuxt 3 中，Pinia 的 SSR 使用示例（自动处理）：**

```javascript
// plugins/pinia.js
import { defineNuxtPlugin } from '#app'
import { createPinia } from 'pinia'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  nuxtApp.vueApp.use(pinia)
  // 如果有需要在服务端初始化的 store，可以在这里调用
})
```

---

## 总结对比表

| 特性 | Vuex 4 | Pinia |
|------|--------|-------|
| mutations | 有 | 无 |
| TypeScript 支持 | 需要额外类型定义 | 天生完美支持 |
| 模块化 | modules 嵌套 | 每个 store 独立模块 |
| 代码分割 | 不支持 | 支持（按需导入） |
| 组合式 API | 支持较弱 | 原生支持 |
| 体积 | 较大 | 更轻量（约 2KB） |
| DevTools | 支持 | 支持，且时间旅行更清晰 |

以上题目涵盖了 Pinia 和 Vuex 面试中 80% 以上的高频考点，准备面试时建议重点理解**响应式原理**、**组合式 API 集成**以及**迁移策略**。