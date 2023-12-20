<template>
  <div id="grandson">
    <p>v2 is {{ $attrs['v2'] }}{{ $attrs }}</p>
    <attrs-grandson v-bind="$attrs"></attrs-grandson
    >
  </div>
</template>
<script>
import attrsGrandson from "@/components/Attrs/attrsGrandson";

export default {
  name: "attrsChild",
  inheritAttrs: false,

  data() {
    return {};
  },
  props: {
    // v2: "",
  },
  components: {
    attrsGrandson,
  },
  method: {},
  mounted() {
    console.log(this.$attrs);
  },
};
</script>