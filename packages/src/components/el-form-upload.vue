<template>
  <div class="center-horizontally">
    <el-form
      :inline="false"
      ref="form2"
      :rules="rules2"
      :model="form2"
      label-width="100px"
      style="padding: 30px 0; justify-content: center"
    >
      <el-form-item label="导入方式" prop="importType">
        <el-select v-model="form2.importType" placeholder="请选择导入方式">
          <el-option
            v-for="item in importTypeData"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="选取文件" prop="fileList">
        <el-upload
          class="upload-demo"
          drag
          ref="newupload"
          :action="action"
          accept=".xls,.xlsx"
          :on-change="onChange"
          :on-success="onSuccess"
          :file-list="form2.fileList"
          :auto-upload="false"
          :data="form2"
        >
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        </el-upload>
      </el-form-item>
      <el-form-item label="">
        <el-button type="primary" @click="importFilepost">导入</el-button>
        <el-button type="primary" @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form2: {
        importType: "increment",
        fileList: [],
      },
      importTypeData: [
        {
          value: 1,
          label: "导入方式1",
        },
        {
          value: 2,
          label: "导入方式2",
        },
      ],
      rules2: {
        fileList: [
          { required: true, message: "请选择文件", trigger: "change" },
        ],
      },
      action: "/investPlanCheck/importSHCQProject",
    };
  },
  methods: {
    //onChange这里我根据我的业务需求进行修改替换上一次的上传文件了
    onChange(file, fileList) {
      //文件状态改变时的钩子函数
      // this.form2.fileList = fileList;
      if (fileList.length > 0) {
        this.form2.fileList = [fileList[fileList.length - 1]]; // 这一步，是 展示最后一次选择的文件
      }
    },
    onSuccess(response, file, fileList) {
      //文件上传成功时的钩子
      if (response.state == 1) {
        this.$message.success("导入成功");
        this.dialogVisible2 = false;
      } else {
        this.$message.error("导入失败");
      }
      this.form2.fileList = [];
      this.$refs["form2"].resetFields();
      this.$refs["newupload"].clearFiles();
    },
    importFilepost() {
      //导入提交---
      this.$refs.form2.validate((valid) => {
        if (valid) {
          //触发组件的action
          this.$refs.newupload.submit(); //主要是这里
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    onCancel() {
      //取消
      this.$refs.form2.resetFields();
    },
  },
};
</script>
<style scoped>
</style>