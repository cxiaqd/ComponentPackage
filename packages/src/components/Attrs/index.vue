<template>
  <div id="only">
    <div class="father">
      <attrs-father :v1="value1" :v2="value2" :v3="value3"></attrs-father>
    </div>
  </div>
</template>
<script>
// https://www.jianshu.com/p/ce8ca875c337
import attrsFather from "@/components/Attrs/attrs";
export default {
  name: "vue",
  data() {
    return {
      value1: "father",
      value2: "child",
      value3: "grandson",
    };
  },
  components: {
    attrsFather,
  },
  methods: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>
<style>
.father {
  margin-left: 50%;
  transform: translateX(-50%);
}
</style>