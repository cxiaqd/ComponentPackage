<template>
    <div class="poetry">
      <div v-for="item in poetry" :key="item.title" style="width: 30%;">
          <h1>{{ item.title }}</h1>
          <p v-for="(caocao,index) in item.paragraphs" :key="index">{{ caocao }}</p>
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
        console.log(poetryData);
    }
  };
  </script>