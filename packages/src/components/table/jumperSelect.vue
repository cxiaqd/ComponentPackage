<template>
  <div class="table-selection-container">
    <el-table ref="multipleTable" :data="tableData" style="width: 100%" height="600" :row-key="getRowKey"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" :reserve-selection="true" row-key="id" />
      <el-table-column label="日期" width="180" prop="date" />
      <el-table-column label="地址" width="280" prop="address" />
      <el-table-column label="品牌" width="180" min-width="70" prop="name" />
    </el-table>
    <el-pagination :current-page="currentPage" :page-size="currentPageSize" :page-sizes="[10, 20, 50, 100]"
      layout="total, sizes, prev, pager, next, jumper" :total="46" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </div>
</template>
<script>
export default {
  name: 'vue',
  data() {
    return {
      tableData: [],
      totalData: [],
      selectOrderArr: [],
      currentPage: 1,
      currentPageSize: 10
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() {
    this.setTableData()
  },
  mounted() {
    this.handleSizeChange(10)
    this.handleCurrentChange(1)
  },
  methods: {
    handleSizeChange(val) {
      this.currentPageSize = val
      this.tableData = this.totalData.slice((this.currentPage - 1) * this.currentPageSize, this.currentPage * this.currentPageSize)

      this.selectOrderArr = JSON.parse(localStorage.getItem("selectArr")) || [];
      this.selectOrderArr &&
        this.selectOrderArr.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row, true);
        });
    },
    handleCurrentChange(val) {
      this.currentPage = val
      this.tableData = this.totalData.slice((this.currentPage - 1) * this.currentPageSize, this.currentPage * this.currentPageSize)
    },
    handleSelectionChange(val) {
      console.log(val);
      this.selectOrderArr = val;
      localStorage.setItem("selectArr", JSON.stringify(this.selectOrderArr));
    },
    getRowKey(row) {
      return row.id
    },
    setTableData() {
      for (let i = 0; i < 46; i++) {
        this.totalData.push({
          id: `rowId${i}`,
          date: '2018/01/01',
          name: `海康威视${i}`,
          address: `杭州市滨江区阡陌路${i}号`,
        })
      }
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
<style></style>