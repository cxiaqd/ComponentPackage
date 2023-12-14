/**
 *  防抖：一段时间内，多次执行变为只执行最后一次；是一种延迟策略，即一段连续的触发事件结束后，等待一段时间再去执行。
    详细定义：一段时间内多次触发相同事件时，只执行最后一次触发的事件。这意味着，在一系列触发事件中，如果在指定的时间间隔内，发生了新的触发事件，那么前面的触发事件将被忽略，只有最后一次触发事件会被执行。

    应用场景：
    1、搜索框输入：当用户在搜索框中输入内容时，可以使用防抖来延迟触发搜索请求。只有在用户停止输入一段时间后才会发送请求，避免频繁的请求发送。
    2、窗口调整：当窗口大小调整时，可以使用防抖来优化执行某些操作的频率，例如重新计算布局或重新渲染页面。
    3、按钮点击：当用户点击一个按钮时，可以使用防抖来确保只有在用户停止点击一段时间后才会执行相应的操作，避免误操作或重复执行
    4、表单输入验证：在表单输入过程中，每次用户输入都可能触发验证操作。使用防抖函数可以延迟触发验证操作，只在用户输入完毕一段时间后进行验证，避免频繁的验证操作

    实现流程：
    1、定义一个计时器变量，默认为null。
    2、当事件触发时，清除之前的计时器。
    3、创建一个新的计时器，延迟执行目标函数。
    4、在在此时间内，如果再次触了事件，则重复步骤2和3。
    5、在延迟时间内没有再次触发事件时，执行目标函数
 */
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

/**
 * 
 * 节流：一段时间内，固定间隔触发事件。是一种控制函数执行频率的策略，一段时间内只执行一次。
 * 详细定义：在一段时间内多次触发相同事件时，只执行一次事件。这意味着，无论触发事件发生多少次，在指定的时间间隔内只会执行第一次事件。

 * 应用场景：
  1、页面滚动：当用户滚动页面时，可以使用节流来限制触发滚动事件的频率。例如，在滚动过程中只执行某些操作的固定时间间隔，以减少事件处理的次数。
  2、鼠标移动：当用户移动鼠标时，可以使用节流来控制触发鼠标移动事件的频率。例如，在一定时间内只执行一次鼠标移动的处理逻辑，避免过多的计算和渲染操作。
  3、实时通信：在实时通信应用中，如聊天应用或在线协作工具，可以使用节流来限制发送消息的频率，以避免发送过多的请求或数据。
  4、拖拽场景: 在某些场景下，频繁触发位置变动会造成性能问题，固定时间内只执行一次，防止超高频次触发位置变动

 * 实现流程：
  1、定义一个变量用于保存上一次执行函数的时间。
  2、在执行函数前获取当前的时间戳。
  3、判断当前时间与上一次执行时间是否大于设定的间隔时间，如果大于，则执行相应的回调函数，并更新上一次执行时间。
  4、如果小于设定的间隔时间，则等待下一次执行

  应用场景：

 */
export function throttle(fun, interval) {
  let lastTimestap = 0; //初始时间
  return function (...args) {
    let currentTimestap = new Date(); //当前时间
    if (currentTimestap - lastTimestap > interval) {
      fun.apply(this, args);
      lastTimestap = currentTimestap;
    }
  };
}

// 定时器版本
export function throttle2(fn, interval) {
  let lock = false;
  return function (...args) {
    if (!lock) {
      lock = true;
      setTimeout(() => {
        lock = false;
        fn.apply(this, args);
      }, interval);
    }
  };
}
// 配置延迟执行
export function throttle3(fn, interval, options = { trailing: true }) {
  let lastTimestap = 0,
    timer = null;
  return function (...args) {
    let currentTimestap = new Date();
    // 清空上一轮的计时器
    clearTimeout(timer);
    if (currentTimestap - lastTimestap >= interval) {
      fn.apply(this, args);
      lastTimestap = currentTimestap;
    } else if (options.trailing) {
      // 使用计时器把最近的回调延时触发
      const remaining = interval - (currentTimestap - lastTimestap);
      timer = setTimeout(() => {
        fn.apply(this, args);
        lastTimestap = new Date();
      }, remaining);
    }
  };
}

// 添加配置立即执行
export function throttle4(
  fn,
  interval,
  options = { leading: false, trailing: true }
) {
  let lastTimestap = 0,
    timer = null;
  return function (...args) {
    let currentTimestap = new Date();
    clearTimeout(timer);
    // 让lastTimestap初始值变为currentTimestap进入定时器逻辑
    if (!options.leading && !lastTimestap) lastTimestap = currentTimestap;
    // options.leading处理leading和trailing同时为false的情况
    if (options.leading && currentTimestap - lastTimestap >= interval) {
      fn.apply(this, args);
      lastTimestap = currentTimestap;
    } else if (options.trailing) {
      const remaining = interval - (currentTimestap - lastTimestap);
      timer = setTimeout(() => {
        fn.apply(this, args);
        // 定时器结束后重置lastTimestap为0
        lastTimestap = options.leading ? new Date() : 0;
      }, remaining);
    }
  };
}
