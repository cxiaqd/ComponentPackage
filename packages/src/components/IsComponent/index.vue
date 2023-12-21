<template>
  <div class="demo flex-center">
    <div class="header">
      <button
        v-for="(item, index) in tabs"
        :key="index"
        :class="['tab-button', { active: currentIndex === index }]"
        @click="currentIndex = index"
      >
        {{ item }}
      </button>
    </div>
    <component :is="currentTabComponent" class="tab"></component>
  </div>
</template>
  <script>
import home from "./home.vue";
import content01 from "./content1.vue";
import content02 from "./content2.vue";
export default {
  name: "vue",
  data() {
    return {
      currentIndex: 0,
      tabs: ["首页", "学院", "招生"],
      status: ["home", "content01", "content02"],
    };
  },
  components: {
    home,
    content01,
    content02,
  },
  computed: {
    currentTabComponent() {
      return this.status[this.currentIndex];
    },
  },
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
  <style>
.demo {
  flex-direction: column;
}
.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  margin-top: 16px;
  border: 1px solid #ccc;
  padding: 10px;
}
</style>