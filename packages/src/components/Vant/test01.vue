<template>
  <div class="vant-test">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-cell is-link @click="showPopup">展示弹出层</van-cell>
    <van-popup v-model="show">弹出层内容</van-popup>
  </div>
</template>
<script>
export default {
  name: "vue",
  data() {
    return {
      show:false
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    showPopup() {
      this.show = true;
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
<style scoped>
.vant-test{
  display: flex;
  flex-direction: column;
}
</style>