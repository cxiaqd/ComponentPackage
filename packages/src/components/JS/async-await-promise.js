// https://juejin.cn/post/6844903621360943118

// 5-test start...
// 1-testSomething
// 7-promise START...
// 9-===END===
// 2-return testSomething
// 3-testAsync
// 8-promise RESOLVE
// 4-hello async
// 6-test end...
function testSometing() {
  console.log("1-testSomething");
  return "2-return testSomething";
}

async function testAsync() {
  console.log("3-testAsync");
  return Promise.resolve("4-hello async");
}

async function test() {
  console.log("5-test start...");

  const testFn1 = await testSometing();
  console.log(testFn1);

  const testFn2 = await testAsync();
  console.log(testFn2);

  console.log("6-test end...");
}

test();

var promiseFn = new Promise((resolve) => {
  console.log("7-promise START...");
  resolve("8-promise RESOLVE");
});
promiseFn.then((val) => console.log(val));

console.log("9-===END===");

/**
 * 我们一步步来解析:
    首先test()打印出test start...
    然后 testFn1 = await testSomething(); 的时候，会先执行testSometing()这个函数打印出“testSometing”的字符串。
    testAsync()执行完毕返回resolve，之后await会让出线程就会去执行后面的，触发promiseFn打印出“promise START...”。
    接下来会把返回的Promiseresolve("promise RESOLVE")放入Promise队列（Promise的Job Queue），继续执行打印“===END===”。
    等本轮事件循环执行结束后，又会跳回到async函数中（test()函数），等待之前await 后面表达式的返回值，因为testSometing() 不是async函数，所以返回的是一个字符串“return``testSometing”。
    test()函数继续执行，执行到testFn2()，再次跳出test()函数，打印出“testAsync”，此时事件循环就到了Promise的队列，执行promiseFn.then((val)=> console.log(val));打印出“promise RESOLVE”。
    之后和前面一样 又跳回到test函数继续执行console.log(testFn2)的返回值，打印出“hello async”。
    最后打印“test end...”。
 */
