
// 常见的图片 文件头标志：
// JPEG (jpg)，文件头：FFD8FF 
// PNG (png)，文件头：89504E47 
// GIF (gif)，文件头：47494638 
// TIFF (tif)，文件头：49492A00 
// Bitmap (bmp)，文件头：424D

// 对上传文件的文件头进行验证是否为要求的文件格式
const fileValidate = {
  // 读取文件的二进制数据并将其转换为十六进制
  fileReader (blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsBinaryString(blob);
      reader.onload = (ret) => {
        const res = reader.result.split('').map((o) => o.charCodeAt().toString(16).padStart(2, '0'));
        resolve(res.join(' ').toUpperCase());
      };
      reader.onerror = (err) => {
        reject(err);
      };
    });
  },

  // png格式
  async isPng (file) {
    const ret = await this.fileReader(file.slice(0, 8))
    console.log({ 'isPng': ret });
    return ret == "89 50 4E 47 0D 0A 1A 0A";
  },

  // jpg格式
  async isJpg (file) {
    const start = await this.fileReader(file.slice(0, 2));
    const end = this.fileReader(file.slice(-2, file.size));
    console.log({ 'isJpgstart': start });
    console.log({ 'isJpgend': end });
    return "FF D8" == start;
  },

  // gif格式
  async isGif (file) {
    const ret = await this.fileReader(file.slice(0, 6));
    console.log(ret);
    return "47 49 46 38 39 61" == ret || "47 49 46 38 37 61" == ret;
  },

  // bmp格式
  async isBmp (file) {
    const ret = await this.fileReader(file.slice(0, 2))
    return ret == "42 4D";
  },

  async upFile (file) {
    // const [file] = event.target.files || event.dataTransfer.files || this.file.files;

    console.dir(file); // 文件对象

    let isValidate = await this.isJpg(file) || await this.isPng(file) || false
    console.log({'upFile':isValidate});
    return isValidate
  }
}
export default fileValidate;