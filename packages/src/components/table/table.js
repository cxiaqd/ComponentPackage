
export default {
  data() {
    return {
      pagination: {
        total: 10,
        pageNo: 1,
        pageSize: 20,
      },
      filter: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    onSubmit() {
      console.log("submit!");
    },
    resetFilter(formName) {
      this.$refs[formName].resetFields();
    },
    exportTable() {
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
