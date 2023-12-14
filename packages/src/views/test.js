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
 const arr = [4,5,3,9,2,4,1,0]
 insertionSort(arr)
//  console.log(arr);

// 双指针法
var removeDuplicates = function(nums) {
  if(!nums.length) return 0;
  let i = 0;
  for(let j = 1; j < nums.length; j++){
      if(nums[j] !== nums[i]){
          i++;
          nums[i] = nums[j];
      }
  }
  console.log(nums.slice(0,i+1));
  console.log(nums);
  return nums;
};
const dupArr = [0,1,1,2,2,2,3,4,4,5,5,6,8,9,9]
removeDuplicates(dupArr)