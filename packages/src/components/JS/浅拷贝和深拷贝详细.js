// https://juejin.cn/post/6844904197595332622
// https://segmentfault.com/a/1190000020255831

const target = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
};
//   赋值和深/浅拷贝的区别
/**
 * 当我们把一个对象赋值给一个新的变量时，赋的其实是该对象的在栈中的地址，而不是堆中的数据。也就是两个对象指向的是同一个存储空间，无论哪个对象发生改变，其实都是改变的存储空间的内容，因此，两个对象是联动的。
 *
 * 浅拷贝：重新在堆中创建内存，拷贝前后对象的基本数据类型互不影响，但拷贝前后对象的引用类型因共享同一块内存，会相互影响。
 *
 * 深拷贝：从堆内存中开辟一个新的区域存放新对象，对对象中的子对象进行递归拷贝,拷贝前后的两个对象互不影响。
 */
// 对象赋值
let obj1 = {
  name: "浪里行舟",
  arr: [1, [2, 3], 4],
};
let copyObj1 = obj1;
copyObj1.name = "阿浪";
copyObj1.arr[1] = [5, 6, 7];
console.log("obj1", obj1); // obj1 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log("copyObj1", copyObj1); // obj2 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// 浅拷贝
let obj2 = {
  name: "浪里行舟",
  arr: [1, [2, 3], 4],
};
let copyObj2 = shallowClone(obj2);
copyObj2.name = "阿浪";
copyObj2.arr[1] = [5, 6, 7]; // 新旧对象还是共享同一块内存
// 这是个浅拷贝的方法
function shallowClone(source) {
  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}
console.log("obj2", obj2); // obj2 { name: '浪里行舟', arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log("copyObj2", copyObj2); // copyObj2 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }
// 深拷贝
let obj3 = {
  name: "浪里行舟",
  arr: [1, [2, 3], 4],
};
let copyObj3 = deepClone(obj3);
copyObj3.name = "阿浪";
copyObj3.arr[1] = [5, 6, 7]; // 新对象跟原对象不共享内存
// 这是个深拷贝的方法
function deepClone(obj) {
  if (obj === null) return obj;
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  if (typeof obj !== "object") return obj;
  let cloneObj = new obj.constructor();
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key]);
    }
  }
  return cloneObj;
}
console.log("obj3", obj3); // obj3 { name: '浪里行舟', arr: [ 1, [ 2, 3 ], 4 ] }
console.log("copyObj3", copyObj3); // copyObj3 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }

// 深拷贝
let shallowCopyRes = JSON.parse(JSON.stringify(target));

// 创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性依次添加到新对象上，返回。
function deepClone1(target) {
  let cloneTarget = {};
  for (const key in target) {
    cloneTarget[key] = target[key];
  }
  return cloneTarget;
}
let shallowCopyRes2 = deepClone1(target);
// console.log(shallowCopyRes2);

/**
 * 
 如果是深拷贝的话，考虑到我们要拷贝的对象是不知道有多少层深度的，我们可以用递归来解决问题，稍微改写上面的代码：
  1、如果是原始类型，无需继续拷贝，直接返回
  2、如果是引用类型，创建一个新的对象，遍历需要克隆的对象，将需要克隆对象的属性执行深拷贝后依次添加到新对象上。
 很容易理解，如果有更深层次的对象可以继续递归直到属性为原始类型，这样我们就完成了一个最简单的深拷贝：
 */
function deepClone2(target) {
  if (typeof target === "object") {
    let cloneTarget = {};
    for (const key in target) {
      cloneTarget[key] = deepClone2(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
/**
 * 在上面的版本中，我们的初始化结果只考虑了普通的object，下面我们只需要把初始化代码稍微一变，就可以兼容数组了：
 */
function deepClone3(target) {
  if (typeof target === "object") {
    let cloneTarget = Array.isArray(target) ? [] : {};
    for (const key in target) {
      cloneTarget[key] = deepClone3(target[key]);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
let newTarget = deepClone3(target);
// console.log(newTarget);

// 解决循环引用进入死循环导致的栈内存溢出问题
/**
 * 
 解决循环引用问题，我们可以额外开辟一个存储空间，来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题。

 这个存储空间，需要可以存储key-value形式的数据，且key可以是一个引用类型，我们可以选择Map这种数据结构：
  1、检查map中有无克隆过的对象
  2、有 - 直接返回
  3、没有 - 将当前对象作为key，克隆对象作为value进行存储
  4、继续克隆
 */
function deepClone4(target, map = new Map()) {
  if (typeof target === "object") {
    let cloneTarget = new target.constructor();
    // let cloneTarget = Array.isArray(target) ? [] : {};
    if (map.get(target)) {
      return map.get(target);
    }
    map.set(target, cloneTarget);
    for (const key in target) {
      cloneTarget[key] = deepClone4(target[key], map);
    }
    return cloneTarget;
  } else {
    return target;
  }
}
target.target = target; //循环引用自身
let newTarget4 = deepClone4(target);
console.log(newTarget4);

let testObj = {
    field1: '54654',
    field2:[1,2,3]
}
let testObj2 = [1,2.3]
let constructObj = new testObj.constructor()
let constructArr = new testObj2.constructor()
console.log({'constructObj':constructObj});
console.log({'constructArr':constructArr});
console.log(testObj.constructor);
console.log(testObj2.constructor);

// 接下来，我们可以使用，WeakMap提代Map来使代码达到画龙点睛的作用。
function clone(target, map = new WeakMap()) {
  // ...
}
/**
 * WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * 什么是弱引用
 * 在计算机程序设计中，弱引用与强引用相对，是指不能确保其引用的对象不会被垃圾回收器回收的引用。 一个对象若只被弱引用所引用，则被认为是不可访问
 * （或弱可访问）的，并因此可能在任何时刻被回收。
 */

/**
 * 我们默认创建一个对象：const obj = {}，就默认创建了一个强引用的对象，我们只有手动将obj = null，它才会被垃圾回收机制进行回收，如果是弱引用
 * 对象，垃圾回收机制会自动帮我们回收。
 */
// 举个列子
// 如果我们使用Map的话，那么对象间是存在强引用关系的：
let obj = { name: "ConardLi" };
const mapTarget = new Map();
mapTarget.set(obj, "code秘密花园");
obj = null;
// 虽然我们手动将obj，进行释放，然是target依然对obj存在强引用关系，所以这部分内存依然无法被释放。

// 再来看WeakMap：
let weakObj = { name: "ConardLi" };
const weakTarget = new WeakMap();
weakTarget.set(weakObj, "code秘密花园");
weakObj = null;
/**
 * 如果是WeakMap的话，target和obj存在的就是弱引用关系，当下一次垃圾回收机制执行时，这块内存就会被释放掉。
设想一下，如果我们要拷贝的对象非常庞大时，使用Map会对内存造成非常大的额外消耗，而且我们需要手动清除Map的属性才能释放这块内存，而WeakMap会帮我们巧妙化解这个问题。
我也经常在某些代码中看到有人使用WeakMap来解决循环引用问题，但是解释都是模棱两可的，当你不太了解WeakMap的真正作用时。我建议你也不要在面试中写这样的代码，结果只能是给自己挖坑，即使是准备面试，你写的每一行代码也都是需要经过深思熟虑并且非常明白的。
 */

/**
 * 性能优化
 * 用while循环代替for-in循环
 * iteratee是遍历的回掉函数，他可以接收每次遍历的value和index两个参数：
 */
function whileLoop(array, iteratee) {
  let index = -1;
  const length = array.length;
  while (++index < length) {
    iteratee(array[index], index);
  }
  return array;
}

function highPerformanceClone(target, map = new WeakMap()) {
  if (target === null) return target; // 如果是null或者undefined我就不进行拷贝操作
  if (target instanceof Date) return new Date(target);
  if (target instanceof RegExp) return new RegExp(target);
  if (typeof target !== "object") return target;
  if (map.get(target)) return map.get(target);

  const isArray = Array.isArray(target);
  let cloneTarget = isArray ? [] : {};
  map.set(target, cloneTarget);
  const keys = isArray ? undefined : Object.keys(target);
  whileLoop(keys || target, (value, key) => {
    if (keys) {
      key = value;
    }
    cloneTarget[key] = highPerformanceClone(target[key], map);
  });

  return cloneTarget;
}

const highTarget = {
  field1: 1,
  field2: undefined,
  field3: {
    child: "child",
  },
  field4: [2, 4, 8],
  f: {
    f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } },
  },
};
let highRes = highPerformanceClone(highTarget);
console.log(highRes);


