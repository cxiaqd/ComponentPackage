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

// 判断两个数组内容是否相等
function areArraysContentEqual3(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const countMap = new Map();

  // 计数第一个数组的元素
  for (const item of arr1) {
    countMap.set(item, (countMap.get(item) || 0) + 1);
  }

  // 比较第二个数组与计数
  for (const item of arr2) {
    const val = countMap.get(item);
    if (val === undefined || val <= 0) {
      return false;
    }
    countMap.set(item, val - 1);
  }

  return true;
}

const array1 = ["apple", "banana", "cherry", "banana", 1, '1', '11', 11];
const array2 = ["banana", "apple", "banana", "cherr3y", '1', 1, '11', 11];

let result = areArraysContentEqual3(array1,array2)
console.log(result);
