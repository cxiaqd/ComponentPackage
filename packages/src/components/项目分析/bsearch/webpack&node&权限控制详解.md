# Webpack、Node 和权限控制详解（结合本项目）

---

## 第一部分：Webpack 详解

### 一、项目 Webpack 配置架构分析

#### 1.1 配置文件结构

本项目的 Webpack 配置通过 Vue CLI 的 `vue.config.js` 实现，位于 [`bsearch-frontend/search-center/vue.config.js`](bsearch-frontend/search-center/vue.config.js:1)。

```javascript
// vue.config.js 完整配置解析
const env = process.env.NODE_ENV;                    // 当前环境
const isDev = env === 'development';                 // 是否开发环境
const page = isDev ? 'index.html' : 'index.ftlh';    // 入口 HTML 文件
const projectThemeEntry = './src/style/index.scss';  // 项目主题入口
const huiThemeEntry = './src/style/hui.scss';        // HUI 主题入口

// 代理配置
const ORING_TARGET = 'https://10.19.176.200';  // 其他服务代理
const TARGET = 'https://10.19.176.200';        // 本地服务代理
const COLD_MOCK = 'http://xapi.hikvision.com.cn:3000/';  // 模拟地址

// 插件引入
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
```

#### 1.2 核心配置项详解

```javascript
const main = {
  // ========== 1. 入口配置 ==========
  indexPath: page,  // HTML 模板文件名
  
  // ========== 2. 静态资源路径 ==========
  publicPath: isDev ? '/' : `/bsearch-web/searchCenter`,  // 生产环境路径
  assetsDir: process.env.VUE_APP_ASSETS,  // 静态资源目录名
  outputDir: '../../bsearch-web/view/src/main/resources/templates/searchCenter',  // 输出目录
  
  // ========== 3. 运行时配置 ==========
  runtimeCompiler: true,  // 启用运行时编译器
  productionSourceMap: isDev,  // 生产环境是否生成 source map
  
  // ========== 4. 主题入口配置 ==========
  configureWebpack: {
    devtool: isDev ? 'source-map' : false,  // 开发环境启用 source map
    entry: [huiThemeEntry, projectThemeEntry, './src/main'],  // 多入口配置
    performance: {
      hints: false  // 关闭性能提示
    },
    plugins: [/* 插件配置 */]
  },
  
  // ========== 5. 转译配置 ==========
  transpileDependencies: isDev
    ? [/@hui-pro/, /@hi-map/, /hui/, /EventEmitter/, /client-container/, /simple-player-pro/, /bsearch-com/]
    : [/@hui-pro/, /hui/, /selection-point/, /hi-map-vue/, /hi-map-core/, /simple-player-pro/, /client-container/, /@hi-map/, /EventEmitter/, /bsearch-com/],
  
  // ========== 6. CSS 配置 ==========
  css: {
    extract: {
      ignoreOrder: true  // 忽略 CSS 顺序警告
    }
  }
}
```

---

### 二、Webpack 插件系统详解

#### 2.1 CompressionWebpackPlugin（Gzip 压缩）

**作用：** 对构建产物进行 Gzip 压缩，减少传输体积。

```javascript
new CompressionWebpackPlugin({
  algorithm: 'gzip',  // 压缩算法
  test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),  // 匹配文件
  threshold: 10240,  // 只处理大于 10KB 的文件
  minRatio: 0.8  // 压缩率小于 0.8 的文件才处理
})
```

**工作原理：**
```
原始文件 (100KB)
    ↓
Gzip 压缩算法
    ↓
压缩后文件 (30KB)  ← 压缩率 0.3 < 0.8，符合条件
```

**优化建议：**
```javascript
// 添加 Brotli 压缩（比 Gzip 压缩率更高）
const BrotliPlugin = require('brotli-webpack-plugin');

plugins: [
  // Gzip 压缩
  new CompressionWebpackPlugin({
    algorithm: 'gzip',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  }),
  // Brotli 压缩
  new BrotliPlugin({
    asset: '[path].br[query]',
    test: /\.(js|css|html|svg)$/,
    threshold: 10240,
    minRatio: 0.8
  })
]
```

#### 2.2 LimitChunkCountPlugin（限制 Chunk 数量）

**作用：** 限制生成的代码块数量，减少 HTTP 请求。

```javascript
new webpack.optimize.LimitChunkCountPlugin({
  maxChunks: 5,      // 最大 chunk 数量
  minChunkSize: 100  // 最小 chunk 大小（字节）
})
```

**工作原理：**
```
初始打包结果：
├── chunk1.js (50KB)
├── chunk2.js (30KB)
├── chunk3.js (20KB)
├── chunk4.js (15KB)
├── chunk5.js (10KB)
├── chunk6.js (5KB)   ← 超过 5 个

优化后：
├── chunk1.js (50KB)
├── chunk2.js (30KB)
├── chunk3.js (20KB)
├── chunk4.js (15KB)
├── chunk5.js (15KB)  ← chunk6 合并到 chunk5
```

#### 2.3 HtmlWebpackPlugin（HTML 模板处理）

**作用：** 生成 HTML 文件，注入打包后的资源。

```javascript
chainWebpack: config => {
  config.plugin('html').tap(args => {
    let meta = {
      _csrf: {
        name: '_csrf',
        content: '${(_csrf.token)!}'  // FreeMarker 模板语法
      },
      buildTime: {
        name: 'buildTime',
        time: new Date().toLocaleString()
      }
    };
    if (isDev) {
      meta = '';  // 开发环境不需要 meta
    }
    args[0].meta = meta;
    return args;
  });
}
```

**生成的 HTML：**
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="_csrf" content="${(_csrf.token)!}">
  <meta name="buildTime" content="2024/01/01 12:00:00">
  <!-- Webpack 自动注入 CSS 和 JS -->
  <link href="/bsearch-web/searchCenter/static/css/app.xxx.css" rel="stylesheet">
  <script src="/bsearch-web/searchCenter/static/js/app.xxx.js"></script>
</head>
<body>
  <div id="app"></div>
</body>
</html>
```

---

### 三、Webpack 代码分割详解

#### 3.1 路由懒加载代码分割

**项目中的实现：**
```javascript
// src/router/index.js
const processRouteObj = ({ children, component, ...args }) => {
  return Object.assign(
    {
      // 动态 import 实现代码分割
      component: () => import(/* webpackInclude: /\.(js|vue)$/ */ `@/pages/${component}`),
      children: children ? createRoute(children) : []
    },
    args
  )
}
```

**Webpack 处理流程：**
```
源代码：
component: () => import('@/pages/fusionResult/fusionResult')

Webpack 编译后：
__webpack_require__.e(0).then(__webpack_require__.bind(null, './src/pages/fusionResult/fusionResult.vue'))

生成的 chunk：
├── app.js (主应用)
├── chunk-0.js (fusionResult 页面)
├── chunk-1.js (distributedSearch 页面)
└── ...
```

#### 3.2 优化后的代码分割配置

```javascript
// vue.config.js 完整优化配置
module.exports = {
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',  // 对所有 chunk 进行分割
        cacheGroups: {
          // 1. 基础依赖
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
            reuseExistingChunk: true
          },
          // 2. Vue 核心库
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router|vuex)[\\/]/,
            name: 'vue-vendor',
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true
          },
          // 3. HUI 组件库
          hui: {
            test: /[\\/]node_modules[\\/](hui|@hui-pro)[\\/]/,
            name: 'hui-vendor',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true
          },
          // 4. 地图相关
          himap: {
            test: /[\\/]node_modules[\\/](hi-map-vue|@hi-map)[\\/]/,
            name: 'himap-vendor',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true
          },
          // 5. 搜索组件
          isearchui: {
            test: /[\\/]node_modules[\\/](@isearchui-pro)[\\/]/,
            name: 'isearchui-vendor',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true
          },
          // 6. 播放器
          player: {
            test: /[\\/]node_modules[\\/](simple-player-pro)[\\/]/,
            name: 'player-vendor',
            chunks: 'all',
            priority: 15,
            reuseExistingChunk: true
          }
        }
      }
    }
  }
}
```

**代码分割效果：**
```
优化前：
├── app.js (2.5MB)
├── chunk-vendors.js (1.8MB)

优化后：
├── app.js (500KB)
├── chunk-vue-vendor.js (300KB)
├── chunk-hui-vendor.js (400KB)
├── chunk-himap-vendor.js (350KB)
├── chunk-isearchui-vendor.js (250KB)
├── chunk-player-vendor.js (200KB)
└── 页面 chunks...
```

---

### 四、Webpack Loader 详解

#### 4.1 Babel Loader（JavaScript 转译）

**项目配置：**
```javascript
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',  // Vue CLI 默认配置
    ['@vue/babel-preset-jsx', { injectH: false }]  // JSX 支持
  ],
  sourceType: 'unambiguous'  // 自动检测模块类型
}
```

**转译过程：**
```javascript
// 源代码（ES6+）
import Vue from 'vue'
const App = () => <div>Hello</div>

// Babel 转译后（ES5）
var Vue = require('vue')
var App = function App() {
  return Vue.createElement('div', null, 'Hello')
}
```

#### 4.2 Sass Loader（样式预处理）

**项目配置：**
```javascript
// 依赖版本
"sass": "^1.26.5",
"sass-loader": "^8.0.2"
```

**使用示例：**
```scss
// src/style/index.scss
@import './variables.scss';
@import './mixins.scss';

.main-wrapper {
  @include flex-center();
  background-color: $primary-color;
}
```

#### 4.3 图片处理 Loader

**项目中的图片处理：**
```javascript
// 图片资源导入
import noDataPic from '@/assets/images/png/nodata_lg.png';
import defaultPic from '@/assets/images/png/search_lg.png';

// SVG 处理
import icons from '@hui/svg-icon';
import '@hui/svg-icon/lib/svg-icon.css';
```

**Webpack 图片处理流程：**
```
图片文件
    ↓
url-loader / file-loader
    ↓
小图片 (< 8KB) → base64 内联
大图片 (>= 8KB) → 单独文件
    ↓
输出到 static/images 目录
```

---

### 五、Webpack 代理配置详解

#### 5.1 开发环境代理

**项目配置：**
```javascript
devServer: {
  port: 7005,  // 开发服务器端口
  proxy: {
    // 1. 案件查询接口代理
    '/bsearch-web/case/queryCasePage.do!*': {
      target: collectMock ? COLD_MOCK : TARGET,
      headers: {
        'X-CSRF-TOKEN': TOKEN
      },
      pathRewrite: {
        '/bsearch-web': collectMock ? 'mock/496539/bsearch-web' : '/bsearch-web'
      },
      onProxyReq(a, b, c) {
        a.setHeader('CooKie', COOKIE);
      }
    },
    
    // 2. 主上下文代理
    [`${process.env.VUE_APP_CONTEXT}/*`]: {
      target: TARGET,
      secure: false,
      changeOrigin: true,
      headers: {
        'X-CSRF-TOKEN': TOKEN
      },
      onProxyReq(a, b, c) {
        a.setHeader('CooKie', COOKIE);
      },
      bypass: function(req, res, proxyOptions) {
        if (req.headers.accept.indexOf('html') !== -1) {
          return '/index.html';  // HTML 请求重定向到 index.html
        }
      }
    },
    
    // 3. 其他服务代理（不代理到本地）
    'xmap-web/*': {
      target: ORING_TARGET,
      secure: false,
      changeOrigin: true,
      headers: {
        'X-CSRF-TOKEN': TOKEN
      },
      onProxyReq(a, b, c) {
        a.setHeader('CooKie', COOKIE);
      }
    },
    
    // 4. 地图服务代理
    'imap-web/*': {
      target: ORING_TARGET,
      secure: false,
      changeOrigin: true,
      headers: {
        'X-CSRF-TOKEN': ImapToken
      },
      onProxyReq(a, b, c) {
        a.setHeader('CooKie', COOKIE2);
      }
    }
  }
}
```

**代理工作流程：**
```
浏览器请求：http://localhost:7005/bsearch-web/case/queryCasePage.do
    ↓
Webpack DevServer 拦截
    ↓
添加请求头：
  - X-CSRF-TOKEN: ac5113b8-4cab-4a32-9fa5-acc59fccb586
  - Cookie: JSESSIONID=bBdrCX10MwKgfj15ZaG014poBXntiZ8O3vCgi1XE...
    ↓
转发到后端：https://10.19.176.200/bsearch-web/case/queryCasePage.do
    ↓
返回响应给浏览器
```

---

### 六、Webpack 构建流程详解

#### 6.1 完整构建流程

```
┌─────────────────────────────────────────────────────────────┐
│                      Webpack 构建流程                        │
└─────────────────────────────────────────────────────────────┘

1. 初始化阶段
   ├── 读取配置文件 (vue.config.js)
   ├── 合并配置 (webpack.base.conf + webpack.prod/dev.conf)
   ├── 初始化 Compiler 对象
   └── 注册所有插件

2. 编译阶段
   ├── 从入口文件开始 (src/main.js)
   ├── 解析模块依赖 (import/require)
   ├── 使用 Loader 转换模块
   │   ├── Babel Loader 转换 JS
   │   ├── Sass Loader 转换 SCSS
   │   └── File Loader 处理资源
   └── 生成模块的 AST

3. 优化阶段
   ├── Tree Shaking 移除死代码
   ├── 代码压缩 (TerserPlugin)
   ├── 代码分割 (SplitChunksPlugin)
   └── 作用域提升 (ModuleConcatenationPlugin)

4. 输出阶段
   ├── 生成最终资源
   ├── 写入文件系统
   └── 触发完成钩子
```

#### 6.2 项目构建脚本

```json
// package.json
{
  "scripts": {
    "serve": "vue-cli-service serve",           // 开发服务器
    "build:all": "vue-cli-service build:theme --mode production && vue-cli-service build:i18n && vue-cli-service registry:hui-pro && vue-cli-service build",
    "build": "vue-cli-service build",           // 生产构建
    "build:i18n": "vue-cli-service build:i18n", // 构建国际化
    "build:theme": "vue-cli-service build:theme", // 构建主题
    "registry:hui-pro": "vue-cli-service registry:hui-pro" // 注册 HUI Pro
  }
}
```

**构建流程：**
```bash
# 完整构建流程
npm run build:all

执行顺序：
1. build:theme → 构建主题样式
2. build:i18n  → 构建国际化文件
3. registry:hui-pro → 注册 HUI Pro 组件
4. build       → 构建应用
```

---

## 第二部分：Node.js 详解

### 一、Node.js 在项目中的应用

#### 1.1 Node.js 环境要求

**项目依赖：**
```json
{
  "engines": {
    "node": ">=14.0.0",
    "npm": ">=6.0.0"
  }
}
```

**核心 Node.js 模块使用：**
```javascript
// vue.config.js 中使用的 Node.js 模块
const env = process.env.NODE_ENV;  // 环境变量
const CompressionWebpackPlugin = require('compression-webpack-plugin');  // CommonJS 导入
const webpack = require('webpack');
const path = require('path');  // 路径处理
```

#### 1.2 Node.js 脚本工具

**项目中的 Node.js 脚本：**
```javascript
// 环境变量处理
const isDev = env === 'development';
const page = isDev ? 'index.html' : 'index.ftlh';

// 正则表达式
const productionGzipExtensions = ['js', 'css'];
const testRegex = new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$');
```

---

### 二、Node.js 模块系统详解

#### 2.1 CommonJS 模块系统

**项目中的使用：**
```javascript
// vue.config.js
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');

module.exports = main;  // 导出配置
```

**模块加载机制：**
```
require('compression-webpack-plugin')
    ↓
1. 检查 node_modules 目录
2. 读取 package.json 的 main 字段
3. 加载并执行模块
4. 返回 module.exports
```

#### 2.2 ES Module 与 CommonJS 互操作

**项目中的混用：**
```javascript
// ES Module 导入
import Vue from 'vue';
import './wistom-base';

// CommonJS 导出
module.exports = {
  name: 'search-center',
  version: '2.5.0'
}
```

**Babel 配置支持：**
```javascript
// babel.config.js
module.exports = {
  presets: [
    ['@vue/babel-preset-jsx', { injectH: false }]
  ],
  sourceType: 'unambiguous'  // 自动检测模块类型
}
```

---

### 三、Node.js 文件系统操作

#### 3.1 项目中的文件路径处理

```javascript
// vue.config.js
outputDir: '../../bsearch-web/view/src/main/resources/templates/searchCenter'

// 使用 path 模块处理路径
const path = require('path');
const outputPath = path.resolve(__dirname, '../../bsearch-web/view/src/main/resources/templates/searchCenter');
```

**路径解析：**
```
当前目录：f:/workSpace-2025/PVIA-240/bsearch/bsearch-frontend/search-center
相对路径：../../bsearch-web/view/src/main/resources/templates/searchCenter
解析结果：f:/workSpace-2025/PVIA-240/bsearch/bsearch-web/view/src/main/resources/templates/searchCenter
```

---

### 四、Node.js 进程与环境

#### 4.1 环境变量处理

```javascript
// 读取环境变量
const env = process.env.NODE_ENV;  // development / production
const isDev = env === 'development';

// 自定义环境变量
process.env.VUE_APP_API_URL = 'https://api.example.com';
process.env.VUE_APP_ASSETS = '/static';
```

**环境文件：**
```bash
# .env.development
VUE_APP_API_URL=http://localhost:7005
VUE_APP_ASSETS=/static

# .env.production
VUE_APP_API_URL=https://10.19.176.200
VUE_APP_ASSETS=/bsearch-web/searchCenter/static
```

#### 4.2 子进程使用

**项目中的潜在应用：**
```javascript
const { execSync } = require('child_process');

// 执行 Git 命令获取版本信息
const gitCommit = execSync('git rev-parse --short HEAD').toString().trim();

// 执行构建命令
execSync('vue-cli-service build', { stdio: 'inherit' });
```

---

## 第三部分：权限控制详解

### 一、项目权限控制架构

#### 1.1 权限控制层次

```
┌─────────────────────────────────────────────────────────────┐
│                     权限控制层次                             │
└─────────────────────────────────────────────────────────────┘

1. 销售项权限 (moduleSale)
   ├── faceSale: 人脸搜索权限
   ├── bodySale: 人体搜索权限
   ├── vehicleSale: 车辆搜索权限
   └── nonvehicleSale: 非机动车搜索权限

2. 用户角色权限 (userRole)
   ├── permissions: 权限列表
   ├── isAdmin: 是否管理员
   └── userRoleMap: 角色映射

3. 页面权限 (menuConfig)
   ├── 菜单可见性
   └── 功能可访问性

4. 操作权限 (authMap)
   ├── 创建
   ├── 编辑
   ├── 删除
   └── 查看
```

---

### 二、销售项权限控制

#### 2.1 销售项数据结构

```javascript
// src/store/common/state.js
moduleSale: {
  faceSale: true,        // 人脸销售项
  bodySale: true,        // 人体销售项
  vehicleSale: true,     // 车辆销售项
  nonvehicleSale: true,  // 非机动车销售项
  etcSale: false,        // ETC 销售项
  builtSale: true,       // 体态销售项
  bodyPartShoe: true,    // 鞋子部件
  bodyPartHat: true,     // 帽子部件
  bodyPartBag: true      // 背包部件
}
```

#### 2.2 销售项权限处理逻辑

```javascript
// src/store/common/mutations.js
export default {
  setModuleSale(state, val) {
    state.moduleSale = val;
    const {
      faceSale,
      bodySale,
      vehicleSale,
      nonvehicleSale,
      bodyPartShoe,
      bodyPartHat,
      bodyPartBag
    } = val;
    
    // 构建检测建模类型字符串
    let modelTypes = '';
    if (faceSale) modelTypes += 'face';
    if (bodySale) modelTypes += ',body';
    if (vehicleSale) modelTypes += ',vehicle';
    if (nonvehicleSale) modelTypes += ',nonvehicle';
    if (bodyPartShoe) modelTypes += ',shoe';
    if (bodyPartHat) modelTypes += ',hat';
    if (bodyPartBag) modelTypes += ',bag';
    
    // 设置到 searchConfig
    state.searchConfig.modelTypes = modelTypes;
    
    // 仅含有体态销售项权限的处理
    if (
      !faceSale &&
      !bodySale &&
      !vehicleSale &&
      !nonvehicleSale &&
      !bodyPartShoe &&
      !bodyPartHat &&
      !bodyPartBag &&
      builtSale
    ) {
      state.onlyBuilt = true;  // 只保留体态功能
    }
  }
}
```

**权限判断流程：**
```
用户登录
    ↓
获取销售项信息 (moduleSale)
    ↓
setModuleSale mutation
    ↓
1. 设置 moduleSale 状态
2. 构建 modelTypes 字符串
3. 检查是否只有体态权限
    ↓
组件中根据权限显示/隐藏功能
```

---

### 三、用户角色权限控制

#### 3.1 用户角色数据结构

```javascript
// src/store/common/state.js
userInfo: {
  userId: '123456',
  username: 'admin',
  userRoleMap: {
    noface: false,      // 无脸权限
    nobody: false,      // 无人体权限
    novehicle: false,   // 无车辆权限
    nononmotor: false   // 无非机动车权限
  }
}

userRole: {
  permissions: ['face:search', 'body:search', 'vehicle:search'],
  isAdmin: true
}
```

#### 3.2 权限组合判断

```javascript
// src/mixins/quickSearch.js
computed: {
  ...mapState(['moduleSale', 'userInfo']),
  
  // 人脸权限判断
  hasFacePermission() {
    const { faceSale } = this.moduleSale;
    const { noface = false } = this.userInfo.userRoleMap || {};
    return faceSale && !noface;  // 需要同时满足销售项和角色权限
  },
  
  // 人体权限判断
  hasBodyPermission() {
    const { bodySale } = this.moduleSale;
    const { nobody = false } = this.userInfo.userRoleMap || {};
    return bodySale && !nobody;
  },
  
  // 车辆权限判断
  hasVehiclePermission() {
    const { vehicleSale } = this.moduleSale;
    const { novehicle = false } = this.userInfo.userRoleMap || {};
    return vehicleSale && !novehicle;
  }
}
```

**权限判断逻辑：**
```
销售项权限 (faceSale) = true
    ↓ AND
用户角色权限 (noface) = false
    ↓
最终权限 = true && !false = true (有权限)
```

---

### 四、权限控制在组件中的应用

#### 4.1 条件渲染权限控制

```vue
<!-- 搜索结果页面 -->
<template>
  <div class="search-result">
    <!-- 人脸搜索 -->
    <div v-if="hasFacePermission" class="face-search">
      <face-search-panel />
    </div>
    
    <!-- 人体搜索 -->
    <div v-if="hasBodyPermission" class="body-search">
      <body-search-panel />
    </div>
    
    <!-- 车辆搜索 -->
    <div v-if="hasVehiclePermission" class="vehicle-search">
      <vehicle-search-panel />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['moduleSale', 'userInfo']),
    
    hasFacePermission() {
      const { faceSale } = this.moduleSale;
      const { noface = false } = this.userInfo.userRoleMap || {};
      return faceSale && !noface;
    },
    
    hasBodyPermission() {
      const { bodySale } = this.moduleSale;
      const { nobody = false } = this.userInfo.userRoleMap || {};
      return bodySale && !nobody;
    },
    
    hasVehiclePermission() {
      const { vehicleSale } = this.moduleSale;
      const { novehicle = false } = this.userInfo.userRoleMap || {};
      return vehicleSale && !novehicle;
    }
  }
}
</script>
```

#### 4.2 动态表单权限控制

```javascript
// src/mixins/quickSearch.js
methods: {
  async $G_uploadUrlData({ url, type, limitData }, cb, cluster) {
    // 获取销售项鉴权后的类型
    const {
      faceSale,
      bodySale,
      vehicleSale,
      nonvehicleSale,
      bodyPartShoe,
      bodyPartHat,
      bodyPartBag
    } = this.moduleSale;
    
    const { noface = false, nobody = false, novehicle = false, nononmotor = false } =
      this.userInfo.userRoleMap || {};
    
    // 权限对象
    const permissionObj = {
      face: faceSale && !noface,
      body: bodySale && !nobody,
      vehicle: vehicleSale && !novehicle,
      nonvehicle: nonvehicleSale && !nononmotor,
      shoe: bodyPartShoe && !nobody,
      hat: bodyPartHat && !nobody,
      bag: bodyPartBag && !nobody
    };
    
    // 过滤有权限的类型
    const filterTypes = [];
    const filterTypesExcludesThings = [];
    for (const item of types) {
      if (permissionObj[item]) {
        filterTypes.push(item);
      }
      if (permissionObj[item] && item !== 'shoe' && item !== 'hat' && item !== 'bag') {
        filterTypesExcludesThings.push(item);
      }
    }
    
    // 使用过滤后的类型进行检测建模
    const uploadType = filterTypes;
    const trueTypeList = filterTypesExcludesThings;
    
    // ... 后续处理
  }
}
```

---

### 五、权限控制工具类

#### 5.1 权限检查工具

```javascript
// src/utils/permissionChecker.js
import store from '@/store';

export class PermissionChecker {
  constructor() {
    this.store = store;
  }
  
  /**
   * 检查单个权限
   * @param {string} permission - 权限标识
   * @returns {boolean} 是否有权限
   */
  has(permission) {
    const { userRole, moduleSale } = this.store.state;
    
    // 管理员拥有所有权限
    if (userRole.isAdmin) {
      return true;
    }
    
    // 检查用户角色权限
    if (userRole.permissions && userRole.permissions.includes(permission)) {
      return true;
    }
    
    // 检查销售项权限
    const saleMap = {
      'face:search': moduleSale.faceSale,
      'body:search': moduleSale.bodySale,
      'vehicle:search': moduleSale.vehicleSale,
      'nonvehicle:search': moduleSale.nonvehicleSale,
      'built:search': moduleSale.builtSale
    };
    
    return saleMap[permission] === true;
  }
  
  /**
   * 检查是否有任一权限
   * @param {string[]} permissions - 权限列表
   * @returns {boolean} 是否有任一权限
   */
  hasAny(permissions) {
    return permissions.some(p => this.has(p));
  }
  
  /**
   * 检查是否有所有权限
   * @param {string[]} permissions - 权限列表
   * @returns {boolean} 是否有所有权限
   */
  hasAll(permissions) {
    return permissions.every(p => this.has(p));
  }
}

export const permissionChecker = new PermissionChecker();
```

#### 5.2 权限指令

```javascript
// src/directives/permission.js
import store from '@/store';
import { permissionChecker } from '@/utils/permissionChecker';

export default {
  /**
   * 指令插入时执行
   */
  inserted(el, binding) {
    const { value, arg } = binding;
    const hasPermission = permissionChecker.has(value || arg);
    
    if (!hasPermission) {
      // 移除元素
      el.parentNode && el.parentNode.removeChild(el);
    }
  },
  
  /**
   * 组件更新时执行
   */
  componentUpdated(el, binding) {
    const { value, arg } = binding;
    const hasPermission = permissionChecker.has(value || arg);
    
    if (!hasPermission) {
      // 隐藏元素
      el.style.display = 'none';
    } else {
      // 显示元素
      el.style.display = '';
    }
  }
};

// 注册指令
import Vue from 'vue';
Vue.directive('permission', permissionDirective);
```

**使用示例：**
```vue
<template>
  <div>
    <!-- 基础用法 -->
    <el-button v-permission="'face:search'">人脸搜索</el-button>
    
    <!-- 多个权限 -->
    <el-button v-permission="['face:search', 'body:search']">搜索</el-button>
    
    <!-- 使用参数形式 -->
    <el-button v-permission:face:search>人脸搜索</el-button>
  </div>
</template>
```

---

### 六、路由权限控制

#### 6.1 路由守卫配置

```javascript
// src/router/permission.js
import router from './index';
import store from '@/store';

const whiteList = ['/login', '/404', '/403'];

router.beforeEach(async (to, from, next) => {
  // 1. 检查白名单
  if (whiteList.includes(to.path)) {
    next();
    return;
  }
  
  // 2. 检查登录状态
  if (!store.state.userInfo) {
    next('/login');
    return;
  }
  
  // 3. 检查路由权限
  if (to.meta.permission) {
    const hasPermission = checkRoutePermission(to.meta.permission, store.state);
    if (!hasPermission) {
      next('/403');
      return;
    }
  }
  
  next();
});

/**
 * 检查路由权限
 */
function checkRoutePermission(permission, state) {
  const { userRole, moduleSale } = state;
  
  // 管理员拥有所有权限
  if (userRole.isAdmin) {
    return true;
  }
  
  // 检查用户角色权限
  if (userRole.permissions && userRole.permissions.includes(permission)) {
    return true;
  }
  
  // 检查销售项权限
  const saleMap = {
    'face': moduleSale.faceSale,
    'body': moduleSale.bodySale,
    'vehicle': moduleSale.vehicleSale,
    'nonvehicle': moduleSale.nonvehicleSale
  };
  
  return saleMap[permission] === true;
}
```

#### 6.2 路由配置中的权限

```javascript
// src/router/router.config.js
export default [
  {
    path: '/',
    redirect: '/fusion'
  },
  // 智图研判（需要人脸或人体权限）
  {
    name: 'fusionSearch',
    path: '/fusion',
    component: 'fusionResult/fusionResult',
    meta: {
      permission: ['face:search', 'body:search'],
      requireAny: true  // 满足任一权限即可
    }
  },
  // 分布式检索（需要管理员权限）
  {
    name: 'distributedSearch',
    path: '/distributed',
    component: 'distributedSearch/distributedSearch',
    meta: {
      permission: 'admin',
      requireAny: false
    }
  },
  // 搜索配置（需要配置权限）
  {
    name: 'config',
    path: '/config',
    component: 'config/config',
    meta: {
      permission: 'config:manage',
      requireAny: false
    }
  }
];
```

---

### 七、API 权限控制

#### 7.1 请求拦截器中的权限处理

```javascript
// src/core/httpInstance.js
import axios from 'axios';
import store from '@/store';

const http = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  timeout: 30000
});

// 请求拦截器
http.interceptors.request.use(config => {
  // 1. 添加 CSRF Token
  const token = getToken();
  if (token) {
    config.headers['X-CSRF-TOKEN'] = token;
  }
  
  // 2. 添加权限信息
  if (config.permissionKey) {
    const { userRole } = store.state;
    if (userRole.permissions && userRole.permissions.includes(config.permissionKey)) {
      config.headers['X-Permission'] = config.permissionKey;
    }
  }
  
  return config;
}, error => {
  return Promise.reject(error);
});

// 响应拦截器
http.interceptors.response.use(
  response => {
    // 检查响应中的权限错误
    if (response.data.code === '403') {
      // 权限不足
      showMessage('权限不足', 'error');
      return Promise.reject(new Error('Permission denied'));
    }
    return response.data;
  },
  error => {
    if (error.response) {
      const { status, data } = error.response;
      
      switch (status) {
        case 401:
          // 未授权，跳转到登录
          redirectToLogin();
          break;
        case 403:
          // 禁止访问
          showMessage('无权限访问', 'error');
          break;
        case 404:
          // 资源不存在
          showMessage('资源不存在', 'error');
          break;
        case 500:
          // 服务器错误
          systemError({
            title: data.msg,
            errorCode: data.code,
            traceCode: data.traceCode
          });
          break;
      }
    }
    return Promise.reject(error);
  }
);

export default http;
```

---

### 八、权限控制最佳实践

#### 8.1 权限配置集中管理

```javascript
// src/permissions/config.js
export const permissions = {
  // 页面权限
  pages: {
    fusionSearch: 'page:fusion',
    distributedSearch: 'page:distributed',
    config: 'page:config'
  },
  
  // 功能权限
  features: {
    faceSearch: 'feature:face:search',
    bodySearch: 'feature:body:search',
    vehicleSearch: 'feature:vehicle:search',
    nonvehicleSearch: 'feature:nonvehicle:search',
    builtSearch: 'feature:built:search',
    export: 'feature:export',
    import: 'feature:import'
  },
  
  // 操作权限
  actions: {
    create: 'action:create',
    edit: 'action:edit',
    delete: 'action:delete',
    view: 'action:view'
  }
};

// 权限描述
export const permissionDescriptions = {
  'feature:face:search': '人脸搜索',
  'feature:body:search': '人体搜索',
  'feature:vehicle:search': '车辆搜索',
  'feature:export': '导出功能',
  'action:create': '创建操作',
  'action:edit': '编辑操作',
  'action:delete': '删除操作'
};
```

#### 8.2 权限组件封装

```vue
<!-- src/components/PermissionWrapper.vue -->
<template>
  <template v-if="hasPermission">
    <slot></slot>
  </template>
  <template v-else-if="showPlaceholder">
    <slot name="placeholder">
      <div class="permission-placeholder">
        <i class="el-icon-lock"></i>
        <span>无权限访问</span>
      </div>
    </slot>
  </template>
</template>

<script>
import { permissionChecker } from '@/utils/permissionChecker';

export default {
  name: 'PermissionWrapper',
  props: {
    permission: {
      type: [String, Array],
      required: true
    },
    showPlaceholder: {
      type: Boolean,
      default: false
    },
    requireAll: {
      type: Boolean,
      default: false  // false=任一权限，true=所有权限
    }
  },
  computed: {
    hasPermission() {
      if (Array.isArray(this.permission)) {
        if (this.requireAll) {
          return permissionChecker.hasAll(this.permission);
        }
        return permissionChecker.hasAny(this.permission);
      }
      return permissionChecker.has(this.permission);
    }
  }
}
</script>

<style scoped>
.permission-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px;
  color: #909399;
}

.permission-placeholder i {
  font-size: 48px;
  margin-bottom: 16px;
}
</style>
```

**使用示例：**
```vue
<template>
  <div>
    <!-- 单个权限 -->
    <permission-wrapper permission="feature:face:search">
      <face-search-panel />
    </permission-wrapper>
    
    <!-- 多个权限（任一） -->
    <permission-wrapper :permission="['feature:face:search', 'feature:body:search']">
      <search-button />
    </permission-wrapper>
    
    <!-- 多个权限（所有） -->
    <permission-wrapper 
      :permission="['feature:export', 'feature:import']"
      require-all
    >
      <data-management />
    </permission-wrapper>
    
    <!-- 带占位符 -->
    <permission-wrapper 
      permission="feature:export"
      show-placeholder
    >
      <export-button />
      <template v-slot:placeholder>
        <div class="custom-placeholder">
          请联系管理员开通导出权限
        </div>
      </template>
    </permission-wrapper>
  </div>
</template>
```

---

## 总结

本文详细介绍了项目中使用的 Webpack、Node.js 和权限控制技术：

### Webpack 方面：
1. **配置架构**：vue.config.js 的完整配置解析
2. **插件系统**：CompressionWebpackPlugin、LimitChunkCountPlugin、HtmlWebpackPlugin
3. **代码分割**：路由懒加载、SplitChunksPlugin 配置
4. **Loader 系统**：Babel、Sass、图片处理
5. **代理配置**：开发环境代理、多服务代理
6. **构建流程**：初始化、编译、优化、输出

### Node.js 方面：
1. **模块系统**：CommonJS、ES Module 互操作
2. **文件系统**：路径处理、文件操作
3. **进程环境**：环境变量、子进程

### 权限控制方面：
1. **权限层次**：销售项、用户角色、页面、操作
2. **销售项权限**：moduleSale 状态管理
3. **用户角色权限**：userInfo、userRole
4. **组件权限**：条件渲染、动态表单
5. **权限工具**：PermissionChecker、权限指令
6. **路由权限**：路由守卫、meta 配置
7. **API 权限**：请求拦截器、响应处理
8. **最佳实践**：权限配置、组件封装

这些技术共同构成了项目的完整技术体系，为项目的稳定运行提供了保障。