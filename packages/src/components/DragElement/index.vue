<template>
  <div id="container">
    <div id="draggable" draggable="true" @dragstart="iconfontDragstart">
      This div is draggable
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
  methods: {
    iconfontDragstart(e) {
      console.log(e);
      e.dataTransfer.setData(
        "application/json",
        JSON.stringify({
          markerSymbols: [{ radius: 14 }, { unicode: "通用-ktv" }],
        })
      );
    },
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
<style>
</style>