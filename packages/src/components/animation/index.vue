<template>
  <div class="content">
    <cardItem style="width: 180px; margin: 8px 0 0 8px" v-for="item in 36" :key="item">
    <div slot="img">
      <span>{{`img_${item}`}}</span>
    </div>
    <div slot="overflow">
      <span>{{`overflow${item}`}}</span>
    </div>
    </cardItem>
  </div>
</template>
<script>
import CardItem from "./cardItem.vue";
export default {
  name: "vue",
  data() {
    return {
      activeStatus: false,
    };
  },
  components: {
    CardItem,
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
