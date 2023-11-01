<template>
  <div class="center-horizontally">
    <div class="li-box box1">
      <p>组件</p>
      <ol>
        <li><router-link to="/upload">上传</router-link></li>
        <li><router-link to="/download">下载</router-link></li>
        <li><router-link to="/table">表格</router-link></li>
      </ol>
    </div>
    <div class="li-box box2">
      <p>工具集合</p>
      <ol>
        <li><a href="https://tools.fun/index.html">ToolsFun</a></li>
        <li><a href="https://www.qianbo.com.cn/Tool/Rgba/">RGB查询转换</a></li>
        <li>
          <a href="http://api.map.baidu.com/lbsapi/getpoint/index.html"
            >百度地图坐标拾取</a
          >
        </li>
        <li><a href="https://icones.js.org/">icons</a></li>
        <li><a href="https://www.iconfont.cn/home/index">iconfont</a></li>
      </ol>
    </div>
    <div class="li-box box3">
      <p>收藏链接</p>
      <ol>
        <li><a href="https://www.ruanyifeng.com/blog/">阮一峰Blog</a></li>
        <li><a href="https://es6.ruanyifeng.com/">阮一峰Es6</a></li>
        <li>
          <a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html"
            >阮一峰Flex布局</a
          >
        </li>
        <li><a href="https://www.programmercarl.com/">代码随想录</a></li>
        <li><a href="https://vue3js.cn/interview/">Web前端面试</a></li>
        <li><a href="https://fe.ecool.fun/">前端刷题面试</a></li>
        <li><a href="https://wangdoc.com/">互联网开发文档</a></li>
        <li>
          <a href="https://markdown.com.cn/basic-syntax/">Markdown基本语法</a>
        </li>
        <li>
          <a
            href="https://www.liaoxuefeng.com/wiki/896043488029600/900005860592480"
            >廖雪峰分支管理策略</a
          >
        </li>
        <li><a href="https://sspai.com/">少数派</a></li>
        <li><a href="https://color.oulu.me/">渐变颜色</a></li>
        <li>
          <a
            href="https://www.webhek.com/post/css3-animation-sniplet-collection/#/"
            >css动画</a
          >
        </li>
        <li><a href="https://unsplash.com/explore">free-wallPapers</a></li>
        <li>
          <a href="https://blog.csdn.net/CBGCampus/article/details/124997628"
            >Odoo OWL</a
          >
        </li>
      </ol>
    </div>
  </div>
</template>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
a,
li {
  text-decoration: none;
  padding: 2px 0;
}
p {
  padding: 8px 0;
  font-size: 18px;
  font-weight: 600;
  color: #000;
}
.li-box {
  min-width: 200px;
  margin-left: 16px;
  padding: 0 16px 16px 32px;
  color: #fff;
}
.box1 {
  background: rgb(77, 194, 160, 0.9);
}
.box2 {
  background: rgb(255, 26, 122, 0.7);
}
.box3 {
  background: rgb(255, 184, 0, 0.7);
}
</style>