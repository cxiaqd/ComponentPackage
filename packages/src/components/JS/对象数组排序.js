var arr5 = [{ id: 10 }, { id: 5 }, { id: 6 }, { id: 9 }, { id: 2 }, { id: 3 }];
arr5.sort(sortBy("id", 1));
//attr：根据该属性排序；rev：升序1或降序-1，不填则默认为1
function sortBy(attr, rev) {
  if (rev == undefined) {
    rev = 1;
  } else {
    rev ? 1 : -1;
  }
  return function (a, b) {
    a = a[attr];
    b = b[attr];
    if (a < b) {
      return rev * -1;
    }
    if (a > b) {
      return rev * 1;
    }
    return 0;
  };
}
console.log(arr5);
//输出新的排序
// {id: 2}
// {id: 3}
// {id: 5}
// {id: 6}
// {id: 9}
// {id: 10}
