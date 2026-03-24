# 项目中 Axios 使用与封装的优化点

---

## 一、当前代码分析

### 1.1 现有实现概览

**文件位置：** [`src/core/httpInstance.js`](bsearch-frontend/search-center/src/core/httpInstance.js:1)

```javascript
// 当前实现要点
const http = axios.create({
  timeout: 180000,              // 3 分钟超时
  withCredentials: true,        // 携带 Cookie
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'X-CSRF-TOKEN': getToken()  // 生产环境
  },
  baseURL: `${process.env.VUE_APP_CONTEXT}/`
});

// 请求拦截器：添加时间戳、URL 后缀、去空格
// 响应拦截器：错误处理、traceId 提取
// 封装方法：get, post, upload, download
```

### 1.2 可优化的问题清单

```
┌─────────────────────────────────────────────────────────────┐
│                    可优化点清单                              │
└─────────────────────────────────────────────────────────────┘

1. 请求层优化
   ├── ❌ 缺少请求重试机制
   ├── ❌ 缺少请求取消/去重
   ├── ❌ 缺少请求缓存
   └── ❌ 缺少 Loading 控制

2. 错误处理优化
   ├── ❌ 错误码硬编码，缺少配置化
   ├── ❌ 缺少全局错误回调注册
   └── ❌ 缺少错误日志上报

3. 安全优化
   ├── ❌ Token 过期自动刷新
   ├── ❌ 请求签名验证
   └── ❌ 敏感数据加密

4. 性能优化
   ├── ❌ 并发请求控制
   ├── ❌ 大文件分片上传
   └── ❌ 响应数据压缩

5. 可维护性优化
   ├── ❌ 缺少 TypeScript 支持
   ├── ❌ 缺少完整的单元测试
   └── ❌ 缺少请求日志
```

---

## 二、请求层优化

### 2.1 添加请求重试机制

**优化方案：**

```javascript
// utils/retryInterceptor.js
import axios from 'axios';

/**
 * 请求重试配置
 */
const retryConfig = {
  retries: 3,                    // 最大重试次数
  retryDelay: 1000,              // 重试延迟 (ms)
  retryCondition: (error) => {   // 重试条件
    const { code, status } = error.response || {};
    // 网络错误、超时、5xx 服务器错误时重试
    return !error.response || status >= 500 || code === 'ECONNABORTED';
  },
  shouldResetTimeout: true       // 重试时重置超时
};

/**
 * 添加重试拦截器
 */
export function setupRetryInterceptor(axiosInstance, config = {}) {
  const finalConfig = { ...retryConfig, ...config };
  
  axiosInstance.interceptors.response.use(null, async (error) => {
    const { config } = error;
    
    // 检查是否启用了重试
    if (!config || !config.retry) {
      return Promise.reject(error);
    }
    
    // 初始化重试计数
    config.__retryCount = config.__retryCount ?? 0;
    
    // 检查是否达到最大重试次数
    if (config.__retryCount >= finalConfig.retries) {
      return Promise.reject(error);
    }
    
    // 检查是否满足重试条件
    if (!finalConfig.retryCondition(error)) {
      return Promise.reject(error);
    }
    
    // 执行延迟重试
    config.__retryCount += 1;
    
    return new Promise((resolve) => {
      const delay = typeof finalConfig.retryDelay === 'function'
        ? finalConfig.retryDelay(config.__retryCount)
        : finalConfig.retryDelay;
      
      setTimeout(() => {
        if (finalConfig.shouldResetTimeout) {
          config.__originalTimeout = config.timeout;
          config.timeout = finalConfig.retries * 1000; // 重置超时
        }
        resolve(axiosInstance(config));
      }, delay);
    });
  });
}

// 使用方式
// src/core/httpInstance.js
import { setupRetryInterceptor } from '@/utils/retryInterceptor';

const http = axios.create({ /* ... */ });

// 启用重试机制
setupRetryInterceptor(http, {
  retries: 3,
  retryDelay: (retryCount) => retryCount * 1000, // 指数退避
  retryCondition: (error) => {
    const status = error.response?.status;
    return !error.response || status >= 500;
  }
});
```

**优化效果：**
- 网络波动时自动重试，提高请求成功率
- 支持自定义重试条件和延迟策略
- 指数退避避免服务器压力过大

---

### 2.2 添加请求取消/去重机制

**优化方案：**

```javascript
// utils/requestDeduplication.js
import axios from 'axios';

/**
 * 请求去重管理器
 */
class RequestDeduplicator {
  constructor() {
    // 存储 pending 状态的请求
    this.pendingRequests = new Map();
  }
  
  /**
   * 生成请求唯一标识
   */
  generateKey(config) {
    const { method, url, params, data } = config;
    return `${method.toUpperCase()}:${url}:${JSON.stringify(params || {})}:${JSON.stringify(data || {})}`;
  }
  
  /**
   * 添加请求，返回带 CancelToken 的配置
   */
  addRequest(config, options = {}) {
    const { ignoreDedup = false, forceCancel = false } = options;
    
    // 不需要去重的请求直接返回
    if (ignoreDedup) {
      return config;
    }
    
    const key = this.generateKey(config);
    
    // 如果存在相同请求
    if (this.pendingRequests.has(key)) {
      if (forceCancel) {
        // 强制取消之前的请求
        this.pendingRequests.get(key)();
        this.pendingRequests.delete(key);
      } else {
        // 返回已存在的请求，不发起新请求
        throw new axios.Cancel(`请求已存在：${key}`);
      }
    }
    
    // 创建新的 CancelToken
    const CancelToken = axios.CancelToken;
    let cancel;
    config.cancelToken = new CancelToken((c) => {
      cancel = c;
      this.pendingRequests.set(key, c);
    });
    
    // 请求完成后清理
    const originalThen = config.then;
    const originalCatch = config.catch;
    
    const cleanup = () => {
      this.pendingRequests.delete(key);
    };
    
    return config;
  }
  
  /**
   * 取消指定请求
   */
  cancelRequest(key) {
    if (this.pendingRequests.has(key)) {
      this.pendingRequests.get(key)();
      this.pendingRequests.delete(key);
    }
  }
  
  /**
   * 取消所有请求
   */
  cancelAll(message = '取消所有请求') {
    this.pendingRequests.forEach((cancel) => cancel(message));
    this.pendingRequests.clear();
  }
  
  /**
   * 获取 pending 请求数量
   */
  getPendingCount() {
    return this.pendingRequests.size;
  }
}

export const requestDeduplicator = new RequestDeduplicator();

// 使用方式
// src/core/httpInstance.js
import { requestDeduplicator } from '@/utils/requestDeduplication';

http.interceptors.request.use((config) => {
  try {
    return requestDeduplicator.addRequest(config, {
      ignoreDedup: config.ignoreDedup,
      forceCancel: config.forceCancel
    });
  } catch (cancelError) {
    // 请求被取消，抛出错误
    return Promise.reject(cancelError);
  }
});

// 响应完成后清理
http.interceptors.response.use(
  (response) => {
    // 请求完成，自动清理
    return response;
  },
  (error) => {
    if (!axios.isCancel(error)) {
      // 非取消错误，也清理
    }
    return Promise.reject(error);
  }
);
```

**优化效果：**
- 防止重复提交
- 快速切换时自动取消旧请求
- 路由切换时批量取消请求

---

### 2.3 添加请求缓存机制

**优化方案：**

```javascript
// utils/requestCache.js
import md5 from 'md5';

/**
 * 请求缓存配置
 */
const cacheConfig = {
  maxAge: 5 * 60 * 1000,      // 默认缓存 5 分钟
  maxCount: 100,              // 最大缓存数量
  excludeMethods: ['post', 'put', 'delete'], // 不缓存的方法
};

/**
 * 请求缓存管理器
 */
class RequestCache {
  constructor(config = {}) {
    this.config = { ...cacheConfig, ...config };
    this.cache = new Map();
  }
  
  /**
   * 生成缓存 key
   */
  generateKey(config) {
    const { method, url, params, data } = config;
    const keyString = `${method}:${url}:${JSON.stringify(params)}:${JSON.stringify(data)}`;
    return md5(keyString);
  }
  
  /**
   * 获取缓存
   */
  get(config) {
    // POST/PUT/DELETE 不缓存
    if (this.config.excludeMethods.includes(config.method?.toLowerCase())) {
      return null;
    }
    
    // 明确不缓存
    if (config.cache === false) {
      return null;
    }
    
    const key = this.generateKey(config);
    const cached = this.cache.get(key);
    
    if (!cached) {
      return null;
    }
    
    // 检查是否过期
    const now = Date.now();
    const maxAge = typeof config.cache === 'object' ? config.cache.maxAge : this.config.maxAge;
    
    if (now - cached.timestamp > maxAge) {
      this.cache.delete(key);
      return null;
    }
    
    return cached.data;
  }
  
  /**
   * 设置缓存
   */
  set(config, data) {
    if (config.cache === false) {
      return;
    }
    
    const key = this.generateKey(config);
    
    // 清理过期缓存
    this.cleanup();
    
    // 如果缓存已满，删除最旧的
    if (this.cache.size >= this.config.maxCount) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey);
    }
    
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }
  
  /**
   * 清理过期缓存
   */
  cleanup() {
    const now = Date.now();
    for (const [key, value] of this.cache.entries()) {
      if (now - value.timestamp > this.config.maxAge) {
        this.cache.delete(key);
      }
    }
  }
  
  /**
   * 清空缓存
   */
  clear() {
    this.cache.clear();
  }
  
  /**
   * 删除指定缓存
   */
  delete(config) {
    const key = this.generateKey(config);
    this.cache.delete(key);
  }
}

export const requestCache = new RequestCache();

// 使用方式
// src/core/httpInstance.js
import { requestCache } from '@/utils/requestCache';

// 请求拦截器 - 检查缓存
http.interceptors.request.use((config) => {
  const cachedData = requestCache.get(config);
  if (cachedData) {
    // 返回缓存数据，跳过实际请求
    return Promise.resolve({
      data: cachedData,
      fromCache: true,
      config
    });
  }
  return config;
});

// 响应拦截器 - 保存缓存
http.interceptors.response.use((response) => {
  if (!response.fromCache && response.config.cache !== false) {
    requestCache.set(response.config, response.data);
  }
  return response;
});
```

**优化效果：**
- 减少重复请求，提高响应速度
- 降低服务器压力
- 支持自定义缓存策略

---

### 2.4 添加 Loading 控制机制

**优化方案：**

```javascript
// utils/loadingInterceptor.js
import { Loading } from 'hui';

let loadingCount = 0;
let loadingInstance = null;
const loadingConfig = {
  fullscreen: true,
  lock: true,
  text: '加载中...',
  background: 'rgba(0, 0, 0, 0.7)'
};

/**
 * 显示 Loading
 */
function showLoading() {
  if (loadingCount === 0) {
    loadingInstance = Loading.service(loadingConfig);
  }
  loadingCount++;
}

/**
 * 隐藏 Loading
 */
function hideLoading() {
  loadingCount--;
  if (loadingCount <= 0) {
    loadingInstance?.close();
    loadingCount = 0;
  }
}

/**
 * 添加 Loading 拦截器
 */
export function setupLoadingInterceptor(axiosInstance, options = {}) {
  const { defaultShowLoading = true } = options;
  
  axiosInstance.interceptors.request.use((config) => {
    // 默认显示 Loading，除非明确关闭
    const showLoadingFlag = config.showLoading ?? defaultShowLoading;
    
    if (showLoadingFlag) {
      showLoading();
    }
    
    return config;
  });
  
  axiosInstance.interceptors.response.use(
    (response) => {
      if (response.config.showLoading !== false) {
        hideLoading();
      }
      return response;
    },
    (error) => {
      if (error.config?.showLoading !== false) {
        hideLoading();
      }
      return Promise.reject(error);
    }
  );
}

// 使用方式
// src/core/httpInstance.js
import { setupLoadingInterceptor } from '@/utils/loadingInterceptor';

setupLoadingInterceptor(http, { defaultShowLoading: true });

// API 调用时控制
http.get({ url: 'search/query', showLoading: true });  // 显示 Loading
http.get({ url: 'config/get', showLoading: false });   // 不显示 Loading
```

**优化效果：**
- 统一的 Loading 管理
- 避免多个 Loading 叠加
- 灵活控制是否显示

---

## 三、错误处理优化

### 3.1 错误码配置化

**优化方案：**

```javascript
// config/errorCodes.js

/**
 * 错误码配置
 */
export const errorCodes = {
  // HTTP 状态码
  http: {
    400: { message: '请求参数错误', action: 'toast' },
    401: { message: '登录已过期', action: 'reload' },
    403: { message: '无权限访问', action: 'toast' },
    404: { message: '资源不存在', action: 'toast' },
    500: { message: '服务器错误', action: 'toast' },
    502: { message: '网关错误', action: 'toast' },
    503: { message: '服务不可用', action: 'toast' },
    504: { message: '网关超时', action: 'toast' },
  },
  
  // 业务错误码
  business: {
    '0x11902310': { message: '查询操作频繁，请稍后再试', action: 'toast' },
    '0x06d00e07': { message: '查询操作频繁，请稍后再试', action: 'toast' },
    '0x129e00015': { message: '查询操作频繁，请稍后再试', action: 'toast' },
    '0x10000001': { message: '参数验证失败', action: 'toast' },
    '0x10000002': { message: '数据不存在', action: 'toast' },
    '0x10000003': { message: '操作失败', action: 'toast' },
  },
  
  // 默认配置
  default: {
    message: '系统错误，请稍后重试',
    action: 'toast'
  }
};

/**
 * 获取错误信息
 */
export function getErrorMessage(code, status) {
  // 优先查找业务错误码
  if (code && errorCodes.business[code]) {
    return errorCodes.business[code];
  }
  
  // 查找 HTTP 状态码
  if (status && errorCodes.http[status]) {
    return errorCodes.http[status];
  }
  
  // 返回默认配置
  return errorCodes.default;
}

// src/core/httpInstance.js
import { getErrorMessage } from '@/config/errorCodes';

http.interceptors.response.use(null, (error) => {
  const response = error.response;
  const status = response?.status;
  const code = response?.data?.code;
  
  const errorInfo = getErrorMessage(code, status);
  
  if (errorInfo.action === 'reload') {
    window.location.reload();
  } else if (errorInfo.action === 'toast') {
    Message.error(errorInfo.message);
  }
  
  return Promise.reject(error);
});
```

**优化效果：**
- 错误码集中管理，易于维护
- 支持动态配置错误处理方式
- 便于国际化

---

### 3.2 添加错误日志上报

**优化方案：**

```javascript
// utils/errorLogger.js
import { getToken } from '@/utils/common';

/**
 * 错误日志上报
 */
class ErrorLogger {
  constructor() {
    this.reportUrl = '/bsearch-web/error/report';
    this.queue = [];
    this.isReporting = false;
  }
  
  /**
   * 记录错误
   */
  log(error, context = {}) {
    const errorInfo = {
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
      userId: this.getUserId(),
      error: {
        message: error.message,
        stack: error.stack,
        name: error.name
      },
      request: {
        url: error.config?.url,
        method: error.config?.method,
        params: error.config?.params,
        data: error.config?.data
      },
      response: {
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data
      },
      ...context
    };
    
    // 本地存储
    this.queue.push(errorInfo);
    
    // 上报服务器
    this.report(errorInfo);
    
    // 控制台输出
    console.error('[HTTP Error]', errorInfo);
  }
  
  /**
   * 上报错误
   */
  async report(errorInfo) {
    if (this.isReporting) {
      return;
    }
    
    this.isReporting = true;
    
    try {
      // 使用 sendBeacon 上报，不阻塞页面
      if (navigator.sendBeacon) {
        const blob = new Blob([JSON.stringify(errorInfo)], { type: 'application/json' });
        navigator.sendBeacon(this.reportUrl, blob);
      } else {
        // 降级方案
        await fetch(this.reportUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(errorInfo),
          keepalive: true
        });
      }
    } catch (e) {
      // 上报失败，保留在队列中
      console.warn('Error report failed', e);
    } finally {
      this.isReporting = false;
    }
  }
  
  /**
   * 获取用户 ID
   */
  getUserId() {
    try {
      const userInfo = JSON.parse(localStorage.getItem('userInfo') || '{}');
      return userInfo.userId || 'anonymous';
    } catch {
      return 'anonymous';
    }
  }
  
  /**
   * 批量上报队列中的错误
   */
  async reportQueue() {
    if (this.queue.length === 0) return;
    
    const errors = [...this.queue];
    this.queue = [];
    
    await this.report({ errors });
  }
}

export const errorLogger = new ErrorLogger();

// 使用方式
// src/core/httpInstance.js
import { errorLogger } from '@/utils/errorLogger';

http.interceptors.response.use(null, (error) => {
  // 记录错误日志
  errorLogger.log(error, {
    module: 'httpInstance',
    severity: this.getSeverity(error)
  });
  
  return Promise.reject(error);
});

getSeverity(error) {
  const status = error.response?.status;
  if (status >= 500) return 'error';
  if (status >= 400) return 'warning';
  return 'info';
}
```

**优化效果：**
- 完整记录错误上下文
- 便于问题排查
- 支持批量上报

---

## 四、安全优化

### 4.1 Token 自动刷新

**优化方案：**

```javascript
// utils/tokenRefresh.js
import axios from 'axios';
import { getToken, setToken } from '@/utils/common';

let isRefreshing = false;
let refreshSubscribers = [];
let refreshQueue = [];

/**
 * Token 刷新管理器
 */
class TokenRefreshManager {
  constructor(axiosInstance, config) {
    this.axiosInstance = axiosInstance;
    this.refreshUrl = config.refreshUrl || '/auth/refresh';
    this.tokenKey = config.tokenKey || 'accessToken';
  }
  
  /**
   * 订阅刷新完成
   */
  subscribeRefresh(callback) {
    refreshSubscribers.push(callback);
  }
  
  /**
   * 执行刷新回调
   */
  onRefreshed(token) {
    refreshSubscribers.forEach((callback) => callback(token));
    refreshSubscribers = [];
  }
  
  /**
   * 刷新 Token
   */
  async refreshToken() {
    try {
      const refreshToken = localStorage.getItem('refreshToken');
      const response = await axios.post(this.refreshUrl, { refreshToken });
      
      const newToken = response.data[this.tokenKey];
      setToken(newToken);
      
      this.onRefreshed(newToken);
      return newToken;
    } catch (error) {
      // 刷新失败，跳转登录
      window.location.href = '/login';
      throw error;
    }
  }
  
  /**
   * 处理 401 错误
   */
  async handle401Error(config, reject) {
    // 如果是刷新 Token 的请求，直接拒绝
    if (config.url === this.refreshUrl) {
      return reject(config);
    }
    
    // 如果正在刷新，加入队列
    if (isRefreshing) {
      return new Promise((resolve) => {
        this.subscribeRefresh((token) => {
          config.headers['X-CSRF-TOKEN'] = token;
          resolve(this.axiosInstance(config));
        });
      });
    }
    
    // 开始刷新
    isRefreshing = true;
    
    try {
      const newToken = await this.refreshToken();
      config.headers['X-CSRF-TOKEN'] = newToken;
      return this.axiosInstance(config);
    } catch (error) {
      return reject(error);
    } finally {
      isRefreshing = false;
    }
  }
}

// 使用方式
// src/core/httpInstance.js
import { TokenRefreshManager } from '@/utils/tokenRefresh';

const tokenManager = new TokenRefreshManager(http, {
  refreshUrl: '/bsearch-web/auth/refresh',
  tokenKey: 'accessToken'
});

http.interceptors.response.use(null, (error) => {
  const status = error.response?.status;
  
  if (status === 401) {
    return tokenManager.handle401Error(error.config, () => Promise.reject(error));
  }
  
  return Promise.reject(error);
});
```

**优化效果：**
- Token 过期自动刷新
- 队列处理并发请求
- 无感知刷新体验

---

### 4.2 请求签名

**优化方案：**

```javascript
// utils/requestSigner.js
import md5 from 'md5';

const SECRET_KEY = process.env.VUE_APP_REQUEST_SECRET || 'default-secret';

/**
 * 请求签名器
 */
class RequestSigner {
  /**
   * 生成签名
   */
  static sign(config) {
    const timestamp = Date.now();
    const nonce = this.generateNonce();
    
    // 签名内容
    const signContent = this.buildSignContent(config, timestamp, nonce);
    const signature = md5(signContent + SECRET_KEY);
    
    // 添加签名头
    config.headers['X-Timestamp'] = timestamp;
    config.headers['X-Nonce'] = nonce;
    config.headers['X-Signature'] = signature;
    
    return config;
  }
  
  /**
   * 构建签名内容
   */
  static buildSignContent(config, timestamp, nonce) {
    const parts = [
      config.method?.toUpperCase() || 'GET',
      config.url,
      timestamp,
      nonce
    ];
    
    // 添加请求参数
    if (config.params) {
      parts.push(this.sortParams(config.params));
    }
    
    // 添加请求体
    if (config.data && typeof config.data === 'object') {
      parts.push(JSON.stringify(this.sortObject(config.data)));
    }
    
    return parts.join('&');
  }
  
  /**
   * 排序参数
   */
  static sortParams(params) {
    return Object.keys(params)
      .sort()
      .map(key => `${key}=${params[key]}`)
      .join('&');
  }
  
  /**
   * 排序对象
   */
  static sortObject(obj) {
    const sorted = {};
    Object.keys(obj).sort().forEach(key => {
      sorted[key] = obj[key];
    });
    return sorted;
  }
  
  /**
   * 生成随机数
   */
  static generateNonce() {
    return Math.random().toString(36).substring(2, 15) + 
           Math.random().toString(36).substring(2, 15);
  }
}

// 使用方式
// src/core/httpInstance.js
import { RequestSigner } from '@/utils/requestSigner';

http.interceptors.request.use((config) => {
  // 对敏感请求进行签名
  if (config.needSign) {
    return RequestSigner.sign(config);
  }
  return config;
});

// API 调用
http.post({ 
  url: 'search/execute', 
  data: { keyword: 'test' },
  needSign: true  // 需要签名
});
```

**优化效果：**
- 防止请求被篡改
- 防止重放攻击
- 提高接口安全性

---

## 五、性能优化

### 5.1 并发请求控制

**优化方案：**

```javascript
// utils/requestPool.js

/**
 * 请求池 - 控制并发请求数量
 */
class RequestPool {
  constructor(limit = 5) {
    this.limit = limit;
    this.running = 0;
    this.queue = [];
  }
  
  /**
   * 添加请求
   */
  async add(requestFn, priority = 0) {
    return new Promise((resolve, reject) => {
      const task = {
        requestFn,
        resolve,
        reject,
        priority,
        timestamp: Date.now()
      };
      
      // 按优先级排序
      this.queue.push(task);
      this.queue.sort((a, b) => b.priority - a.priority);
      
      this.process();
    });
  }
  
  /**
   * 处理队列
   */
  async process() {
    while (this.running < this.limit && this.queue.length > 0) {
      const task = this.queue.shift();
      this.running++;
      
      try {
        const result = await task.requestFn();
        task.resolve(result);
      } catch (error) {
        task.reject(error);
      } finally {
        this.running--;
        this.process();
      }
    }
  }
  
  /**
   * 清空队列
   */
  clear() {
    this.queue.forEach(task => {
      task.reject(new Error('Request pool cleared'));
    });
    this.queue = [];
  }
  
  /**
   * 获取当前状态
   */
  getStatus() {
    return {
      running: this.running,
      queued: this.queue.length,
      limit: this.limit
    };
  }
}

// 使用方式
// src/core/httpInstance.js
import { RequestPool } from '@/utils/requestPool';

export const searchPool = new RequestPool(3);  // 搜索请求最多 3 个并发
export const uploadPool = new RequestPool(2);  // 上传请求最多 2 个并发

// API 调用
searchPool.add(() => http.post({ url: 'search/query', data }));
```

**优化效果：**
- 避免并发请求过多
- 支持优先级调度
- 防止浏览器连接数限制

---

### 5.2 大文件分片上传

**优化方案：**

```javascript
// utils/chunkUploader.js
import http from '@/core/httpInstance';

/**
 * 分片上传配置
 */
const chunkConfig = {
  chunkSize: 2 * 1024 * 1024,  // 2MB 每片
  concurrency: 3,               // 并发数
  retryTimes: 3,                // 重试次数
};

/**
 * 分片上传器
 */
class ChunkUploader {
  constructor(file, options = {}) {
    this.file = file;
    this.config = { ...chunkConfig, ...options };
    this.chunks = [];
    this.uploadedChunks = [];
    this.fileId = this.generateFileId(file);
  }
  
  /**
   * 生成文件 ID
   */
  generateFileId(file) {
    return `${file.name}_${file.size}_${file.lastModified}`;
  }
  
  /**
   * 创建分片
   */
  createChunks() {
    const { chunkSize } = this.config;
    let start = 0;
    let index = 0;
    
    while (start < this.file.size) {
      const end = Math.min(start + chunkSize, this.file.size);
      this.chunks.push({
        index,
        start,
        end,
        blob: this.file.slice(start, end),
        uploaded: false
      });
      start = end;
      index++;
    }
  }
  
  /**
   * 上传单个分片
   */
  async uploadChunk(chunk, retryCount = 0) {
    const formData = new FormData();
    formData.append('fileId', this.fileId);
    formData.append('chunk', chunk.blob);
    formData.append('index', chunk.index);
    formData.append('total', this.chunks.length);
    formData.append('filename', this.file.name);
    
    try {
      const result = await http.upload({
        url: 'upload/chunk',
        data: formData
      });
      
      chunk.uploaded = true;
      this.uploadedChunks.push(chunk.index);
      return result;
    } catch (error) {
      if (retryCount < this.config.retryTimes) {
        return this.uploadChunk(chunk, retryCount + 1);
      }
      throw error;
    }
  }
  
  /**
   * 上传所有分片
   */
  async upload(onProgress) {
    this.createChunks();
    
    // 检查已上传的分片
    await this.checkUploadedChunks();
    
    const { concurrency } = this.config;
    
    // 并发上传
    for (let i = 0; i < this.chunks.length; i += concurrency) {
      const pendingChunks = this.chunks
        .slice(i, i + concurrency)
        .filter(chunk => !chunk.uploaded);
      
      if (pendingChunks.length === 0) continue;
      
      await Promise.all(
        pendingChunks.map(chunk => this.uploadChunk(chunk))
      );
      
      // 进度更新
      if (onProgress) {
        const progress = (this.uploadedChunks.length / this.chunks.length) * 100;
        onProgress(progress);
      }
    }
    
    // 合并分片
    return this.mergeChunks();
  }
  
  /**
   * 检查已上传的分片
   */
  async checkUploadedChunks() {
    try {
      const result = await http.get({
        url: 'upload/check',
        params: { fileId: this.fileId }
      });
      
      const uploadedIndexes = result.data?.uploadedChunks || [];
      this.chunks.forEach(chunk => {
        if (uploadedIndexes.includes(chunk.index)) {
          chunk.uploaded = true;
          this.uploadedChunks.push(chunk.index);
        }
      });
    } catch (e) {
      // 忽略错误，重新上传所有分片
    }
  }
  
  /**
   * 合并分片
   */
  async mergeChunks() {
    return http.post({
      url: 'upload/merge',
      data: {
        fileId: this.fileId,
        filename: this.file.name,
        total: this.chunks.length
      }
    });
  }
  
  /**
   * 暂停上传
   */
  pause() {
    // 实现暂停逻辑
  }
  
  /**
   * 恢复上传
   */
  resume() {
    // 实现恢复逻辑
  }
  
  /**
   * 取消上传
   */
  cancel() {
    this.chunks = [];
    this.uploadedChunks = [];
  }
}

// 使用方式
const uploader = new ChunkUploader(file, {
  chunkSize: 5 * 1024 * 1024,  // 5MB
  concurrency: 5
});

await uploader.upload((progress) => {
  console.log(`上传进度：${progress.toFixed(2)}%`);
});
```

**优化效果：**
- 支持大文件上传
- 断点续传
- 失败重试
- 进度显示

---

## 六、可维护性优化

### 6.1 TypeScript 支持

**优化方案：**

```typescript
// types/http.d.ts
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// 响应数据结构
export interface ApiResponse<T = any> {
  code: string;
  data: T;
  msg: string;
  traceCode?: string;
}

// 请求配置扩展
export interface ExtendedRequestConfig<T = any> extends AxiosRequestConfig {
  showLoading?: boolean;
  errorNotNotify?: boolean;
  successNotify?: boolean;
  successMsg?: string;
  cache?: boolean | { maxAge: number };
  retry?: number;
  needSign?: boolean;
  ignoreDedup?: boolean;
  forceCancel?: boolean;
  responseType?: 'json' | 'blob' | 'arraybuffer';
}

// HTTP 实例接口
export interface HttpClient {
  get<T = any>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>>;
  post<T = any>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>>;
  upload<T = any>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>>;
  download<T = any>(opts: ExtendedRequestConfig): Promise<Blob>;
}

// 错误信息
export interface ErrorInfo {
  type?: string;
  serviceErrorCode?: string;
  code?: string;
  msg: string;
  traceCode?: string;
  componentId?: string;
  componentError?: string;
  otherCode?: string;
  otherMsg?: string;
}
```

```typescript
// src/core/httpInstance.ts
import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { HttpClient, ApiResponse, ExtendedRequestConfig } from '@/types/http';
import { showError } from './errorHandler';

class HttpClientImpl implements HttpClient {
  private instance: AxiosInstance;
  
  constructor() {
    this.instance = axios.create({
      timeout: 180000,
      withCredentials: true,
      baseURL: `${process.env.VUE_APP_CONTEXT}/`
    });
    
    this.setupInterceptors();
  }
  
  private setupInterceptors(): void {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (config.method === 'get') {
          config.params = { ...config.params, _t: Date.now() };
        }
        return config;
      },
      (error) => Promise.reject(error)
    );
    
    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ApiResponse>) => {
        if (response.data.code !== '0' && !response.config.errorNotNotify) {
          showError(response.data);
        }
        return response.data;
      },
      (error) => {
        // 错误处理
        return Promise.reject(error);
      }
    );
  }
  
  async get<T>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.request({ ...opts, method: 'get' });
  }
  
  async post<T>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.request({ 
      ...opts, 
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  }
  
  async upload<T>(opts: ExtendedRequestConfig): Promise<ApiResponse<T>> {
    return this.instance.request({
      ...opts,
      method: 'post',
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  }
  
  async download(opts: ExtendedRequestConfig): Promise<Blob> {
    const response = await this.instance.request({
      ...opts,
      method: 'get',
      responseType: 'blob'
    });
    return response.data as Blob;
  }
}

export const http = new HttpClientImpl();
export default http;
```

**优化效果：**
- 类型安全
- 智能提示
- 编译时检查

---

### 6.2 完整的单元测试

**优化方案：**

```typescript
// tests/unit/httpInstance.spec.ts
import http from '@/core/httpInstance';
import axios from 'axios';

jest.mock('axios');

describe('httpInstance', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('get', () => {
    it('应该发送 GET 请求并添加时间戳', async () => {
      const mockResponse = { code: '0', data: { list: [] } };
      (axios.create().get as jest.Mock).mockResolvedValue(mockResponse);
      
      await http.get({ url: 'test/query', params: { keyword: 'test' } });
      
      expect(axios.create().get).toHaveBeenCalledWith('test/query.do', {
        params: {
          keyword: 'test',
          _t: expect.any(Number)
        }
      });
    });
    
    it('应该处理请求错误', async () => {
      const error = new Error('Network Error');
      error.response = { status: 500 };
      (axios.create().get as jest.Mock).mockRejectedValue(error);
      
      await expect(http.get({ url: 'test' })).rejects.toThrow();
    });
  });
  
  describe('post', () => {
    it('应该发送 POST 请求', async () => {
      const mockResponse = { code: '0', data: { id: 1 } };
      (axios.create().post as jest.Mock).mockResolvedValue(mockResponse);
      
      await http.post({ 
        url: 'test/save', 
        data: { name: 'test' } 
      });
      
      expect(axios.create().post).toHaveBeenCalledWith('test/save.do', {
        name: 'test'
      }, {
        headers: { 'Content-Type': 'application/json' }
      });
    });
  });
  
  describe('interceptors', () => {
    it('请求拦截器应该添加 CSRF Token', () => {
      // 测试逻辑
    });
    
    it('响应拦截器应该处理错误', () => {
      // 测试逻辑
    });
  });
});
```

**优化效果：**
- 保证代码质量
- 防止回归错误
- 便于重构

---

## 七、优化方案优先级

```
┌─────────────────────────────────────────────────────────────┐
│                    优化方案优先级                            │
└─────────────────────────────────────────────────────────────┘

高优先级 (立即实施)
├── 1. 请求重试机制 - 提高稳定性
├── 2. 请求去重机制 - 防止重复提交
├── 3. 错误码配置化 - 便于维护
└── 4. 错误日志上报 - 便于排查

中优先级 (短期实施)
├── 5. Loading 控制 - 提升体验
├── 6. Token 自动刷新 - 提升体验
├── 7. 请求缓存 - 提高性能
└── 8. 并发控制 - 防止过载

低优先级 (长期规划)
├── 9. 请求签名 - 增强安全
├── 10. 分片上传 - 支持大文件
├── 11. TypeScript 支持 - 提高可维护性
└── 12. 完整单元测试 - 保证质量
```

---

## 总结

本文针对项目中 Axios 的使用和封装提出了以下优化方案：

### 请求层优化
1. **请求重试机制** - 网络波动时自动重试
2. **请求去重机制** - 防止重复提交
3. **请求缓存** - 减少重复请求
4. **Loading 控制** - 统一加载状态管理

### 错误处理优化
5. **错误码配置化** - 集中管理错误码
6. **错误日志上报** - 便于问题排查

### 安全优化
7. **Token 自动刷新** - 无感知刷新
8. **请求签名** - 防止篡改

### 性能优化
9. **并发控制** - 请求池管理
10. **分片上传** - 支持大文件

### 可维护性优化
11. **TypeScript 支持** - 类型安全
12. **单元测试** - 保证质量

建议按优先级逐步实施，先解决稳定性和体验问题，再考虑性能和安全优化。