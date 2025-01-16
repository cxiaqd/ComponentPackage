# 判断数据类型的方法--typeof、instanceof 和 Object.prototype.toString
## typeof
* 检测返回结果是一个字符串
* 优点：使用起来简单，基本数据类型都可以有效检测，引用数据类型也可以检测出来
* 局限性：
1）、NaN/Infinity 都是数字类型的，检测结果都是“number”;
2)、typeof null的结果是“object”
（这是浏览器的BUG：所有的值在计算中都以二进制编码储存，浏览器中把前三位000的当作对象，而null的二进制前三位是000，所以被识别为对象，但是他不是对象，他是空对象指针，是基本类型值）
3)、typeof 普通对象/数组对象/正则对象...， 结果都是“object”，**这样就无法基于typeof 区分是普通对象还是数组对象``...等了**
## instanceof
* 要求检测的实列必须是对象数据类型的
* 基本数据类型的实列是无法基于它检测出来的（字面量方式创建的不能检测，构造函数创建的可以正常检测）
* 不管是数组对象还是普通对象，都是Object实列，检测结果都是true，所以无法基于这个结果判断是否为普通对象
```
// instanceof检测的实例必须都是引用数据类型的，它对基本数据类型值操作无效
console.log(10 instanceof Number); //=>false
console.log(new Number(10) instanceof Number); //=>true

console.log(new Array(10) instanceof Array); //=>true
console.log(new Array(10) instanceof Object); //=>true
console.log(new Object(10) instanceof Object); //=>true

// instanceof检测机制：验证当前类的原型prototype是否会出现在实例的原型链__proto__上，只要在它的原型链上，则结果都为TRUE
function Fn() {}
Fn.prototype = Object.create(Array.prototype);
let f = new Fn;
console.log(f instanceof Array); //=>true f其实不是数组，因为它连数组的基本结构都是不具备的 
```
**注意：它本身不能完成数据类型检测，只是利用它（检测某个实例是否属于这个类的）特征完成检测**
## Object.prototype.toString.call()
* 定义：找到Object.prototype上的toString方法，让toString方法执行，并且基于call让方法中的this指向检测的数据值，这样就可以实现数据类型检测了
* 原理：
1、每一种数据类型的构造函数的原型上都有toString方法；
2、除了Object.prototype上的toString是用来返回当前实例所属类的信息（检测数据类型的），其余的都是转换为字符串的
3、对象实例.toString() ：toString方法中的THIS是对象实例，也就是检测它的数据类型，也就是THIS是谁，就是检测谁的数据类型
4、Object.prototype.toString.call([value]) 所以我们是把toString执行，基于call改变this为要检测的数据值
* 使用方法：
Object.prototype.toString.call(被检测的实例)
({}).toString.call(被检测的实例)
```
Object.prototype.toString.call(10)
({}).toString.call(10)
({}).toString===Object.prototype.toString
```
```
let class2type = {};
let toString = class2type.toString; //=>Object.prototype.toString

console.log(toString.call(10)); //=>"[object Number]"
console.log(toString.call(NaN)); //=>"[object Number]"
console.log(toString.call("xxx")); //=>"[object String]"
console.log(toString.call(true)); //=>"[object Boolean]"
console.log(toString.call(null)); //=>"[object Null]"
console.log(toString.call(undefined)); //=>"[object Undefined]"
console.log(toString.call(Symbol())); //=>"[object Symbol]"
console.log(toString.call(BigInt(10))); //=>"[object BigInt]"
console.log(toString.call({xxx:'xxx'})); //=>"[object Object]"
console.log(toString.call([10,20])); //=>"[object Array]"
console.log(toString.call(/^\d+$/)); //=>"[object RegExp]"
console.log(toString.call(function(){})); //=>"[object Function]" 
```
* 优点：
专门用来检测数据类型的方法，基本上不存在局限性的数据类型检测方式
基于他可以有效的检测任何数据类型的值
* 局限性：
1)、只能检测内置类，不能检测自定义类
2)、只要是自定义类返回的都是‘[Object Object]’
**注意：此方法是基于JS本身专门进行数据检测的，所以是目前检测数据类型比较好的方法**
# 回调函数
https://blog.csdn.net/I_am_shy/article/details/136476455
回调函数是一种特殊的函数，它作为参数传递给另一个函数，并在被调用函数执行完毕后被调用
# js有哪些内置的对象
* **Object**：JavaScript 中的所有对象都是从 Object 对象继承而来的。
* **Array**：用于创建和操作数组的对象。
* **String**：用于创建和操作字符串的对象。
* **Number**：用于创建和操作数字的对象。
* **Boolean**：用于创建和操作布尔值的对象。
* **Function**：用于创建函数的对象。
* **Date**：用于创建和操作日期的对象。
* **Math**：用于执行数学运算的对象。
* **RegExp**：用于创建和操作正则表达式的对象。
* **Error**：用于创建错误对象的对象。
# js获去URL中参数值的四种方法
## 1、现代浏览器都支持URL和URLSearchParams对象，可以很方便地从URL中提取参数
```
// 假设当前URL为 "https://example.com/?name=John&age=30" 
const url = new URL(window.location.href); // 或者你可以直接传入一个URL字符串 
const name = url.searchParams.get('name'); // "John" 
const age = url.searchParams.get('age'); // "30" 
```
## 2、使用正则表达式
可以使用正则表达式匹配URL参数，这种方法相对较低效且复杂。
```
function getQueryParam(name) {
    const regex = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
    const results = regex.exec(window.location.href);
    return results ? decodeURIComponent(results[1]) : null;
}

// 假设当前URL为 "https://example.com/?name=John&age=30"
const name = getQueryParam('name'); // "John"
const age = getQueryParam('age'); // "30"
```
## 3、使用split和reduce
可以通过split方法手动拆分查询参数，并用reduce将其转化为对象
```
function getQueryParams() {
    return window.location.search
        .substring(1) // 去掉 ?
        .split('&') // 按 & 拆分
        .reduce((params, param) => {
            const [key, value] = param.split('=');
            params[decodeURIComponent(key)] = decodeURIComponent(value || '');
            return params;
        }, {});
}

// 假设当前URL为 "https://example.com/?name=John&age=30"
const params = getQueryParams();
const name = params['name']; // "John"
const age = params['age']; // "30"
```
## 4、使用locasion.search和自定义函数
```
function getQueryParameter(name) {
  const params = new URLSearchParams(location.search);
  return params.get(name);
}

// 假设当前URL为 "https://example.com/?name=John&age=30"
const name = getQueryParameter('name'); // "John"
const age = getQueryParameter('age'); // "30"
```

# JavaScript作用域的理解
https://segmentfault.com/a/1190000018513150
作用域是指在代码中变量和函数的可访问范围。作用域决定了程序中变量、函数是否可以在当前环境中被访问修改。作用域直接影响代码的执行逻辑和变量的生命周期。在JS中作用域主要分为三种类型：全局作用域、函数作用域、块级作用域。
## 为什么引入作用域的概念
主要是为了提升代码的可维护性、安全性和避免冲突，确保变量和函数能够在适当的范围内被访问和使用。
## 全局作用域
全局作用域是指在代码的任何地方都可以访问的变量。这些变量在全局对象上定义，并且在整个代码期间都存在。常见的全局对象包括浏览器中的window对象和Node.js中global对象。
**注意**：滥用全局变量可能导致命名冲突和难以调试的问题，因此应尽量避免不必要的全局变量。
## 函数作用域
函数作用域是指变量在函数内部定义，并且只能在该函数内部访问，每调用一次函数都会创建新的作用域。函数执行完毕后，局部变量将被销毁。使用var定义的变量具有函数作用域，存在变量提升问题（变量声明被提升到函数顶部，但赋值不提升）。
```
//变量提升问题
console.log(testParams); //undenfined
var testParams = '123456789' 

console.log(testParams2); //Cannot access 'testParams2' before initialization
let testParams2 = '123456789'
```
## 块级作用域
块级作用域是指变量在代码快{}内定义，并且只能在改代码块内访问。使用let和const定义的变量具有块级作用域。
```
if (true) {
  var testParams4 = '44444'
  let testParams3 = '33333'
  console.log(testParams3); //33333
  console.log(testParams4); //44444
}
console.log(testParams4); //44444
console.log(testParams3); //testParams3 is not defined
```