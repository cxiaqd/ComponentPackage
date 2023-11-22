<template>
  <div class="test">
    <el-button type="primary" @click="getDebounceResult">防抖测试</el-button>
    <el-button type="primary" @click="getThrottleResult">节流测试</el-button>
  </div>
</template>
<script>
import { debounce,throttle } from "./JS/debounce-throttle";

export default {
  name: "vue",
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    getDebounceResult: debounce(() => {
      console.log("debounce：多次触发，只执行最后一次");
    }, 1000),
    getThrottleResult: throttle(() => {
      console.log("throttle：多次触发，固定时间间隔执行一次");
    }, 1000),
  },
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped>
.test {
  padding: 16px;
  display: flex;
  align-items: center; /*垂直方向居中*/
  justify-content: center; /*水平方向居中*/
}
</style>