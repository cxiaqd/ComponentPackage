<template>
  <div class="center-horizontally">
    <div class="li-box box1">
      <p>组件</p>
      <ol>
        <li @click="open('/upload')">上传</li>
        <li @click="open('/download')">下载</li>
        <li @click="open('/table')">表格</li>
      </ol>
    </div>
    <div class="li-box box2">
      <p>工具集合</p>
      <ol>
        <li @click="jump('https://tools.fun/index.html')">ToolsFun</li>
        <li @click="jump('https://www.qianbo.com.cn/Tool/Rgba/')">
          RGB查询转换
        </li>
        <li
          @click="jump('http://api.map.baidu.com/lbsapi/getpoint/index.html')"
        >
          百度地图坐标拾取
        </li>
        <li @click="jump('https://icones.js.org/')">icons</li>
        <li @click="jump('https://www.iconfont.cn/home/index')">iconfont</li>
      </ol>
    </div>
    <div class="li-box box3">
      <p>收藏链接</p>
      <ol>
        <li @click="jump('https://www.ruanyifeng.com/blog/')">阮一峰Blog</li>
        <li @click="jump('https://es6.ruanyifeng.com/')">阮一峰Es6</li>
        <li
          @click="
            jump('https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html')
          "
        >
          阮一峰Flex布局
        </li>
        <li @click="jump('https://www.programmercarl.com/')">代码随想录</li>
        <li @click="jump('https://vue3js.cn/interview/')">Web前端面试</li>
        <li @click="jump('https://fe.ecool.fun/')">前端刷题面试</li>
        <li @click="jump('https://wangdoc.com/')">互联网开发文档</li>
        <li @click="jump('https://markdown.com.cn/basic-syntax/')">
          Markdown基本语法
        </li>
        <li
          @click="
            jump(
              'https://www.liaoxuefeng.com/wiki/896043488029600/900005860592480'
            )
          "
        >
          廖雪峰分支管理策略
        </li>
        <li @click="jump('https://sspai.com/')">少数派</li>
        <li @click="jump('https://color.oulu.me/')">渐变颜色</li>
        <li
          @click="
            jump(
              'https://www.webhek.com/post/css3-animation-sniplet-collection/#/'
            )
          "
        >
          css动画
        </li>
        <li @click="jump('https://unsplash.com/explore')">free-wallPapers</li>
        <li
          @click="
            jump('https://blog.csdn.net/CBGCampus/article/details/124997628')
          "
        >
          Odoo OWL
        </li>
      </ol>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    jump(url) {
      window.open(url, "_blank");
    },
    open(url) {
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
a,
li {
  text-decoration: none;
  padding: 2px 0;
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
</style>