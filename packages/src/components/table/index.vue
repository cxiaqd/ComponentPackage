<template>
  <div style="height: 100%">
    <div class="header">top</div>
    <div class="content">
      <div class="left-content transition" :style="{ width: state.show_side ? '260px' : 0 }">
        <el-tree class="com-v2-tree tree-content" :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        <i
          class="com-v2-icon"
          :class="
            state.show_side
              ? 'com-v2-icon-side-collapse'
              : 'com-v2-icon-side-expand'
          "
          @click="state.show_side = !state.show_side"
        ></i>
      </div>
      <div class="right-content">
        <div class="right-top">right-top</div>
        <div class="right-filter com-v2-form">
          <el-form inline class="com-v2-form" :model="formInline">
            <div class="com-v2-control">
              <el-form-item label="审批人">
                <el-input v-model="formInline.user" placeholder="审批人"></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <el-select v-model="formInline.region" placeholder="活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="onSubmit">重置</el-button>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <div class="right-table com-v2-table com-v2-table-nowrap">
          <el-table
            :data="tableData"
            force-scroll="horizontal"
            highlight-current-row
            height="100%"
          >
            <el-table-column prop="date" :show-overflow-tooltip="true" label="日期" width="120" draggable="true"></el-table-column>
            <el-table-column prop="name" :show-overflow-tooltip="true" label="姓名" width="80"></el-table-column>
            <el-table-column prop="address" :show-overflow-tooltip="true" label="地址" min-width="210"></el-table-column>
            <el-table-column prop="things" :show-overflow-tooltip="true" label="事件" min-width="160"></el-table-column>
            <el-table-column prop="cause" :show-overflow-tooltip="true" label="原因" min-width="160"></el-table-column>
            <el-table-column prop="result" :show-overflow-tooltip="true" label="结果" min-width="160"></el-table-column>
            <el-table-column prop="callBack" :show-overflow-tooltip="true" label="反馈" min-width="160"></el-table-column>
            <el-table-column prop="process" :show-overflow-tooltip="true" label="处理进度" min-width="160"></el-table-column>
            <el-table-column prop="thingsCode" :show-overflow-tooltip="true" label="事件编号" min-width="160"></el-table-column>
            <el-table-column prop="peopleNumber" :show-overflow-tooltip="true" label="涉及人员数量" min-width="120">
              <template slot-scope="{row}">{{formatNumber(row.peopleNumber)}}</template>
            </el-table-column>
            <el-table-column prop="man" :show-overflow-tooltip="true" label="男生数量" min-width="120"></el-table-column>
            <el-table-column prop="woman" :show-overflow-tooltip="true" label="女生数量" min-width="120"></el-table-column>
            <el-table-column prop="averageHeight" :show-overflow-tooltip="true" label="平均身高（厘米）" min-width="135"></el-table-column>
            <el-table-column prop="averageWeight" :show-overflow-tooltip="true" label="平均体重（kg）" min-width="130"></el-table-column>
            <el-table-column prop="localePeople" :show-overflow-tooltip="true" label="本地人" min-width="120"></el-table-column>
            <el-table-column prop="foreigner" :show-overflow-tooltip="true" label="外来人" min-width="120">
              <template slot-scope="{row}">{{formatNumber(row.foreigner)}}</template>
            </el-table-column>
          </el-table>
        </div>
        <div class="right-bottom com-v2-pagination">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :page-sizes="[20, 50, 100]"
            :current-page="pagination.pageNo"
            :page-size="pagination.pageSize"
            :total="pagination.total"
            layout="total, sizes, ->, prev, pager, next, jumper"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mixin_table from "./table";
import fake_data from '../../../mock/fake-data'
export default {
  mixins: [mixin_table,fake_data],
  data() {
    return {
      state:{
        show_side:true
      }
    };
  },
  methods: {},
};
</script>
<style lang="less" scoped>
.header {
  height: 55px;
  border-bottom: 1px solid #7fffd4;
}
.content {
  display: flex;
  height: calc(100% - 56px);
}
.left-content {
  width: 260px;
  position: relative;
  border-right: 1px solid rgb(255, 26, 122);
}
.tree-content{
  position: absolute;
  left: 16px;
  top: 16px;
}
.right-content {
  flex: 1;
  z-index: 1;
  min-width: calc(100% - 260px);
  height: 100%;
  padding: 0 16px;
  .right-top {
    height: 160px;
    border-bottom: 1px solid rgb(255, 26, 122);
  }
  .right-filter {
    margin-top: 16px;
    height: 56px;
  }
  .right-table {
    height: calc(100% - 300px);
    overflow: hidden;
  }
  .right-bottom{
  }
}
</style>