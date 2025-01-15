/**
 * 简单封装BroadcastChannel的用法
 */
const Channel = {
  /**
   * BroadcastChannel对象Map
   */
  channelMap: new Map(),

  /**
   * 发送消息，重载方法，可直接调用，省略对象实例化操作
   * @param {*} channelName 通道名称，用以区分不同的通道
   * @param {*} object 消息体
   */
  send: (channelName, object) => {
    if (!Channel.channelMap.has(channelName)) {
      let channel = new BroadcastChannel(channelName);
      Channel.channelMap.set(channelName, channel);
    }
    Channel.channelMap.get(channelName).postMessage(object);
  },

  /**
   * 监听消息，重载方法，可直接调用，省略对象实例化操作
   * @param {*} channelName 通道名称，用以区分不同的通道
   * @param {*} callback 回调函数
   */
  listen: (channelName, callback) => {
    if (!Channel.channelMap.has(channelName)) {
      let channel = new BroadcastChannel(channelName);
      Channel.channelMap.set(channelName, channel);
    }
    Channel.channelMap.get(channelName).onmessage = ({ data }) => {
      callback(data);
    };
  },

  /**
   * 通道关闭
   * @param {*} channelName 通道名称，用以区分不同的通道
   */
  close: (channelName) => {
    if (Channel.channelMap.has(channelName)) {
      Channel.channelMap.get(channelName).close();
      Channel.channelMap.delete(channelName);
    }
  },

  /**
   * 通道枚举，定义业务中需要用到的所有通道名称枚举，可根据业务需求无限扩容
   */
  channelEnum: {
    TEST: { name: 'test', coment: '测试通道' },
    REMOVE_TAB: { name: 'removeTab', comment: 'tabs标签移除时，用以通知被关闭页面，进行诸如实例、注册事件等的销毁工作' },
    GLOBAL_LOADING: { name: 'globalLoading', comment: '全局加载动画' },
  },
};