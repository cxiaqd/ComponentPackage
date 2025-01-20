// 1. 根据集合具有唯一性，若是add元素后size还没有变化说明此元素是重复的 2. 去重

const array = [7, 7, 2, 3, 8, 8, 5, 5, 6, 6];
function useSet(Arr) {
  let result = [];
  let len = Arr.length;
  let set = new Set();
  for (let i = 0; i < len; i++) {
    let sizeLen = set.size;
    set.add(Arr[i]);
    // 集合具有唯一性
    if (sizeLen === set.size) {
      // 说明此元素Arr[i]是重复的
      result.push(Arr[i]);
    }
  }
  return Array.from(new Set(result));
}
useSet(array);

// Array.prototype.indexOf(searchElement,fromIndex) searchElement要查找的元素。
// fromIndex 可选 开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回 -1。
// 如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即 -1 表示从最后一个元素开始查找，-2 表示从倒数第二个元素开始查找，以此类推。
// 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于 0，则整个数组都将会被查询。其默认值为 0。
// 返回值 首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1。
function useIndexOf(Arr) {
  let result = [];
  let len = Arr.length;
  for (let i = 0; i < len; i++) {
    let currentEl = Arr[i];
    if (Arr.indexOf(currentEl, i + 1) != -1) {
      // 说明重复
      result.push(currentEl);
    }
  }

  return Array.from(new Set(result));
}
useIndexOf(array);

// 数组去重 
const uniqueArray1 = array.filter((value, index, self) => {
  // indexOf() 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。
  return self.indexOf(value) === index;
});

const uniqueArray2 = array.reduce((accumulator, current) => {
  if (!accumulator.includes(current)) {
    accumulator.push(current);
  }
  return accumulator;
}, []);

function useMAp(arr) {
  let map = new Map();
  let array = new Array();  // 数组用于返回结果
  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {  // 如果有该key值
      map.set(arr[i], true);
    } else {
      map.set(arr[i], false);   // 如果没有该key值
      array.push(arr[i]);
    }
  }
  return array;
}

function useIndexOf2(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (array.indexOf(arr[i]) === -1) {
      array.push(arr[i])
    }
  }
  return array;
}

function useSort(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return;
  }
  arr = arr.sort()
  let arrry = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      arrry.push(arr[i]);
    }
  }
  return arrry;
}

function useLoop(arr) {
  let array = arr;
  let len = array.length;

  array.sort(function (a, b) {   //排序后更加方便去重
    return a - b;
  })

  function loop(index) {
    if (index >= 1) {
      if (array[index] === array[index - 1]) {
        array.splice(index, 1);
      }
      loop(index - 1);    //递归loop，然后数组去重
    }
  }
  loop(len - 1);
  return array;
}
console.log(uniqueArray1); // [1, 2, 3, 8, 5, 6]
console.log(uniqueArray2); // [1, 2, 3, 8, 5, 6]
console.log(useLoop(array));
console.log(useIndexOf(array));
console.log(useSet(array));
