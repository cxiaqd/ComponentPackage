const array1 = ["apple", "banana", "cherry", "banana", 1, "1", "11", 11];
const array2 = ["banana", "apple", "banana", "cherr3y", "1", 1, "11", 11];

function areArraysContentEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
      return false;
    }
  
    // 创建计数对象，用于记录每个元素在数组中的出现次数
    const countMap1 = count(arr1)
    const countMap2 = count(arr2)
  
    // 统计数组中的元素出现次数
    function count(arr = []) {
      const resMap = new Map();
      for (const item of arr) {
        resMap.set(item, (resMap.get(item) || 0) + 1);
      }
      return resMap
    }
    // 检查计数对象是否相等
    for (const [key, count] of countMap1) {
      if (countMap2.get(key) !== count) {
        return false;
      }
    }
  
    return true;
  }
  
  areArraysContentEqual(array1, array2) // true
  
  /**
   * ****对上一种方法进行改进
   * 只需要一个对象
    遍历第一个数组就 +1
    遍历第二个数组就 - 1
    最后遍历对象，只要不存在或者<=0 就是不等
   */
  
// 判断两个数组内容是否相等
function areArraysContentEqual2(arr1 = [], arr2 = []) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const countMap = new Map();

  // 计数第一个数组的元素
  for (const item of arr1) {
    // get 返回与指定的键 key 关联的值，若不存在关联的值，则返回 undefined。
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
areArraysContentEqual2(array1,array2)
