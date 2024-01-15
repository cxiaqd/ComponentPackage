<template>
    <div class="poetry read-back-color">
      <div v-for="(item,index) in poetry" :key="index" style="width: 30%;">
        <div style="display: flex;align-items: baseline;">
          <h1>{{ item.title }}</h1>
          <h2>（{{ item.author || '--' }}）</h2>
        </div>
          <p v-for="(paragraph,index) in item.content" :key="index">{{ paragraph }}</p>
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