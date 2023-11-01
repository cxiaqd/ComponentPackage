<template>
  <div class="center-horizontally">
    <el-button type="primary">数据导出</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleDownload(url) {
      let hide = http.loading();

      axios({
        method: "get",
        url: url,
        params: {},
        responseType: "arraybuffer",
      })
        .then((response) => {
          if (response.data) {
            let blob = new Blob([response.data], {
              type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            });

            let url = window.URL.createObjectURL(blob);

            let ele = document.createElement("a");
            ele.style.display = "none";

            ele.href = url;
            ele.download = "文件名称***";

            document.querySelectorAll("body")[0].appendChild(ele);
            ele.click();

            ele.remove();
          }
        })
        .catch((e) => http.showError(e))
        .then(hide);
    },
  },
};
</script>

<style>
</style>