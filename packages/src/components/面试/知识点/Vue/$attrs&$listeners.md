在 Vue 2 中，`$attrs` 和 `$listeners` 是用于组件封装和透传（传递）父组件传递的属性和事件的特性，尤其在构建高阶组件（Higher-Order Components）时非常有用。它们让开发者可以轻松地将父组件提供的非 prop 属性和事件监听器传递给子组件，而无需手动逐个声明和传递。

---

### 1. `$attrs` 的作用

`$attrs` 包含了父作用域中不作为当前组件 **props** 被识别的 attribute 绑定（`class` 和 `style` 除外）。  
简单来说，就是父组件传给了当前组件、但当前组件没有通过 `props` 声明的那些属性。  
通过 `v-bind="$attrs"` 可以一次性将这些属性传递给内部的原生元素或子组件。

#### 举例：封装一个带有额外属性的输入框组件

假设我们想封装一个 `BaseInput` 组件，它除了接收一个 `label` prop 外，还希望将父组件传入的其他所有属性（如 `placeholder`、`type`、`disabled` 等）直接透传给内部的 `<input>` 元素。

**BaseInput.vue**
```vue
<template>
  <div class="base-input">
    <label v-if="label">{{ label }}</label>
    <input v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['label', 'value']   // 仅声明 label 和 value 作为 prop
}
</script>
```

**父组件使用**
```vue
<template>
  <BaseInput
    label="用户名"
    placeholder="请输入用户名"
    type="text"
    autofocus
    v-model="username"
  />
</template>

<script>
export default {
  data() {
    return {
      username: ''
    }
  }
}
</script>
```

在这个例子中，`placeholder`、`type`、`autofocus` 没有被 `BaseInput` 声明为 `props`，它们会进入 `$attrs` 对象，然后通过 `v-bind="$attrs"` 被透传给内部的 `<input>` 元素，从而让原生 input 能够正常工作。这样就无需在 `BaseInput` 中手动为每一个可能的属性定义 `prop`。

---

### 2. `$listeners` 的作用

`$listeners` 包含了父作用域中（不含 `.native` 修饰器）的 `v-on` 事件监听器。  
通过 `v-on="$listeners"` 可以将父组件监听的所有事件（如 `click`、`focus`、`input` 等）透传给内部元素或子组件。

#### 举例：在刚才的 `BaseInput` 中透传事件

我们希望父组件能直接监听 `<input>` 原生事件，比如 `focus` 和 `blur`，而不需要在 `BaseInput` 内部手动定义并转发这些事件。

**改进 BaseInput.vue**
```vue
<template>
  <div class="base-input">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :value="value"
      v-on="$listeners"      <!-- 将父组件监听的所有事件直接绑定到 input 上 -->
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'BaseInput',
  props: ['label', 'value']
}
</script>
```

**父组件使用**
```vue
<template>
  <BaseInput
    label="邮箱"
    placeholder="请输入邮箱"
    v-model="email"
    @focus="onFocus"
    @blur="onBlur"
  />
</template>

<script>
export default {
  data() {
    return {
      email: ''
    }
  },
  methods: {
    onFocus() {
      console.log('输入框获得焦点');
    },
    onBlur() {
      console.log('输入框失去焦点');
    }
  }
}
</script>
```

这里 `$listeners` 包含了父组件监听的 `focus` 和 `blur` 事件，通过 `v-on="$listeners"` 将它们直接绑定到内部的 `<input>` 元素上，这样当输入框获得或失去焦点时，父组件的方法就会自动执行。注意 `input` 事件我们没有通过 `$listeners` 透传，而是单独用 `@input` 自定义处理，并向上发出 `input` 事件以实现 `v-model` 支持。

---

### 3. 组合使用的高级场景

在更复杂的组件树中，`$attrs` 和 `$listeners` 经常一起使用，将父组件提供的一切（除 `props` 和 `class`/`style` 之外的属性和事件）全部透传给深层子组件，从而实现“透明包装器”。

#### 示例：一个“透明”的按钮组件

**TransparentButton.vue**
```vue
<template>
  <button v-bind="$attrs" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'TransparentButton',
  inheritAttrs: false   // 可选，避免根元素自动继承 attribute
}
</script>
```

父组件可以像使用原生 `<button>` 一样使用 `TransparentButton`，并传递任何属性和事件：

```vue
<template>
  <TransparentButton
    class="my-btn"
    :disabled="isDisabled"
    @click="handleClick"
  >
    点击我
  </TransparentButton>
</template>
```

这样 `class`、`disabled` 属性和 `click` 事件都会自动透传给内部的 `<button>` 元素，无需在 `TransparentButton` 中定义任何 `props` 或 `emits`。

---

### 注意事项

- `$attrs` 不包含 `class` 和 `style`，因为这两个是特殊的，会自动合并到组件的根元素上。如果设置了 `inheritAttrs: false`，则 `class` 和 `style` 也不会自动继承，需要手动绑定。
- `$listeners` 在 Vue 3 中已被移除，改用 `$attrs` 统一处理事件监听器。但 Vue 2 中两者是分开的，使用时需注意版本差异。
- 使用 `v-on="$listeners"` 时，如果同时定义了同名事件（如自定义的 `@input`），两个都会触发。在上面的例子中，我们手动处理了 `input` 事件并向上 emit，同时又通过 `$listeners` 透传了其他事件，这样可以保持组件的灵活性。

---

### 总结

- **`$attrs`**：用于透传父组件传递的、未被当前组件声明为 `props` 的 HTML 属性（`class` 和 `style` 除外）。常用于高阶组件封装，让内部元素能够直接接收这些属性。
- **`$listeners`**：用于透传父组件监听的、不含 `.native` 修饰器的事件。使得包装组件可以无缝地将事件交给内部原生元素处理。

它们一起让 Vue 组件更易于复用和抽象，避免了繁琐的属性和事件传递代码，是实现“透明封装”的重要工具。