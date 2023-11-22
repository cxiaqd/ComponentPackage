<template>
  <div class="HolyGrail">
    <header></header>
    <div class="HolyGrail-body">
      <div class="HolyGrail-nav"></div>
      <div class="HolyGrail-content"></div>
      <div class="HolyGrail-ads"></div>
    </div>
    <footer></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.HolyGrail {
  display: flex;
  height: 100%;
  flex-direction: column;
}

header,
footer {
  /* flex: 1; */
  background-color: #666666;
  height: 56px;
}

.HolyGrail-body {
  display: flex;
  flex: 1;
}

.HolyGrail-content {
  flex: 1;
  background-color: #d6d6d6;
}

.HolyGrail-nav,
.HolyGrail-ads {
  /* 两个边栏的宽度设为12em */
  flex: 0 0 180px;
}
.HolyGrail-ads{
    background-color: #ff6633;
}
.HolyGrail-nav {
  /* 导航放到最左边 */
  /* order: -1; */
  background-color: #77bbdd;
}
</style>