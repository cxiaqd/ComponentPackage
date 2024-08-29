<template>
  <div class="table">
    <div class="menu">
      <el-button type="primary" @click="setTableType('merge')">表格合并</el-button>
      <el-button type="primary" @click="setTableType('merge2')">表格合并2</el-button>
      <el-button type="primary" @click="setTableType('layout')">表格布局</el-button>
      <el-button type="primary" @click="setTableType('jumper')">跨页选择</el-button>
      <el-button type="primary" @click="setTableType('jumper2')">跨页选择2</el-button>
    </div>
    <div class="content">
      <template v-if="tabletype === 'merge'">
        <TableMerge :tableData="tableData" :columns="columns"></TableMerge>
      </template>
      <template v-if="tabletype === 'merge2'">
        <TableMerge2 :tableData="tableData2" :columns="columns2" :mergeTable="true"></TableMerge2>
      </template>
      <template v-if="tabletype === 'layout'">
        <Layout></Layout>
      </template>
      <template v-if="tabletype === 'jumper'">
        <JumperSelect></JumperSelect>
      </template>
      <template v-if="tabletype === 'jumper2'">
        <JumperSelect2></JumperSelect2>
      </template>
    </div>
  </div>
</template>
<script>
import TableMerge from './merge.vue';
import TableMerge2 from './merge2.vue';
import Layout from './layout.vue';
import JumperSelect from './jumperSelect.vue';
import JumperSelect2 from './jumperSelect2.vue';
export default {
  name: 'vue',
  data() {
    return {
      tabletype: 'merge',
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age: '18'
        },
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1517 弄",
          age: '18'

        },
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1517 弄",
          age: '19'

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age: '18'
        },
        {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1512弄",
          age: '18'
        }, {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518弄",
          age: '19'
        },
      ],
      columns: [
        {
          prop: 'date',
          label: '日期',
          width: '200'
        },
        {
          prop: 'name',
          label: '姓名',
          width: '140'
        },
        {
          prop: 'address',
          label: '地址',
          width: '240'
        },
        {
          prop: 'age',
          label: '年龄',
          width: '200'
        }
      ],
      tableData2: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          age:'18'
        },
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1517 弄",
          age:'18'

        },
        {
          date: "2016-05-02",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1517 弄",
          age:'19'

        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          age:'18'
        },
        {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1512弄",
          age:'18'
        },        {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1518弄",
          age:'19'
        },
      ],
      columns2:[
        {
          prop:'date',
          label:'日期',
          width:'200',
          isMerge:true
        },
        {
          prop:'name',
          label:'姓名',
          width:'140',
          isMerge:true
        },
        {
          prop:'address',
          label:'地址',
          width:'240',
          isMerge:false

        },
        {
          prop:'age',
          label:'年龄',
          width:'200',
          isMerge:false
        }
      ]
    };
  },
  components: {
    TableMerge,
    TableMerge2,
    Layout,
    JumperSelect,
    JumperSelect2,
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    setTableType(type) {
      this.tabletype = type
    }
  },
  beforeCreate() { },
  beforeMount() { },
  beforeUpdate() { },
  updated() { },
  beforeDestroy() { },
  destroyed() { },
  activated() { },
}
</script>
<style>
.table{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content{
  max-width: 100%;
}
</style>