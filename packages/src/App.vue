<template>
  <div id="app">
    <div style="position: absolute; z-index: 10; top: 0; right: 0">
      <router-link to="/">返回首页</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
<style lang="less" scoped>
html,
body,
#app {
  height: 100%;
}
</style>

