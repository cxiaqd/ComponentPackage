<template>
  <div class="center-horizontally">
    <div class="center_header"></div>
    <div class="center_content">
      <div class="li-box box0">
        <p>知识点</p>
        <ol>
          <li @click="jump('www.ruanyifeng.com/blog/2015/09/career-advice.html')">七个最重要的职业建议</li>
          <li @click="open('/interview')">suggestion</li>
          <li @click="open('/test')">测试</li>
          <li @click="open('/graillayout')">圣杯布局</li>
          <li @click="open('/MainLayout')">主题布局</li>
          <li @click="open('/Inputlayout')">输入框的布局</li>
        </ol>
      </div>
      <div class="li-box box1">
        <p>组件</p>
        <ol>
          <li @click="open('/upload')">上传</li>
          <li @click="open('/table')">表格</li>
          <li @click="open('/button')">按钮</li>
        </ol>
      </div>
      <div class="li-box box2">
        <p>工具集合</p>
        <ol>
          <li @click="jump('tools.fun/index.html')">ToolsFun</li>
          <li @click="jump('www.qianbo.com.cn/Tool/Rgba/')">RGB查询转换</li>
          <li @click="jump('api.map.baidu.com/lbsapi/getpoint/index.html')">
            百度地图坐标拾取
          </li>
          <li @click="jump('icones.js.org/')">icons</li>
          <li @click="jump('www.iconfont.cn/home/index')">iconfont</li>
        </ol>
      </div>
      <div class="li-box box3">
        <p>收藏链接</p>
        <ol>
          <li @click="jump('wangdoc.com/')">网道-互联网开发文档</li>
          <li @click="jump('www.ruanyifeng.com/blog/')">阮一峰Blog</li>
          <li @click="jump('es6.ruanyifeng.com/')">阮一峰Es6</li>
          <li
            @click="jump('www.ruanyifeng.com/blog/2015/07/flex-grammar.html')"
          >
            阮一峰Flex布局
          </li>
          <li @click="jump('www.programmercarl.com/')">代码随想录</li>
          <li @click="jump('vue3js.cn/interview/')">Web前端面试</li>
          <li @click="jump('fe.ecool.fun/')">前端刷题面试</li>
          <li @click="jump('markdown.com.cn/basic-syntax/')">
            Markdown基本语法
          </li>
          <li
            @click="
              jump('www.liaoxuefeng.com/wiki/896043488029600/900005860592480')
            "
          >
            廖雪峰分支管理策略
          </li>
          <li @click="jump('sspai.com/')">少数派</li>
          <li @click="jump('color.oulu.me/')">渐变颜色</li>
          <li
            @click="
              jump('www.webhek.com/post/css3-animation-sniplet-collection/#/')
            "
          >
            css动画
          </li>
          <li @click="jump('unsplash.com/explore')">free-wallPapers</li>
          <li @click="jump('nlrx-wjc.github.io/Learn-Vue-Source-Code/start/')">
            Vue源码
          </li>
          <li @click="jump('github.com/Jackpopc/CS-Books-Store')">
            GitHub电子书
          </li>
          <li @click="jump('www.cnblogs.com/coco1s/')">CSS奇技淫巧</li>
          <li @click="jump('css-tricks.com/css-ing-candy-ghost-buttons/')">
            css-ghost-buttons
          </li>
          <li
            @click="jump('blog.csdn.net/CBGCampus/article/details/124997628')"
          >
            Odoo OWL
          </li>
        </ol>
      </div>
      <div class="li-box box4">
        <p>收藏链接<span style="font-size: 8px">（公司内无法访问）</span></p>
        <ol>
          <li @click="jump('juejin.cn/post/7289339080838627382')">
            前端好用网站
          </li>
        </ol>
      </div>
    </div>
    <div class="center_footer"></div>
  </div>
</template>
<script>
export default {
  methods: {
    jump(url) {
      window.open(`https://${url}`, "_blank");
    },
    open(url) {
      /**
       * $router.resolve,用于根据给定的位置解析出一个完整的路由对象。
       * 该方法接受一个位置参数和一个当前路由对象参数（可选）。位置参数可以是一个字符串路径或者一个包含路径信息的对象。
       * 如果提供了当前路由对象参数，则解析将基于该路由对象的上下文。
       */
      let routeUrl = this.$router.resolve({
        path: url,
      });
      window.open(routeUrl.href, "_blank");
    },
  },
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
.center-horizontally {
  display: flex;
  height: 100%;
  flex-direction: column;
}
.center_content {
  flex: 1;
  display: flex;
  justify-content: center;
  background-color: #d6d6d6;
  overflow: auto;
}
a,
li {
  text-decoration: none;
  padding: 5px 0;
}
li:hover {
  color: #fff;
  font-weight: 600;
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
  cursor: pointer;
  color: #551a8b;
  overflow: auto;
}
.box0 {
  background: rgb(0, 191, 255);
}
.box1 {
  background: rgb(77, 194, 160);
}
.box2 {
  background: rgb(255, 26, 122, 0.7);
}
.box3 {
  background: rgb(255, 184, 0, 0.7);
}
.box4 {
  background: #edb779;
}
</style>