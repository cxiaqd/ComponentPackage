export default {
  data() {
    return {
      pagination: {
        total: 10,
        pageNo: 1,
        pageSize: 20,
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
  },
};
