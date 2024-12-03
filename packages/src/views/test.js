function exponential(n) {
  let count = 0,
    base = 1;
  // 细胞每轮一分为二，形成数列 1, 2, 4, 8, ..., 2^(n-1)
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < base; j++) {
      count++;
    }
    base *= 2;
    console.log(base, count);
    // console.log(count);
  }
  // count = 1 + 2 + 4 + 8 + .. + 2^(n-1) = 2^n - 1
  return count;
}
// exponential(5)

const arr1 = ["apple", "banana", 1];
const arr2 = ["apple", 1, "banana"];

function fn(arr1, arr2) {
  // Arrary.some: 有一项不满足 返回false
  // Arrary.indexOf: 查到返回下标，查不到返回 -1
  if (arr1.length !== arr2.length) {
    return false;
  }
  return !arr1.some((item) => arr2.indexOf(item) === -1);
}

let result2 = fn(arr1, arr2); // true
// console.log(result2);

function insertionSort(nums) {
  // 外循环：已排序元素数量为 1, 2, ..., n
  for (let i = 1; i < nums.length; i++) {
    let base = nums[i],
      j = i - 1;
    // 内循环：将 base 插入到已排序部分的正确位置
    while (j >= 0 && nums[j] > base) {
      nums[j + 1] = nums[j]; // 将 nums[j] 向右移动一位
      j--;
    }
    nums[j + 1] = base; // 将 base 赋值到正确位置
  }
}
const arr = [4, 5, 3, 9, 2, 4, 1, 0];
insertionSort(arr);
//  console.log(arr);

// 双指针法
var removeDuplicates = function (nums) {
  if (!nums.length) return 0;
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[j] !== nums[i]) {
      i++;
      nums[i] = nums[j];
    }
  }
  console.log(nums.slice(0, i + 1));
  console.log(nums);
  return nums;
};
const dupArr = [0, 1, 1, 2, 2, 2, 3, 4, 4, 5, 5, 6, 8, 9, 9];
// removeDuplicates(dupArr)


const result3 = [[2, 4], [3, 6], [4, 8]].flat();
const result4 = [[2, 5], [3], [4]].flatMap((item) => [
  item, item * 2
]);
// console.log(result3);
// console.log(result4);
// console.log(dupArr.at(-3));
let [a, b, c] = [1, 2, dupArr];
console.log(c);


let aObj = { foo: 'aaa', bar: 'bbb' };
// let { foo: baz } = aObj;
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz);
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f);

let redColor = '#c0edc6';

const dateTest = new Date(...[2015, 2, 18]);
// console.log(dateTest);

let obja = { 'x': 1, 'y': 2, 'z': 3 };
let x = 10, y = 5;
let objb = { ...obja, x, y };
// console.log(objb);

let equalityObject = Object.is(NaN, NaN);
console.log(equalityObject);

const obj2 = { 0: 'a', 2: 'b', 7: 'c' };
const logObj2 = Object.values(obj2);
// console.log(logObj2);

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
// console.log(set);
// console.log(m1);

function getJSON(url) {
  return url;
};
const promises = [2, 3, 5, 7, 11, 13].map(function (id) {
  return getJSON('/post/' + id + ".json");
});
// console.log(promises);

var name1 = 'ConardLi';
var name2 = name1;
name2 = 'code秘密花园';
// console.log(name2); // ConardLi;

let obj1 = {};
function changeValue(obj1) {
  obj1.name = 'ConardLi';
  obj1 = { name: 'code秘密花园' };
}
changeValue(obj1);
// console.log(obj1);
// console.log(obj1.name); // ConardLi

const aValueof = {
  value: [3, 2, 1],
  valueOf: function () { return this.value.pop(); },
};
// console.log(aValueof == 1 && aValueof == 2 && aValueof ==3);

function detactDataType(data) {
  return Object.prototype.toString.call(data);
}
const arrayToString = [1, 2, 3];
// console.log(arrayToString.toString());
// console.log(Object.prototype.toString.call(arrayToString));
// console.log(detactDataType(arrayToString));


// try {
//   setTimeout(() => {
//     throw new Error('err')
//   }, 200);
// } catch (err) {
//   console.log(err);
// }

// new Promise((resolve, reject) => {
//   setTimeout(() => {
//     try {
//       throw new Error('err');
//     } catch (err) {
//       reject(err);
//     }
//   }, 200);
// })
//   .then(() => {
//     // 正常执行时的处理逻辑
//   })
//   .catch((err) => {
//     console.log(err); // 这里会捕捉到错误
//   });



// try {
//   Promise.resolve().then(() => {
//     throw new Error('err')
//   })
// } catch (err) {
//   console.log(err);
// }

// 方法一
Promise.resolve()
  .then(() => {
    throw new Error('err');
  })
  .catch((err) => {
    console.log(err); // 这里会捕捉到错误
  });

// 方法二
async function handleError() {
  try {
    await Promise.resolve().then(() => {
      throw new Error('err');
    });
  } catch (err) {
    console.log(err); // 这里会捕捉到错误
  }
}

// handleError();

const arr3 = [1, undefined, 4, null, 5];
// console.log(arr3.join(','));
let arr4 = arr3.map((elem, index, arr) => {
  return elem * index;
});
// console.log(arr4);
// console.log(arr3);

// 任意范围的随机整数生成函数如下
function getRandomInt(min, max) {
  let int = Math.floor(Math.random() * (max - min + 1)) + min;
  console.log(int);
  return int;
}

getRandomInt(1, 6); // 5

// 任意范围的随机数生成函数如下。
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

// getRandomArbitrary(1.5, 6.5)

// 返回随机字符的例子如下。
function random_str(length) {
  var ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  ALPHABET += 'abcdefghijklmnopqrstuvwxyz';
  ALPHABET += '0123456789-_';
  var str = '';
  for (var i = 0; i < length; ++i) {
    var rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

let randomRes = random_str(6); // "NdQKOr"
// console.log(randomRes);


let arr5 = [10, 2, 4, 15, 9];
let maxNum = Math.max.apply(null, arr5); // 15
arr5.map((item, index) => {
  if (item === 15) {
    arr5.splice(index, 1);
  }
});
console.log(arr5);
console.log(maxNum);


let testA = '12A';
let testD = testA.replace('A', 'D');
console.log(testD);


// 数组对象
const arr11 = [{ name: 'name1', id: 1 }, { name: 'name22', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr12 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
// 方法1：
const arr2Ids = arr11.map(item => item.id);
const arr2names = arr11.map(item => item.name);
arr12.forEach((item, index) => {
  if (arr2Ids.includes(item.id) && arr2names.includes(item.name)) {
    console.log(index);
  }
});
// console.log(arr2Ids);
// console.log(arr2names);


const resData = [
  {
    "bikeLabel": "1",
    "bikeCode": "1",
    "clueCount": 161,
  },
  {
    "bikeLabel": "1",
    "bikeCode": "2",
    "clueCount": 148,
  },
  {
    "bikeLabel": "1",
    "bikeCode": "3",
    "clueCount": 155,
  },
  {
    "bikeLabel": "1",
    "bikeCode": "4",
    "clueCount": 1,
  },
  {
    "bikeLabel": "2",
    "bikeCode": "1",
    "clueCount": 1,
  },
  {
    "bikeLabel": "2",
    "bikeCode": "2",
    "clueCount": 1,
  },
  {
    "bikeLabel": "2",
    "bikeCode": "3",
    "clueCount": 130,
  },
];
const codeArr = [
  {
    "bikeLabel": "1",
    "bikeCode": "3",
    "clueCount": 155,
  },
  {
    "bikeLabel": "2",
    "bikeCode": "2",
    "clueCount": 1,
  },
];


const labelArrs = codeArr.map(item => item.bikeLabel);
const codeArrs = codeArr.map(item => item.bikeCode);

// console.log(labelArrs);
// console.log(codeArrs);
resData.forEach((item, index) => {
  if (labelArrs.includes(item.bikeLabel) && codeArrs.includes(item.bikeCode)) {
    // console.log({'index':index});
  }
});

let inserctArr = [];
let arrminus = [];
let newresData = [];
codeArr.forEach((codeItem) => {
  resData.forEach((resItem, index) => {
    if (codeItem.bikeLabel === resItem.bikeLabel && codeItem.bikeCode === resItem.bikeCode) {
      console.log(index);
    }
  });
});
// console.log(newresData);

let arrNum = Array.from(new Array(10).keys()); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(arrNum);


function process(arr) {
  // 缓存用于记录
  const cache = [];
  for (const t of arr) {
    // 检查缓存中是否已经存在
    if (codeArr.find(c => c.bikeLabel === t.bikeLabel && c.bikeCode === t.bikeCode)) {
      // 已经存在说明以前记录过，现在这个就是多余的，直接忽略
      continue;
    } else {
      t.sameFlag = 'false';

      // 不存在就说明以前没遇到过，把它记录下来
      cache.push(t);
    }
  }

  // 记录结果就是过滤后的结果
  return cache;
}
let processData = process(resData);
// console.log(processData);
// console.log(resData);

function process2(arr) {
  // 需要一个字典，可以用 Set/WeakSet 或者就简单的 JS 对象
  const dict = {};

  // 过滤的过程中完善 dict
  return arr.filter(t => {
    // 根据 max 和 min 来生成唯一识别的关键字
    // 这里采用的办法是使用一个不会出现在两个数据中的字符 `|` 来连接
    const key = [t.bikeLabel, t.bikeCode].join("|");

    // 检查如果字典中已经存在，那这个数据就过滤掉，不需要了
    if (dict[key]) {
      return false;
    }

    // 如果字典不不存在，加入字典，同时把数据保留下来（返回 true）
    dict[key] = true;
    return true;
  });
}

// let processData2 = process2(resData)
// console.log(processData2);
// console.log(resData);


const object001 = {
  name: 'object',
  age: 23
};

const object002 = {
  sex: 'man',
  home: '浙江省'
};

// let mergeObject = merge(object001,object002)
// console.log(mergeObject);


// 异步过滤函数
async function asyncFilter(array, predicate) {
  const results = await Promise.all(array.map(predicate));

  return array.filter((_value, index) => results[index]);
}

// 示例
async function isOddNumber(n) {
  await delay(100); // 模拟异步操作
  return n % 2 !== 0;
}

async function filterOddNumbers(numbers) {
  return asyncFilter(numbers, isOddNumber);
}

// filterOddNumbers([1, 2, 3, 4, 5]).then(console.log); // 输出: [1, 3, 5]


// const arr123 = [{ "name1": "a" }, { "name2": "b" }, { "name3": "c" }];//定义
// localStorage.setItem("search", JSON.stringify(arr));
// const arr145 = JSON.parse(localStorage.getItem("search"));


const snapList = [
  {
    "id": 2000003,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c1",
    "cameraName": "区政府西南门出入口",
    "certificateNumber": "371521199305065859",
    "latitude": 30.21047,
    "longitude": 120.20609,
    "personId": null,
    "personName": "林琳",
    "snapTime": "2024-09-11 16:09:27",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_linlin_bkg_2.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_linlin_snap_2.jpg",
    "similarity": null
  },
  {
    "id": 2000004,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c1",
    "cameraName": "区政府西南门出入口",
    "certificateNumber": "360925199507076186",
    "latitude": 30.21047,
    "longitude": 120.20609,
    "personId": null,
    "personName": "石慧",
    "snapTime": "2024-09-11 15:35:49",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_shihui_bkg_1.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_shihui_snap_1.jpg",
    "similarity": null
  },
  {
    "id": 2000000,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c0",
    "cameraName": "区政府新月路东侧",
    "certificateNumber": "330102199508124510",
    "latitude": 30.21126,
    "longitude": 120.20866,
    "personId": null,
    "personName": "卢霄杰",
    "snapTime": "2024-09-11 15:27:35",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_luxiaojie_bkg_1.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_luxiaojie_snap_1.jpg",
    "similarity": null
  },
  {
    "id": 2000009,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c3",
    "cameraName": "区政府丹凤路南侧人脸",
    "certificateNumber": "140427199704020637",
    "latitude": 30.21248,
    "longitude": 120.20776,
    "personId": null,
    "personName": "鲍兰",
    "snapTime": "2024-09-11 15:21:54",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_baolan_bkg_2.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_baolan_snap_2.jpg",
    "similarity": null
  },
  {
    "id": 2000001,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c0",
    "cameraName": "区政府新月路东侧",
    "certificateNumber": "330102199508124510",
    "latitude": 30.21126,
    "longitude": 120.20866,
    "personId": null,
    "personName": "卢霄杰",
    "snapTime": "2024-09-11 15:13:34",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_luxiaojie_bkg_2.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_luxiaojie_snap_2.jpg",
    "similarity": null
  },
  {
    "id": 2000008,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c3",
    "cameraName": "区政府丹凤路南侧人脸",
    "certificateNumber": "140427199704020637",
    "latitude": 30.21248,
    "longitude": 120.20776,
    "personId": null,
    "personName": "鲍兰",
    "snapTime": "2024-09-11 15:09:15",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_baolan_bkg_1.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_baolan_snap_1.jpg",
    "similarity": null
  },
  {
    "id": 2000002,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c1",
    "cameraName": "区政府西南门出入口",
    "certificateNumber": "371521199305065859",
    "latitude": 30.21047,
    "longitude": 120.20609,
    "personId": null,
    "personName": "林琳",
    "snapTime": "2024-09-11 15:09:11",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_linlin_bkg_1.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_linlin_snap_1.jpg",
    "similarity": null
  },
  {
    "id": 2000007,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c2",
    "cameraName": "区政府泰安路人脸球机",
    "certificateNumber": "530824193708308329",
    "latitude": 30.21109,
    "longitude": 120.20551,
    "personId": null,
    "personName": "衡佳媛",
    "snapTime": "2024-09-11 15:07:10",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_hengjiayuan_bkg_2.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_hengjiayuan_snap_2.jpg",
    "similarity": null
  },
  {
    "id": 2000006,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c2",
    "cameraName": "区政府泰安路人脸球机",
    "certificateNumber": "530824193708308329",
    "latitude": 30.21109,
    "longitude": 120.20551,
    "personId": null,
    "personName": "衡佳媛",
    "snapTime": "2024-09-11 15:06:17",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_hengjiayuan_bkg_1.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_hengjiayuan_snap_1.jpg",
    "similarity": null
  },
  {
    "id": 2000005,
    "cameraIndexCode": "4b47a5ba6ce34283b16414352f66b1c2",
    "cameraName": "区政府泰安路人脸球机",
    "certificateNumber": "360925199507076186",
    "latitude": 30.21109,
    "longitude": 120.20551,
    "personId": null,
    "personName": "石慧",
    "snapTime": "2024-09-11 14:51:41",
    "bkgPicUrl": "/spctr-web/demoPic/3/3_shihui_bkg_2.jpg",
    "snapPicUrl": "/spctr-web/demoPic/3/3_shihui_snap_2.jpg",
    "similarity": null
  }
]

//先根据所有的title组合成一个数组
let titleList = snapList.map(item => {
  return item.cameraIndexCode
})
//用reduce时：
//reduce:计算数组元素相加后的总和
//reduce方法接受两个参数，第一个是函数，第二个是初始值
function getRepeatNum(){ 
  return titleList.reduce(function(prev,next){ 
      prev[next] = (prev[next] + 1) || 1; 
      return prev; 
  },{}); 
} 
let repeatKey = getRepeatNum()
// console.log(getRepeatNum())
let result = []
let mapArr = {}
snapList.forEach((item) => {
  if (!mapArr[item.cameraIndexCode]) {
    mapArr[item.cameraIndexCode] = true
    let obj = {
      ...item,
      num:repeatKey[item.cameraIndexCode]
    }
    result.push(obj)
  }
})
// console.log(result);
// let pointList = snapList.map((el) => {
//   return {
//     alarmType: '000',
//     resType: 'camera',
//     name: el.cameraName || '',
//     cameraIndexCode: el.cameraIndexCode || '',
//     num: repeatKey[el.cameraIndexCode], // 聚合数量(聚合点位、一杆多点)
//     longitude: Number(el.longitude),
//     latitude: Number(el.latitude),
//   }
// })

// console.log(pointList);

let lonTest = '120.202775'
let lonTest2 = '120.212412857978'
// console.log(lonTest.length);
// console.log(lonTest2.length);


let bbox = '120.19444860730285,30.184267911131684,120.19486843087239,30.184583933989124'
let bboxArr = bbox.split(',')
//  console.log(bboxArr);
//  console.log(bboxArr.toString());

let acbde = 1
let test = () => {
    console.log('acbde',this.acbde)
}
let obj0 = {
    acbde: 2,
    test: test()
}
obj0.test()