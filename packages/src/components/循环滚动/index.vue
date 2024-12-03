<template>
  <div class="item-wrap" v-for="(item, index) in animationData">
        <!-- 模块内容 -->     
   </div>
</template>
<script setup lang="ts">
// #假设这是接口请求的10条最新数据
const allCarouseData = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// #需要轮播的数据
const animationData = ref<any>([])
// *定时器
const animationTimerMeta: any = {
  timer: null,
  // 这个函数负责设置轮播数据的更新逻辑。
  timeFuc() {
      let setTimeoutId: any = null
      if (this.timer) return
      this.timer = setInterval(() => {
          // 取轮播数据的第一条id
          let firstId = animationData.value[0].id
          // 为轮播数据添加最新的第一项数据 
          let index = allCarouseData.value.findIndex((res: any) => res.id === firstId)
          let addIndex = index - 1 < 0 ? allCarouseData.value.length - 1 : index - 1
          animationData.value.unshift(allCarouseData.value[addIndex])
          setTimeout(() => {
              // 删除数组的最后一项
              animationData.value.pop()
          }, 1000)
          
      }, 1500)
  }
}
animationData.value = allCarouseData.value.slice(-5)
animationTimerMeta.timeFuc()
</script>

