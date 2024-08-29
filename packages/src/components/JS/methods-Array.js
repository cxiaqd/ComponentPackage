function method1_Array(){
  // 构造函数Array测试
  console.log(new Array());
  console.log(new Array('ele0','ele1'));

  // 也可以不使用new
  console.log(Array());
  console.log(Array('ele0','ele1'));
}

function method2_from(){
  console.log(Array.from('array'));
  console.log(Array.from([1,2,3],(x) => handle_from(x)));
}
function handle_from(x){
  return x*x
}











// method1_Array()
method2_from()








