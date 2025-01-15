// 计时器
let counter = 0

// 监听连接
self.addEventListener('connect', (e) => {
  const port = e.ports[0]
  port.onmessage = (res) => {
    console.log('共享线程接收到信息：', res.data)
    switch (res.data) {
      case 'counter++':
        counter++
        break
    }
    console.log('counter:', counter)
    port.postMessage(counter)
  }
})
