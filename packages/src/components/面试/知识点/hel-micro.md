基于 Vue 技术栈来理解，hel-micro 的核心定位是一样的：**它是一个“模块联邦 SDK 化”方案，让你能在 Vue 项目中，像使用 npm 包一样去加载和复用另一个 Vue 项目（或组件），但实际代码是从 CDN 运行时加载的。**

这样做的好处是：**远程模块更新时，你的主项目无需重新构建和部署**；同时，主项目和子项目可以使用不同的构建工具（如 Webpack、Vite），不会因为工具链不一致而无法复用。

下面我从 Vue 项目的视角，把核心概念和使用方法重新梳理一遍。

---

## 1. 核心概念：用 Vue 的角度理解 hel-micro

hel-micro 的核心可以概括为一句话：**把 Vue 组件做成“远程模块”，然后在运行时动态加载它**。

### 双模块机制

在 hel-micro 的世界里，一个远程 Vue 组件会以两种形式存在：

| 模块类型 | 类比 | 作用 |
|---------|------|------|
| **代理模块**（npm 包） | 一个“空壳” npm 包 | 提供 TypeScript 类型提示，让 Vue 项目在开发时能正常 import，但实际代码体积几乎为 0 |
| **远程模块**（CDN） | 真正的 Vue 组件代码 | 包含完整的业务逻辑，存放在 CDN（如 unpkg）上，运行时动态加载 |

**关键点**：Vue 主项目只需要安装那个“空壳” npm 包（用于类型提示），真正的组件代码在运行时从 CDN 拉取，所以组件更新后主项目无需重新构建。

---

## 2. Vue 项目中的两种使用方式

hel-micro 支持两种加载模式，Vue 项目都可以使用。

### 方式一：懒加载（按需加载）

适合不常用或需要按条件加载的 Vue 组件：

```javascript
import { preFetchLib } from 'hel-micro';

export default {
  methods: {
    async loadRemoteComponent() {
      // 动态加载远程 Vue 组件库
      const remoteModule = await preFetchLib('hel-tpl-remote-vue-comps');
      // 使用加载的组件，例如 remoteModule.Button
      console.log(remoteModule);
    }
  }
}
```

这种方式下，组件只有在调用 `loadRemoteComponent` 时才会被加载。

### 方式二：预加载 + 静态导入（推荐）

这种方式可以获得完整的 IDE 智能提示，体验最接近本地 Vue 组件。

**第一步：改造 Vue 项目入口（如 main.js）**

```javascript
// main.js
import { preFetchLib } from 'hel-micro';
import Vue from 'vue';
import App from './App.vue';

async function main() {
  // 预加载远程模块（建议开启磁盘缓存，提升二次加载速度）
  await preFetchLib('hel-tpl-remote-vue-comps', { enableDiskCache: true });
  
  // 远程模块预加载完成后，再启动 Vue 应用
  new Vue({
    render: h => h(App),
  }).$mount('#app');
}

main().catch(console.error);
```

**第二步：安装代理模块（npm 包）**

```bash
npm install hel-tpl-remote-vue-comps
```

这个包只包含类型定义，体积极小。

**第三步：在 Vue 组件中静态导入并使用**

```vue
<template>
  <div>
    <h1>我的 Vue 应用</h1>
    <!-- 使用远程组件，就像使用本地组件一样 -->
    <Button type="primary">来自远程的按钮</Button>
  </div>
</template>

<script>
// 静态导入，获得完整的类型提示
import remoteLib from 'hel-tpl-remote-vue-comps';

export default {
  components: {
    // 将远程组件注册为本地组件
    Button: remoteLib.Button
  }
}
</script>
```

> ⚠️ **注意**：预加载模式下，必须确保 `preFetchLib` 在 Vue 应用启动前执行完毕，否则静态导入会失败。

---

## 3. 制作并发布一个 Vue 远程组件

如果你想把自己的 Vue 组件做成 hel-micro 远程模块，官方提供了专门的 Vue 模板。

### 步骤一：克隆 Vue 模板

```bash
git clone https://github.com/hel-eco/hel-tpl-remote-vue-comp.git my-vue-remote
cd my-vue-remote
```

### 步骤二：修改配置

**修改 package.json**：
```json
{
  "name": "my-vue-remote",      // 模块名
  "appGroupName": "my-vue-remote"
}
```

**修改 src/configs/subApp.ts**：
```typescript
export const LIB_NAME = 'my-vue-remote';
```

### 步骤三：开发 Vue 组件

在 `src/components` 目录下开发你的 Vue 组件，并在 `src/components/index.ts` 中导出：

```typescript
// src/components/index.ts
import Button from './Button.vue';
import Input from './Input.vue';

export default {
  Button,
  Input
};
```

### 步骤四：调整 appInfo.js（Vue 项目专用）

Vue 项目的配置文件在根目录下，而非 `/configs` 目录：

```javascript
// appInfo.js
const helDevUtils = require('hel-dev-utils');
const pkg = require('./package.json');

// 托管到 unpkg CDN
const subApp = helDevUtils.createVueSubApp(pkg, { npmCdnType: 'unpkg' });

module.exports = subApp;
```

### 步骤五：发布

```bash
npm run build   # 构建产物
npm publish     # 发布到 npm（同时会推送到 unpkg CDN）
```

> 发布后，unpkg 可能会有十几秒的生效延迟，可通过访问 `https://unpkg.com/my-vue-remote@latest/hel_dist/hel-meta.json` 确认是否生效。

---

## 4. Vue 专属适配层：hel-micro-vue（可选）

hel-micro 官方正在开发 Vue 的专属适配层 `hel-micro-vue`，主要提供以下增强功能：

- **样式隔离**：通过 Shadow DOM 实现组件样式隔离，避免 CSS 冲突
- **组件懒加载**：以 Vue 异步组件的形式懒加载远程组件，加载过程中可显示骨架屏
- **完整应用弹射**：可将整个 Vue 应用弹射给调用者，实现“单 Vue 运行时”的微前端架构

> ⚠️ 目前 `hel-micro-vue` 还在开发中，如果不需要样式隔离和懒加载特性，直接使用 `hel-micro` 的核心 API（`preFetchLib`）即可满足大部分需求。

---

## 5. 总结对比：Vue 项目中的 hel-micro

| 特性 | 传统 npm 包方式 | hel-micro 方式 |
|------|---------------|----------------|
| 组件更新 | 需重新安装 npm 包 + 重新构建部署主项目 | 组件发布后，主项目自动生效，无需重新构建 |
| 构建工具一致性 | 主项目和子项目构建工具需兼容 | 主项目用 Vite、子项目用 Webpack 也可以混用 |
| 类型提示 | 完整（npm 包自带） | 通过代理模块获得完整类型提示 |
| 首屏性能 | 组件打包进主项目，体积大 | 组件按需/预加载，可拆分为独立 chunk |
| 适用场景 | 稳定、不常变的基础组件 | 需要高频迭代、跨团队复用的业务组件 |

简单来说，hel-micro 让 Vue 项目也能享受到“模块联邦”带来的**独立部署、热更新、工具链无关**的红利，同时保留了 npm 包开发时的类型提示体验。


根据官方文档，hel-micro 的核心API主要围绕**模块加载**、**实例定制**和**类型定义**展开。以下是按功能分类的完整API清单：

---

## 1. 核心加载API

| API | 用途 | 返回值 | 使用场景 |
|-----|------|--------|---------|
| **`preFetchLib`** | 加载远程模块（组件库/工具库） | 模块导出对象 | 加载远程组件库、工具函数 |
| **`preFetchApp`** | 加载远程应用（完整微应用） | 应用组件/入口 | 加载独立子应用 |
| **`batchPreFetchLib`** | 批量加载多个远程模块 | 模块导出对象数组 | 同时加载多个依赖模块 |

### 使用示例
```javascript
import helMicro from 'hel-micro';

// 懒加载远程库
const lib = await helMicro.preFetchLib('hel-tpl-remote-lib');

// 批量加载
const [lib1, lib2] = await helMicro.batchPreFetchLib(['module-a', 'module-b']);
```


## 2. 实例定制API

### **`createInstance`**
用于创建自定义配置的 hel-micro 实例，适合需要针对不同平台或环境预设参数的业务场景。

```javascript
import { createInstance } from 'hel-micro';

// 为特定平台创建定制实例
const ins = createInstance('myplat', {
  getApiPrefix() {
    return 'https://myhost.com';  // 自定义CDN地址
  }
});

// 使用定制实例加载模块
const lib = await ins.preFetchLib('my-module');
```

### 预设参数说明
| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `apiPrefix` | string | `'https://unpkg.com'` | CDN请求域名前缀 |
| `getApiPrefix` | function | - | 动态获取API前缀（优先级高于`apiPrefix`） |
| `semverApi` | boolean | `true` | `true`: 使用语义化版本API；`false`: 使用自定义平台API |
| `versionId` | string | - | 指定拉取的版本号 |
| `enableDiskCache` | boolean | `false` | 是否开启磁盘缓存（提升二次加载速度） |
| `appendCss` | boolean | `true` | 是否自动附加远程模块的CSS样式 |
| `shadow` | boolean | `false` | 是否启用Shadow DOM样式隔离 |


## 3. 高级配置API

### 自定义元数据获取函数
完全接管元数据的获取逻辑，适用于对接内部版本管理平台：

```javascript
await preFetchLib('my-module', {
  getSubAppAndItsVersionFn: async (params) => {
    // 自定义请求逻辑
    const response = await fetch(`/api/module/${params.appName}`);
    return response.json();
  }
});
```

### 生命周期钩子
| 钩子 | 触发时机 | 用途 |
|------|---------|------|
| `hook.onFetchMetaSuccess` | 元数据获取成功 | 埋点上报、日志记录 |
| `hook.onFetchMetaFailed` | 元数据获取失败（可返回兜底数据） | 容灾降级 |
| `hook.beforeAppendAssetNode` | 资源节点插入DOM前 | 修改资源URL、添加自定义属性 |


## 4. 辅助工具API（hel-dev-utils）

这些是构建工具类API，用于**发布远程模块时生成元数据**，而非运行时使用。

| API | 用途 |
|-----|------|
| **`extractHelMetaJson`** | 从构建产物中提取`hel-meta.json`元数据文件 |
| **`createVueSubApp`** | 创建Vue远程模块配置 |
| **`createReactSubApp`** | 创建React远程模块配置 |

### 元数据提取示例
```javascript
const helDevUtils = require('hel-dev-utils');

helDevUtils.extractHelMetaJson({
  appInfo,                 // 应用配置
  buildDirFullPath,        // 构建产物目录
  packageJson,             // package.json内容
  extractMode: 'all',      // 提取模式：all / build / all_no_html / build_no_html
  enableRelativePath: false // 是否记录相对路径资源
});
```


## 5. React专用Hook（hel-micro-react）

虽然你问的是Vue技术栈，但补充说明：hel-micro为React提供了专用Hook：

```javascript
import { useRemoteComp } from 'hel-micro-react';

function App() {
  const { Comp, loading } = useRemoteComp('hel-remote-button');
  if (loading) return <div>Loading...</div>;
  return <Comp />;
}
```

Vue项目可直接使用核心API `preFetchLib` 加载远程Vue组件，无需专用适配层。


## 快速参考卡片

| 使用场景 | 推荐API |
|---------|---------|
| 懒加载远程组件/库 | `preFetchLib` |
| 批量加载多个模块 | `batchPreFetchLib` |
| 对接内部CDN/版本平台 | `createInstance` + `getSubAppAndItsVersionFn` |
| 生产环境性能优化 | 设置 `enableDiskCache: true` |
| 样式隔离需求 | 设置 `shadow: true` |
| 发布远程模块 | `extractHelMetaJson`（构建时） |

> 官方文档：[helmicro.com](https://helmicro.com/hel/)
> NPM包：`hel-micro`、`hel-dev-utils`