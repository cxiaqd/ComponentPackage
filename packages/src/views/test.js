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
// removeDuplicates(dupArr)


const result3 = [[2, 4], [3, 6], [4, 8]].flat()
const result4 = [[2,5],[3],[4]].flatMap((item) => [
  item,item * 2
])
// console.log(result3);
// console.log(result4);
// console.log(dupArr.at(-3));
let [a,b,c] = [1,2,dupArr]
console.log(c);


let aObj = { foo: 'aaa', bar: 'bbb' };
// let { foo: baz } = aObj;
let { foo: baz } = { foo: 'aaa', bar: 'bbb' };
console.log(baz);
let obj = { first: 'hello', last: 'world' };
let { first: f, last: l } = obj;
console.log(f);

let redColor = '#c0edc6'

const dateTest = new Date(...[2015, 2, 18]);
// console.log(dateTest);

let obja = {'x':1,'y':2,'z':3}
let x=10, y=5;
let objb = {...obja,x,y}
// console.log(objb);

let equalityObject = Object.is(NaN,NaN)
console.log(equalityObject);

const obj2 = { 0: 'a', 2: 'b', 7: 'c' };
const logObj2 = Object.values(obj2)
// console.log(logObj2);

const set = new Set([
  ['foo', 1],
  ['bar', 2]
]);
const m1 = new Map(set);
// console.log(set);
// console.log(m1);

function getJSON(url){
  return url
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
function changeValue(obj1){
  obj1.name = 'ConardLi';
  obj1 = {name:'code秘密花园'};
}
changeValue(obj1);
// console.log(obj1);
// console.log(obj1.name); // ConardLi

const aValueof = {
  value:[3,2,1],
  valueOf: function () {return this.value.pop(); },
} 
// console.log(aValueof == 1 && aValueof == 2 && aValueof ==3);

function detactDataType(data){
  return Object.prototype.toString.call(data)
}
const arrayToString = [1,2,3]
console.log(arrayToString.toString());
console.log(Object.prototype.toString.call(arrayToString));
console.log(detactDataType(arrayToString));




