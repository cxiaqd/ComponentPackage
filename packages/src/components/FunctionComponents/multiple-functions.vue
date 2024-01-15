<template>
    <div class="function-components flex-center">
        <div class="flex-center flex-column flex1 copy-function">
            <div>
                <textarea v-model="basicText" rows="3"></textarea>
                <button class="h-icon-copy hand font-20" @click="copy()">复制</button>
            </div>
            <div>
                <input ref="copyInput" style="color: #132132;" value="复制input中内容">
                <button type="button" @click="copyInput()">复制</button>
            </div>
            <div>
                <textarea ref="copyText" style="color: #132132;"></textarea>
                <button type="button" @click="copyText()">复制</button>
            </div>
        </div>
        <div class="flex-center flex-column flex1 upload-function">
            <el-form
                :inline="false"
                ref="form2"
                :rules="rules2"
                :model="form2"
                label-width="100px"
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
        <div class="flex-center flex1 download-function">
            <el-button type="primary">数据导出</el-button>
        </div>
        <div class="flex1"></div>
    </div>
</template>
<script>
export default {
  name: "functionComponents",
  data: function () {
    return {
      basicText: "动态添加html元素",
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
    copyText() {
      this.$refs.copyText.select(); // 选择对象
      document.execCommand("Copy"); // 执行浏览器复制命令
    },
    copyInput() {
      this.$refs.copyInput.select();
      document.execCommand("Copy");
    },
    copy() {
      let textarea = document.createElement("textarea");
      document.body.appendChild(textarea);
      textarea.value = this.basicText;
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
    },

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
.function-components {
  padding: 16px;
}

.copy-function,
.upload-function,
.download-function {
  border: 1px solid #dcdfe6;
}
</style>