<template>
  <div>
    <el-table ref="multipleTable" v-loading="loading" :data="tableData" row-key="uid"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" />
      <el-table-column prop="uid" label="序号" width="120" />
      <el-table-column prop="num" label="数值" show-overflow-tooltip />
    </el-table>
    <el-pagination :current-page.sync="pageno" :page-sizes="[5, 10, 15, 20]" :page-size.sync="pagesize"
      layout="total, sizes, prev, pager, next, jumper" :total="40" @size-change="getList" @current-change="getList" />
    <el-button @click="consoleSelect">输出选择的内容</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      loading: false,
      // 本页被选中的值
      multipleSelection: [],
      // 打开页面前已经被选中的选项uid
      selectedData: [1, 8, 14, 16],
      // 被选中的全部选项
      selectedMap: {},
      pageno: 1,
      pagesize: 5
    }
  },
  watch: {
    multipleSelection(val) {
      val.map(selected => {
        // 只更改本页数据的选中和未选中
        if (this.tableData.find(item => selected.uid === item.uid)) {
          this.selectedMap[selected.uid] = true
        } else {
          this.selectedMap[selected.uid] = false
        }
      })
    }
  },
  mounted() {
    this.getSelectedMap()
    this.getList()
  },
  methods: {
    consoleSelect() {
      const select = Object.keys(this.selectedMap)
      console.log(select)
    },
    getSelectedMap() {
      // 初始化被选中项
      /*
       * 如果传入selectedData包含多个属性并且有这个需要也可以写成
       * map[uid] = {selected: true,detail:item}
       * 在watch函数中也做相应的修改，最后直接获取选中项的其他属性
       */
      const map = {}
      this.selectedData.map(uid => {
        map[uid] = true
      })
      this.selectedMap = map
    },
    handleSelectionChange(val) {
      this.multipleSelection = val
    },
    async getList() {
      this.loading = true
      // 模拟异步请求
      const data = await new Promise((resolve) => {
        const result = []
        for (let i = 0; i < this.pagesize; i++) {
          result.push({
            uid: this.pagesize * (this.pageno - 1) + i,
            num: Math.random(),
            value: 1
          })
        }
        setTimeout(() => resolve(result), 1000)
      })
      this.loading = false
      this.tableData = data
      this.$nextTick(() => {
        // 在表格数据已经被渲染的时候再去回显选中项
        this.tableData.map(item => {
          if (this.selectedMap[item.uid]) {
            this.$refs.multipleTable.toggleRowSelection(item, true)
          }
        })
      })
    }
  }
}
</script>

<style></style>


