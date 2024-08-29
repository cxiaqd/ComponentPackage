// worker.js（worker线程）
self.addEventListener('message', e => { // 接收到消息
  console.log(e.data); // Greeting from Main.js，主线程发送的消息
  let sum = 0;
  let msg;
  setInterval(() => {
    sum += 1;
    msg={
      text:'editing',
      sum
    }
    self.postMessage(msg); // 向主线程发送消息
  }, 1000);
});

function delay(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
