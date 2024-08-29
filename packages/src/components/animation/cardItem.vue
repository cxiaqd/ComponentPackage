<template>
  <div class="animation">
    <div :class="activeStatus ? 'item01 active' : 'item01'" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
      <div class="common">
        <slot name="img"></slot>
      </div>
      <div class="drag_down">
        <slot name="overflow"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      activeStatus: false,
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    handleMouseEnter() {
      this.activeStatus = true;
    },
    handleMouseLeave() {
      this.activeStatus = false;
    },
  },
};
</script>
<style scoped lang="scss">
.animation {
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: close 0.3s;
  animation-fill-mode: forwards;
  .item01 {
    width: 180px;
    height: 220px;
  }
  .active {
    animation: open 0.4s;
    animation-fill-mode: forwards;
  }
  .common {
    width: 180px;
    height: 220px;
    background-color: antiquewhite;
  }
  .drag_down {
    width: 180px;
    height: 100px;
    background-color: aquamarine;
  }
}
@keyframes open {
  from {
  }
  to {
    height: 320px;
    position: absolute;
  }
}
@keyframes close {
  from {
    height: 320px;
    position: absolute;
  }
  to {
    height: 220px;
  }
}
</style>
