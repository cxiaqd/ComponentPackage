<template>
  <div class="fullscreen-layout">
    <header></header>
    <main>
      <div class="main_content">
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
        <div>11111111111111111</div>
        <div>22222222222222222</div>
        <div>33333333333333333</div>
      </div>
    </main>
    <footer></footer>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
.fullscreen-layout {
  display: flex;
  flex-direction: column;
  height: 100%;
  header {
    height: 50px;
    background-color: #f66;
  }
  footer {
    height: 50px;
    background-color: #66f;
  }
  main {
    flex: 1;
    background-color: #3c9;
    overflow: hidden;
    .main_content {
      overflow: auto;
      height: 100%;
    }
  }
}
</style>