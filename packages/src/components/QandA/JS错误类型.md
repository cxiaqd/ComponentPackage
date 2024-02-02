# 一、SyntaxError
SyntaxError对象是解析代码时发生的语法错误。
```js
// 变量名错误
var 1a;
// Uncaught SyntaxError: Invalid or unexpected token

// 缺少括号
console.log 'hello');
// Uncaught SyntaxError: Unexpected string
```
# 二、ReferenceError
ReferenceError对象是引用一个不存在的变量时发生的错误。
```js
// 使用一个不存在的变量
unknownVariable
// Uncaught ReferenceError: unknownVariable is not defined

// 等号左侧不是变量.
// 将一个值分配给无法分配的对象，比如对函数的运行结果赋值。
console.log() = 1
// Uncaught ReferenceError: Invalid left-hand side in assignment
```
# 三、RangeError
RangeError对象是一个值超出有效范围时发生的错误。主要有几种情况，一是数组长度为负数，二是Number对象的方法参数超出范围，以及函数堆栈超过最大值。
```js
// 数组长度不得为负数
new Array(-1)
// Uncaught RangeError: Invalid array length
```
 # 四、TypeError
 对象是变量或参数不是预期类型时发生的错误。比如，对字符串、布尔值、数值等原始类型的值使用new命令，就会抛出这种错误，因为new命令的参数应该是一个构造函数。
 ```js
 new 123
// Uncaught TypeError: 123 is not a constructor

// 调用对象不存在的方法，也会抛出TypeError错误，因为obj.unknownMethod的值是undefined，而不是一个函数。
var obj = {};
obj.unknownMethod()
// Uncaught TypeError: obj.unknownMethod is not a function
 ```
 # 五、URIError
 对象是 URI 相关函数的参数不正确时抛出的错误，主要涉及encodeURI()、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape()这六个函数。
 ```js
 decodeURI('%2')
// URIError: URI malformed
 ```
# 六、总结
以上这6种派生错误，连同原始的Error对象，都是构造函数。开发者可以使用它们，手动生成错误对象的实例。这些构造函数都接受一个参数，代表错误提示信息（message）。
```js
var err1 = new Error('出错了！');
var err2 = new RangeError('出错了，变量超出有效范围！');
var err3 = new TypeError('出错了，变量类型无效！');

err1.message // "出错了！"
err2.message // "出错了，变量超出有效范围！"
err3.message // "出错了，变量类型无效！"
```