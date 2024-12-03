<template>
  <div class="demo-infinit-scroll">
    <section class="demo-header">
      <h3>使用场景</h3>
      <span>
        当页面需要进行滚动加载，且数据量很大，达到数千甚至上万条，若前端渲染加载的全部数据，会导致随着滚动加载，页面越来越卡顿；为解决这一问题，前端仅渲染可视窗口中的数据，可减少浏览器的渲染压力
      </span>
    </section>
    <section class="demo-total">
      共<span>{{ total }}</span>条数据
    </section>
    <section class="demo-content" ref="demoContent">
      <InfiniteScroll
        :data="infiniteData"
        :define-height="defineHeight"
        @scroll="handleScroll"
      >
        <template slot-scope="{ item }">
          <div v-for="fileItem in item" :key="fileItem.id" class="demo-item">
            {{ fileItem.fileName }}
          </div>
          <div
            v-for="holderItem in imgPlaceholder(item)"
            :key="holderItem.id"
            class="demo-holder"
            :style="`width:${itemWidth}px`"
          ></div>
        </template>
      </InfiniteScroll>
    </section>
  </div>
</template>
<script>
import InfiniteScroll from './index.vue';
export default {
  components: {
    InfiniteScroll,
  },
  data() {
    return {
      list: [],
      total: 10000,
      // maxColumn:8,
      itemHeight: 125,
      itemWidth: 125,
      itemMarginBottom: 10,
      contentWrapSize: {
        width: 1660,
        height: 735,
      },
      scrollFlag: false,
    };
  },
  computed: {
    defineHeight() {
      return this.itemHeight + this.itemMarginBottom;
    },
    maxColumn() {
      return 1;
    },
    infiniteData() {
      const columnList = [];
      let temp = [];
      const total = this.list ? this.list.length : 0;
      if (total < this.maxColumn) {
        columnList.push({ data: this.list });
      } else {
        this.list.forEach((item, index) => {
          if ((index + 1) % this.maxColumn === 0) {
            temp.push(item);
            columnList.push({ data: temp });
            temp = [];
          } else if (index + 1 === total) {
            temp.push(item);
            columnList.push({ data: temp });
          } else {
            temp.push(item);
          }
        });
      }
      return columnList;
    },
  },
  mounted() {
    this.onResize();
    this.mockList();
    // if (this.$refs.demoContent) {
    //   on(this.$refs.demoContent, "resize", this.onResize);
    // }
  },
  methods: {
    mockList() {
      this.list = [...new Array(300)].map((item, index) => {
        return {
          id: generateRandomString(),
          fileName: index,
        };
      });
    },
    onResize() {
      this.$nextTick(() => {
        const $demoContent = this.$refs.demoContent;
        if ($demoContent) {
          this.contentWrapSize.width = $demoContent.offsetWidth;
          this.contentWrapSize.height = $demoContent.offsetHeight;
        }
      });
    },
    imgPlaceholder(imgCard) {
      const holderNum = this.maxColumn - imgCard.length || 0;
      if (holderNum > 0) {
        return [...new Array(holderNum)].map((i, index) => {
          return { id: "holder_" + index };
        });
      }
      return [];
    },
    handleScroll(scrollParam) {
      if (this.scrollFlag) return;
      const { percentY } = scrollParam;
      const listNum = this.list.length;
      if (percentY > 0.8 && listNum < this.total) {
        this.scrollFlag = true;
        // 翻页请求
        const pageSize=this.total-listNum>300?300:this.total-listNum
        const data = [...new Array(pageSize)].map((item, index) => {
          return {
            id: generateRandomString(),
            fileName: index + listNum,
          };
        });
        data.forEach((item) => {
          const index = this.list.findIndex((listItem) => {
            return listItem.fileName === item.fileName;
          });
          if (index === -1) {
            this.list.push(item);
          }
        });
        this.scrollFlag = false;
      }
    },
  },
};

function generateRandomString() {
  const possibleChars = "0123456789abcdef";
  let randomString = "";
  for (let i = 0; i < 8; i++) {
    randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
  }
  return randomString;
}
</script>
<style lang="less">
.demo-infinit-scroll {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .demo-header {
    padding: 0 16px;
    height: 122px;
  }
  .demo-content {
    width: 100%;
    flex: 1;
    min-height: 0;
  }
  .demo-total {
    padding: 0 16px;
    margin-bottom: 12px;
    > span {
      color: #2080f7;
    }
  }
  .demo-item {
    width: 125px;
    height: 125px;
    line-height: 123px;
    text-align: center;
    font-size: 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}
</style>