<template>
  <div style="padding-top: 20px">
    <el-table :data="tableData" :span-method="objectSpanMethod" style="width: 100%">
      <el-table-column 
        v-for="column in columns" 
        :key="column.prop" 
        :prop="column.prop" 
        :label="column.label"
        :width="column.width">
      </el-table-column>
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
      // 每次进入方法都先将spanArr数组清空，防止数据多次往数组内推入，导致数据叠加在一起
      this.spanArr = []
      // 1.首先将每一列的字段名都提取出来（便于接下来进行判断）
      const arr = columns.map((e) => e.prop);
      // 2.创建数组nameObj，此数组用来保存正在循环的行数
      const nameObj = new Array(arr.length).fill(0);
      for (let i = 0; i < data.length; i++) {
        //3.遍历循环表格数组，判断如果是表格的第一行，那么就进行保底操作根据arr的长度生成对应的个数，并将每个数值做成1(保底操作,因为只要表格有数据，那么第一行肯定至少占单元格1，因此保底)
        if (i === 0) {
          this.spanArr[0] = new Array(arr.length).fill(1);
          // 记录当前循环的行
          nameObj[0] = 0;
        } else {
          //4.创建newRow数组，此数组即每行单元格占的个数，即spanArr二维数组的每一项数组
          let newRow = [];
          // 5.创建isEqual变量作为开关
          let isEqual = true;
          // 6.遍历上面创建的字段数组arr，因为判断是需要与当前项的上一项判断内容是否相等才会进行合并，所以在上一步加了个开关，默认一直为true的状态，一旦当前项的上一项判断内容不同直接把开关关闭，相当于结束了循环里的操作
          for (let j = 0; j < arr.length; j++) {
            if (data[i][arr[j]] === data[i - 1][arr[j]] && isEqual) {
              this.spanArr[nameObj[j]][j] += 1;
              newRow.push(0);
            } else {
              // 一旦当前项的上一项判断内容不同直接把开关关闭，相当于结束了循环里的操作
              isEqual = false;
              newRow.push(1);
              nameObj[j] = i;
            }
          }
          // 7.最后spanArr数组把处理好的newRow数组存起来即可
          this.spanArr.push(newRow);
        }
      }
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      // 此处是给每一项进行了合并操作
      const _row = this.spanArr[rowIndex][columnIndex];
      const _col = _row > 0 ? 1 : 0;
      return { rowspan: _row, colspan: _col };
    },
  },
};
</script>

