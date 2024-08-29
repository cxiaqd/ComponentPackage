<template>
  <div id="only">
    <el-button @click="handQueue(reqsArr)">并发测试</el-button>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'vue',
  data() {
    return {
      reqsArr:[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9]
    };
  },
  components: {},
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
     
    handQueue(reqs) {
      reqs = reqs || []


      const requestQueue = (concurrency) => {
        concurrency = concurrency || 6 // 最大并发数
        const queue = [] // 请求池
        let current = 0

        const dequeue = () => {
          while (current < concurrency && queue.length) {
            current++;
            const requestPromiseFactory = queue.shift() // 出列
            requestPromiseFactory()
              .then(() => { // 成功的请求逻辑
              })
              .catch(error => { // 失败
                console.log(error)
              })
              .finally(() => {
                current--
                dequeue()
              });
          }

        }

        return (requestPromiseFactory) => {
          queue.push(requestPromiseFactory) // 入队
          dequeue()
        }

      }

      const enqueue = requestQueue(6)

      for (let i = 0; i < reqs.length; i++) {

        enqueue(() => axios.get('/api/test' + i))
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