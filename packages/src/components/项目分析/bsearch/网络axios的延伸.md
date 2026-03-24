# Axios 深入讨论点与延伸知识

---

## 一、Axios 核心原理

### 1.1 Axios 架构设计

```
┌─────────────────────────────────────────────────────────────┐
│                      Axios 架构                              │
└─────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────┐
│                     调用层 (API)                            │
│  http.get() / http.post() / http.upload() / http.download()│
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│                    调度层 (Adapter)                         │
│  ├── 默认适配器: http://www.npmjs.com/package/axios        │
│  ├── Node.js 适配器: http://www.npmjs.com/package/form-data│
│  └── 自定义适配器: 自定义实现 XHR/Http                       │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│                     核心层 (Core)                           │
│  ├── dispatchRequest() - 发送请求                           │
│  ├── InterceptorManager - 拦截器管理                        │
│  └── Promise 链式调用                                       │
└────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────┐
│                   传输层 (Transport)                        │
│  ├── 浏览器: XMLHttpRequest                                 │
│  └── Node.js: http / https 模块                            │
└────────────────────────────────────────────────────────────┘
```

### 1.2 源码核心流程

```javascript
// Axios 核心实现伪代码
class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  // 核心请求方法
  async request(config) {
    // 1. 合并配置
    config = mergeConfig(this.defaults, config);
    
    // 2. 请求拦截器链
    const requestInterceptorChain = [];
    this.interceptors.request.forEach(interceptor => {
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 3. 响应拦截器链
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(interceptor => {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 4. 构建 Promise 链
    let promise = Promise.resolve(config);
    
    // 添加请求拦截器
    requestInterceptorChain.forEach(fulfilled => {
      promise = promise.then(fulfilled);
    });
    
    // 添加发送请求
    promise = promise.then(() => dispatchRequest(config));
    
    // 添加响应拦截器
    responseInterceptorChain.forEach(fulfilled => {
      promise = promise.then(fulfilled);
    });
    
    return promise;
  }
}
```

### 1.3 项目中的实际使用

```javascript
// src/core/httpInstance.js
const http = axios.create({
  timeout: 180000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': getToken()
  },
  baseURL: `${process.env.VUE_APP_CONTEXT}/`
});
```

---

## 二、拦截器深入讨论

### 2.1 拦截器执行顺序

```
请求拦截器执行顺序 (后进先出 LIFO)
┌────────────────────────────────────────────────────────────┐
│  请求发起                                                   │
│  ↓                                                         │
│  [请求拦截器3] → [请求拦截器2] → [请求拦截器1]              │
│  (最后注册的先执行)                                         │
│  ↓                                                         │
│  发送请求到服务器                                           │
│  ↓                                                         │
│  [响应拦截器1] → [响应拦截器2] → [响应拦截器3]              │
│  (先进先出 FIFO)                                            │
│  ↓                                                         │
│  业务代码接收响应                                           │
└────────────────────────────────────────────────────────────┘
```

**项目中拦截器注册顺序：**

```javascript
// 1. 请求拦截器 (后进先出)
http.interceptors.request.use(
  function(config) { /* 添加时间戳 */ },
  function(error) { /* 请求错误处理 */ }
);

// 2. 响应拦截器 (先进先出)
http.interceptors.response.use(
  function(response) { /* 响应成功处理 */ },
  function(error) { /* 响应错误处理 */ }
);
```

### 2.2 请求拦截器应用场景

```javascript
// 场景1: 添加 Loading
http.interceptors.request.use(config => {
  if (config.showLoading) {
    Loading.service({ fullscreen: true });
  }
  return config;
});

// 场景2: 请求取消标记
let pendingRequests = new Map();
http.interceptors.request.use(config => {
  const requestKey = `${config.method}:${config.url}`;
  
  // 取消重复请求
  if (pendingRequests.has(requestKey)) {
    pendingRequests.get(requestKey)();
    pendingRequests.delete(requestKey);
  }
  
  // 创建取消函数
  const cancelToken = new axios.CancelToken(cancel => {
    pendingRequests.set(requestKey, cancel);
  });
  
  config.cancelToken = cancelToken;
  return config;
});

// 场景3: 请求重试
http.interceptors.response.use(null, async error => {
  const config = error.config;
  if (!config || !config.retry) {
    return Promise.reject(error);
  }
  
  config.__retryCount = config.__retryCount || 0;
  
  if (config.__retryCount >= config.retry) {
    return Promise.reject(error);
  }
  
  config.__retryCount += 1;
  return new Promise(resolve => {
    setTimeout(() => resolve(http(config)), config.retryDelay || 1000);
  });
});
```

### 2.3 响应拦截器应用场景

```javascript
// 场景1: 统一错误处理
http.interceptors.response.use(
  response => response,
  error => {
    const status = error.response?.status;
    const errorMap = {
      400: '请求参数错误',
      401: '登录已过期',
      403: '没有权限',
      404: '资源不存在',
      500: '服务器错误'
    };
    Message.error(errorMap[status] || '网络错误');
    return Promise.reject(error);
  }
);

// 场景2: 统一业务错误处理
http.interceptors.response.use(response => {
  const { code, msg } = response.data;
  if (code !== '0') {
    // 业务错误处理
    if (code === '0x11902310') {
      Message.warning('查询过于频繁，请稍后重试');
    }
    return Promise.reject(new Error(msg));
  }
  return response;
});

// 场景3: 缓存响应数据
const cache = new Map();
http.interceptors.response.use(response => {
  if (response.config.cache && response.config.method === 'get') {
    const key = response.config.url;
    cache.set(key, {
      data: response.data,
      timestamp: Date.now()
    });
  }
  return response;
});
```

---

## 三、错误处理机制

### 3.1 项目中的错误处理流程

```javascript
// src/core/httpInstance.js 第 82-111 行
function(error) {
  const response = error.response;
  const rp = response.status;
  
  // 1. 登录过期处理
  if (rp === 401 || rp === 403 || rp === 302) {
    if (process.env.NODE_ENV !== 'development') {
      window.location.reload();
    }
  }
  
  // 2. 业务错误码处理
  else if (
    (rp === 500 && response.data.code === '0x11902310') ||  // 查询频繁
    (rp === 500 && response.data.code === '0x06d00e07') ||
    (rp === 500 && response.data.code === '0x129e00015')
  ) {
    Message.error('查询操作频繁，请稍后再试');
  }
  
  // 3. 服务器错误
  else if (rp === 500 && !response.config.errorNotNotify) {
    showError(response.data);
  }
  
  // 4. 超时错误
  else if (error.message.indexOf('timeout') > -1) {
    Message.error(i18n.t('common.text.timeoutMsg'));
  }
  
  // 5. 其他错误
  else if (isObject(response.data) && !response.config.errorNotNotify) {
    showError(response.data);
  }
  
  return Promise.reject(error);
}
```

### 3.2 错误类型分类

```
┌─────────────────────────────────────────────────────────────┐
│                     Axios 错误类型                           │
└─────────────────────────────────────────────────────────────┘

1. 请求错误 (Request Error)
   ├── 配置错误: config 参数不正确
   ├── 取消请求: CancelToken 触发取消
   └── 网络中断: 浏览器离线

2. 响应错误 (Response Error)
   ├── HTTP 4xx: 客户端错误
   │   ├── 400: 请求参数错误
   │   ├── 401: 未授权
   │   ├── 403: 禁止访问
   │   └── 404: 资源不存在
   │
   └── HTTP 5xx: 服务器错误
       ├── 500: 服务器内部错误
       ├── 502: 网关错误
       └── 503: 服务不可用

3. 超时错误 (Timeout Error)
   └── 请求超过 timeout 设置的时间

4. 取消错误 (Cancel Error)
   └── 手动调用 cancel() 取消请求
```

### 3.3 优雅的错误处理封装

```javascript
// utils/httpErrorHandler.js

class HttpErrorHandler {
  constructor() {
    this.errorHandlers = new Map();
    this.initDefaultHandlers();
  }
  
  initDefaultHandlers() {
    // 400 错误
    this.register(400, (error) => {
      Message.error('请求参数错误，请检查输入');
      return Promise.reject(error);
    });
    
    // 401 错误 - 跳转登录
    this.register(401, (error) => {
      store.dispatch('user/logout');
      Message.error('登录已过期，请重新登录');
      return Promise.reject(error);
    });
    
    // 403 错误
    this.register(403, (error) => {
      Message.error('您没有权限执行此操作');
      return Promise.reject(error);
    });
    
    // 404 错误
    this.register(404, (error) => {
      Message.error('请求的资源不存在');
      return Promise.reject(error);
    });
    
    // 500 错误
    this.register(500, (error) => {
      Message.error('服务器内部错误，请稍后重试');
      return Promise.reject(error);
    });
    
    // 超时错误
    this.register('TIMEOUT', (error) => {
      Message.error('请求超时，请检查网络');
      return Promise.reject(error);
    });
    
    // 网络错误
    this.register('NETWORK_ERROR', (error) => {
      Message.error('网络连接失败，请检查网络');
      return Promise.reject(error);
    });
  }
  
  register(code, handler) {
    this.errorHandlers.set(code, handler);
  }
  
  handle(error) {
    const response = error.response;
    const status = response?.status;
    const message = error.message;
    
    // 超时错误
    if (message.includes('timeout')) {
      return this.errorHandlers.get('TIMEOUT')?.(error);
    }
    
    // 网络错误
    if (!response) {
      return this.errorHandlers.get('NETWORK_ERROR')?.(error);
    }
    
    // HTTP 状态码错误
    const handler = this.errorHandlers.get(status);
    if (handler) {
      return handler(error);
    }
    
    // 默认处理
    return Promise.reject(error);
  }
}

export const httpErrorHandler = new HttpErrorHandler();
```

---

## 四、请求取消机制

### 4.1 CancelToken 原理

```javascript
// CancelToken 实现原理
class CancelToken {
  constructor(executor) {
    let resolvePromise;
    
    this.promise = new Promise(resolve => {
      resolvePromise = resolve;
    });
    
    executor(message => {
      if (this.reason) return;
      this.reason = { message, __CANCEL__: true };
      resolvePromise(this.reason);
    });
  }
  
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
}
```

### 4.2 项目中的应用场景

```javascript
// 场景1: 防止重复请求
class RequestDeduplicator {
  constructor() {
    this.pendingRequests = new Map();
  }
  
  add(config) {
    const key = this.getKey(config);
    
    if (this.pendingRequests.has(key)) {
      // 取消之前的请求
      this.pendingRequests.get(key)();
    }
    
    // 创建新的 CancelToken
    return new Promise((resolve) => {
      const cancelToken = new axios.CancelToken(cancel => {
        this.pendingRequests.set(key, cancel);
      });
      
      config.cancelToken = cancelToken;
      resolve(config);
    });
  }
  
  remove(config) {
    const key = this.getKey(config);
    this.pendingRequests.delete(key);
  }
  
  getKey(config) {
    return `${config.method}:${config.url}:${JSON.stringify(config.params)}`;
  }
}

export const requestDeduplicator = new RequestDeduplicator();
```

### 4.3 路由切换取消请求

```javascript
// mixins/cancelRequest.js
export default {
  data() {
    return {
      pendingRequests: []
    };
  },
  
  methods: {
    addPendingRequest(config) {
      const cancelToken = new axios.CancelToken(cancel => {
        this.pendingRequests.push({
          url: config.url,
          cancel
        });
      });
      config.cancelToken = cancelToken;
    },
    
    clearPendingRequests() {
      this.pendingRequests.forEach(request => {
        request.cancel('路由切换，取消请求');
      });
      this.pendingRequests = [];
    }
  },
  
  beforeRouteLeave(to, from, next) {
    this.clearPendingRequests();
    next();
  },
  
  beforeDestroy() {
    this.clearPendingRequests();
  }
};
```

---

## 五、并发请求处理

### 5.1 项目中的并发场景

```javascript
// 场景1: 同时获取多个字典数据
async function loadDictionaryData() {
  const [regionData, brandData, colorData] = await Promise.all([
    http.get({ url: 'dict/getCityRegion' }),
    http.get({ url: 'dict/getVehicleBrand' }),
    http.get({ url: 'dict/getVehicleColor' })
  ]);
  
  return { regionData, brandData, colorData };
}

// 场景2: 并行搜索多个目标
async function parallelSearch(params) {
  const searchPromises = [
    faceSearch(params),    // 人脸搜索
    bodySearch(params),    // 人体搜索
    vehicleSearch(params)  // 车辆搜索
  ];
  
  const results = await Promise.allSettled(searchPromises);
  
  return {
    face: results[0].status === 'fulfilled' ? results[0].value : null,
    body: results[1].status === 'fulfilled' ? results[1].value : null,
    vehicle: results[2].status === 'fulfilled' ? results[2].value : null
  };
}

// 场景3: 请求池控制
class RequestPool {
  constructor(limit = 5) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }
  
  async add(requestFn) {
    return new Promise((resolve, reject) => {
      const task = async () => {
        this.running++;
        try {
          const result = await requestFn();
          resolve(result);
        } catch (error) {
          reject(error);
        } finally {
          this.running--;
          this.next();
        }
      };
      
      if (this.running < this.limit) {
        task();
      } else {
        this.queue.push(task);
      }
    });
  }
  
  next() {
    if (this.queue.length > 0) {
      const task = this.queue.shift();
      task();
    }
  }
}
```

---

## 六、性能优化

### 6.1 请求缓存

```javascript
// utils/requestCache.js
class RequestCache {
  constructor(maxAge = 5 * 60 * 1000) { // 默认5分钟
    this.cache = new Map();
    this.maxAge = maxAge;
  }
  
  getKey(config) {
    return `${config.method}:${config.url}:${JSON.stringify(config.params)}`;
  }
  
  get(config) {
    const key = this.getKey(config);
    const cached = this.cache.get(key);
    
    if (cached && Date.now() - cached.timestamp < this.maxAge) {
      return cached.data;
    }
    
    return null;
  }
  
  set(config, data) {
    const key = this.getKey(config);
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  clear() {
    this.cache.clear();
  }
}

export const requestCache = new RequestCache();

// 使用
http.interceptors.response.use(response => {
  if (response.config.cache) {
    requestCache.set(response.config, response.data);
  }
  return response;
});
```

### 6.2 分页请求优化

```javascript
// 预加载下一页数据
class PrefetchPager {
  constructor(fetchFn, options = {}) {
    this.fetchFn = fetchFn;
    this.pageSize = options.pageSize || 20;
    this.prefetchThreshold = options.prefetchThreshold || 3;
    this.currentPage = 1;
    this.loading = false;
    this.hasMore = true;
    this.data = [];
  }
  
  async loadMore() {
    if (this.loading || !this.hasMore) return;
    
    this.loading = true;
    try {
      const result = await this.fetchFn({
        page: this.currentPage,
        pageSize: this.pageSize
      });
      
      this.data = [...this.data, ...result.data.list];
      this.hasMore = result.data.hasMore;
      this.currentPage++;
      
      // 预加载下一页
      if (this.currentPage <= this.prefetchThreshold) {
        this.loadMore();
      }
    } finally {
      this.loading = false;
    }
  }
}
```

### 6.3 大文件上传分片

```javascript
// utils/uploadFile.js
class ChunkUploader {
  constructor(file, options = {}) {
    this.file = file;
    this.chunkSize = options.chunkSize || 2 * 1024 * 1024; // 2MB
    this.concurrency = options.concurrency || 3;
  }
  
  async upload(onProgress) {
    const chunks = this.createChunks();
    const uploadedChunks = [];
    
    // 分片上传
    for (let i = 0; i < chunks.length; i += this.concurrency) {
      const batch = chunks.slice(i, i + this.concurrency);
      const results = await Promise.all(
        batch.map(chunk => this.uploadChunk(chunk, i))
      );
      uploadedChunks.push(...results);
      
      // 进度更新
      if (onProgress) {
        const progress = (uploadedChunks.length / chunks.length) * 100;
        onProgress(progress);
      }
    }
    
    // 合并分片
    return this.mergeChunks(uploadedChunks);
  }
  
  createChunks() {
    const chunks = [];
    let start = 0;
    while (start < this.file.size) {
      const end = Math.min(start + this.chunkSize, this.file.size);
      chunks.push(this.file.slice(start, end));
      start = end;
    }
    return chunks;
  }
  
  async uploadChunk(chunk, index) {
    const formData = new FormData();
    formData.append('chunk', chunk);
    formData.append('index', index);
    formData.append('filename', this.file.name);
    
    return http.upload({
      url: 'upload/chunk',
      data: formData
    });
  }
}
```

---

## 七、安全相关

### 7.1 CSRF 防护机制

```javascript
// 项目中的 CSRF 配置
const headers = {
  'X-Requested-With': 'XMLHttpRequest'
};

if (process.env.NODE_ENV !== 'development') {
  headers['X-CSRF-TOKEN'] = getToken(); // 从 Cookie 获取
}

// 完整 CSRF 防护实现
class CSRFProtection {
  static getToken() {
    const name = 'XSRF-TOKEN';
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [key, value] = cookie.trim().split('=');
      if (key === name) {
        return decodeURIComponent(value);
      }
    }
    return '';
  }
  
  static setup() {
    axios.interceptors.request.use(config => {
      const token = this.getToken();
      if (token && config.method !== 'get') {
        config.headers['X-CSRF-TOKEN'] = token;
      }
      return config;
    });
  }
}
```

### 7.2 请求签名

```javascript
// utils/requestSigner.js
class RequestSigner {
  static sign(config, secretKey) {
    const timestamp = Date.now();
    const nonce = this.generateNonce();
    
    // 签名内容
    const signContent = [
      config.method,
      config.url,
      timestamp,
      nonce,
      config.data ? JSON.stringify(config.data) : ''
    ].join('&');
    
    const signature = this.hmacSha256(signContent, secretKey);
    
    config.headers['X-Timestamp'] = timestamp;
    config.headers['X-Nonce'] = nonce;
    config.headers['X-Signature'] = signature;
    
    return config;
  }
  
  static hmacSha256(content, key) {
    // 使用 crypto-js 或其他加密库
    return CryptoJS.HmacSHA256(content, key).toString();
  }
  
  static generateNonce() {
    return Math.random().toString(36).substring(2, 15);
  }
}
```

---

## 八、测试相关

### 8.1 Mock 拦截器

```javascript
// tests/__mocks__/axios.js
import mockData from './mockData.json';

export default {
  defaults: {
    adapter: jest.fn((config) => {
      return Promise.resolve({
        data: mockData[config.url] || {},
        status: 200,
        statusText: 'OK',
        headers: {},
        config
      });
    })
  },
  
  create: jest.fn(() => ({
    get: jest.fn(),
    post: jest.fn(),
    interceptors: {
      request: { use: jest.fn() },
      response: { use: jest.fn() }
    }
  }))
};
```

### 8.2 单元测试示例

```javascript
// tests/unit/httpInstance.spec.js
import http from '@/core/httpInstance';

describe('httpInstance', () => {
  describe('get', () => {
    it('应该发送 GET 请求', async () => {
      const mockData = { code: '0', data: { list: [] } };
      jest.spyOn(axios, 'create').mockImplementation(() => ({
        get: jest.fn().mockResolvedValue(mockData)
      }));
      
      const result = await http.get({ url: 'test' });
      expect(result.code).toBe('0');
    });
    
    it('应该处理请求错误', async () => {
      const error = new Error('Network Error');
      error.response = { status: 500 };
      
      await expect(http.get({ url: 'test' })).rejects.toThrow();
    });
  });
});
```

---

## 九、面试常见问题

### 9.1 基础问题

```javascript
// Q1: axios 相比 fetch API 的优势是什么？
/*
1. 自动转换 JSON 数据
2. 支持请求/响应拦截器
3. 支持请求取消
4. 支持进度监听
5. 浏览器兼容性更好
6. 支持超时设置
7. 支持 HTTP 认证
8. 支持请求/响应数据转换
*/

// Q2: axios 内部实现原理？
/*
1. 使用 XMLHttpRequest 发送请求
2. Promise 链式调用处理拦截器
3. dispatchRequest 方法调度适配器
4. 支持浏览器和 Node.js 双环境
*/

// Q3: 如何取消 axios 请求？
/*
使用 CancelToken:
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

axios.get('/user/12345', {
  cancelToken: source.token
});

source.cancel('取消原因');
*/
```

### 9.2 进阶问题

```javascript
// Q4: axios 如何实现请求重试？
/*
通过响应拦截器捕获错误，检查配置中的 retry 参数，
使用 setTimeout 延迟后重新发送请求。
*/

// Q5: axios 批量请求如何实现？
/*
使用 Promise.all 或 Promise.allSettled:
const [user, order] = await Promise.all([
  axios.get('/user'),
  axios.get('/order')
]);
*/

// Q6: axios 拦截器中如何处理异步操作？
/*
请求/响应拦截器都支持返回 Promise:
axios.interceptors.request.use(async config => {
  const token = await getToken();
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
*/
```

### 9.3 实际场景问题

```javascript
// Q7: 如何处理 axios 的重复请求？
/*
1. 使用 Map 存储请求标识和 CancelToken
2. 在请求拦截器中检查并取消重复请求
3. 在请求完成后删除 Map 中的记录
*/

// Q8: axios 如何实现文件上传进度？
/*
使用 onUploadProgress 和 onDownloadProgress:
axios.post('/upload', formData, {
  onUploadProgress: progressEvent => {
    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
    console.log(`上传进度: ${percent}%`);
  }
});
*/

// Q9: axios 在 Vue 项目中的最佳实践？
/*
1. 封装独立的 HTTP 模块
2. 统一处理错误和 Loading
3. 使用请求/响应拦截器
4. 配置合理的超时时间
5. 实现请求取消防止内存泄漏
*/
```

---

## 十、最佳实践总结

### 10.1 项目中的最佳实践

```javascript
// 1. 统一的 HTTP 实例封装
// src/core/httpInstance.js 已实现

// 2. 分类清晰的 API 模块
// src/api/feature.js, image.js, fusion.js 等

// 3. 合理的错误处理
// 响应拦截器中统一处理

// 4. 安全的 CSRF 防护
// 请求头中携带 Token

// 5. 适当的超时设置
// 180000ms (3分钟) 适合大数据量搜索
```

### 10.2 可改进的方向

```javascript
// 1. 增加请求重试机制
// 2. 实现请求缓存
// 3. 添加请求去重
// 4. 实现自动刷新 Token
// 5. 添加完整的单元测试
// 6. 使用 TypeScript 重写
```

---

## 总结

本文深入探讨了项目中 Axios 使用的各个方面：

1. **核心原理**：Axios 架构设计、源码流程
2. **拦截器**：请求/响应拦截器执行顺序和应用场景
3. **错误处理**：项目中的错误处理机制和封装
4. **请求取消**：CancelToken 原理和应用
5. **并发处理**：Promise.all 和请求池控制
6. **性能优化**：缓存、分页、大文件上传
7. **安全机制**：CSRF 防护和请求签名
8. **测试**：Mock 和单元测试
9. **面试问题**：常见问题汇总
10. **最佳实践**：项目实践和可改进方向