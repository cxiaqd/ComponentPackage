// 在beforeEach中重定向时会陷入无限循环调用beforeEach，所以需要在外层加一个判断，及时终止beforeEach的调用
function beforeEach(to,from,next) {
    if (to.path != '/403') { //外层判断
      if (process.env.NODE_ENV === 'development' && to.path === '/') {
        next()
      }else if (!hasAuth(to.path)) {
        next('403')
      }else{
        next()
      }
    }else{ //及时终止beforeEach的调用
      next()
    }
  }