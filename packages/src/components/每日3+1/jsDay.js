// 下划线与驼峰互相转换方法
// 下划线转驼峰
// 1、使用正则表达式
function underlineToHump(name) {
  // 如果首字母是_，执行 replace 时会多一个_，这里需要去掉
  if (name.slice(0, 1) === '_') {
    name = name.slice(1);
  }
  return name.replace(/\_(\w)/g, (all, letter) => {
    return letter.toUpperCase()
  })
}

function doCamel(preVal, curVal, curIndex, arr) {
  // console.log([preVal, curVal, curIndex]);
  if (curVal === '_') {
    curVal = arr[curIndex + 1];
    arr.splice(curIndex + 1, 1) //创建一个删除当前元素且不改变原数组的新数组
    return preVal + curVal.toUpperCase();
  } else {
    return preVal + curVal;
  }
}

function underlineToHump2(str) {
  if (typeof str === 'string' && str.length) {
    str = str.split('');
    console.log(str);
    // 如果首字母是_，执行 replace 时会多一个_，这里需要去掉
    const fir = str.slice(0, 1)[0];
    if (fir === '_') {
      str = str.slice(1);
    }
    return str.reduce(doCamel);
  }
}

function doHump(val, index, arr) {
  if (val === '_') {
    val = arr[index + 1];
    arr.splice(index + 1, 1)
    return val.toUpperCase();
  } else {
    return val;
  }
}

function underlineToHump3(str) {
  if (typeof str === 'string' && str.length) {
    str = str.split('');
    // 如果首字母是_，执行 replace 时会多一个_，这里需要去掉
    const fir = str.slice(0, 1)[0];
    if (fir === '_') {
      str = str.slice(1);
    }
    return str.map(doHump).join('');
  }
}


// 驼峰转下划线
function humpToUnderline(name) {
  let temp = name.replace(/([A-Z])/g, "_$1").toLowerCase();
  // 如果首字母是大写，执行replace时会多一个_，这里需要去掉
  if (temp.slice(0, 1) === '_') {
    temp = temp.slice(1);
  }
  return temp
}
function doUnderline(preVal, curVal, curIndex, array) {
  if (/[A-Z]/.test(curVal)) {
    curVal = curVal.toLowerCase();
    if (curIndex === 0) {
      return preVal + curVal;
    } else {
      return preVal + '_' + curVal;
    }
  } else {
    return preVal + curVal;
  }
}

function humpToUnderline2(str) {
  if (typeof str === 'string') {
    str = str.split('');
  }
  return str.reduce(doUnderline, '');
}

function doUnderline(val, index, arr) {
  if (/[A-Z]/.test(val)) {
    if (index === 0) {
      return val.toLowerCase();
    } else {
      return '_' + val.toLowerCase();
    }
  } else {
    return val;
  }
}

function humpToUnderline3(str) {
  if (typeof str === 'string') {
    return [].map.call(str, doUnderline).join('');
    // Array.prototype.map.call(arr, doLowerLine).join('');
  }
}
// 字符串大小写转换
function strLowOrUp(str) {
  if (typeof str === 'string') {
    str = str.split('')
  }
  res = str.map(element => {
    return element.toLowerCase()
  });
  return res.join('')
}
// 首字母大写
function capFirstLetterUp(str) {
  return str[0].toUpperCase() + str.slice(1)
}
// 每个单词首字母大写
function capFirstLetterInSentence(sentence) {
  return sentence.split(" ").map(word => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(" ");
}

// 去除字符串中制表符、换行符、空格
function removeWhitespace(str) {
  // 使用正则表达式匹配并去除换行符、制表符和空格
  return str.replace(/[\n\t\s]+/g, '');
}

const stringWithWhitespace = "这是一个  包   含空格、制表符\t和换行符\n的字符串。";
const cleanedString = removeWhitespace(stringWithWhitespace);
// console.log(cleanedString); // 输出: "这是一个包含空格、制表符和换行符的字符串。"

// 统计某一字符或字符串在另一个字符串中出现的次数
function strAppearNum(keyWord, str) {
  str = str.split("")
  let num = 0
  str.forEach(element => {
    if (element === keyWord) {
      num += 1;
    }
  });
  return num
}
function strAppearNum2(keyWord, str) {
  str = str.split("")
  let mapArr = new Map()
  str.forEach(element => {
    if (mapArr.has(element)) {
      let n = mapArr.get(element)
      mapArr.set(element, n + 1)
    } else {
      mapArr.set(element, 1)
    }
  });
  return mapArr.get(keyWord)
}
function strAppearNum3() {
  let input = '上一章对JavaScript进行了概述性的介绍，从本章开始将对JavaScript进行深入的讨论。这一章将分析JavaScript的核心ECMAScript，让读者从底层了解JavaScript的编写，包括JavaScript的基本语法、变量、关键字、保留字、语句、函数等。';
  let search = 'JavaScript';

  let removed = input.split(search).join('');
  let times = (input.length - removed.length) / search.length;

  console.log(times);
}
function strAppearNum4() {
  let input = '上一章对JavaScript进行了概述性的介绍，从本章开始将对JavaScript进行深入的讨论。这一章将分析JavaScript的核心ECMAScript，让读者从底层了解JavaScript的编写，包括JavaScript的基本语法、变量、关键字、保留字、语句、函数等。';
  let search = 'JavaScript';

  let count = 0;
  let position = 0;
  const searchStringLength = search.length;
  const mainStringLength = input.length;

  while ((position = input.indexOf(search, position)) !== -1) {
    count++;
    position += searchStringLength;
  }
  console.log(count);
  return count;
}
// 使用math方法
function strAppearNum5(str, target) {
  let count = 0
  if (!target) {
    return count
  } else {
    // str.match(target) 若数值匹配到，则返回的是一个数组。若匹配不到，则返回null
    while (str.match(target)) {
      str = str.replace(target, '')
      count++
    }
    return count
  }
}

// 统计某一字符或字符串在另一个字符串中出现的次数
function countStr(str, target) {
  if (!target) {
    return 0
  } else {
    return str.split(target).length - 1
  }
}

// 使用正则表达式
function countStr2(str, target) {
  if (!target) {
    return 0
  } else {
    console.log(str.match(new RegExp(target, 'g'))) //  ["abc", "abc"]
    return str.match(new RegExp(target, 'g')).length
  }
}

// base64加密与解密
const str = "Hello, World!";
const encodedStr = btoa(str);
console.log(encodedStr);

const decodedStr = atob(encodedStr);
console.log(decodedStr); // 输出：Hello, World!


// 判断数据类型方法 

// console.log(countStr('22abcfh ab cabc', 'abc')) // 2
// console.log(countStr2('22abcfh ab cabc11', 'abc')) // 2
// console.log(strAppearNum5('22abcfh ab cabc', 'abc')) // 2
// strAppearNum3()
// strAppearNum4()
// console.log(strAppearNum2('a',"appaaale"));
// underlineToHump2('_hello_world')
// console.log(underlineToHump3('_hello_world'));
// console.log(humpToUnderline3('HelloWorld'));
// console.log(strLowOrUp('HELLO'));
// console.log(capFirstLetterUp('hello'));
// console.log(capFirstLetterInSentence("i am learning how to code"));