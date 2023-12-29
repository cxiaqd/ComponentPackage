<template>
    <div class="poetry read-back-color">
      <div v-for="item in poetry" :key="item.title" style="width: 30%;">
          <h1>{{ item.title }}</h1>
          <p v-for="(paragraph,index) in item.paragraphs" :key="index">{{ paragraph }}</p>
      </div>
    </div>
  </template>
  <script>
  import poetryData from './data';
  export default {
    name: "vue",
    data() {
      return {
        poetry:[]
      };
    },
    mounted(){
        this.poetry = poetryData
    }
  };
  </script>