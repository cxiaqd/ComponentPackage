<template>
  <div class="element-main" style="display:flex">
    <el-table border style="flex: 1;" :data="getValues" :show-header="false" :cell-style="columnStyle">
      <el-table-column v-for="(item, index) in getHeaders" :key="index" width="100px" :prop="item"></el-table-column>
    </el-table>
    <el-table border style="flex: 1;" :data="getValues2" :show-header="false" :cell-style="columnStyle">
      <el-table-column v-for="(item, index) in getHeaders" :key="index" width="100px" :prop="item"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'vue',
  data () {
    return {
      detailPersionInfo: {
        "humanId": "7de59e225cac445a8a1f9e3f2b5c8100",
        "libId": 4,
        "libName": [
          "789"
        ],
        "certificateType": null,
        "certificateNumber": "141128198506064235",
        "name": "陈宏伟",
        "gender": null,
        "picUrl": "",
        "modelData": null,
        "faceScore": null,
        "caseNo": null,
        "groupName": null,
        "groupId": null,
        "duty": null,
        "originPlace": null,
        "phone": null,
        "registerPlace": null,
        "plateNo": null,
        "controlReason": null,
        "controlStatus": null,
        "policeName": null,
        "policeDept": null,
        "homePlace": null
      },
      headers: [
        {
          prop: 'name',
          label: '姓名',
        },
        {
          prop: 'gender',
          label: '性别',
        },
        {
          prop: 'phone',
          label: '手机号',
        },
        {
          prop: 'homePlace',
          label: '常住地',
        },
        {
          prop: 'address',
          label: '信访事由',
        },
        {
          prop: 'policeDept',
          label: '责任单位',
        },
      ],
      headers2: [
        {
          prop: 'certificateNumber',
          label: '身份证',
        },
        {
          prop: 'originPlace',
          label: '籍贯',
        },
        {
          prop: 'plateNo',
          label: '车牌号',
        },
        {
          prop: 'homePlace',
          label: '信访事项',
        },
        {
          prop: 'controlReason',
          label: '管控原因',
        },
        {
          prop: 'policeName',
          label: '责任民警',
        },
      ],
    };
  },
  components: {},
  computed: {
    getHeaders () {
      return [this.detailPersionInfo].reduce((pre, cur, index) => pre.concat(`value${index}`), ['title'])
    },
    getValues () {
      return this.headers.map(item => {
        return [this.detailPersionInfo].reduce((pre, cur, index) => Object.assign(pre, { ['value' + index]: cur[item.prop] }), { 'title': item.label, });
      });
    },
    getValues2 () {
      return this.headers2.map(item => {
        return [this.detailPersionInfo].reduce((pre, cur, index) => Object.assign(pre, { ['value' + index]: cur[item.prop] }), { 'title': item.label, });
      });
    },
  },
  watch: {},
  created () { },
  mounted () { },
  methods: {
    // 修改el-table中第一列的背景色
    columnStyle ({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return 'background:#f6f6f6'
      }
    },
  },
  beforeCreate () { },
  beforeMount () { },
  beforeUpdate () { },
  updated () { },
  beforeDestroy () { },
  destroyed () { },
  activated () { },
}
</script>
<style></style>