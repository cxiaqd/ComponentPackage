<template>
  <div class="test flex-center">
    <el-button type="primary" @click="getDebounceResult">防抖测试</el-button>
    <el-button type="primary" @click="getThrottleResult">节流测试</el-button>
    <el-button type="primary">vuex：{{ getName }}</el-button>
    <el-button type="primary">vuex：{{ name }}</el-button>
    <el-button type="primary">vuex：{{ vexname }}</el-button>
    <el-button type="primary">vuex：{{ getNameProcess }}</el-button>
    <el-button type="primary">vuex：{{ getVuexNmae }}</el-button>
    <el-button type="primary">vuex：{{ number }}</el-button>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
import {
  debounce,
  throttle,
  throttle2,
  throttle3,
  throttle4,
  throttle5,
} from "./JS/节流&防抖";

export default {
  name: "vue",
  data() {
    return {};
  },
  components: {},
  computed: {
    ...mapState(["name", "number"]),
    ...mapGetters(["getNameProcess"]), 
    ...mapState({ vexname: "name" }), // 赋别名的话，这里接收对象，而不是数组
    ...mapGetters({ getVuexNmae: "getNameProcess" }), // 赋别名的话，这里接收对象，而不是数组
    getName() {
      return this.$store.state.name;
    },
  },
  watch: {},
  created() {},
  async mounted() {
    console.log(this.$store.state.name);
    console.log(this.$store.getters.getNameProcess);
    console.log(`旧值：${this.$store.state.number}`);
    this.$store.commit("setNumber");
    console.log(`新值：${this.$store.state.number}`);
    this.$store.commit("setNumberIsWhat", 666);
    console.log(`传参新值：${this.$store.state.number}`);
    this.$store.commit("newSetNumberIsWhat", { number: 888 });
    console.log(`传参新值：${this.$store.state.number}`);
    this.newSetNumberIsWhat({ number: 999 });
    console.log(`传参新值：${this.$store.state.number}`);

    console.log(`sync旧值：${this.$store.state.number}`);
    await this.$store.dispatch("syncSetNum",{number: 666666});
    console.log(`sync新值：${this.$store.state.number}`);
    await this.syncSetNum({number: 99999999999})
    console.log(`sync新值：${this.$store.state.number}`);
  },
  methods: {
    ...mapMutations(["newSetNumberIsWhat"]),
    ...mapActions({ syncSetNum: 'syncSetNum' }),   // 赋别名的话，这里接收对象，而不是数组
    getDebounceResult: debounce(() => {
      console.log("debounce：多次触发，只执行最后一次");
    }, 1000),
    getThrottleResult(){
      return function(){
        throttle5(() => {
        console.log("throttle：多次触发，固定时间间隔执行一次");
      }, 1000)
      } 
    }
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
}
</style>