<template>
  <div id="extend">
    <div id="extendTest">
      <div>789</div>
    </div>
    <div>45645</div>
  </div>
</template>
<script>
import Vue from "vue";
import utilOne from "./utilOne.vue";
export default {
  name: "vue",
  data() {
    return {};
  },
  components: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.extendConstructor(utilOne);
  },
  methods: {
    extendConstructor(component) {
      const profile = Vue.extend(component);
      //   new profile().$mount("#extendTest");
      let extendDom = new profile({
        el:document.createElement('div')
      });
      let extendDomBox = document.getElementById('extendTest')
      extendDomBox.appendChild(extendDom.$el)
      extendDom.$mount().$el;
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