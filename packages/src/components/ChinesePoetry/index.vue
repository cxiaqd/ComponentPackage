<template>
  <div class="poetry-home">
    <div class="route-left flex-column2">
      <header class="route-header header">导航栏</header>
      <main>
        <div class="content">
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
        </div>
      </main>
    </div>
    <div class="right-content flex-column2">
      <header class="right-header header">内容</header>
      <main>
        <div class="content">
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
          <el-button>1</el-button>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
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
  methods: {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style scoped lang="scss">
.el-button {
  border: none;
}
.poetry-home {
  display: flex;
  height: 100%;
}
.header {
  text-align: center;
  margin: 0;
  padding: 10px 0;
}
.flex-column2 {
  display: flex;
  flex-direction: column;
}
main {
  overflow: hidden;
  .content {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
}
.route-left {
  flex: 1;
}
.right-content {
  flex: 5;
}
</style>