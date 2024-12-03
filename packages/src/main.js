import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vant from 'vant'
import 'vant/lib/index.css'
import store from "./store";

import '@/styles/common.less'
import { PLACEHOLDER } from '@/lib/dic';
import { formatNumber, float2Percent } from '@/lib/tool';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'
import VueVirtualScroller from 'vue-virtual-scroller'

Vue.use(VueVirtualScroller)
Vue.use(ElementUI);
Vue.use(Vant);
Vue.config.productionTip = false;
Vue.prototype.$window = window;

Vue.mixin({
	created() {
		this.PLACEHOLDER = PLACEHOLDER
		this.formatNumber = formatNumber
		this.float2Percent = float2Percent
	},
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
