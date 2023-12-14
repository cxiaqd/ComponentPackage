function timeSlot(step) {
  //  step = 间隔的分钟
  let date = new Date();
  date.setHours("00"); // 时分秒设置从零点开始
  date.setSeconds("00");
  date.setUTCMinutes("00");

  let arr = [],
    timeArr = [];
  let slotNum = (24 * 60) / step; // 算出多少个间隔
  for (let f = 0; f < slotNum; f++) {
    //  stepM * f = 24H*60M
    // arr.push(new Date(Number(date.getTime()) + Number(step*60*1000*f)))   //  标准时间数组
    let time = new Date(Number(date.getTime()) + Number(step * 60 * 1000 * f)); // 获取：零点的时间 + 每次递增的时间
    let hour = "",
      sec = "";
    time.getHours() < 10
      ? (hour = "0" + time.getHours())
      : (hour = time.getHours()); // 获取小时
    time.getMinutes() < 10
      ? (sec = "0" + time.getMinutes())
      : (sec = time.getMinutes()); // 获取分钟
    timeArr.push(hour + ":" + sec);
  }
  timeArr.push("23:59");
  timeArr = [...new Set(timeArr)];
  return timeArr;
}
