export function debounce(fn, wait, immediate = false) {
  let timer = null;

  return function () {
    // 存在定时器 清空
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
    // 立即执行
    if (immediate) {
      // 判断是否执行过  如果执行过 timer 不为空
      const flag = !timer;

      // 执行函数
      flag && fn.apply(this, arguments);

      // n 秒后清空定时器
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, wait);
    }
  };
}
