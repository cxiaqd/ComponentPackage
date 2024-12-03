<template>
  <div>
    <RecycleScroller
      class="scroller"
      :items="items"
      :item-size="300"
      :emitUpdate="true"
      @update="update"
      @resize="resize"
      @visible="visible"
      @hidden="hidden"
      @scroll="scroll"
      v-if="items.length"
    >
      <template slot-scope="props">
        <li>
          <div>{{ props.item.name }}</div>
        </li>
      </template>
    </RecycleScroller>
  </div>
</template>
<script>
export default {
  name: 'test',
  data () {
    return {
      items: []
    }
  },
  created () {
    this.getData()
  },
  mounted () {},
  methods: {
    getData () {
      let list = [...new Array(30)].map((item, index) => {
        return {
          id: this.generateRandomString(),
          name: index,
        };
      });
      this.items = this.items.concat(list)
    },
    scroll () {
      console.log(111)
      console.log(this.items.length);
      if (this.items.length < 1000) {
        this.getData()
      }
    },
    update (start, end) {
    },
    resize () {
      console.log('resize')
    },
    visible () {
      console.log('visible')
    },
    hidden () {
      console.log('hidden')
    },
    generateRandomString() {
      const possibleChars = "0123456789abcdef";
      let randomString = "";
      for (let i = 0; i < 8; i++) {
        randomString += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      }
      return randomString;
    }
  }
}
</script>
<style lang="css" scoped>
.scroller {
  height: 300px;
  background-color: #ccc;
}
 
.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
 