export default {
  data() {
    return {
      pagination: {
        total: 10,
        pageNo: 1,
        pageSize: 20,
      },
      formInline: {
        user: '',
        region: ''
      }
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
        console.log('submit!');
      }
  },
};
