let type = function (o) {
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};

type({}); // "object"
type([]); // "array"
type(5); // "number"
type(null); // "null"
type(); // "undefined"
type(/abcd/); // "regex"
type(new Date()); // "date"
                                                     
// 在上面这个type函数的基础上，还可以加上专门判断某种类型数据的方法。
const dateTypeArr = [
  "Null",
  "Undefined",
  "Object",
  "Array",
  "String",
  "Number",
  "Boolean",
  "Function",
  "RegExp",
];
dateTypeArr.forEach(function (t) {
  type["is" + t] = function (o) {
    const res = type(o) === t.toLowerCase();
    console.log(res);
    return res;
  };
});

type.isObject({}); // true
type.isNumber(NaN); // true
type.isRegExp(/abc/); // true
type.isArray("565"); // false
