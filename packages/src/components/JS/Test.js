
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

// 返回随机字符。
function random_str_test0(length) { //length返回的随机字符串的长度
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';
  let str = '';
  for (let i = 0; i < length; ++i) {
    let rand = Math.floor(Math.random() * ALPHABET.length);
    str += ALPHABET.substring(rand, rand + 1);
  }
  return str;
}

// 筛选出两个数组对象中相同的元素
function same_obj_test1() {
  // 数组对象
  const arr11 = [{ name: 'name1', id: 1 }, { name: 'name22', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
  const arr12 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
  // 方法1：
  const arr2Ids = arr11.map(item => item.id);
  const arr2names = arr11.map(item => item.name);
  let sameRes = []
  arr12.forEach((item, index) => {
    if (arr2Ids.includes(item.id) && arr2names.includes(item.name)) {
      sameRes.push(item)
    }
  });
  return sameRes
}

function same_obj_test2(arr) {
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

function same_obj_test3() {
  // 数组对象
  const arr11 = [{ name: 'name1', id: 1 }, { name: 'name22', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
  const arr12 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
  const newArr = arr11.concat(arr12)
  let newMap = new Map()
  let sameRes = []

  newArr.forEach((item) => {
    if (newMap.has(item.id)) {
    }else{
      sameRes.push(item);
      // newMap.set(item.id,item.name)
    }
  })
  console.log(newMap);

  return sameRes
}

// 统计数组对象中某一个属性重复出现的次数
//用reduce时：
//reduce:计算数组元素相加后的总和
//reduce方法接受两个参数，第一个是函数，第二个是初始值
function getRepeatNum_test3() {
  // 获取数组对象中所有对象里的某一个属性的值
  let titleList = snapList.map(item => {
    return item.cameraIndexCode
  })
  return titleList.reduce(function (prev, next) {
    prev[next] = (prev[next] + 1) || 1;
    return prev;
  }, {});
}

function maxNum_test3() {
  let arr5 = [10, 2, 4, 15, 9, 100];
  let maxNum = Math.max.apply(null, arr5); // 15
  arr5.map((item, index) => {
    if (item === maxNum) {
      arr5.splice(index, 1);
    }
  });
  return arr5
}

// const res0 = random_str_test0(6);
// const res1 = same_obj_test1();
// const res2 = same_obj_test2(resData);
// console.log(getRepeatNum_test3());
// console.log(maxNum_test3());
console.log(same_obj_test3());