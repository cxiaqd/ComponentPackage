// 去除字符串中空格
function trimFn1() {
  let str = ' haik an g1 '
  console.log(str.replaceAll(' ', ''));
}
function trimFn2() {
  let str = ' haik an g2 '

  let reg = /[\t\r\f\n\s]*/g;
  let reg2 = /\ +/g;
  let reg3 = /[ ]/g
  if (typeof str === 'string') {
    let trimStr = str.replace(reg, '');
    let trimStr2 = str.replace(reg2, '');
    let trimStr3 = str.replace(reg3, '');
    console.log(trimStr);
    console.log(trimStr2);
    console.log(trimStr3);
  }
}
function trimFn3() {
  let str = ' haik an g3 '

  if (typeof str === 'string') {
    str = str.split(/[\t\r\f\n\s]*/g).join('');
  } else {
    console.error(`${typeof str} is not the expected type, but the string type is expected`)
  }
  console.log(str);
}

function trimFn4(str, direction) { // 1 串的模板 2 清除哪边空格
  if (typeof str !== 'string') { // 限制下条件，必须是字符串
    console.error(`${typeof ele} is not the expected type, but the string type is expected`)
    return false
  }
  let Reg = '';
  switch (direction) {
    case 'left': // 去除左边
      Reg = /^[\t\r\f\n\s]+/g;
      break;
    case 'right': // 去除右边
      Reg = /([\t\r\f\n\s]+)$/g;
      break;
    case 'both': // 去除两边
      Reg = /(^[\t\r\f\n\s]*)|([\t\r\f\n\s]*$)/g
      break;
    default:   // 没传默认全部，且为下去除中间空格做铺垫
      Reg = /[\t\r\f\n\s]*/g;
      break;
  }
  let newStr = str.replace(Reg, '');
  if (direction == 'middle') {
    let RegLeft = str.match(/(^[\t\r\f\n\s]*)/g)[0]; // 保存右边空格
    let RegRight = str.match(/([\t\r\f\n\s]*$)/g)[0]; // 保存左边空格
    newStr = RegLeft + newStr + RegRight; // 将空格加给清完全部空格后的字符串
  }
  console.log(newStr);
  return newStr;
}

// 去除字符串中最后一个指定字符
function removeLastChar1(str, char) {
  const lastIndex = str.lastIndexOf(char);

  if (lastIndex === -1) {
    return str; // 字符不存在，返回原字符串
  }

  return str.slice(0, lastIndex) + str.slice(lastIndex + 1);
}

function removeLastChar2(str, char) {
  const regex = new RegExp(`${char}(?!.*${char})`);
  return str.replace(regex, "");
}

// 去除字符串指定字符
function trimStrFn() {
  var str = "a1a2b3b4c5c6d7d8e9e0g1g";

  var reg1 = new RegExp("a", "g"); // 加'g'，删除字符串里所有的"a"
  var a1 = str.replace(reg1, "");
  console.log(a1); // bbccddeegg

  var reg2 = new RegExp("a"); // 不加'g'，仅删除字符串里第一个"a"
  var a2 = str.replace(reg2, "");
  console.log(a2); // abbccddeegg 
}

function trimStrFn2() {
  var str = "abcdaabbssaaa";
  var a = str.split("a").join("");
  console.log(a); // bcdbbss 
}

// trimFn1()
// trimFn2()
// trimFn3()
// trimFn4(' haik an g4 ','both')

trimStrFn()