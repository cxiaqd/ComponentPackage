这是 Vue.js 中两种主要的代码组织方式。**Options API 是 Vue 2 的主流写法，而 Composition API 是 Vue 3 引入的新范式**，两者都能完成相同的功能，但在代码组织、逻辑复用和心智模型上有显著差异。

---

### 一、核心区别对比

| 维度 | Options API | Composition API |
| :--- | :--- | :--- |
| **代码组织** | 按**选项类型**分组（data、methods、computed、watch） | 按**逻辑关注点**分组（将相关功能的变量、方法聚合在一起） |
| **逻辑复用** | 主要通过 **mixins**，但存在命名冲突、来源不明等弊端 | 通过**组合式函数 (Composables)**，更清晰、灵活，无命名冲突 |
| **TypeScript** | 类型推断较差，需要额外装饰器或手动标注 | 天然对 TypeScript 友好，类型推断精准 |
| **响应式** | 使用 `data()` 返回对象，自动代理 | 需显式使用 `ref` 或 `reactive` 创建响应式状态 |
| **生命周期** | 通过 `mounted`、`created` 等选项直接定义 | 需导入 `onMounted`、`onUpdated` 等钩子，在 `setup` 中调用 |
| **组件实例** | 通过 `this` 访问组件实例（隐含了上下文） | 在 `setup` 中无法访问 `this`，通过参数和导入的 API 获取上下文 |
| **适用场景** | 简单、小型组件，或维护 Vue 2 遗留项目 | 复杂组件、大型应用、追求高逻辑复用和可维护性的项目 |

---

### 二、代码风格示例

以一个计数器组件为例，展示两种写法。

#### Options API

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  computed: {
    double() {
      return this.count * 2
    }
  },
  methods: {
    increment() {
      this.count++
    }
  },
  mounted() {
    console.log('Component mounted')
  }
}
</script>
```

#### Composition API

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// 响应式状态
const count = ref(0)

// 计算属性
const double = computed(() => count.value * 2)

// 方法
function increment() {
  count.value++
}

// 生命周期钩子
onMounted(() => {
  console.log('Component mounted')
})
</script>
```

---

### 三、各自的优势与劣势

#### Options API

**优势**：
- **学习门槛低**：结构固定，适合初学者快速上手。
- **代码结构清晰**：对于小型组件，各选项分离，一目了然。

**劣势**：
- **逻辑分散**：同一功能的代码（如数据、方法、生命周期）被迫分散在不同的选项中，当组件复杂时，需要反复上下跳转。
- **逻辑复用困难**：mixins 容易导致命名冲突和隐式依赖，调试困难。
- **TypeScript 支持弱**：`this` 的类型推导复杂，需要额外处理。

#### Composition API

**优势**：
- **高内聚**：可将相关功能的代码聚合在一起，提高可读性和可维护性。
- **逻辑复用强大**：组合式函数（Composables）允许像普通函数一样提取和复用逻辑，无副作用。
- **TypeScript 友好**：得益于普通函数和变量，类型推断非常准确。
- **更好的 Tree-shaking**：只引入实际使用的 API，打包体积更小。

**劣势**：
- **学习曲线稍陡**：需要理解 `ref`、`reactive`、`setup` 等新概念。
- **过度拆分可能增加复杂度**：如果不加节制地拆分，可能导致组件碎片化。

---

### 四、如何选择？

- **新项目**：**首选 Composition API**（Vue 3 项目默认使用 `<script setup>`）。它代表了 Vue 的未来发展方向，能够更好地应对复杂业务逻辑。
- **维护 Vue 2 旧项目**：继续使用 **Options API**，或逐步引入 `@vue/composition-api` 插件进行渐进式迁移。
- **简单展示型组件**：两种方式均可。如果团队对 Vue 2 更熟悉，Options API 依然高效；如果追求代码统一，也可以全部采用 Composition API。
- **追求高逻辑复用的库或 hooks**：**Composition API** 是唯一的选择，其组合式函数比 mixins 强大得多。

---

### 五、常见误区澄清

1. **Composition API 不等于 `<script setup>`**  
   `<script setup>` 是 Composition API 的语法糖，极大简化了样板代码。你也可以使用 `setup()` 函数，但 `<script setup>` 是目前官方推荐的写法。

2. **Options API 并未被废弃**  
   Vue 3 完全支持 Options API，并且会长期保留。对于习惯了 Vue 2 的开发者来说，这保证了平滑过渡。

3. **响应式 API 的使用习惯**  
   在 Composition API 中，需要区分 `ref` 和 `reactive`，并在模板中使用时注意 `ref` 自动解包的特性，这是初学者容易踩坑的地方。

---

### 总结

| 场景 | 推荐方案 |
| :--- | :--- |
| **Vue 3 新项目** | Composition API（`<script setup>`） |
| **大型复杂组件** | Composition API（便于逻辑组织和复用） |
| **简单 UI 组件** | 两者皆可，看团队习惯 |
| **需要高逻辑复用的库** | Composition API（组合式函数） |
| **Vue 2 旧项目** | Options API（或渐进式引入 Composition API） |

两种 API 本质上是**组织代码的方式不同**，而非能力上的差异。在实际开发中，可以根据团队熟悉度和项目复杂度灵活选择。