<template>
  <div :class="['InfiniteScrollContainer']" :id="id" @scroll="handleScroll">
    <div class="InfiniteScroll" :style="{ height: listHeight + 'px' }">
      <div
        v-for="(item, index) in renderList"
        :key="index"
        class="infiniteItem"
        :style="`transform:translateY(${
          (startIndex + index) * defineHeight
        }px);z-index:${renderList.length - index}`"
      >
        <slot :item="item.data" :index="index"></slot>
      </div>
      <div v-if="showBottomTips" class="bottom-tips">已经到底了~</div>
    </div>
  </div>
</template>
<script>
import { nanoid } from 'nanoid';

function throttle(fun, interval) {
  let lastTimestap = 0; //初始时间
  return function (...args) {
    let currentTimestap = new Date(); //当前时间
    if (currentTimestap - lastTimestap > interval) {
      fun.apply(this, args);
      lastTimestap = currentTimestap;
    }
  };
}
export default {
  name: 'InfiniteScroll',
  props: {
    data: {
      type: Array,
      default: () => []
    },
    total: {
      type: Number,
      default: 0
    },
    defineHeight: {
      type: Number,
      default: 182
    },
    showBottomTips: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      testData: [],
      scrollHeight: 0,
      // renderList: [],
      listAll: [],
      scrollTop: 0,
      listData: [],
      clientHeight: 0,
      startIndex: 0,
      endIndex: 0
      // listHeight: 0,
      // defineHeight: 171
      // preRenderHeight: 300
    };
  },
  computed: {
    infiniteScrollStyle() {
      const top = this.renderList[0] ? this.renderList[0].infiniteScrollTop : 0;
      return { transform: 'translate(0,' + top + 'px)' };
    },
    listHeight() {
      let height = 0;
      const listNum = this.data.length || 0;
      height = listNum * this.defineHeight;
      return height;
    },
    preRenderHeight() {
      // 预渲染高度
      return this.defineHeight ? 4 * this.defineHeight : 300;
    },
    id() {
      return nanoid() + 'InfiniteScrollContainer';
    },
    renderList() {
      return this.data.slice(this.startIndex, this.endIndex);
    }
  },
  watch: {
    data: {
      handler(val) {
        this.getRenderList();
      },
      deep: true
      // immediate: true
    }
  },

  mounted() {
    this.getInfiniteScrollHeight();
    this.init();
  },
  methods: {
    getInfiniteScrollHeight() {
      const $container = document.getElementById(this.id);
      this.$container = $container;
      if ($container) {
        this.scrollHeight = $container.offsetHeight;
        this.clientHeight = $container.clientHeight;
      }
    },
    init() {
      const endIndex = Math.ceil(
        (this.scrollHeight + this.preRenderHeight) / this.defineHeight
      );
      this.endIndex = endIndex;
    },

    handleScroll: throttle(
      function () {
        this.scrollTops();
      },
      320,
    ),
    scrollTops() {
      const wrap = this.$container;

      const wrapScrollTop = wrap.scrollTop;

      if (Math.abs(wrapScrollTop - this.scrollTop) > this.defineHeight) {
        const wrapScrollHeight = this.listHeight;
        const percentY = wrapScrollTop / (wrapScrollHeight - this.clientHeight);

        this.$emit('scroll', { percentY: percentY });

        this.scrollTop = wrapScrollTop;

        this.getRenderList();
      }
    },
    getRenderList() {
      const start = Math.ceil(
        (this.scrollTop - this.preRenderHeight > 0
          ? this.scrollTop - this.preRenderHeight
          : 0) / this.defineHeight
      ); // 计算渲染的开始位置  滚动区域小于300不进行预渲染

      const count =
        start +
        Math.ceil(
          (this.scrollHeight + 2 * this.preRenderHeight) / this.defineHeight
        ); // 添加了上下偏移的格300像素作为预渲染
      if (start === this.startIndex && count === this.endIndex) return;

      window.requestAnimationFrame(() => {
        this.startIndex = start;
        this.endIndex = Math.min(count, this.data.length);
      });
    },
    
  }
};
</script>
<style lang="scss" scoped>
.InfiniteScrollContainer {
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  position: relative;
  padding-right: 9px;
  margin-right: 9px;
  .InfiniteScroll {
    transition: height 320ms linear;
  }
  .infiniteItem {
    position: absolute;
    left: 0;
    top: 0;
    width: calc(100% - 9px);
    // overflow: hidden;
    display: flex;
    justify-content: space-between;
    transition: translate 320ms linear;
  }
  .bottom-tips {
    text-align: center;
  }
}
</style>
