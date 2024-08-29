<!-- editEmail.vue（主线程） -->
<template>
    <div>编辑页面哦</div>
</template>

<script>
const myWorker = new Worker('/worker.js'); // 创建worker，函数里的值为 webWorker 文件名

 // 向 worker.js 线程发送消息，对应 worker.js 线程中的 e.data
myWorker.postMessage('Greeting from Main.js');

myWorker.addEventListener('message', e => { // 从 worker.js 那接收消息
    console.log(e.data); // Greeting from Worker.js，worker线程发送的消息
});

</script>
