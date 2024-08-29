<template>
  <ul ref="parent">
    <li v-for="tape in tapes" :key="tape" class="cassette">{{ tape }}</li>
  </ul>
</template>
<script>
import { useDragAndDrop } from "@formkit/drag-and-drop/vue";
const [parent, tapes] = 
useDragAndDrop([
  "Depeche Mode",
  "Duran Duran",
  "Pet Shop Boys",
  "Kraftwerk",
  "Tears for Fears",
  "Spandau Ballet",
]);
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
    console.log([parent, tapes]);
  },
  methods: {},
};
</script>
<style></style>
