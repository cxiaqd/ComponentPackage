好的，我将从**核心原理、请求配置、拦截器、错误处理、取消请求、并发控制、实例管理、适配器、缓存策略、安全防护、性能优化、源码实现、与框架结合、文件上传、服务端渲染**等15个维度，整理Axios的面试问题，并提供详细的原理分析和实际应用场景。

---

## 一、核心原理（2题）

### 问题1：Axios 的核心原理是什么？它是如何实现同时支持浏览器和 Node.js 的？

**考察点**：对 Axios 架构设计的理解

**参考答案**：

**核心架构**：

```javascript
// Axios 的核心流程
请求配置 → 请求拦截器 → 适配器（Adapter）→ 响应拦截器 → 响应数据

// 适配器模式（核心）
function dispatchRequest(config) {
  // 1. 转换请求数据
  config.data = transformData(config.data, config.headers, config.transformRequest);
  
  // 2. 根据环境选择适配器
  const adapter = config.adapter || getDefaultAdapter();
  
  // 3. 执行适配器，返回 Promise
  return adapter(config).then(response => {
    // 4. 转换响应数据
    response.data = transformData(response.data, response.headers, config.transformResponse);
    return response;
  });
}

// 适配器选择
function getDefaultAdapter() {
  let adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // 浏览器环境
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined') {
    // Node.js 环境
    adapter = require('./adapters/http');
  }
  return adapter;
}
```

**浏览器适配器实现**：

```javascript
// xhr.js 简化实现
module.exports = function xhrAdapter(config) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    const { url, method, data, headers, timeout, withCredentials } = config;
    
    request.open(method.toUpperCase(), buildURL(url, params), true);
    
    // 设置超时
    request.timeout = timeout;
    
    // 设置跨域凭证
    request.withCredentials = withCredentials;
    
    // 设置请求头
    Object.keys(headers).forEach(key => {
      if (data === null && key.toLowerCase() === 'content-type') {
        delete headers[key];
      } else {
        request.setRequestHeader(key, headers[key]);
      }
    });
    
    // 响应处理
    request.onreadystatechange = function() {
      if (!request || request.readyState !== 4) return;
      
      const response = {
        data: request.responseText,
        status: request.status,
        statusText: request.statusText,
        headers: parseHeaders(request.getAllResponseHeaders()),
        config,
        request
      };
      
      resolve(response);
    };
    
    // 错误处理
    request.onerror = function() {
      reject(new Error('Network Error'));
    };
    
    request.send(data);
  });
};
```

**Node.js 适配器简化**：

```javascript
// http.js 简化
const http = require('http');
const https = require('https');

module.exports = function httpAdapter(config) {
  return new Promise((resolve, reject) => {
    const { url, method, data, headers } = config;
    const parsedUrl = new URL(url);
    const options = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port,
      path: parsedUrl.pathname + parsedUrl.search,
      method: method.toUpperCase(),
      headers
    };
    
    const client = parsedUrl.protocol === 'https:' ? https : http;
    const req = client.request(options, (res) => {
      let responseData = '';
      
      res.on('data', chunk => {
        responseData += chunk;
      });
      
      res.on('end', () => {
        resolve({
          data: responseData,
          status: res.statusCode,
          statusText: res.statusMessage,
          headers: res.headers,
          config
        });
      });
    });
    
    req.on('error', reject);
    
    if (data) {
      req.write(data);
    }
    req.end();
  });
};
```

**实际应用**：

```javascript
// 统一接口，自动适配环境
const axios = require('axios');

// 浏览器中自动使用 XHR
// Node.js 中自动使用 http/https 模块

// 自定义适配器（可用于测试）
const customAdapter = (config) => {
  return new Promise((resolve) => {
    resolve({
      data: 'mock data',
      status: 200,
      statusText: 'OK',
      headers: {},
      config
    });
  });
};

const instance = axios.create({
  adapter: customAdapter
});
```

---

### 问题2：Axios 的拦截器是如何实现的？可以解释一下它的设计模式？

**考察点**：对拦截器机制和设计模式的理解

**参考答案**：

**拦截器实现原理**：

```javascript
class Axios {
  constructor() {
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  request(config) {
    // 1. 构建请求链
    const chain = [
      dispatchRequest,  // 实际发送请求的函数
      undefined        // 用于 Promise 的 then 链
    ];
    
    // 2. 插入请求拦截器（后添加的先执行）
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 3. 插入响应拦截器（先添加的先执行）
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 4. 执行 Promise 链
    let promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    
    return promise;
  }
}

// 拦截器管理器
class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  
  use(fulfilled, rejected, options = {}) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options.synchronous,
      runWhen: options.runWhen
    });
    return this.handlers.length - 1;
  }
  
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  
  forEach(fn) {
    this.handlers.forEach(handler => {
      if (handler !== null) {
        fn(handler);
      }
    });
  }
}
```

**实际执行流程**：

```javascript
// 拦截器执行顺序
axios.interceptors.request.use(config => {
  console.log('请求拦截器 1');
  return config;
});

axios.interceptors.request.use(config => {
  console.log('请求拦截器 2');
  return config;
});

axios.interceptors.response.use(response => {
  console.log('响应拦截器 1');
  return response;
});

axios.interceptors.response.use(response => {
  console.log('响应拦截器 2');
  return response;
});

// 执行顺序：
// 请求拦截器 2 → 请求拦截器 1 → 实际请求 → 响应拦截器 1 → 响应拦截器 2
```

**实际应用场景**：

```javascript
// 1. 添加认证 Token
axios.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 2. 请求日志
axios.interceptors.request.use(config => {
  console.log(`[Request] ${config.method.toUpperCase()} ${config.url}`, config.data);
  return config;
});

// 3. 响应数据转换
axios.interceptors.response.use(
  response => {
    // 只返回 data 字段
    return response.data;
  },
  error => {
    return Promise.reject(error);
  }
);

// 4. 统一错误处理
axios.interceptors.response.use(
  response => response,
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 未授权，跳转登录
          window.location.href = '/login';
          break;
        case 403:
          // 无权限
          console.error('权限不足');
          break;
        case 500:
          // 服务端错误
          console.error('服务器错误');
          break;
      }
    } else if (error.request) {
      // 请求已发出，无响应
      console.error('网络错误');
    } else {
      console.error('请求配置错误', error.message);
    }
    return Promise.reject(error);
  }
);

// 5. 请求重试
let retryCount = 0;
const maxRetries = 3;

axios.interceptors.response.use(
  response => response,
  async error => {
    const config = error.config;
    
    if (retryCount < maxRetries && error.response?.status >= 500) {
      retryCount++;
      // 延迟重试
      await new Promise(resolve => setTimeout(resolve, 1000 * retryCount));
      return axios(config);
    }
    
    return Promise.reject(error);
  }
);
```

---

## 二、请求配置与实例（2题）

### 问题3：如何创建多个 Axios 实例？每个实例的配置如何隔离？

**考察点**：对实例管理的理解

**参考答案**：

**创建实例**：

```javascript
// 默认实例
import axios from 'axios';

// 创建自定义实例
const apiClient = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// 创建不同服务的实例
const userApi = axios.create({
  baseURL: 'https://user-api.example.com',
  timeout: 5000
});

const orderApi = axios.create({
  baseURL: 'https://order-api.example.com',
  timeout: 15000
});

const uploadApi = axios.create({
  baseURL: 'https://upload.example.com',
  timeout: 60000,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});
```

**配置隔离**：

```javascript
// 实例配置完全隔离
apiClient.interceptors.request.use(config => {
  // 只影响 apiClient 实例
  console.log('apiClient 请求拦截器');
  return config;
});

userApi.interceptors.request.use(config => {
  // 只影响 userApi 实例
  config.headers['X-User-Id'] = getUserId();
  return config;
});

// 实例配置合并规则
const instance = axios.create({
  baseURL: 'https://api.com',
  timeout: 5000
});

// 请求时传入的配置优先级最高
instance({
  url: '/users',
  timeout: 10000,  // 覆盖实例的 timeout
  headers: {
    'X-Custom': 'value'  // 与实例 headers 合并
  }
});
```

**实际应用场景**：

```javascript
// 1. 不同环境的 API 实例
const api = {
  development: axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 5000
  }),
  production: axios.create({
    baseURL: 'https://api.example.com',
    timeout: 10000
  })
};

const currentApi = api[process.env.NODE_ENV];

// 2. 认证实例和公开实例
const authApi = axios.create({
  baseURL: 'https://api.com',
  headers: {
    'Authorization': `Bearer ${getToken()}`
  }
});

const publicApi = axios.create({
  baseURL: 'https://api.com'
});

// 3. 文件上传实例
const uploadApi = axios.create({
  baseURL: 'https://upload.com',
  timeout: 120000,
  maxContentLength: 50 * 1024 * 1024,
  headers: {
    'Content-Type': 'multipart/form-data'
  }
});

// 4. 带重试机制的实例
const retryApi = axios.create({
  baseURL: 'https://api.com',
  timeout: 5000
});

let retryCount = 0;
retryApi.interceptors.response.use(
  response => response,
  error => {
    if (retryCount < 3 && error.response?.status >= 500) {
      retryCount++;
      return retryApi(error.config);
    }
    retryCount = 0;
    return Promise.reject(error);
  }
);
```

---

### 问题4：Axios 的请求配置中，params 和 data 有什么区别？如何序列化参数？

**考察点**：对请求参数处理的理解

**参考答案**：

**核心区别**：

| 属性 | 位置 | 使用场景 | 方法 |
|------|------|----------|------|
| params | URL 查询字符串 | GET、DELETE | 拼接到 URL 后 |
| data | 请求体 | POST、PUT、PATCH | 放在请求体中 |

**使用示例**：

```javascript
// GET 请求使用 params
axios.get('/api/users', {
  params: {
    page: 1,
    limit: 10,
    keyword: 'john'
  }
});
// 实际请求：/api/users?page=1&limit=10&keyword=john

// POST 请求使用 data
axios.post('/api/users', {
  name: 'John',
  age: 25
});
// 数据在请求体中

// 手动指定方法
axios({
  method: 'post',
  url: '/api/users',
  params: { timestamp: Date.now() },  // URL 参数
  data: { name: 'John' }              // 请求体
});
```

**参数序列化**：

```javascript
// 1. 默认序列化（qs 库）
import qs from 'qs';

// 默认行为：a=1&b=2
axios.get('/api', {
  params: { a: 1, b: 2 }
});

// 2. 自定义序列化
axios.get('/api', {
  params: { ids: [1, 2, 3] },
  paramsSerializer: {
    serialize: (params) => {
      return qs.stringify(params, { indices: false });
      // 结果：ids=1&ids=2&ids=3
    }
  }
});

// 3. 复杂对象序列化
const params = {
  filter: {
    name: 'John',
    age: { min: 18, max: 30 }
  },
  sort: ['name', 'age']
};

// 使用 qs 深度序列化
axios.get('/api', {
  params,
  paramsSerializer: (params) => {
    return qs.stringify(params, { 
      allowDots: true,
      arrayFormat: 'indices'
    });
  }
});
// 结果：filter[name]=John&filter[age][min]=18&filter[age][max]=30&sort[0]=name&sort[1]=age
```

**实际应用场景**：

```javascript
// 1. 时间戳防缓存
axios.get('/api/data', {
  params: {
    _t: Date.now()
  }
});

// 2. 分页参数
function fetchUsers(page, pageSize, filters) {
  return axios.get('/api/users', {
    params: {
      page,
      pageSize,
      ...filters
    },
    paramsSerializer: (params) => {
      // 过滤空值
      const filtered = Object.fromEntries(
        Object.entries(params).filter(([_, v]) => v !== '' && v !== null)
      );
      return qs.stringify(filtered);
    }
  });
}

// 3. 数组参数处理
axios.get('/api/posts', {
  params: {
    tags: ['javascript', 'axios', 'react']
  },
  paramsSerializer: {
    serialize: (params) => {
      // 方式1：tags=javascript&tags=axios&tags=react
      return qs.stringify(params, { arrayFormat: 'repeat' });
      
      // 方式2：tags[]=javascript&tags[]=axios&tags[]=react
      // return qs.stringify(params, { arrayFormat: 'brackets' });
      
      // 方式3：tags=javascript,axios,react
      // return qs.stringify(params, { arrayFormat: 'comma' });
    }
  }
});
```

---

## 三、错误处理与取消请求（2题）

### 问题5：如何统一处理 Axios 的错误？不同类型的错误如何区分？

**考察点**：对错误处理的理解

**参考答案**：

**错误类型区分**：

```javascript
axios.get('/api/users')
  .catch(error => {
    if (error.response) {
      // 1. 服务器响应了，但状态码超出 2xx
      console.log('服务器错误:', error.response.status);
      console.log('错误数据:', error.response.data);
      console.log('响应头:', error.response.headers);
    } else if (error.request) {
      // 2. 请求已发出，但无响应（网络问题、超时）
      console.log('网络错误:', error.request);
    } else {
      // 3. 请求配置错误
      console.log('配置错误:', error.message);
    }
    console.log('错误配置:', error.config);
  });
```

**统一错误处理封装**：

```javascript
class AxiosErrorHandler {
  constructor(instance) {
    this.instance = instance;
    this.setupInterceptors();
  }
  
  setupInterceptors() {
    this.instance.interceptors.response.use(
      response => response,
      error => this.handleError(error)
    );
  }
  
  handleError(error) {
    // 自定义错误码映射
    const errorMap = {
      // 网络错误
      'Network Error': '网络连接失败，请检查网络',
      'timeout of': '请求超时，请稍后重试',
      
      // HTTP 状态码
      400: '请求参数错误',
      401: '未授权，请重新登录',
      403: '无权限访问',
      404: '请求的资源不存在',
      500: '服务器内部错误',
      502: '网关错误',
      503: '服务不可用'
    };
    
    let errorMessage = '未知错误';
    let errorType = 'unknown';
    
    if (error.response) {
      // 服务器返回错误状态码
      errorType = 'server';
      errorMessage = errorMap[error.response.status] || 
                     `服务器错误: ${error.response.status}`;
      
      // 特殊处理 401
      if (error.response.status === 401) {
        this.handleUnauthorized();
      }
    } else if (error.request) {
      // 网络错误或超时
      errorType = 'network';
      errorMessage = errorMap[error.message] || '网络连接异常';
    } else {
      // 配置错误
      errorType = 'config';
      errorMessage = error.message;
    }
    
    // 构造标准错误对象
    const customError = {
      type: errorType,
      message: errorMessage,
      original: error,
      config: error.config
    };
    
    // 上报错误
    this.reportError(customError);
    
    // 显示错误提示
    this.showError(customError);
    
    return Promise.reject(customError);
  }
  
  handleUnauthorized() {
    // 清除本地存储
    localStorage.removeItem('token');
    // 跳转登录页
    window.location.href = '/login';
  }
  
  reportError(error) {
    // 错误上报到监控系统
    console.error('[Axios Error]', error);
    // 可以上报到 Sentry 等
  }
  
  showError(error) {
    // 使用 UI 库显示错误提示
    // 例如：Toast.error(error.message)
  }
}

// 使用
const axiosInstance = axios.create();
const errorHandler = new AxiosErrorHandler(axiosInstance);
```

**全局错误处理**：

```javascript
// 封装请求函数
async function request(config) {
  try {
    const response = await axios(config);
    return response.data;
  } catch (error) {
    // 业务错误处理
    if (error.code === 'ERR_NETWORK') {
      console.error('网络异常');
    } else if (error.code === 'ERR_TIMEOUT') {
      console.error('请求超时');
    } else if (error.response?.status === 429) {
      console.error('请求过于频繁');
      // 延迟重试
      await new Promise(resolve => setTimeout(resolve, 3000));
      return request(config);
    }
    throw error;
  }
}

// 特定接口的错误处理
async function createUser(userData) {
  try {
    return await axios.post('/api/users', userData);
  } catch (error) {
    if (error.response?.status === 409) {
      // 用户已存在
      return { conflict: true };
    }
    throw error;
  }
}
```

---

### 问题6：如何实现 Axios 的请求取消？CancelToken 和 AbortController 的区别？

**考察点**：对请求取消机制的理解

**参考答案**：

**CancelToken 方式（旧版）**：

```javascript
// 1. 使用 CancelToken
const CancelToken = axios.CancelToken;
let cancel;

axios.get('/api/users', {
  cancelToken: new CancelToken(function executor(c) {
    cancel = c;
  })
});

// 取消请求
cancel('用户取消了请求');

// 2. 使用 source 方式
const source = CancelToken.source();

axios.get('/api/users', {
  cancelToken: source.token
});

source.cancel('用户取消了请求');
```

**AbortController 方式（新版推荐）**：

```javascript
// 1. 基本用法
const controller = new AbortController();

axios.get('/api/users', {
  signal: controller.signal
});

controller.abort();

// 2. 超时自动取消
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000);

axios.get('/api/users', {
  signal: controller.signal
}).finally(() => {
  clearTimeout(timeoutId);
});

// 3. 多个请求共享同一个 signal
const controller = new AbortController();

Promise.all([
  axios.get('/api/user/1', { signal: controller.signal }),
  axios.get('/api/user/2', { signal: controller.signal }),
  axios.get('/api/user/3', { signal: controller.signal })
]).catch(error => {
  if (axios.isCancel(error)) {
    console.log('请求被取消');
  }
});

// 批量取消
controller.abort();
```

**实际应用场景**：

```javascript
// 1. 搜索框防抖 + 取消请求
class SearchService {
  constructor() {
    this.controller = null;
  }
  
  async search(keyword) {
    // 取消上一次请求
    if (this.controller) {
      this.controller.abort();
    }
    
    this.controller = new AbortController();
    
    try {
      const response = await axios.get('/api/search', {
        params: { q: keyword },
        signal: this.controller.signal
      });
      return response.data;
    } catch (error) {
      if (error.name === 'CanceledError') {
        console.log('请求已取消');
        return null;
      }
      throw error;
    }
  }
}

// 2. 路由切换时取消未完成请求
let pendingRequests = new Map();

function addPendingRequest(config) {
  const controller = new AbortController();
  config.signal = controller.signal;
  pendingRequests.set(config.url, controller);
}

function removePendingRequest(config) {
  pendingRequests.delete(config.url);
}

function cancelAllRequests() {
  pendingRequests.forEach(controller => controller.abort());
  pendingRequests.clear();
}

axios.interceptors.request.use(config => {
  addPendingRequest(config);
  return config;
});

axios.interceptors.response.use(
  response => {
    removePendingRequest(response.config);
    return response;
  },
  error => {
    removePendingRequest(error.config);
    return Promise.reject(error);
  }
);

// 路由切换时取消
router.beforeEach((to, from, next) => {
  cancelAllRequests();
  next();
});

// 3. 文件上传取消
class UploadService {
  constructor() {
    this.controller = null;
  }
  
  async upload(file) {
    this.controller = new AbortController();
    
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await axios.post('/api/upload', formData, {
        signal: this.controller.signal,
        onUploadProgress: progressEvent => {
          const percent = (progressEvent.loaded / progressEvent.total) * 100;
          console.log(`上传进度: ${percent}%`);
        }
      });
      return response.data;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('上传已取消');
      }
      throw error;
    }
  }
  
  cancel() {
    if (this.controller) {
      this.controller.abort();
    }
  }
}
```

---

## 四、并发控制与性能优化（2题）

### 问题7：如何实现请求的并发控制？如何限制同时请求的数量？

**考察点**：对并发控制的理解

**参考答案**：

**并发控制实现**：

```javascript
class RequestQueue {
  constructor(maxConcurrent = 5) {
    this.maxConcurrent = maxConcurrent;
    this.running = 0;
    this.queue = [];
  }
  
  async add(requestFn) {
    // 如果达到并发上限，等待
    if (this.running >= this.maxConcurrent) {
      await new Promise(resolve => {
        this.queue.push(resolve);
      });
    }
    
    this.running++;
    try {
      return await requestFn();
    } finally {
      this.running--;
      // 执行队列中的下一个请求
      if (this.queue.length > 0) {
        const next = this.queue.shift();
        next();
      }
    }
  }
}

// 使用示例
const queue = new RequestQueue(3);

const urls = [
  '/api/user/1',
  '/api/user/2',
  '/api/user/3',
  '/api/user/4',
  '/api/user/5'
];

const requests = urls.map(url => 
  queue.add(() => axios.get(url))
);

const results = await Promise.all(requests);
```

**高级并发控制**：

```javascript
class ConcurrencyController {
  constructor(options = {}) {
    this.maxConcurrent = options.maxConcurrent || 5;
    this.retryTimes = options.retryTimes || 3;
    this.timeout = options.timeout || 10000;
    this.running = 0;
    this.queue = [];
  }
  
  async request(config) {
    return new Promise((resolve, reject) => {
      this.queue.push({ config, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.running >= this.maxConcurrent) return;
    if (this.queue.length === 0) return;
    
    const { config, resolve, reject } = this.queue.shift();
    this.running++;
    
    try {
      const result = await this.executeWithRetry(config);
      resolve(result);
    } catch (error) {
      reject(error);
    } finally {
      this.running--;
      this.process();
    }
  }
  
  async executeWithRetry(config, retryCount = 0) {
    try {
      const source = axios.CancelToken.source();
      const timeoutId = setTimeout(() => {
        source.cancel('请求超时');
      }, this.timeout);
      
      const response = await axios({
        ...config,
        cancelToken: source.token
      });
      
      clearTimeout(timeoutId);
      return response.data;
    } catch (error) {
      if (retryCount < this.retryTimes && this.shouldRetry(error)) {
        // 指数退避
        const delay = Math.pow(2, retryCount) * 1000;
        await new Promise(resolve => setTimeout(resolve, delay));
        return this.executeWithRetry(config, retryCount + 1);
      }
      throw error;
    }
  }
  
  shouldRetry(error) {
    // 可重试的错误类型
    return error.code === 'ECONNABORTED' ||
           error.message.includes('timeout') ||
           error.response?.status >= 500;
  }
}

// 使用
const controller = new ConcurrencyController({
  maxConcurrent: 5,
  retryTimes: 3,
  timeout: 10000
});

const requests = urls.map(url => 
  controller.request({ url, method: 'get' })
);

const results = await Promise.all(requests);
```

**实际应用场景**：

```javascript
// 1. 批量数据获取
async function fetchBatchData(ids) {
  const batchSize = 10;
  const results = [];
  
  for (let i = 0; i < ids.length; i += batchSize) {
    const batch = ids.slice(i, i + batchSize);
    const promises = batch.map(id => 
      axios.get(`/api/data/${id}`)
    );
    const batchResults = await Promise.all(promises);
    results.push(...batchResults);
    
    // 批次间延迟，避免压垮服务器
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  return results;
}

// 2. 图片预加载（限制并发）
class ImageLoader {
  constructor(maxConcurrent = 5) {
    this.maxConcurrent = maxConcurrent;
    this.queue = [];
    this.loading = 0;
  }
  
  async load(urls) {
    const promises = urls.map(url => this.loadSingle(url));
    return Promise.all(promises);
  }
  
  loadSingle(url) {
    return new Promise((resolve, reject) => {
      this.queue.push({ url, resolve, reject });
      this.process();
    });
  }
  
  async process() {
    if (this.loading >= this.maxConcurrent) return;
    if (this.queue.length === 0) return;
    
    const { url, resolve, reject } = this.queue.shift();
    this.loading++;
    
    try {
      const response = await axios.get(url, {
        responseType: 'blob'
      });
      const imageUrl = URL.createObjectURL(response.data);
      resolve(imageUrl);
    } catch (error) {
      reject(error);
    } finally {
      this.loading--;
      this.process();
    }
  }
}

// 3. 并发请求的竞态处理
async function getFastestResponse(urls) {
  const controllers = urls.map(() => new AbortController());
  
  const promises = urls.map((url, index) => 
    axios.get(url, { signal: controllers[index].signal })
  );
  
  try {
    const result = await Promise.race(promises);
    // 取消其他请求
    controllers.forEach(controller => controller.abort());
    return result.data;
  } catch (error) {
    throw error;
  }
}
```

---

### 问题8：如何优化 Axios 的请求性能？包括缓存、请求合并等策略？

**考察点**：对性能优化的理解

**参考答案**：

**请求缓存策略**：

```javascript
class RequestCache {
  constructor(options = {}) {
    this.cache = new Map();
    this.ttl = options.ttl || 60000; // 默认 60 秒
  }
  
  async request(config) {
    const key = this.getCacheKey(config);
    const cached = this.cache.get(key);
    
    // 命中缓存且未过期
    if (cached && Date.now() < cached.expires) {
      console.log('从缓存获取:', key);
      return cached.data;
    }
    
    // 发起请求
    const response = await axios(config);
    
    // 只缓存 GET 请求
    if (config.method === 'get') {
      this.cache.set(key, {
        data: response.data,
        expires: Date.now() + this.ttl
      });
      
      // 自动清理过期缓存
      setTimeout(() => {
        if (this.cache.has(key)) {
          const item = this.cache.get(key);
          if (Date.now() > item.expires) {
            this.cache.delete(key);
          }
        }
      }, this.ttl);
    }
    
    return response.data;
  }
  
  getCacheKey(config) {
    const { url, method, params, data } = config;
    const keyObj = { url, method, params, data };
    return JSON.stringify(keyObj);
  }
  
  clear() {
    this.cache.clear();
  }
  
  remove(pattern) {
    for (const key of this.cache.keys()) {
      if (key.includes(pattern)) {
        this.cache.delete(key);
      }
    }
  }
}

// 使用缓存
const cache = new RequestCache({ ttl: 30000 });
const data = await cache.request({
  url: '/api/users',
  method: 'get',
  params: { page: 1 }
});
```

**请求合并**：

```javascript
class RequestBatcher {
  constructor(options = {}) {
    this.batchDelay = options.batchDelay || 50;
    this.maxBatchSize = options.maxBatchSize || 10;
    this.queue = new Map();
    this.timer = null;
  }
  
  async request(config) {
    const key = this.getKey(config);
    
    return new Promise((resolve, reject) => {
      if (!this.queue.has(key)) {
        this.queue.set(key, []);
      }
      
      this.queue.get(key).push({ resolve, reject, config });
      
      if (!this.timer) {
        this.timer = setTimeout(() => this.flush(), this.batchDelay);
      }
    });
  }
  
  async flush() {
    const items = Array.from(this.queue.entries());
    this.queue.clear();
    this.timer = null;
    
    // 处理每个批次的请求
    await Promise.all(items.map(async ([key, requests]) => {
      if (requests.length === 1) {
        // 单个请求直接发送
        try {
          const response = await axios(requests[0].config);
          requests[0].resolve(response.data);
        } catch (error) {
          requests[0].reject(error);
        }
      } else {
        // 批量请求
        await this.batchRequest(requests);
      }
    }));
  }
  
  async batchRequest(requests) {
    // 假设服务端支持批量接口
    const ids = requests.map(req => req.config.params.id);
    
    try {
      const response = await axios.get('/api/batch', {
        params: { ids: ids.join(',') }
      });
      
      // 分发给各个请求
      requests.forEach((request, index) => {
        request.resolve(response.data[index]);
      });
    } catch (error) {
      requests.forEach(request => request.reject(error));
    }
  }
  
  getKey(config) {
    // 根据 URL 和参数生成 key
    return config.url;
  }
}

// 使用批处理器
const batcher = new RequestBatcher();

// 多个并发请求会被合并
Promise.all([
  batcher.request({ url: '/api/users', params: { id: 1 } }),
  batcher.request({ url: '/api/users', params: { id: 2 } }),
  batcher.request({ url: '/api/users', params: { id: 3 } })
]);
```

**请求去重**：

```javascript
class RequestDeduplicator {
  constructor() {
    this.pending = new Map();
  }
  
  async request(config) {
    const key = this.getKey(config);
    
    // 如果有相同的请求正在执行，返回同一个 Promise
    if (this.pending.has(key)) {
      console.log('请求去重:', key);
      return this.pending.get(key);
    }
    
    const promise = axios(config)
      .then(response => response.data)
      .finally(() => {
        this.pending.delete(key);
      });
    
    this.pending.set(key, promise);
    return promise;
  }
  
  getKey(config) {
    const { url, method, params, data } = config;
    return JSON.stringify({ url, method, params, data });
  }
}

// 使用
const deduplicator = new RequestDeduplicator();

// 同时发起多个相同的请求，只会执行一次
Promise.all([
  deduplicator.request({ url: '/api/users', params: { id: 1 } }),
  deduplicator.request({ url: '/api/users', params: { id: 1 } }),
  deduplicator.request({ url: '/api/users', params: { id: 1 } })
]);
```

**HTTP/2 多路复用**：

```javascript
// 使用 HTTP/2 时，无需特殊处理，但可以利用其特性
const http2Adapter = require('axios-http2-adapter');

const instance = axios.create({
  adapter: http2Adapter,
  baseURL: 'https://api.example.com'
});

// HTTP/2 自动复用连接，并发请求更高效
const requests = Array.from({ length: 50 }, (_, i) =>
  instance.get(`/api/users/${i}`)
);

const results = await Promise.all(requests);
```

---

## 五、安全防护与认证（2题）

### 问题9：如何在 Axios 中实现 Token 自动刷新？如何处理并发请求时的 Token 刷新问题？

**考察点**：对认证机制和并发处理的理解

**参考答案**：

**Token 刷新实现**：

```javascript
class AuthService {
  constructor() {
    this.refreshing = false;
    this.pendingRequests = [];
    this.instance = axios.create();
    this.setupInterceptors();
  }
  
  setupInterceptors() {
    // 请求拦截器：添加 Token
    this.instance.interceptors.request.use(config => {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    });
    
    // 响应拦截器：处理 Token 过期
    this.instance.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        
        // 如果是 401 且未重试过
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          return this.refreshToken()
            .then(() => {
              // 刷新成功，重试原请求
              return this.instance(originalRequest);
            })
            .catch(() => {
              // 刷新失败，跳转登录
              this.logout();
              return Promise.reject(error);
            });
        }
        
        return Promise.reject(error);
      }
    );
  }
  
  async refreshToken() {
    // 如果正在刷新，等待刷新完成
    if (this.refreshing) {
      return new Promise((resolve, reject) => {
        this.pendingRequests.push({ resolve, reject });
      });
    }
    
    this.refreshing = true;
    
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post('/api/auth/refresh', {
        refreshToken
      });
      
      const { accessToken, refreshToken: newRefreshToken } = response.data;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
      
      // 处理所有等待的请求
      this.pendingRequests.forEach(request => request.resolve());
      this.pendingRequests = [];
      
      return accessToken;
    } catch (error) {
      // 刷新失败，通知所有等待的请求
      this.pendingRequests.forEach(request => request.reject(error));
      this.pendingRequests = [];
      throw error;
    } finally {
      this.refreshing = false;
    }
  }
  
  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    window.location.href = '/login';
  }
}

// 使用
const authService = new AuthService();
export default authService.instance;
```

**Token 自动刷新增强版**：

```javascript
class EnhancedAuthService {
  constructor() {
    this.token = null;
    this.refreshPromise = null;
    this.setupInterceptors();
    this.startTokenRefreshTimer();
  }
  
  setupInterceptors() {
    axios.interceptors.request.use(async config => {
      // 跳过登录接口
      if (config.url.includes('/auth/refresh')) {
        return config;
      }
      
      // 确保 Token 有效
      await this.ensureValidToken();
      
      if (this.token) {
        config.headers.Authorization = `Bearer ${this.token}`;
      }
      
      return config;
    });
    
    axios.interceptors.response.use(
      response => response,
      async error => {
        const originalRequest = error.config;
        
        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;
          
          try {
            await this.refreshToken();
            return axios(originalRequest);
          } catch (refreshError) {
            this.clearToken();
            window.location.href = '/login';
            return Promise.reject(refreshError);
          }
        }
        
        return Promise.reject(error);
      }
    );
  }
  
  async ensureValidToken() {
    if (!this.token) {
      this.token = localStorage.getItem('accessToken');
    }
    
    // 检查 Token 是否即将过期（剩余时间 < 5 分钟）
    if (this.token && this.isTokenExpiringSoon()) {
      await this.refreshToken();
    }
  }
  
  isTokenExpiringSoon() {
    try {
      const payload = JSON.parse(atob(this.token.split('.')[1]));
      const expTime = payload.exp * 1000;
      const timeToExpire = expTime - Date.now();
      return timeToExpire < 5 * 60 * 1000; // 5 分钟
    } catch {
      return true;
    }
  }
  
  async refreshToken() {
    if (this.refreshPromise) {
      return this.refreshPromise;
    }
    
    this.refreshPromise = (async () => {
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await axios.post('/api/auth/refresh', {
          refreshToken
        });
        
        this.token = response.data.accessToken;
        localStorage.setItem('accessToken', this.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
        
        return this.token;
      } finally {
        this.refreshPromise = null;
      }
    })();
    
    return this.refreshPromise;
  }
  
  startTokenRefreshTimer() {
    // 每 5 分钟检查一次 Token 状态
    setInterval(() => {
      if (this.token && this.isTokenExpiringSoon()) {
        this.refreshToken();
      }
    }, 5 * 60 * 1000);
  }
  
  clearToken() {
    this.token = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
```

**CSRF 防护**：

```javascript
// 1. 使用 CSRF Token
axios.interceptors.request.use(config => {
  const csrfToken = getCookie('csrf_token');
  if (csrfToken) {
    config.headers['X-CSRF-Token'] = csrfToken;
  }
  return config;
});

// 2. 使用 SameSite Cookie
// 服务端设置
Set-Cookie: session=xxx; SameSite=Strict; Secure

// 3. 验证 Referer
// 服务端检查请求来源
```

---

### 问题10：如何防止 XSS 攻击对 Axios 请求的影响？

**考察点**：对安全防护的理解

**参考答案**：

**XSS 防护策略**：

```javascript
// 1. 输入净化
class XSSProtection {
  static sanitize(data) {
    if (typeof data === 'string') {
      return data
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    }
    
    if (typeof data === 'object') {
      const result = {};
      for (const key in data) {
        result[key] = this.sanitize(data[key]);
      }
      return result;
    }
    
    return data;
  }
}

// 2. 请求拦截器净化数据
axios.interceptors.request.use(config => {
  if (config.data) {
    config.data = XSSProtection.sanitize(config.data);
  }
  
  if (config.params) {
    config.params = XSSProtection.sanitize(config.params);
  }
  
  return config;
});

// 3. 响应拦截器净化数据
axios.interceptors.response.use(response => {
  if (response.data) {
    response.data = XSSProtection.sanitize(response.data);
  }
  return response;
});

// 4. 内容安全策略（CSP）
// 在 HTML 中添加
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' 'unsafe-eval';
  style-src 'self' 'unsafe-inline';
  img-src 'self' data: https:
">

// 5. 使用 HttpOnly Cookie 存储敏感信息
// 避免将 Token 存储在 localStorage 中
axios.interceptors.request.use(config => {
  // 从 Cookie 读取 Token（HttpOnly，无法被 JS 读取）
  // 服务端自动携带，无需前端处理
  return config;
});

// 6. 验证响应内容类型
axios.interceptors.response.use(response => {
  const contentType = response.headers['content-type'];
  
  // 如果不是 JSON，不处理
  if (!contentType || !contentType.includes('application/json')) {
    return response;
  }
  
  return response;
});

// 7. 限制敏感操作
class SecureRequest {
  static async post(url, data, config = {}) {
    // 敏感操作需要验证 CSRF Token
    const csrfToken = getCookie('csrf_token');
    
    // 验证来源
    const isSafeOrigin = document.referrer.startsWith(window.location.origin);
    if (!isSafeOrigin) {
      throw new Error('不安全的请求来源');
    }
    
    return axios.post(url, data, {
      ...config,
      headers: {
        ...config.headers,
        'X-CSRF-Token': csrfToken,
        'X-Requested-With': 'XMLHttpRequest'
      }
    });
  }
}
```

---

## 六、源码实现与扩展（2题）

### 问题11：如何实现一个简化的 Axios？核心代码有哪些？

**考察点**：对源码实现的理解

**参考答案**：

**简化 Axios 实现**：

```javascript
class Axios {
  constructor(defaultConfig = {}) {
    this.defaultConfig = defaultConfig;
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    };
  }
  
  request(config) {
    // 合并配置
    config = {
      ...this.defaultConfig,
      ...config,
      headers: {
        ...this.defaultConfig.headers,
        ...config.headers
      }
    };
    
    // 构建请求链
    const chain = [
      this.dispatchRequest.bind(this),
      undefined
    ];
    
    // 插入请求拦截器
    this.interceptors.request.forEach(interceptor => {
      chain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 插入响应拦截器
    this.interceptors.response.forEach(interceptor => {
      chain.push(interceptor.fulfilled, interceptor.rejected);
    });
    
    // 执行 Promise 链
    let promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }
    
    return promise;
  }
  
  dispatchRequest(config) {
    return new Promise((resolve, reject) => {
      const { method = 'get', url, data, headers, timeout } = config;
      
      // 创建 XHR 对象
      const xhr = new XMLHttpRequest();
      
      // 处理 URL 参数
      let fullUrl = url;
      if (config.params) {
        const params = new URLSearchParams(config.params).toString();
        fullUrl += (url.includes('?') ? '&' : '?') + params;
      }
      
      xhr.open(method.toUpperCase(), fullUrl, true);
      
      // 设置超时
      if (timeout) {
        xhr.timeout = timeout;
      }
      
      // 设置请求头
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
      
      // 响应处理
      xhr.onload = () => {
        const response = {
          data: xhr.responseText,
          status: xhr.status,
          statusText: xhr.statusText,
          headers: this.parseHeaders(xhr.getAllResponseHeaders()),
          config
        };
        
        // 根据状态码判断成功或失败
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(response);
        } else {
          reject({
            response,
            config
          });
        }
      };
      
      xhr.onerror = () => {
        reject({
          message: 'Network Error',
          config
        });
      };
      
      xhr.ontimeout = () => {
        reject({
          message: 'Timeout',
          config
        });
      };
      
      // 发送请求
      const requestData = this.transformRequest(data);
      xhr.send(requestData);
    });
  }
  
  transformRequest(data) {
    if (typeof data === 'object') {
      return JSON.stringify(data);
    }
    return data;
  }
  
  parseHeaders(headersString) {
    const headers = {};
    if (!headersString) return headers;
    
    headersString.split('\r\n').forEach(line => {
      const [key, value] = line.split(': ');
      if (key && value) {
        headers[key.toLowerCase()] = value;
      }
    });
    
    return headers;
  }
  
  // 便捷方法
  get(url, config) {
    return this.request({ ...config, method: 'get', url });
  }
  
  post(url, data, config) {
    return this.request({ ...config, method: 'post', url, data });
  }
  
  put(url, data, config) {
    return this.request({ ...config, method: 'put', url, data });
  }
  
  delete(url, config) {
    return this.request({ ...config, method: 'delete', url });
  }
}

class InterceptorManager {
  constructor() {
    this.handlers = [];
  }
  
  use(fulfilled, rejected) {
    this.handlers.push({ fulfilled, rejected });
    return this.handlers.length - 1;
  }
  
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  
  forEach(fn) {
    this.handlers.forEach(handler => {
      if (handler !== null) {
        fn(handler);
      }
    });
  }
}

function createInstance(defaultConfig) {
  const axios = new Axios(defaultConfig);
  
  // 直接调用 axios 函数
  const instance = axios.request.bind(axios);
  
  // 挂载方法
  instance.get = axios.get.bind(axios);
  instance.post = axios.post.bind(axios);
  instance.put = axios.put.bind(axios);
  instance.delete = axios.delete.bind(axios);
  instance.create = (config) => createInstance({ ...defaultConfig, ...config });
  
  // 挂载拦截器
  instance.interceptors = axios.interceptors;
  
  return instance;
}

// 导出
export default createInstance();
```

---

### 问题12：如何扩展 Axios？比如添加自定义的适配器或转换器？

**考察点**：对 Axios 扩展机制的理解

**参考答案**：

**自定义适配器**：

```javascript
// 1. Mock 适配器（用于测试）
const mockAdapter = (config) => {
  return new Promise((resolve, reject) => {
    const { url, method, data } = config;
    
    // 模拟响应数据
    const mockData = {
      '/api/users': [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' }
      ],
      '/api/user/1': { id: 1, name: 'John' }
    };
    
    setTimeout(() => {
      if (mockData[url]) {
        resolve({
          data: mockData[url],
          status: 200,
          statusText: 'OK',
          headers: {},
          config
        });
      } else {
        reject({
          message: 'Not Found',
          config
        });
      }
    }, 500);
  });
};

// 使用 Mock 适配器
const mockAxios = axios.create({
  adapter: mockAdapter
});

// 2. 缓存适配器
const cacheAdapter = (adapter) => {
  const cache = new Map();
  
  return (config) => {
    const { method, url, params } = config;
    const key = `${method}:${url}:${JSON.stringify(params)}`;
    
    if (method === 'get' && cache.has(key)) {
      const cached = cache.get(key);
      if (Date.now() < cached.expires) {
        return Promise.resolve(cached.data);
      }
      cache.delete(key);
    }
    
    return adapter(config).then(response => {
      if (method === 'get') {
        cache.set(key, {
          data: response,
          expires: Date.now() + 60000
        });
      }
      return response;
    });
  };
};

const cachedAxios = axios.create({
  adapter: cacheAdapter(axios.defaults.adapter)
});

// 3. 重试适配器
const retryAdapter = (adapter, maxRetries = 3) => {
  return async (config) => {
    let lastError;
    
    for (let i = 0; i < maxRetries; i++) {
      try {
        return await adapter(config);
      } catch (error) {
        lastError = error;
        if (i < maxRetries - 1) {
          // 指数退避
          const delay = Math.pow(2, i) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }
    
    throw lastError;
  };
};

// 4. 进度适配器
const progressAdapter = (adapter, onProgress) => {
  return (config) => {
    const xhr = new XMLHttpRequest();
    const { method, url, data, headers, timeout } = config;
    
    return new Promise((resolve, reject) => {
      xhr.open(method, url, true);
      
      xhr.upload.onprogress = (event) => {
        if (event.lengthComputable && onProgress) {
          onProgress(event.loaded, event.total);
        }
      };
      
      xhr.onload = () => {
        resolve({
          data: xhr.responseText,
          status: xhr.status,
          statusText: xhr.statusText,
          headers: {},
          config
        });
      };
      
      xhr.onerror = () => reject(new Error('Network Error'));
      
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
      
      xhr.send(data);
    });
  };
};
```

**自定义转换器**：

```javascript
// 1. 数据转换器
const customTransform = {
  request: [
    (data, headers) => {
      // 添加时间戳
      if (data) {
        data.timestamp = Date.now();
      }
      return data;
    },
    (data, headers) => {
      // 加密敏感数据
      if (data && data.password) {
        data.password = encrypt(data.password);
      }
      return data;
    }
  ],
  response: [
    (data, headers) => {
      // 解包标准响应格式
      if (data && data.code === 200) {
        return data.data;
      }
      throw new Error(data.message);
    },
    (data, headers) => {
      // 数据脱敏
      if (data && data.phone) {
        data.phone = data.phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
      }
      return data;
    }
  ]
};

const instance = axios.create({
  transformRequest: customTransform.request,
  transformResponse: customTransform.response
});

// 2. 日期转换器
const dateTransformer = (data) => {
  if (!data) return data;
  
  const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  
  function transform(obj) {
    if (typeof obj === 'string' && isoDateRegex.test(obj)) {
      return new Date(obj);
    }
    if (typeof obj === 'object' && obj !== null) {
      Object.keys(obj).forEach(key => {
        obj[key] = transform(obj[key]);
      });
    }
    return obj;
  }
  
  return transform(data);
};

const dateAxios = axios.create({
  transformResponse: [dateTransformer]
});
```

**插件化扩展**：

```javascript
class AxiosPlugin {
  constructor(axios) {
    this.axios = axios;
  }
  
  use(plugin) {
    plugin.install(this.axios);
    return this;
  }
}

// 插件示例
const loggerPlugin = {
  install(axios) {
    axios.interceptors.request.use(config => {
      console.log(`[${new Date().toISOString()}] ${config.method.toUpperCase()} ${config.url}`);
      return config;
    });
  }
};

const authPlugin = {
  install(axios) {
    axios.interceptors.request.use(config => {
      config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
      return config;
    });
  }
};

const plugins = new AxiosPlugin(axios);
plugins.use(loggerPlugin).use(authPlugin);
```

---

## 七、与框架结合（2题）

### 问题13：在 Vue/React 中如何优雅地使用 Axios？如何进行状态管理？

**考察点**：对框架集成和状态管理的理解

**参考答案**：

**Vue 3 + Composition API**：

```javascript
// composables/useRequest.js
import { ref, reactive, toRefs } from 'vue';

export function useRequest(apiFn, options = {}) {
  const { immediate = true, initialData = null } = options;
  
  const state = reactive({
    data: initialData,
    loading: false,
    error: null
  });
  
  const execute = async (...args) => {
    state.loading = true;
    state.error = null;
    
    try {
      const response = await apiFn(...args);
      state.data = response.data;
      return response.data;
    } catch (error) {
      state.error = error;
      throw error;
    } finally {
      state.loading = false;
    }
  };
  
  if (immediate) {
    execute();
  }
  
  return {
    ...toRefs(state),
    execute
  };
}

// 使用
export default {
  setup() {
    const { data, loading, error, execute } = useRequest(
      (id) => axios.get(`/api/users/${id}`)
    );
    
    const refresh = () => execute(1);
    
    return { data, loading, error, refresh };
  }
};
```

**Vue 3 + Pinia 状态管理**：

```javascript
// stores/user.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    loading: false,
    currentUser: null
  }),
  
  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await axios.get('/api/users');
        this.users = response.data;
      } catch (error) {
        console.error('获取用户失败', error);
      } finally {
        this.loading = false;
      }
    },
    
    async createUser(userData) {
      try {
        const response = await axios.post('/api/users', userData);
        this.users.push(response.data);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    
    async updateUser(id, userData) {
      try {
        const response = await axios.put(`/api/users/${id}`, userData);
        const index = this.users.findIndex(u => u.id === id);
        if (index !== -1) {
          this.users[index] = response.data;
        }
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    
    async deleteUser(id) {
      try {
        await axios.delete(`/api/users/${id}`);
        this.users = this.users.filter(u => u.id !== id);
      } catch (error) {
        throw error;
      }
    }
  }
});
```

**React + Hooks**：

```javascript
// hooks/useRequest.js
import { useState, useEffect, useCallback } from 'react';

export function useRequest(apiFn, options = {}) {
  const { immediate = true, initialData = null, onSuccess, onError } = options;
  
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const execute = useCallback(async (...args) => {
    setLoading(true);
    setError(null);
    
    try {
      const result = await apiFn(...args);
      setData(result.data);
      onSuccess?.(result.data);
      return result.data;
    } catch (err) {
      setError(err);
      onError?.(err);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [apiFn, onSuccess, onError]);
  
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  
  return { data, loading, error, execute };
}

// 使用
function UserList() {
  const { data: users, loading, error, execute: refresh } = useRequest(
    () => axios.get('/api/users')
  );
  
  if (loading) return <div>加载中...</div>;
  if (error) return <div>加载失败</div>;
  
  return (
    <div>
      <button onClick={refresh}>刷新</button>
      {users?.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

**React + Redux Toolkit**：

```javascript
// features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async (params, { rejectWithValue }) => {
    try {
      const response = await axios.get('/api/users', { params });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createUser = createAsyncThunk(
  'users/createUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/users', userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.items.push(action.payload);
      });
  }
});

export default usersSlice.reducer;
```

---

### 问题14：如何在服务端渲染（SSR）中使用 Axios？需要注意什么问题？

**考察点**：对 SSR 中请求处理的理解

**参考答案**：

**Next.js 中的使用**：

```javascript
// pages/users.js
import axios from 'axios';

// 服务端获取数据
export async function getServerSideProps(context) {
  try {
    const response = await axios.get('https://api.example.com/users', {
      headers: {
        // 传递 Cookie
        Cookie: context.req.headers.cookie || ''
      }
    });
    
    return {
      props: {
        users: response.data
      }
    };
  } catch (error) {
    return {
      props: {
        users: [],
        error: error.message
      }
    };
  }
}

// 客户端组件
export default function Users({ users }) {
  // 客户端使用
  const [clientUsers, setClientUsers] = useState(users);
  
  const refresh = async () => {
    const response = await axios.get('/api/users');
    setClientUsers(response.data);
  };
  
  return (
    <div>
      <button onClick={refresh}>刷新</button>
      {clientUsers.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
```

**Nuxt.js 中的使用**：

```javascript
// nuxt.config.js
export default {
  axios: {
    baseURL: process.env.API_BASE_URL,
    credentials: true,
    proxy: true
  },
  
  proxy: {
    '/api/': {
      target: 'https://api.example.com',
      pathRewrite: { '^/api/': '' }
    }
  }
};

// pages/users.vue
<template>
  <div>
    <div v-if="$fetchState.pending">加载中...</div>
    <div v-else>
      <div v-for="user in users" :key="user.id">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  
  async fetch() {
    this.users = await this.$axios.$get('/api/users');
  },
  
  fetchOnServer: true
};
</script>
```

**SSR 注意事项**：

```javascript
// 1. 避免在服务端使用浏览器 API
class SSRRequest {
  static async request(config) {
    const isServer = typeof window === 'undefined';
    
    if (isServer) {
      // 服务端：使用完整的 URL
      config.baseURL = process.env.API_BASE_URL;
    }
    
    return axios(config);
  }
}

// 2. 处理 Cookie 传递
// 创建请求实例时传递 Cookie
export function createSSRInstance(req) {
  const instance = axios.create({
    headers: {
      Cookie: req.headers.cookie || ''
    }
  });
  
  return instance;
}

// 3. 防止重复请求
const cache = new Map();

export async function fetchWithCache(key, fetcher, ttl = 60000) {
  const cached = cache.get(key);
  if (cached && Date.now() < cached.expires) {
    return cached.data;
  }
  
  const data = await fetcher();
  cache.set(key, {
    data,
    expires: Date.now() + ttl
  });
  
  return data;
}

// 4. 错误边界处理
export async function safeFetch(fetcher, fallback = null) {
  try {
    return await fetcher();
  } catch (error) {
    console.error('Fetch error:', error);
    return fallback;
  }
}

// 5. 并发请求控制
export async function fetchAllWithLimit(urls, limit = 5) {
  const results = [];
  const chunks = [];
  
  for (let i = 0; i < urls.length; i += limit) {
    chunks.push(urls.slice(i, i + limit));
  }
  
  for (const chunk of chunks) {
    const promises = chunk.map(url => axios.get(url));
    const chunkResults = await Promise.allSettled(promises);
    results.push(...chunkResults);
  }
  
  return results;
}
```

---

## 八、文件上传与下载（1题）

### 问题15：如何使用 Axios 实现大文件分片上传、断点续传和进度监控？

**考察点**：对文件上传复杂场景的处理能力

**参考答案**：

**分片上传实现**：

```javascript
class FileUploader {
  constructor(options = {}) {
    this.chunkSize = options.chunkSize || 2 * 1024 * 1024; // 2MB
    this.concurrent = options.concurrent || 3;
    this.maxRetries = options.maxRetries || 3;
  }
  
  async upload(file, uploadUrl, onProgress) {
    // 1. 计算分片
    const chunks = this.createChunks(file);
    const totalChunks = chunks.length;
    
    // 2. 获取已上传的分片（断点续传）
    const uploadedChunks = await this.getUploadedChunks(file, uploadUrl);
    
    // 3. 并发上传分片
    const uploadQueue = [];
    let uploadedCount = uploadedChunks.size;
    
    for (let i = 0; i < totalChunks; i++) {
      if (uploadedChunks.has(i)) {
        continue;
      }
      
      const uploadTask = this.uploadChunk(
        chunks[i],
        i,
        totalChunks,
        file.name,
        uploadUrl
      ).then(() => {
        uploadedCount++;
        onProgress?.({ loaded: uploadedCount, total: totalChunks });
      });
      
      uploadQueue.push(uploadTask);
      
      // 控制并发数量
      if (uploadQueue.length >= this.concurrent) {
        await Promise.race(uploadQueue);
        this.cleanupQueue(uploadQueue);
      }
    }
    
    // 等待所有上传完成
    await Promise.all(uploadQueue);
    
    // 4. 通知服务端合并分片
    return this.mergeChunks(file.name, totalChunks, uploadUrl);
  }
  
  createChunks(file) {
    const chunks = [];
    let start = 0;
    let chunkIndex = 0;
    
    while (start < file.size) {
      const end = Math.min(start + this.chunkSize, file.size);
      const chunk = file.slice(start, end);
      chunks.push({
        data: chunk,
        index: chunkIndex,
        start,
        end
      });
      start = end;
      chunkIndex++;
    }
    
    return chunks;
  }
  
  async uploadChunk(chunk, index, totalChunks, filename, uploadUrl) {
    const formData = new FormData();
    formData.append('chunk', chunk.data);
    formData.append('index', index);
    formData.append('total', totalChunks);
    formData.append('filename', filename);
    
    let retries = 0;
    
    while (retries < this.maxRetries) {
      try {
        const response = await axios.post(`${uploadUrl}/chunk`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          timeout: 30000
        });
        
        return response.data;
      } catch (error) {
        retries++;
        if (retries >= this.maxRetries) {
          throw error;
        }
        // 指数退避
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, retries)));
      }
    }
  }
  
  async getUploadedChunks(file, uploadUrl) {
    try {
      const response = await axios.get(`${uploadUrl}/status`, {
        params: {
          filename: file.name,
          size: file.size
        }
      });
      
      return new Set(response.data.uploadedChunks || []);
    } catch {
      return new Set();
    }
  }
  
  async mergeChunks(filename, totalChunks, uploadUrl) {
    const response = await axios.post(`${uploadUrl}/merge`, {
      filename,
      totalChunks
    });
    
    return response.data;
  }
  
  cleanupQueue(queue) {
    for (let i = queue.length - 1; i >= 0; i--) {
      if (queue[i].isSettled) {
        queue.splice(i, 1);
      }
    }
  }
}

// 使用示例
const uploader = new FileUploader({
  chunkSize: 2 * 1024 * 1024,
  concurrent: 3,
  maxRetries: 3
});

const fileInput = document.getElementById('file');
fileInput.addEventListener('change', async (e) => {
  const file = e.target.files[0];
  
  try {
    const result = await uploader.upload(file, '/api/upload', (progress) => {
      const percent = (progress.loaded / progress.total) * 100;
      console.log(`上传进度: ${percent}%`);
    });
    
    console.log('上传完成:', result);
  } catch (error) {
    console.error('上传失败:', error);
  }
});
```

**增强版上传（支持暂停/恢复）**：

```javascript
class ResumableUploader {
  constructor(options = {}) {
    this.chunkSize = options.chunkSize || 2 * 1024 * 1024;
    this.concurrent = options.concurrent || 3;
    this.uploadTasks = new Map();
    this.paused = false;
    this.abortController = null;
  }
  
  async upload(file, uploadUrl, callbacks = {}) {
    this.file = file;
    this.uploadUrl = uploadUrl;
    this.callbacks = callbacks;
    
    // 获取已上传的分片
    const uploadedChunks = await this.getUploadedChunks();
    const chunks = this.createChunks(file);
    
    const pendingChunks = chunks.filter((_, index) => !uploadedChunks.has(index));
    
    this.totalChunks = chunks.length;
    this.uploadedCount = uploadedChunks.size;
    
    // 使用队列控制并发
    const queue = [...pendingChunks];
    const activeUploads = new Set();
    
    while (queue.length > 0 && !this.paused) {
      if (activeUploads.size >= this.concurrent) {
        await Promise.race(activeUploads);
      }
      
      const chunk = queue.shift();
      const uploadPromise = this.uploadChunk(chunk)
        .then(() => {
          activeUploads.delete(uploadPromise);
          this.uploadedCount++;
          callbacks.onProgress?.({
            loaded: this.uploadedCount,
            total: this.totalChunks
          });
        })
        .catch(error => {
          activeUploads.delete(uploadPromise);
          throw error;
        });
      
      activeUploads.add(uploadPromise);
      this.uploadTasks.set(chunk.index, uploadPromise);
    }
    
    await Promise.all(activeUploads);
    
    // 所有分片上传完成，合并
    return this.mergeChunks();
  }
  
  async uploadChunk(chunk) {
    const formData = new FormData();
    formData.append('chunk', chunk.data);
    formData.append('index', chunk.index);
    formData.append('total', this.totalChunks);
    formData.append('filename', this.file.name);
    
    let retries = 0;
    
    while (retries < 3 && !this.paused) {
      try {
        const controller = new AbortController();
        this.abortController = controller;
        
        const response = await axios.post(`${this.uploadUrl}/chunk`, formData, {
          signal: controller.signal,
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        
        return response.data;
      } catch (error) {
        if (error.name === 'AbortError') {
          throw new Error('Upload paused');
        }
        retries++;
        if (retries >= 3) throw error;
        await new Promise(resolve => setTimeout(resolve, 1000 * retries));
      }
    }
  }
  
  pause() {
    this.paused = true;
    if (this.abortController) {
      this.abortController.abort();
    }
  }
  
  async resume() {
    this.paused = false;
    return this.upload(this.file, this.uploadUrl, this.callbacks);
  }
  
  createChunks(file) {
    const chunks = [];
    let start = 0;
    let index = 0;
    
    while (start < file.size) {
      const end = Math.min(start + this.chunkSize, file.size);
      chunks.push({
        data: file.slice(start, end),
        index,
        start,
        end
      });
      start = end;
      index++;
    }
    
    return chunks;
  }
  
  async getUploadedChunks() {
    try {
      const response = await axios.get(`${this.uploadUrl}/status`, {
        params: {
          filename: this.file.name,
          size: this.file.size
        }
      });
      return new Set(response.data.uploadedChunks || []);
    } catch {
      return new Set();
    }
  }
  
  async mergeChunks() {
    const response = await axios.post(`${this.uploadUrl}/merge`, {
      filename: this.file.name,
      totalChunks: this.totalChunks
    });
    return response.data;
  }
}

// 使用示例
const uploader = new ResumableUploader({
  chunkSize: 2 * 1024 * 1024,
  concurrent: 3
});

// 开始上传
const uploadPromise = uploader.upload(file, '/api/upload', {
  onProgress: (progress) => {
    console.log(`${progress.loaded}/${progress.total}`);
  }
});

// 暂停
document.getElementById('pause').onclick = () => {
  uploader.pause();
};

// 恢复
document.getElementById('resume').onclick = async () => {
  await uploader.resume();
};
```

**进度监控实现**：

```javascript
// 全局进度监控
class UploadProgressMonitor {
  constructor() {
    this.uploads = new Map();
  }
  
  createUpload(id, options = {}) {
    const upload = {
      id,
      status: 'pending',
      progress: 0,
      speed: 0,
      startTime: Date.now(),
      loaded: 0,
      total: 0,
      ...options
    };
    
    this.uploads.set(id, upload);
    return upload;
  }
  
  updateProgress(id, loaded, total) {
    const upload = this.uploads.get(id);
    if (!upload) return;
    
    const now = Date.now();
    const elapsed = (now - upload.startTime) / 1000;
    const progress = (loaded / total) * 100;
    const speed = loaded / elapsed;
    
    upload.progress = progress;
    upload.loaded = loaded;
    upload.total = total;
    upload.speed = speed;
    upload.remainingTime = (total - loaded) / speed;
    
    this.emitProgress(upload);
  }
  
  emitProgress(upload) {
    console.log({
      id: upload.id,
      progress: `${upload.progress.toFixed(2)}%`,
      speed: `${(upload.speed / 1024).toFixed(2)} KB/s`,
      remaining: `${upload.remainingTime.toFixed(0)}s`
    });
  }
}

// 使用
const monitor = new UploadProgressMonitor();
const uploadId = Date.now().toString();

monitor.createUpload(uploadId, { fileName: file.name });

await axios.post('/api/upload', formData, {
  onUploadProgress: (progressEvent) => {
    monitor.updateProgress(
      uploadId,
      progressEvent.loaded,
      progressEvent.total
    );
  }
});
```

---

以上15个Axios面试问题涵盖了从核心原理到高级应用的各个维度，每个答案都提供了详细的原理分析和实际代码示例，希望对你在Axios相关的面试中有所帮助。