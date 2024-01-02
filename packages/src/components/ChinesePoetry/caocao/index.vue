<template>
  <div class="poetry read-back-color">
    <template v-if="!searchTitle">
      <div v-for="item in poetry" :key="item.title" style="width: 30%">
        <h1>{{ item.title }}</h1>
        <p v-for="(paragraph, index) in item.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </template>
    <template v-if="searchTitle && searchPoetry">
      <div v-for="item in searchPoetry" :key="item.title" style="width: 30%">
        <h1>{{ item.title }}</h1>
        <p v-for="(paragraph, index) in item.paragraphs" :key="index">
          {{ paragraph }}
        </p>
      </div>
    </template>
  </div>
</template>
  <script>
import poetryData from "./data";
export default {
  name: "vue",
  props: ["searchTitle"],
  data() {
    return {
      poetry: [],
      searchPoetry: [],
    };
  },
  watch: {
    searchTitle() {
      this.searchPoetryFn();
    },
  },
  mounted() {
    this.poetry = poetryData;
    this.searchPoetryFn();
  },
  methods: {
    searchPoetryFn() {
      this.searchPoetry = []
      poetryData.forEach((element) => {
        if (element.title.includes(this.searchTitle)) {
          this.searchPoetry.push(element);
          return;
        }
      });
    },
  },
};
</script>