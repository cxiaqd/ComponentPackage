# 项目网络请求技术详解

---

## 一、网络请求库概览

### 1.1 核心依赖

本项目使用 **Axios** 作为主要网络请求库，版本为 `axios@^0.19.2`。

```json
// package.json
{
  "dependencies": {
    "axios": "^0.19.2"
  }
}
```

### 1.2 网络请求架构

```
┌─────────────────────────────────────────────────────────────┐
│                     网络请求架构                             │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│  应用层 (API 模块)                                          │
│  ├── src/api/feature.js    - 特征搜索 API                   │
│  ├── src/api/image.js      - 图片搜索 API                   │
│  ├── src/api/fusion.js     - 融合搜索 API                   │
│  ├── src/api/platform.js   - 平台 API                       │
│  ├── src/api/map.js        - 地图 API                       │
│  ├── src/api/video.js      - 视频 API                       │
│  ├── src/api/text.js       - 文本搜索 API                   │
│  ├── src/api/track.js      - 轨迹 API                       │
│  ├── src/api/base.js       - 基础数据 API                   │
│  └── ...                                                    │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  核心层 (HTTP 实例)                                         │
│  ├── src/core/httpInstance.js - Axios 实例封装              │
│  │   ├── 请求拦截器                                         │
│  │   ├── 响应拦截器                                         │
│  │   ├── 错误处理                                           │
│  │   └── get/post/upload/download 方法封装                  │
│  └── src/utils/imageManage/imageManage.js - 图片上传工具    │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  配置层                                                     │
│  ├── vue.config.js - Webpack DevServer 代理配置             │
│  └── .env.* - 环境变量配置                                  │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│  网络层                                                     │
│  ├── 后端 API 服务 (https://10.19.176.200)                  │
│  ├── 地图服务 (imap-web)                                    │
│  └── 其他微服务 (xmap-web 等)                               │
└────────────────────────────────────────────────────────────┘
```

---

## 二、HTTP 实例封装详解

### 2.1 Axios 实例创建

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:19)

```javascript
import axios from 'axios';
import Vue from 'vue';
import { Message } from 'hui';
import { trimOnlySpace, isObject } from '@hui-pro/utils';
import { getToken } from '@/utils/common';
import i18n from '@/i18n';
import merge from 'deepmerge';
import errorDialog from '@isearchui-pro/error-dialog';

// 请求头配置
const headers = {
  'X-Requested-With': 'XMLHttpRequest'
};
if (process.env.NODE_ENV !== 'development') {
  headers['X-CSRF-TOKEN'] = getToken();
}

// 创建 Axios 实例
const http = axios.create({
  timeout: 180000,              // 请求超时时间：180 秒
  withCredentials: true,        // 允许跨域携带 Cookie
  headers: headers,             // 请求头
  baseURL: `${process.env.VUE_APP_CONTEXT}/`  // 基础路径
});
```

**配置说明：**

| 配置项 | 值 | 说明 |
|--------|-----|------|
| `timeout` | 180000 | 请求超时时间 3 分钟，适用于大数据量搜索场景 |
| `withCredentials` | true | 跨域请求时携带 Cookie，用于会话保持 |
| `headers` | `{ X-Requested-With, X-CSRF-TOKEN }` | 标识 AJAX 请求，携带 CSRF 令牌 |
| `baseURL` | `process.env.VUE_APP_CONTEXT` | 从环境变量读取基础路径 |

---

### 2.2 请求拦截器

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:114)

```javascript
// 请求拦截器
http.interceptors.request.use(
  function(config) {
    // 所有搜索框可输入元素，都不需要去掉前后空格，
    // 只有仅输入空格时，此字段搜索无效。
    // (规范：http://10.33.43.73/huidesign/bscs/issues/83)
    if (config.method === 'get') {
      config.params = {
        ...config.params,
        _t: Date.now()  // 添加时间戳防止 GET 请求缓存
      };
    }
    // withoutSuffix 为 true 时不默认加.do
    config.url += config.withoutSuffix ? '' : process.env.VUE_APP_API_SUFFIX;
    return trimOnlySpace(config);  // 去除请求参数中的空格
  },
  function(error) {
    return Promise.reject(error);
  }
);
```

**功能说明：**

1. **GET 请求防缓存**：添加时间戳参数 `_t`
   ```javascript
   // 请求前
   config.params = { keyword: 'test' }
   
   // 请求后
   config.params = { keyword: 'test', _t: 1711000000000 }
   ```

2. **URL 后缀处理**：自动添加 `.do` 后缀
   ```javascript
   // 默认情况
   url: 'search/query' → 'search/query.do'
   
   // withoutSuffix: true
   url: 'search/query' → 'search/query'
   ```

3. **空格处理**：使用 `trimOnlySpace` 去除参数空格

---

### 2.3 响应拦截器

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:59)

```javascript
// 响应拦截器
http.interceptors.response.use(
  function(response) {
    // 1. 请求多语言的接口直接返回
    if (/.*\.json$/.test(response.config.url)) {
      return response;
    }
    
    // 2. 获取调用链 traceId
    const traceId = response.headers.traceid || response.headers.traceId;
    if (traceId) {
      response.data.traceCode = traceId;
    }
    
    // 3. 错误处理
    if (response.data.code !== '0') {
      if (!response.config.errorNotNotify && 
          response.config.responseType !== 'blob' && 
          response.data.msg) {
        showError(response.data);  // 统一错误提示
      }
    } 
    // 4. 成功提示
    else if (response.data.code === '0' && response.config.successNotify) {
      Message.success(
        i18n.t(response.config.successMsg) || 
        i18n.t('common.tip.saveSuccess')
      );
    }
    
    return Promise.resolve(response.data);
  },
  function(error) {
    const response = error.response;
    const rp = response.status;
    
    // 获取 traceId
    const traceId = response.headers.traceid || response.headers.traceId;
    if (traceId) {
      response.data.traceCode = traceId;
    }
    
    // 状态码处理
    if (rp === 401 || rp === 403 || rp === 302) {
      if (process.env.NODE_ENV !== 'development') {
        window.location.reload();  // 登录过期刷新页面
      }
    } 
    // 查询频繁限制
    else if (
      (rp === 500 && response.data.code === '0x11902310') ||
      (rp === 500 && response.data.code === '0x06d00e07') ||
      (rp === 500 && response.data.code === '0x129e00015')
    ) {
      Message.error('查询操作频繁，请稍后再试');
    }
    // 服务器错误
    else if (rp === 500 && !response.config.errorNotNotify) {
      showError(response.data);
    }
    // 超时处理
    else if (error.message.indexOf('timeout') > -1) {
      Message.error(i18n.t('common.text.timeoutMsg'));
    }
    // 其他错误
    else if (isObject(response.data) && !response.config.errorNotNotify) {
      showError(response.data);
    }
    
    return Promise.reject(error);
  }
);
```

**响应处理流程：**

```
响应返回
    ↓
是否为.json 文件？
    ├─ 是 → 直接返回 (国际化文件)
    └─ 否 → 继续处理
    ↓
提取 traceId (调用链追踪)
    ↓
检查 response.code
    ├─ code !== '0' → 错误处理
    │   ├─ errorNotNotify = true → 不提示
    │   ├─ responseType = 'blob' → 不提示 (下载文件)
    │   └─ 其他 → showError() 弹窗
    └─ code === '0' → 成功处理
        └─ successNotify = true → Message.success()
```

---

### 2.4 错误提示组件

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:27)

```javascript
function showError({
  type,
  serviceErrorCode,
  code,
  msg,
  traceCode,
  componentId = '',
  componentError = '',
  otherCode = '',
  otherMsg = ''
}) {
  msg = msg || i18n.t('common.text.systemError');
  systemError({
    title: msg,
    errorCode: serviceErrorCode || code,
    traceCode,
    componentId,
    componentError,
    originErrorCode: otherCode,
    originErrorInfo: otherMsg
  });
  
  // 给错误弹窗增加 hikcc_cover="opaque"属性
  // 解决被播放器遮挡问题
  let timeOut = setTimeout(() => {
    const errorDialogDom = document.getElementsByClassName('iu-error-dialog');
    for (const child of errorDialogDom) {
      const parent = child.parentNode;
      parent.setAttribute('hikcc_cover', 'opaque');
    }
    clearTimeout(timeOut);
    timeOut = null;
  }, 100);
}
```

---

### 2.5 封装的 HTTP 方法

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:132)

```javascript
export default {
  // GET 请求
  get(opts) {
    return new Promise((resolve, reject) => {
      const params = { method: 'get' };
      http(merge(params, opts))
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  
  // POST 请求 (JSON)
  post(opts) {
    return new Promise((resolve, reject) => {
      const params = {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
      };
      http(merge(params, opts))
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  
  // 上传请求 (FormData)
  upload(opts) {
    if (getToken() !== '') {
      opts.url += `?_csrf=${getToken()}`;
    }
    const params = {
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' }
    };
    return new Promise((resolve, reject) => {
      http(merge(params, opts))
        .then(res => resolve(res))
        .catch(err => reject(err));
    });
  },
  
  // 下载请求 (Blob)
  download(opts) {
    return new Promise((resolve, reject) => {
      let newParams = {
        method: 'get',
        responseType: 'blob'
      };
      newParams = merge(newParams, opts);
      http(newParams)
        .then(res => {
          const blob = new Blob([res]);
          // 处理 JSON 错误响应
          if (res.type.indexOf('json') > -1) {
            // ... 解析错误信息
          } else {
            // 文件下载处理
            const { params } = newParams;
            const fileName = `${params.fileName}.${params.type}`;
            if ('download' in document.createElement('a')) {
              // 非 IE 下载
              const elink = document.createElement('a');
              elink.download = fileName;
              elink.href = URL.createObjectURL(blob);
              elink.click();
              URL.revokeObjectURL(elink.href);
            } else {
              // IE10+ 下载
              navigator.msSaveBlob(blob, fileName);
            }
          }
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }
};
```

---

## 三、API 模块使用示例

### 3.1 API 模块结构

```
src/api/
├── feature.js        - 特征搜索 (人脸、人体、车辆)
├── image.js          - 图片搜索 (以图搜图、建模)
├── fusion.js         - 融合搜索 (综合查询)
├── platform.js       - 平台服务 (分布式检索)
├── map.js            - 地图服务
├── video.js          - 视频服务 (播放、回放)
├── text.js           - 文本搜索
├── track.js          - 轨迹追踪
├── base.js           - 基础数据 (字典、配置)
├── config.js         - 配置管理
├── collection.js     - 收藏夹
├── export.js         - 导出功能
├── ident.js          - 身份识别
├── tag.js            - 标签管理
└── targetTrack.js    - 目标追踪
```

### 3.2 使用示例

**特征搜索 API：** [`src/api/feature.js`](bsearch-frontend/search-center/src/api/feature.js:1)

```javascript
import http from '@/core/httpInstance';

// 分散查询
function disperse(params) {
  return http.post({
    url: 'search/feature/disperse',
    params
  });
}

// 获取人脸分数
function getFaceScore() {
  return http.get({
    url: 'search/config/faceScore'
  });
}

// 关联查询
function association(params) {
  return http.post({
    url: 'search/feature/association',
    params
  });
}

// 批量关联
function batchAssociation(params) {
  return http.post({
    url: 'search/feature/batchAssociation',
    params
  });
}

// 聚类
function cluster(params) {
  return http.post({
    url: 'feature/cluster',
    params
  });
}

// 分页聚类
function pageCluster(params) {
  return http.post({
    url: 'feature/pageCluster',
    params
  });
}

// 导出
export {
  disperse,
  getFaceScore,
  association,
  batchAssociation,
  cluster,
  pageCluster
};
```

**组件中使用：**

```javascript
import { disperse, association } from '@/api/feature';

export default {
  methods: {
    async handleSearch() {
      try {
        const res = await disperse({
          keyword: 'test',
          startTime: '2024-01-01',
          endTime: '2024-12-31'
        });
        if (res.code === '0') {
          this.searchResult = res.data;
        }
      } catch (error) {
        console.error('搜索失败', error);
      }
    }
  }
}
```

---

## 四、代理配置详解

### 4.1 开发环境代理

**文件位置：** [`vue.config.js`](bsearch-frontend/search-center/vue.config.js)

```javascript
const ORING_TARGET = 'https://10.19.176.200';  // 其他服务代理
const TARGET = 'https://10.19.176.200';        // 本地服务代理
const COLD_MOCK = 'http://xapi.hikvision.com.cn:3000/';  // 模拟地址

devServer: {
  port: 7005,
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
          return '/index.html';  // HTML 请求重定向
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

### 4.2 代理配置说明

| 代理路径 | 目标地址 | 用途 |
|----------|----------|------|
| `/bsearch-web/*` | `https://10.19.176.200` | 主业务接口 |
| `xmap-web/*` | `https://10.19.176.200` | 地图服务 |
| `imap-web/*` | `https://10.19.176.200` | 智图服务 |

---

## 五、其他网络请求方式

### 5.1 Fetch API 使用

**文件位置：** [`src/main.js`](bsearch-frontend/search-center/src/main.js:29)

```javascript
// 微前端远程模块加载
(async function() {
  const res = await fetch('/imap-server/selection/remote-selection-point/hel-meta.json');
  if (res.status !== 200) {
    Vue.use(selectionPointPro);
    store.commit('setSelecetionOline', false);
  }
  const meta = await res.json();
  // ...
})();
```

### 5.2 Axios 直接使用

**文件位置：** [`src/utils/imageManage/imageManage.js`](bsearch-frontend/search-center/src/utils/imageManage/imageManage.js:147)

```javascript
import axios from 'axios';

const uploadHeaders = {
  'Content-Type': 'multipart/form-data'
};

const res = await axios.post('/bsearch-web/img/uploadPicture.do', formData, uploadHeaders);
```

**文件位置：** [`src/core/initApp.js`](bsearch-frontend/search-center/src/core/initApp.js:58)

```javascript
import axios from 'axios';

// 加载国际化文件
const requestUrl = `${assetsUrl}/i18n/${languageId}/${i18nFileName}`;
const res = await axios.get(requestUrl);
i18nJson = res.data;
```

### 5.3 WebSocket 连接

**文件位置：** [`src/utils/helper.js`](bsearch-frontend/search-center/src/utils/helper.js:14)

```javascript
socket = null;
isHttps = window.location.protocol.indexOf('https') > -1;

// WebSocket 连接
const host = this.isHttps && this.opts.type === 'https'
  ? `wss://127.0.0.1:${this.opts.wssPort}/WebS_Js`
  : `ws://127.0.0.1:${this.opts.wsPort}/WebS_Js`;

this.socket = new WebSocket(host);
```

---

## 六、网络请求流程图

```
┌─────────────────────────────────────────────────────────────┐
│                    网络请求完整流程                          │
└─────────────────────────────────────────────────────────────┘

1. 请求发起
   │
   ├─ 组件调用 API 方法
   │   import { disperse } from '@/api/feature'
   │   await disperse(params)
   │
   ├─ API 模块调用 HTTP 实例
   │   return http.post({ url: 'search/feature/disperse', params })
   │
   └─ 请求拦截器处理
       ├─ GET 请求添加时间戳
       ├─ URL 添加.do 后缀
       └─ 去除参数空格

2. 请求发送
   │
   ├─ Axios 实例配置
   │   baseURL + url + params
   │
   ├─ 请求头
   │   X-Requested-With: XMLHttpRequest
   │   X-CSRF-TOKEN: {token}
   │   Cookie: {sessionId}
   │
   └─ 通过 DevServer 代理转发
       /bsearch-web/* → https://10.19.176.200/bsearch-web/*

3. 响应接收
   │
   ├─ 响应拦截器处理
   │   ├─ 提取 traceId
   │   ├─ 检查 code 是否为'0'
   │   └─ 错误/成功提示
   │
   └─ 返回数据
       response.data

4. 错误处理
   │
   ├─ 401/403/302 → 刷新页面 (登录过期)
   ├─ 500 + 特定错误码 → 操作频繁提示
   ├─ 500 → 系统错误弹窗
   ├─ timeout → 超时提示
   └─ 其他 → 统一错误弹窗
```

---

## 七、安全机制

### 7.1 CSRF 防护

```javascript
// 请求头中添加 CSRF Token
const headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'X-CSRF-TOKEN': getToken()  // 从 Cookie 获取
};

// 上传请求在 URL 中添加 CSRF Token
if (getToken() !== '') {
  opts.url += `?_csrf=${getToken()}`;
}
```

### 7.2 Cookie 配置

```javascript
const http = axios.create({
  withCredentials: true,  // 跨域携带 Cookie
  // ...
});
```

---

## 八、性能优化

### 8.1 请求超时设置

```javascript
timeout: 180000  // 3 分钟超时，适用于大数据量搜索
```

### 8.2 GET 请求防缓存

```javascript
if (config.method === 'get') {
  config.params = {
    ...config.params,
    _t: Date.now()  // 时间戳防缓存
  };
}
```

### 8.3 调用链追踪

```javascript
// 从响应头获取 traceId
const traceId = response.headers.traceid || response.headers.traceId;
if (traceId) {
  response.data.traceCode = traceId;  // 传递到业务层
}
```

---

## 总结

本项目网络请求技术要点：

1. **核心库**：Axios 0.19.2
2. **封装层次**：
   - 核心层：`httpInstance.js` - Axios 实例封装
   - API 层：`src/api/*.js` - 业务接口封装
   - 工具层：`imageManage.js` - 图片上传工具
3. **拦截器**：
   - 请求拦截：添加时间戳、URL 后缀、空格处理
   - 响应拦截：错误处理、成功提示、traceId 提取
4. **代理配置**：多服务代理，支持 CSRF Token 和 Cookie 传递
5. **安全机制**：CSRF Token、Cookie 跨域携带
6. **性能优化**：180s 超时、GET 防缓存、调用链追踪