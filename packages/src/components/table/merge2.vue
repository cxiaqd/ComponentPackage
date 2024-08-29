<template>
  <div style="padding-top: 20px">
    <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
      <el-table-column v-for="column in columns" :key="column.prop" :prop="column.prop" :label="column.label"
        :width="column.width"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
    mergeTable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      spanArr: [],
    };
  },
  mounted() {
    this.getSpanArray(this.tableData, this.columns);
  },
  methods: {
    getSpanArray(data, columns) {
      const arr = columns.map((e) => e.prop);
      const nameObj = new Array(arr.length).fill(0);
      for (let i = 0; i < data.length; i++) {
        if (i === 0) {
          this.spanArr[0] = new Array(arr.length).fill(1);
          nameObj[0] = 0;
        } else {
          let newRow = [];
          let isEqual = true;
          for (let j = 0; j < arr.length; j++) {
            if (columns[j].isMerge === false) {
              isEqual = false;
              newRow.push(1);
              nameObj[j] = i;
            }
            if (data[i][arr[j]] === data[i - 1][arr[j]] && isEqual) {
              this.spanArr[nameObj[j]][j] += 1;
              newRow.push(0);
            } else {
              isEqual = false;
              newRow.push(1);
              nameObj[j] = i;
            }
          }
          this.spanArr.push(newRow);
        }
      }
    },
    objectSpanMethod({ rowIndex, columnIndex }) {
      if (this.mergeTable) {
        const _row = this.spanArr[rowIndex][columnIndex];
        const _col = _row > 0 ? 1 : 0;
        return { rowspan: _row, colspan: _col };
      } else {
        return { rowspan: 1, colspan: 1 };
      }
    },
  },
};
</script>
