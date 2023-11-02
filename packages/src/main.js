import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import store from "./store";

import '@/styles/common.less'
import { PLACEHOLDER } from '@/lib/dic';
import { formatNumber, float2Percent } from '@/lib/tool';

Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.mixin({
	created() {
		this.PLACEHOLDER = PLACEHOLDER
		this.formatNumber = formatNumber
		this.float2Percent = float2Percent
	},
})

new Vue({
  router,
  // store,
  render: (h) => h(App),
}).$mount("#app");
