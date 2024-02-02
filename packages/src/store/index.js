import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  // 可直接读取state中的值
  state: {
    name: "xiadong",
    number: 8,
    list: [
      { id: 1, name: "xiadong1" },
      { id: 2, name: "xiadong2" },
      { id: 3, name: "xiadong3" },
    ],
  },
  // 也可以对stat中的值就行修饰后读取
  getters: {
    getNameProcess(state) {
      return `hello${state.name}`;
    },
  },
  // Mutations里面的函数必须是同步操作，不能包含异步操作！
  mutations: {
    setNumber(state) {
      state.number = 10;
    },
    // 带参数的方法
    setNumberIsWhat(state, parmnumber) {
      state.number = parmnumber;
    },
    // 更优雅的带参数的方法
    newSetNumberIsWhat(state, payload) {
      state.number = payload.number;
    },
  },
  actions: {
    // 增加actions属性
    // 将{commit}从content中解构出来
    syncSetNum({commit},payload) {
      // 增加setNum方法，默认第一个参数是content，其值是复制的一份store
      return new Promise((resolve) => {
        // 我们模拟一个异步操作，1秒后修改number为888
        setTimeout(() => {
          commit("newSetNumberIsWhat", payload);
          resolve();
        }, 1000);
      });
    },
  },
});

export default store;
