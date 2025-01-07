// 解构赋值

let { toString: a } = 123
// console.log(a === Number.prototype.toString);

let str = "  a b c   "
// console.log(str);
// console.log(str.trim());

let str1 = 'abbc'.replaceAll(/(ab)(bc)/g, '$2$1')
let str2 = 'abbcde'.replaceAll(/(ab)(bc)/g, '$2$1')

// console.log(str1);
// console.log(str2);


const str3 = '12r3abec456789';
const regex = /(\d+)([a-z]+)(\d+)/g;

function replacer(match, p1, p2, p3, offset, string) {
  // console.log(match);
  // console.log(p1);
  // console.log(p2);
  // console.log(p3);
  // console.log(offset);
  // console.log(string);
  return [p1, p2, p3].join(' - ');
}

str3.replaceAll(regex, replacer)

let arr = new Array(3).fill({ name: "Mike" });
// console.log(arr);
arr[0].name = "Ben";
// console.log(arr);


function createArray(...elements) {
  let handler = {
    get(target, propKey, receiver) {
      let index = Number(propKey);
      if (index < 0) {
        propKey = String(target.length + index);
      }
      return Reflect.get(target, propKey, receiver);
    }
  };

  let target = [];
  target.push(...elements);
  return new Proxy(target, handler);
}

let proxyArr = createArray('a', 'b', 'c');
let proxyRes = proxyArr[-1] // c

// console.log(proxyRes);

function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms, 'done');
  });
}

// timeout(500).then((value) => {
//   console.log(value);
// });

function iteratorFn() {
  // 为对象添加iterator
  let obj = {
    data: ['hello', 'world'],
    [Symbol.iterator]() {
      const self = this;
      let index = 0;
      return {
        next() {
          if (index < self.data.length) {
            return {
              value: self.data[index++],
              done: false
            }
          }
          return { value: undefined, done: true };
        }
      }
    }
  }

  for (const item of obj) {
    console.log(item);
  }

}

function forofFn() {
  let arr = [3, 5, 7];
  arr.foo = 'hello';

  for (let i in arr) {
    console.log(i); // "0", "1", "2", "foo"
  }

  for (let i of arr) {
    console.log(i); //  "3", "5", "7"
  }
  for (let i of arr.entries()) {
    console.log(i); //  [0,3],[1,5],[2,7]
  }
}
// forofFn()

function asyncTimeout1(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
async function asyncTimeout2(ms) {
  await new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function asyncPrint(value, ms) {
  await asyncTimeout1(ms);
  await asyncTimeout2(ms);
  console.log(value);
  console.log('setimeout');
}

// asyncPrint('hello world', 50);

// 休眠语法实现
function sleep(interval) {
  return new Promise(resolve => {
    setTimeout(resolve, interval);
  })
}

// 用法
async function one2FiveInAsync() {
  for(let i = 1; i <= 5; i++) {
    console.log(i);
    await sleep(1000);
  }
}

// one2FiveInAsync();

class foo {
  bar = 'hello';
  baz = 'world';

  constructor() {
    this.x = 1000
  }
}
let fooRes1 = new foo()
fooRes1.bar = '123456'
fooRes1.x = 'safkjdhgkjga'
console.log(fooRes1);

let fooRes2 = new foo()
console.log(fooRes2);