<template>
  <div class="poetry-home">
    <div class="route-left flex-column2">
      <header class="route-header header">导航栏</header>
      <main>
        <div class="content">
          <el-button @click="selectPoetry('CaoCao')">曹操诗集</el-button>
          <el-button @click="selectPoetry('ChuCi')">楚辞</el-button>
          <el-button @click="selectPoetry('LunYu')">论语</el-button>
        </div>
      </main>
    </div>
    <div class="right-content flex-column2">
      <header class="right-header header">{{ headerDic[poetryType] }}</header>
      <main>
        <div class="content">
          <component :is="poetryType" :key="poetryType"></component>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
import CaoCao from './caocao'
import ChuCi from './chuci'
import LunYu from './lunyu'
export default {
  name: "vue",
  data() {
    return {
      poetryType:'CaoCao',
      headerDic:{
        'CaoCao':'曹操诗集',
        'ChuCi':'楚辞',
        'LunYu':'论语',
      }
    };
  },
  components: {
    CaoCao,
    ChuCi,
    LunYu
  },
  computed: {
  },
  watch: {},
  methods: {
    selectPoetry(type){
      this.poetryType = type
    }
  },
  created() {},
  mounted() {},
};
</script>
<style scoped lang="scss">
.el-button {
  border: none;
}
.poetry-home {
  display: flex;
  height: 100%;
}
.header {
  text-align: center;
  margin: 0;
  padding: 10px 0;
  font-weight: 700;
  background-color: #E5E9F2;
}
.flex-column2 {
  display: flex;
  flex-direction: column;
}
main {
  overflow: hidden;
  .content {
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
  }
}
.route-left {
  flex: 1;
}
.right-content {
  flex: 5;
}
</style>