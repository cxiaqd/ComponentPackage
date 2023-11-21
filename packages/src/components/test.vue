<template>
  <div class="test">
    <el-button type="primary" @click="getResult">防抖测试</el-button>
  </div>
</template>
<script>
import { debounce } from "./mixin-test";

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
    testdebounce() {
      console.log("testdebounce");
    },
    getResult: debounce(() => {
      console.log("123");
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