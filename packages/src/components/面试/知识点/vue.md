以下整理了约50道Vue 2面试题，并对比了Vue 3中的相应变化。部分题目附有代码示例及执行步骤，帮助你深入理解。

---

好的，我们以 **Vue 技术栈** 为基础，重新组织一套 MVVM 的理解话术。这套回答会结合 Vue 的响应式原理、模板编译、双向绑定等特性，让面试官感受到你对 Vue 的底层实现和设计思想有深入认识。

---

### 面试回答话术（Vue 技术栈版本，建议时长 3-5 分钟）

#### 1. 定义与定位

面试官你好，谈到 MVVM，我首先想到的是 **Vue 的核心理念——数据驱动视图**。虽然 Vue 官网说自己“并不是严格意义上的 MVVM 框架”，但它的设计思想深受 MVVM 影响，可以说是 **MVVM 模式在前端领域的最佳实践之一**。

在我看来，MVVM 最吸引我的地方是它把 **“状态管理”** 和 **“界面渲染”** 彻底分开了。开发时我不再需要手动调用 DOM 方法来更新界面，而是专注于维护 **数据状态**，当状态变化时，Vue 帮我自动完成界面的同步。

#### 2. 拆解 Vue 中的三层

如果对应到 Vue 技术栈：

-   **Model**：就是**原始数据源**。可能是从 API 获取的数据对象、Vuex 或 Pinia 中的 store 状态，或者是组件内 `data` 返回的初始数据。Model 只负责定义数据的结构和初始值。

-   **View**：对应 Vue 中的**模板（template）**。它是一个声明式的 HTML 片段，通过插值（`{{}}`）、指令（`v-bind`、`v-for` 等）来描述界面应该如何根据数据进行展示。View 是**纯声明式的**，没有任何修改数据的逻辑，只描述“最终长什么样”。

-   **ViewModel**：在 Vue 中，这个角色由 **Vue 实例**（组件实例）承担。它做了几件关键的事：
    1.  **数据响应化**：通过 `Object.defineProperty`（Vue 2）或 `Proxy`（Vue 3）把 `data` 中的属性变成响应式的。当数据被读取时进行依赖收集，当数据被修改时触发通知。
    2.  **模板编译**：将 `template` 编译成 **渲染函数**，并建立 **Watcher**，把数据与视图关联起来。
    3.  **方法代理**：`methods` 中的函数被暴露给模板，用于处理用户交互；`computed` 负责派生状态，`watch` 用于处理副作用。

#### 3. 深入原理：响应式与虚拟 DOM

Vue 实现“数据驱动视图”的核心是 **响应式系统 + 虚拟 DOM**。

-   **响应式系统**：
    每个组件实例都有一个 `render` 函数。当组件初始化时，Vue 会遍历 `data` 中的属性，用 `Object.defineProperty` 或 `Proxy` 进行拦截。在初次执行 `render` 时，访问到的每个响应式属性都会把当前的 `Watcher` 记录下来。之后，一旦属性值发生变化，`setter` 会通知所有依赖它的 `Watcher`，触发重新渲染。

    这里我特别理解的一点是：**依赖收集** 的粒度是组件级别的，而不是 DOM 节点级别。所以 Vue 能够以较低的成本知道“哪些组件需要重新渲染”，然后通过 **虚拟 DOM 的 diff 算法** 来最小化实际的 DOM 操作。

-   **双向绑定（v-model）**：
    很多人认为双向绑定是 MVVM 的标志，但在 Vue 里，`v-model` 只是一个 **语法糖**。它本质上是 `:value` 和 `@input` 的组合。例如 `<input v-model="message">` 会被编译成 `:value="message" @input="message = $event.target.value"`。这种设计既保留了单向数据流的可预测性，又在表单场景提供了便捷的语法。在我的项目中，除了简单表单，我更倾向于显式使用单向绑定加事件监听，因为这样数据流更清晰。

#### 4. 组件间的通信机制（工程化体现）

在实际的 Vue 项目中，MVVM 模式下的通信我通常会这样处理：

-   **父子组件**：采用 **props down, events up** 的单向数据流。父组件通过 `props` 把数据传递给子组件，子组件通过 `$emit` 触发事件通知父组件。这完全符合 MVVM 的 ViewModel 解耦思想——子组件不直接修改父组件的数据，而是通过事件让父组件自己去改。

-   **跨层级 / 全局状态**：我会引入 **Vuex**（或 Vue 3 的 **Pinia**）。这其实是对 MVVM 中 Model 层的增强。它将共享状态抽离出来，由全局的 store 统一管理，并通过 `commit` 或 `action` 来修改。在组件中，通过 `computed` 来响应 store 的变化。这样既保持了数据来源单一，又避免了层层传递 props 的繁琐。

-   **跨组件通信**：Vue 还提供了 `provide/inject`，我经常用在组件库或高阶组件中，用于跨层级传递数据，避免 props 逐层透传（prop drilling）。这在 MVVM 架构中，可以看作是 ViewModel 之间的一种松耦合通信方式。

#### 5. 优缺点与我的实践思考

-   **优点（结合 Vue 特性）**：
    -   **开发效率高**：声明式模板和响应式系统让我能用很少的代码实现复杂的交互。特别是 `computed` 和 `watch`，能把派生逻辑和副作用清晰地分离。
    -   **性能好**：虚拟 DOM + diff 算法保证了在大量数据变化时，只有真正变化的部分被更新到真实 DOM。
    -   **生态完善**：Vuex、Pinia、Vue Router 等官方库与 MVVM 模式无缝配合，让我在构建中大型项目时能保持代码结构清晰。

-   **缺点与我的应对策略**：
    -   **响应式系统的局限**：Vue 2 中由于 `Object.defineProperty` 的限制，无法检测对象属性的新增和删除，所以需要使用 `Vue.set`。Vue 3 的 Proxy 虽然解决了这个问题，但我仍然会注意避免深层嵌套对象频繁修改带来的性能开销，必要时我会使用 `shallowReactive` 或结构扁平化。
    -   **过度封装问题**：对于简单静态页面，强行使用完整的 Vue 组件 + Vuex 反而显得笨重。我的原则是 **按需分层**：简单场景用局部数据，复杂业务再用集中状态管理，不为了“架构”而引入不必要的复杂度。
    -   **内存泄漏风险**：如果组件中使用了全局事件总线或定时器，必须在 `beforeDestroy` / `onBeforeUnmount` 中清理。我会在团队中推行这一规范，避免因 ViewModel 未销毁而导致的内存问题。

#### 6. 总结与个人见解

总的来说，Vue 让 MVVM 落地得既优雅又实用。它让我真正做到了 **“只关心数据，不用关心 DOM”**。每当我把一个复杂的业务拆分成多个组件，每个组件只维护自己的状态，通过 props 和 emit 进行通信时，我都能感受到代码的健壮性和可维护性。

更重要的是，通过研究 Vue 的源码，我理解到 MVVM 不仅仅是三个字母的缩写，它背后是一套 **响应式 + 声明式渲染** 的思想。这套思想已经成为了我日常编码的直觉——先定义好数据模型，再写模板，最后只修改数据。这种工作流极大地降低了我的 bug 率，也让我在多人协作时，能更清晰地传递代码意图。

---

### 面试官可能追问的点及准备

1.  **Vue 3 的响应式原理和 Vue 2 有什么区别？**
    -   可以回答：Vue 2 用 `Object.defineProperty` 递归遍历对象，性能较差且无法监听新增属性；Vue 3 用 `Proxy` 直接拦截对象操作，惰性响应式，性能更好，能监听数组索引和长度变化。

2.  **v-model 在自定义组件上怎么实现？**
    -   可以回答：在 Vue 2 中通过 `model` 选项指定 prop 和 event，在 Vue 3 中支持多个 v-model，通过 `update:modelValue` 事件配合 `modelValue` prop。

3.  **MVVM 和 MVP 有什么区别？**
    -   可以略提：MVP 中 Presenter 与 View 是双向依赖，View 需要实现接口；MVVM 中 ViewModel 完全不感知 View，通过数据绑定实现自动更新，更符合响应式编程。

这样组织话术，既展示了技术深度，又体现了你的实际经验和对架构的思考。

---

## 一、基础与响应式原理

**1. Vue 2 的响应式原理是什么？Vue 3 有何不同？**  
- **Vue 2**：通过 `Object.defineProperty` 递归地对 data 中的属性进行 getter/setter 劫持，实现依赖收集和派发更新。  
- **Vue 3**：改用 ES6 的 `Proxy`，可以劫持整个对象，能监听数组索引、length 属性、对象新增/删除属性等，性能更好且无需递归初始化。

**2. Vue 2 中如何检测数组变化？Vue 3 中呢？**  
- **Vue 2**：重写了数组的 7 个变异方法（push、pop、shift、unshift、splice、sort、reverse），但无法直接监听通过索引修改或 length 变化，需要 `Vue.set`。  
- **Vue 3**：通过 `Proxy` 可以直接捕获数组的所有操作，无需特殊处理。

**3. 为什么 Vue 2 中 data 必须是一个函数？Vue 3 中呢？**  
- **Vue 2**：确保组件实例拥有独立的数据副本，避免多个实例共享同一对象。  
- **Vue 3**：同样要求 data 返回一个对象（组合式 API 中可直接使用 `ref`/`reactive`，无需函数形式）。

**4. 简述 `Vue.set` 和 `this.$set` 的作用。Vue 3 中还需要吗？**  
- **Vue 2**：用于向响应式对象添加新属性并触发更新。  
- **Vue 3**：由于 `Proxy` 可直接监听到新增属性，一般不再需要，但若使用 `reactive` 创建的对象，直接添加属性即可自动响应。

**5. `computed` 和 `watch` 的区别？Vue 3 中组合式 API 如何使用它们？**  
- **Vue 2**：computed 用于派生数据，有缓存；watch 用于监听数据变化执行副作用。  
- **Vue 3**：在组合式 API 中，使用 `computed()` 和 `watch()` 函数，用法更灵活。

**6. Vue 2 中 `$nextTick` 的原理是什么？Vue 3 中有什么变化？**  
- 原理都是将回调延迟到下次 DOM 更新循环之后执行，底层利用微任务（Promise）或宏任务（setTimeout）。  
- **Vue 3** 提供了 `nextTick()` 函数，用法一致。

**7. Vue 2 如何实现双向绑定？Vue 3 中呢？**  
- **Vue 2**：通过 `v-model` 语法糖，绑定 value 属性和 input 事件。  
- **Vue 3**：`v-model` 可以绑定多个，且支持自定义修饰符；组件上可定义 `modelValue` 和 `update:modelValue`。

---

## 二、组件与通信

**8. 父子组件通信有哪些方式？Vue 3 中有新增吗？**  
- **Vue 2**：props/emit、`$parent`/`$children`、`$refs`、provide/inject、事件总线（EventBus）。  
- **Vue 3**：新增 `$emit` 类型声明（TypeScript）、`expose` 控制组件暴露内容；事件总线推荐使用第三方库或 mitt。

**9. Vue 2 中组件之间如何通过事件总线通信？Vue 3 中为何不推荐？**  
- **Vue 2**：可以创建一个空的 Vue 实例作为中央事件总线。  
- **Vue 3**：移除了 `$on`、`$off`、`$once`，因此官方不再推荐，建议使用 mitt 或 pinia 等替代。

**10. 简述 `provide` 和 `inject` 的用法。Vue 3 中有何改进？**  
- **Vue 2**：用于祖先组件向后代注入依赖，但响应式需要手动处理。  
- **Vue 3**：可以结合 `ref`/`reactive` 提供响应式数据，且可以在组合式 API 中直接使用 `provide`/`inject` 函数。

```js
// Vue 3 组合式 API 示例
// 祖先组件
import { provide, ref } from 'vue'
export default {
  setup() {
    const count = ref(0)
    provide('count', count)
    return { count }
  }
}
// 后代组件
import { inject } from 'vue'
export default {
  setup() {
    const count = inject('count')
    return { count }
  }
}
```

**11. Vue 2 中的 `$attrs` 和 `$listeners` 有什么作用？Vue 3 中如何处理？**  
- **Vue 2**：`$attrs` 包含父作用域中不作为 prop 的 attribute，`$listeners` 包含父作用域中的 v-on 事件监听器。  
- **Vue 3**：合并为 `$attrs`，包含 attribute 和事件监听器，且可以使用 `useAttrs()` 获取。

**12. 如何实现组件缓存？Vue 3 中 `keep-alive` 有变化吗？**  
- **Vue 2**：使用 `<keep-alive>` 包裹动态组件，可配置 include/exclude。  
- **Vue 3**：功能相同，但生命周期钩子变化：`activated` 和 `deactivated` 依然可用，但 `beforeRouteEnter` 等路由钩子需配合使用。

**13. Vue 2 中 `v-if` 和 `v-for` 能否一起使用？Vue 3 中呢？**  
- **Vue 2**：不推荐，因为 `v-for` 优先级高于 `v-if`，可能产生性能问题。  
- **Vue 3**：`v-if` 优先级高于 `v-for`，但仍建议避免同时使用，改用计算属性过滤。

**14. Vue 2 中组件上的 `v-model` 如何实现自定义？Vue 3 中支持多个 `v-model` 吗？**  
- **Vue 2**：组件上使用 `v-model` 相当于绑定 `value` prop 和 `input` 事件，可通过 `model` 选项修改。  
- **Vue 3**：支持多个 `v-model`，每个可以指定 prop 名称和对应事件。

```html
<!-- 父组件 -->
<Child v-model:title="pageTitle" v-model:content="pageContent" />

<!-- 子组件 -->
<script setup>
defineProps(['title', 'content'])
defineEmits(['update:title', 'update:content'])
</script>
```

---

## 三、生命周期

**15. Vue 2 的生命周期钩子有哪些？Vue 3 中哪些钩子被改名了？**  
- **Vue 2**：`beforeCreate`, `created`, `beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeDestroy`, `destroyed`。  
- **Vue 3**：`beforeDestroy` → `beforeUnmount`，`destroyed` → `unmounted`；组合式 API 中使用 `onMounted` 等函数。

**16. 组合式 API 中生命周期钩子如何使用？**  
- 在 `setup()` 中导入并调用，例如 `onMounted(() => { ... })`，所有钩子需在 `setup` 内部同步调用。

**17. 父子组件的生命周期执行顺序是怎样的？Vue 3 中有变化吗？**  
- 顺序一致：父 beforeCreate → 父 created → 父 beforeMount → 子 beforeCreate → 子 created → 子 beforeMount → 子 mounted → 父 mounted。  
- 销毁顺序：父 beforeUnmount → 子 beforeUnmount → 子 unmounted → 父 unmounted。

**18. 什么是异步组件？Vue 3 中如何定义？**  
- **Vue 2**：使用 `() => import('./Component.vue')`，可配合 `Vue.component` 或 `components` 选项。  
- **Vue 3**：使用 `defineAsyncComponent` 函数。

```js
import { defineAsyncComponent } from 'vue'
const AsyncComp = defineAsyncComponent(() => import('./Component.vue'))
```

---

## 四、路由与状态管理

**19. Vue Router 3 和 Vue Router 4 的主要区别？**  
- **Vue Router 3** 对应 Vue 2，使用 `new VueRouter()`，路由模式 `mode` 属性。  
- **Vue Router 4** 对应 Vue 3，使用 `createRouter()`，路由模式用 `history` 属性，且组合式 API 提供 `useRoute`、`useRouter`。

**20. 如何监听路由变化？Vue 3 中组合式 API 如何实现？**  
- **Vue 2**：使用 `$route` 对象的 `watch`，或组件内 `beforeRouteUpdate`。  
- **Vue 3**：可以使用 `watch` 监听 `useRoute()` 返回的对象，或使用 `onBeforeRouteUpdate` 钩子。

```js
import { useRoute } from 'vue-router'
import { watch } from 'vue'
export default {
  setup() {
    const route = useRoute()
    watch(() => route.params.id, (newId) => {
      console.log('路由参数变化', newId)
    })
  }
}
```

**21. Vuex 3 和 Pinia 的区别？Vue 3 官方推荐什么？**  
- **Vuex 3** 用于 Vue 2，基于 mutation/action 模式。  
- **Vue 3** 推荐使用 Pinia，它更轻量，支持组合式 API，TypeScript 友好，去除了 mutation，直接修改 state。

**22. 在 Vue 3 中如何使用 Pinia？**  
- 安装后，通过 `defineStore` 定义 store，使用 `storeToRefs` 解构响应式属性，直接调用 store 方法修改状态。

```js
// store/user.js
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', {
  state: () => ({ name: '张三' }),
  actions: {
    setName(newName) {
      this.name = newName
    }
  }
})
// 组件中使用
import { useUserStore } from '@/store/user'
const userStore = useUserStore()
const { name } = storeToRefs(userStore)
userStore.setName('李四')
```

---

## 五、组合式 API 与选项式 API

**23. 什么是组合式 API？相比选项式 API 有什么优势？**  
- 组合式 API 将组件逻辑按功能聚合，解决选项式 API 中逻辑分散（data、methods、computed 等）的问题，提高代码复用性和可维护性。

**24. `setup` 函数执行时机是什么？`this` 指向什么？**  
- `setup` 在 `beforeCreate` 之前执行，`this` 为 `undefined`。组合式 API 中不依赖 `this`，直接访问 `props` 和上下文。

**25. 如何在组合式 API 中使用 `ref` 和 `reactive`？它们有什么区别？**  
- `ref` 用于基本类型或需要重新赋值的情况，返回一个带有 `.value` 的对象；`reactive` 用于对象类型，直接代理整个对象。  
- 在模板中使用 `ref` 时自动解包，无需 `.value`。

```js
import { ref, reactive } from 'vue'
const count = ref(0)
const state = reactive({ name: 'Vue', version: 3 })
function increment() {
  count.value++
}
```

**26. `toRefs` 和 `toRef` 的作用是什么？**  
- 将 `reactive` 对象的每个属性转为 `ref`，保持响应性，常用于解构赋值时避免丢失响应性。

**27. 如何在组合式 API 中获取组件实例？**  
- 使用 `getCurrentInstance()`，但官方建议尽量避免，用于高级场景。

**28. 如何编写可复用的组合函数（Composables）？**  
- 将逻辑封装成一个函数，内部使用响应式 API，返回需要暴露的数据和方法，例如 `useMouse`。

```js
// useMouse.js
import { ref, onMounted, onUnmounted } from 'vue'
export function useMouse() {
  const x = ref(0)
  const y = ref(0)
  function update(e) { x.value = e.pageX; y.value = e.pageY }
  onMounted(() => window.addEventListener('mousemove', update))
  onUnmounted(() => window.removeEventListener('mousemove', update))
  return { x, y }
}
```

---

## 六、模板与渲染

**29. Vue 2 中 `v-slot` 的用法？Vue 3 中有什么改进？**  
- **Vue 2**：使用 `slot` 和 `slot-scope`，Vue 2.6 后统一为 `v-slot`。  
- **Vue 3**：完全支持 `v-slot`，且作用域插槽更统一，无需 `slot` 属性。

**30. 什么是函数式组件？Vue 3 中还存在吗？**  
- **Vue 2**：函数式组件无状态无实例，性能高。  
- **Vue 3**：性能已足够优化，函数式组件被弱化，普通组件使用 `setup` 也可达到类似效果。

**31. Vue 2 中如何编写渲染函数（render）？Vue 3 中有什么不同？**  
- **Vue 2**：使用 `h` 函数（createElement）。  
- **Vue 3**：`h` 函数全局导入，渲染函数 API 改变，支持平铺的 children 数组。

```js
// Vue 3 渲染函数
import { h } from 'vue'
export default {
  render() {
    return h('div', { class: 'hello' }, [h('span', 'Hello'), ' World'])
  }
}
```

**32. Vue 2 中 `filters` 过滤器的作用？Vue 3 中为什么移除了？**  
- **Vue 2**：可在模板中通过 `|` 对数据进行格式化。  
- **Vue 3**：移除，推荐使用方法调用或计算属性替代，因为过滤器在逻辑复用上不够灵活。

---

## 七、指令与插件

**33. 如何自定义指令？Vue 3 中指令钩子函数有哪些变化？**  
- **Vue 2**：使用 `Vue.directive`，钩子：`bind`, `inserted`, `update`, `componentUpdated`, `unbind`。  
- **Vue 3**：钩子重命名，且统一为对象形式：`beforeMount`, `mounted`, `beforeUpdate`, `updated`, `beforeUnmount`, `unmounted`。

```js
// Vue 3 自定义指令
const focusDirective = {
  mounted(el) {
    el.focus()
  }
}
// 全局注册
app.directive('focus', focusDirective)
```

**34. 如何编写一个 Vue 插件？Vue 3 中插件安装方式有何不同？**  
- **Vue 2**：`Vue.use(plugin)`，插件暴露 `install` 方法。  
- **Vue 3**：使用 `app.use(plugin)`，插件需提供 `install` 方法，并接收 `app` 实例。

**35. Vue 3 中如何全局挂载属性和方法？**  
- **Vue 2**：`Vue.prototype.$http = ...`  
- **Vue 3**：`app.config.globalProperties.$http = ...`，并在组合式 API 中通过 `getCurrentInstance` 访问或使用 provide/inject。

---

## 八、性能优化

**36. Vue 2 中如何进行组件懒加载？Vue 3 中呢？**  
- 两者都支持路由懒加载和异步组件，但 Vue 3 的异步组件需用 `defineAsyncComponent`。

**37. 什么是虚拟 DOM？Vue 3 的虚拟 DOM 有哪些优化？**  
- Vue 3 对虚拟 DOM 进行静态标记（PatchFlags），静态提升（hoistStatic），事件监听器缓存等，提升 diff 性能。

**38. Vue 3 中 `v-once` 和 `v-memo` 的作用？**  
- `v-once` 仅渲染一次；`v-memo` 可以记忆部分子树的渲染结果，仅当依赖变化时才重新渲染。

**39. 如何避免组件不必要的重新渲染？**  
- 使用 `computed` 缓存，合理使用 `key`，拆分组件，Vue 3 中可使用 `v-memo` 优化列表渲染。

**40. Vue 3 中 `shallowRef` 和 `shallowReactive` 有什么用？**  
- 用于创建浅层响应式对象，只对顶层属性进行响应式处理，适合大型数据结构的性能优化。

---

## 九、TypeScript 支持

**41. Vue 2 中如何支持 TypeScript？Vue 3 呢？**  
- **Vue 2**：需使用 `vue-class-component` 或 `Vue.extend`，类型推导较弱。  
- **Vue 3**：原生支持 TypeScript，组合式 API 中 `defineProps` 等可接受泛型参数，提供更好的类型推导。

**42. 在 `<script setup>` 中如何定义 props 和 emits 的类型？**  
```vue
<script setup lang="ts">
const props = defineProps<{
  title: string
  count?: number
}>()
const emit = defineEmits<{
  (e: 'update', value: string): void
}>()
</script>
```

**43. 如何在组合式 API 中为 `ref` 标注类型？**  
```ts
import { ref } from 'vue'
const count = ref<number>(0)  // 或者 const count = ref(0) 自动推导
```

---

## 十、迁移与兼容

**44. 从 Vue 2 迁移到 Vue 3 需要注意哪些重大变化？**  
- 全局 API 改为实例 API（如 `Vue.use` → `app.use`）。  
- 移除了 `$on`、`$off`、`$once`、`filters`。  
- 生命周期钩子重命名。  
- `v-model` 用法改变。  
- 移除 `$children`。  
- 异步组件方式变化。

**45. Vue 3 中 `v-bind` 的 `sync` 修饰符还在吗？**  
- 移除，用 `v-model:propName` 替代。

**46. Vue 2 的 `eventBus` 在 Vue 3 中如何替代？**  
- 使用 mitt 或 pinia 等第三方库，或利用 provide/inject 实现简单的事件总线。

**47. Vue 2 中 `$listeners` 在 Vue 3 中如何访问？**  
- 合并到 `$attrs` 中，可通过 `useAttrs()` 获取所有属性（包括事件）。

---

## 十一、其他

**48. 什么是 Teleport？Vue 3 中它解决了什么问题？**  
- Teleport 允许将组件内容渲染到 DOM 树中的其他位置，常用于模态框、通知等需要脱离当前层级布局的场景。Vue 2 没有原生支持，需借助第三方库。

**49. Vue 3 中 `Suspense` 的作用是什么？**  
- 用于处理异步组件的加载状态，可以显示 fallback 内容，等待嵌套的异步依赖完成后再渲染。

```html
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

**50. Vue 3 的响应式系统能否独立使用？**  
- 可以，`@vue/reactivity` 包可以脱离 Vue 框架单独使用，实现响应式数据管理。

---

以上 50 道题目涵盖了 Vue 2 和 Vue 3 的核心差异，帮助你在面试中清晰对比两个版本的演进。如需更详细的代码示例或特定场景的深入解析，可进一步展开讨论。