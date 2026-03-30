Autoprefixer 是一个 PostCSS 插件，用于自动给 CSS 添加浏览器厂商前缀（如 `-webkit-`、`-moz-`），让你可以直接写 W3C 标准语法，无需手动处理兼容性问题。

## 核心特性

**自动添加必要前缀**
基于 Can I Use 的真实数据，只添加真正需要的前缀，不写多余代码。

```css
/* 你写的代码 */
::placeholder {
  color: gray;
}

/* Autoprefixer 处理后的代码 */
::-moz-placeholder {
  color: gray;
}
::placeholder {
  color: gray;
}
```

**自动移除过时前缀**
如果某些前缀已经不需要了（比如 `border-radius` 的前缀），Autoprefixer 会自动帮你清理掉。

## 配置目标浏览器

通过 Browserslist 指定需要兼容的浏览器，支持在 `package.json` 或单独的 `.browserslistrc` 文件中配置：

```json
{
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 10"
  ]
}
```

常用配置示例：
- `> 1%` - 全球使用率大于1%的浏览器
- `last 2 versions` - 每个浏览器的最近2个版本
- `Firefox ESR` - Firefox 长期支持版
- `not dead` - 排除官方不再维护的浏览器

## 集成方式

**Webpack**：配置 `postcss-loader`
```javascript
module.exports = {
  module: {
    rules: [{
      test: /\.css$/,
      use: ["style-loader", "css-loader", "postcss-loader"]
    }]
  }
}
```

**Gulp**：使用 `gulp-postcss`
```javascript
const autoprefixer = require('autoprefixer')
const postcss = require('gulp-postcss')

gulp.task('css', () => {
  return gulp.src('./src/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./dest'))
})
```

**Next.js**：开箱即用，默认已集成 Autoprefixer

**CLI 命令行**：
```bash
npx postcss input.css --use autoprefixer -o output.css
```

## 特殊场景处理

**Grid 布局的 IE 兼容**
默认禁用，需手动开启：
```javascript
autoprefixer({ grid: 'autoplace' })
```
或在 CSS 文件顶部添加注释：
```css
/* autoprefixer grid: autoplace */
```

**禁用某些部分**
使用控制注释：
```css
/* autoprefixer: off */
.old-browser {
  transition: 1s;  /* 不会添加前缀 */
}
```

**Flexbox 兼容**
可设为 `"no-2009"` 只兼容最终规范版本：
```javascript
autoprefixer({ flexbox: "no-2009" })
```

## 注意事项

- Autoprefixer 只添加**前缀**，不做 polyfill
- 确保配置的 Browserslist 与其他工具（Babel、ESLint）保持一致
- 如果不确定哪些属性需要前缀，可以运行 `npx autoprefixer --info` 查看

## 总结

Autoprefixer 已经是现代前端开发的标准工具，被 Google、Twitter、WordPress 等广泛使用。在 Webpack、Vite、Next.js 等主流框架中，往往已经内置或可通过简单配置启用，让你完全不用再操心浏览器前缀的问题。