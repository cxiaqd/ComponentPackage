<template>
  <div>
    <template v-for="(d, i) of tableData">
      <p>index: {{ i }}</p>
      <template v-for="(k, v) in d">
        <div>
          <p>{{ v }}: {{ k }}</p>
        </div>
      </template>
    </template>
    <button @click="click">将 {{ oldKey }} 替换为 {{ newKey }}</button>
  </div>
</template>
  
<script>
function replaceObjKeyWithOrder(obj, kOld, kNew) {
  const entries = Object.entries(obj);
  let entry = entries.find(([k]) => k === kOld);
  entry && (entry[0] = kNew);
  entry && (entry[1] = entry[1].replace(kOld,kNew));
  return Object.fromEntries(entries);
}

export default {
  name: "App",
  components: {},
  data() {
    return {
      tableData: [
        {
          A: "12A",
          B: "12B",
        },
        {
          A: "13A",
          B: "13B",
        },
      ],
      oldKey: "A",
      newKey: "D",
    };
  },
  methods: {
    click() {
      this.tableData = this.tableData.map((d) =>
        replaceObjKeyWithOrder(d, this.oldKey, this.newKey)
      );
      [this.oldKey, this.newKey] = [this.newKey, this.oldKey];
    },
  },
};
</script>
  
<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>