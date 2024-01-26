// 用map映射，替换重复判断的if else
let res = {
    list:[]
}
res.list.forEach(item => {
    if (item.title === '未任用') {
        item.title = 0
    }else if(item.title === '已任用'){
        item.title = 1;
    }

    if (item.status === '待反馈') {
        item.status = '0'
    }else if (item.status === '已接受') {
        item.status = '1'
    }
});

// 优化后
const accept = {
    待反馈:0,
    已接受:1
}
const appoint = {
    未任用:0,
    已任用:1
}
res.list.forEach(item => {
    item.status = accept[item.status]
    item.title = appoint[item.title]
})