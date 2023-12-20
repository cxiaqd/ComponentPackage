<template>
    <div id="slot-child">
      <div class="button">
        <button>子组件插槽按钮</button>
        <!-- 那么我们如何使添加的内容能够显示呢？在子组件内添加slot 即可 
              slot 可以放在任意位置。（这个位置就是父组件添加内容的显示位置）
        -->
        <slot><p>这里是插槽中设置的默认值</p></slot>
  
        <!-- 当有多个插槽时，那么我们如何在父组件中，精确的在想要的位置，插入对应的内容呢？ -->
        <!-- 给插槽命一个名即可，即添加name属性 -->
        <slot name="one"> <p>具名插槽1的默认内容</p></slot>
        <slot name="two"> <p>具名插槽2的默认内容</p></slot>
        <slot name="three"> <p>具名插槽3的默认内容</p></slot>
  
        <!-- 使用v-slot的方式,在插槽中访问子组件中的数据 -->
        <slot name="childVal" :val1="childVal">访问子组件数据的插槽的默认内容</slot>
        <slot name="propSlot" :firstname="name" :age="age" :sex="sex"></slot>
      </div>
    </div>
  </template>
  <script>
  export default {
    name: "vue",
    data() {
      return {
        child: "子组件中的数据",
        childVal: "通过插槽访问的子组件中的数据",
        name: "大海",
        age: 20,
        sex: "男",
      };
    },
    components: {},
    methods: {},
    mounted() {
    },
    computed: {
    },
    watch: {},
  };
  </script>
  <style>
  </style>