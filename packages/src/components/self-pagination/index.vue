<template>
  <div class="paging clearfix">
    <div class="page-size" v-if="isShowTotal">
      <div style="padding: 0 6px">共{{ total }}条</div>
      <el-select style="width:110px" v-model="currSize" @change="changePageSize">
        <el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <ul class="page-list clearfix">
      <el-button icon="h-icon-angle_left_sm" :disabled="currentPage == 1" @click="changePage(currentPage - 1)"></el-button>
      <li :class="{ 'active': currentPage == item.val }" 
        v-for="(item,index) in pagelist"
        :key="index"
        v-text="item.text"
        @click="changePage(item.val)">
      </li>
      <el-button icon="h-icon-angle_right_sm" :disabled="totalPage  <= currentPage" @click="changePage(currentPage + 1)"></el-button>
    </ul>
    <div class="page-jump" v-if="isShowJumper">
      前往<input class="input" type="text" v-model="toPage" @keydown="submit(toPage, $event)">页
      <!-- <button  @click="changePage(toPage)">确定</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Paging',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 10
    },
    currentPage: {
      type: Number,
      default: 1
    },
    layout: {
      type: String
    },
  },
  watch:{
    pageSize:{
      handler(newVal,oldVal){
        if (newVal !== oldVal) {
          this.currSize = newVal
        }
      }
    }
  },
  data() {
    return {
      isShowJumper: false,
      isShowTotal: false,
      toPage: '',//跳转到x页
      pageGroup: 8,//可见分页数量 默认10个分页数
      currSize: 10,
      sizeOptions: [
        { label: '10条/页', value: 10 },
        { label: '20条/页', value: 20 },
        { label: '30条/页', value: 30 },
        { label: '50条/页', value: 50 },
        { label: '100条/页', value: 100 },
      ],
    }
  },
  created () {
    this.isShowTotal = this.layout.indexOf('total') !== -1;
    this.isShowJumper = this.layout.indexOf('jumper') !== -1;
    this.currSize = this.pageSize;
  },
  computed: {
    totalPage: function () {
      return Math.ceil(this.total / this.pageSize)
    },
    pagelist: function () {
      var list = [];
      var count = Math.floor(this.pageGroup / 2), center = this.currentPage;
      var left = 1, right = this.totalPage;

      if (this.totalPage > this.pageGroup) {
        if (this.currentPage > count + 1) {
          if (this.currentPage < this.totalPage - count) {
            left = this.currentPage - count;
            right = this.currentPage + count - 1;
          } else {
            left = this.totalPage - this.pageGroup + 1;
          }
        } else {
          right = this.pageGroup;
        }
      }

      // 遍历添加到数组里
      while (left <= right) {
        list.push({
          text: left,
          val: left
        });
        left++;
      }
      return list;
    }
  },
  methods: {
    // 回车事件
    submit(toPage, e) {
      if (e.keyCode === 13) {
        this.changePage(toPage);
      }
    },
    changePage: function (idx) {
      if (idx != this.currentPage && idx > 0 && idx <= this.totalPage) {
        // 触发父组件事件  pageChange会转换成小写pagechange
        this.$emit('change', Number(idx) );
      }
    },
    changePageSize(size){
      console.log(size);
      this.$emit('changeSize', size);
    }
  }
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  font-size: 14px;
}
.paging{
  width: 100%;
}
.page-list{
  margin-left: auto;
}
.clearfix {
  display: flex;
}

.page-size {
  display: flex;
  height: 32px;
  line-height: 32px;
}

.page-jump {
  height: 26px;
  line-height: 26px;
  margin-left: 20px;
}

.page-jump .input {
  width: 32px;
  padding: 4px 2px;
  border-radius: 2px;
  border: 1px solid #dcdfe6;
  margin: 0 4px;
}

ul {
  list-style: none;
}

ul li {
  line-height: 32px;
  color: #606266;
  padding: 0 8px;
  cursor: pointer;
  border-radius: 2px;
  margin: 0 5px;
}

ul>li.active {
  color: #409eff;
}
</style>
