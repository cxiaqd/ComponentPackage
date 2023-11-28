<template>
  <div class="flex-test">
    <div class="box1">
      <div class="flex-box">1</div>
      <div class="flex-box">2</div>
      <div class="flex-box">3</div>
    </div>
    <div class="box2">
      <div class="flex-box">1</div>
      <div class="flex-box">2</div>
      <div class="flex-box">3</div>
    </div>
    <div class="box3">
      <div class="flex-box">1</div>
      <div class="flex-box">2</div>
      <div class="flex-box">3</div>
    </div>
    <div class="box4">
      <div class="flex-box">1</div>
      <div class="flex-box">2</div>
      <div class="flex-box">3</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {};
  },
};
</script>
<style scoped>
.flex-test,
.box1,
.box2,
.box3,
.box4 {
  display: flex;
  padding: 8px;
}
.box1{
    flex-direction: row;
}
.box2{
    flex-direction: row-reverse;
}
.box3{
    flex-direction: column;
}
.box4{
    flex-direction: column-reverse;
}
.flex-box {
  width: 32px;
  height: 32px;
  margin: 2px;
  background-color: #20f807;
}
</style>