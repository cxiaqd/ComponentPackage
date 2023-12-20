<template>
  <div id="child">
    <p>v1 is {{ v1 }}</p>
    <attrs-child v-bind="$attrs"></attrs-child>
  </div>
</template>
<script>
import attrsChild from "@/components/Attrs/attrsChild";
import attrsGrandson from "@/components/Attrs/attrsGrandson";
export default {
  name: "attrsTest",
  inheritAttrs: false,
  data() {
    return {};
  },
  props: {
    v1: "",
  },
  components: {
    attrsChild,
    attrsGrandson,
  },
  methods: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>
<style scoped>
.father,
.child,
.grandson {
  margin-bottom: 20px;
  margin-left: 50%;
  transform: translateX(-50%);
  border: 1px solid skyblue;
}
</style>