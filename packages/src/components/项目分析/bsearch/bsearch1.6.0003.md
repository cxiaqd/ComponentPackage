**User:**

<task>
分析一下本项目应用了哪些技术，同时从架构、打包、模块、功能、优化等各个方面总结一下本项目
</task>
<environment_details>
# VSCode Visible Files
bsearch-frontend\search-center\src\pages\businessComponents\businessSubthemeResult\index.vue

# VSCode Open Tabs
bsearch-frontend/search-center/vue.config.js,bsearch-frontend/search-center/src/pages/businessComponents/snapClusterResult/snapCard/snapBusinessCard.vue,bsearch-frontend/search-center/src/components/commonSubthemeResult/src/commonSubthemeResult.vue,bsearch-frontend/search-center/src/store/fusion/state.js,bsearch-frontend/search-center/src/store/fusion/mutations.js,bsearch-frontend/search-center/src/store/fusion/getters.js,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/builtDialog/index.vue,bsearch-frontend/search-center/src/components/imgHistory/src/historyCard.vue,bsearch-frontend/search-center/src/mixins/commonOperation.js,bsearch-frontend/search-center/src/pages/fusionResult/fusionResult.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/targetTrackPanel/targetTrackPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/traceBusiness.js,bsearch-frontend/search-center/src/pages/distributedSearch/distributedSearch.vue,bsearch-frontend/search-center/src/pages/distributedSearch/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/imageBusiness.js,bsearch-frontend/search-center/src/components/uploadCard/src/uploadCard.vue,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.scss,bsearch-frontend/search-center/package.json

# Current Time
2026/3/19 下午10:32:24 (Asia/Shanghai, UTC+8:00)

# Current Cost
$0.00

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
<model>Qwen3-Coder-480B</model>


# Current Workspace Directory (g:/projectSpace/北京体态/bSearch) Files
_pkg/
_pkg/linux/
_pkg/linux/bin/
_pkg/linux/bin/bsearchdb/
_pkg/linux/bin/tracedb/
_pkg/linux/language/
_pkg/linux/language/en_US/
_pkg/linux/language/zh_CN/
_pkg/linux/META-INF/
_pkg/linux/META-INF/icon/
_pkg/linux/META-INF/icon/menu/
_pkg/linux/META-INF/language/
_pkg/linux/META-INF/language/zh_CN/
_pkg/linux/script/
_pkg/linux/script/bsearch-trace/
_pkg/linux/script/bsearch-trace/jsvc_platforms/
_pkg/linux/script/bsearch-trace/jsvc_platforms/aarch64/
_pkg/linux/script/bsearch-web/
_pkg/linux/script/bsearch-web/jsvc_platforms/
_pkg/linux/script/bsearch-web/jsvc_platforms/aarch64/
_pkg/windows/
bsearch-frontend/
bsearch-frontend/data-config/
bsearch-frontend/data-config/public/
bsearch-frontend/data-config/public/static/
bsearch-frontend/data-config/public/static/i18n/
bsearch-frontend/data-config/public/static/i18n/en_US/
bsearch-frontend/data-config/public/static/i18n/zh_CN/
bsearch-frontend/data-config/public/static/images/
bsearch-frontend/data-config/public/static/skin/
bsearch-frontend/data-config/public/static/skin/blue/
bsearch-frontend/data-config/public/static/skin/blue/fonts/
bsearch-frontend/data-config/public/static/skin/redblack/
bsearch-frontend/data-config/public/static/skin/redblack/fonts/
bsearch-frontend/data-config/src/
bsearch-frontend/data-config/src/api/
bsearch-frontend/data-config/src/api/dataSource/
bsearch-frontend/data-config/src/api/fieldConfig/
bsearch-frontend/data-config/src/api/modelManage/
bsearch-frontend/data-config/src/api/searchShow/
bsearch-frontend/data-config/src/api/themeDataType/
bsearch-frontend/data-config/src/assets/
bsearch-frontend/data-config/src/assets/images/
bsearch-frontend/data-config/src/assets/images/svg/
bsearch-frontend/data-config/src/components/
bsearch-frontend/data-config/src/components/errorPage/
bsearch-frontend/data-config/src/components/errorPage/src/
bsearch-frontend/data-config/src/components/intentsCard/
bsearch-frontend/data-config/src/components/intentsCard/src/
bsearch-frontend/data-config/src/components/modelCard/
bsearch-frontend/data-config/src/components/modelCard/src/
bsearch-frontend/data-config/src/components/sentenceAdd/
bsearch-frontend/data-config/src/components/sentenceAdd/src/
bsearch-frontend/data-config/src/components/starLevel/
bsearch-frontend/data-config/src/components/starLevel/src/
bsearch-frontend/data-config/src/components/svg/
bsearch-frontend/data-config/src/components/wordMarked/
bsearch-frontend/data-config/src/components/wordMarked/src/
bsearch-frontend/data-config/src/core/
bsearch-frontend/data-config/src/i18n/
bsearch-frontend/data-config/src/i18n/en_US/
bsearch-frontend/data-config/src/i18n/zh_CN/
bsearch-frontend/data-config/src/lib/
bsearch-frontend/data-config/src/lib/dic/
bsearch-frontend/data-config/src/mixins/
bsearch-frontend/data-config/src/pages/
bsearch-frontend/data-config/src/pages/dataSourceAdd/
bsearch-frontend/data-config/src/pages/dataSourceInit/
bsearch-frontend/data-config/src/pages/dataSourceTable/
bsearch-frontend/data-config/src/pages/fieldConfig/
bsearch-frontend/data-config/src/pages/intentsAdd/
bsearch-frontend/data-config/src/pages/modelAdd/
bsearch-frontend/data-config/src/pages/modelManage/
bsearch-frontend/data-config/src/pages/searchShow/
bsearch-frontend/data-config/src/pages/searchShow/sortingConfig/
bsearch-frontend/data-config/src/pages/tableConfig/
bsearch-frontend/data-config/src/pages/themeConfig/
bsearch-frontend/data-config/src/router/
bsearch-frontend/data-config/src/store/
bsearch-frontend/data-config/src/store/common/
bsearch-frontend/data-config/src/style/
bsearch-frontend/data-config/src/style/mixins/
bsearch-frontend/data-config/src/utils/
bsearch-frontend/data-config/tests/
bsearch-frontend/data-config/tests/unit/
bsearch-frontend/developdoc/
bsearch-frontend/developdoc/public/
bsearch-frontend/developdoc/public/static/
bsearch-frontend/developdoc/public/static/i18n/
bsearch-frontend/developdoc/public/static/i18n/en_US/
bsearch-frontend/developdoc/public/static/i18n/zh_CN/
bsearch-frontend/developdoc/public/static/images/
bsearch-frontend/developdoc/public/static/skin/
bsearch-frontend/developdoc/public/static/skin/blue/
bsearch-frontend/developdoc/public/static/skin/blue/fonts/
bsearch-frontend/developdoc/src/
bsearch-frontend/developdoc/src/api/
bsearch-frontend/developdoc/src/assets/
bsearch-frontend/developdoc/src/assets/images/
bsearch-frontend/developdoc/src/assets/images/svg/
bsearch-frontend/developdoc/src/components/
bsearch-frontend/developdoc/src/components/errorPage/
bsearch-frontend/developdoc/src/components/errorPage/src/
bsearch-frontend/developdoc/src/components/svg/
bsearch-frontend/developdoc/src/core/
bsearch-frontend/developdoc/src/customize/
bsearch-frontend/developdoc/src/i18n/
bsearch-frontend/developdoc/src/i18n/en_US/
bsearch-frontend/developdoc/src/i18n/zh_CN/
bsearch-frontend/developdoc/src/mixins/
bsearch-frontend/developdoc/src/pages/
bsearch-frontend/developdoc/src/pages/demo/
bsearch-frontend/developdoc/src/router/
bsearch-frontend/developdoc/src/store/
bsearch-frontend/developdoc/src/store/common/
bsearch-frontend/developdoc/src/style/
bsearch-frontend/developdoc/src/style/mixins/
bsearch-frontend/developdoc/src/utils/
bsearch-frontend/developdoc/tests/
bsearch-frontend/developdoc/tests/unit/
bsearch-frontend/innovative-bussiness/
bsearch-frontend/innovative-bussiness/public/
bsearch-frontend/innovative-bussiness/public/static/
bsearch-frontend/innovative-bussiness/public/static/i18n/
bsearch-frontend/innovative-bussiness/public/static/i18n/en_US/
bsearch-frontend/innovative-bussiness/public/static/i18n/zh_CN/
bsearch-frontend/innovative-bussiness/public/static/images/
bsearch-frontend/innovative-bussiness/public/static/images/backpackBag/
bsearch-frontend/innovative-bussiness/public/static/images/boots/
bsearch-frontend/innovative-bussiness/public/static/images/boots/female/
bsearch-frontend/innovative-bussiness/public/static/images/boots/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/boots/male/
bsearch-frontend/innovative-bussiness/public/static/images/boots/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/casquette/
bsearch-frontend/innovative-bussiness/public/static/images/casquette/female/
bsearch-frontend/innovative-bussiness/public/static/images/casquette/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/casquette/male/
bsearch-frontend/innovative-bussiness/public/static/images/casquette/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/colors/
bsearch-frontend/innovative-bussiness/public/static/images/glass/
bsearch-frontend/innovative-bussiness/public/static/images/hasBag/
bsearch-frontend/innovative-bussiness/public/static/images/hasHat/
bsearch-frontend/innovative-bussiness/public/static/images/helmet/
bsearch-frontend/innovative-bussiness/public/static/images/helmet/female/
bsearch-frontend/innovative-bussiness/public/static/images/helmet/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/helmet/male/
bsearch-frontend/innovative-bussiness/public/static/images/helmet/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketFigure/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/downCoat/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/downCoat/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/downCoat/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/downCoat/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/downCoat/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/longSleeve/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/longSleeve/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/longSleeve/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/longSleeve/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/longSleeve/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/overCoat/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/overCoat/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/overCoat/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/overCoat/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/overCoat/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/shortSleeve/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/shortSleeve/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/shortSleeve/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/shortSleeve/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/shortSleeve/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/thickCoat/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/thickCoat/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/thickCoat/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/thickCoat/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/thickCoat/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/workCoat/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/workCoat/female/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/workCoat/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/workCoat/male/
bsearch-frontend/innovative-bussiness/public/static/images/jacketStyle/workCoat/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/longHair/
bsearch-frontend/innovative-bussiness/public/static/images/longTrousers/
bsearch-frontend/innovative-bussiness/public/static/images/longTrousers/female/
bsearch-frontend/innovative-bussiness/public/static/images/longTrousers/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/longTrousers/male/
bsearch-frontend/innovative-bussiness/public/static/images/longTrousers/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/manShoe/
bsearch-frontend/innovative-bussiness/public/static/images/manShoe/female/
bsearch-frontend/innovative-bussiness/public/static/images/manShoe/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/manShoe/male/
bsearch-frontend/innovative-bussiness/public/static/images/manShoe/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/mask/
bsearch-frontend/innovative-bussiness/public/static/images/shortHair/
bsearch-frontend/innovative-bussiness/public/static/images/shortTrousers/
bsearch-frontend/innovative-bussiness/public/static/images/shortTrousers/female/
bsearch-frontend/innovative-bussiness/public/static/images/shortTrousers/femaleChild/
bsearch-frontend/innovative-bussiness/public/static/images/shortTrousers/male/
bsearch-frontend/innovative-bussiness/public/static/images/shortTrousers/maleChild/
bsearch-frontend/innovative-bussiness/public/static/images/shoulderBag/
bsearch-frontend/innovative-bussiness/public/static/images/skirt/
bsearch-frontend/innovative-bussiness/public/static/images/skirt/female/

(File list truncated. Use list_files on specific subdirectories if you need to explore further.)
</environment_details>

---

**Assistant:**

<thinking>
我已经获取了各个子项目的 package.json 和 search-center 的 vue.config.js。现在我需要进一步了解项目的架构和代码结构。让我继续读取一些关键的源代码文件，包括：
1. 主入口文件
2. 路由配置
3. Store 结构
4. 一些核心组件和 mixins

让我读取更多文件来了解项目的架构模式。
</thinking>

让我继续读取更多核心文件来了解项目的架构和代码组织方式。

<read_file>
<args>
  <file>
    <path>bsearch-frontend/search-center/src/main.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/router/index.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/store/fusion/state.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/mixins/commonOperation.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/pages/fusionResult/fusionResult.vue</path>
  </file>
</args>
</read_file>

[Response interrupted by a tool use result. Only one tool may be used at a time and should be placed at the end of the message.]

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>bsearch-frontend/search-center/src/main.js</path>
<content lines="1-66">
 1 | import Vue from 'vue';
 2 | import './wistom-base';
 3 | import hui from 'hui';
 4 | import store from '@/store';
 5 | import selectionPointPro from 'remote-selection-point/lib/selection-point-pro.umd.min';
 6 | import icons from '@hui/svg-icon';
 7 | import '@hui/svg-icon/lib/svg-icon.css';
 8 | import '@/core/huiPro';
 9 | import initApp from '@/core/initApp';
10 | import quickSearch from '@/mixins/quickSearch';
11 | import buried from '@/mixins/buried';
12 | import globalMathod from '@/plugin/globalMethod';
13 | import SimplePlayerPro from 'simple-player-pro/packages/player-pro/index';
14 | import 'animate.css/animate.min.css';
15 | import himapvue from 'hi-map-vue';
16 | import 'hi-map-vue/lib/style.css';
17 | import 'remote-selection-point/lib/selection-point-pro.css';
18 | import 'perfect-scrollbar/css/perfect-scrollbar.css';
19 | import './plugin/drag';
20 | import './svg-symbol-icon.js';
21 | import './style/uPlusIcon';
22 | 
23 | import { preFetchLib, bindExternals } from 'hel-micro';
24 | bindExternals({ vue: Vue, hui: hui });
25 | (async function() {
26 |   const mod = await preFetchLib('remote-selection-point', {
27 |     async getSubAppAndItsVersionFn() {
28 |       // 自定义元数据获取请求
29 |       const res = await fetch('/imap-server/selection/remote-selection-point/hel-meta.json');
30 |       if (res.status !== 200) {
31 |         Vue.use(selectionPointPro);
32 |         store.commit('setSelecetionOline', false);
33 |       }
34 |       const meta = res.json();
35 |       return meta;
36 |     },
37 |     skip404Sniff: true
38 |   }); // 默认tomcat服务器
39 |   // console.log('mod:', mod);
40 |   Vue.use(mod);
41 |   store.commit('setInstall', true);
42 |   // initApp(Vue);
43 |   // import('./loadApp');
44 | })().catch(err => {
45 |   // initApp(Vue);
46 |   // import('./loadApp');
47 |   console.error('loadApp err: ', err);
48 | });
49 | 
50 | // 设置极简播放器关闭时不遍历dom树
51 | window.CC_DONT_UPDATE_RENDERTREE_IF_NO_WND = true;
52 | Vue.use(SimplePlayerPro);
53 | Vue.use(himapvue);
54 | const { Message, MessageBox, SvgIcon } = hui;
55 | Vue.component(SvgIcon.name, SvgIcon);
56 | Vue.use(globalMathod);
57 | for (const icon of icons) {
58 |   Vue.component(icon.name, icon);
59 | }
60 | Vue.mixin(quickSearch);
61 | Vue.mixin(buried);
62 | Vue.prototype.bus = new Vue();
63 | Vue.prototype.$confirm = MessageBox.confirm;
64 | Vue.prototype.$message = Message;
65 | 
66 | initApp(Vue);
</content>
</file>
<file><path>bsearch-frontend/search-center/src/router/index.js</path>
<content lines="1-40">
 1 | import Vue from 'vue';
 2 | import Router from 'vue-router';
 3 | import routes from './router.config.js';
 4 | 
 5 | Vue.use(Router);
 6 | 
 7 | const createRoute = routes => {
 8 |   return routes.reduce((processedRoutes, currentRoute) => {
 9 |     processedRoutes.push(processRouteObj(currentRoute));
10 |     return processedRoutes;
11 |   }, []);
12 | };
13 | 
14 | const processRouteObj = ({ children, component, ...args }) => {
15 |   return Object.assign(
16 |     {
17 |       component: () => import(/* webpackInclude: /\.(js|vue)$/ */ `@/pages/${component}`),
18 |       children: children ? createRoute(children) : []
19 |     },
20 |     args
21 |   );
22 | };
23 | const router = new Router({
24 |   mode: 'history',
25 |   base: 'bsearch-web', // 如果访问了bsearch-web/fusion，这里会对应到/fusion；默认值为publicPath
26 |   routes: createRoute(routes)
27 | });
28 | 
29 | router.beforeEach(async (to, form, next) => {
30 |   // 防止死循环跳出
31 |   if (to.path.indexOf('error') > -1) {
32 |     next();
33 |     return;
34 |   }
35 |   next();
36 |   // eslint-disable-next-line no-console
37 |   // console.log(to.query);
38 | });
39 | 
40 | export default router;
</content>
</file>
<file><path>bsearch-frontend/search-center/src/store/fusion/state.js</path>
<content lines="1-88">
 1 | export default {
 2 |   currentTargets: [
 3 |     {
 4 |       image: {
 5 |         // 搜图参数
 6 |         minSimilar: null, // 相似度
 7 |         relation: {}, // 关联关系
 8 |         imgs: [] // 图片数据
 9 |       },
10 |       feature: {
11 |         // 属性参数
12 |       },
13 |       activeName: 'image', // 当前面板tab
14 |       currentTargetType: 'human', // 当前属性搜索的类型
15 |       selectedPoint: [], // 已选点位
16 |       // 地图选点选中的点位（删除时需要删掉地图上的标记）
17 |       mapSelectedPoint: [],
18 |       // 上传图片组件状态保存
19 |       uploadImgDatas: {
20 |         imgs: [],
21 |         // showStrategy: true,
22 |         strategyOpen: true
23 |       },
24 |       timeValue: [], // 时间
25 |       timeRange: [[], []], // 时间段
26 |       middleResultStatus: false, // 是否处于结果面板三列的状态
27 |       intoTrackStatus: false, // 是否处于轨迹描绘状态
28 |       collectionTrackOpen: false, // 是否打开线索库轨迹
29 |       openCaseIndexCode: '', // 当前打开的线索库的index
30 |       openCaseName: '' // 当前打开的线索库的名称
31 |     }
32 |   ],
33 |   currentTargetIndex: 0, // 当前面板索引
34 |   trackData: {
35 |     // 当前轨迹名单来源
36 |     identitySource: '',
37 |     // 当前进入轨迹描绘的入口: identitySource: certificateNumber/faceImg/plateNo/vehicleImg/'' 手动轨迹补充轨迹名单数据用
38 |     trackEntrace: null,
39 |     // 排序
40 |     sort: 'desc',
41 |     // 过滤类型
42 |     filterItems: [],
43 |     // 轨迹名单信息
44 |     identity: null,
45 |     // 所有轨迹点数据
46 |     trackList: [],
47 |     // 地图轨迹展示的数据
48 |     mapList: [],
49 |     // 补充数据类型
50 |     authExtraDataList: []
51 |   },
52 |   collectionTrackData: {
53 |     // 当前轨迹名单来源
54 |     identitySource: '',
55 |     // 当前进入轨迹描绘的入口: identitySource: certificateNumber/faceImg/plateNo/vehicleImg/'' 手动轨迹补充轨迹名单数据用
56 |     trackEntrace: null,
57 |     // 排序
58 |     sort: 'desc',
59 |     // 过滤类型
60 |     filterItems: [],
61 |     // 轨迹名单信息
62 |     identity: null,
63 |     // 所有轨迹点数据
64 |     trackList: [],
65 |     // 地图轨迹展示的数据
66 |     mapList: [],
67 |     // 补充数据类型
68 |     authExtraDataList: [],
69 |     runningTask: false // runningTask为true则当前轨迹存在正在追踪的任务
70 |   },
71 |   // 修改过经纬度的点位
72 |   changeLonlat: [],
73 |   // 地图轨迹展示的数据
74 |   mapList: [],
75 |   collectData: [], // 线索库数据
76 |   mapApi: null,
77 |   trackExtraData: [],
78 |   // 是否支持室内轨迹
79 |   indoorTrack: false,
80 |   uploadBuiltInfo: [], // 上传体态播放信息
81 |   translaDataType: null, // 属性各条件分别属于的数据的类型
82 |   // 体态视频目标信息（用于 BusinessSubthemeResult）
83 |   targetGtVideoData: null,
84 |   // 体态视频 URL（用于 BusinessSubthemeResult）
85 |   targetBuiltListOriginUrl: '',
86 |   // 历史查询图片数据（用于 BusinessSubthemeResult）
87 |   targetHistoryImgData: null
88 | };
</content>
</file>
<file><path>bsearch-frontend/search-center/src/mixins/commonOperation.js</path>
<content lines="1-2624">
   1 | import { mapState } from 'vuex';
   2 | import isearchuiUtils from '@isearchui-pro/utils/src/addFavorite';
   3 | import { deepClone, utcTimeToIsoTime } from '@hui-pro/utils';
   4 | import { skipToDocument, addToShelf } from '@/utils/cardDataManage/cardDataManage';
   5 | export default {
   6 |   data() {
   7 |     return {
   8 |       invalidPlate: ['车牌', '无车牌', '无牌车', 'NoPlate', 'No Plate', 'unknown']
   9 |     };
  10 |   },
  11 |   computed: {
  12 |     ...mapState(['searchConfig', 'moduleSale', 'compatibleConfig', 'pageTypeRoute'])
  13 |   },
  14 |   methods: {
  15 |     /**
  16 |      * 根据配置项获取卡片/列表操作项的方法
  17 |      * @param {Object|每张卡片/每行列表数据} item
  18 |      * @param {String|当前数据类型（卡片类型，snap/clust/plateNoGroup/crossGroup）} type
  19 |      * @param {String|页面类型（人脸/人体/车辆...），便于卡片/列表组件获取对应配置项} pageType
  20 |      * @param {Object|销售项内容} moduleSale
  21 |      * @param {Object|用户信息数据} userInfo
  22 |      * @param {String|搜索模块, 'text', 'image'} searchWay
  23 |      * @param {String|搜索类型, 'face', 'body'} limitType
  24 |      * @param {String|卡片类型，用于渲染对应类型卡片} cardType
  25 |      * @param {Boolean|是否有加入档案} isAddArchive
  26 |      */
  27 |     handleSnapBut(item, type, pageType, moduleSale, userInfo, searchWay, limitType, cardType = '', isAddArchive) {
  28 |       const that = this;
  29 |       const btn = [];
  30 |       const notAuth = [
  31 |         'imgSearchClu_fusion', // 图片搜索
  32 |         'addPic_fusion', // 继续查询
  33 |         'downPic', // 下载图片
  34 |         'detail', // 查看详情
  35 |         'picClick',
  36 |         'periphery_fusion', // 周边点位
  37 |         'playback',
  38 |         'track_fusion' // 查看轨迹
  39 |       ];
  40 |       if (type === 'plateNoGroup' || type === 'crossGroup') {
  41 |         return btn;
  42 |       } else {
  43 |         const butOptions = this.searchConfig.pageConfig[pageType];
  44 |         const authMap = this.searchConfig.authMap;
  45 |         if (Number(item.dataType) === 100201 || (item.dataTypes && item.dataTypes.includes(100201))) {
  46 |           let authSnapOption = [];
  47 |           if (authMap && Object.keys(authMap).length) {
  48 |             butOptions.faceSnapOptions.map(item => {
  49 |               if (item && item.isShow) {
  50 |                 if (notAuth.includes(item.key) || !item.isDefault) {
  51 |                   authSnapOption.push(item);
  52 |                 } else {
  53 |                   if (item.key === 'humanArchives') {
  54 |                     // 查看档案
  55 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
  56 |                       if (authMap[item.key]) {
  57 |                         authSnapOption.push(item);
  58 |                       }
  59 |                     } else {
  60 |                       if (authMap[item.key] || authMap.detail) {
  61 |                         authSnapOption.push(item);
  62 |                       }
  63 |                     }
  64 |                   } else if (item.key === 'track') {
  65 |                     if (authMap[item.key] || authMap.track_fusion) {
  66 |                       authSnapOption.push(item);
  67 |                     }
  68 |                   } else if (item.key === 'oneKeyAlarm') {
  69 |                     // 一键布控
  70 |                     if (authMap.oneKeyAlarmFace) {
  71 |                       authSnapOption.push(item);
  72 |                     }
  73 |                   } else if (item.key === 'addCollect') {
  74 |                     // +线索库
  75 |                     if (authMap && authMap.addCollect && top && top.window && top.window.showFavorite) {
  76 |                       authSnapOption.push(item);
  77 |                     }
  78 |                   } else if (item.key === 'targetTrack' && !this.pageTypeRoute) {
  79 |                     // 融合菜单下才显示立即追踪按钮
  80 |                     // 立即追踪
  81 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
  82 |                       if (authMap && authMap.itrace) {
  83 |                         authSnapOption.push(item);
  84 |                       }
  85 |                     } else {
  86 |                       if (
  87 |                         moduleSale &&
  88 |                         moduleSale.targetTrack &&
  89 |                         userInfo &&
  90 |                         userInfo.hasBsearchTraceRole &&
  91 |                         that.compatibleConfig &&
  92 |                         that.compatibleConfig.xshareVersion === '230' &&
  93 |                         authMap &&
  94 |                         authMap.addCollect
  95 |                       ) {
  96 |                         authSnapOption.push(item);
  97 |                       }
  98 |                     }
  99 |                   } else if (item.key === 'identificationFusion' || item.key === 'identification') {
 100 |                     // 身份确认
 101 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
 102 |                       if (authMap.identificationIface) {
 103 |                         authSnapOption.push(item);
 104 |                       }
 105 |                     } else {
 106 |                       if (authMap[item.key] || authMap.identification) {
 107 |                         authSnapOption.push(item);
 108 |                       }
 109 |                     }
 110 |                   } else if (
 111 |                     item.key === 'imgSearchClu' ||
 112 |                     item.key === 'picSearch' ||
 113 |                     item.key === 'facePicSearch' ||
 114 |                     item.key === 'bodyPicSearch' ||
 115 |                     item.key === 'vehiclePicSearch' ||
 116 |                     item.key === 'nonvehiclePicSearch'
 117 |                   ) {
 118 |                     // 是否开启跳转智图
 119 |                     if (authMap[item.key] || authMap.fusion) {
 120 |                       authSnapOption.push(item);
 121 |                     }
 122 |                   } else if (item.key === 'videoSearch') {
 123 |                     if (authMap[item.key]) {
 124 |                       authSnapOption.push(item);
 125 |                     }
 126 |                   } else if (item.key === 'addShelf') {
 127 |                     if (authMap[item.key]) {
 128 |                       authSnapOption.push(item);
 129 |                     }
 130 |                   } else if (item.key === 'archiveDetail') {
 131 |                     if (
 132 |                       this.searchConfig &&
 133 |                       this.searchConfig.pageConfig &&
 134 |                       this.searchConfig.pageConfig.common &&
 135 |                       this.searchConfig.pageConfig.common.iarchives
 136 |                     ) {
 137 |                       if (authMap.iarchives) {
 138 |                         authSnapOption.push(item);
 139 |                       }
 140 |                     } else {
 141 |                       if (authMap[item.key] || authMap.documentDetails) {
 142 |                         authSnapOption.push(item);
 143 |                       }
 144 |                     }
 145 |                   } else {
 146 |                     if (authMap[item.key]) {
 147 |                       authSnapOption.push(item);
 148 |                     }
 149 |                   }
 150 |                 }
 151 |               }
 152 |             });
 153 |           } else {
 154 |             authSnapOption = butOptions.faceSnapOptions;
 155 |           }
 156 |           if ((searchWay === 'image' && limitType === 'face') || pageType === 'imageFace' || pageType === 'imageBody') {
 157 |             authSnapOption.forEach(el => {
 158 |               if (el.isShow) {
 159 |                 if (el.isDefault) {
 160 |                   btn.push(el);
 161 |                 } else {
 162 |                   const key = (Math.random() * 100).toFixed(2).toString();
 163 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 164 |                 }
 165 |               }
 166 |             });
 167 |             if (!(this.searchConfig.authMap && this.searchConfig.authMap.humanArchives && cardType === 'snapClust')) {
 168 |               // 无加入档案权限（只有人脸聚档模式下的抓拍卡片且有加入档案权限时才能进行加入档案操作）
 169 |               const snapArchivesIndex = btn.findIndex(item => item.key === 'snapArchives');
 170 |               snapArchivesIndex !== -1 && btn.splice(snapArchivesIndex, 1);
 171 |             }
 172 |           } else if (pageType === 'fusion') {
 173 |             authSnapOption.forEach(el => {
 174 |               if (el.isShow) {
 175 |                 if (el.isDefault) {
 176 |                   btn.push(el);
 177 |                 } else {
 178 |                   const key = (Math.random() * 100).toFixed(2).toString();
 179 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 180 |                 }
 181 |               }
 182 |             });
 183 |           } else {
 184 |             authSnapOption.forEach(el => {
 185 |               if (el.isShow && el.key !== 'addPic') {
 186 |                 if (el.isDefault) {
 187 |                   btn.push(el);
 188 |                 } else {
 189 |                   const key = (Math.random() * 100).toFixed(2).toString();
 190 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 191 |                 }
 192 |               }
 193 |             });
 194 |             // 删除加入档案按钮
 195 |             const snapArchivesIndex = btn.findIndex(item => item.key === 'snapArchives');
 196 |             snapArchivesIndex !== -1 && btn.splice(snapArchivesIndex, 1);
 197 |           }
 198 |         } else if (Number(item.dataType) === 100202 || (item.dataTypes && item.dataTypes.includes(100202))) {
 199 |           let authSnapOption = [];
 200 |           if (authMap && Object.keys(authMap).length) {
 201 |             butOptions.bodySnapOptions.map(item => {
 202 |               if (item && item.isShow) {
 203 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 204 |                   authSnapOption.push(item);
 205 |                 } else {
 206 |                   if (item.key === 'track') {
 207 |                     if (authMap[item.key] || authMap.track_fusion) {
 208 |                       authSnapOption.push(item);
 209 |                     }
 210 |                   } else if (item.key === 'humanArchives') {
 211 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
 212 |                       if (authMap[item.key]) {
 213 |                         authSnapOption.push(item);
 214 |                       }
 215 |                     } else {
 216 |                       if (authMap[item.key] || authMap.detail) {
 217 |                         authSnapOption.push(item);
 218 |                       }
 219 |                     }
 220 |                   } else if (item.key === 'oneKeyAlarm') {
 221 |                     // 一键布控
 222 |                     if (authMap.oneKeyAlarmBody) {
 223 |                       authSnapOption.push(item);
 224 |                     }
 225 |                   } else if (item.key === 'targetTrack' && !this.pageTypeRoute) {
 226 |                     // 融合菜单下才显示立即追踪按钮
 227 |                     // 立即追踪
 228 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 229 |                       if (authMap && authMap.itrace) {
 230 |                         authSnapOption.push(item);
 231 |                       }
 232 |                     } else {
 233 |                       if (
 234 |                         moduleSale &&
 235 |                         moduleSale.targetTrack &&
 236 |                         userInfo &&
 237 |                         userInfo.hasBsearchTraceRole &&
 238 |                         that.compatibleConfig &&
 239 |                         that.compatibleConfig.xshareVersion === '230' &&
 240 |                         authMap &&
 241 |                         authMap.addCollect
 242 |                       ) {
 243 |                         authSnapOption.push(item);
 244 |                       }
 245 |                     }
 246 |                   } else if (
 247 |                     item.key === 'imgSearchClu' ||
 248 |                     item.key === 'picSearch' ||
 249 |                     item.key === 'facePicSearch' ||
 250 |                     item.key === 'bodyPicSearch' ||
 251 |                     item.key === 'vehiclePicSearch' ||
 252 |                     item.key === 'nonvehiclePicSearch'
 253 |                   ) {
 254 |                     // 是否开启跳转智图
 255 |                     if (authMap[item.key] || authMap.fusion) {
 256 |                       authSnapOption.push(item);
 257 |                     }
 258 |                   } else if (item.key === 'videoSearch') {
 259 |                     if (authMap[item.key]) {
 260 |                       authSnapOption.push(item);
 261 |                     }
 262 |                   } else if (item.key === 'identificationFusion' || item.key === 'identification') {
 263 |                     // 身份确认
 264 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
 265 |                       if (authMap.identificationIface) {
 266 |                         authSnapOption.push(item);
 267 |                       }
 268 |                     } else {
 269 |                       if (authMap[item.key] || authMap.identification) {
 270 |                         authSnapOption.push(item);
 271 |                       }
 272 |                     }
 273 |                   } else if (item.key === 'addShelf') {
 274 |                     if (authMap[item.key]) {
 275 |                       authSnapOption.push(item);
 276 |                     }
 277 |                   } else {
 278 |                     if (authMap[item.key]) {
 279 |                       authSnapOption.push(item);
 280 |                     }
 281 |                   }
 282 |                 }
 283 |               }
 284 |             });
 285 |           } else {
 286 |             authSnapOption = butOptions.bodySnapOptions;
 287 |           }
 288 |           authSnapOption.forEach(el => {
 289 |             if (el.isShow) {
 290 |               if (el.isDefault) {
 291 |                 btn.push(el);
 292 |               } else {
 293 |                 const key = (Math.random() * 100).toFixed(2).toString();
 294 |                 btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 295 |               }
 296 |             }
 297 |           });
 298 |         } else if (Number(item.dataType) === 100203 || (item.dataTypes && item.dataTypes.includes(100203))) {
 299 |           let authSnapOption = [];
 300 |           if (authMap && Object.keys(authMap).length) {
 301 |             butOptions.builtOptions.map(item => {
 302 |               if (item && item.isShow) {
 303 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 304 |                   authSnapOption.push(item);
 305 |                 } else {
 306 |                   if (item.key === 'track') {
 307 |                     if (authMap[item.key] || authMap.track_fusion) {
 308 |                       authSnapOption.push(item);
 309 |                     }
 310 |                   } else if (item.key === 'humanArchives') {
 311 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
 312 |                       if (authMap[item.key]) {
 313 |                         authSnapOption.push(item);
 314 |                       }
 315 |                     } else {
 316 |                       if (authMap[item.key] || authMap.detail) {
 317 |                         authSnapOption.push(item);
 318 |                       }
 319 |                     }
 320 |                   } else if (item.key === 'oneKeyAlarm') {
 321 |                     // 一键布控
 322 |                     if (authMap.oneKeyAlarmFace) {
 323 |                       authSnapOption.push(item);
 324 |                     }
 325 |                   } else if (item.key === 'targetTrack') {
 326 |                     // 立即追踪
 327 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 328 |                       if (authMap && authMap.itrace) {
 329 |                         authSnapOption.push(item);
 330 |                       }
 331 |                     } else {
 332 |                       if (
 333 |                         moduleSale &&
 334 |                         moduleSale.targetTrack &&
 335 |                         userInfo &&
 336 |                         userInfo.hasBsearchTraceRole &&
 337 |                         that.compatibleConfig &&
 338 |                         that.compatibleConfig.xshareVersion === '230' &&
 339 |                         authMap &&
 340 |                         authMap.addCollect
 341 |                       ) {
 342 |                         authSnapOption.push(item);
 343 |                       }
 344 |                     }
 345 |                   } else if (
 346 |                     item.key === 'imgSearchClu' ||
 347 |                     item.key === 'picSearch' ||
 348 |                     item.key === 'facePicSearch' ||
 349 |                     item.key === 'bodyPicSearch' ||
 350 |                     item.key === 'vehiclePicSearch' ||
 351 |                     item.key === 'nonvehiclePicSearch'
 352 |                   ) {
 353 |                     // 是否开启跳转智图
 354 |                     if (authMap[item.key] || authMap.fusion) {
 355 |                       authSnapOption.push(item);
 356 |                     }
 357 |                   } else if (item.key === 'videoSearch') {
 358 |                     if (authMap[item.key]) {
 359 |                       authSnapOption.push(item);
 360 |                     }
 361 |                   } else if (item.key === 'addShelf') {
 362 |                     if (authMap[item.key]) {
 363 |                       authSnapOption.push(item);
 364 |                     }
 365 |                   } else if (item.key === 'add_xnamelist') {
 366 |                     authSnapOption.push(item);
 367 |                   }else {
 368 |                     if (authMap[item.key]) {
 369 |                       authSnapOption.push(item);
 370 |                     }
 371 |                   }
 372 |                 }
 373 |               }
 374 |             });
 375 |           } else {
 376 |             authSnapOption = butOptions.builtOptions;
 377 |           }
 378 |           authSnapOption.forEach(el => {
 379 |             if (el.isShow) {
 380 |               if (el.isDefault) {
 381 |                 btn.push(el);
 382 |               } else {
 383 |                 const key = (Math.random() * 100).toFixed(2).toString();
 384 |                 btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 385 |               }
 386 |             }
 387 |           });
 388 |         } else if (
 389 |           Number(item.dataType) === 200202 ||
 390 |           (item.dataTypes && item.dataTypes.includes(200202)) ||
 391 |           Number(item.dataType) === 200201 ||
 392 |           (item.dataTypes && item.dataTypes.includes(200201))
 393 |         ) {
 394 |           let authSnapOption = [];
 395 |           if (authMap && Object.keys(authMap).length) {
 396 |             butOptions.vehicleSnapOptions.map(item => {
 397 |               if (item && item.isShow) {
 398 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 399 |                   authSnapOption.push(item);
 400 |                 } else {
 401 |                   if (item.key === 'vehicleArchives') {
 402 |                     if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
 403 |                       if (authMap[item.key]) {
 404 |                         authSnapOption.push(item);
 405 |                       }
 406 |                     } else {
 407 |                       if (authMap[item.key] || authMap.detail) {
 408 |                         authSnapOption.push(item);
 409 |                       }
 410 |                     }
 411 |                   } else if (item.key === 'track') {
 412 |                     if (authMap[item.key] || authMap.track_fusion) {
 413 |                       authSnapOption.push(item);
 414 |                     }
 415 |                   } else if (item.key === 'oneKeyAlarm') {
 416 |                     authSnapOption.push(item);
 417 |                   } else if (item.key === 'targetTrack') {
 418 |                     // 立即追踪
 419 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 420 |                       if (authMap && authMap.itrace) {
 421 |                         authSnapOption.push(item);
 422 |                       }
 423 |                     } else {
 424 |                       if (
 425 |                         moduleSale &&
 426 |                         moduleSale.targetTrack &&
 427 |                         userInfo &&
 428 |                         userInfo.hasBsearchTraceRole &&
 429 |                         that.compatibleConfig &&
 430 |                         that.compatibleConfig.xshareVersion === '230' &&
 431 |                         authMap &&
 432 |                         authMap.addCollect
 433 |                       ) {
 434 |                         authSnapOption.push(item);
 435 |                       }
 436 |                     }
 437 |                   } else if (
 438 |                     item.key === 'imgSearchClu' ||
 439 |                     item.key === 'picSearch' ||
 440 |                     item.key === 'facePicSearch' ||
 441 |                     item.key === 'bodyPicSearch' ||
 442 |                     item.key === 'vehiclePicSearch' ||
 443 |                     item.key === 'nonvehiclePicSearch'
 444 |                   ) {
 445 |                     // 是否开启跳转智图
 446 |                     if (authMap[item.key] || authMap.fusion) {
 447 |                       authSnapOption.push(item);
 448 |                     }
 449 |                   } else if (item.key === 'videoSearch') {
 450 |                     if (authMap[item.key]) {
 451 |                       authSnapOption.push(item);
 452 |                     }
 453 |                   } else if (item.key === 'addShelf') {
 454 |                     if (authMap[item.key]) {
 455 |                       authSnapOption.push(item);
 456 |                     }
 457 |                   } else {
 458 |                     if (authMap[item.key]) {
 459 |                       authSnapOption.push(item);
 460 |                     }
 461 |                   }
 462 |                 }
 463 |               }
 464 |             });
 465 |           } else {
 466 |             authSnapOption = butOptions.vehicleSnapOptions;
 467 |           }
 468 |           authSnapOption.forEach(el => {
 469 |             if (el.isShow) {
 470 |               if (el.isDefault) {
 471 |                 btn.push(el);
 472 |               } else {
 473 |                 const key = (Math.random() * 100).toFixed(2).toString();
 474 |                 btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 475 |               }
 476 |             }
 477 |           });
 478 |         } else if (Number(item.dataType) === 200203) {
 479 |           let authSnapOption = [];
 480 |           if (authMap && Object.keys(authMap).length) {
 481 |             butOptions.nonvehicleSnapOptions.map(item => {
 482 |               if (item && item.isShow) {
 483 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 484 |                   authSnapOption.push(item);
 485 |                 } else {
 486 |                   if (item.key === 'track') {
 487 |                     if (authMap[item.key] || authMap.track_fusion) {
 488 |                       authSnapOption.push(item);
 489 |                     }
 490 |                   } else if (item.key === 'targetTrack') {
 491 |                     // 立即追踪
 492 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 493 |                       if (authMap && authMap.itrace) {
 494 |                         authSnapOption.push(item);
 495 |                       }
 496 |                     } else {
 497 |                       if (
 498 |                         moduleSale &&
 499 |                         moduleSale.targetTrack &&
 500 |                         userInfo &&
 501 |                         userInfo.hasBsearchTraceRole &&
 502 |                         that.compatibleConfig &&
 503 |                         that.compatibleConfig.xshareVersion === '230' &&
 504 |                         authMap &&
 505 |                         authMap.addCollect
 506 |                       ) {
 507 |                         authSnapOption.push(item);
 508 |                       }
 509 |                     }
 510 |                   } else if (item.key === 'imgSearchClu' || item.key === 'nonvehiclePicSearch') {
 511 |                     // 是否开启跳转智图
 512 |                     if (authMap[item.key] || authMap.fusion) {
 513 |                       authSnapOption.push(item);
 514 |                     }
 515 |                   } else if (item.key === 'videoSearch') {
 516 |                     if (authMap[item.key]) {
 517 |                       authSnapOption.push(item);
 518 |                     }
 519 |                   } else if (item.key === 'addShelf') {
 520 |                     if (authMap[item.key]) {
 521 |                       authSnapOption.push(item);
 522 |                     }
 523 |                   } else {
 524 |                     if (authMap[item.key]) {
 525 |                       authSnapOption.push(item);
 526 |                     }
 527 |                   }
 528 |                 }
 529 |               }
 530 |             });
 531 |           } else {
 532 |             authSnapOption = butOptions.nonvehicleSnapOptions;
 533 |           }
 534 |           authSnapOption.forEach(el => {
 535 |             if (el.isShow) {
 536 |               if (el.isDefault) {
 537 |                 btn.push(el);
 538 |               } else {
 539 |                 const key = (Math.random() * 100).toFixed(2).toString();
 540 |                 btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 541 |               }
 542 |             }
 543 |           });
 544 |         } else if (Number(item.dataType) === 100101 || (item.dataTypes && item.dataTypes.includes(100101))) {
 545 |           let authSnapOption = [];
 546 |           if (authMap && Object.keys(authMap).length) {
 547 |             butOptions.humanOptions.map(item => {
 548 |               if (item && item.isShow) {
 549 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 550 |                   authSnapOption.push(item);
 551 |                 } else {
 552 |                   if (item.key === 'track') {
 553 |                     if (authMap[item.key] || authMap.track_fusion) {
 554 |                       authSnapOption.push(item);
 555 |                     }
 556 |                   } else if (item.key === 'targetTrack') {
 557 |                     // 立即追踪
 558 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 559 |                       if (authMap && authMap.itrace) {
 560 |                         authSnapOption.push(item);
 561 |                       }
 562 |                     } else {
 563 |                       if (
 564 |                         moduleSale &&
 565 |                         moduleSale.targetTrack &&
 566 |                         userInfo &&
 567 |                         userInfo.hasBsearchTraceRole &&
 568 |                         that.compatibleConfig &&
 569 |                         that.compatibleConfig.xshareVersion === '230' &&
 570 |                         authMap &&
 571 |                         authMap.addCollect
 572 |                       ) {
 573 |                         authSnapOption.push(item);
 574 |                       }
 575 |                     }
 576 |                   } else if (item.key === 'imgSearchClu') {
 577 |                     // 是否开启跳转智图
 578 |                     if (authMap[item.key] || authMap.fusion) {
 579 |                       authSnapOption.push(item);
 580 |                     }
 581 |                   } else if (item.key === 'videoSearch') {
 582 |                     if (authMap[item.key]) {
 583 |                       authSnapOption.push(item);
 584 |                     }
 585 |                   } else if (item.key === 'oneKeyAlarm') {
 586 |                     if (authMap.oneKeyAlarmFace) {
 587 |                       authSnapOption.push(item);
 588 |                     }
 589 |                   } else {
 590 |                     if (authMap[item.key]) {
 591 |                       authSnapOption.push(item);
 592 |                     }
 593 |                   }
 594 |                 }
 595 |               }
 596 |             });
 597 |           } else {
 598 |             authSnapOption = butOptions.humanOptions;
 599 |           }
 600 |           if (searchWay === 'image') {
 601 |             authSnapOption.forEach(el => {
 602 |               if (el.isShow && el.key !== 'detail') {
 603 |                 if (el.isDefault) {
 604 |                   btn.push(el);
 605 |                 } else {
 606 |                   const key = (Math.random() * 100).toFixed(2).toString();
 607 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 608 |                 }
 609 |               }
 610 |             });
 611 |           } else {
 612 |             authSnapOption.forEach(el => {
 613 |               if (el.isShow) {
 614 |                 if (el.isDefault) {
 615 |                   btn.push(el);
 616 |                 } else {
 617 |                   const key = (Math.random() * 100).toFixed(2).toString();
 618 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 619 |                 }
 620 |               }
 621 |             });
 622 |           }
 623 |         } else if (Number(item.dataType) === 200101 || (item.dataTypes && item.dataTypes.includes(200101))) {
 624 |           let authSnapOption = [];
 625 |           if (authMap && Object.keys(authMap).length) {
 626 |             butOptions.vehicleOptions.map(item => {
 627 |               if (item && item.isShow) {
 628 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 629 |                   authSnapOption.push(item);
 630 |                 } else {
 631 |                   if (item.key === 'track') {
 632 |                     if (authMap[item.key] || authMap.track_fusion) {
 633 |                       authSnapOption.push(item);
 634 |                     }
 635 |                   } else if (item.key === 'targetTrack') {
 636 |                     // 立即追踪
 637 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 638 |                       if (authMap && authMap.itrace) {
 639 |                         authSnapOption.push(item);
 640 |                       }
 641 |                     } else {
 642 |                       if (
 643 |                         moduleSale &&
 644 |                         moduleSale.targetTrack &&
 645 |                         userInfo &&
 646 |                         userInfo.hasBsearchTraceRole &&
 647 |                         that.compatibleConfig &&
 648 |                         that.compatibleConfig.xshareVersion === '230' &&
 649 |                         authMap &&
 650 |                         authMap.addCollect
 651 |                       ) {
 652 |                         authSnapOption.push(item);
 653 |                       }
 654 |                     }
 655 |                   } else if (item.key === 'imgSearchClu') {
 656 |                     // 是否开启跳转智图
 657 |                     if (authMap[item.key] || authMap.fusion) {
 658 |                       authSnapOption.push(item);
 659 |                     }
 660 |                   } else if (item.key === 'videoSearch') {
 661 |                     if (authMap[item.key]) {
 662 |                       authSnapOption.push(item);
 663 |                     }
 664 |                   } else {
 665 |                     if (authMap[item.key]) {
 666 |                       authSnapOption.push(item);
 667 |                     }
 668 |                   }
 669 |                 }
 670 |               }
 671 |             });
 672 |           } else {
 673 |             authSnapOption = butOptions.vehicleOptions;
 674 |           }
 675 |           if (searchWay === 'image') {
 676 |             authSnapOption.forEach(el => {
 677 |               if (el.isShow && el.key !== 'detail') {
 678 |                 if (el.isDefault) {
 679 |                   btn.push(el);
 680 |                 } else {
 681 |                   const key = (Math.random() * 100).toFixed(2).toString();
 682 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 683 |                 }
 684 |               }
 685 |             });
 686 |           } else {
 687 |             authSnapOption.forEach(el => {
 688 |               if (el.isShow) {
 689 |                 if (el.isDefault) {
 690 |                   btn.push(el);
 691 |                 } else {
 692 |                   const key = (Math.random() * 100).toFixed(2).toString();
 693 |                   btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 694 |                 }
 695 |               }
 696 |             });
 697 |           }
 698 |         } else if (Number(item.dataType) === 300201) {
 699 |           // this.imgHeight = 121;
 700 |           let authSnapOption = [];
 701 |           if (authMap && Object.keys(authMap).length) {
 702 |             butOptions.imsiOptions.map(item => {
 703 |               if (item && item.isShow) {
 704 |                 if (notAuth.includes(item.key) || !item.isDefault) {
 705 |                   authSnapOption.push(item);
 706 |                 } else {
 707 |                   if (item.key === 'oneKeyAlarm') {
 708 |                     if (authMap && authMap.oneKeyAlarmImsi) {
 709 |                       authSnapOption.push(item);
 710 |                     }
 711 |                   } else if (item.key === 'targetTrack') {
 712 |                     // 立即追踪
 713 |                     if (that.compatibleConfig && that.compatibleConfig.xshareVersion === '130') {
 714 |                       if (authMap && authMap.itrace) {
 715 |                         authSnapOption.push(item);
 716 |                       }
 717 |                     } else {
 718 |                       if (
 719 |                         moduleSale &&
 720 |                         moduleSale.targetTrack &&
 721 |                         userInfo &&
 722 |                         userInfo.hasBsearchTraceRole &&
 723 |                         that.compatibleConfig &&
 724 |                         that.compatibleConfig.xshareVersion === '230' &&
 725 |                         authMap &&
 726 |                         authMap.addCollect
 727 |                       ) {
 728 |                         authSnapOption.push(item);
 729 |                       }
 730 |                     }
 731 |                   } else {
 732 |                     if (authMap[item.key]) {
 733 |                       authSnapOption.push(item);
 734 |                     }
 735 |                   }
 736 |                 }
 737 |               }
 738 |             });
 739 |           } else {
 740 |             authSnapOption = butOptions.imsiOptions;
 741 |           }
 742 |           authSnapOption.forEach(el => {
 743 |             if (el.isShow) {
 744 |               if (el.isDefault) {
 745 |                 btn.push(el);
 746 |               } else {
 747 |                 const key = (Math.random() * 100).toFixed(2).toString();
 748 |                 btn.push(Object.assign({ type: 'jump', show: true, key }, el));
 749 |               }
 750 |             }
 751 |           });
 752 |         }
 753 |         let btnCopy = btn;
 754 |         // 230查看详情变成常显
 755 |         // if (this.noDetailButton) {
 756 |         //   btnCopy = btn.filter(b => {
 757 |         //     return b.key !== 'picClick';
 758 |         //   });
 759 |         // }
 760 |         btnCopy = btnCopy.map(el => deepClone(el));
 761 |         let btnCopyFilter = btnCopy;
 762 |         if (
 763 |           Number(item.dataType) === 100201 ||
 764 |           (item.dataTypes && item.dataTypes.includes(100201)) ||
 765 |           Number(item.dataType) === 100202 ||
 766 |           (item.dataTypes && item.dataTypes.includes(100202))
 767 |         ) {
 768 |           if (!item.humanId) {
 769 |             btnCopyFilter = btnCopy.filter(b => {
 770 |               return (
 771 |                 b.key !== 'policeDetail' &&
 772 |                 b.key !== 'humanArchives' &&
 773 |                 b.key !== 'track' &&
 774 |                 b.key !== 'track_fusion' &&
 775 |                 b.key !== 'archiveDetail'
 776 |               );
 777 |             });
 778 |           }
 779 |           // 身份确认变成常显 不再区分是否有humanid
 780 |           // else {
 781 |           //   btnCopyFilter = btnCopy.filter(b => {
 782 |           //     return b.key !== 'identification';
 783 |           //   });
 784 |           // }
 785 |         }
 786 |         let btnCopyFilter2 = btnCopyFilter;
 787 |         if (!item.plateNo) {
 788 |           btnCopyFilter2 = btnCopyFilter.filter(b => {
 789 |             return b.key !== 'vehicleArchives';
 790 |           });
 791 |         }
 792 |         const btnCopyFilter3 = btnCopyFilter2;
 793 |         // 230查看详情变成常显
 794 |         // if (this.showRightPanel) {
 795 |         //   btnCopyFilter3 = btnCopyFilter2.filter(b => {
 796 |         //     return b.key !== 'picClick';
 797 |         //   });
 798 |         // }
 799 |         let btnCopyFilter4 = btnCopyFilter3;
 800 |         if (this.$store.state.isKHD) {
 801 |           btnCopyFilter4 = btnCopyFilter3.filter(b => {
 802 |             return (
 803 |               b.key !== 'videoSearch' &&
 804 |               b.key !== 'addShelf' &&
 805 |               b.key !== 'oneKeyAlarm' &&
 806 |               b.key !== 'track' &&
 807 |               b.key !== 'track_fusion'
 808 |             );
 809 |           });
 810 |         }
 811 |         btnCopyFilter4.map(el => {
 812 |           el.title = el.name;
 813 |           const itemCopy = item.hitInfo ? item.hitInfo[0] : item;
 814 |           if (el.key === 'playback') {
 815 |             if (
 816 |               !(itemCopy.capabilitySet && itemCopy.capabilitySet.split('@').includes('vss') && itemCopy.recordLocation)
 817 |             ) {
 818 |               // 无视频能力或录像计划回放按钮置灰
 819 |               el.disable = true;
 820 |               el.title = '无录像计划';
 821 |             } else {
 822 |               el.disable = false;
 823 |             }
 824 |           }
 825 |           if (el.key === 'periphery' || el.key === 'periphery_fusion') {
 826 |             if (itemCopy.longitude && itemCopy.latitude) {
 827 |               el.disable = false;
 828 |             } else {
 829 |               el.disable = true;
 830 |               el.title = '无经纬度';
 831 |             }
 832 |           }
 833 |         });
 834 |         let btnCopyFilter5 = btnCopyFilter4;
 835 |         if (
 836 |           item.dataType === '200201' ||
 837 |           item.dataType === 200201 ||
 838 |           (item.dataTypes && item.dataTypes.includes(200201))
 839 |         ) {
 840 |           if (item.plateNo && this.invalidPlate.indexOf(item.plateNo) === -1) {
 841 |             if (authMap && !authMap.oneKeyAlarmPlate && !authMap.oneKeyAlarmVehicle) {
 842 |               btnCopyFilter5 = btnCopyFilter4.filter(b => {
 843 |                 return b.key !== 'oneKeyAlarm';
 844 |               });
 845 |             }
 846 |           } else {
 847 |             if (authMap && !authMap.oneKeyAlarmVehicle) {
 848 |               btnCopyFilter5 = btnCopyFilter4.filter(b => {
 849 |                 return (
 850 |                   b.key !== 'oneKeyAlarm' &&
 851 |                   b.key !== 'track' &&
 852 |                   b.key !== 'vehicleArchives' &&
 853 |                   b.key !== 'track_fusion'
 854 |                 );
 855 |               });
 856 |             } else {
 857 |               btnCopyFilter5 = btnCopyFilter4.filter(b => {
 858 |                 return b.key !== 'track' && b.key !== 'vehicleArchives' && b.key !== 'track_fusion';
 859 |               });
 860 |             }
 861 |           }
 862 |         }
 863 |         const btnCopyFilter6 = btnCopyFilter5;
 864 |         let btnCopyFilter7 = btnCopyFilter6;
 865 |         if (!isAddArchive) {
 866 |           btnCopyFilter7 = btnCopyFilter6.filter(b => {
 867 |             return b.key !== 'snapArchives';
 868 |           });
 869 |         }
 870 |         let btnCopyFilter8 = btnCopyFilter7;
 871 |         if (cardType === 'facelib') {
 872 |           btnCopyFilter8 = btnCopyFilter7.filter(b => {
 873 |             return b.key !== 'picClick';
 874 |           });
 875 |         }
 876 | 
 877 |         // 属性搜索及专项菜单不显示继续查询按钮，显示图片搜索按钮
 878 |         if (['attr', 'attrFace', 'attrBody', 'attrVehicle', 'attrNonvehicle'].includes(this.pageTypeRoute)) {
 879 |           for (const btn of btnCopyFilter8) {
 880 |             if (btn.key === 'addPic_fusion') {
 881 |               btn.name = '图片搜索';
 882 |               btn.title = '图片搜索';
 883 |               btn.key = 'addPic_fusion_image';
 884 |             }
 885 |           }
 886 |           // 鉴权是否有图片搜索/自身的权限
 887 |           const {
 888 |             oneKeySearch = false,
 889 |             oneKeySearchFace = false,
 890 |             oneKeySearchBody = false,
 891 |             oneKeySearchVehicle = false,
 892 |             oneKeySearchNonvehicle = false
 893 |           } = this.searchConfig.authMap || {};
 894 |           let hasAuth = true;
 895 |           if (!oneKeySearch && this.pageTypeRoute === 'attrFace' && !oneKeySearchFace) {
 896 |             hasAuth = false;
 897 |           } else if (!oneKeySearch && this.pageTypeRoute === 'attrBody' && !oneKeySearchBody) {
 898 |             hasAuth = false;
 899 |           } else if (!oneKeySearch && this.pageTypeRoute === 'attrVehicle' && !oneKeySearchVehicle) {
 900 |             hasAuth = false;
 901 |           } else if (!oneKeySearch && this.pageTypeRoute === 'attrNonvehicle' && !oneKeySearchNonvehicle) {
 902 |             hasAuth = false;
 903 |           }
 904 |           if (!hasAuth) {
 905 |             btnCopyFilter8 = btnCopyFilter8.filter(b => {
 906 |               return b.key !== 'addPic_fusion_image';
 907 |             });
 908 |           }
 909 |         }
 910 |         return btnCopyFilter8;
 911 |       }
 912 |     },
 913 | 
 914 |     // 转换dataType为类别
 915 |     tranlateDataType(val) {
 916 |       val = Number(val);
 917 |       let type = '';
 918 |       switch (val) {
 919 |         case 100201:
 920 |           type = 'face';
 921 |           break;
 922 |         case 100202:
 923 |           type = 'body';
 924 |           break;
 925 |         case 100203:
 926 |           type = 'gt';
 927 |           break;
 928 |         case 200201:
 929 |           type = 'vehicle';
 930 |           break;
 931 |         case 200202:
 932 |           type = 'vehicle';
 933 |           break;
 934 |         case 100101:
 935 |           type = 'person';
 936 |           break;
 937 |         case 100102:
 938 |           type = 'person';
 939 |           break;
 940 |         case 200101:
 941 |           type = 'vehicle_basic';
 942 |           break;
 943 |         case 200203: // 非机动车
 944 |           type = 'nonvehicle';
 945 |           break;
 946 |       }
 947 |       return type;
 948 |     },
 949 |     videoSearchNew(data) {
 950 |       data.type = this.tranlateDataType(data.dataType);
 951 |       this.oneKeyVideoSearchNew(data);
 952 |     },
 953 |     // 视频搜索方法
 954 |     videoSearch(copy, dataType, pageType) {
 955 |       if (copy.dataTypes) {
 956 |         const dataType = copy.dataTypes[0];
 957 |         let tem = {};
 958 |         if (copy.hitInfo && copy.hitInfo[0]) {
 959 |           tem = JSON.parse(JSON.stringify(copy.hitInfo[0]));
 960 |         } else {
 961 |           tem = JSON.parse(JSON.stringify(copy));
 962 |         }
 963 |         tem.dataType = dataType;
 964 |         tem.type = this.tranlateDataType(dataType);
 965 |         this.$G_oneKeyVideoSearch(tem, false, pageType);
 966 |       } else {
 967 |         copy.dataType = Number(dataType);
 968 |         copy.type = this.tranlateDataType(dataType);
 969 |         this.$G_oneKeyVideoSearch(copy, false, pageType);
 970 |       }
 971 |     },
 972 |     // 跳转至地图一键搜图
 973 |     jumpToMapImgSearch(data) {
 974 |       if (data.length) {
 975 |         this.bus.$emit('mapOneKeySearch', data);
 976 |         this.bus.$emit('changeMode', 'image');
 977 |       }
 978 |     },
 979 |     // 一键搜图
 980 |     oneKeyImg(val, dataType, cluster, thisDataType, searchType, pageType = '') {
 981 |       let bkgUrl = '';
 982 |       let rect = '';
 983 |       let targetUrl = '';
 984 |       let targetModelData = '';
 985 |       let isOnePerson = false;
 986 |       let singleFace = false;
 987 |       const butOptions = this.searchConfig.pageConfig[pageType];
 988 |       if (val[0].dataType) {
 989 |         if (thisDataType === 100201 || val[0].dataType === 100201) {
 990 |           if (val[0].modelData || val[0].model) {
 991 |             if (val[0].picUrl) {
 992 |               targetUrl = val[0].picUrl;
 993 |               targetModelData = val[0].modelData || val[0].model;
 994 |               isOnePerson = val[0].isOnePerson;
 995 |               singleFace = true;
 996 |             } else {
 997 |               bkgUrl = val[0].bkgUrl;
 998 |               targetModelData = val[0].modelData || val[0].model;
 999 |               isOnePerson = val[0].isOnePerson;
1000 |               rect = val[0].rect ? val[0].rect : '';
1001 |               singleFace = true;
1002 |             }
1003 |           } else if (val[0].picUrl) {
1004 |             targetUrl = val[0].picUrl;
1005 |             isOnePerson = val[0].isOnePerson;
1006 |             singleFace = true;
1007 |           } else {
1008 |             bkgUrl = val[0].bkgUrl;
1009 |             isOnePerson = val[0].isOnePerson;
1010 |           }
1011 |         } else if (thisDataType === 100202 || val[0].dataType === 100202) {
1012 |           if (val[0].modelData || val[0].model) {
1013 |             if (val[0].picUrl) {
1014 |               targetUrl = val[0].picUrl;
1015 |               targetModelData = val[0].modelData || val[0].model;
1016 |               isOnePerson = val[0].isOnePerson;
1017 |             } else {
1018 |               bkgUrl = val[0].bkgUrl;
1019 |               rect = val[0].rect;
1020 |               targetModelData = val[0].modelData || val[0].model;
1021 |               isOnePerson = val[0].isOnePerson;
1022 |             }
1023 |           } else {
1024 |             if (butOptions.bodyOneKeySearch) {
1025 |               if (butOptions.bodyOneKeySearch === 'small') {
1026 |                 targetUrl = val[0].picUrl || val[0].bkgUrl;
1027 |                 isOnePerson = val[0].isOnePerson;
1028 |               } else {
1029 |                 bkgUrl = val[0].bkgUrl || val[0].picUrl;
1030 |                 rect = !val[0].bkgUrl ? '' : val[0].rect;
1031 |                 isOnePerson = val[0].isOnePerson;
1032 |               }
1033 |             } else {
1034 |               bkgUrl = val[0].picUrl || val[0].bkgUrl;
1035 |               rect = val[0].picUrl ? '' : val[0].rect;
1036 |               targetUrl = val[0].picUrl;
1037 |               isOnePerson = val[0].isOnePerson;
1038 |             }
1039 |           }
1040 |         } else if (
1041 |           thisDataType === 200202 ||
1042 |           thisDataType === 200201 ||
1043 |           val[0].dataType === 200201 ||
1044 |           val[0].dataType === 200202
1045 |         ) {
1046 |           if (val[0].modelData || val[0].model) {
1047 |             if (val[0].picUrl) {
1048 |               targetUrl = val[0].picUrl;
1049 |               targetModelData = val[0].modelData || val[0].model;
1050 |               isOnePerson = val[0].isOnePerson;
1051 |             } else {
1052 |               bkgUrl = val[0].bkgUrl;
1053 |               rect = val[0].rect;
1054 |               targetModelData = val[0].modelData || val[0].model;
1055 |               isOnePerson = val[0].isOnePerson;
1056 |             }
1057 |           } else {
1058 |             if (butOptions.vehicleOneKeySearch) {
1059 |               if (butOptions.vehicleOneKeySearch === 'small') {
1060 |                 targetUrl = val[0].picUrl || val[0].bkgUrl;
1061 |                 isOnePerson = val[0].isOnePerson;
1062 |               } else {
1063 |                 bkgUrl = val[0].bkgUrl || val[0].picUrl;
1064 |                 rect = !val[0].bkgUrl ? '' : val[0].rect;
1065 |                 isOnePerson = val[0].isOnePerson;
1066 |               }
1067 |             } else {
1068 |               bkgUrl = val[0].picUrl || val[0].bkgUrl;
1069 |               rect = val[0].picUrl ? '' : val[0].rect;
1070 |               targetUrl = val[0].picUrl;
1071 |               isOnePerson = val[0].isOnePerson;
1072 |             }
1073 |           }
1074 |         } else if (val[0].dataType === 100101) {
1075 |           bkgUrl = val[0].portraitPhoto && val[0].portraitPhoto.length ? val[0].portraitPhoto[0].picUrl : '';
1076 |           rect = '';
1077 |           targetModelData = val[0].portraitPhoto[0].modelData || val[0].portraitPhoto[0].model;
1078 |           isOnePerson = val[0].isOnePerson;
1079 |         } else if (thisDataType === 200203 || val[0].dataType === 200203) {
1080 |           // 非机动车图搜
1081 |           if (val[0].modelData || val[0].model) {
1082 |             if (val[0].picUrl) {
1083 |               targetUrl = val[0].picUrl;
1084 |               targetModelData = val[0].modelData || val[0].model;
1085 |               isOnePerson = val[0].isOnePerson;
1086 |             } else {
1087 |               bkgUrl = val[0].bkgUrl;
1088 |               rect = val[0].rect;
1089 |               targetModelData = val[0].modelData || val[0].model;
1090 |               isOnePerson = val[0].isOnePerson;
1091 |             }
1092 |           } else {
1093 |             if (butOptions.nonvehicleOneKeySearch) {
1094 |               if (butOptions.nonvehicleOneKeySearch === 'small') {
1095 |                 if (val[0].picUrl) {
1096 |                   targetUrl = val[0].picUrl || val[0].bkgUrl;
1097 |                   isOnePerson = val[0].isOnePerson;
1098 |                 } else {
1099 |                   bkgUrl = val[0].bkgUrl || val[0].picUrl;
1100 |                   rect = !val[0].bkgUrl ? '' : val[0].rect;
1101 |                   isOnePerson = val[0].isOnePerson;
1102 |                 }
1103 |               } else {
1104 |                 bkgUrl = val[0].bkgUrl || val[0].picUrl;
1105 |                 rect = !val[0].bkgUrl ? '' : val[0].rect;
1106 |                 isOnePerson = val[0].isOnePerson;
1107 |               }
1108 |             } else {
1109 |               bkgUrl = val[0].picUrl || val[0].bkgUrl;
1110 |               rect = val[0].picUrl ? '' : val[0].rect;
1111 |               targetUrl = val[0].picUrl;
1112 |               isOnePerson = val[0].isOnePerson;
1113 |             }
1114 |           }
1115 |         }
1116 |       } else {
1117 |         if (butOptions.faceOneKeySearch) {
1118 |           bkgUrl =
1119 |             butOptions.faceOneKeySearch === 'small'
1120 |               ? val[0].hitInfo[0].picUrl || val[0].hitInfo[0].bkgUrl
1121 |               : val[0].hitInfo[0].bkgUrl || val[0].hitInfo[0].picUrl;
1122 |           rect =
1123 |             butOptions.faceOneKeySearch === 'small'
1124 |               ? !val[0].hitInfo[0].picUrl
1125 |                 ? val[0].hitInfo[0].rect
1126 |                 : ''
1127 |               : !val[0].hitInfo[0].bkgUrl
1128 |               ? ''
1129 |               : val[0].hitInfo[0].rect;
1130 |           targetUrl = val[0].hitInfo[0].picUrl;
1131 |           targetModelData = val[0].hitInfo[0].modelData || val[0].hitInfo[0].model;
1132 |           isOnePerson = val[0].isOnePerson;
1133 |         } else {
1134 |           bkgUrl = val[0].hitInfo[0].picUrl || val[0].hitInfo[0].bkgUrl;
1135 |           rect = val[0].hitInfo[0].picUrl ? '' : val[0].hitInfo[0].rect;
1136 |           targetUrl = val[0].hitInfo[0].picUrl;
1137 |           targetModelData = val[0].hitInfo[0].modelData || val[0].hitInfo[0].model;
1138 |           isOnePerson = val[0].isOnePerson;
1139 |         }
1140 |       }
1141 |       this.$G_oneKeySearch(
1142 |         {
1143 |           bkgUrl: bkgUrl,
1144 |           rect: rect ? JSON.parse(rect) : '',
1145 |           type: dataType === 100101 ? 'face' : dataType === 200101 ? 'vehicle' : this.tranlateDataType(dataType),
1146 |           targetUrl: targetUrl,
1147 |           targetModelData: targetModelData,
1148 |           isOnePerson: isOnePerson,
1149 |           singleFace: singleFace
1150 |         },
1151 |         searchType.includes('map') ? this.jumpToMapImgSearch : null,
1152 |         cluster
1153 |       );
1154 |     },
1155 |     // 加入图片
1156 |     addPic(copy, dataType, searchType, pageType) {
1157 |       if (copy.targetId) {
1158 |         if (copy.hitInfo && copy.hitInfo.length) copy.hitInfo[0].isOnePerson = true;
1159 |         this.oneKeyImg([copy.hitInfo[0]], copy.hitInfo[0].dataType, false, dataType, searchType, pageType);
1160 |       } else {
1161 |         copy.isOnePerson = true;
1162 |         this.oneKeyImg([copy], copy.dataType ? dataType : copy.dataTypes[0], false, dataType, searchType, pageType);
1163 |       }
1164 |     },
1165 |     picSearch(copy, dataType, searchType, pageType) {
1166 |       if (copy.targetId) {
1167 |         if (copy.hitInfo && copy.hitInfo.length) {
1168 |           copy.hitInfo[0].isOnePerson = false;
1169 |           this.oneKeyImg([copy.hitInfo[0]], copy.hitInfo[0].dataType, false, dataType, searchType, pageType);
1170 |         } else {
1171 |           // 非机动车（待定）
1172 |           copy.isOnePerson = false;
1173 |           this.oneKeyImg([copy], copy.dataType ? dataType : copy.dataTypes[0], false, dataType, searchType, pageType);
1174 |         }
1175 |       } else {
1176 |         copy.isOnePerson = false;
1177 |         this.oneKeyImg([copy], copy.dataType ? dataType : copy.dataTypes[0], false, dataType, searchType, pageType);
1178 |       }
1179 |     },
1180 |     // 加入暂存架
1181 |     handleAdd(copy, plateSelect, dataType) {
1182 |       if (copy.dataTypes) {
1183 |         if (copy.targetId) {
1184 |           let dataType = 100101;
1185 |           if (copy.targetType === '20' || copy.targetType === 20) {
1186 |             dataType = 200101;
1187 |           }
1188 |           copy.dataType = dataType;
1189 |           if (copy.basicInfo && copy.basicInfo.length && copy.basicInfo[0]) {
1190 |             addToShelf([copy.basicInfo[0]], this.tranlateDataType(dataType));
1191 |           } else if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1192 |             addToShelf([copy.hitInfo[0]], this.tranlateDataType(dataType));
1193 |           }
1194 |         } else {
1195 |           const dataType = copy.dataTypes[0];
1196 |           copy.dataType = dataType;
1197 |           if (copy.basicInfo && copy.basicInfo.length && copy.basicInfo[0]) {
1198 |             addToShelf([copy.basicInfo[0]], this.tranlateDataType(dataType));
1199 |           } else if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1200 |             addToShelf([copy.hitInfo[0]], plateSelect, this.tranlateDataType(dataType));
1201 |           }
1202 |         }
1203 |       } else {
1204 |         copy.type = this.tranlateDataType(dataType);
1205 |         addToShelf([copy], plateSelect, this.tranlateDataType(dataType));
1206 |       }
1207 |     },
1208 |     // 关联信息
1209 |     handleLink(copy, dataType) {
1210 |       copy.type = dataType;
1211 |       if (dataType === 100101 || dataType === 100102) {
1212 |         if (copy.humanId) {
1213 |           this.$G_JumpPage(
1214 |             '/isearch-web/answerDetail',
1215 |             {
1216 |               humanId: copy.humanId,
1217 |               step: 1
1218 |             },
1219 |             '关联信息'
1220 |           );
1221 |         } else {
1222 |           this.$message('暂无身份证号');
1223 |         }
1224 |       } else if (dataType === 200101) {
1225 |         if (copy.plateNo || copy.plateNum) {
1226 |           this.$G_JumpPage(
1227 |             '/isearch-web/answerDetail',
1228 |             {
1229 |               plateNo: copy.plateNo || copy.plateNum,
1230 |               step: 1
1231 |             },
1232 |             '关联信息'
1233 |           );
1234 |         } else {
1235 |           this.$message('暂无车牌号码');
1236 |         }
1237 |       } else if (copy.dataTypes) {
1238 |         if (
1239 |           copy.dataTypes.includes(100101) ||
1240 |           copy.dataTypes.includes(100201) ||
1241 |           copy.dataTypes.includes(100202) ||
1242 |           copy.dataTypes.includes('100101') ||
1243 |           copy.dataTypes.includes('100201') ||
1244 |           copy.dataTypes.includes('100202')
1245 |         ) {
1246 |           if (copy.basicInfo && copy.basicInfo.length && copy.basicInfo[0].humanId) {
1247 |             this.$G_JumpPage(
1248 |               '/isearch-web/answerDetail',
1249 |               {
1250 |                 humanId: copy.basicInfo[0].humanId,
1251 |                 step: 1
1252 |               },
1253 |               '关联信息'
1254 |             );
1255 |           } else if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0].humanId) {
1256 |             this.$G_JumpPage(
1257 |               '/isearch-web/answerDetail',
1258 |               {
1259 |                 humanId: copy.hitInfo[0].humanId,
1260 |                 step: 1
1261 |               },
1262 |               '关联信息'
1263 |             );
1264 |           } else {
1265 |             this.$message('暂无身份证号');
1266 |           }
1267 |         } else if (
1268 |           copy.dataTypes.includes(200101) ||
1269 |           copy.dataTypes.includes(200201) ||
1270 |           copy.dataTypes.includes(200202) ||
1271 |           copy.dataTypes.includes('200101') ||
1272 |           copy.dataTypes.includes('200201') ||
1273 |           copy.dataTypes.includes('200202')
1274 |         ) {
1275 |           if (copy.basicInfo && copy.basicInfo.length && copy.basicInfo[0].plateNo) {
1276 |             this.$G_JumpPage(
1277 |               '/isearch-web/answerDetail',
1278 |               {
1279 |                 plateNo: copy.basicInfo[0].plateNo,
1280 |                 step: 1
1281 |               },
1282 |               '关联信息'
1283 |             );
1284 |           } else if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0].plateNo) {
1285 |             this.$G_JumpPage(
1286 |               '/isearch-web/answerDetail',
1287 |               {
1288 |                 plateNo: copy.hitInfo[0].plateNo,
1289 |                 step: 1
1290 |               },
1291 |               '关联信息'
1292 |             );
1293 |           } else if (copy.plateNo || copy.plateNum) {
1294 |             this.$G_JumpPage(
1295 |               '/isearch-web/answerDetail',
1296 |               {
1297 |                 plateNo: copy.plateNo || copy.plateNum,
1298 |                 step: 1
1299 |               },
1300 |               '关联信息'
1301 |             );
1302 |           } else {
1303 |             this.$message('暂无车牌号码');
1304 |           }
1305 |         }
1306 |       }
1307 |     },
1308 |     // 多维轨迹
1309 |     handleTrack(copy, plateSelect) {
1310 |       if (copy.targetType === 10 || copy.targetType === '10') {
1311 |         if (copy.basicInfo && copy.basicInfo[0] && copy.basicInfo[0].humanId) {
1312 |           //   跳转轨迹搜索
1313 |           this.$G_JumpPage(
1314 |             '/isearch-web/isearchmap',
1315 |             {
1316 |               page: 'trackSearch',
1317 |               humanId: copy.basicInfo[0].humanId
1318 |             },
1319 |             '轨迹搜索'
1320 |           );
1321 |         } else if (copy.hitInfo && copy.hitInfo[0] && copy.hitInfo[0].humanId) {
1322 |           this.$G_JumpPage(
1323 |             '/isearch-web/isearchmap',
1324 |             {
1325 |               page: 'trackSearch',
1326 |               humanId: copy.hitInfo[0].humanId
1327 |             },
1328 |             '轨迹搜索'
1329 |           );
1330 |         }
1331 |       } else if (copy.targetType === 20 || copy.targetType === '20') {
1332 |         if (copy.basicInfo && copy.basicInfo[0] && copy.basicInfo[0].plateNo) {
1333 |           //   跳转轨迹搜索
1334 |           this.$G_JumpPage(
1335 |             '/isearch-web/isearchmap',
1336 |             {
1337 |               page: 'trackSearch',
1338 |               plateColor: copy.basicInfo[0].plateColor,
1339 |               plateNo: copy.basicInfo[0].plateNo
1340 |             },
1341 |             '轨迹搜索'
1342 |           );
1343 |         } else if (copy.hitInfo && copy.hitInfo[0] && copy.hitInfo[0].plateNo) {
1344 |           this.$G_JumpPage(
1345 |             '/isearch-web/isearchmap',
1346 |             {
1347 |               page: 'trackSearch',
1348 |               plateColor: copy.hitInfo[0].plateColor,
1349 |               plateNo: copy.hitInfo[0].plateNo
1350 |             },
1351 |             '轨迹搜索'
1352 |           );
1353 |         }
1354 |       } else if (copy.dataType && [100201, 100202, 100101, 100102].indexOf(Number(copy.dataType)) !== -1) {
1355 |         if (copy.humanId) {
1356 |           //   跳转轨迹搜索
1357 |           this.$G_JumpPage(
1358 |             '/isearch-web/isearchmap',
1359 |             {
1360 |               page: 'trackSearch',
1361 |               humanId: copy.humanId
1362 |             },
1363 |             '轨迹搜索'
1364 |           );
1365 |         }
1366 |       } else if (copy.dataType && [200201, 200203, 200101, 200202].indexOf(Number(copy.dataType)) !== -1) {
1367 |         let plateColor = '';
1368 |         let plateNo = '';
1369 |         if (plateSelect) {
1370 |           if (plateSelect === 'Original') {
1371 |             plateColor = copy.plateColorOriginal;
1372 |             plateNo = copy.plateNoOriginal;
1373 |           } else if (plateSelect === 'Twice') {
1374 |             plateColor = copy.plateColorTwice;
1375 |             plateNo = copy.plateNoTwice;
1376 |           }
1377 |         } else {
1378 |           plateColor = copy.plateColor;
1379 |           plateNo = copy.plateNo;
1380 |         }
1381 |         //   跳转轨迹搜索
1382 |         this.$G_JumpPage(
1383 |           '/isearch-web/isearchmap',
1384 |           {
1385 |             page: 'trackSearch',
1386 |             plateColor: plateColor,
1387 |             plateNo: plateNo
1388 |           },
1389 |           '轨迹搜索'
1390 |         );
1391 |       }
1392 |     },
1393 |     // 跳转智图研判轨迹
1394 |     handleTraceFusion(copy, plateSelect) {
1395 |       if (copy.targetType === 10 || copy.targetType === '10') {
1396 |         if (copy.basicInfo && copy.basicInfo[0] && copy.basicInfo[0].humanId) {
1397 |           // 专项菜单查看轨迹打开智图页面
1398 |           if (this.pageTypeRoute) {
1399 |             this.$G_JumpPage(
1400 |               '/bsearch-web/fusion',
1401 |               {
1402 |                 humanId: copy.basicInfo[0].humanId,
1403 |                 page: 'trackSearch'
1404 |               },
1405 |               '智图轨迹研判'
1406 |             );
1407 |           } else {
1408 |             // 跳转智图研判轨迹
1409 |             this.bus.$emit('searchTragetTrack', { humanId: copy.basicInfo[0].humanId });
1410 |           }
1411 |         } else if (copy.hitInfo && copy.hitInfo[0] && copy.hitInfo[0].humanId) {
1412 |           // 专项菜单查看轨迹打开智图页面
1413 |           if (this.pageTypeRoute) {
1414 |             this.$G_JumpPage(
1415 |               '/bsearch-web/fusion',
1416 |               {
1417 |                 humanId: copy.hitInfo[0].humanId,
1418 |                 page: 'trackSearch'
1419 |               },
1420 |               '智图轨迹研判'
1421 |             );
1422 |           } else {
1423 |             this.bus.$emit('searchTragetTrack', { humanId: copy.hitInfo[0].humanId });
1424 |           }
1425 |         }
1426 |       } else if (copy.targetType === 20 || copy.targetType === '20') {
1427 |         if (copy.basicInfo && copy.basicInfo[0] && copy.basicInfo[0].plateNo) {
1428 |           // 专项菜单查看轨迹打开智图页面
1429 |           if (this.pageTypeRoute) {
1430 |             this.$G_JumpPage(
1431 |               '/bsearch-web/fusion',
1432 |               {
1433 |                 plateColor: copy.basicInfo[0].plateColor,
1434 |                 plateNo: copy.basicInfo[0].plateNo,
1435 |                 page: 'trackSearch'
1436 |               },
1437 |               '智图轨迹研判'
1438 |             );
1439 |           } else {
1440 |             // 跳转轨迹搜索
1441 |             this.bus.$emit('searchTragetTrack', {
1442 |               plateColor: copy.basicInfo[0].plateColor,
1443 |               plateNo: copy.basicInfo[0].plateNo
1444 |             });
1445 |           }
1446 |         } else if (copy.hitInfo && copy.hitInfo[0] && copy.hitInfo[0].plateNo) {
1447 |           // 专项菜单查看轨迹打开智图页面
1448 |           if (this.pageTypeRoute) {
1449 |             this.$G_JumpPage(
1450 |               '/bsearch-web/fusion',
1451 |               {
1452 |                 plateColor: copy.hitInfo[0].plateColor,
1453 |                 plateNo: copy.hitInfo[0].plateNo,
1454 |                 page: 'trackSearch'
1455 |               },
1456 |               '智图轨迹研判'
1457 |             );
1458 |           } else {
1459 |             this.bus.$emit('searchTragetTrack', {
1460 |               plateColor: copy.hitInfo[0].plateColor,
1461 |               plateNo: copy.hitInfo[0].plateNo
1462 |             });
1463 |           }
1464 |         }
1465 |       } else if (copy.dataType && [100201, 100202, 100101, 100102].indexOf(Number(copy.dataType)) !== -1) {
1466 |         if (copy.humanId) {
1467 |           // 专项菜单查看轨迹打开智图页面
1468 |           if (this.pageTypeRoute) {
1469 |             this.$G_JumpPage(
1470 |               '/bsearch-web/fusion',
1471 |               {
1472 |                 humanId: copy.humanId,
1473 |                 page: 'trackSearch'
1474 |               },
1475 |               '智图轨迹研判'
1476 |             );
1477 |           } else {
1478 |             this.bus.$emit('searchTragetTrack', { humanId: copy.humanId });
1479 |           }
1480 |         }
1481 |       } else if (copy.dataType && [200201, 200203, 200101, 200202].indexOf(Number(copy.dataType)) !== -1) {
1482 |         let plateColor = '';
1483 |         let plateNo = '';
1484 |         if (plateSelect) {
1485 |           if (plateSelect === 'Original') {
1486 |             plateColor = copy.plateColorOriginal;
1487 |             plateNo = copy.plateNoOriginal;
1488 |           } else if (plateSelect === 'Twice') {
1489 |             plateColor = copy.plateColorTwice;
1490 |             plateNo = copy.plateNoTwice;
1491 |           }
1492 |         } else {
1493 |           plateColor = copy.plateColor;
1494 |           plateNo = copy.plateNo;
1495 |         }
1496 |         // 专项菜单查看轨迹打开智图页面
1497 |         if (this.pageTypeRoute) {
1498 |           this.$G_JumpPage(
1499 |             '/bsearch-web/fusion',
1500 |             {
1501 |               plateColor: plateColor,
1502 |               plateNo: plateNo,
1503 |               page: 'trackSearch'
1504 |             },
1505 |             '智图轨迹研判'
1506 |           );
1507 |         } else {
1508 |           this.bus.$emit('searchTragetTrack', {
1509 |             plateColor: plateColor,
1510 |             plateNo: plateNo
1511 |           });
1512 |         }
1513 |       }
1514 |     },
1515 |     jumpToDocument(copy) {
1516 |       if (
1517 |         copy.dataType === 100101 ||
1518 |         copy.dataType === 100102 ||
1519 |         copy.dataType === '100101' ||
1520 |         copy.dataType === '100102'
1521 |       ) {
1522 |         // 全息档案跳转
1523 |         if (
1524 |           this.searchConfig &&
1525 |           this.searchConfig.pageConfig &&
1526 |           this.searchConfig.pageConfig.common &&
1527 |           this.searchConfig.pageConfig.common.iarchives
1528 |         ) {
1529 |           if (copy.humanId) {
1530 |             this.skipToArchives(copy.humanId, '990');
1531 |           } else if (copy.mainCertificateType) {
1532 |             const obj = copy.certificates.filter(
1533 |               v =>
1534 |                 v.certificateType === copy.mainCertificateType ||
1535 |                 v.certificateType === copy.mainCertificateType.toString()
1536 |             )[0];
1537 |             if (obj && obj.certificateNumber) {
1538 |               if (obj.certificateNumber && copy.mainCertificateType) {
1539 |                 this.skipToArchives(obj.certificateNumber, copy.mainCertificateType);
1540 |               } else {
1541 |                 this.$message('无人员身份证号，无法进入全息档案');
1542 |               }
1543 |             } else {
1544 |               this.$message('无人员身份证号，无法进入全息档案');
1545 |             }
1546 |           } else {
1547 |             this.$message('无人员身份证号，无法进入全息档案');
1548 |           }
1549 |         } else {
1550 |           if (copy.mainCertificateType) {
1551 |             const obj = copy.certificates.filter(
1552 |               v =>
1553 |                 v.certificateType === copy.mainCertificateType ||
1554 |                 v.certificateType === copy.mainCertificateType.toString()
1555 |             )[0];
1556 |             if (obj && obj.certificateNumber) {
1557 |               if (obj.certificateNumber && copy.mainCertificateType) {
1558 |                 skipToDocument(obj.certificateNumber, copy.mainCertificateType);
1559 |               } else {
1560 |                 this.$message('无人员身份证号，无法进入全息档案');
1561 |               }
1562 |             } else {
1563 |               this.$message('无人员身份证号，无法进入全息档案');
1564 |             }
1565 |           } else if (copy.humanId) {
1566 |             skipToDocument(copy.humanId, '990');
1567 |           } else {
1568 |             this.$message('无人员身份证号，无法进入全息档案');
1569 |           }
1570 |         }
1571 |       } else if (
1572 |         copy.dataType === 100201 ||
1573 |         copy.dataType === 100202 ||
1574 |         copy.dataType === '100201' ||
1575 |         copy.dataType === '100202'
1576 |       ) {
1577 |         if (
1578 |           this.searchConfig &&
1579 |           this.searchConfig.pageConfig &&
1580 |           this.searchConfig.pageConfig.common &&
1581 |           this.searchConfig.pageConfig.common.iarchives
1582 |         ) {
1583 |           if (copy.humanId) {
1584 |             this.skipToArchives(copy.humanId, '990');
1585 |           } else if (copy.certificateNumber) {
1586 |             this.skipToArchives(copy.certificateNumber, '111');
1587 |           } else {
1588 |             this.$message('无人员身份证号，无法进入全息档案');
1589 |           }
1590 |         } else {
1591 |           if (copy.certificateNumber) {
1592 |             skipToDocument(copy.certificateNumber, copy.certificateType);
1593 |           } else if (copy.humanId) {
1594 |             skipToDocument(copy.humanId, '990');
1595 |           } else {
1596 |             this.$message('无人员身份证号，无法进入全息档案');
1597 |           }
1598 |         }
1599 |       } else if (copy.dataType === 200101 || copy.dataType === '200101') {
1600 |         if (copy.plateNo && copy.plateColor) {
1601 |           this.$G_JumpPage(
1602 |             '/vehicledossier-web/#/vehicleManage',
1603 |             {
1604 |               plateNum: copy.plateNo,
1605 |               plateColor: copy.plateColor
1606 |             },
1607 |             '一车一档'
1608 |           );
1609 |         } else {
1610 |           this.$message('缺少车牌号或车牌颜色，无法跳转一车一档');
1611 |         }
1612 |       }
1613 |     },
1614 |     skipToArchives(number, type) {
1615 |       const url = '/iarchives/#/archives';
1616 |       this.$G_JumpPage(
1617 |         url,
1618 |         {
1619 |           type: 'public_person',
1620 |           val: number,
1621 |           certificateType: type,
1622 |           flag: 1
1623 |         },
1624 |         '全息档案'
1625 |       );
1626 |     },
1627 |     handleArchiveDetail(copy) {
1628 |       if (copy.targetId) {
1629 |         this.jumpToDocument(copy.basicInfo[0]);
1630 |       } else {
1631 |         if (copy.dataTypes && copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1632 |           this.jumpToDocument(copy.hitInfo[0]);
1633 |         } else {
1634 |           this.jumpToDocument(copy);
1635 |         }
1636 |       }
1637 |     },
1638 |     policeDetail(copy) {
1639 |       if (copy.targetId) {
1640 |         this.jumpToGADocument(copy.basicInfo[0]);
1641 |       } else {
1642 |         this.jumpToGADocument(copy);
1643 |       }
1644 |     },
1645 |     jumpToGADocument(copy) {
1646 |       if (
1647 |         copy.dataType === 100101 ||
1648 |         copy.dataType === 100102 ||
1649 |         copy.dataType === 100201 ||
1650 |         copy.dataType === 100202 ||
1651 |         copy.dataType === '100201' ||
1652 |         copy.dataType === '100202'
1653 |       ) {
1654 |         if (copy.mainCertificateType) {
1655 |           const obj = copy.certificates.filter(
1656 |             v =>
1657 |               v.certificateType === copy.mainCertificateType ||
1658 |               v.certificateType === copy.mainCertificateType.toString()
1659 |           )[0];
1660 |           if (obj && obj.certificateNumber) {
1661 |             if (obj.certificateNumber && copy.mainCertificateType) {
1662 |               this.$G_skipToPolicePeople(obj.certificateNumber);
1663 |             } else {
1664 |               this.$message('无人员身份证号，无法进入全息档案');
1665 |             }
1666 |           } else {
1667 |             this.$message('无人员身份证号，无法进入全息档案');
1668 |           }
1669 |         } else if (copy.humanId) {
1670 |           this.$G_skipToPolicePeople(copy.humanId, '111');
1671 |         } else {
1672 |           this.$message('无人员身份证号，无法进入全息档案');
1673 |         }
1674 |       }
1675 |     },
1676 |     identification(copy) {
1677 |       // this.$G_Identification([copy])
1678 |       if (copy.dataTypes) {
1679 |         if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1680 |           this.jumpToIdentification(copy.hitInfo[0]);
1681 |         }
1682 |       } else {
1683 |         this.jumpToIdentification(copy);
1684 |       }
1685 |     },
1686 |     identificationFusion(copy) {
1687 |       const authMap = this.searchConfig.authMap;
1688 |       if (copy.dataTypes) {
1689 |         if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1690 |           if (authMap.identificationFusion) {
1691 |             this.jumpToIdentificationFusion(copy.hitInfo[0]);
1692 |           } else {
1693 |             this.jumpToIdentification(copy.hitInfo[0]);
1694 |           }
1695 |         }
1696 |       } else {
1697 |         if (authMap.identificationFusion) {
1698 |           this.jumpToIdentificationFusion(copy);
1699 |         } else {
1700 |           this.jumpToIdentification(copy);
1701 |         }
1702 |       }
1703 |     },
1704 |     shoeHatPicSearch(copy, mode = 'small') {
1705 |       const { bkgUrl, picUrl } = copy;
1706 |       if (!bkgUrl && !picUrl) return this.$message({ type: 'info', message: '无有效图片，无法进入以物搜人' });
1707 | 
1708 |       // 根据大小图配置优先取大小图
1709 |       let obj = {};
1710 |       if (mode === 'small') {
1711 |         obj = {
1712 |           bkgUrl: picUrl || bkgUrl
1713 |         };
1714 |       } else {
1715 |         obj = {
1716 |           bkgUrl: bkgUrl || picUrl
1717 |         };
1718 |       }
1719 | 
1720 |       this.$G_JumpPage(
1721 |         '/bsearch-web/humanFeature',
1722 |         obj,
1723 |         '以物搜人',
1724 |         'search',
1725 |         this.$store.state.searchConfig.openNewPage
1726 |       );
1727 |     },
1728 |     jumpToIdentificationFusion(copy) {
1729 |       if (
1730 |         copy.dataType === 100101 ||
1731 |         copy.dataType === 100102 ||
1732 |         copy.dataType === '100101' ||
1733 |         copy.dataType === '100102'
1734 |       ) {
1735 |         // eslint-disable-next-line no-console
1736 |         if (copy.portraitPhoto && copy.portraitPhoto.length) {
1737 |           const obj = {};
1738 |           obj.targetUrl = copy.portraitPhoto[0].picUrl;
1739 |           this.$G_JumpPage(
1740 |             '/bsearch-web/identification',
1741 |             obj,
1742 |             '身份确认',
1743 |             'search',
1744 |             this.$store.state.searchConfig.openNewPage
1745 |           );
1746 |         }
1747 |       } else if (
1748 |         copy.dataType === 100201 ||
1749 |         copy.dataType === '100201' ||
1750 |         copy.dataType === 100202 ||
1751 |         copy.dataType === '100202'
1752 |       ) {
1753 |         const obj = {};
1754 |         if (copy.dataType === 100202 || copy.dataType === '100202') {
1755 |           if (copy.picUrl) {
1756 |             obj.targetUrl = copy.picUrl;
1757 |           } else {
1758 |             obj.bkgUrl = copy.bkgUrl;
1759 |           }
1760 |         } else {
1761 |           if (copy.picUrl) {
1762 |             obj.targetUrl = copy.picUrl;
1763 |             obj.targetModelData = copy.targetModelData;
1764 |           } else {
1765 |             obj.bkgUrl = copy.bkgUrl;
1766 |             obj.rect = copy.rect ? JSON.parse(copy.rect) : '';
1767 |             obj.targetModelData = copy.targetModelData;
1768 |           }
1769 |         }
1770 |         this.$G_JumpPage(
1771 |           '/bsearch-web/identification',
1772 |           obj,
1773 |           '身份确认',
1774 |           'search',
1775 |           this.$store.state.searchConfig.openNewPage
1776 |         );
1777 |       }
1778 |     },
1779 |     jumpToIdentification(copy) {
1780 |       const that = this;
1781 |       if (
1782 |         copy.dataType === 100101 ||
1783 |         copy.dataType === 100102 ||
1784 |         copy.dataType === '100101' ||
1785 |         copy.dataType === '100102'
1786 |       ) {
1787 |         // eslint-disable-next-line no-console
1788 |         if (copy.portraitPhoto && copy.portraitPhoto.length) {
1789 |           if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
1790 |             const url = '/iface-web/index.do#identity';
1791 |             const urlNew = url + '?' + 'faceUrl=' + copy.portraitPhoto[0].picUrl;
1792 |             this.$G_JumpPage(
1793 |               urlNew,
1794 |               undefined,
1795 |               // { faceUrl: copy.portraitPhoto[0].picUrl },
1796 |               '身份确认',
1797 |               'search',
1798 |               this.$store.state.searchConfig.openNewPage
1799 |             );
1800 |           } else {
1801 |             const obj = {};
1802 |             obj.targetUrl = copy.portraitPhoto[0].picUrl;
1803 |             this.$G_JumpPage(
1804 |               '/isearch-web/identification',
1805 |               obj,
1806 |               '身份确认',
1807 |               'search',
1808 |               this.$store.state.searchConfig.openNewPage
1809 |             );
1810 |           }
1811 |         }
1812 |       } else if (
1813 |         copy.dataType === 100201 ||
1814 |         copy.dataType === '100201' ||
1815 |         copy.dataType === 100202 ||
1816 |         copy.dataType === '100202'
1817 |       ) {
1818 |         if (that.compatibleConfig && that.compatibleConfig.pviaVersion === '130') {
1819 |           const url = '/iface-web/index.do#identity';
1820 |           const urlNew = url + '?' + 'faceUrl=' + (copy.picUrl || copy.bkgUrl);
1821 |           this.$G_JumpPage(
1822 |             urlNew,
1823 |             undefined,
1824 |             // { faceUrl: copy.picUrl || copy.bkgUrl },
1825 |             '身份确认',
1826 |             'search',
1827 |             this.$store.state.searchConfig.openNewPage
1828 |           );
1829 |         } else {
1830 |           const obj = {};
1831 |           if (copy.dataType === 100202 || copy.dataType === '100202') {
1832 |             if (copy.picUrl) {
1833 |               obj.targetUrl = copy.picUrl;
1834 |             } else {
1835 |               obj.bkgUrl = copy.bkgUrl;
1836 |             }
1837 |           } else {
1838 |             if (copy.picUrl) {
1839 |               obj.targetUrl = copy.picUrl;
1840 |               obj.targetModelData = copy.targetModelData;
1841 |             } else {
1842 |               obj.bkgUrl = copy.bkgUrl;
1843 |               obj.rect = copy.rect ? JSON.parse(copy.rect) : '';
1844 |               obj.targetModelData = copy.targetModelData;
1845 |             }
1846 |           }
1847 |           this.$G_JumpPage(
1848 |             '/isearch-web/identification',
1849 |             obj,
1850 |             '身份确认',
1851 |             'search',
1852 |             this.$store.state.searchConfig.openNewPage
1853 |           );
1854 |         }
1855 |       }
1856 |     },
1857 |     oneKeyAlarm(copy, plateSelect) {
1858 |       if (copy.dataTypes) {
1859 |         if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
1860 |           this.handleBalarm(copy.hitInfo[0], plateSelect);
1861 |         } else if (copy.basicInfo && copy.basicInfo.length && copy.basicInfo[0]) {
1862 |           this.handleBalarm(copy.basicInfo[0]);
1863 |         }
1864 |       } else {
1865 |         this.handleBalarm(copy, plateSelect);
1866 |       }
1867 |     },
1868 |     oneKeyTraceSearch(copy) {
1869 |       const that = this;
1870 |       const { pviaVersion } = that.compatibleConfig;
1871 |       const { crossingIndexCode, cameraIndexCode, bkgUrl, picUrl } = copy;
1872 |       if (pviaVersion === '130') {
1873 |         this.$G_JumpPage(
1874 |           '/itrace-web/index.do/#/targetTracking/add',
1875 |           {
1876 |             cameraIndexCode: crossingIndexCode || cameraIndexCode,
1877 |             picUrl: bkgUrl || picUrl
1878 |           },
1879 |           '目标追踪',
1880 |           'search',
1881 |           true
1882 |         );
1883 |       } else {
1884 |         this.bus.$emit('oneKeyTraceSearch', copy);
1885 |       }
1886 |     },
1887 |     handleBalarm(copy, plateSelect) {
1888 |       if (copy.dataType === 100201 || copy.dataType === '100201') {
1889 |         if (top && top.window && top.window.goToApp) {
1890 |           top.window.goToApp({
1891 |             componentId: 'imultalarm',
1892 |             componentMenuId: 'human_face_deploy',
1893 |             url: '/imultalarm-deploy/set-alarm/human-face',
1894 |             name: '人脸布控',
1895 |             reload: true,
1896 |             callback: {
1897 |               method: 'imultalarmAdd',
1898 |               argument: {
1899 |                 deployType: 'iface',
1900 |                 deploySubType: 'face_single_person',
1901 |                 pics: copy.picUrl ? [copy.picUrl] : [copy.bkgUrl]
1902 |               }
1903 |             }
1904 |           });
1905 |         }
1906 |       } else if (copy.dataType === 100202 || copy.dataType === '100202') {
1907 |         if (top && top.window && top.window.goToApp) {
1908 |           top.window.goToApp({
1909 |             componentId: 'imultalarm',
1910 |             componentMenuId: 'target_deploy',
1911 |             url: '/imultalarm-deploy/set-alarm/target-deploy',
1912 |             name: '人体布控',
1913 |             reload: true,
1914 |             callback: {
1915 |               method: 'imultalarmAdd',
1916 |               argument: {
1917 |                 deployType: 'ibody',
1918 |                 pics: copy.picUrl ? [copy.picUrl] : [copy.bkgUrl]
1919 |               }
1920 |             }
1921 |           });
1922 |         }
1923 |       } else if (
1924 |         copy.dataType === 200201 ||
1925 |         copy.dataType === '200201' ||
1926 |         copy.dataType === 200202 ||
1927 |         copy.dataType === '200202' ||
1928 |         copy.dataType === 200101 ||
1929 |         copy.dataType === '200101'
1930 |       ) {
1931 |         let plateNo = '';
1932 |         let plateColor = '';
1933 |         if (plateSelect) {
1934 |           if (plateSelect === 'Original') {
1935 |             plateColor = copy.plateColorOriginal;
1936 |             plateNo = copy.plateNoOriginal;
1937 |           } else if (plateSelect === 'Twice') {
1938 |             plateColor = copy.plateColorTwice;
1939 |             plateNo = copy.plateNoTwice;
1940 |           }
1941 |         } else {
1942 |           plateNo = copy.plateNo;
1943 |           plateColor = copy.plateColor;
1944 |         }
1945 |         // 车辆布控
1946 |         if (
1947 |           plateNo &&
1948 |           plateNo !== '车牌' &&
1949 |           plateNo !== '无车牌' &&
1950 |           plateNo !== '无牌车' &&
1951 |           plateNo !== 'NoPlate' &&
1952 |           plateNo !== 'No Plate' &&
1953 |           plateNo !== 'unknown'
1954 |         ) {
1955 |           if (top && top.window && top.window.goToApp) {
1956 |             top.window.goToApp({
1957 |               componentId: 'imultalarm',
1958 |               componentMenuId: 'vehicle_plate_deploy',
1959 |               url: '/imultalarm-deploy/set-alarm/vehicle-plate',
1960 |               name: '车牌布控',
1961 |               reload: true,
1962 |               callback: {
1963 |                 method: 'imultalarmAdd',
1964 |                 argument: {
1965 |                   deployType: 'ivehicle',
1966 |                   deploySubType: 'vehicle_plate',
1967 |                   plateNo: copy.plateNo || copy.plateNum,
1968 |                   plateColor: copy.plateColor || ''
1969 |                 }
1970 |               }
1971 |             });
1972 |           }
1973 |         } else {
1974 |           if (top && top.window && top.window.goToApp) {
1975 |             top.window.goToApp({
1976 |               componentId: 'imultalarm',
1977 |               componentMenuId: 'vehicle_pic_deploy',
1978 |               url: '/imultalarm-deploy/set-alarm/vehicle-pic',
1979 |               name: '车辆布控',
1980 |               reload: true,
1981 |               callback: {
1982 |                 method: 'imultalarmAdd',
1983 |                 argument: {
1984 |                   deployType: 'ivehicle',
1985 |                   deploySubType: 'vehicle_pic',
1986 |                   pics: copy.picUrl ? [copy.picUrl] : [copy.bkgUrl]
1987 |                 }
1988 |               }
1989 |             });
1990 |           }
1991 |         }
1992 |       } else if (
1993 |         copy.dataType === 100101 ||
1994 |         copy.dataType === '100101' ||
1995 |         copy.dataType === 100102 ||
1996 |         copy.dataType === '100102'
1997 |       ) {
1998 |         if (copy.portraitPhoto && copy.portraitPhoto.length) {
1999 |           if (top && top.window && top.window.goToApp) {
2000 |             top.window.goToApp({
2001 |               componentId: 'imultalarm',
2002 |               componentMenuId: 'human_face_deploy',
2003 |               url: '/imultalarm-deploy/set-alarm/human-face',
2004 |               name: '人脸布控',
2005 |               reload: true,
2006 |               callback: {
2007 |                 method: 'imultalarmAdd',
2008 |                 argument: {
2009 |                   deployType: 'iface',
2010 |                   deploySubType: 'face_single_person',
2011 |                   pics: [copy.portraitPhoto[0].picUrl]
2012 |                 }
2013 |               }
2014 |             });
2015 |           }
2016 |         } else {
2017 |           this.$message('无有效图片，无法进入人脸布控');
2018 |         }
2019 |       } else if (copy.dataType === 300201 || copy.dataType === '300201') {
2020 |         if (copy.imsi || copy.imei) {
2021 |           if (top && top.window && top.window.goToApp) {
2022 |             top.window.goToApp({
2023 |               componentId: 'imultalarm',
2024 |               componentMenuId: 'imult_imsi_deploy',
2025 |               url: '/imultalarm-deploy/set-alarm/imsi',
2026 |               name: '电围布控',
2027 |               reload: true,
2028 |               callback: {
2029 |                 method: 'imultalarmAdd',
2030 |                 argument: {
2031 |                   deployType: 'imsi',
2032 |                   deployObject: [copy.imsi || copy.imei]
2033 |                 }
2034 |               }
2035 |             });
2036 |           }
2037 |         } else {
2038 |           this.$message('无电围号，无法进入电围布控');
2039 |         }
2040 |       }
2041 |     },
2042 |     handleFusionAddPic(copy, builtListOriginUrl) {
2043 |       console.log('handleFusionAddPic**',copy, 'builtListOriginUrl:', builtListOriginUrl);
2044 |       
2045 |       const arr = [];
2046 |       if (copy && copy.length) {
2047 |         // 单独处理三个数据都没有模型值导致isOnePerson都为true的情况
2048 |         const isOnePersonIndex = copy.filter(u => !u.isOnePerson).length;
2049 |         let onePersonInit = false;
2050 |         copy.map((item, index) => {
2051 |           const obj = {
2052 |             bkgUrl: item.bkgUrl,
2053 |             targetModelData: item.model || item.modelData,
2054 |             imageUrl: item.picUrl,
2055 |             builtListOriginUrl: item.builtListOriginUrl || builtListOriginUrl,
2056 |             rect: item.rect ? (typeof item.rect === 'string' ? JSON.parse(item.rect) : item.rect) : {},
2057 |             type: this.tranlateDataType(item.dataType),
2058 |             isOnePerson: item.isOnePerson === undefined ? true : item.isOnePerson,
2059 |             recommendFaceRect: item.recommendFaceRect ? JSON.parse(item.recommendFaceRect) : null
2060 |           };
2061 |           console.log('obj***',obj);
2062 |           
2063 |           // 从收藏夹选择图片，根据销售项类型检测
2064 |           if (item.collectType && item.sourceComponent) {
2065 |             if (this.searchConfig.modelTypes.includes(item.collectType)) {
2066 |               obj.type = item.collectType;
2067 |             } else {
2068 |               obj.type = (this.searchConfig && this.searchConfig.modelTypes) || 'face';
2069 |               delete obj.rect;
2070 |             }
2071 |           }
2072 | 
2073 |           // 车辆类型补全车牌号等参数
2074 |           if (Number(item.dataType) === 200201) {
2075 |             obj.plateNum = item.plateNo || item.plateNum;
2076 |             obj.plateColor = item.plateColor;
2077 |             obj.plateColorName = item.plateColorName;
2078 |           } else if (Number(item.dataType) === 100201) {
2079 |             // 补全人脸融合查询参数
2080 |             let { facePose = null, faceScore = {} } = item;
2081 |             if (typeof facePose === 'string') facePose = JSON.parse(facePose);
2082 |             if (typeof faceScore === 'string') faceScore = JSON.parse(faceScore);
2083 | 
2084 |             const {
2085 |               pupillaryDistance = null,
2086 |               clearityScore = null,
2087 |               grayMean = null,
2088 |               visibleScore = null,
2089 |               totalScore = null
2090 |             } = faceScore;
2091 |             facePose && (obj.facePose = facePose);
2092 |             totalScore && (obj.faceScore = totalScore);
2093 |             pupillaryDistance && (obj.pupillaryDistance = pupillaryDistance);
2094 |             clearityScore && (obj.clearityScore = clearityScore);
2095 |             grayMean && (obj.grayMean = grayMean);
2096 |             visibleScore && (obj.visibleScore = visibleScore);
2097 |           } else if (Number(item.dataType) === 100202) {
2098 |             // 补全人体融合查询参数
2099 |             const {
2100 |               defScore = null,
2101 |               headScore = null,
2102 |               lowerbodyScore = null,
2103 |               upperbodyScore = null,
2104 |               orientationScore = null
2105 |             } = item;
2106 |             if (
2107 |               defScore != null &&
2108 |               headScore != null &&
2109 |               lowerbodyScore != null &&
2110 |               upperbodyScore != null &&
2111 |               orientationScore != null
2112 |             ) {
2113 |               obj.bodyScore = {
2114 |                 defScore,
2115 |                 headScore,
2116 |                 lowerbodyScore,
2117 |                 upperbodyScore,
2118 |                 orientationScore
2119 |               };
2120 |             }
2121 |           } else if (Number(item.dataType) === 100101) {
2122 |             obj.type = 'face';
2123 |             if (
2124 |               item &&
2125 |               item.portraitPhoto &&
2126 |               item.portraitPhoto.length &&
2127 |               item.portraitPhoto[0] &&
2128 |               item.portraitPhoto[0].picUrl
2129 |             ) {
2130 |               obj.imageUrl = item.portraitPhoto[0].picUrl;
2131 |             }
2132 |           } else if (Number(item.dataType) === 100203) {
2133 |             // 补全体态视频参数
2134 |             const { cameraIndexCode, deviceName, startTime, endTime, capabilitySet } = item;
2135 |             obj.deviceInfo = {
2136 |               playMode: 'playback',
2137 |               deviceName,
2138 |               replay: true,
2139 |               capability: capabilitySet,
2140 |               strRecordParam: {
2141 |                 isSmallEagleEyeAbility: 0,
2142 |                 streamType: 0,
2143 |                 cascade: false,
2144 |                 indexCode: cameraIndexCode,
2145 |                 transmode: 1,
2146 |                 recordStyle: 0,
2147 |                 startTime: utcTimeToIsoTime(startTime),
2148 |                 endTime: utcTimeToIsoTime(endTime),
2149 |                 recordType: ''
2150 |               }
2151 |             };
2152 |           }
2153 | 
2154 |           // 根据配置项是否直接使用模型值,体态除外
2155 |           if (
2156 |             this.searchConfig &&
2157 |             this.searchConfig.pageConfig.fusion &&
2158 |             !this.searchConfig.pageConfig.fusion.isUseModelValue &&
2159 |             Number(item.dataType) !== 100203
2160 |           ) {
2161 |             delete obj.targetModelData;
2162 |           }
2163 |           if (obj.targetModelData) {
2164 |             // 有模型时直接传参
2165 |             arr.push(obj);
2166 |           } else if (obj.bkgUrl) {
2167 |             this.$G_oneKeySearch(
2168 |               obj,
2169 |               targetList => {
2170 |                 targetList.map(a => {
2171 |                   if (isOnePersonIndex === 0 && !onePersonInit) {
2172 |                     this.bus.$emit('oneKeyImgSearch', [{ ...a, isOnePerson: false }]);
2173 |                     onePersonInit = true;
2174 |                   } else {
2175 |                     this.bus.$emit('oneKeyImgSearch', [{ ...a, isOnePerson: obj.isOnePerson }]);
2176 |                   }
2177 |                 });
2178 |               },
2179 |               false
2180 |             );
2181 |           } else if (obj.imageUrl) {
2182 |             if (obj.type === 'face') {
2183 |               // 人脸类型走单人脸检测建模一体化接口
2184 |               obj.singleFace = true;
2185 |             } else {
2186 |               // 无模型值时小图建模
2187 |               obj.rect = { x: '0', width: '1', y: '0', height: '1', w: '1', h: '1', top: '0', left: '0' };
2188 |             }
2189 |             this.$G_oneKeySearch(
2190 |               obj,
2191 |               targetList => {
2192 |                 targetList.map(a => {
2193 |                   if (isOnePersonIndex === 0 && !onePersonInit) {
2194 |                     this.bus.$emit('oneKeyImgSearch', [{ ...a, isOnePerson: false }]);
2195 |                     onePersonInit = true;
2196 |                   } else {
2197 |                     this.bus.$emit('oneKeyImgSearch', [{ ...a, isOnePerson: obj.isOnePerson }]);
2198 |                   }
2199 |                 });
2200 |               },
2201 |               false
2202 |             );
2203 |           } else {
2204 |             this.$message('参数不正确,缺少图片url');
2205 |           }
2206 |         });
2207 |         if (arr && arr.length) {
2208 |           this.bus.$emit('oneKeyImgSearch', arr);
2209 |         }
2210 |       } else {
2211 |         this.$message('参数不正确,缺少图片url');
2212 |       }
2213 |     },
2214 |     // 分布式搜图
2215 |     handleDistributedImage(copy) {
2216 |       if (copy && (copy.picUrl || copy.bkgUrl)) {
2217 |         this.bus.$emit('distributedImageSearch', {
2218 |           url: copy.picUrl || copy.bkgUrl,
2219 |           type: this.tranlateDataType(copy.dataType),
2220 |           item: copy
2221 |         });
2222 |       } else {
2223 |         this.$message('参数不正确,缺少图片url');
2224 |       }
2225 |     },
2226 |     handleDistributedIdenti(obj = {}) {
2227 |       const { picUrl, bkgUrl, rect } = obj;
2228 |       if (picUrl || bkgUrl) {
2229 |         const param = {};
2230 |         if (picUrl) {
2231 |           param.imageUrl = picUrl;
2232 |           param.targetUrl = picUrl;
2233 |         } else if (bkgUrl) {
2234 |           param.imageUrl = bkgUrl;
2235 |           param.targetUrl = bkgUrl;
2236 |           param.recommendFaceRect = rect;
2237 |         }
2238 |         this.bus.$emit('distributedIdentiSearch', param);
2239 |       } else {
2240 |         this.$message('参数不正确,缺少图片url');
2241 |       }
2242 |     },
2243 |     downPic(copy) {
2244 |       if (copy.dataTypes) {
2245 |         if (copy.hitInfo && copy.hitInfo.length && copy.hitInfo[0]) {
2246 |           // 改为浏览器下载方式
2247 |           this.handleDownPic(copy.hitInfo[0]);
2248 |         }
2249 |       } else {
2250 |         this.handleDownPic(copy);
2251 |       }
2252 |     },
2253 |     handleDownPic(copy) {
2254 |       const url = [];
2255 |       if (copy && copy.portraitPhoto) {
2256 |         if (typeof copy.portraitPhoto === 'string') {
2257 |           url.push(copy.portraitPhoto);
2258 |         } else if (copy.portraitPhoto.length) {
2259 |           url.push(copy.portraitPhoto[0].picUrl);
2260 |         }
2261 |       }
2262 |       if (copy && copy.picUrl) {
2263 |         url.push(copy.picUrl);
2264 |       }
2265 |       if (copy && copy.bkgUrl) {
2266 |         url.push(copy.bkgUrl);
2267 |       }
2268 |       if (url.length) {
2269 |         // url.map(item => {
2270 |         //   // this.$G_downloadImg(item);
2271 |         //   this.$G_downloadWatermarkImg(item);
2272 |         // });
2273 |         this.$G_downloadWatermarkImg(url, 0);
2274 |       } else {
2275 |         this.$message('图片url不存在');
2276 |       }
2277 |     },
2278 |     handleImgSearchClu(copy, dataType, searchType, pageType) {
2279 |       if (copy.dataTypes) {
2280 |         if (copy.hitInfo && copy.hitInfo.length) {
2281 |           this.oneKeyImg([copy.hitInfo[0]], copy.hitInfo[0].dataType, true, dataType, searchType, pageType);
2282 |         }
2283 |       } else {
2284 |         this.oneKeyImg([copy], copy.dataType ? this.dataType : copy.dataTypes[0], true, dataType, searchType, pageType);
2285 |       }
2286 |     },
2287 |     humanArchives(copy) {
2288 |       const authMap = this.searchConfig.authMap;
2289 |       if (authMap && authMap.humanArchives) {
2290 |         if (copy.dataTypes) {
2291 |           if (copy.basicInfo && copy.basicInfo.length) {
2292 |             this.jumpHumanArchives(copy.basicInfo[0]);
2293 |           } else if (copy.hitInfo && copy.hitInfo.length) {
2294 |             this.jumpHumanArchives(copy.hitInfo[0]);
2295 |           }
2296 |         } else {
2297 |           this.jumpHumanArchives(copy);
2298 |         }
2299 |       } else if (authMap && authMap.detail) {
2300 |         let humanIdTmp = '';
2301 |         if (copy.dataTypes) {
2302 |           if (copy.basicInfo && copy.basicInfo.length) {
2303 |             if (copy.basicInfo[0] && copy.basicInfo[0].humanId) {
2304 |               humanIdTmp = copy.basicInfo[0].humanId;
2305 |             }
2306 |           } else if (copy.hitInfo && copy.hitInfo.length) {
2307 |             if (copy.hitInfo[0] && copy.hitInfo[0].humanId) {
2308 |               humanIdTmp = copy.hitInfo[0].humanId;
2309 |             }
2310 |           }
2311 |         } else if (copy.dataType && copy.humanId) {
2312 |           humanIdTmp = copy.humanId;
2313 |         }
2314 |         if (humanIdTmp) {
2315 |           const urlString = '/isearch-web/detailInfo?humanId=' + humanIdTmp;
2316 |           if (top && top.window && top.window.goToApp) {
2317 |             const jumpParame = {
2318 |               name: '人员详情',
2319 |               url: urlString,
2320 |               reload: true
2321 |             };
2322 |             top.window.goToApp(jumpParame);
2323 |           } else {
2324 |             window.open(urlString, '人员详情');
2325 |           }
2326 |         } else {
2327 |           this.$message('缺少humanId,无法跳转人员详情');
2328 |         }
2329 |       }
2330 |     },
2331 |     jumpHumanArchives(copy) {
2332 |       if (copy.dataType && copy.humanId) {
2333 |         const urlString = '/ipersondossier-web/#/person-file-detail' + '/' + copy.humanId;
2334 |         if (top && top.window && top.window.goToApp) {
2335 |           const jumpParame = {
2336 |             name: '人员档案',
2337 |             url: urlString,
2338 |             reload: true
2339 |           };
2340 |           top.window.goToApp(jumpParame);
2341 |         } else {
2342 |           window.open(urlString, '人员档案');
2343 |         }
2344 |       } else {
2345 |         this.$message('缺少humanId，无法跳转人员档案');
2346 |       }
2347 |     },
2348 |     vehicleArchives(copy, plateSelect) {
2349 |       const authMap = this.searchConfig.authMap;
2350 |       if (authMap && authMap.vehicleArchives) {
2351 |         if (copy.dataTypes) {
2352 |           if (copy.basicInfo && copy.basicInfo.length) {
2353 |             this.jumpVehicleArchives(copy.basicInfo[0]);
2354 |           } else if (copy.hitInfo && copy.hitInfo.length) {
2355 |             this.jumpVehicleArchives(copy.hitInfo[0], plateSelect);
2356 |           }
2357 |         } else {
2358 |           this.jumpVehicleArchives(copy, plateSelect);
2359 |         }
2360 |       } else if (authMap && authMap.detail) {
2361 |         let plateNo = '';
2362 |         let plateColor = '';
2363 |         if (plateSelect) {
2364 |           if (plateSelect === 'Original') {
2365 |             plateColor = copy.plateColorOriginal;
2366 |             plateNo = copy.plateNoOriginal;
2367 |           } else if (plateSelect === 'Twice') {
2368 |             plateColor = copy.plateColorTwice;
2369 |             plateNo = copy.plateNoTwice;
2370 |           }
2371 |         } else {
2372 |           plateNo = copy.plateNo;
2373 |           plateColor = copy.plateColor;
2374 |         }
2375 |         if (plateNo) {
2376 |           const urlString =
2377 |             '/isearch-web/detailInfo' + '?' + 'plateNo' + '=' + plateNo + '&' + 'plateColor' + '=' + plateColor;
2378 |           if (top && top.window && top.window.goToApp) {
2379 |             const jumpParame = {
2380 |               name: '车辆详情',
2381 |               url: urlString,
2382 |               reload: true
2383 |             };
2384 |             top.window.goToApp(jumpParame);
2385 |           } else {
2386 |             window.open(urlString, '车辆详情');
2387 |           }
2388 |         } else {
2389 |           this.$message('缺少车牌号码，无法跳转车辆详情');
2390 |         }
2391 |       }
2392 |     },
2393 |     jumpVehicleArchives(copy, plateSelect) {
2394 |       let plateNo = '';
2395 |       let plateColor = '';
2396 |       if (plateSelect) {
2397 |         if (plateSelect === 'Original') {
2398 |           plateColor = copy.plateColorOriginal;
2399 |           plateNo = copy.plateNoOriginal;
2400 |         } else if (plateSelect === 'Twice') {
2401 |           plateColor = copy.plateColorTwice;
2402 |           plateNo = copy.plateNoTwice;
2403 |         }
2404 |       } else {
2405 |         plateNo = copy.plateNo;
2406 |         plateColor = copy.plateColor;
2407 |       }
2408 |       if (plateNo) {
2409 |         const urlString =
2410 |           '/ivehicledossier-web/view/detail.do' +
2411 |           '?' +
2412 |           'plateNo' +
2413 |           '=' +
2414 |           plateNo +
2415 |           '&' +
2416 |           'plateColor' +
2417 |           '=' +
2418 |           plateColor;
2419 |         if (top && top.window && top.window.goToApp) {
2420 |           const jumpParame = {
2421 |             name: '车辆档案',
2422 |             url: urlString,
2423 |             reload: true
2424 |           };
2425 |           top.window.goToApp(jumpParame);
2426 |         } else {
2427 |           window.open(urlString, '车辆档案');
2428 |         }
2429 |       } else {
2430 |         this.$message('缺少车牌号码，无法跳转车辆档案');
2431 |       }
2432 |     },
2433 |     handlePeriphery(val) {
2434 |       // 周边点位
2435 |       this.bus.$emit('switchPanels', [{ name: 'result', open: false }]);
2436 |       this.bus.$emit('surroundQuery', val);
2437 |     },
2438 |     /**
2439 |      * 加入收藏
2440 |      * @param {*} list：数据列表
2441 |      * @param {*} sourceComponent 来源组件id
2442 |      * @param {*} isShowSecondPlateNumber 是否展示二次分析车牌
2443 |      *
2444 |      */
2445 |     addToFavorite({ list = [], sourceComponent = 'bsearch', isShowSecondPlateNumber = false }) {
2446 |       if (!list.length) return;
2447 |       const param = {
2448 |         type: 'ifavorite_5',
2449 |         list,
2450 |         sourceComponent,
2451 |         isShowSecondPlateNumber
2452 |       };
2453 |       // 默认收藏类型为5，有名单数据时为3
2454 |       const facelibData = list.filter(item => !item.rowKey);
2455 |       if (facelibData.length) param.type = 'ifavorite_3';
2456 | 
2457 |       isearchuiUtils.addFavorite(param);
2458 |     },
2459 |     // 加入轨迹
2460 |     trackAddDatas(val) {
2461 |       this.bus.$emit('trackAddDatas', val);
2462 |     },
2463 |     // 处理车牌号码
2464 |     handlePlateNo(val) {
2465 |       if (val) {
2466 |         if (this.invalidPlate.indexOf(val) !== -1) {
2467 |           return '未知车牌';
2468 |         } else {
2469 |           return val;
2470 |         }
2471 |       } else {
2472 |         return '未知车牌';
2473 |       }
2474 |     },
2475 |     // 处理车牌颜色
2476 |     handlePlateColors(val) {
2477 |       let str = '';
2478 |       switch (val) {
2479 |         case 'newEnergyGreen':
2480 |           str = 'newgreen';
2481 |           break;
2482 |         case 'newEnergyYellowGreen':
2483 |           str = 'yellowgreen';
2484 |           break;
2485 |         case 'civilAviationGreen':
2486 |           str = 'green';
2487 |           break;
2488 |         case 'civilAviationBlack':
2489 |           str = 'black';
2490 |           break;
2491 |         default:
2492 |           str = val;
2493 |           break;
2494 |       }
2495 |       return str;
2496 |     },
2497 |     // 跳转专项菜单检测建模
2498 |     handleImageZX(param, type = '') {
2499 |       const { bkgUrl, picUrl } = param;
2500 |       if (!bkgUrl && !picUrl) return this.$message('图片url不存在');
2501 | 
2502 |       this.$G_oneKeySearch(
2503 |         {
2504 |           bkgUrl: bkgUrl || picUrl,
2505 |           type: type || this.searchConfig.modelTypes || '',
2506 |           typeSingle: false
2507 |         },
2508 |         targetList => {
2509 |           if (type) {
2510 |             this.handleOpenImageZXPage(targetList, type);
2511 |           } else {
2512 |             this.handleOpenImagePage(targetList);
2513 |           }
2514 |         },
2515 |         true
2516 |       );
2517 |     },
2518 |     // 图片搜索（属性搜索及专项菜单的继续查询按钮）
2519 |     handleOpenImagePage(propVal) {
2520 |       const val = Array.isArray(propVal) ? propVal : [propVal];
2521 |       if (!propVal || !val.length || !this.searchConfig.authMap) return;
2522 |       const {
2523 |         fusion,
2524 |         image,
2525 |         oneKeySearch,
2526 |         imageFace,
2527 |         oneKeySearchFace,
2528 |         imageBody,
2529 |         oneKeySearchBody,
2530 |         imageVehicle,
2531 |         oneKeySearchVehicle,
2532 |         imageNonvehicle,
2533 |         oneKeySearchNonvehicle
2534 |       } = this.searchConfig.authMap;
2535 |       const { imageJumpFusionPage, imageSpecialJumpFusionPage } =
2536 |         this.searchConfig.pageConfig && this.searchConfig.pageConfig.common;
2537 |       let url = '';
2538 |       let title = '';
2539 |       if (oneKeySearch || fusion || image) {
2540 |         url = '/isearch-web/image';
2541 |         title = '图片搜索';
2542 |         if ((fusion && imageJumpFusionPage) || (!oneKeySearch && !image)) {
2543 |           url = '/bsearch-web/fusion';
2544 |           title = '智图研判';
2545 |         }
2546 |       } else {
2547 |         if ((imageFace || oneKeySearchFace) && val[0].type === 'face') {
2548 |           url = '/isearch-web/image/face';
2549 |           title = '图片搜脸';
2550 |         } else if ((imageBody || oneKeySearchBody) && val[0].type === 'body') {
2551 |           url = '/isearch-web/image/body';
2552 |           title = '图片搜人';
2553 |         } else if ((imageVehicle || oneKeySearchVehicle) && val[0].type === 'vehicle') {
2554 |           url = '/isearch-web/image/vehicle';
2555 |           title = '图片搜车';
2556 |         } else if ((imageNonvehicle || oneKeySearchNonvehicle) && val[0].type === 'nonvehicle') {
2557 |           url = '/isearch-web/image/nonvehicle';
2558 |           title = '非机动车搜图';
2559 |         }
2560 |         if (imageSpecialJumpFusionPage) {
2561 |           url = '/bsearch-web/fusion';
2562 |           title = '智图研判';
2563 |         }
2564 |       }
2565 |       if (!url) return this.$message({ type: 'warning', message: '找不到应用，请检查平台是否有相关组件' });
2566 | 
2567 |       this.$G_JumpPage(
2568 |         url,
2569 |         {
2570 |           targetList: val
2571 |         },
2572 |         title,
2573 |         'search',
2574 |         false
2575 |       );
2576 |     },
2577 |     // 专项菜单图片搜X（属性搜索及专项菜单的大图 图片搜X按钮）
2578 |     handleOpenImageZXPage(val, pageType) {
2579 |       if (!val || !this.searchConfig.authMap) return;
2580 | 
2581 |       const {
2582 |         imageFace,
2583 |         oneKeySearchFace,
2584 |         imageBody,
2585 |         oneKeySearchBody,
2586 |         imageVehicle,
2587 |         oneKeySearchVehicle,
2588 |         imageNonvehicle,
2589 |         oneKeySearchNonvehicle
2590 |       } = this.searchConfig.authMap;
2591 |       const { imageSpecialJumpFusionPage } = this.searchConfig.pageConfig && this.searchConfig.pageConfig.common;
2592 |       let url = '';
2593 |       let title = '';
2594 |       if ((imageFace || oneKeySearchFace) && pageType === 'face') {
2595 |         url = '/isearch-web/image/face';
2596 |         title = '图片搜脸';
2597 |       } else if ((imageBody || oneKeySearchBody) && pageType === 'body') {
2598 |         url = '/isearch-web/image/body';
2599 |         title = '图片搜人';
2600 |       } else if ((imageVehicle || oneKeySearchVehicle) && pageType === 'vehicle') {
2601 |         url = '/isearch-web/image/vehicle';
2602 |         title = '图片搜车';
2603 |       } else if ((imageNonvehicle || oneKeySearchNonvehicle) && pageType === 'nonvehicle') {
2604 |         url = '/isearch-web/image/nonvehicle';
2605 |         title = '非机动车搜图';
2606 |       }
2607 |       if (imageSpecialJumpFusionPage) {
2608 |         url = '/bsearch-web/fusion';
2609 |         title = '智图研判';
2610 |       }
2611 |       if (!url) return this.$message({ type: 'warning', message: '找不到应用，请检查平台是否有相关组件' });
2612 | 
2613 |       this.$G_JumpPage(
2614 |         url,
2615 |         {
2616 |           targetList: Array.isArray(val) ? val : [val]
2617 |         },
2618 |         title,
2619 |         'search',
2620 |         false
2621 |       );
2622 |     }
2623 |   }
2624 | };
</content>
</file>
<file><path>bsearch-frontend/search-center/src/pages/fusionResult/fusionResult.vue</path>
<content lines="1-3481">
   1 | <template>
   2 |   <!-- 融合搜索页面 -->
   3 |   <h-layout class="fusion-search hi-map">
   4 |     <!-- 融合搜索面板 -->
   5 |     <div
   6 |       v-show="!trackTaskShow && !showTaskPanel && !fullScreenMap"
   7 |       class="fusion-search-wrapper"
   8 |       :class="[
   9 |         showSearchResult || showColdLoading ? 'full' : '',
  10 |         collapse === 'hide' ? 'hide' : collapse === 'show' ? 'show' : '',
  11 |         showSearchResult && (isTrackStatus || middleResultStatus)
  12 |           ? 'track-status'
  13 |           : showSearchResult && collapse === 'hide'
  14 |           ? 'fusion-search-wrapper-full'
  15 |           : '',
  16 |         minimizeResult ? 'hide-result' : '',
  17 |         isXxwTab ? 'xxw' : ''
  18 |       ]"
  19 |     >
  20 |       <!-- 左侧切换按钮 -->
  21 |       <div class="fusion-search-switch_btns">
  22 |         <div class="fs-switch_btns_add" title="新开条件面板" @click="addTarget">
  23 |           <i class="h-icon-add" />
  24 |           <div class="add_title">新增查询</div>
  25 |         </div>
  26 |         <div class="img-conditions-container">
  27 |           <div
  28 |             v-for="(target, index) in currentTargets"
  29 |             :key="index"
  30 |             :class="['fs-switch_btns_content', 'target', index === currentTargetIndex ? 'active' : '']"
  31 |           >
  32 |             <div class="img-container" @click="changeTarget(index)">
  33 |               <iu-thumbnail
  34 |                 v-if="cauImgUrl(index)"
  35 |                 class="thumbnail"
  36 |                 :img-url="cauImgUrl(index)"
  37 |                 mode="contain"
  38 |                 bg="transparent"
  39 |                 :rect="cauImgRect(index)"
  40 |                 :rect-props="{
  41 |                   top: 'y',
  42 |                   left: 'x'
  43 |                 }"
  44 |                 :custom-origin-error="true"
  45 |                 :err-image="errImage"
  46 |                 :wrapper-size="[48, 48]"
  47 |                 original
  48 |               />
  49 |               <div v-else class="img-empty-pic-container">
  50 |                 <img
  51 |                   :src="noImage"
  52 |                   class="img-empty-pic"
  53 |                   :class="index === currentTargetIndex ? 'active' : ''"
  54 |                   @error="imgLoadErr"
  55 |                 />
  56 |               </div>
  57 |               <div class="img-active" :class="index === currentTargetIndex ? 'active' : ''"></div>
  58 |             </div>
  59 |             <i v-if="currentTargets.length > 1" title="删除面板" class="h-icon-close" @click="deleteTarget(index)" />
  60 |             <div
  61 |               v-if="cauImgUrl(index) && target.img.uploadImgType && target.img.uploadImgType.split(',').length > 1"
  62 |               class="multi-target-number"
  63 |             >
  64 |               <span class="number">{{ target.img.uploadImgType.split(',').length }}</span>
  65 |             </div>
  66 |           </div>
  67 |         </div>
  68 |         <!-- 工具箱 -->
  69 |         <el-dropdown
  70 |           v-if="toolList && toolList.length && !onlyBuilt"
  71 |           trigger="hover"
  72 |           placement="right"
  73 |           class="tool-box-drop"
  74 |           @command="handleToolAction"
  75 |         >
  76 |           <!-- 工具箱按钮 -->
  77 |           <div class="tool-box-wrap">
  78 |             <img class="pic" :src="toolBoxImage" />
  79 |             <span class="text">工具</span>
  80 |           </div>
  81 |           <!-- 工具箱列表 -->
  82 |           <el-dropdown-menu slot="dropdown" class="tool-box-dropdown">
  83 |             <el-dropdown-item v-for="item in toolList" :key="item.key" :icon="item.icon" :command="item">
  84 |               <el-button :key="item.key" :icon="item.icon">
  85 |                 {{ item.name }}
  86 |               </el-button>
  87 |             </el-dropdown-item>
  88 |           </el-dropdown-menu>
  89 |         </el-dropdown>
  90 |       </div>
  91 |       <!-- 左侧条件面板 -->
  92 |       <div class="fusion-search-condition">
  93 |         <!-- 视图属性条件 -->
  94 |         <div class="fus-condition-panel">
  95 |           <div class="fus-condition-panel_tabs">
  96 |             <el-button-group>
  97 |               <el-button
  98 |                 v-for="item in conditionTabs"
  99 |                 :key="item.key"
 100 |                 :type="
 101 |                   currentTargetImgData.isAttrallSearch && item.key === 'image'
 102 |                     ? 'primary'
 103 |                     : currentTargetActiveName === item.key && !currentTargetImgData.isAttrallSearch
 104 |                     ? 'primary'
 105 |                     : ''
 106 |                 "
 107 |                 @click="changeActiveTabName(item.key)"
 108 |               >
 109 |                 {{ item.label }}
 110 |               </el-button>
 111 |             </el-button-group>
 112 |             <!-- 视频结构化点位 -->
 113 |             <div
 114 |               v-if="searchConfig && searchConfig.authMap && searchConfig.authMap.videoSearch && videoSelectArea"
 115 |               class="fus-condition-panel_tabs_videoPoint"
 116 |             >
 117 |               <uplus-icon name="addPlus" fill="rgb(18, 96, 230)" size="24px"></uplus-icon>
 118 |               <span class="text" @click="jumpToVideoSearch">新建视频解析</span>
 119 |             </div>
 120 |           </div>
 121 |           <el-scrollbar wrap-class="fus-attr-scrollbar-wrap">
 122 |             <div class="fus-condition-panel_body">
 123 |               <img-condition-panel
 124 |                 v-show="
 125 |                   currentTargetActiveName === 'image' ||
 126 |                     (currentTargetImgData.isAttrallSearch && currentTargetActiveName === 'feature')
 127 |                 "
 128 |                 ref="imgConditionPanel"
 129 |                 key="imgConditionPanel"
 130 |                 :img-data="currentTargetImgData"
 131 |                 :strategy-analysis="currentTargetImgData.strategyAnalysis"
 132 |                 :upload-img-type="currentTargetImgData.uploadImgType"
 133 |                 :plate-num-search="currentTargetImgData.plateNumSearch"
 134 |                 :current-targets="currentTargets"
 135 |                 :track-task-show="showTaskPanel || trackTaskShow"
 136 |                 @delImg="delImg"
 137 |                 @reChooseAnalyseResult="openRecognitionDialog"
 138 |                 @changeStrategySwitch="changeStrategySwitch"
 139 |                 @handleStrategyAnalyse="handleStrategyAnalyse"
 140 |                 @openSelectedPanel="showSelectedPanel = true"
 141 |                 @deleteAnalyseResult="deleteAnalyseResult"
 142 |               />
 143 |               <attr-condition-panel
 144 |                 v-show="currentTargetActiveName === 'feature' && !currentTargetImgData.isAttrallSearch"
 145 |                 key="attrConditionPanel"
 146 |                 :close-tag-show="closeTagShow"
 147 |                 :attr-data="currentTargetAttrData"
 148 |                 :url-params="urlParams"
 149 |                 :jump-url-type="jumpUrlType"
 150 |                 :is-reset="isReset"
 151 |                 :data-type-list="dataTypeList"
 152 |                 :add-target-index="addTargetIndex"
 153 |                 @handleHasError="handleHasError"
 154 |                 @changeDisabled="changeDisabled"
 155 |                 @handleAttrSearch="handleAttrSearch"
 156 |                 @keyupSearch="keyupSearch"
 157 |                 @openSelectedPanel="showSelectedPanel = true"
 158 |               />
 159 |             </div>
 160 |           </el-scrollbar>
 161 |         </div>
 162 |         <!-- 查询重置按钮 -->
 163 |         <div class="fus-submit-buttons">
 164 |           <el-button type="primary" :disabled="disabledAllAttrSearch" @click="handleSearch">查询</el-button>
 165 |           <el-button @click="handleReset">重置</el-button>
 166 |         </div>
 167 |       </div>
 168 |       <!-- 融合搜索面板收起按钮 -->
 169 |       <div v-show="!showCoolList" class="fusion-search-wrapper_collapse" @click="collapseConditionPanel">
 170 |         <i class="collapse_top" />
 171 |         <span class="collapse_middle">
 172 |           <uplus-icon
 173 |             v-if="!collapse || collapse === 'show'"
 174 |             name="shuangjiaozuo"
 175 |             size="24px"
 176 |             fill="#fff"
 177 |             fill-opacity="1"
 178 |           ></uplus-icon>
 179 |           <uplus-icon v-else name="shuangjiaoyou" size="24px" fill="#fff" fill-opacity="1"></uplus-icon>
 180 |         </span>
 181 |         <i class="collapse_footer" />
 182 |       </div>
 183 |       <!-- 已选点位面板 -->
 184 |       <div v-if="showSelectedPanel" class="fusion-selected-panel-wrapper">
 185 |         <selectedPanel @closePanel="closeSelectedPanel" />
 186 |       </div>
 187 |       <!-- 右侧结果面板 -->
 188 |       <div
 189 |         v-if="showSearchResult"
 190 |         v-show="!minimizeResult"
 191 |         :class="[
 192 |           showSearchResult ? 'full' : '',
 193 |           isDisabled ? 'fusion-search-result-disabled' : '',
 194 |           'fusion-search-result'
 195 |         ]"
 196 |       >
 197 |         <fusion-result-panel
 198 |           ref="fusionResultPanel"
 199 |           :img-result="
 200 |             currentTargetActiveName === 'image'
 201 |               ? !currentTargetImgData.multiImgSearchFlag
 202 |                 ? currentTargetImgData.result || {}
 203 |                 : currentTargetImgData.multiImgResult[currentTargetImgData.multiImgType].result || {}
 204 |               : {}
 205 |           "
 206 |           :multi-img-search-flag="currentTargetImgData.multiImgSearchFlag"
 207 |           :attr-condition="currentTargetActiveName === 'feature' && attrCondition ? attrCondition : {}"
 208 |           :is-etc="
 209 |             currentTargetActiveName === 'feature' &&
 210 |             currentTargetAttrData[currentTargetType] &&
 211 |             currentTargetAttrData[currentTargetType].isEtc
 212 |               ? currentTargetAttrData[currentTargetType].isEtc
 213 |               : false
 214 |           "
 215 |           :attr-result="
 216 |             currentTargetActiveName === 'feature' &&
 217 |             currentTargetAttrData[currentTargetType] &&
 218 |             currentTargetAttrData[currentTargetType].result
 219 |               ? currentTargetAttrData[currentTargetType].result
 220 |               : {}
 221 |           "
 222 |           :extra-result="
 223 |             currentTargetActiveName === 'feature' &&
 224 |             currentTargetAttrData[currentTargetType] &&
 225 |             currentTargetAttrData[currentTargetType].extraResult
 226 |               ? currentTargetAttrData[currentTargetType].extraResult
 227 |               : {}
 228 |           "
 229 |           :human-subtype="
 230 |             currentTargetActiveName === 'feature' &&
 231 |             currentTargetAttrData[currentTargetType] &&
 232 |             currentTargetAttrData[currentTargetType].subType
 233 |               ? currentTargetAttrData[currentTargetType].subType
 234 |               : '100201'
 235 |           "
 236 |           :group-mode="currentTargetImgData.groupMode || 'none'"
 237 |           :attr-group-mode="
 238 |             currentTargetAttrData[currentTargetType] && currentTargetAttrData[currentTargetType].groupMode
 239 |               ? currentTargetAttrData[currentTargetType].groupMode
 240 |               : 'none'
 241 |           "
 242 |           :sort-mode="handleSort"
 243 |           :hit-info="hitInfoResult"
 244 |           :display-mode="handleDisplayMode"
 245 |           :type="fusionResultPanelType"
 246 |           :is-attrall-search="currentTargetImgData.isAttrallSearch"
 247 |           :search-mode="currentTargetImgData.searchMode"
 248 |           :progress="currentTargetImgData.progress"
 249 |           :progress-id="currentTargetImgData.searchColdId"
 250 |           :upload-img="currentTargetImgData.uploadImg || []"
 251 |           :is-cold="currentTargetImgData.isCold"
 252 |           :search-type="currentTargetActiveName"
 253 |           :page-type="pageType"
 254 |           :show-right-panel="currentTargetImgData.showRightPanel"
 255 |           :show-attr-right-panel="handleShowAttrRightPanel()"
 256 |           :need-analysis="needAnalysis"
 257 |           :show-no-recognition="currentTargetImgData.showNoRecognition && currentTargetActiveName === 'image'"
 258 |           :has-recognition-res="currentTargetImgData.hasRecognitionRes"
 259 |           :recognition-title="currentTargetImgData.recognitionTitle"
 260 |           :analysis-title="analysisTitle"
 261 |           :analysis-result="analysisResult"
 262 |           :current-target-type="currentTargetType"
 263 |           :multi-img-types="currentTargetImgData.multiImgTypes"
 264 |           :condition-config="conditionConfig"
 265 |           :origin-img-type="(currentTargetImgData.type && currentTargetImgData.type.split(',')) || []"
 266 |           :export-conditions="exportConditions"
 267 |           :export-conditions-array="exportConditionsArray"
 268 |           :snap-mode-type="handleSnapModeType"
 269 |           :current-target-img-data-search-params="
 270 |             !currentTargetImgData.multiImgSearchFlag
 271 |               ? currentTargetImgData.searchParams
 272 |               : (currentTargetImgData.multiImgResult &&
 273 |                   currentTargetImgData.multiImgType &&
 274 |                   currentTargetImgData.multiImgResult[currentTargetImgData.multiImgType] &&
 275 |                   currentTargetImgData.multiImgResult[currentTargetImgData.multiImgType].searchParams) ||
 276 |                 {}
 277 |           "
 278 |           :upload-img-type="currentTargetImgData.uploadImgType"
 279 |           :show-track-panel="showTrackPanel"
 280 |           :show-cross-map="showCrossMap"
 281 |           :secondary-page="handleShowsecondaryPage"
 282 |           :plate-num-search="currentTargetImgData.plateNumSearch || false"
 283 |           :person-etc-flag="
 284 |             currentTargetImgData.multiImgResult &&
 285 |             currentTargetImgData.multiImgResult.collect &&
 286 |             currentTargetImgData.multiImgResult.collect.otherResult
 287 |               ? true
 288 |               : false
 289 |           "
 290 |           :person-identity-arr="currentTargetImgData.personIdentityArr || []"
 291 |           :things-imgs="currentTargetImgData.thingsImgs || []"
 292 |           @changeMode="changeMode"
 293 |           @changeClustMode="changeClustMode"
 294 |           @changePage="changePage"
 295 |           @changeSort="changeSort"
 296 |           @filterSearch="filterSearch"
 297 |           @changeAttrGroupData="changeAttrGroup"
 298 |           @changeAllAttrGroupData="changeAllAttrGroupData"
 299 |           @changeModeInSnap="changeModeInSnap"
 300 |           @openRecognitionDialog="openRecognitionDialog"
 301 |           @handleImgSearch="handleImgSearch"
 302 |           @handleStrategyAnalysis="handleStrategyAnalysis"
 303 |           @changeTab="changeTab"
 304 |           @changeActiveTab="changeActiveTab"
 305 |           @clickSecondaryPage="clickSecondaryPage"
 306 |           @changeRelationShipMode="changeRelationShipMode"
 307 |           @imgSearchTrack="imgSearchTrack"
 308 |           @holoSearchTrack="holoSearchTrack"
 309 |           @vehicleSearchTrack="vehicleSearchTrack"
 310 |           @featureSearchTrack="featureSearchTrack"
 311 |           @vehicleClusterTrack="vehicleClusterTrack"
 312 |           @switchRightPanel="val => handleSwitchRightPanel(val)"
 313 |           @currentTargetSubType="handleCurrentTargetSubType"
 314 |           @changeMapTrack="changeMapTrack"
 315 |           @intoTrackStatus="intoTrackStatus"
 316 |           @exitTrackStatus="exitTrackStatus"
 317 |           @minimizeResult="minimizeResult = true"
 318 |           @changeSortMode="changeSortMode"
 319 |           @personEtcInfoCollect="personEtcInfoCollect"
 320 |           @isSecondaryPage="isSecondaryPage"
 321 |           @changePlateNumSearch="changePlateNumSearch"
 322 |           @changePersonEtcData="changePersonEtcData"
 323 |           @changePersonIdentity="changePersonIdentity"
 324 |           @changeSnapModeTypeDefault="changeSnapModeTypeDefault"
 325 |         />
 326 |       </div>
 327 |       <!-- 结果面板最小化 -->
 328 |       <div v-if="minimizeResult && showSearchResult" class="sl-FResult-minimize" @click="handleMiniSize">
 329 |         <span>查询结果</span>
 330 |         <i class="h-icon-windows_maximum btn" />
 331 |       </div>
 332 |       <!-- 冷数据查询中缺省-查询无结果不展示这里 -->
 333 |       <default-page
 334 |         v-if="currentTargetImgData.isCold && showColdLoading && !currentTargetImgData.searchColdId"
 335 |         class="fusion-search-result full"
 336 |         :this-data="currentTargetImgData"
 337 |         @closeColdPanal="notWaitColdSearching"
 338 |       />
 339 |     </div>
 340 |     <div v-if="fullScreenMap" class="fusion-full-screen-back" @click="closeFullScreen">
 341 |       <uplus-icon name="leftAngle" fill="rgba(0, 0, 0, 0.7)" :opacity="1" size="24px"></uplus-icon>
 342 |       <span>返回</span>
 343 |     </div>
 344 |     <!-- 全屏状态下的定位中间态面板 -->
 345 |     <div v-if="fullScreenMap && showFullScreenSelected" class="fusion-full-screen-selected">
 346 |       <selectedPanel
 347 |         is-full
 348 |         :data="fullScreenSelectedPoint"
 349 |         @closePanel="closeFullScreenPanel"
 350 |         @addToSelected="closeFullScreen(true)"
 351 |       />
 352 |     </div>
 353 |     <div v-if="fullScreenMap" class="fusion-full-screen-button">
 354 |       <uplus-icon
 355 |         name="dingweidizhiweizhiditu"
 356 |         fill="rgba(0, 0, 0, 0.7)"
 357 |         :opacity="1"
 358 |         :size="24"
 359 |         @click="setFullScreenPoint"
 360 |       ></uplus-icon>
 361 |       <uplus-icon
 362 |         name="quxiaoquanpingchuangkousuoxiao"
 363 |         fill="rgb(255, 255, 255)"
 364 |         :opacity="1"
 365 |         :size="24"
 366 |         @click="closeFullScreen(true)"
 367 |       ></uplus-icon>
 368 |     </div>
 369 |     <!-- 左侧追踪条件面板 -->
 370 |     <div v-show="trackTaskShow" class="fusion-search-track">
 371 |       <targetTrackPanel
 372 |         ref="targetTrackPanelRef"
 373 |         :track-task-show.sync="trackTaskShow"
 374 |         :img-data="currentTargetImgData"
 375 |         :show-task-panel.sync="showTaskPanel"
 376 |         :camera-code-list="getPoint().cameraIndexCodes"
 377 |         :org-index-codes="getPoint().orgIndexCodes"
 378 |         :track-panel-title="trackPanelTitle"
 379 |         :collection-track-data="collectionTrackData"
 380 |         :chosed-card-data="chosedCardData"
 381 |         :current-targets="currentTargets"
 382 |         :current-target-index="currentTargetIndex"
 383 |         :show-selected-panel="showSelectedPanel"
 384 |         :save-track="saveTrack"
 385 |         :show-collect-panel.sync="showCollectPanel"
 386 |         @openSelectedPanel="showSelectedPanel = true"
 387 |         @closeSelectedPanel="closeSelectedPanel"
 388 |         @addTarget="addTarget"
 389 |         @deleteTarget="deleteTarget"
 390 |         @handleReset="handleReset"
 391 |         @saveImage="saveImage"
 392 |         @queryTaskList="queryTaskList"
 393 |       ></targetTrackPanel>
 394 |       <!-- 已选点位面板 -->
 395 |       <div v-if="showSelectedPanel" class="fusion-selected-panel-wrapper">
 396 |         <selectedPanel :track-task-show="trackTaskShow" @closePanel="closeSelectedPanel" />
 397 |       </div>
 398 |     </div>
 399 |     <!-- 追踪任务展示面板 -->
 400 |     <div v-show="showTaskPanel" class="fusion-search-track">
 401 |       <trackTaskPanel
 402 |         ref="trackTaskPanelRef"
 403 |         :track-task-show.sync="showTaskPanel"
 404 |         @updateTask="updateTask"
 405 |         @openNewTask="openNewTask"
 406 |         @deleteTask="deleteTask"
 407 |       ></trackTaskPanel>
 408 |     </div>
 409 |     <!-- 地图底图 -->
 410 |     <map-module-old
 411 |       v-if="compatibleConfig && compatibleConfig.pviaVersion === '130'"
 412 |       :show-map-search="showMapSearch"
 413 |       :track-task-show="trackTaskShow"
 414 |       @openSelectedPanel="showSelectedPanel = true"
 415 |     ></map-module-old>
 416 |     <map-module
 417 |       v-else
 418 |       :open-map-track="openMapTrack"
 419 |       :track-task-show="trackTaskShow"
 420 |       :show-map-search="showMapSearch"
 421 |       @openSelectedPanel="showSelectedPanel = true"
 422 |     ></map-module>
 423 |     <!-- 温数据任务列表 -->
 424 |     <cold-data-btn
 425 |       ref="coldListPanel"
 426 |       class="f-cold-wrap"
 427 |       :style="{ visibility: hideColdList ? 'hidden' : 'visible' }"
 428 |       :show-task-btn="false"
 429 |       :panel-fixto="'left'"
 430 |       :search-source="'bsearch'"
 431 |       :show-active-state="true"
 432 |       :show-img-num="true"
 433 |       :page-type-route="pageTypeRoute"
 434 |       :search-id="currentTargetImgData.searchId"
 435 |       @showTaskResult="showTaskResult"
 436 |       @closeColdTask="deleteColdTask"
 437 |       @closePanel="closeTaskList"
 438 |       @deleteIsShown="deleteIsShown"
 439 |     />
 440 |     <!-- 和冷数据列表共存的蒙层 -->
 441 |     <div v-if="showCoolListAlone" class="mask-with-coldlist" @click="closeTaskList"></div>
 442 |     <!-- 图片全图拖拽 -->
 443 |     <upload-drag
 444 |       v-if="!onlyBuilt"
 445 |       :type="uploadDragType"
 446 |       :limit-data="uploadDragLimit"
 447 |       :show-fusion="true"
 448 |       @on-drag="onDrag"
 449 |     />
 450 |     <!-- 智能识别弹框 -->
 451 |     <recognition-dialog
 452 |       ref="recogDialog"
 453 |       :recognition-result.sync="recognitionResult"
 454 |       :type="currentTargetImgData.type"
 455 |       :dialog-visible.sync="dialogVisible"
 456 |       :img-data="currentTargetImgData"
 457 |       :upload-img-type="currentTargetImgData.uploadImgType"
 458 |       :select-points="selectPoints"
 459 |       :select-time="selectTime"
 460 |       :min-similar="minSimilar"
 461 |       :back-page-no="backPageNo"
 462 |       @closeDialog="closeDialog"
 463 |       @changeStrategyAnalysis="changeStrategyAnalysis"
 464 |       @handleCurrentChange="handleCurrentChange"
 465 |     ></recognition-dialog>
 466 |     <!-- 视频智能解析 -->
 467 |     <video-select
 468 |       v-if="showVideoSelect"
 469 |       id="videoSelect"
 470 |       class="sl-FResult-select_video"
 471 |       :show.sync="showVideoSelect"
 472 |       @openSelectedPanel="showSelectedPanel = true"
 473 |     />
 474 |     <!-- 轨迹面板 -->
 475 |     <div
 476 |       v-show="!showTrackPanel && (trackNum || trackBasic) && !fullScreenMap"
 477 |       class="sl-FResult-track_btn"
 478 |       @click="hideTrackPanel"
 479 |     >
 480 |       <img :src="require('@/assets/images/png/track_icon.png')" />
 481 |       <p>轨迹详情</p>
 482 |       <p class="track-num">{{ trackNum }}</p>
 483 |     </div>
 484 |     <track-panel
 485 |       v-show="!fullScreenMap"
 486 |       ref="linshiTrack"
 487 |       class="sl-FResult-track_panel"
 488 |       :class="{ show: showTrackPanel }"
 489 |       :show.sync="showTrackPanel"
 490 |       :track-task-show="trackTaskShow"
 491 |       :show-condition-panel="collapse === 'open'"
 492 |       :show-search-result="showSearchResult"
 493 |       :hide-indoor-track="showSelectedPanel"
 494 |       :show-task-panel="showTaskPanel || trackTaskShow"
 495 |     />
 496 |     <!-- 提示 -->
 497 |     <div v-show="showTips" class="sl-FResult-condition_tips">
 498 |       <p class="tip">
 499 |         <uplus-icon name="xinxixiao" size="24" />
 500 |         拉出条件面板可继续查询
 501 |       </p>
 502 |     </div>
 503 |     <!-- 地图轨迹 -->
 504 |     <map-track-module v-if="openMapTrack" :is-third="trackData.isThird" />
 505 |     <!-- 线索库面板（线索库仅在融合菜单下可用） -->
 506 |     <div
 507 |       v-show="
 508 |         !showCollectPanel &&
 509 |           hasAddCollect &&
 510 |           hasXshare &&
 511 |           compatibleConfig &&
 512 |           (compatibleConfig.xshareVersion === '230' || compatibleConfig.xshareVersion === '130') &&
 513 |           !fullScreenMap &&
 514 |           !pageTypeRoute
 515 |       "
 516 |       class="sl-FResult-track_btn first"
 517 |       :class="{ 'large-margin': trackNum || trackBasic }"
 518 |       @click="showCollectPanel = true"
 519 |     >
 520 |       <img :src="collectEntrance" />
 521 |       <p class="btn-text">线索库</p>
 522 |     </div>
 523 |     <!-- 线索库面板打开的遮罩层 -->
 524 |     <div
 525 |       v-if="showCollectPanelCover"
 526 |       class="sl-FResult-panel_wrapper"
 527 |       :class="{ show: showCollectPanel }"
 528 |       @click="closeCollectPanel"
 529 |     ></div>
 530 |     <collect-panel
 531 |       v-show="!fullScreenMap"
 532 |       ref="collectPanelRef"
 533 |       :hikcc_cover="collectNotCover ? '' : 'opaque'"
 534 |       :class="{
 535 |         'sl-FResult-track_panel_collect': showCollectPanelCover,
 536 |         show: showCollectPanelCover && showCollectPanel,
 537 |         'sl-FResult-track_panel_collect_margin': !showCollectPanelCover,
 538 |         show_margin: !showCollectPanelCover && showCollectPanel
 539 |       }"
 540 |       :show.sync="showCollectPanel"
 541 |       :task-flag.sync="taskFlag"
 542 |       :current-task-id.sync="currentTaskId"
 543 |       :show-task-panel="showTaskPanel"
 544 |       :show-condition-panel="collapse === 'open'"
 545 |       :show-search-result="showSearchResult"
 546 |       :show-collect-panel-cover="showCollectPanelCover"
 547 |       @changeMapTrack="changeMapTrack"
 548 |     />
 549 |     <!-- 室内轨迹 -->
 550 |     <div v-if="showCrossMap" class="sl-indoor-track-wrapper">
 551 |       <div class="sl-indoor-track_header">
 552 |         <span>室内轨迹模式</span>
 553 |         <el-button @click="showCrossMap = false">退出</el-button>
 554 |       </div>
 555 |       <cross-map-track :track-points="indoorTrackPoints" :target-info="indoorTargetInfo" :user-data="{ ctgt: ctgt }">
 556 |         <template #target-info>
 557 |           <div class="sl-indoor-header_blank"></div>
 558 |           <div v-if="indoorTargetInfo" class="sl-indoor-track_title">人员信息</div>
 559 |           <identity
 560 |             v-if="indoorTargetInfo"
 561 |             class="sl-indoor-track_basic"
 562 |             :identity-data="indoorTargetInfo"
 563 |             :show-options="false"
 564 |           />
 565 |         </template>
 566 |         <template #popup="popupSlotProps">
 567 |           <trackWindow
 568 |             :use-data="true"
 569 |             :in-data="handleInDoorData(popupSlotProps.point)"
 570 |             :close="popupSlotProps.close"
 571 |           />
 572 |         </template>
 573 |         <template #node-more-popup="moreProps">
 574 |           <trackListWindow
 575 |             :use-data="true"
 576 |             :in-data="handleInDoorList(moreProps.node)"
 577 |             :close="moreProps.close"
 578 |             :pop-this-track="moreProps.popupPoint"
 579 |           />
 580 |         </template>
 581 |       </cross-map-track>
 582 |     </div>
 583 |     <detail-panel
 584 |       ref="detailPanel"
 585 |       :page-type="pageType"
 586 |       :search-type="currentTargetActiveName"
 587 |       :show-cross-map="showCrossMap"
 588 |       :is-track-detail="isTrackDetail"
 589 |     />
 590 |     <i class="hikicon-common_add" style="width:0;height:0" />
 591 |   </h-layout>
 592 | </template>
 593 | 
 594 | <script>
 595 | import Vue from 'vue';
 596 | import apiBase from '@/api/base';
 597 | import feature from '@/api/feature';
 598 | import store from '@/store';
 599 | import config from '@/api/config';
 600 | import FusionApi from '@/api/fusion';
 601 | import videoApi from '@/api/video';
 602 | import { mapState, mapGetters } from 'vuex';
 603 | import imgConditionPanel from './components/imgConditionPanel/imgConditionPanel';
 604 | import targetTrackPanel from './components/targetTrackPanel/targetTrackPanel';
 605 | import trackTaskPanel from './components/trackTaskPanel/trackTaskPanel';
 606 | import mapTrackModule from './components/mapTrackModule';
 607 | import attrConditionPanel from './components/attrConditionPanel/attrConditionPanel';
 608 | import fusionResultPanel from './components/fusionResultPanel/fusionResultPanel';
 609 | import mapModule from './components/mapModule';
 610 | import mapModuleOld from './components/mapModuleOld';
 611 | import recognitionDialog from './components/recognitionDialog/recognitionDialog';
 612 | import videoSelect from './components/videoSelect/videoSelect';
 613 | import coldDataBtn from '@/components/coldDataBtn/src';
 614 | import selectedPanel from './components/selectedPanel';
 615 | import trackPanel from './components/trackPanel/trackPanel.vue';
 616 | import collectPanel from './components/collectPanel/newCollectPanel.vue';
 617 | import uploadDrag from '@/components/uploadDrag/src/uploadDrag';
 618 | import { Button, ButtonGroup, Tabs, TabPane, Scrollbar, Select } from 'hui';
 619 | import HLayout from '@hui-pro/layout';
 620 | // import imgSnippets from '@hui-pro/img-snippets';
 621 | import moment from 'moment';
 622 | import tool from '@/utils/tool';
 623 | import constants from '@/utils/constants';
 624 | import DefaultPage from './defaultPage';
 625 | import dataManager from '@/utils/trackCardDataManage/trackCardDataManage';
 626 | import { IuThumbnail } from '@isearchui-pro/comp';
 627 | import { CrossMapTrack } from 'cross-map-track';
 628 | import 'cross-map-track/dist/style.css';
 629 | // import builtMockDisperseResult from './components/uploadBuiltVideo/builtDisperse.json';
 630 | import Identity from './components/trackPanel/modules/identity.vue';
 631 | import trackWindow from './components/popWindows/trackWindow/trackWindow.vue';
 632 | import trackListWindow from './components/popWindows/trackListWindow/trackListWindow.vue';
 633 | import detailPanel from './components/detailPanel';
 634 | import videoMixin from '@/mixins/videoMixin.js';
 635 | import trackBusinessMixin from './mixins/trackBusiness'; // 轨迹
 636 | import traceBusinessMixin from './mixins/traceBusiness'; // 追踪
 637 | import imageBusinessMixin from './mixins/imageBusiness'; // 搜图
 638 | import attrBusinessMinxin from './mixins/attrBusiness'; // 属性
 639 | 
 640 | Vue.use(Button);
 641 | Vue.use(ButtonGroup);
 642 | Vue.use(Tabs);
 643 | Vue.use(TabPane);
 644 | Vue.use(Scrollbar);
 645 | Vue.use(Select);
 646 | Vue.use(HLayout);
 647 | // Vue.use(imgSnippets);
 648 | Vue.use(detailPanel);
 649 | Vue.use(IuThumbnail);
 650 | let jumpUrlSearch = false;
 651 | let jumpUrlSearchData = null;
 652 | let thirdTrackJump = false;
 653 | let pageTypeRoute = ''; // 页面类型（默认融合，视图搜索及专项/属性搜索及专项）
 654 | const dataTypeName = {
 655 |   100201: 'face',
 656 |   100202: 'body',
 657 |   200201: 'vehicle',
 658 |   200203: 'nonvehicle'
 659 | };
 660 | export default {
 661 |   name: 'FusionResult',
 662 |   components: {
 663 |     imgConditionPanel,
 664 |     attrConditionPanel,
 665 |     mapModule,
 666 |     mapModuleOld,
 667 |     fusionResultPanel,
 668 |     recognitionDialog,
 669 |     coldDataBtn,
 670 |     uploadDrag,
 671 |     videoSelect,
 672 |     selectedPanel,
 673 |     DefaultPage,
 674 |     trackPanel,
 675 |     collectPanel,
 676 |     targetTrackPanel,
 677 |     trackTaskPanel,
 678 |     mapTrackModule,
 679 |     CrossMapTrack,
 680 |     Identity,
 681 |     trackWindow,
 682 |     trackListWindow
 683 |   },
 684 |   mixins: [videoMixin, trackBusinessMixin, traceBusinessMixin, imageBusinessMixin, attrBusinessMinxin],
 685 |   data() {
 686 |     // 搜图各排序对应条件字段
 687 |     this.imgSortCondition = {
 688 |       timeAsc: {
 689 |         sortField: 1,
 690 |         sortOrder: 1
 691 |       },
 692 |       timeDesc: {
 693 |         sortField: 1,
 694 |         sortOrder: 0
 695 |       },
 696 |       score: {
 697 |         sortField: 0,
 698 |         sortOrder: 0
 699 |       }
 700 |     };
 701 |     return {
 702 |       trackTaskShow: false, // 条件面板与追踪面板切换
 703 |       collapse: '', // 是否折叠条件面板
 704 |       currentTargets: [{ img: {}, feature: {} }], // 面板数据
 705 |       errImage: require('@/assets/images/svg/noPhotoXs.svg'), // 裂图缺省占位图
 706 |       noImage: require('@/assets/images/svg/photoXs.svg'), // 无图缺省占位图
 707 |       needAnalysis: false, // 侧脸动效解析
 708 |       hasRecognitionRes: false, // 侧脸/背影识别是否有结果
 709 |       analysisTitle: '',
 710 |       analysisResult: {}, // 解析数据
 711 |       recognitionResult: {}, // 智能识别框数据
 712 |       showAttrRightPanel: false, // 属性是否显示右侧详情
 713 |       dialogVisible: false, // 是否展示侧脸、背影研判面板
 714 |       conditionConfig: {}, // 二次过滤条件配置项
 715 |       showVideoSelect: false, // 是否显示视频选点
 716 |       backPageNo: 1, // 背影研判框左侧翻页
 717 |       backSearchParams: null, // 背影查询传参
 718 |       hitInfoResult: [],
 719 |       // 当前是否展示已选点位面板
 720 |       showSelectedPanel: false,
 721 |       exportConditions: {},
 722 |       exportConditionsArray: [],
 723 |       isReset: false,
 724 |       // 冷数据相关
 725 |       toolBoxImage: require('@/assets/images/png/toolBox.png'), // 工具箱图标
 726 |       collectEntrance: require('@/assets/images/png/collection.png'),
 727 |       enableTrace: true, // 是否支持追踪
 728 |       showToolList: false, // 展示工具箱列表
 729 |       showCoolListAlone: false, // 只展示冷任务列表的时候展示蒙层（区分点击某个任务查看结果的状态），勿删
 730 |       showCoolList: false, // 是否展示冷任务列表
 731 |       urlParams: null, // 属性跳转外部参数
 732 |       jumpUrlType: null, // 属性跳转外部的类型
 733 |       showTrackPanel: false, // 是否显示轨迹面板
 734 |       showCollectPanel: false, // 是否显示线索库面板
 735 |       pageType: 'fusion', // 页面类型
 736 |       isDisabled: false,
 737 |       attrallResult: null,
 738 |       attrCurrentResult: null,
 739 |       showTaskPanel: false, // 展示追踪任务面板
 740 |       closeTagShow: false,
 741 |       openMapTrack: false, // 是否打开地图轨迹
 742 |       trackPanelTitle: false, // 追踪面板标题
 743 |       chosedCardData: {}, // 追踪选中的任务数据
 744 |       addTargetIndex: false, // 是否增加面板
 745 |       minimizeResult: false, // 是否最小化结果面板
 746 |       currentTargetSubType: '',
 747 |       fullScreenMap: false, // 是否为全屏地图模式
 748 |       fullScreenPoint: {}, // 全屏模式点位信息
 749 |       currentTaskId: '', // 追踪任务id
 750 |       taskFlag: false,
 751 |       fullScreenSelectedPoint: [], // 全屏模式已选点位
 752 |       showFullScreenSelected: false, // 是否展示全屏模式选点面板
 753 |       selectPoints: '', // 背影研判面板已选点位
 754 |       selectTime: '', // 背影研判面板已选时间
 755 |       indoorTrackPoints: [], // 室内轨迹轨迹点
 756 |       indoorTargetInfo: {}, // 室内轨迹人员信息
 757 |       showCrossMap: false, // 是否展示室内轨迹
 758 |       etcAuth: false,
 759 |       showTips: false, // 显示可拉出条件面板的tips
 760 |       isXxwTab: false, // 当前是否是信息网tab
 761 |       saveTrack: false, // 当前修改追踪任务是否需要保留临时轨迹
 762 |       attrCondition: null, // 用于保存上次查询的条件，再次更改条件如果没有点击查询按钮，是不生效的；
 763 |       isTrackDetail: false,
 764 |       isImgTargetChanged: false, // 用于背影侧脸避免重查
 765 |       ctgt: '', // 室内轨迹用ctgt
 766 |       showMapSearch: true, // 是否展示搜索栏
 767 |       isDetailToFullMap: false, // 当前是否为详情打开的地图全屏
 768 |       handleThirdTrack: false, // 是否已处理第三方轨迹跳转
 769 |       dataTypeList: [], // 平台有哪些子表
 770 |       trackJmpSearch: false, // 查询但不退出轨迹描绘时用到
 771 |       backcurrentTargetImgData: null
 772 |     };
 773 |   },
 774 |   computed: {
 775 |     ...mapState([
 776 |       'pageHeight',
 777 |       'fusion',
 778 |       'searchConfig',
 779 |       'moduleSale',
 780 |       'userInfo',
 781 |       'hotDay',
 782 |       'compatibleConfig',
 783 |       'targetTrace',
 784 |       'onlyBuilt',
 785 |       'permissionData',
 786 |       'pageTypeRoute'
 787 |     ]),
 788 |     ...mapGetters({
 789 |       minSimilar: 'fusion/getMinSimilar',
 790 |       currentTargetType: 'fusion/getCurrentTargetType',
 791 |       timeValue: 'fusion/getTimeValue',
 792 |       timeRange: 'fusion/getTimeRange',
 793 |       relation: 'fusion/getRelation',
 794 |       fusionSelectedPoint: 'fusion/getSelectedPoint',
 795 |       traceSelectedPoint: 'targetTrace/getSelectedPoint',
 796 |       currentTargetImgs: 'fusion/getImgs',
 797 |       currentTargetIndex: 'fusion/getIndex',
 798 |       currentTargetActiveName: 'fusion/getActiveName',
 799 |       trackData: 'fusion/getTrackData',
 800 |       collectionTrackData: 'fusion/getCollectionTrackData',
 801 |       isTrackStatus: 'fusion/getCurrentIntoTrackStatus',
 802 |       middleResultStatus: 'fusion/getCurrentMiddleResultStatus', // 结果面板三列，但不进入轨迹描绘状态
 803 |       currentTargetUploadImgs: 'fusion/getUploadImgDatas',
 804 |       collectionTrackOpen: 'fusion/getCollectionTrackOpen', // 当前目标是否打开线索库轨迹面板
 805 |       trackExtraData: 'fusion/getTrackExtraData', // 获取当前查询的etc和信息网表
 806 |       hasXshare: 'fusion/getHasXshare',
 807 |       translaDataType: 'fusion/getTranslaDataType',
 808 |       targetTraceImgs: 'targetTrace/getImgs'
 809 |     }),
 810 |     // 线索库是否需要覆盖播放器
 811 |     collectNotCover() {
 812 |       return this.isTrackStatus || this.middleResultStatus || this.minimizeResult || !this.showSearchResult;
 813 |     },
 814 |     // 配置是否支持视频解析跳转
 815 |     videoSelectArea() {
 816 |       return (
 817 |         this.searchConfig &&
 818 |         this.searchConfig.pageConfig &&
 819 |         this.searchConfig.pageConfig.fusion &&
 820 |         this.searchConfig.pageConfig.fusion.videoSelectArea
 821 |       );
 822 |     },
 823 |     // 视图搜索/属性搜索tab
 824 |     conditionTabs() {
 825 |       if (this.onlyBuilt) {
 826 |         return [
 827 |           {
 828 |             label: '视图搜索',
 829 |             key: 'image'
 830 |           }
 831 |         ];
 832 |       } else {
 833 |         if (this.searchPanelTypes === 'image') {
 834 |           store.commit('fusion/setActiveName', 'image');
 835 |           return [
 836 |             {
 837 |               label: '视图搜索',
 838 |               key: 'image'
 839 |             }
 840 |           ];
 841 |         } else if (this.searchPanelTypes === 'feature') {
 842 |           store.commit('fusion/setActiveName', 'feature');
 843 |           return [
 844 |             {
 845 |               label: '属性搜索',
 846 |               key: 'feature'
 847 |             }
 848 |           ];
 849 |         } else {
 850 |           store.commit('fusion/setActiveName', 'image');
 851 |           return [
 852 |             {
 853 |               label: '视图搜索',
 854 |               key: 'image'
 855 |             },
 856 |             {
 857 |               label: '属性搜索',
 858 |               key: 'feature'
 859 |             }
 860 |           ];
 861 |         }
 862 |       }
 863 |     },
 864 |     selectedPoint() {
 865 |       if (this.targetTrace && this.targetTrace.targetTrace) return this.traceSelectedPoint;
 866 |       return this.fusionSelectedPoint;
 867 |     },
 868 |     // 轨迹点个数
 869 |     trackNum() {
 870 |       return this.trackData.trackList.length < 99 ? this.trackData.trackList.length : '99+';
 871 |     },
 872 |     // 轨迹名单信息
 873 |     trackBasic() {
 874 |       return this.trackData.identity;
 875 |     },
 876 |     currentTargetImgData() {
 877 |       return this.currentTargets[this.currentTargetIndex].img;
 878 |     },
 879 |     currentTargetAttrData() {
 880 |       return this.currentTargets[this.currentTargetIndex].feature;
 881 |     },
 882 |     fusionResultPanelType() {
 883 |       let type;
 884 |       if (this.currentTargetActiveName === 'image') {
 885 |         if (
 886 |           !this.currentTargetImgData.multiImgSearchFlag &&
 887 |           (!this.currentTargetImgData.multiImgResult || !Object.keys(this.currentTargetImgData.multiImgResult).length)
 888 |         ) {
 889 |           // 单图搜索
 890 |           let typeList = JSON.parse(JSON.stringify(this.currentTargetImgData.type));
 891 |           typeList = typeList.split(',');
 892 |           typeList = Array.from(new Set(typeList));
 893 |           if (typeList.length === 1) {
 894 |             type = this.currentTargetImgData.type;
 895 |           } else {
 896 |             type = typeList[0];
 897 |           }
 898 |         } else if (this.currentTargetImgData.multiImgSearchFlag) {
 899 |           // 多图搜索
 900 |           type = this.currentTargetImgData.multiImgType;
 901 |         }
 902 |       } else {
 903 |         type = this.currentTargetType;
 904 |       }
 905 |       return type;
 906 |     },
 907 |     // 是否显示查询结果
 908 |     showSearchResult() {
 909 |       let show = false;
 910 |       const { result, multiImgResult, multiImgType, showNoRecognition } = this.currentTargetImgData;
 911 |       if (
 912 |         (this.currentTargetActiveName === 'image' && result) ||
 913 |         (multiImgResult && multiImgResult[multiImgType] && multiImgResult[multiImgType].result)
 914 |       ) {
 915 |         show = true;
 916 |       } else if (this.currentTargetActiveName === 'image' && (this.needAnalysis || showNoRecognition)) {
 917 |         show = true;
 918 |       } else if (
 919 |         this.currentTargetActiveName === 'feature' &&
 920 |         this.currentTargetAttrData[this.currentTargetType] &&
 921 |         this.currentTargetAttrData[this.currentTargetType].result
 922 |       ) {
 923 |         show = true;
 924 |       }
 925 |       return show;
 926 |     },
 927 |     // 相似档案模式（不显示/名单库/抓拍库+名单库）
 928 |     similarArchivesMode() {
 929 |       return (
 930 |         (this.searchConfig &&
 931 |           this.searchConfig.pageConfig &&
 932 |           this.searchConfig.pageConfig[this.pageType] &&
 933 |           this.searchConfig.pageConfig[this.pageType].similarArchives) ||
 934 |         'listSnap'
 935 |       );
 936 |     },
 937 |     // 查询面板显示（视图搜索/属性搜索/视图搜索+属性搜索）
 938 |     searchPanelTypes() {
 939 |       let type = 'imageFeature';
 940 |       if (
 941 |         this.searchConfig &&
 942 |         this.searchConfig.pageConfig &&
 943 |         this.searchConfig.pageConfig[this.pageType] &&
 944 |         this.searchConfig.pageConfig[this.pageType].searchPanelTypes
 945 |       ) {
 946 |         type = this.searchConfig.pageConfig[this.pageType].searchPanelTypes;
 947 |         localStorage.setItem('bsearchPanelTypes', type);
 948 |       } else if (localStorage.getItem('bsearchPanelTypes')) {
 949 |         type = localStorage.getItem('bsearchPanelTypes');
 950 |       }
 951 | 
 952 |       // 视图搜索及专项仅显示视图搜索菜单
 953 |       if (['image', 'imageFace', 'imageBody', 'imageVehicle', 'imageNonvehicle'].includes(pageTypeRoute)) {
 954 |         type = 'image';
 955 |       } else if (['attr', 'attrFace', 'attrBody', 'attrVehicle', 'attrNonvehicle'].includes(pageTypeRoute)) {
 956 |         // 属性搜索及专项仅显示属性搜索菜单
 957 |         type = 'feature';
 958 |       }
 959 | 
 960 |       return type;
 961 |     },
 962 |     toolList() {
 963 |       const list = [];
 964 |       // 追踪任务面板仅在融合菜单下可用
 965 |       if (
 966 |         this.moduleSale &&
 967 |         this.moduleSale.targetTrack &&
 968 |         this.userInfo &&
 969 |         this.userInfo.hasBsearchTraceRole &&
 970 |         this.hasAddCollect &&
 971 |         this.compatibleConfig &&
 972 |         this.compatibleConfig.xshareVersion &&
 973 |         this.compatibleConfig.xshareVersion === '230' &&
 974 |         this.compatibleConfig.pviaVersion !== '130' &&
 975 |         !pageTypeRoute
 976 |       ) {
 977 |         list.push({
 978 |           name: '智能追踪',
 979 |           icon: 'icon-IoT_common_hit',
 980 |           key: 'opentrace'
 981 |         });
 982 |       }
 983 |       // cpuImgSearch指的是温数据销售项
 984 |       // 温数据任务面板仅在融合/视图搜索及专项菜单下显示
 985 |       // bsearchNoWarmCreate为无温数据创建权限的角色
 986 |       if (
 987 |         this.moduleSale &&
 988 |         this.moduleSale.cpuImgSearch &&
 989 |         this.searchConfig &&
 990 |         this.searchConfig.pageConfig &&
 991 |         this.searchConfig.pageConfig.fusion &&
 992 |         ['', 'image', 'imageFace', 'imageBody', 'imageVehicle', 'imageNonvehicle'].includes(pageTypeRoute) &&
 993 |         !(this.userInfo && this.userInfo.userRoleMap && this.userInfo.userRoleMap.bsearchNoWarmCreate)
 994 |       ) {
 995 |         const {
 996 |           faceCanColdData,
 997 |           bodyCanColdData,
 998 |           vehicleCanColdData,
 999 |           nonvehicleCanColdData
1000 |         } = this.searchConfig.pageConfig.fusion;
1001 |         if (
1002 |           ['', 'image'].includes(pageTypeRoute) &&
1003 |           (faceCanColdData || bodyCanColdData || vehicleCanColdData || nonvehicleCanColdData)
1004 |         ) {
1005 |           list.push({
1006 |             name: '查询任务',
1007 |             icon: 'h-icon-details',
1008 |             key: 'coolList'
1009 |           });
1010 |         } else {
1011 |           const obj = {
1012 |             imageFace: faceCanColdData,
1013 |             imageBody: bodyCanColdData,
1014 |             imageVehicle: vehicleCanColdData,
1015 |             imageNonvehicle: nonvehicleCanColdData
1016 |           };
1017 |           if (obj[pageTypeRoute]) {
1018 |             list.push({
1019 |               name: '查询任务',
1020 |               icon: 'h-icon-details',
1021 |               key: 'coolList'
1022 |             });
1023 |           }
1024 |         }
1025 |       }
1026 |       return list;
1027 |     },
1028 |     hasAddCollect() {
1029 |       if (this.searchConfig.authMap && this.searchConfig.authMap.addCollect) {
1030 |         return true;
1031 |       }
1032 |       return false;
1033 |     },
1034 |     handleSort() {
1035 |       if (this.currentTargetActiveName === 'image') {
1036 |         if (this.currentTargetActiveName.isAttrallSearch) {
1037 |           if (
1038 |             this.currentTargetAttrData[this.currentTargetType] &&
1039 |             this.currentTargetAttrData[this.currentTargetType].sortMode
1040 |           ) {
1041 |             return this.currentTargetAttrData[this.currentTargetType].sortMode;
1042 |           } else {
1043 |             return 'timeDesc';
1044 |           }
1045 |         } else {
1046 |           return this.currentTargetImgData.sortMode;
1047 |         }
1048 |       } else {
1049 |         if (
1050 |           this.currentTargetAttrData[this.currentTargetType] &&
1051 |           this.currentTargetAttrData[this.currentTargetType].sortMode
1052 |         ) {
1053 |           return this.currentTargetAttrData[this.currentTargetType].sortMode;
1054 |         } else {
1055 |           return 'timeDesc';
1056 |         }
1057 |       }
1058 |     },
1059 |     handleSnapModeType() {
1060 |       if (this.currentTargetActiveName === 'image') {
1061 |         let snapMode = 'snapMode';
1062 |         if (this.currentTargetActiveName.isAttrallSearch) {
1063 |           snapMode = 'snapMode';
1064 |         } else if (!this.currentTargetImgData.multiImgSearchFlag) {
1065 |           snapMode = this.currentTargetImgData.snapModeType;
1066 |         } else if (this.currentTargetImgData.multiImgSearchFlag) {
1067 |           snapMode = this.currentTargetImgData.multiImgResult[this.currentTargetImgData.multiImgType].snapModeType;
1068 |         }
1069 |         return snapMode;
1070 |       } else {
1071 |         if (
1072 |           this.currentTargetAttrData[this.currentTargetType] &&
1073 |           this.currentTargetAttrData[this.currentTargetType].snapModeType
1074 |         ) {
1075 |           return this.currentTargetAttrData[this.currentTargetType].snapModeType;
1076 |         } else {
1077 |           return 'snapMode';
1078 |         }
1079 |       }
1080 |     },
1081 |     handleDisplayMode() {
1082 |       if (this.currentTargetActiveName === 'image') {
1083 |         if (this.currentTargetActiveName.isAttrallSearch) {
1084 |           if (
1085 |             this.currentTargetAttrData[this.currentTargetType] &&
1086 |             this.currentTargetAttrData[this.currentTargetType].displayMode
1087 |           ) {
1088 |             return this.currentTargetAttrData[this.currentTargetType].displayMode;
1089 |           } else {
1090 |             return 'small';
1091 |           }
1092 |         } else {
1093 |           return this.currentTargetImgData.displayMode;
1094 |         }
1095 |       } else {
1096 |         if (
1097 |           this.currentTargetAttrData[this.currentTargetType] &&
1098 |           this.currentTargetAttrData[this.currentTargetType].displayMode
1099 |         ) {
1100 |           return this.currentTargetAttrData[this.currentTargetType].displayMode;
1101 |         } else {
1102 |           return 'small';
1103 |         }
1104 |       }
1105 |     },
1106 |     handleShowsecondaryPage() {
1107 |       const that = this;
1108 |       if (this.currentTargetActiveName.isAttrallSearch || this.currentTargetActiveName === 'feature') {
1109 |         if (
1110 |           that.currentTargetAttrData[that.currentTargetType] &&
1111 |           that.currentTargetAttrData[that.currentTargetType].secondaryPage
1112 |         ) {
1113 |           return that.currentTargetAttrData[that.currentTargetType].secondaryPage;
1114 |         } else {
1115 |           return false;
1116 |         }
1117 |       } else if (this.currentTargetActiveName === 'image') {
1118 |         if (that.currentTargetImgData.secondaryPage) {
1119 |           return that.currentTargetImgData.secondaryPage;
1120 |         } else {
1121 |           return false;
1122 |         }
1123 |       } else {
1124 |         return false;
1125 |       }
1126 |     },
1127 |     // 打开线索库面板是否展示遮罩层
1128 |     // 不展示遮罩(有地图展示的情况如下：1、无搜索结果；2、最小化；3、三列展示；4、三列展示勾选状态下；5、追踪条件面板打开；6、追踪任务展示面板)
1129 |     showCollectPanelCover() {
1130 |       return !(
1131 |         !this.showSearchResult ||
1132 |         this.minimizeResult ||
1133 |         this.middleResultStatus ||
1134 |         this.isTrackStatus ||
1135 |         this.trackTaskShow ||
1136 |         this.showTaskPanel
1137 |       );
1138 |     },
1139 |     // 配置项配置开启默认使用人体重排序查询
1140 |     bodyResortSearch() {
1141 |       let show = false;
1142 |       if (this.searchConfig.pageConfig.fusion.openBodyResort && this.searchConfig.pageConfig.fusion.bodyResortSearch) {
1143 |         show = true;
1144 |       }
1145 |       return show;
1146 |     },
1147 |     // 配置项配置开启默认使用车辆重排序查询
1148 |     vehicleResortSearch() {
1149 |       let show = false;
1150 |       if (
1151 |         this.searchConfig.pageConfig.fusion.openVehicleResort &&
1152 |         this.searchConfig.pageConfig.fusion.vehicleResortSearch
1153 |       ) {
1154 |         show = true;
1155 |       }
1156 |       return show;
1157 |     },
1158 |     // 全量属性查询鉴权
1159 |     disabledAllAttrSearch() {
1160 |       let disabled = false;
1161 |       const { searchPanelTypes = 'image', currentTargetImgs = [], currentTargetActiveName } = this;
1162 |       let attrSubSearchType = ['face', 'body', 'facelib', 'vehicle', 'nonvehicle', 'imis'];
1163 |       if (this.searchConfig && this.searchConfig.pageConfig && this.searchConfig.pageConfig.fusion.attrSubSearchType) {
1164 |         attrSubSearchType = this.searchConfig.pageConfig.fusion.attrSubSearchType;
1165 |       }
1166 | 
1167 |       if (searchPanelTypes === 'image' && !currentTargetImgs.length) {
1168 |         // 仅视图搜索菜单（无上传图）
1169 |         disabled = true;
1170 |       } else if (
1171 |         currentTargetActiveName === 'image' &&
1172 |         !currentTargetImgs.length &&
1173 |         !attrSubSearchType.includes('face') &&
1174 |         !attrSubSearchType.includes('body') &&
1175 |         !attrSubSearchType.includes('vehicle') &&
1176 |         !attrSubSearchType.includes('nonvehicle') &&
1177 |         !attrSubSearchType.includes('built')
1178 |       ) {
1179 |         // 视图搜索tab无上传图，且属性搜索类型里面无人脸/人体/车辆/非机动车/体态类型
1180 |         disabled = true;
1181 |       }
1182 |       // 视图搜索及专项（无上传图）（全量属性查询仅在融合菜单下可用）
1183 |       if (
1184 |         ['image', 'imageFace', 'imageBody', 'imageVehicle', 'imageNonvehicle'].includes(pageTypeRoute) &&
1185 |         !currentTargetImgs.length
1186 |       ) {
1187 |         disabled = true;
1188 |       }
1189 | 
1190 |       return disabled;
1191 |     },
1192 |     // 是否打开轨迹时隐藏温数据面版
1193 |     hideColdList() {
1194 |       return this.collapse === 'hide';
1195 |     },
1196 |     // 显示冷数据任务状态loading
1197 |     showColdLoading() {
1198 |       return this.currentTargetImgData.progress > 0 && this.currentTargetImgData.progress < 1;
1199 |     },
1200 |     // 拖拽上传类型
1201 |     uploadDragType() {
1202 |       let type = '';
1203 |       if (this.trackTaskShow) {
1204 |         type = 'traceUnknown';
1205 |         // 追踪任务面板
1206 |         const targetTraceImgs = this.targetTraceImgs || [];
1207 |         const faceImgs = targetTraceImgs.filter(item => item.type === 'face');
1208 |         const bodyImgs = targetTraceImgs.filter(item => item.type === 'body');
1209 |         const imgType = [];
1210 |         if (faceImgs.length < 5) {
1211 |           imgType.push('face');
1212 |         }
1213 |         if (bodyImgs.length < 5) {
1214 |           imgType.push('body');
1215 |         }
1216 | 
1217 |         if (imgType.length) type = imgType.join(',');
1218 |       } else {
1219 |         type = this.searchConfig.modelTypes;
1220 |       }
1221 | 
1222 |       return type;
1223 |     },
1224 |     // 拖拽上传数量
1225 |     uploadDragLimit() {
1226 |       let limitData = 5;
1227 |       if (this.trackTaskShow) {
1228 |         // 追踪任务面板
1229 |         const targetTraceImgs = this.targetTraceImgs || [];
1230 |         if (targetTraceImgs.length > 5) {
1231 |           limitData = 10 - targetTraceImgs.length;
1232 |         }
1233 |       }
1234 | 
1235 |       return limitData;
1236 |     }
1237 |   },
1238 |   watch: {
1239 |     collapse(val) {
1240 |       if (val === 'open') {
1241 |         this.showTips = false;
1242 |       }
1243 |     },
1244 |     isTrackStatus(val) {
1245 |       if (!val && !this.middleResultStatus) {
1246 |         this.showTips = false;
1247 |         this.showCollectPanelCover = false;
1248 |         this.showCollectPanel = false;
1249 |       }
1250 |     },
1251 |     middleResultStatus(val) {
1252 |       if (!val && !this.isTrackStatus) {
1253 |         this.showTips = false;
1254 |         this.showCollectPanelCover = false;
1255 |         this.showCollectPanel = false;
1256 |       }
1257 |       if (val && !this.showTaskPanel && !this.trackTaskShow && !this.hideColdList && this.collapse === 'hide') {
1258 |         this.showTips = true;
1259 |       }
1260 |     },
1261 |     showTips(val) {
1262 |       if (val) {
1263 |         setTimeout(() => {
1264 |           this.showTips = false;
1265 |         }, 3000);
1266 |       }
1267 |     },
1268 |     trackExtraData: {
1269 |       handler(val) {
1270 |         if (val && val.length) {
1271 |           this.etcAuth = true;
1272 |         }
1273 |       },
1274 |       deep: true,
1275 |       immediate: true
1276 |     },
1277 |     trackTaskShow(val) {
1278 |       if (val) {
1279 |         this.$store.dispatch('TSupdateWindow', null);
1280 |       }
1281 |     },
1282 |     showTrackPanel(val) {
1283 |       if (val && !this.isTrackStatus && !this.middleResultStatus && !this.collectionTrackOpen) {
1284 |         this.$store.commit('fusion/setMiddleResultStatus', true);
1285 |         this.collapse = 'hide';
1286 |       }
1287 |       if (!val && !this.isTrackStatus && !this.middleResultStatus && !this.collectionTrackOpen) {
1288 |         this.openMapTrack = false;
1289 |       } else {
1290 |         this.openMapTrack = true;
1291 |       }
1292 |     },
1293 |     collectionTrackOpen(val) {
1294 |       if (val && this.showSearchResult && !this.isTrackStatus && !this.middleResultStatus && !this.showTrackPanel) {
1295 |         this.$store.commit('fusion/setMiddleResultStatus', true);
1296 |         this.collapse = 'hide';
1297 |       }
1298 |     },
1299 |     showCollectPanel(val) {
1300 |       if (!val && this.showSearchResult && !this.isTrackStatus && !this.showTrackPanel) {
1301 |         this.$store.commit('fusion/setMiddleResultStatus', false);
1302 |         this.exitTrackStatus();
1303 |       }
1304 |       if (!val) {
1305 |         this.currentTaskId = '';
1306 |         // 设置线索库轨迹是否打开的标志
1307 |         this.$store.commit('fusion/setCollectionTrackOpen', false);
1308 |         this.$store.commit('fusion/setOpenCaseIndexCode', '');
1309 |         this.$store.commit('fusion/setOpenCaseName', '');
1310 |         // 关闭时清空store，防止目标追踪那边复用
1311 |         this.$store.commit('fusion/setCollectTrackData', []);
1312 |       }
1313 |     },
1314 |     showSelectedPanel(val) {
1315 |       if (val && this.showSearchResult) {
1316 |         this.isDisabled = true;
1317 |       } else {
1318 |         this.isDisabled = false;
1319 |       }
1320 |     },
1321 |     'currentTargetImgData.type': {
1322 |       handler(val) {
1323 |         if (!val) {
1324 |           this.recognitionResult = {};
1325 |           return;
1326 |         }
1327 |         let multiTypes = val.split(',');
1328 |         if (multiTypes.length === 1) return;
1329 |         // 一人多图本质上是单图搜索，重写type类型为真实类型
1330 |         multiTypes = Array.from(new Set(multiTypes));
1331 |         if (multiTypes.length === 1) this.$set(this.currentTargetImgData, 'type', multiTypes[0]);
1332 |       }
1333 |     },
1334 |     recognitionResult: {
1335 |       handler(val) {
1336 |         const { currentTargets, currentTargetIndex } = this.fusion;
1337 |         this.$set(currentTargets[currentTargetIndex], 'recognitionResult', val);
1338 |       },
1339 |       deep: true
1340 |     },
1341 |     // tab切换时，通用鉴权参数同步更改
1342 |     currentTargetActiveName(val) {
1343 |       const { faceSale, bodySale, vehicleSale, nonvehicleSale, builtSale, iefenceSale } = this.moduleSale;
1344 |       const { imageUploadDetectionType, attrSubSearchType, humanShowNameList } = this.searchConfig.pageConfig.fusion;
1345 |       let common = {};
1346 |       if (val === 'image') {
1347 |         common = {
1348 |           faceSale: faceSale && imageUploadDetectionType.includes('face'),
1349 |           bodySale: bodySale && imageUploadDetectionType.includes('body'),
1350 |           vehicleSale: vehicleSale && imageUploadDetectionType.includes('vehicle'),
1351 |           nonvehicleSale: nonvehicleSale && imageUploadDetectionType.includes('nonvehicle'),
1352 |           builtSale: builtSale && imageUploadDetectionType.includes('built'),
1353 |           iefenceSale: iefenceSale && attrSubSearchType.includes('imsi')
1354 |         };
1355 |       } else if (val === 'feature') {
1356 |         common = {
1357 |           faceSale: faceSale && attrSubSearchType.includes('face'),
1358 |           bodySale: bodySale && attrSubSearchType.includes('body'),
1359 |           vehicleSale: vehicleSale && attrSubSearchType.includes('vehicle'),
1360 |           nonvehicleSale: nonvehicleSale && attrSubSearchType.includes('nonvehicle'),
1361 |           builtSale: builtSale && attrSubSearchType.includes('built'),
1362 |           iefenceSale: iefenceSale && attrSubSearchType.includes('imsi'),
1363 |           facelibSale: humanShowNameList && attrSubSearchType.includes('facelib')
1364 |         };
1365 |       }
1366 |       store.commit('setPermissionDataCommon', common);
1367 |     }
1368 |   },
1369 |   beforeRouteEnter(to, from, next) {
1370 |     if (Object.keys(to.query).length) {
1371 |       jumpUrlSearch = true;
1372 |       jumpUrlSearchData = to.query;
1373 |       // 处理原始加签的url
1374 |       if (jumpUrlSearchData.iTk) {
1375 |         const url = (window.frameElement && window.frameElement.src) || window.location.href;
1376 |         let param = url.split('?');
1377 |         param.shift();
1378 |         param = param.join('?');
1379 |         param = param.split('&');
1380 |         const paramObj = {};
1381 |         let oldKey = '';
1382 |         const notKey = ['Expires', 'AccessKeyId', 'Signature', 'iTk'];
1383 |         param.map(el => {
1384 |           const tmp = el.split('=');
1385 |           const key = tmp[0];
1386 |           tmp.shift();
1387 |           const value = tmp.join('=');
1388 |           if (!notKey.includes(key)) {
1389 |             if ((oldKey === 'targetUrl' || oldKey === 'bkgUrl') && !paramObj[oldKey].includes('/ngx')) {
1390 |               paramObj[oldKey] = `/ngx/proxy?i=${btoa(decodeURIComponent(paramObj[oldKey]))}`;
1391 |             }
1392 |             paramObj[key] = value;
1393 |             oldKey = key;
1394 |           } else {
1395 |             paramObj[oldKey] = `${paramObj[oldKey]}&${key}=${value}`;
1396 |           }
1397 |         });
1398 |         jumpUrlSearchData = paramObj;
1399 |       }
1400 |       // 带轨迹数据跳转生成轨迹优化
1401 |       if (to.query && to.query.page && to.query.page === 'thirdTrack') {
1402 |         thirdTrackJump = true;
1403 |       }
1404 |     }
1405 |     // 智图研判-专项菜单处理（视图搜索及专项/属性搜索及专项）
1406 |     if (to.params) {
1407 |       const { pageType = '', zPageType = '' } = to.params;
1408 |       const pageTypeRouteObj = {
1409 |         image: 'image',
1410 |         'image/face': 'imageFace',
1411 |         'image/body': 'imageBody',
1412 |         'image/vehicle': 'imageVehicle',
1413 |         'image/nonvehicle': 'imageNonvehicle',
1414 |         attr: 'attr',
1415 |         'attr/face': 'attrFace',
1416 |         'attr/body': 'attrBody',
1417 |         'attr/vehicle': 'attrVehicle',
1418 |         'attr/nonvehicle': 'attrNonvehicle'
1419 |       };
1420 |       let name = pageType;
1421 |       if (zPageType) name = `${name}/${zPageType}`;
1422 |       pageTypeRoute = pageTypeRouteObj[name] || '';
1423 |     }
1424 |     next();
1425 |   },
1426 |   beforeDestroy() {
1427 |     this.bus.$off('closeWarmPanel');
1428 |     this.bus.$off('closeFullScreen');
1429 |     // 地图轨迹卡片操作项点击事件
1430 |     this.bus.$off('handleCardOption');
1431 |     this.bus.$off('handleFusionResSurround');
1432 |   },
1433 |   created() {
1434 |     // 获取全局配置
1435 |     this.getSearchConfig();
1436 |     // 获取二次过滤条件配置
1437 |     this.getConditionList();
1438 |     // 获取冷温热数据范围
1439 |     this.getHotDayRange();
1440 |     // 获取销售项控权内容
1441 |     this.getModuleSale(false);
1442 |     // 获取向下兼容配置项
1443 |     this.getCompatibleConfig();
1444 |     // 带数据跳转轨迹提前处理
1445 |     if (thirdTrackJump) {
1446 |       this.handleThirdTrack = true;
1447 |       this.onekeyThirdTrack();
1448 |     }
1449 |     // 获取侧脸角度阈值
1450 |     this.getSideFaceAngle();
1451 |     // 获取加入档案权限（聚档下未聚档抓拍）
1452 |     this.getUserRole();
1453 |     // 获取当前浏览器类型
1454 |     this.getBrowserType();
1455 |     // 解决使用hmap270版本的hmap-core的时候，搜索打点不了的问题
1456 |     window.hmapVersion = '2.7.0';
1457 |   },
1458 |   mounted() {
1459 |     // 点击视频选点以外的地方关闭视频选点面板
1460 |     document.addEventListener('click', e => {
1461 |       const wrapperEle = e.target;
1462 |       if (this.showVideoSelect) {
1463 |         let ele = wrapperEle;
1464 |         let inner = false;
1465 |         if (e.target.innerHTML === ' 视频解析 ') {
1466 |           inner = 'videoSelect';
1467 |         } else {
1468 |           while (ele) {
1469 |             if (
1470 |               ele._prevClass &&
1471 |               (ele._prevClass.includes('sl-FResult-select_video') || ele._prevClass.includes('sp-players-wrapper'))
1472 |             ) {
1473 |               inner = 'videoSelect';
1474 |               break;
1475 |             } else if (ele.parentNode) {
1476 |               ele = ele.parentNode;
1477 |             } else {
1478 |               ele = null;
1479 |             }
1480 |           }
1481 |         }
1482 |         if (inner !== 'videoSelect') {
1483 |           this.showVideoSelect = false;
1484 |         }
1485 |       }
1486 |       let mapEle = wrapperEle;
1487 |       let mapInner = '';
1488 |       while (mapEle) {
1489 |         if (
1490 |           mapEle._prevClass &&
1491 |           (mapEle._prevClass.includes('wistom-search-input') ||
1492 |             mapEle._prevClass.includes('check-btns') ||
1493 |             mapEle._prevClass.includes('wistom-search-device-popover') ||
1494 |             mapEle._prevClass.includes('searchPanel-top_btn') ||
1495 |             mapEle._prevClass.includes('searchPanel-top_select') ||
1496 |             mapEle._prevClass.includes('wistom-poi-show-relate__back-btn') ||
1497 |             mapEle._prevClass.includes('sl-MMOld-searchInput'))
1498 |         ) {
1499 |           mapInner = 'mapQuery';
1500 |           break;
1501 |         } else if (mapEle.parentNode) {
1502 |           mapEle = mapEle.parentNode;
1503 |         } else {
1504 |           mapEle = null;
1505 |         }
1506 |       }
1507 |       if (mapInner !== 'mapQuery') {
1508 |         // wistom-search-input__result
1509 |         this.showMapSearch = false;
1510 |       } else {
1511 |         this.showMapSearch = true;
1512 |       }
1513 |     });
1514 |     // 应用内一键搜图（含一人多图）
1515 |     this.bus.$on('oneKeyImgSearch', this.oneKeyImgSearch);
1516 | 
1517 |     // 应用内轨迹查询
1518 |     this.bus.$on('oneKeyTrackSearch', this.oneKeyTrackSearch);
1519 |     // 关闭背影侧脸研判框
1520 |     this.bus.$on('closeBackSidefaceDialog', this.closeDialog);
1521 |     // 应用内目标追踪查询
1522 |     this.bus.$on('oneKeyTraceSearch', this.oneKeyTraceSearch);
1523 |     this.bus.$on('searchTragetTrack', params => {
1524 |       this.addTarget();
1525 |       setTimeout(() => {
1526 |         this.oneKeyTrackSearch(params, true);
1527 |       }, 1000);
1528 |     });
1529 |     this.bus.$on('clickMapTrackCard', item => {
1530 |       if (this.showTrackPanel) {
1531 |         this.bus.$emit('clickTrackCard', item);
1532 |       }
1533 |     });
1534 |     // 点击切换追踪目标
1535 |     this.bus.$on('clickCurrentTaskId', (val, status) => {
1536 |       this.currentTaskId = val;
1537 |       this.taskFlag = true;
1538 |       this.showCollectPanel = true;
1539 |       this.$refs.collectPanelRef.clickChange(this.currentTaskId, status);
1540 |     });
1541 |     // 目标追踪轮询
1542 |     this.bus.$on('currentTaskId', val => {
1543 |       if (val) {
1544 |         this.currentTaskId = val;
1545 |         this.$refs.collectPanelRef.lunXunChange();
1546 |       }
1547 |     });
1548 |     // 监听临时轨迹面板收藏
1549 |     this.bus.$on('openCollectedTrack', val => {
1550 |       this.currentTaskId = val;
1551 |       this.showCollectPanel = true;
1552 |       this.$refs.collectPanelRef.openCollectedTrack(val);
1553 |     });
1554 |     // 接收地图全屏事件
1555 |     this.bus.$on('toFullScreen', data => {
1556 |       this.fullScrrenPoint = {};
1557 |       if (data.status) {
1558 |         this.fullScreenMap = true;
1559 |         if (data.point) {
1560 |           this.fullScreenPoint = data.point || {};
1561 |           // 弹出点位弹框
1562 |           this.$nextTick(() => {
1563 |             this.setFullScreenPoint();
1564 |           });
1565 |         }
1566 |       }
1567 |       if (this.isDetailToFullMap && !data.status) {
1568 |         if (this.isTrackDetail) {
1569 |           this.bus.$emit('showDetailPanel');
1570 |         } else this.bus.$emit('showDetailPanelEvent');
1571 |       }
1572 |       this.isDetailToFullMap = data.isDetailPanel || false;
1573 |     });
1574 |     // 关闭全屏模式
1575 |     this.bus.$on('closeFullScreen', this.closeFullScreen);
1576 |     // 接收全屏地图数据
1577 |     this.bus.$on('addFullScreenSelected', data => {
1578 |       const oldList = this.fullScreenSelectedPoint.map(item => {
1579 |         return item.key;
1580 |       });
1581 |       const newList = data.filter(item => {
1582 |         return oldList.indexOf(item.key) === -1;
1583 |       });
1584 |       this.fullScreenSelectedPoint = [...this.fullScreenSelectedPoint, ...newList];
1585 |       this.showFullScreenSelected = true;
1586 |     });
1587 |     // 接收全屏地图数据
1588 |     this.bus.$on('changeFullScreenPoint', data => {
1589 |       this.fullScreenSelectedPoint = data;
1590 |     });
1591 |     // 打开/关闭XX面板
1592 |     this.bus.$on('switchPanels', dataList => {
1593 |       this.switchPanels(dataList);
1594 |     });
1595 |     // 室内轨迹
1596 |     this.bus.$on('showIndoorTrack', async params => {
1597 |       const { list, basic } = params;
1598 |       this.indoorTrackPoints = list;
1599 |       this.indoorTargetInfo = basic;
1600 |       if (!this.ctgt) {
1601 |         const { data } = await videoApi.getPlayerCommonConfig();
1602 |         this.ctgt = data.CTGT;
1603 |       }
1604 |       this.showCrossMap = true;
1605 |     });
1606 |     // 加入轨迹
1607 |     this.bus.$on('trackAddDatas', params => {
1608 |       const { list, basic } = params;
1609 |       // 添加轨迹点
1610 |       if (list && list.length) {
1611 |         const flist = [];
1612 |         list.map(el => {
1613 |           flist.push(dataManager.handleTrackData(el));
1614 |         });
1615 |         if (this.collectionTrackOpen) {
1616 |           this.$store.commit('fusion/addColTrackDatas', flist);
1617 |         } else {
1618 |           this.$store.commit('fusion/addTrackDatas', flist);
1619 |           if ((this.isTrackStatus || this.middleResultStatus) && this.showCollectPanel) {
1620 |             this.showTrackPanel = true;
1621 |             this.showCollectPanel = false;
1622 |             this.$store.commit('fusion/setCollectionTrackOpen', false);
1623 |             this.$store.commit('fusion/setOpenCaseIndexCode', '');
1624 |           }
1625 |         }
1626 |       }
1627 |       // 添加名单信息
1628 |       if (basic && !this.collectionTrackOpen) {
1629 |         if (basic.certificateNumber || basic.certificates) {
1630 |           this.$store.commit('fusion/setTrackIdentity', basic);
1631 |           this.$store.commit('fusion/setTrackIdentitySource', 'certificateNumber');
1632 |         } else if (basic.humanId) {
1633 |           this.$store.commit('fusion/setTrackIdentity', basic);
1634 |           this.$store.commit('fusion/setTrackIdentitySource', 'humanId');
1635 |         } else if (basic.plateNo) {
1636 |           this.$store.commit('fusion/setTrackIdentity', basic);
1637 |           this.$store.commit('fusion/setTrackIdentitySource', 'plateNo');
1638 |         }
1639 |         this.checkTrackPanel();
1640 |       } else if (basic && this.collectionTrackOpen) {
1641 |         this.$store.commit('fusion/updateCollectTrackIdentity', basic);
1642 |       }
1643 |       // 身份推荐
1644 |       if (list && list.length && !basic) {
1645 |         let trackData = this.trackData;
1646 |         let funcName = 'handleTrackIdentity';
1647 |         if (this.collectionTrackOpen) {
1648 |           trackData = this.collectionTrackData;
1649 |           funcName = 'handleCollectTrackIdentity';
1650 |         }
1651 |         if (trackData.trackEntrace) {
1652 |           this.$store.dispatch(`fusion/${funcName}`, Object.assign({ onice: true }, trackData.trackEntrace));
1653 |         } else if (this.$refs.fusionResultPanel) {
1654 |           this.$refs.fusionResultPanel.setTrackEntrace();
1655 |           this.$nextTick(() => {
1656 |             this.$store.dispatch(`fusion/${funcName}`, Object.assign({ onice: true }, trackData.trackEntrace));
1657 |           });
1658 |         }
1659 |       }
1660 |     });
1661 |     const that = this;
1662 |     // 地图轨迹卡片操作项点击事件
1663 |     this.bus.$on('handleCardOption', (item, cardData) => {
1664 |       if (this.collectionTrackOpen) {
1665 |         that.$refs.collectPanelRef.handleCardOption(item, cardData);
1666 |       } else if (this.showTrackPanel) {
1667 |         this.$refs.linshiTrack.$refs.trackDataList.handleCardOption(item, cardData);
1668 |       } else {
1669 |         this.$refs.linshiTrack.$refs.trackDataList.handleCardOption(item, cardData);
1670 |       }
1671 |     });
1672 |     // 加入轨迹时如果打开线索库列表单未进入线索库轨迹，切换为展示临时轨迹面板
1673 |     this.bus.$on('checkTrackPanel', this.checkTrackPanel);
1674 |     // 查询时关闭温数据任务面板
1675 |     this.bus.$on('closeWarmPanel', () => {
1676 |       if (this.$refs.coldListPanel) {
1677 |         this.$refs.coldListPanel.open = false;
1678 |         this.showCoolList = false;
1679 |       }
1680 |     });
1681 |     // 处理单独打开详情弹框（无结果页时，例如临时轨迹面板和轨迹线索库）
1682 |     this.bus.$on('openDetailPanelSingleEvent', (data = [], index = 0, from) => {
1683 |       if (!data.length) return;
1684 |       if (from === 'track') {
1685 |         this.isTrackDetail = true;
1686 |       } else {
1687 |         this.isTrackDetail = false;
1688 |       }
1689 |       // nextTick，否则isTrackDetail对按钮的隐藏不会生效
1690 |       this.$nextTick(() => {
1691 |         this.$refs.detailPanel && this.$refs.detailPanel.openDetailPanel(data, index);
1692 |       });
1693 |     });
1694 |     // 响应查看温数据结果
1695 |     this.bus.$on('checkColdTaskResult', searchId => {
1696 |       // 查看温数据结果，显示温数据任务面板
1697 |       if (this.$refs.coldListPanel) this.$refs.coldListPanel.open = true;
1698 | 
1699 |       this.currentTargetImgData.isCold = true;
1700 |       // 恢复温数据searchId和温数据查询参数
1701 |       this.currentTargetImgData.searchId = this.currentTargetImgData.searchColdId;
1702 |       this.currentTargetImgData.searchParams = this.currentTargetImgData.searchColdParams;
1703 |       this.currentTargetImgData.searchParams.searchId = this.currentTargetImgData.searchColdId;
1704 |       delete this.currentTargetImgData.searchColdId;
1705 |       delete this.currentTargetImgData.searchColdParams;
1706 | 
1707 |       this.startSearch();
1708 |       // 默认按照相似度倒序，未聚类搜索
1709 |       this.searchColdResult({
1710 |         searchId: searchId,
1711 |         searchScope: '1',
1712 |         sortField: 0
1713 |       });
1714 |     });
1715 |     this.bus.$on('handleFusionResSurround', val => this.handleFusionResSurround(val));
1716 |     // 应用内属性查询
1717 |     this.bus.$on('oneKeyFeatureSearch', this.oneKeyFeatureSearch);
1718 | 
1719 |     if (jumpUrlSearch) {
1720 |       // url跳转搜索
1721 |       jumpUrlSearchData = this.$G_decodeParame(jumpUrlSearchData);
1722 |       // if (pageTypeRoute) {
1723 |       //   jumpUrlSearchData = this.$G_decodeParame(jumpUrlSearchData);
1724 |       // }
1725 |       this.handleMessage(jumpUrlSearchData);
1726 |     } else {
1727 |       // callback跳转搜索
1728 |       if (top && top.window && top.window.onAppLoad) {
1729 |         const cbParams = this.appLoadParams();
1730 |         window.addEventListener('message', this.handleMessage, false);
1731 |         top.window.onAppLoad(cbParams);
1732 |       }
1733 |     }
1734 | 
1735 |     // 存储全局页面类型
1736 |     if (pageTypeRoute) store.commit('setPageTypeRoute', pageTypeRoute);
1737 |   },
1738 |   methods: {
1739 |     handleFusionResSurround(val) {
1740 |       this.$refs.fusionResultPanel.handleFusionResSurround(val);
1741 |     },
1742 |     // 获取当前浏览器，不支持的浏览器类型给出提示
1743 |     getBrowserType() {
1744 |       const ua = navigator.userAgent;
1745 |       if (
1746 |         !(
1747 |           (ua.includes('Chrome') && !ua.includes('OPR') && !ua.includes('Edg')) ||
1748 |           ua.includes('QihooBrowser') ||
1749 |           ua.includes('UOS')
1750 |         )
1751 |       ) {
1752 |         this.$message('建议使用chrome、奇安信、统信UOS浏览器');
1753 |       }
1754 |     },
1755 |     // callback跳转方式参数组装
1756 |     appLoadParams() {
1757 |       let cbParams = {
1758 |         componentId: 'bsearch',
1759 |         componentMenuId: 'bsearch_03',
1760 |         url: '/bsearch-web/fusion'
1761 |       };
1762 |       if (window.frameElement && window.frameElement.id) {
1763 |         const id = window.frameElement.id;
1764 |         switch (id) {
1765 |           case 'isearch_search_2':
1766 |             cbParams = {
1767 |               componentId: 'isearch',
1768 |               componentMenuId: 'search_2',
1769 |               url: '/isearch-web/image'
1770 |             };
1771 |             break;
1772 |           case '/isearch-web/image':
1773 |             cbParams = {
1774 |               url: '/isearch-web/image'
1775 |             };
1776 |             break;
1777 |           case 'isearch_search_7':
1778 |             cbParams = {
1779 |               componentId: 'isearch',
1780 |               componentMenuId: 'search_7',
1781 |               url: '/isearch-web/image/face'
1782 |             };
1783 |             break;
1784 |           case '/isearch-web/image/face':
1785 |             cbParams = {
1786 |               url: '/isearch-web/image/face'
1787 |             };
1788 |             break;
1789 |           case 'isearch_search_8':
1790 |             cbParams = {
1791 |               componentId: 'isearch',
1792 |               componentMenuId: 'search_8',
1793 |               url: '/isearch-web/image/body'
1794 |             };
1795 |             break;
1796 |           case '/isearch-web/image/body':
1797 |             cbParams = {
1798 |               url: '/isearch-web/image/body'
1799 |             };
1800 |             break;
1801 |           case 'isearch_search_9':
1802 |             cbParams = {
1803 |               componentId: 'isearch',
1804 |               componentMenuId: 'search_9',
1805 |               url: '/isearch-web/image/vehicle'
1806 |             };
1807 |             break;
1808 |           case '/isearch-web/image/vehicle':
1809 |             cbParams = {
1810 |               url: '/isearch-web/image/vehicle'
1811 |             };
1812 |             break;
1813 |           case 'isearch_search_10':
1814 |             cbParams = {
1815 |               componentId: 'isearch',
1816 |               componentMenuId: 'search_10',
1817 |               url: '/isearch-web/attr/face'
1818 |             };
1819 |             break;
1820 |           case '/isearch-web/attr/face':
1821 |             cbParams = {
1822 |               url: '/isearch-web/attr/face'
1823 |             };
1824 |             break;
1825 |           case 'isearch_search_11':
1826 |             cbParams = {
1827 |               componentId: 'isearch',
1828 |               componentMenuId: 'search_11',
1829 |               url: '/isearch-web/attr/body'
1830 |             };
1831 |             break;
1832 |           case '/isearch-web/attr/body':
1833 |             cbParams = {
1834 |               url: '/isearch-web/attr/body'
1835 |             };
1836 |             break;
1837 |           case 'isearch_search_12':
1838 |             cbParams = {
1839 |               componentId: 'isearch',
1840 |               componentMenuId: 'search_12',
1841 |               url: '/isearch-web/attr/vehicle'
1842 |             };
1843 |             break;
1844 |           case '/isearch-web/attr/vehicle':
1845 |             cbParams = {
1846 |               url: '/isearch-web/attr/vehicle'
1847 |             };
1848 |             break;
1849 |           case 'isearch_search_19':
1850 |             cbParams = {
1851 |               componentId: 'isearch',
1852 |               componentMenuId: 'search_19',
1853 |               url: '/isearch-web/image/nonvehicle'
1854 |             };
1855 |             break;
1856 |           case '/isearch-web/image/nonvehicle':
1857 |             cbParams = {
1858 |               url: '/isearch-web/image/nonvehicle'
1859 |             };
1860 |             break;
1861 |           case 'isearch_search_20':
1862 |             cbParams = {
1863 |               componentId: 'isearch',
1864 |               componentMenuId: 'search_20',
1865 |               url: '/isearch-web/attr/nonvehicle'
1866 |             };
1867 |             break;
1868 |           case '/isearch-web/attr/nonvehicle':
1869 |             cbParams = {
1870 |               url: '/isearch-web/attr/nonvehicle'
1871 |             };
1872 |             break;
1873 |         }
1874 |       }
1875 |       return cbParams;
1876 |     },
1877 |     async getHotDayRange() {
1878 |       const hotData = await apiBase.getHotDayRange();
1879 |       if (hotData && hotData.data && hotData.data.face) store.commit('initHotDay', hotData.data);
1880 |     },
1881 |     getSearchConfig() {
1882 |       // 优先从本地缓存中获取智图权限参数permissionData
1883 |       if (localStorage.getItem('fusionPermissionData')) {
1884 |         let permissionData = localStorage.getItem('fusionPermissionData');
1885 |         permissionData = typeof permissionData === 'string' ? JSON.parse(permissionData) : permissionData;
1886 | 
1887 |         store.commit('setPermissionData', permissionData);
1888 |       }
1889 | 
1890 |       apiBase
1891 |         .getSearchConfig({
1892 |           moduleIdList: [
1893 |             'common', // 通用配置
1894 |             'fusion' // 智图研判
1895 |           ]
1896 |         })
1897 |         .then(({ data }) => {
1898 |           if (data) {
1899 |             // 获取销售项控权内容
1900 |             this.getModuleSale(true);
1901 |             // 获取鉴权参数
1902 |             config.getBtnAuth().then(result => {
1903 |               const authMap = result.data.authMap;
1904 |               if (authMap) {
1905 |                 this.$store.commit('initBtnConfig', authMap);
1906 |               }
1907 |             });
1908 | 
1909 |             store.commit('initsearchConfig', data);
1910 |             this.currentTargetImgData.showRightPanel = data.fusion.rightDetail;
1911 |             this.showAttrRightPanel = data.fusion.rightDetail;
1912 |           }
1913 |           // 初始化时web端先调起平台播放器，避免后续预览回放延迟
1914 |           this.$nextTick(() => {
1915 |             if (
1916 |               this.searchConfig &&
1917 |               this.searchConfig.pageConfig &&
1918 |               this.searchConfig.pageConfig.fusion &&
1919 |               this.searchConfig.pageConfig.fusion.playerType === 'platform'
1920 |             ) {
1921 |               if (!this.$store.state.isKHD) {
1922 |                 // eslint-disable-next-line
1923 |                 console.log('not KHD');
1924 |                 this._csPlayerPlayWeb('preview', [], true);
1925 |               }
1926 |             }
1927 |           });
1928 |         });
1929 |       FusionApi.queryRightDetailConfig().then(({ data }) => {
1930 |         if (data) {
1931 |           const newSearchConfig = this.searchConfig;
1932 |           newSearchConfig.rightDetailConfig = data;
1933 |           store.commit('refreshSearchConfig', newSearchConfig);
1934 |         }
1935 |       });
1936 |     },
1937 |     // 获取销售项控权内容
1938 |     getModuleSale(getUserInfoFlag = false) {
1939 |       apiBase.getModuleSale().then(res => {
1940 |         if (res && res.data) {
1941 |           // 获取用户数据权限
1942 |           if (getUserInfoFlag) this.getUserInfo(res.data);
1943 | 
1944 |           store.commit('setModuleSale', res.data);
1945 |           // 根据销售项设置是否支持室内轨迹
1946 |           this.$store.commit('fusion/setIndoorTrack', res.data.indoorTrajectory);
1947 |         }
1948 |       });
1949 |     },
1950 |     // 获取向下兼容配置项
1951 |     getCompatibleConfig() {
1952 |       apiBase.getCompatibleConfig().then(res => {
1953 |         if (res && res.data) {
1954 |           store.commit('setCompatible', res.data);
1955 |         }
1956 |       });
1957 |     },
1958 |     // 获取侧脸角度阈值
1959 |     getSideFaceAngle() {
1960 |       apiBase.getSideFaceAngle().then(res => {
1961 |         if (res && res.data) {
1962 |           const { sideFaceAngle = 55 } = res.data;
1963 |           store.commit('setSideFaceAngle', Number(sideFaceAngle));
1964 |         }
1965 |       });
1966 |     },
1967 |     // 获取加入档案权限（聚档下未聚档抓拍）
1968 |     getUserRole() {
1969 |       apiBase.getUserRole().then(res => {
1970 |         if (res && res.data) {
1971 |           store.commit('setUserRole', res.data);
1972 |         }
1973 |       });
1974 |     },
1975 |     // 获取用户数据权限
1976 |     getUserInfo(moduleSale) {
1977 |       config.getUserInfo().then(res => {
1978 |         if (res && res.data) {
1979 |           store.commit('setUserInfo', res.data);
1980 | 
1981 |           // 设置全局统一的鉴权参数（销售项+系统管理配置项+用户数据权限）
1982 |           this.setPermissionData(moduleSale, res.data);
1983 |         }
1984 |       });
1985 |     },
1986 |     keyupSearch() {
1987 |       this.handleSearch();
1988 |     },
1989 |     switchPanels(dataList) {
1990 |       dataList.map(data => {
1991 |         const { name, open } = data;
1992 |         switch (name) {
1993 |           case 'videoSelect':
1994 |             // 视频解析选点面板
1995 |             this.showVideoSelect = open;
1996 |             break;
1997 |           case 'result':
1998 |             if (this.showSearchResult) {
1999 |               this.minimizeResult = !open;
2000 |             }
2001 |             break;
2002 |           case 'condition':
2003 |             this.collapse = open ? 'show' : 'hide';
2004 |             break;
2005 |           case 'track':
2006 |             this.showTrackPanel = open;
2007 |             break;
2008 |           case 'middleResult':
2009 |             if (this.middleResultStatus) {
2010 |               this.$store.commit('fusion/setMiddleResultStatus', false);
2011 |               this.exitTrackStatus();
2012 |             }
2013 |             break;
2014 |           case 'crossMap':
2015 |             this.showCrossMap = open;
2016 |             break;
2017 |           case 'traceList':
2018 |             this.showTaskPanel = open;
2019 |             break;
2020 |           case 'collectPanel':
2021 |             this.showCollectPanel = open;
2022 |             break;
2023 |         }
2024 |       });
2025 |     },
2026 |     changeDisabled(val) {
2027 |       if (val && this.showSearchResult) {
2028 |         this.isDisabled = true;
2029 |       } else {
2030 |         this.isDisabled = false;
2031 |       }
2032 |     },
2033 |     handleHasError(val) {
2034 |       this.isError = val;
2035 |     },
2036 |     changeActiveTabName(key) {
2037 |       this.closeTagShow = key !== 'feature';
2038 |       if (this.currentTargetImgData.isAttrallSearch === true || this.currentTargetImgData.isAttrallSearch === false) {
2039 |         if (key === 'image') {
2040 |           // 补全全量属性查询结果
2041 |           this.currentTargetImgData.isAttrallSearch = true;
2042 |           this.attrCurrentResult =
2043 |             this.currentTargetAttrData[this.currentTargetType] &&
2044 |             this.currentTargetAttrData[this.currentTargetType].result;
2045 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'result', this.attrallResult);
2046 |         } else if (key === 'feature') {
2047 |           // 删除全量属性查询结果
2048 |           this.currentTargetImgData.isAttrallSearch = false;
2049 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'result', this.attrCurrentResult);
2050 |         }
2051 |         if (this.handleShowsecondaryPage) {
2052 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'secondaryPage', false);
2053 |         }
2054 |         return;
2055 |       }
2056 |       store.commit('fusion/setActiveName', key);
2057 | 
2058 |       // 二级详情页切换tab时，二级详情页标记位置为false
2059 |       if (key === 'feature' && this.handleShowsecondaryPage && this.fusionResultPanelType === 'vehicle') {
2060 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'secondaryPage', false);
2061 |       } else if (key === 'image' && this.handleShowsecondaryPage && this.fusionResultPanelType === 'vehicle') {
2062 |         this.$set(this.currentTargetImgData, 'secondaryPage', false);
2063 |       }
2064 | 
2065 |       // 搜图切换到属性tab（若温数据查询中，则关闭温数据查询）
2066 |       if (key === 'feature' && this.currentTargetImgData.isCold && this.showColdLoading) {
2067 |         this.notWaitColdSearching();
2068 |       }
2069 |     },
2070 |     // 点击工具栏
2071 |     handleToolAction({ key = '' }) {
2072 |       this.showToolList = false;
2073 |       if (key === 'coolList')
2074 |         if (this.$refs.coldListPanel) {
2075 |           this.$refs.coldListPanel.open = true;
2076 |           // this.collapse = 'hide'; // 隐藏条件面板
2077 |           this.showCoolListAlone = true;
2078 |           this.showCoolList = true;
2079 |         }
2080 |       if (key === 'opentrace') {
2081 |         this.showTaskPanel = true;
2082 |       }
2083 |     },
2084 |     // 返回图片，returnSingle为true的时候，返回imgs数组
2085 |     cauImgUrl(index, returnSingle = false) {
2086 |       const { currentTargets = [] } = this.fusion;
2087 |       let imgUrl = '';
2088 |       if (
2089 |         currentTargets &&
2090 |         currentTargets[index] &&
2091 |         currentTargets[index].image &&
2092 |         currentTargets[index].image.imgs &&
2093 |         currentTargets[index].image.imgs.length
2094 |       ) {
2095 |         imgUrl = currentTargets[index].image.imgs[0].bkgUrl || currentTargets[index].image.imgs[0].targetUrl;
2096 |         if (returnSingle) return currentTargets[index].image.imgs; // 可能会有多张图片上传
2097 |       }
2098 |       return imgUrl;
2099 |     },
2100 |     cauImgRect(index) {
2101 |       // 人脸/人体默认用picUrl小图，h-img-snippets-thumbnail组件默认显示全图，组件不重新渲染
2102 |       let imgRect = {
2103 |         x: '0',
2104 |         width: '1',
2105 |         y: '0',
2106 |         height: '1',
2107 |         w: '1',
2108 |         h: '1',
2109 |         top: '0',
2110 |         left: '0'
2111 |       };
2112 |       const { currentTargets = [] } = this.fusion;
2113 |       if (
2114 |         currentTargets &&
2115 |         currentTargets[index] &&
2116 |         currentTargets[index].image &&
2117 |         currentTargets[index].image.imgs &&
2118 |         currentTargets[index].image.imgs.length
2119 |       ) {
2120 |         imgRect =
2121 |           currentTargets[index].image.imgs[0].recommendFaceRect || currentTargets[index].image.imgs[0].rect || imgRect;
2122 | 
2123 |         if (typeof imgRect === 'string') {
2124 |           if (imgRect.includes('{')) {
2125 |             imgRect = JSON.parse(imgRect);
2126 |           } else {
2127 |             imgRect = {
2128 |               width: imgRect.split(',')[0],
2129 |               height: imgRect.split(',')[1],
2130 |               y: imgRect.split(',')[2],
2131 |               x: imgRect.split(',')[3]
2132 |             };
2133 |           }
2134 |         }
2135 |         if (imgRect.width && imgRect.width > 1) {
2136 |           imgRect.width = imgRect.width / 1000;
2137 |           imgRect.height = imgRect.height / 1000;
2138 |           imgRect.x = imgRect.x / 1000;
2139 |           imgRect.y = imgRect.y / 1000;
2140 |         } else if (!Number(imgRect.width) || !Number(imgRect.height)) {
2141 |           // 车辆非正常坐标默认也是显示全图，组件不重新渲染
2142 |           imgRect = {
2143 |             x: '0',
2144 |             width: '1',
2145 |             y: '0',
2146 |             height: '1',
2147 |             w: '1',
2148 |             h: '1',
2149 |             top: '0',
2150 |             left: '0'
2151 |           };
2152 |         }
2153 |       }
2154 |       return imgRect;
2155 |     },
2156 |     // 新开条件面板
2157 |     addTarget() {
2158 |       if (this.trackData.trackList && this.trackData.trackList.length) {
2159 |         store.commit('fusion/saveTargetTrackData');
2160 |       }
2161 |       this.currentTargets.push({ img: {}, feature: {} });
2162 |       store.commit('fusion/setTargetInitData');
2163 | 
2164 |       // 关闭轨迹弹框
2165 |       this.$store.dispatch('TSupdateWindow', {
2166 |         type: 'track',
2167 |         windowInfo: null
2168 |       });
2169 |       this.openMapTrack = false;
2170 | 
2171 |       this.$nextTick(() => {
2172 |         store.commit('fusion/setIndex', this.currentTargets.length - 1);
2173 |         this.backPageNo = 1;
2174 |         this.addTargetIndex = !this.addTargetIndex;
2175 |         var div = document.getElementsByClassName('img-conditions-container')[0];
2176 |         div.scrollTop = div.scrollHeight;
2177 |       });
2178 |     },
2179 |     // 删除条件面板
2180 |     deleteTarget(index) {
2181 |       this.currentTargets.splice(index, 1);
2182 |       // 将设置currentIndex的逻辑合并到deleteTargetData里了，否则轨迹的显示会有问题
2183 |       store.commit('fusion/deleteTargetData', index);
2184 | 
2185 |       // 切换面板的时候，若目标面板是聚档状态，则恢复初始化展示状态
2186 |       const { length } = this.currentTargets;
2187 |       if (
2188 |         this.currentTargets[length - 1] &&
2189 |         this.currentTargets[length - 1].img &&
2190 |         this.currentTargets[length - 1].img.searchMode === 'cluster'
2191 |       ) {
2192 |         this.currentTargets[length - 1].img.displayMode = 'small';
2193 |       }
2194 |       // 删除面板时，读取背影/侧脸研判框数据
2195 |       const { currentTargets, currentTargetIndex } = this.fusion;
2196 |       this.recognitionResult = currentTargets && currentTargets[currentTargetIndex].recognitionResult;
2197 |       // 判断是否切换了面板，用于背影侧脸查询避免重查
2198 |       this.isImgTargetChanged = true;
2199 |       this.backPageNo = currentTargets && currentTargets[currentTargetIndex].backPageNo;
2200 |       // 如果当前是温数据，且状态为未结束，开启轮询状态
2201 |       if (
2202 |         this.currentTargetImgData.isCold &&
2203 |         this.currentTargetImgData.progress &&
2204 |         this.currentTargetImgData.progress !== 1
2205 |       ) {
2206 |         this.refreshTaskStatus();
2207 |       }
2208 | 
2209 |       if (index === this.currentTargetIndex) {
2210 |         // 关闭轨迹弹框
2211 |         this.$store.dispatch('TSupdateWindow', {
2212 |           type: 'track',
2213 |           windowInfo: null
2214 |         });
2215 |         this.openMapTrack = false;
2216 |       }
2217 |     },
2218 |     // 切换条件面板
2219 |     changeTarget(index) {
2220 |       // 切换面板的时候，若目标面板是聚档状态，则恢复初始化展示状态
2221 |       if (
2222 |         this.currentTargets[index] &&
2223 |         this.currentTargets[index].img &&
2224 |         this.currentTargets[index].img.searchMode === 'cluster'
2225 |       ) {
2226 |         this.currentTargets[index].img.displayMode = 'small';
2227 |       }
2228 |       store.commit('fusion/setIndex', index);
2229 |       const { currentTargets, currentTargetIndex } = this.fusion;
2230 |       // 切换面板时，读取背影/侧脸研判框数据
2231 |       this.recognitionResult = currentTargets[currentTargetIndex].recognitionResult;
2232 |       // 切换面板时如果轨迹面板打开，且新目标无轨迹数据，关闭轨迹面板
2233 |       if (this.showTrackPanel && !this.trackData.trackList.length) {
2234 |         this.showTrackPanel = false;
2235 |       }
2236 |       // 判断是否切换了面板，用于背影侧脸查询避免重查
2237 |       this.isImgTargetChanged = true;
2238 |       // 切换面板时，读取背影/侧脸研判框页数
2239 |       this.backPageNo = currentTargets[currentTargetIndex].backPageNo;
2240 |       // 如果当前是温数据，且状态为未结束，开启轮询状态
2241 |       if (
2242 |         this.currentTargetImgData.isCold &&
2243 |         this.currentTargetImgData.progress &&
2244 |         this.currentTargetImgData.progress !== 1
2245 |       ) {
2246 |         this.refreshTaskStatus();
2247 |       }
2248 |       if (
2249 |         this.currentTargetImgData.searchColdId &&
2250 |         !this.currentTargetImgData.isCold &&
2251 |         this.currentTargetImgData.progress &&
2252 |         this.currentTargetImgData.progress !== 1
2253 |       ) {
2254 |         this.refreshTaskStatus(this.currentTargetImgData.searchColdId);
2255 |       }
2256 | 
2257 |       // 关闭轨迹弹框
2258 |       this.$store.dispatch('TSupdateWindow', {
2259 |         type: 'track',
2260 |         windowInfo: null
2261 |       });
2262 |       this.openMapTrack = false;
2263 | 
2264 |       this.$nextTick(() => {
2265 |         // 二级详情页切换条件面板时，二级详情页标记位置为false
2266 |         if (
2267 |           this.currentTargetActiveName === 'feature' &&
2268 |           this.handleShowsecondaryPage &&
2269 |           this.fusionResultPanelType === 'vehicle'
2270 |         ) {
2271 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'secondaryPage', false);
2272 |         } else if (
2273 |           this.currentTargetActiveName === 'image' &&
2274 |           this.handleShowsecondaryPage &&
2275 |           this.fusionResultPanelType === 'vehicle'
2276 |         ) {
2277 |           // 关闭二级详情页和恢复分组模式
2278 |           if (this.$refs.fusionResultPanel) {
2279 |             this.$set(this.currentTargetImgData, 'groupMode', this.$refs.fusionResultPanel.groupMode);
2280 |           }
2281 | 
2282 |           this.$set(this.currentTargetImgData, 'secondaryPage', false);
2283 |         }
2284 |       });
2285 |     },
2286 |     handleSwitchRightPanel(val) {
2287 |       if (this.currentTargetActiveName === 'feature') {
2288 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'showRightPanel', val);
2289 |       } else {
2290 |         this.currentTargetImgData.showRightPanel = val;
2291 |       }
2292 |     },
2293 |     // 查询（搜图/属性）
2294 |     handleSearch() {
2295 |       console.log('handleSearch**');
2296 |       
2297 |       // this.showCollectPanel = false;
2298 |       // trackJmpSearch -- 跳转查轨迹时用到，不退出轨迹描绘
2299 |       if (this.isTrackStatus && !this.showCollectPanel && !this.trackJmpSearch) {
2300 |         // 若在轨迹描绘状态中，则退出轨迹描绘
2301 |         this.$store.commit('fusion/setIntoTrackStatus', false);
2302 |         this.$store.commit('fusion/setTrackEntrace', null);
2303 |         this.exitTrackStatus();
2304 |       }
2305 |       this.trackJmpSearch = false;
2306 |       // 清除侧脸背影的右侧缺省页面
2307 |       this.$set(this.currentTargetImgData, 'showNoRecognition', false);
2308 |       if (this.$refs.imgConditionPanel) this.$refs.imgConditionPanel.setTimeColdOrHot(); // 重新查询得时候重新判断下时间是否是冷数据/温数据
2309 |       if (this.middleResultStatus && !this.showCollectPanel) {
2310 |         // 退出结果三列状态
2311 |         this.$store.commit('fusion/setMiddleResultStatus', false);
2312 |         this.exitTrackStatus();
2313 |       }
2314 |       if (this.showCollectPanel && !this.middleResultStatus && !this.isTrackStatus) {
2315 |         this.$store.commit('fusion/setMiddleResultStatus', true);
2316 |       }
2317 |       if (this.minimizeResult) this.minimizeResult = false;
2318 |       // 每次查询清空导出内容
2319 |       this.exportConditions = {};
2320 |       if (this.currentTargetActiveName === 'image' || this.currentTargetImgData.isAttrallSearch) {
2321 |         this.handleImgSearch();
2322 |       } else if (this.currentTargetActiveName === 'feature' && !this.currentTargetImgData.isAttrallSearch) {
2323 |         this.closeTagShow = !this.closeTagShow;
2324 |         this.handleAttrSearch(undefined, undefined, undefined, undefined, true);
2325 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'showRightPanel', this.showAttrRightPanel);
2326 |       }
2327 | 
2328 |       // 关闭视频智能解析面板
2329 |       if (this.showVideoSelect) this.showVideoSelect = false;
2330 |       // 关闭已选点位面板
2331 |       this.showSelectedPanel = false;
2332 |       this.bus.$emit('closeSurroundPanel');
2333 |     },
2334 |     // 重置条件恢复初始化(追踪也用到)
2335 |     handleReset() {
2336 |       if (this.currentTargetActiveName === 'feature' && !this.currentTargetImgData.isAttrallSearch) {
2337 |         // 属性（非全量属性查询）
2338 |         this.isReset = !this.isReset;
2339 |       } else if (this.currentTargetActiveName === 'image' || this.currentTargetImgData.isAttrallSearch) {
2340 |         // 搜图/全量属性查询
2341 |         const { pageConfig = {} } = this.searchConfig || {};
2342 |         const { faceSimilarity } = pageConfig[this.pageType];
2343 |         // 重置条件面板
2344 |         store.commit('fusion/resetImgCondition', {
2345 |           minSimilar: Number(faceSimilarity) * 100
2346 |         });
2347 |         // 全量属性查询还要额外处理（回到视图搜索）
2348 |         if (this.currentTargetImgData.isAttrallSearch) {
2349 |           store.commit('fusion/setActiveName', 'image');
2350 |           this.currentTargetImgData.isAttrallSearch = null;
2351 |           this.attrCurrentResult = null;
2352 |           // 清除全量属性查询的各个类型数据
2353 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'result', null);
2354 |         }
2355 | 
2356 |         // 清空当前面板对象
2357 |         const { currentTargets, currentTargetIndex } = this;
2358 |         this.$set(currentTargets[currentTargetIndex], 'img', {});
2359 |         // 清除背影侧脸回填imgList数据
2360 |         this.$set(this.currentTargetImgData, 'strategyAnalysis', {});
2361 |         this.backPageNo = 1;
2362 |         // 清除侧脸背影的右侧缺省页面
2363 |         this.$set(this.currentTargetImgData, 'showNoRecognition', false);
2364 |         // 清空地图选点
2365 |         this.bus.$emit('clearFeature');
2366 |         // 清空视图时间
2367 |         this.$refs.imgConditionPanel.resetTimeValue();
2368 |         // 清空视图相似度
2369 |         this.$refs.imgConditionPanel.resetSimilarity();
2370 |       }
2371 |       // 关闭已选点位面板
2372 |       this.showSelectedPanel = false;
2373 |     },
2374 |     // 计算时间间隔（天）
2375 |     getDaysBetween(dateString1, dateString2) {
2376 |       const startDate = Date.parse(dateString1);
2377 |       const endDate = Date.parse(dateString2);
2378 |       const days = (endDate - startDate) / (24 * 60 * 60 * 1000);
2379 |       return days;
2380 |     },
2381 |     // 属性全类型查询（人脸、人体、车辆、非机动车、体态）
2382 |     async handleAllAttrSearch(dataType, page, sort) {
2383 |       const that = this;
2384 |       if (!(page && page.isPageSearch)) {
2385 |         store.commit('fusion/setCurrentTargetCommonCondition', {
2386 |           commonTime: this.timeValue,
2387 |           commonTimeRange: JSON.parse(JSON.stringify(this.timeRange)),
2388 |           commonResource: this.selectedPoint
2389 |         });
2390 |         if (this.currentTargetType === 'vehicle') {
2391 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'groupMode', 'none');
2392 |           this.$set(this.currentTargetAttrData[this.currentTargetType], 'secondaryPage', false);
2393 |         }
2394 |       }
2395 |       let timeValue = this.timeValue;
2396 |       let timeRange = null;
2397 |       let selectPoint = null;
2398 |       if (page && page.isPageSearch) {
2399 |         const temp = this.fusion.currentTargets[this.currentTargetIndex].feature;
2400 |         if (
2401 |           temp &&
2402 |           temp[this.currentTargetType] &&
2403 |           temp[this.currentTargetType].commonCondition &&
2404 |           temp[this.currentTargetType].commonCondition.commonTime &&
2405 |           temp[this.currentTargetType].commonCondition.commonTime.length &&
2406 |           temp[this.currentTargetType].commonCondition.commonTime[0] &&
2407 |           temp[this.currentTargetType].commonCondition.commonTime[1]
2408 |         ) {
2409 |           timeValue = temp[this.currentTargetType].commonCondition.commonTime;
2410 |         }
2411 |         if (
2412 |           temp &&
2413 |           temp[this.currentTargetType] &&
2414 |           temp[this.currentTargetType].commonCondition &&
2415 |           temp[this.currentTargetType].commonCondition.commonResource &&
2416 |           temp[this.currentTargetType].commonCondition.commonResource.length
2417 |         ) {
2418 |           selectPoint = temp[this.currentTargetType].commonCondition.commonResource;
2419 |         }
2420 |         if (
2421 |           temp[this.currentTargetType].commonCondition.commonTimeRange &&
2422 |           temp[this.currentTargetType].commonCondition.commonTimeRange.length &&
2423 |           temp[this.currentTargetType].commonCondition.commonTimeRange[0] &&
2424 |           temp[this.currentTargetType].commonCondition.commonTimeRange[1] &&
2425 |           (temp[this.currentTargetType].commonCondition.commonTimeRange[0].length ||
2426 |             temp[this.currentTargetType].commonCondition.commonTimeRange[1].length)
2427 |         ) {
2428 |           timeRange = temp[this.currentTargetType].commonCondition.commonTimeRange;
2429 |         }
2430 |       } else {
2431 |         timeRange = this.timeRange;
2432 |       }
2433 |       const { cameraIndexCodes, orgIndexCodes, crossingIndexCodes } = selectPoint
2434 |         ? this.getPoint(selectPoint)
2435 |         : this.getPoint();
2436 |       let collectTime = [];
2437 |       // 选择时间段查询
2438 |       if (timeRange && timeRange.length && timeRange[0].length) {
2439 |         timeRange.map(time => {
2440 |           if (time.length) {
2441 |             const timeFilter = this.dealDate([timeValue[0], timeValue[1]], time);
2442 |             collectTime = collectTime.concat(timeFilter);
2443 |           }
2444 |         });
2445 |       } else {
2446 |         collectTime = [timeValue[0], timeValue[1]];
2447 |       }
2448 |       const param = {
2449 |         conditions: [],
2450 |         pageNo: page && page.pageNo ? page.pageNo : 1,
2451 |         pageSize: page && page.pageSize ? page.pageSize : 20,
2452 |         sort: [{ collectTime: sort === 'timeAsc' ? 'asc' : 'desc' }, { score: 'desc' }]
2453 |       };
2454 |       // const { faceSale, bodySale, vehicleSale, nonvehicleSale, builtSale } = this.moduleSale;
2455 |       // const { noface = false, nobody = false, novehicle = false, nononmotor = false, nobuilt = false } =
2456 |       //   this.userInfo.userRoleMap || {};
2457 |       // const { attrSubSearchType } = this.searchConfig.pageConfig.fusion;
2458 |       if (!dataType) {
2459 |         if (this.permissionData.feature.faceSale)
2460 |           param.conditions.push({
2461 |             collectTime,
2462 |             dataType: 100201,
2463 |             cameraIndexCodes,
2464 |             orgIndexCodes
2465 |           });
2466 |         if (this.permissionData.feature.bodySale)
2467 |           param.conditions.push({
2468 |             collectTime,
2469 |             dataType: 100202,
2470 |             cameraIndexCodes,
2471 |             orgIndexCodes
2472 |           });
2473 |         if (this.permissionData.feature.vehicleSale)
2474 |           param.conditions.push({
2475 |             collectTime,
2476 |             dataType: 200201,
2477 |             cameraIndexCodes,
2478 |             orgIndexCodes,
2479 |             crossingIndexCodes
2480 |           });
2481 |         if (this.permissionData.feature.nonvehicleSale)
2482 |           param.conditions.push({
2483 |             collectTime,
2484 |             dataType: 200203,
2485 |             cameraIndexCodes,
2486 |             orgIndexCodes,
2487 |             crossingIndexCodes
2488 |           });
2489 |         if (this.permissionData.feature.builtSale)
2490 |           param.conditions.push({
2491 |             collectTime,
2492 |             dataType: 100203,
2493 |             cameraIndexCodes,
2494 |             orgIndexCodes
2495 |           });
2496 |       } else {
2497 |         param.conditions.push({
2498 |           collectTime,
2499 |           dataType: Number(dataType),
2500 |           cameraIndexCodes,
2501 |           orgIndexCodes,
2502 |           crossingIndexCodes: Number(dataType) === 200201 || Number(dataType) === 200203 ? crossingIndexCodes : []
2503 |         });
2504 |       }
2505 |       this.exportConditions = JSON.parse(JSON.stringify(param));
2506 |       this.startSearch();
2507 |       const result = await feature.disperse(param).catch(() => {
2508 |         return {};
2509 |       });
2510 |       // 开发环境模拟体态数据
2511 |       // if (process.env.NODE_ENV === 'development') {
2512 |       //   if (result && result.data) {
2513 |       //     result.data.result.push(builtMockDisperseResult);
2514 |       //   } else {
2515 |       //     result.data = {
2516 |       //       result: [builtMockDisperseResult]
2517 |       //     };
2518 |       //   }
2519 |       // }
2520 |       if (result && result.data) {
2521 |         let flag = result.data;
2522 |         if (dataType) {
2523 |           const resultTemp = this.currentTargetAttrData[this.currentTargetType].result;
2524 |           let num = 0;
2525 |           resultTemp.result.map((item, index) => {
2526 |             if (item.dataType === dataType) {
2527 |               num = index;
2528 |             }
2529 |           });
2530 |           resultTemp.result.splice(num, 1, result.data.result[0]);
2531 |           flag = resultTemp;
2532 |           that.$set(that.currentTargetAttrData[that.currentTargetType], 'result', resultTemp);
2533 |         } else {
2534 |           this.currentTargetAttrData &&
2535 |             this.currentTargetAttrData[this.currentTargetType] &&
2536 |             this.$set(this.currentTargetAttrData[this.currentTargetType], 'result', result.data);
2537 |         }
2538 |         if (result.data.result && result.data.result.length) {
2539 |           result.data.result.map((item, index) => {
2540 |             if (index === 0 && item.total > 0) {
2541 |               that.$set(that.currentTargetAttrData[that.currentTargetType], 'subType', item.dataType);
2542 |             }
2543 |           });
2544 |         }
2545 |         this.attrallResult = flag;
2546 |       }
2547 |       this.$nextTick(() => {
2548 |         this.endSearch();
2549 |       });
2550 |     },
2551 |     // 删除图片目标
2552 |     delImg() {
2553 |       const { currentTargets, currentTargetIndex } = this.fusion;
2554 |       const imgs = currentTargets[currentTargetIndex].image.imgs || [];
2555 |       // 删除图片目标为空时，恢复初始化数据
2556 |       if (!imgs.length) {
2557 |         const { currentTargets: currenttargets, currentTargetIndex: currenttargetindex } = this;
2558 | 
2559 |         // 清空图片时保留全量属性查询参数
2560 |         const { isAttrallSearch = null } = currenttargets[currentTargetIndex].img;
2561 |         this.$set(currenttargets[currenttargetindex], 'img', { isAttrallSearch });
2562 | 
2563 |         // 图片清空时，清除关联关系
2564 |         store.commit('fusion/setRelation', {});
2565 |         // 用于背影侧脸上传图片时清除上一次搜索时imgList缓存数据
2566 |         this.$set(this.currentTargetImgData, 'strategyAnalysis', {});
2567 |       }
2568 |     },
2569 |     // 翻页操作（搜图/属性）
2570 |     changePage(val) {
2571 |       if (this.currentTargetActiveName === 'image') {
2572 |         this.handleImgChangePage(val);
2573 |       } else if (this.currentTargetActiveName === 'feature') {
2574 |         if (this.currentTargetAttrData[this.currentTargetType].subType !== '888888') {
2575 |           this.handleHasError(false);
2576 |           this.handleAttrChangePage(val);
2577 |         }
2578 |       }
2579 |     },
2580 |     // 排序操作（搜图/属性）
2581 |     changeSort(sortKey, obj) {
2582 |       const that = this;
2583 |       if (this.currentTargetActiveName === 'image') {
2584 |         this.$set(this.currentTargetImgData, 'sortMode', sortKey);
2585 | 
2586 |         const { resultData } = this.$refs.fusionResultPanel;
2587 |         if (resultData && resultData.type === 'collect') {
2588 |           // 采集数据排序
2589 |           this.handleCollectInfoResultSort(sortKey);
2590 |         } else {
2591 |           // 排序后恢复默认看抓拍
2592 |           this.$refs.fusionResultPanel.setSnapModeType('snapMode');
2593 |           if (!this.currentTargetImgData.multiImgSearchFlag) {
2594 |             this.$set(this.currentTargetImgData, 'snapModeType', 'snapMode');
2595 |           } else {
2596 |             this.$set(
2597 |               this.currentTargetImgData.multiImgResult[this.currentTargetImgData.multiImgType],
2598 |               'snapModeType',
2599 |               'snapMode'
2600 |             );
2601 |           }
2602 | 
2603 |           this.handleImgResultSort(sortKey);
2604 |         }
2605 |       } else if (this.currentTargetActiveName === 'feature') {
2606 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'sortMode', sortKey);
2607 |         const page = {
2608 |           pageNo: 1,
2609 |           pageSize: obj.pageSize,
2610 |           isPageSearch: true
2611 |         };
2612 |         if (
2613 |           this.currentTargetType === 'vehicle' &&
2614 |           this.currentTargetAttrData[this.currentTargetType].groupMode !== 'none'
2615 |         ) {
2616 |           this.handleAttrGroup({}, page, sortKey, this.currentTargetAttrData[this.currentTargetType].groupMode);
2617 |         } else {
2618 |           if (
2619 |             that.currentTargetAttrData[that.currentTargetType] &&
2620 |             that.currentTargetAttrData[that.currentTargetType].subType === '888888'
2621 |           ) {
2622 |             this.handleEtcAttrSearch({}, page, sortKey);
2623 |           } else {
2624 |             if (this.currentTargetImgData && this.currentTargetImgData.isAttrallSearch) {
2625 |               this.handleAllAttrSearch(that.currentTargetAttrData[that.currentTargetType].subType, page, sortKey);
2626 |             } else {
2627 |               this.handleAttrSearch({}, page, sortKey);
2628 |             }
2629 |           }
2630 |         }
2631 |       }
2632 |     },
2633 |     // 采集数据排序（信息网和etc）
2634 |     async handleCollectInfoResultSort(sortKey) {
2635 |       const { multiImgSearchFlag, type, certificateNumber, plateNum } = this.currentTargetImgData;
2636 |       const { trackExtraData } = this.fusion;
2637 | 
2638 |       this.startSearch();
2639 |       if (multiImgSearchFlag) {
2640 |         // 多类型搜图
2641 |         const { multiImgResult } = this.currentTargetImgData;
2642 |         const searchParams = multiImgResult.collect.searchParams;
2643 |         const searchParamsCopy = JSON.parse(JSON.stringify(searchParams));
2644 |         searchParamsCopy.order = sortKey === 'timeAsc' ? 'asc' : 'desc';
2645 |         const result = await FusionApi.etcTextSearch(searchParamsCopy).catch(() => {
2646 |           return {};
2647 |         });
2648 |         if (result && result.data) this.$set(multiImgResult.collect, 'result', result.data);
2649 |       } else {
2650 |         // 单类型搜图
2651 |         const searchParams = {
2652 |           collectTime: [this.timeValue[0], this.timeValue[1]]
2653 |         };
2654 |         if (type === 'face' || type === 'body') {
2655 |           searchParams.dataTypeCodes = trackExtraData;
2656 |           searchParams.certificateNumber = [certificateNumber];
2657 |         } else if (type === 'vehicle') {
2658 |           searchParams.dataTypeCodes = [200204];
2659 |           searchParams.plateNo = plateNum;
2660 |         }
2661 |         searchParams.order = sortKey === 'timeAsc' ? 'asc' : 'desc';
2662 |         const result = await FusionApi.etcTextSearch(searchParams).catch(() => {
2663 |           return {};
2664 |         });
2665 |         if (result && result.data) this.$set(this.currentTargetImgData, 'result', result.data);
2666 |       }
2667 | 
2668 |       this.$nextTick(() => {
2669 |         this.endSearch();
2670 |       });
2671 |     },
2672 |     changeSortMode(sortKey) {
2673 |       if (this.currentTargetActiveName === 'image') {
2674 |         this.$set(this.currentTargetImgData, 'sortMode', sortKey);
2675 |       } else if (this.currentTargetActiveName === 'feature') {
2676 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'sortMode', sortKey);
2677 |       }
2678 |     },
2679 |     changeModeInSnap(mode) {
2680 |       if (this.currentTargetActiveName === 'image') {
2681 |         this.$set(this.currentTargetImgData, 'displayMode', mode);
2682 |       } else if (this.currentTargetActiveName === 'feature') {
2683 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'displayMode', mode);
2684 |       }
2685 |     },
2686 |     // 获取fusionResultPanel当前tab
2687 |     changeActiveTab(tab) {
2688 |       if (tab === 'collect' || tab === '888888') {
2689 |         this.isXxwTab = true;
2690 |       } else {
2691 |         this.isXxwTab = false;
2692 |       }
2693 |       if (this.currentTargetActiveName === 'feature') {
2694 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'snapModeType', 'snapMode');
2695 |       }
2696 |     },
2697 |     changeAttrGroup(mode) {
2698 |       if (mode === 'none') {
2699 |         this.handleAttrSearch({}, {}, 'timeDesc');
2700 |       } else {
2701 |         this.handleAttrGroup({}, {}, 'timeDesc', mode);
2702 |       }
2703 |     },
2704 |     changeAllAttrGroupData(mode) {
2705 |       this.$set(this.currentTargetAttrData[this.currentTargetType], 'groupMode', mode);
2706 |       if (mode === 'none') {
2707 |         this.handleAllAttrSearch('200201');
2708 |       } else {
2709 |         this.handleAttrGroup({}, {}, 'timeDesc', mode);
2710 |       }
2711 |     },
2712 |     // 智能识别开关回调
2713 |     changeStrategySwitch(val) {
2714 |       // 接口识别无数据
2715 |       if (this.currentTargetImgData.strategyAnalysis && this.currentTargetImgData.strategyAnalysis.status === 'empty') {
2716 |         this.currentTargetImgData.showNoRecognition = true;
2717 |       } else if (this.currentTargetImgData.recognitionTitle) {
2718 |         this.currentTargetImgData.showNoRecognition = !val;
2719 |       }
2720 |     },
2721 |     // 处理名单标签参数
2722 |     handleTagValue(val) {
2723 |       const tem = {};
2724 |       if (val) {
2725 |         const and = [];
2726 |         const or = [];
2727 |         const not = [];
2728 |         if (val.allTags && val.allTags.length) {
2729 |           val.allTags.forEach(b => {
2730 |             and.push(b.value || '0');
2731 |           });
2732 |           tem.and = and;
2733 |         }
2734 |         if (val.notTags && val.notTags.length) {
2735 |           val.notTags.forEach(b => {
2736 |             not.push(b.value || '0');
2737 |           });
2738 |           tem.not = not;
2739 |         }
2740 |         if (val.orTags && val.orTags.length) {
2741 |           val.orTags.forEach(b => {
2742 |             or.push(b.value || '0');
2743 |           });
2744 |           tem.or = or;
2745 |         }
2746 |       }
2747 |       return tem;
2748 |     },
2749 |     startSearch() {
2750 |       this.bus.$emit('fullLoading', {
2751 |         loading: true,
2752 |         menuFold: false,
2753 |         text: this.fusionResultPanelType === 'sideFace' ? '侧脸智能识别中...' : '搜索中...'
2754 |       });
2755 |     },
2756 |     endSearch() {
2757 |       this.bus.$emit('fullLoading', {
2758 |         loading: false,
2759 |         menuFold: false,
2760 |         text: '加载中...'
2761 |       });
2762 |     },
2763 |     dealDate(splitDate, time) {
2764 |       const groupDate = [];
2765 |       const startTime = new Date(splitDate[0].split('T')[0].trim());
2766 |       const endTime = new Date(splitDate[1].split('T')[0].trim());
2767 |       for (let j = startTime.getTime() - 24 * 60 * 60 * 1000; j < endTime.getTime(); ) {
2768 |         j = j + 24 * 60 * 60 * 1000;
2769 |         const dateJ = moment(j).format('YYYY-MM-DD');
2770 |         let arr = [];
2771 |         // time.map(k => {
2772 |         arr = [dateJ + 'T' + time[0] + '.000+08:00', dateJ + 'T' + time[1] + '.999+08:00'];
2773 |         groupDate.push(arr);
2774 |         // });
2775 |       }
2776 |       return groupDate;
2777 |     },
2778 |     handleCurrentChange(val) {
2779 |       this.backPageNo = val;
2780 |       const { currentTargets, currentTargetIndex } = this.fusion;
2781 |       this.bus.$emit('stopUpdateImgStrategy');
2782 |       this.$set(currentTargets[currentTargetIndex], 'backPageNo', this.backPageNo);
2783 |       if (this.dialogVisible) {
2784 |         this.handleImgSearch(null, 'back');
2785 |         this.bus.$emit('endStopUpdateImgStrategy');
2786 |       }
2787 |     },
2788 |     clickSecondaryPage(val) {
2789 |       const that = this;
2790 |       this.startSearch();
2791 |       const temp = this.fusion.currentTargets[this.currentTargetIndex].feature;
2792 |       let tempCondition = null;
2793 |       if (
2794 |         temp &&
2795 |         temp[this.currentTargetType] &&
2796 |         temp[this.currentTargetType].searchCondition &&
2797 |         temp[this.currentTargetType].searchCondition.condition
2798 |       ) {
2799 |         tempCondition = temp[this.currentTargetType].searchCondition.condition;
2800 |       }
2801 |       let obj = {};
2802 |       obj = this.handleParam(
2803 |         tempCondition ? { [that.currentTargetType]: tempCondition } : this.currentTargetAttrData,
2804 |         val.dataType
2805 |       );
2806 |       obj.dataType = Number(val.dataType);
2807 |       let flag = false;
2808 |       if (val.plateNo) {
2809 |         if (
2810 |           val.plateNo &&
2811 |           val.plateNo !== '车牌' &&
2812 |           val.plateNo !== '无车牌' &&
2813 |           val.plateNo !== '无牌车' &&
2814 |           val.plateNo !== '未知车牌' &&
2815 |           val.plateNo !== 'NoPlate' &&
2816 |           val.plateNo !== 'No Plate' &&
2817 |           val.plateNo !== 'unknown'
2818 |         ) {
2819 |           flag = true;
2820 |         }
2821 |         if (
2822 |           this.searchConfig &&
2823 |           this.searchConfig.pageConfig &&
2824 |           this.searchConfig.pageConfig.fusion &&
2825 |           this.searchConfig.pageConfig.fusion.isShowSecondPlateNumber
2826 |         ) {
2827 |           if (flag) {
2828 |             obj.plateNoTwice = val.plateNo;
2829 |           } else {
2830 |             obj.passVehicleType = '1';
2831 |           }
2832 |         } else {
2833 |           if (flag) {
2834 |             obj.plateNo = val.plateNo;
2835 |           } else {
2836 |             obj.passVehicleType = '1';
2837 |           }
2838 |         }
2839 |       }
2840 |       if (val.plateColor && flag) {
2841 |         if (
2842 |           this.searchConfig &&
2843 |           this.searchConfig.pageConfig &&
2844 |           this.searchConfig.pageConfig.fusion &&
2845 |           this.searchConfig.pageConfig.fusion.isShowSecondPlateNumber
2846 |         ) {
2847 |           obj.plateColorTwice = Array.isArray(val.plateColor) ? val.plateColor : [val.plateColor];
2848 |         } else {
2849 |           obj.plateColor = Array.isArray(val.plateColor) ? val.plateColor : [val.plateColor];
2850 |         }
2851 |       }
2852 |       if (val.crossingIndexCode) {
2853 |         if (obj.cameraIndexCodes) {
2854 |           delete obj.cameraIndexCodes;
2855 |         }
2856 |         if (obj.orgIndexCodes) {
2857 |           delete obj.orgIndexCodes;
2858 |         }
2859 |         obj.crossingIndexCodes = [val.crossingIndexCode];
2860 |       }
2861 |       if (obj && obj.exists) {
2862 |         delete obj.exists;
2863 |       }
2864 |       // 选择无车牌时已经隐藏了车牌分组
2865 |       // if (obj && obj.passVehicleType) {
2866 |       //   delete obj.passVehicleType;
2867 |       // }
2868 |       let sort = [];
2869 |       if (val.sortMode) {
2870 |         if (val.sortMode === 'timeAsc') {
2871 |           sort.push({ collectTime: 'asc' });
2872 |         } else if (val.sortMode === 'timeDesc') {
2873 |           sort.push({ collectTime: 'desc' });
2874 |         }
2875 |         sort.push({ score: 'desc' });
2876 |       } else {
2877 |         sort = [{ collectTime: 'desc' }, { score: 'desc' }];
2878 |       }
2879 |       const param = {
2880 |         conditions: [obj],
2881 |         pageNo: val.pageNo || 1,
2882 |         pageSize: val.pageSize || 20,
2883 |         sort: sort
2884 |       };
2885 |       feature
2886 |         .disperse(param)
2887 |         .then(res => {
2888 |           this.endSearch();
2889 |           if (res && res.data) {
2890 |             this.hitInfoResult = res.data.result[0].dataList;
2891 |             // this.$set(this.currentTargetAttrData[this.currentTargetType], 'hitInfoResult', res.data);
2892 |           }
2893 |         })
2894 |         .catch(err => {
2895 |           // eslint-disable-next-line
2896 |           console.error(err);
2897 |           this.endSearch();
2898 |         });
2899 |       this.exportConditions = JSON.parse(JSON.stringify(param));
2900 |     },
2901 |     // 关闭已选点位面板
2902 |     closeSelectedPanel() {
2903 |       this.showSelectedPanel = false;
2904 |       this.chosedCardData = {};
2905 |     },
2906 |     // 解析已选点位数据（监控点、卡口、组织）
2907 |     getPoint(val) {
2908 |       let { selectedPoint } = this;
2909 |       if (val && val.length) {
2910 |         selectedPoint = val;
2911 |       }
2912 |       const originPointData = selectedPoint.map(point => point.originData);
2913 |       let { cameraIndexCodes, orgIndexCodes, crossingIndexCodes } = tool.handleSelectedPointsDataNew(originPointData);
2914 |       cameraIndexCodes = cameraIndexCodes.map(camera => camera.indexCode);
2915 |       crossingIndexCodes = crossingIndexCodes.map(cross => cross.indexCode);
2916 |       return { cameraIndexCodes, orgIndexCodes, crossingIndexCodes };
2917 |     },
2918 |     // 解析外部跳转参数
2919 |     handleMessage(data) {
2920 |       // eslint-disable-next-line
2921 |       console.log('jump page params::', data);
2922 |       data = this.$G_cauSearchData(data);
2923 | 
2924 |       // 外部跳转时若无系统管理配置、销售项和用户数据权限则递归
2925 |       if (
2926 |         !this.searchConfig ||
2927 |         (this.searchConfig && !this.searchConfig.pageConfig) ||
2928 |         !this.moduleSale ||
2929 |         (this.moduleSale && !Object.keys(this.moduleSale).length) ||
2930 |         !this.userInfo ||
2931 |         (this.userInfo && !this.userInfo.CASTGC)
2932 |       ) {
2933 |         let timer = setTimeout(() => {
2934 |           this.handleMessage(data);
2935 |           clearTimeout(timer);
2936 |           timer = null;
2937 |         }, 300);
2938 |         return;
2939 |       }
2940 | 
2941 |       // 若不刷新跳转时条件面板是收起的，需要手动展开
2942 |       // if (this.collapse === 'hide') this.collapse = 'show';
2943 | 
2944 |       if (data && data.targetList && Array.isArray(data.targetList)) {
2945 |         // 外部跳转数据鉴权（根据销售项+系统管理配置项+用户数据权限）
2946 |         const filterData = [];
2947 |         for (const item of data.targetList) {
2948 |           // 若无type类型，根据dataType补全type类型
2949 |           if (!item.type && item.dataType) {
2950 |             item.type = dataTypeName[Number(item.dataType)];
2951 |           }
2952 |           if (this.checkPermission(item.type)) {
2953 |             filterData.push(item);
2954 |           }
2955 |         }
2956 |         if (!filterData.length) return this.$message({ type: 'info', message: '当前无该类型抓拍的搜图权限' });
2957 |         // 跳转搜图
2958 | 
2959 |         // 若不刷新跳转时条件面板是收起的，需要手动展开
2960 |         if (this.collapse === 'hide') this.collapse = 'show';
2961 | 
2962 |         // 若不刷新跳转时目标追踪面板是打开的，需要收起
2963 |         if (this.showTaskPanel || this.trackTaskShow) {
2964 |           this.showTaskPanel = false;
2965 |           this.trackTaskShow = false;
2966 |         }
2967 | 
2968 |         let conditions = {};
2969 |         if (data.conditions && data.conditions !== 'undefined') {
2970 |           conditions = typeof data.conditions === 'string' ? JSON.parse(data.conditions) : data.conditions;
2971 |         }
2972 |         for (let i = 0, l = filterData.length; i < l; i++) {
2973 |           if (i >= 1) {
2974 |             setTimeout(() => {
2975 |               if (i === filterData.length - 1) {
2976 |                 this.oneKeyImgSearch([{ ...filterData[i], ...conditions }], null, true, 'jumpImgData');
2977 |               } else {
2978 |                 this.oneKeyImgSearch([{ ...filterData[i], ...conditions }], null, false);
2979 |               }
2980 |             }, i * 100);
2981 |           } else {
2982 |             let auto = false;
2983 |             if (filterData.length === 1) auto = true;
2984 |             this.oneKeyImgSearch([{ ...filterData[i], ...conditions }], null, auto, 'jumpImgData');
2985 |           }
2986 |         }
2987 |       } else if (
2988 |         data &&
2989 |         data.page &&
2990 |         (data.page === 'trackSearch' || data.page === 'thirdTrack' || data.page === 'multiTrack')
2991 |       ) {
2992 |         // 若不刷新跳转时条件面板是收起的，需要手动展开
2993 |         // if (this.collapse === 'hide') this.collapse = 'show';
2994 | 
2995 |         // 若不刷新跳转时目标追踪面板是打开的，需要收起
2996 |         if (this.showTaskPanel || this.trackTaskShow) {
2997 |           this.showTaskPanel = false;
2998 |           this.trackTaskShow = false;
2999 |         }
3000 | 
3001 |         // 跳转轨迹
3002 |         if (this.showSearchResult) {
3003 |           this.addTarget();
3004 |         }
3005 |         setTimeout(() => {
3006 |           this.oneKeyTrackSearch(data, false, true);
3007 |         }, 1000);
3008 |       } else if (data.bkgUrl || data.imageUrl || data.targetUrl || data.picUrl || data.url) {
3009 |         // 若不刷新跳转时条件面板是收起的，需要手动展开
3010 |         if (this.collapse === 'hide') this.collapse = 'show';
3011 | 
3012 |         // 若不刷新跳转时目标追踪面板是打开的，需要收起
3013 |         if (this.showTaskPanel || this.trackTaskShow) {
3014 |           this.showTaskPanel = false;
3015 |           this.trackTaskShow = false;
3016 |         }
3017 | 
3018 |         // 跳转搜图
3019 |         const imageData = {};
3020 |         if (data.bkgUrl && (data.imageUrl || data.targetUrl || data.picUrl || data.url)) {
3021 |           imageData.targetUrl = data.imageUrl || data.targetUrl || data.picUrl || data.url;
3022 |         } else if (data.bkgUrl) {
3023 |           imageData.bkgUrl = data.bkgUrl;
3024 |         } else if (data.imageUrl || data.targetUrl || data.picUrl || data.url) {
3025 |           imageData.targetUrl = data.imageUrl || data.targetUrl || data.picUrl || data.url;
3026 |         }
3027 |         imageData.type = data.type || '';
3028 |         // 大图时才会补全rect坐标
3029 |         if (data.rect && !imageData.targetUrl) {
3030 |           imageData.rect =
3031 |             typeof data.rect === 'object'
3032 |               ? data.rect
3033 |               : {
3034 |                   width: data.rect.split(',')[0],
3035 |                   height: data.rect.split(',')[1],
3036 |                   y: data.rect.split(',')[2],
3037 |                   x: data.rect.split(',')[3]
3038 |                 };
3039 |         }
3040 | 
3041 |         if (data.targetModelData) {
3042 |           imageData.targetModelData = data.targetModelData;
3043 |           if (!this.checkPermission(imageData.type))
3044 |             return this.$message({ type: 'info', message: '当前无该类型抓拍的搜图权限' });
3045 |           this.oneKeyImgSearch([imageData], null, true, 'jumpImgData');
3046 |         } else if (imageData.rect) {
3047 |           if (!this.checkPermission(imageData.type))
3048 |             return this.$message({ type: 'info', message: '当前无该类型抓拍的搜图权限' });
3049 |           this.$G_oneKeySearch(
3050 |             imageData,
3051 |             targetList => {
3052 |               if (targetList.length) this.oneKeyImgSearch(targetList, null, true, 'jumpImgData');
3053 |             },
3054 |             true
3055 |           );
3056 |         } else {
3057 |           if (!this.searchConfig.modelTypes) {
3058 |             let timer = setTimeout(() => {
3059 |               this.handleMessage(data);
3060 |               clearTimeout(timer);
3061 |               timer = null;
3062 |             }, 1000);
3063 |             return;
3064 |           }
3065 |           this.$G_uploadUrlData(
3066 |             {
3067 |               url: imageData.targetUrl || imageData.bkgUrl,
3068 |               type: imageData.type || this.searchConfig.modelTypes,
3069 |               typeSingle: true,
3070 |               alanyseBackSideFace: false
3071 |             },
3072 |             targetList => {
3073 |               if (targetList.length) this.oneKeyImgSearch(targetList, null, true, 'jumpImgData');
3074 |             }
3075 |           );
3076 |         }
3077 |       } else if (data && Array.isArray(data)) {
3078 |         // 跳转搜图/属性/轨迹/追踪
3079 |         data.forEach((item, index) => {
3080 |           if (item.searchType === 'image') {
3081 |             if (index === 0) {
3082 |               let auto = false;
3083 |               if (data.length === 1) auto = true;
3084 |               this.oneKeyImgSearch([item], null, auto, 'jumpImgData');
3085 |             } else {
3086 |               if (index === data.length - 1) {
3087 |                 this.oneKeyImgSearch([item], null, true, 'jumpImgData');
3088 |               } else {
3089 |                 this.oneKeyImgSearch([item], null, false);
3090 |               }
3091 |             }
3092 |           } else if (item.searchType === 'feature') {
3093 |             // 跳转属性
3094 |             if (item.params && (item.params.certificateNumber || item.params.humanName || item.params.humanId)) {
3095 |               if (!this.checkAttrPermission('faceLib')) {
3096 |                 return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3097 |               }
3098 |             } else if (item.params && (item.params.plateNo || item.params.plateColor || item.params.plateType)) {
3099 |               if (!this.checkAttrPermission('vehicle')) {
3100 |                 return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3101 |               }
3102 |             }
3103 |             this.urlParams = item.params;
3104 |             this.jumpUrlType = item.type;
3105 |             store.commit('fusion/setCurrentTargetType', item.type);
3106 |             store.commit('fusion/setActiveName', 'feature');
3107 |             if (this.urlParams && Object.keys(this.urlParams).length && this.urlParams.resource) {
3108 |               if (this.targetTrace && this.targetTrace.targetTrace) {
3109 |                 store.commit('targetTrace/setSelectedPoint', this.urlParams.resource);
3110 |               } else {
3111 |                 store.commit('fusion/setSelectedPoint', this.urlParams.resource);
3112 |               }
3113 |             }
3114 |             this.oneKeyFeatureSearch(item);
3115 |           } else if (
3116 |             item.page &&
3117 |             (item.page === 'trackSearch' || item.page === 'thirdTrack' || item.page === 'multiTrack')
3118 |           ) {
3119 |             if (this.showSearchResult) {
3120 |               this.addTarget();
3121 |             }
3122 |             setTimeout(() => {
3123 |               this.oneKeyTrackSearch(data, false, true);
3124 |             }, 1000);
3125 |           } else if (item.searchType === 'trace') {
3126 |             this.oneKeyTraceSearch(item);
3127 |           }
3128 |         });
3129 |       } else if (data && data.searchType && data.searchType === 'feature') {
3130 |         // 若不刷新跳转时条件面板是收起的，需要手动展开
3131 |         if (this.collapse === 'hide') this.collapse = 'show';
3132 | 
3133 |         // 若不刷新跳转时目标追踪面板是打开的，需要收起
3134 |         if (this.showTaskPanel || this.trackTaskShow) {
3135 |           this.showTaskPanel = false;
3136 |           this.trackTaskShow = false;
3137 |         }
3138 | 
3139 |         // 跳转属性
3140 |         // const { translaDataType } = constants;
3141 |         if (data.params && (data.params.certificateNumber || data.params.humanName || data.params.humanId)) {
3142 |           if (!this.checkAttrPermission('faceLib')) {
3143 |             return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3144 |           }
3145 |         } else if (data.params && (data.params.plateNo || data.params.plateColor || data.params.plateType)) {
3146 |           if (!this.checkAttrPermission('vehicle')) {
3147 |             return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3148 |           }
3149 |         }
3150 |         this.urlParams = data.params;
3151 |         this.jumpUrlType = data.type;
3152 |         store.commit('fusion/setCurrentTargetType', data.type);
3153 |         store.commit('fusion/setActiveName', 'feature');
3154 |         if (this.urlParams && Object.keys(this.urlParams).length && this.urlParams.resource) {
3155 |           if (this.targetTrace && this.targetTrace.targetTrace) {
3156 |             store.commit('targetTrace/setSelectedPoint', this.urlParams.resource);
3157 |           } else {
3158 |             store.commit('fusion/setSelectedPoint', this.urlParams.resource);
3159 |           }
3160 |         }
3161 |         this.oneKeyFeatureSearch(data);
3162 |       } else if (data && data.searchType && data.searchType === 'trace') {
3163 |         // 跳转追踪
3164 |         this.oneKeyTraceSearch(data);
3165 |       } else if (data && data.params) {
3166 |         // 若不刷新跳转时条件面板是收起的，需要手动展开
3167 |         if (this.collapse === 'hide') this.collapse = 'show';
3168 | 
3169 |         // 若不刷新跳转时目标追踪面板是打开的，需要收起
3170 |         if (this.showTaskPanel || this.trackTaskShow) {
3171 |           this.showTaskPanel = false;
3172 |           this.trackTaskShow = false;
3173 |         }
3174 | 
3175 |         // 跳转属性
3176 |         if (data.params && (data.params.certificateNumber || data.params.humanName || data.params.humanId)) {
3177 |           if (!this.checkAttrPermission('faceLib')) {
3178 |             return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3179 |           }
3180 |         } else if (data.params && (data.params.plateNo || data.params.plateColor || data.params.plateType)) {
3181 |           if (!this.checkAttrPermission('vehicle')) {
3182 |             return this.$message({ type: 'info', message: '当前无该类型数据的搜索权限' });
3183 |           }
3184 |         }
3185 |         this.urlParams = data.params;
3186 |         this.jumpUrlType = data.type;
3187 |         store.commit('fusion/setCurrentTargetType', data.type);
3188 |         store.commit('fusion/setActiveName', 'feature');
3189 |         if (this.urlParams && Object.keys(this.urlParams).length && this.urlParams.resource) {
3190 |           if (this.targetTrace && this.targetTrace.targetTrace) {
3191 |             store.commit('targetTrace/setSelectedPoint', this.urlParams.resource);
3192 |           } else {
3193 |             store.commit('fusion/setSelectedPoint', this.urlParams.resource);
3194 |           }
3195 |         }
3196 |         this.oneKeyFeatureSearch(data);
3197 |       }
3198 |     },
3199 |     // 校验数据权限（销售项+系统管理配置项+用户数据权限）
3200 |     checkPermission(type) {
3201 |       const { imageUploadDetectionType = [] } = this.searchConfig.pageConfig.fusion;
3202 |       const {
3203 |         faceSale,
3204 |         bodySale,
3205 |         vehicleSale,
3206 |         nonvehicleSale,
3207 |         sideFace,
3208 |         backBody,
3209 |         bodyPartShoe,
3210 |         bodyPartHat,
3211 |         bodyPartBag
3212 |       } = this.moduleSale;
3213 |       const { noface = false, nobody = false, novehicle = false, nononmotor = false } = this.userInfo.userRoleMap || {};
3214 |       const permissionObj = {
3215 |         face: faceSale && imageUploadDetectionType.includes('face') && !noface,
3216 |         body: bodySale && imageUploadDetectionType.includes('body') && !nobody,
3217 |         vehicle: vehicleSale && imageUploadDetectionType.includes('vehicle') && !novehicle,
3218 |         nonvehicle: nonvehicleSale && imageUploadDetectionType.includes('nonvehicle') && !nononmotor,
3219 |         sideFace: sideFace && imageUploadDetectionType.includes('sideFace') && !noface,
3220 |         back: backBody && imageUploadDetectionType.includes('back') && !nobody,
3221 |         shoe: bodyPartShoe && imageUploadDetectionType.includes('shoe') && !nobody,
3222 |         hat: bodyPartHat && imageUploadDetectionType.includes('hat') && !nobody,
3223 |         bag: bodyPartBag && imageUploadDetectionType.includes('bag') && !nobody
3224 |       };
3225 |       return permissionObj[type];
3226 |     },
3227 |     // 校验数据权限（销售项+系统管理配置项+用户数据权限）
3228 |     checkAttrPermission(type) {
3229 |       const { attrSubSearchType = [], humanShowNameList } = this.searchConfig.pageConfig.fusion;
3230 |       const { faceSale, bodySale, vehicleSale, nonvehicleSale, iefenceSale } = this.moduleSale;
3231 |       const { noface = false, nobody = false, novehicle = false, nononmotor = false, noefence = false } =
3232 |         this.userInfo.userRoleMap || {};
3233 |       const permissionObj = {
3234 |         face: faceSale && attrSubSearchType.includes('face') && !noface,
3235 |         body: bodySale && attrSubSearchType.includes('body') && !nobody,
3236 |         vehicle: vehicleSale && attrSubSearchType.includes('vehicle') && !novehicle,
3237 |         nonvehicle: nonvehicleSale && attrSubSearchType.includes('nonvehicle') && !nononmotor,
3238 |         facelib: humanShowNameList && attrSubSearchType.includes('facelib') && !noface,
3239 |         imsi: iefenceSale && attrSubSearchType.includes('imsi') && !noefence
3240 |       };
3241 |       return permissionObj[type];
3242 |     },
3243 |     // 新增查询滚动条保持在底部
3244 |     scrollToBottom() {
3245 |       this.$nextTick(() => {
3246 |         var container = this.$el.querySelector('.box');
3247 |         container.scrollTop = container.scrollHeight;
3248 |       });
3249 |     },
3250 |     // 关闭全屏模式
3251 |     closeFullScreen() {
3252 |       this.fullScreenMap = false;
3253 |       this.showFullScreenSelected = false;
3254 |       this.fullScreenSelectedPoint = [];
3255 |       this.bus.$emit('closeSelectedPanel', true);
3256 |       this.bus.$emit('toFullScreen', {
3257 |         status: false
3258 |       });
3259 |       this.bus.$emit('mapToFullScreen', {
3260 |         status: false
3261 |       });
3262 |       this.fullScrrenPoint = {};
3263 |     },
3264 |     // 定位到全屏模式的点位弹框
3265 |     setFullScreenPoint() {
3266 |       const point = this.fullScreenPoint;
3267 |       if (this.compatibleConfig && this.compatibleConfig.pviaVersion === '130') {
3268 |         this.bus.$emit('MAP_POPWINDOW', point);
3269 |       } else {
3270 |         this.bus.$emit('setPointPop', point);
3271 |       }
3272 |     },
3273 |     // 关闭全屏模式已选点位面板
3274 |     closeFullScreenPanel() {
3275 |       this.fullScreenSelectedPoint = [];
3276 |       this.showFullScreenSelected = false;
3277 |     },
3278 |     // 跳转视频搜索
3279 |     jumpToVideoSearch() {
3280 |       if (top && top.window && top.window.goToApp) {
3281 |         top.window.goToApp({
3282 |           componentId: 'ivideosearch',
3283 |           componentMenuId: 'ivideosearch_001'
3284 |         });
3285 |       }
3286 |     },
3287 |     // 进入二级详情页（聚档二级详情页/车辆分组二级详情页）
3288 |     isSecondaryPage(val) {
3289 |       if (this.currentTargetActiveName === 'image') {
3290 |         this.$set(this.currentTargetImgData, 'secondaryPage', val);
3291 |       } else {
3292 |         this.$set(this.currentTargetAttrData[this.currentTargetType], 'secondaryPage', val);
3293 |       }
3294 |     },
3295 |     // 缺省图的加载异常处理（过期）
3296 |     imgLoadErr(err) {
3297 |       if (err && err.target && err.target.currentSrc && err.target.currentSrc.includes('photoXs')) {
3298 |         window.location.reload();
3299 |       } else if (err && err.target && err.target.currentSrc && err.target.currentSrc.includes('/cas/login')) {
3300 |         window.location.reload();
3301 |       }
3302 |     },
3303 |     // 设置统一的鉴权参数（人脸/人体/车辆/非机动车/侧脸/背影/体态/电围）
3304 |     setPermissionData(moduleSale = {}, userInfo = {}) {
3305 |       const {
3306 |         faceSale = false,
3307 |         bodySale = false,
3308 |         vehicleSale = false,
3309 |         nonvehicleSale = false,
3310 |         sideFace = false,
3311 |         backBody = false,
3312 |         builtSale = false,
3313 |         iefenceSale = false,
3314 |         bodyPartShoe = false,
3315 |         bodyPartHat = false,
3316 |         bodyPartBag = false
3317 |       } = moduleSale;
3318 |       if (!this.searchConfig.pageConfig) return;
3319 |       const { imageUploadDetectionType, attrSubSearchType, humanShowNameList } = this.searchConfig.pageConfig.fusion;
3320 |       const {
3321 |         noface = false,
3322 |         nobody = false,
3323 |         novehicle = false,
3324 |         nononmotor = false,
3325 |         nobuilt = false,
3326 |         noefence = false
3327 |       } = userInfo.userRoleMap || {};
3328 |       const permissionData = {
3329 |         image: {
3330 |           faceSale: faceSale && imageUploadDetectionType.includes('face') && !noface,
3331 |           bodySale: bodySale && imageUploadDetectionType.includes('body') && !nobody,
3332 |           vehicleSale: vehicleSale && imageUploadDetectionType.includes('vehicle') && !novehicle,
3333 |           nonvehicleSale: nonvehicleSale && imageUploadDetectionType.includes('nonvehicle') && !nononmotor,
3334 |           sideFaceSale: sideFace && imageUploadDetectionType.includes('sideFace') && !noface,
3335 |           backSale: backBody && imageUploadDetectionType.includes('back') && !nobody,
3336 |           builtSale: builtSale && imageUploadDetectionType.includes('built') && !nobuilt,
3337 |           shoeSale: bodyPartShoe && imageUploadDetectionType.includes('shoe') && !nobody,
3338 |           hatSale: bodyPartHat && imageUploadDetectionType.includes('hat') && !nobody,
3339 |           bagSale: bodyPartBag && imageUploadDetectionType.includes('bag') && !nobody
3340 |         },
3341 |         feature: {
3342 |           faceSale: faceSale && attrSubSearchType.includes('face') && !noface,
3343 |           bodySale: bodySale && attrSubSearchType.includes('body') && !nobody,
3344 |           facelibSale: humanShowNameList && attrSubSearchType.includes('facelib') && !noface,
3345 |           vehicleSale: vehicleSale && attrSubSearchType.includes('vehicle') && !novehicle,
3346 |           nonvehicleSale: nonvehicleSale && attrSubSearchType.includes('nonvehicle') && !nononmotor,
3347 |           builtSale: builtSale && attrSubSearchType.includes('built') && !nobuilt,
3348 |           iefenceSale: iefenceSale && attrSubSearchType.includes('imsi') && !noefence
3349 |         }
3350 |       };
3351 |       // 补充通用参数
3352 |       permissionData.common = {
3353 |         faceSale: permissionData[this.currentTargetActiveName].faceSale,
3354 |         bodySale: permissionData[this.currentTargetActiveName].bodySale,
3355 |         vehicleSale: permissionData[this.currentTargetActiveName].vehicleSale,
3356 |         nonvehicleSale: permissionData[this.currentTargetActiveName].nonvehicleSale,
3357 |         builtSale: permissionData[this.currentTargetActiveName].builtSale,
3358 |         iefenceSale: iefenceSale && attrSubSearchType.includes('imsi') && !noefence,
3359 |         facelibSale: humanShowNameList && attrSubSearchType.includes('facelib') && !noface
3360 |       };
3361 |       store.commit('setPermissionData', permissionData);
3362 | 
3363 |       // 智图权限参数存储本地缓存中
3364 |       localStorage.setItem('fusionPermissionData', JSON.stringify(permissionData));
3365 |     },
3366 |     // 打开查询结果，最大化
3367 |     handleMiniSize() {
3368 |       this.minimizeResult = false;
3369 |       this.bus.$emit('closeSurroundPanel');
3370 |     }
3371 |   }
3372 | };
3373 | </script>
3374 | 
3375 | <style lang="scss" scoped>
3376 | @import './fusionResult.scss';
3377 | </style>
3378 | <style lang="less" scoped>
3379 | @import './fusionResult.less';
3380 | </style>
3381 | <style lang="scss">
3382 | // messagebox
3383 | .el-message-box__content .el-scrollbar__wrap {
3384 |   margin-bottom: -9px !important;
3385 | }
3386 | // 工具箱
3387 | .tool-box-drop {
3388 |   position: absolute !important; // 加上important，修复快速刷新页面后，工具栏跑到顶部问题
3389 |   left: 2px;
3390 |   bottom: 16px;
3391 |   width: 64px;
3392 |   height: 64px;
3393 |   .tool-box-wrap {
3394 |     // position: absolute;
3395 |     // left: 10px;
3396 |     // bottom: 32px;
3397 |     display: flex;
3398 |     flex-direction: column;
3399 |     align-items: center;
3400 |     width: 64px;
3401 |     height: 64px;
3402 |     border: 1px solid rgba(0, 0, 0, 0.08);
3403 |     background: rgba(255, 255, 255, 0.8);
3404 |     border-radius: 4px;
3405 |     cursor: pointer;
3406 |     &:hover {
3407 |       background: #f0f0f0;
3408 |     }
3409 |     .pic {
3410 |       width: 32px;
3411 |       height: 32px;
3412 |       display: block;
3413 |       margin-top: 4px;
3414 |     }
3415 |     .text {
3416 |       display: inline-block;
3417 |       margin-top: 4px;
3418 |       // flex: 1;
3419 |       color: rgba(0, 0, 0, 0.7);
3420 |       font-family: Microsoft YaHei UI;
3421 |       font-size: 14px;
3422 |       font-weight: 400;
3423 |       line-height: 20px;
3424 |     }
3425 |   }
3426 | }
3427 | // 工具箱弹框
3428 | .tool-box-dropdown {
3429 |   padding: 0 !important;
3430 |   min-width: 98px !important;
3431 |   .el-dropdown-menu__item {
3432 |     padding: 0;
3433 |     line-height: 32px;
3434 |   }
3435 | }
3436 | // 温数据面板（修复高度未跟随页面问题）
3437 | .fusion-search {
3438 |   .f-cold-wrap {
3439 |     .fix-to-left {
3440 |       bottom: 0;
3441 |     }
3442 |   }
3443 | }
3444 | 
3445 | // feedbackicon不显示的问题
3446 | .el-message-box {
3447 |   .el-message-box__status {
3448 |     width: 40px;
3449 |     height: 40px;
3450 |     background: url('~@/assets/images/svg/messagebox_info.svg');
3451 |     background-size: 60px;
3452 |     background-position: -10px -10px;
3453 |   }
3454 | }
3455 | 
3456 | // 图片上传检测建模面板鼠标右键行为控制
3457 | .el-dialog__body {
3458 |   .el-dialog__body-wrapper {
3459 |     .h-target-img-upload__container {
3460 |       .h-img-snippets-rect {
3461 |         &.h-img-snippets-rect--danger {
3462 |           pointer-events: none;
3463 |         }
3464 |       }
3465 |       .h-img-view__img {
3466 |         pointer-events: none;
3467 |       }
3468 |       .h-img-snippets-thumbnail__original-wrapper {
3469 |         pointer-events: none;
3470 |       }
3471 |     }
3472 |     .pop_alert {
3473 |       .vue-cropper {
3474 |         .cropper-box-canvas {
3475 |           pointer-events: none;
3476 |         }
3477 |       }
3478 |     }
3479 |   }
3480 | }
3481 | </style>
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
bsearch-frontend\search-center\src\pages\businessComponents\businessSubthemeResult\index.vue

# VSCode Open Tabs
bsearch-frontend/search-center/vue.config.js,bsearch-frontend/search-center/src/pages/businessComponents/snapClusterResult/snapCard/snapBusinessCard.vue,bsearch-frontend/search-center/src/components/commonSubthemeResult/src/commonSubthemeResult.vue,bsearch-frontend/search-center/src/store/fusion/state.js,bsearch-frontend/search-center/src/store/fusion/mutations.js,bsearch-frontend/search-center/src/store/fusion/getters.js,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/builtDialog/index.vue,bsearch-frontend/search-center/src/components/imgHistory/src/historyCard.vue,bsearch-frontend/search-center/src/mixins/commonOperation.js,bsearch-frontend/search-center/src/pages/fusionResult/fusionResult.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/targetTrackPanel/targetTrackPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/traceBusiness.js,bsearch-frontend/search-center/src/pages/distributedSearch/distributedSearch.vue,bsearch-frontend/search-center/src/pages/distributedSearch/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/imageBusiness.js,bsearch-frontend/search-center/src/components/uploadCard/src/uploadCard.vue,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.scss,bsearch-frontend/search-center/package.json

# Current Time
2026/3/19 下午10:32:37 (Asia/Shanghai, UTC+8:00)

# Current Cost
$0.00

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
<model>Qwen3-Coder-480B</model>
</environment_details>

---

**Assistant:**

让我继续读取一些配置文件和其他关键文件来全面分析项目。

<read_file>
<args>
  <file>
    <path>bsearch-frontend/search-center/vue.config.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/api/base.js</path>
  </file>
  <file>
    <path>bsearch-frontend/search-center/src/store/index.js</path>
  </file>
  <file>
    <path>bsearch-frontend/text-image/package.json</path>
  </file>
  <file>
    <path>bsearch-frontend/theme-config/package.json</path>
  </file>
</args>
</read_file>

---

**User:**

[read_file for 5 files] Result:
<files>
<file><path>bsearch-frontend/search-center/vue.config.js</path>
<content lines="1-207">
  1 | const env = process.env.NODE_ENV;
  2 | const isDev = env === 'development';
  3 | const page = isDev ? 'index.html' : 'index.ftlh';
  4 | const projectThemeEntry = './src/style/index.scss';
  5 | const huiThemeEntry = './src/style/hui.scss';
  6 | const ORING_TARGET = 'https://10.19.173.251'; // 表示其他服务的代理，不需要代理到本地服务
  7 | const TOKEN = 'ab918eeb-92a5-470f-a81b-549f2433ad35';
  8 | const ImapToken = 'kk_W_9KXYu1KfC4bZSHla5XK';
  9 | const COOKIE = 'JSESSIONID=SY5QOoAkVadoM-CFODLkOyHV6JDY5Toc72w67XMX; Current_Env=EQBAAAaESJ4SVC3Zqi8JqOQznlLsPx7t1/xgOoypNLdbNXupuhY8m8CJXp7t/CZ7mAvsT2wddfk4biz6rpjyyEnvLeDsbpDzSzgP6m3OrAHs+zMZ6Na+bEVlYrYIkGYHOKwQLw==; portal_sess=Rdvje66yUC2MBR_Kvy6_7Q8RqyG6Y6YTJ7CEDE24XLX-rsnewHBrlGN_P1AnwjuS; portal_locale_cookie=zh_CN; portal_locale_cookie.sig=VGxNpP7F4XZ1Gp3jFG_eDaYRyjAPOrprGsuvEUOU4_s; portal_locale_cookie_egg=zh_CN; portal_locale_cookie_egg.sig=w1ywwaZdZHDklrBdqaDLkbkaT6pDsqBnY3Yx5WYGaDo; portal_type_cookie=iportal; portal_type_cookie.sig=UCZaF8EkRMH4dmm8_FyX0-kK5EmKE5pVSkOszTqKyzs; CASTGC=TGT-216469-1-A9879CEFF43746C780398D768012D793-U2ZgNMliqwRK3BraKggGUBvMmpOg5gSQduAVICFu2APhUXs3Io-cas';
 10 | const COOKIE2 = 'imap_session=B5A4Yeb2_qN9ZK9ToeAARNB-AgWhrulF83qq2tGOC1OCyOXb6kSJMi0N3avzPasw';
 11 | const COOKIE_CASTGT = 'CASTGC=TGT-216469-1-A9879CEFF43746C780398D768012D793-U2ZgNMliqwRK3BraKggGUBvMmpOg5gSQduAVICFu2APhUXs3Io-cas';
 12 | const TARGET = 'https://10.19.173.251'; // 本地服务代理，表示代理到本地服务接口
 13 | const COLD_MOCK = 'http://xapi.hikvision.com.cn:3000/'; // 模拟地址
 14 | const collectMock = false;
 15 | const CompressionWebpackPlugin = require('compression-webpack-plugin');
 16 | const productionGzipExtensions = ['js', 'css'];
 17 | const webpack = require('webpack');
 18 | 
 19 | const main = {
 20 |   indexPath: page,
 21 |   chainWebpack: config => {
 22 |     // 移除 prefetch 插件
 23 |     config.plugins.delete('prefetch');
 24 |     // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。这会导致 file-loader 失效。
 25 |     config.plugin('html').tap(args => {
 26 |       let meta = {
 27 |         _csrf: {
 28 |           name: '_csrf',
 29 |           // eslint-disable-next-line no-template-curly-in-string
 30 |           content: '${(_csrf.token)!}'
 31 |         },
 32 |         buildTime: {
 33 |           name: 'buildTime',
 34 |           time: new Date().toLocaleString()
 35 |         }
 36 |       };
 37 |       if (isDev) {
 38 |         meta = '';
 39 |       }
 40 |       args[0].meta = meta;
 41 |       return args;
 42 |     });
 43 |   },
 44 |   publicPath: isDev ? '/' : `/bsearch-web/searchCenter`, // 静态资源获取路径
 45 |   assetsDir: process.env.VUE_APP_ASSETS,
 46 |   outputDir: '../../bsearch-web/view/src/main/resources/templates/searchCenter',
 47 |   runtimeCompiler: true,
 48 |   productionSourceMap: isDev,
 49 |   // 默认babel-loader会忽略node_modules中的文件，需要转化的在此处填写
 50 |   transpileDependencies: isDev
 51 |     ? [/@hui-pro/, /@hi-map/, /hui/, /EventEmitter/, /client-container/, /simple-player-pro/, /bsearch-com/]
 52 |     : [
 53 |         /@hui-pro/,
 54 |         /hui/,
 55 |         /selection-point/,
 56 |         /hi-map-vue/,
 57 |         /hi-map-core/,
 58 |         /simple-player-pro/,
 59 |         /client-container/,
 60 |         /@hi-map/,
 61 |         /EventEmitter/,
 62 |         /bsearch-com/
 63 |       ],
 64 |   // 用于开发环境下与后端联调
 65 |   devServer: {
 66 |     port: 7005,
 67 |     proxy: {
 68 |       '/bsearch-web/case/queryCasePage.do!*': {
 69 |         target: collectMock ? COLD_MOCK : TARGET,
 70 |         headers: {
 71 |           'X-CSRF-TOKEN': TOKEN
 72 |         },
 73 |         pathRewrite: {
 74 |           '/bsearch-web': collectMock ? 'mock/496539/bsearch-web' : '/bsearch-web'
 75 |         },
 76 |         onProxyReq(a, b, c) {
 77 |           a.setHeader('CooKie', COOKIE);
 78 |         }
 79 |       },
 80 |       [`${process.env.VUE_APP_CONTEXT}/!*`]: {
 81 |         target: TARGET,
 82 |         secure: false,
 83 |         changeOrigin: true,
 84 |         headers: {
 85 |           'X-CSRF-TOKEN': TOKEN
 86 |         },
 87 |         onProxyReq(a, b, c) {
 88 |           a.setHeader('CooKie', COOKIE);
 89 |         },
 90 |         bypass: function(req, res, proxyOptions) {
 91 |           if (req.headers.accept.indexOf('html') !== -1) {
 92 |             // console.log('Skipping proxy for browser request.');
 93 |             return '/index.html';
 94 |           }
 95 |         }
 96 |       },
 97 |       [`xmap-web/!*`]: {
 98 |         target: ORING_TARGET,
 99 |         secure: false,
100 |         changeOrigin: true,
101 |         headers: {
102 |           'X-CSRF-TOKEN': TOKEN
103 |         },
104 |         onProxyReq(a, b, c) {
105 |           a.setHeader('CooKie', COOKIE);
106 |         }
107 |       },
108 |       [`imap-web/!*`]: {
109 |         target: ORING_TARGET,
110 |         secure: false,
111 |         changeOrigin: true,
112 |         headers: {
113 |           'X-CSRF-TOKEN': ImapToken
114 |         },
115 |         onProxyReq(a, b, c) {
116 |           a.setHeader('CooKie', COOKIE2);
117 |         }
118 |       },
119 |       [`xshare-web/!*`]: {
120 |         target: ORING_TARGET,
121 |         secure: false,
122 |         changeOrigin: true,
123 |         headers: {
124 |           'X-CSRF-TOKEN': TOKEN
125 |         },
126 |         onProxyReq(a, b, c) {
127 |           a.setHeader('CooKie', COOKIE);
128 |         }
129 |       },
130 |       [`imap-server/!*`]: {
131 |         target: ORING_TARGET,
132 |         secure: false,
133 |         changeOrigin: true,
134 |         headers: {
135 |           'X-CSRF-TOKEN': ImapToken
136 |         },
137 |         onProxyReq(a, b, c) {
138 |           a.setHeader('CooKie', COOKIE2);
139 |         }
140 |       },
141 |       [`ngx/proxy!*`]: {
142 |         target: ORING_TARGET,
143 |         secure: false,
144 |         changeOrigin: true,
145 |         headers: {
146 |           'X-CSRF-TOKEN': TOKEN
147 |         },
148 |         onProxyReq(a, b, c) {
149 |           a.setHeader('CooKie', COOKIE_CASTGT);
150 |         }
151 |       },
152 |       [`hgis-web!*`]: {
153 |         target: ORING_TARGET,
154 |         secure: false,
155 |         changeOrigin: true,
156 |         headers: {
157 |           'X-CSRF-TOKEN': TOKEN
158 |         },
159 |         onProxyReq(a, b, c) {
160 |           a.setHeader('CooKie', COOKIE);
161 |         }
162 |       },
163 |       [`hmap-server!*`]: {
164 |         target: ORING_TARGET,
165 |         secure: false,
166 |         changeOrigin: true,
167 |         headers: {
168 |           'X-CSRF-TOKEN': TOKEN
169 |         },
170 |         onProxyReq(a, b, c) {
171 |           a.setHeader('CooKie', COOKIE);
172 |         }
173 |       }
174 |     }
175 |   },
176 |   configureWebpack: {
177 |     // entry: isDev ? [huiThemeEntry, projectThemeEntry, './src/main'] : './src/main',
178 |     devtool: isDev ? 'source-map' : false,
179 |     entry: [huiThemeEntry, projectThemeEntry, './src/main'],
180 |     performance: {
181 |       hints: false
182 |     },
183 |     plugins: [
184 |       // 配置compression-webpack-plugin压缩
185 |       new CompressionWebpackPlugin({
186 |         algorithm: 'gzip',
187 |         test: new RegExp('\\.(' + productionGzipExtensions.join('|') + ')$'),
188 |         threshold: 10240,
189 |         minRatio: 0.8
190 |       }),
191 |       // maxChunks：使用大于或等于 1 的值，来限制 chunk 的最大数量。使用 1 防止添加任何其他额外的 chunk，这是因为 entry/main chunk 也会包含在计数之中。
192 |       // minChunkSize: 设置 chunk 的最小大小。
193 |       // 限制打包的个数(减少打包生成的js文件和css文件)
194 |       new webpack.optimize.LimitChunkCountPlugin({
195 |         maxChunks: 5,
196 |         minChunkSize: 100
197 |       })
198 |     ]
199 |   },
200 |   css: {
201 |     extract: {
202 |       ignoreOrder: true // 适用于 mini-css-extract-plugin
203 |     }
204 |   }
205 | };
206 | 
207 | module.exports = main;
</content>
</file>
<file><path>bsearch-frontend/search-center/src/api/base.js</path>
<content lines="1-579">
  1 | import http from '@/core/httpInstance';
  2 | 
  3 | function languageContent() {
  4 |   return http.get({
  5 |     url: 'base/languageContent',
  6 |     successNotify: false,
  7 |     errorNotNotify: false,
  8 |     errorTitle: 'hello.title'
  9 |   });
 10 | }
 11 | 
 12 | function saveBuriedPoint(params) {
 13 |   return http.get({
 14 |     url: 'buriedPoint/saveBuriedPoint',
 15 |     params: params,
 16 |     successNotify: false,
 17 |     errorNotNotify: true,
 18 |     errorTitle: 'error'
 19 |   });
 20 | }
 21 | 
 22 | function findDataDict(params) {
 23 |   return http.get({
 24 |     url: 'base/findDataDict',
 25 |     params: params,
 26 |     successNotify: false,
 27 |     errorNotNotify: false,
 28 |     errorTitle: 'error'
 29 |   });
 30 | }
 31 | 
 32 | function findRegions(params) {
 33 |   return http.get({
 34 |     url: 'base/findRegions',
 35 |     params: params,
 36 |     successNotify: false,
 37 |     errorNotNotify: false,
 38 |     errorTitle: 'error'
 39 |   });
 40 | }
 41 | 
 42 | function getHotDayRange() {
 43 |   return http.get({
 44 |     url: 'search/image/getHotDayRangeInfo',
 45 |     successNotify: false,
 46 |     errorNotNotify: true
 47 |   });
 48 | }
 49 | 
 50 | function watermark() {
 51 |   return http.get({
 52 |     url: 'base/watermark',
 53 |     successNotify: false,
 54 |     errorNotNotify: false,
 55 |     errorTitle: 'error'
 56 |   });
 57 | }
 58 | 
 59 | function getXmapInfo(param) {
 60 |   return http.post({
 61 |     url: 'base/getSystemAddress',
 62 |     data: param,
 63 |     successNotify: false,
 64 |     errorNotNotify: false,
 65 |     errorTitle: 'error'
 66 |   });
 67 | }
 68 | 
 69 | function productInfo() {
 70 |   return http.get({
 71 |     url: '/base/getProductInfo',
 72 |     successNotify: false,
 73 |     errorNotNotify: false
 74 |   });
 75 | }
 76 | 
 77 | function findAllDataDictTypes() {
 78 |   return http.get({
 79 |     url: 'base/findAllDataDictTypes',
 80 |     successNotify: false,
 81 |     errorNotNotify: false,
 82 |     errorTitle: 'error'
 83 |   });
 84 | }
 85 | 
 86 | function findAllByTypeCode(param) {
 87 |   return http.get({
 88 |     url: 'base/findAllByTypeCode',
 89 |     params: param,
 90 |     successNotify: false,
 91 |     errorNotNotify: false
 92 |   });
 93 | }
 94 | 
 95 | function getToken() {
 96 |   return http.get({
 97 |     url: 'base/getToken',
 98 |     successNotify: false,
 99 |     errorNotNotify: false,
100 |     errorTitle: 'error'
101 |   });
102 | }
103 | 
104 | function getSelectionProperties(param) {
105 |   return http.post({
106 |     url: 'dict/getSelectionProperties',
107 |     data: param,
108 |     successNotify: false,
109 |     errorNotNotify: false,
110 |     errorTitle: 'error'
111 |   });
112 | }
113 | 
114 | function getCityRegion(params) {
115 |   return http.get({
116 |     url: 'dict/getCityRegion',
117 |     params: params,
118 |     successNotify: false,
119 |     errorNotNotify: false,
120 |     errorTitle: 'error'
121 |   });
122 | }
123 | // 高级搜索获取车辆品牌
124 | function getVehicleBrand(params) {
125 |   return http.get({
126 |     url: 'dict/getVehicleBrand',
127 |     params: params,
128 |     successNotify: false,
129 |     errorNotNotify: false,
130 |     errorTitle: 'error'
131 |   });
132 | }
133 | // 获取名单库接口
134 | function getNamelist() {
135 |   return http.get({
136 |     url: 'base/getNamelist',
137 |     successNotify: false,
138 |     errorNotNotify: true,
139 |     errorTitle: 'error'
140 |   });
141 | }
142 | // 获取xmap配置参数
143 | function getXmapInitConfig(params) {
144 |   return http.get({
145 |     url: 'map/findMapInfoEnabled',
146 |     params: params,
147 |     successNotify: false,
148 |     errorNotNotify: true,
149 |     errorTitle: 'error'
150 |   });
151 | }
152 | // 页面配置获取
153 | function getSearchConfig(params) {
154 |   return http.post({
155 |     url: '/buttonConfig/getConfig',
156 |     data: params,
157 |     successNotify: false,
158 |     errorNotNotify: true,
159 |     errorTitle: 'error'
160 |   });
161 | }
162 | // 获取模块(按钮)权限
163 | function getModuleAuth(params) {
164 |   return http.get({
165 |     url: '/module/auth/getModuleAuth',
166 |     params: params,
167 |     successNotify: false,
168 |     errorNotNotify: true,
169 |     errorTitle: 'error'
170 |   });
171 | }
172 | // 获取详情
173 | function getDetail(param) {
174 |   return http.post({
175 |     url: 'base/queryDetail',
176 |     data: param,
177 |     successNotify: false,
178 |     errorNotNotify: false,
179 |     errorTitle: 'error'
180 |   });
181 | }
182 | 
183 | // 获取目标详情
184 | function getClusterDetail(param) {
185 |   return http.post({
186 |     url: 'base/clusterDetail',
187 |     data: param,
188 |     successNotify: false,
189 |     errorNotNotify: false,
190 |     errorTitle: 'error'
191 |   });
192 | }
193 | 
194 | // 获取驾乘人信息
195 | function getClusterDriver(param) {
196 |   return http.post({
197 |     url: 'base/queryDriver',
198 |     data: param,
199 |     successNotify: false,
200 |     errorNotNotify: false,
201 |     errorTitle: 'error'
202 |   });
203 | }
204 | 
205 | // 获取同行人信息
206 | function getPeerPerson(param) {
207 |   return http.post({
208 |     url: 'base/queryPeerPerson',
209 |     data: param,
210 |     successNotify: false,
211 |     errorNotNotify: false,
212 |     errorTitle: 'error'
213 |   });
214 | }
215 | 
216 | // 获取详情统计
217 | function getDetailStatistic(param) {
218 |   return http.post({
219 |     url: 'base/statisticDetail',
220 |     data: param,
221 |     successNotify: false,
222 |     errorNotNotify: false,
223 |     errorTitle: 'error'
224 |   });
225 | }
226 | // 获取项目地址
227 | function getBusinessConfig(params) {
228 |   return http.get({
229 |     url: 'base/getBusinessConfig',
230 |     params: params,
231 |     successNotify: false,
232 |     errorNotNotify: false,
233 |     errorTitle: 'error'
234 |   });
235 | }
236 | 
237 | function getTraceDetail(params) {
238 |   return http.post({
239 |     url: 'base/traceDetail',
240 |     data: params,
241 |     successNotify: false,
242 |     errorNotNotify: false
243 |   });
244 | }
245 | 
246 | // 获取封面页数据
247 | function getCount(params) {
248 |   return http.get({
249 |     url: 'base/getCount',
250 |     params: params,
251 |     successNotify: false,
252 |     errorNotNotify: false,
253 |     errorTitle: 'error'
254 |   });
255 | }
256 | 
257 | // 获取事件类型
258 | function getPlaceLabelType(params) {
259 |   return http.get({
260 |     url: 'base/getPlaceLabelType',
261 |     params: params,
262 |     successNotify: false,
263 |     errorNotNotify: false,
264 |     errorTitle: 'error'
265 |   });
266 | }
267 | 
268 | // 标签查询
269 | function queryTag(params) {
270 |   return http.get({
271 |     url: 'base/queryTag',
272 |     params: params,
273 |     successNotify: false,
274 |     errorNotNotify: false,
275 |     errorTitle: 'error'
276 |   });
277 | }
278 | 
279 | // 主题树查询
280 | function mixTree(params) {
281 |   return http.get({
282 |     url: 'dataConfig/themeDataType/tree',
283 |     params: params,
284 |     successNotify: false,
285 |     errorNotNotify: false,
286 |     errorTitle: 'error'
287 |   });
288 | }
289 | 
290 | // 主题树查询
291 | function queryByMenuCode(params) {
292 |   return http.post({
293 |     url: 'indexPage/query',
294 |     data: params,
295 |     successNotify: false,
296 |     errorNotNotify: false,
297 |     errorTitle: 'error'
298 |   });
299 | }
300 | 
301 | // 主题条件查询
302 | function conditionList(params) {
303 |   return http.get({
304 |     url: 'search/condition/list',
305 |     params: params,
306 |     successNotify: false,
307 |     errorNotNotify: false,
308 |     errorTitle: 'error'
309 |   });
310 | }
311 | 
312 | function getCloudStorage(params) {
313 |   return http.get({
314 |     url: '/init/cloudStorage',
315 |     params: params,
316 |     successNotify: false,
317 |     errorNotNotify: false,
318 |     errorTitle: 'error'
319 |   });
320 | }
321 | 
322 | function documentHistory(params) {
323 |   return http.post({
324 |     url: 'home/documentHistory',
325 |     data: params,
326 |     successNotify: false,
327 |     errorNotNotify: false
328 |   });
329 | }
330 | 
331 | function videoHistory(params) {
332 |   return http.post({
333 |     url: 'home/videoHistory',
334 |     data: params,
335 |     successNotify: false,
336 |     errorNotNotify: true
337 |   });
338 | }
339 | 
340 | function videoTasks(params) {
341 |   return http.post({
342 |     url: 'home/videoTasks',
343 |     data: params,
344 |     successNotify: false,
345 |     errorNotNotify: true
346 |   });
347 | }
348 | 
349 | function getLongCardFields(params) {
350 |   return http.get({
351 |     url: '/base/clusterFields',
352 |     params: params,
353 |     successNotify: false,
354 |     errorNotNotify: false,
355 |     errorTitle: 'error'
356 |   });
357 | }
358 | 
359 | function getCrossInfo(params) {
360 |   return http.get({
361 |     url: '/search/getCrossInfo',
362 |     params: params,
363 |     successNotify: false,
364 |     errorNotNotify: true,
365 |     errorTitle: 'error'
366 |   });
367 | }
368 | 
369 | function getPlateBelong(params) {
370 |   return http.get({
371 |     url: '/search/getPlateBelong',
372 |     params: params,
373 |     successNotify: false,
374 |     errorNotNotify: false,
375 |     errorTitle: 'error'
376 |   });
377 | }
378 | 
379 | function getMenuList(params) {
380 |   return http.get({
381 |     url: '/config/getMenuList',
382 |     params: params,
383 |     successNotify: false,
384 |     errorNotNotify: false,
385 |     errorTitle: 'error'
386 |   });
387 | }
388 | 
389 | // 查询图搜历史记录
390 | function findImageRecord(params) {
391 |   return http.post({
392 |     url: '/search/record/findImage',
393 |     data: params,
394 |     successNotify: false,
395 |     errorNotNotify: true,
396 |     errorTitle: 'error'
397 |   });
398 | }
399 | 
400 | // 查询文本类记录
401 | function findTextRecord(params) {
402 |   return http.post({
403 |     url: '/search/record/findText',
404 |     data: params,
405 |     successNotify: false,
406 |     errorNotNotify: true,
407 |     errorTitle: 'error'
408 |   });
409 | }
410 | 
411 | function saveImageRecord(params) {
412 |   return http.post({
413 |     url: '/search/record/saveImage',
414 |     data: params,
415 |     successNotify: false,
416 |     errorNotNotify: true,
417 |     errorTitle: 'error'
418 |   });
419 | }
420 | 
421 | function saveTextRecord(params) {
422 |   return http.post({
423 |     url: '/search/record/saveText',
424 |     data: params,
425 |     successNotify: false,
426 |     errorNotNotify: true,
427 |     errorTitle: 'error'
428 |   });
429 | }
430 | function getServiceTime() {
431 |   return http.get({
432 |     url: '/buriedPoint/getServiceTime',
433 |     successNotify: false,
434 |     errorNotNotify: true,
435 |     errorTitle: 'error'
436 |   });
437 | }
438 | // 获取销售项
439 | function getSaleInfos(params) {
440 |   return http.get({
441 |     url: '/module/auth/checkSaleInfo',
442 |     params: params,
443 |     successNotify: false,
444 |     errorNotNotify: true,
445 |     errorTitle: 'error'
446 |   });
447 | }
448 | // 获取兼容性配置（对内接口）
449 | function getCompatibleConfig(params) {
450 |   return http.post({
451 |     url: '/getCompatibleConfig',
452 |     data: params,
453 |     successNotify: false,
454 |     errorNotNotify: false,
455 |     withoutSuffix: true
456 |   });
457 | }
458 | function getModuleSale() {
459 |   return http.get({
460 |     url: '/module/sale/getModuleSale',
461 |     successNotify: false,
462 |     errorNotNotify: true,
463 |     errorTitle: 'error'
464 |   });
465 | }
466 | 
467 | // 获取侧脸角度阈值
468 | function getSideFaceAngle() {
469 |   return http.get({
470 |     url: '/special/profile/obtainParams',
471 |     successNotify: false,
472 |     errorNotNotify: true,
473 |     errorTitle: 'error'
474 |   });
475 | }
476 | 
477 | // 获取加入档案权限
478 | function getUserRole() {
479 |   return http.get({
480 |     url: '/role/getUserRole',
481 |     successNotify: false,
482 |     errorNotNotify: true,
483 |     errorTitle: 'error'
484 |   });
485 | }
486 | 
487 | // 分布式字典项查询
488 | function findDictItems(params) {
489 |   return http.post({
490 |     url: '/distributed/findDictItems',
491 |     data: params,
492 |     successNotify: false,
493 |     errorNotNotify: true
494 |   });
495 | }
496 | 
497 | function getEncryptParam() {
498 |   return http.get({
499 |     url: '/search/export/getEncryptParam',
500 |     successNotify: false,
501 |     errorNotNotify: true,
502 |     errorTitle: 'error'
503 |   });
504 | }
505 | 
506 | function getEncryptionType(params) {
507 |   return http.get({
508 |     url: '/search/export/getEncryptionType',
509 |     params: params,
510 |     successNotify: false,
511 |     errorNotNotify: true,
512 |     errorTitle: 'error'
513 |   });
514 | }
515 | 
516 | function passwordCheck(params) {
517 |   return http.post({
518 |     url: '/search/export/passwordCheck',
519 |     data: params,
520 |     successNotify: false,
521 |     errorNotNotify: true
522 |   });
523 | }
524 | 
525 | export default {
526 |   getNamelist,
527 |   saveBuriedPoint,
528 |   languageContent,
529 |   findDataDict,
530 |   findRegions,
531 |   getHotDayRange,
532 |   watermark,
533 |   productInfo,
534 |   findAllDataDictTypes,
535 |   findAllByTypeCode,
536 |   getToken,
537 |   getXmapInfo,
538 |   getSelectionProperties,
539 |   getCityRegion,
540 |   getVehicleBrand,
541 |   getDetail,
542 |   getClusterDetail,
543 |   getPeerPerson,
544 |   getClusterDriver,
545 |   getXmapInitConfig,
546 |   getDetailStatistic,
547 |   getBusinessConfig,
548 |   getTraceDetail,
549 |   getCount,
550 |   getPlaceLabelType,
551 |   queryTag,
552 |   getSearchConfig,
553 |   getModuleAuth,
554 |   mixTree,
555 |   conditionList,
556 |   getCloudStorage,
557 |   videoHistory,
558 |   videoTasks,
559 |   documentHistory,
560 |   getLongCardFields,
561 |   getCrossInfo,
562 |   getPlateBelong,
563 |   getMenuList,
564 |   saveImageRecord,
565 |   saveTextRecord,
566 |   findImageRecord,
567 |   findTextRecord,
568 |   getServiceTime,
569 |   getSaleInfos,
570 |   getCompatibleConfig,
571 |   getModuleSale,
572 |   getSideFaceAngle,
573 |   queryByMenuCode,
574 |   getUserRole,
575 |   findDictItems,
576 |   getEncryptParam,
577 |   getEncryptionType,
578 |   passwordCheck
579 | };
</content>
</file>
<file><path>bsearch-frontend/search-center/src/store/index.js</path>
<content lines="1-25">
 1 | import Vue from 'vue';
 2 | import Vuex from 'vuex';
 3 | import mutations from './common/mutations';
 4 | import actions from './common/actions';
 5 | import state from './common/state';
 6 | import fusion from './fusion';
 7 | import popWindow from './popWindow';
 8 | import targetTrace from './targetTrace';
 9 | import mapOld from './mapOld';
10 | import distributed from './distributed';
11 | 
12 | Vue.use(Vuex);
13 | 
14 | export default new Vuex.Store({
15 |   state,
16 |   actions,
17 |   mutations,
18 |   modules: {
19 |     fusion,
20 |     popWindow,
21 |     targetTrace,
22 |     mapOld,
23 |     distributed
24 |   }
25 | });
</content>
</file>
<file><path>bsearch-frontend/text-image/package.json</path>
<content lines="1-158">
  1 | {
  2 |   "name": "text-image",
  3 |   "version": "2.5.0",
  4 |   "private": true,
  5 |   "scripts": {
  6 |     "serve": "vue-cli-service serve",
  7 |     "build": "vue-cli-service build",
  8 |     "build:all": "vue-cli-service build:theme --mode production && vue-cli-service build:i18n && vue-cli-service registry:hui-pro && vue-cli-service build",
  9 |     "test:unit": "vue-cli-service test:unit",
 10 |     "lint": "vue-cli-service lint",
 11 |     "build:i18n": "vue-cli-service build:i18n",
 12 |     "build:only": "vue-cli-service build",
 13 |     "build:theme": "vue-cli-service build:theme",
 14 |     "log": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
 15 |     "registry:hui-pro": "vue-cli-service registry:hui-pro",
 16 |     "update": "vue-cli-service registry:hui-pro && vue-cli-service build:theme"
 17 |   },
 18 |   "dependencies": {
 19 |     "@agr/vue-cli-plugin-registry": "^1.2.2",
 20 |     "@conch/svg-symbol-icon": "^0.2.10",
 21 |     "@hi-map/plugin-trackPlayer": "1.3.5",
 22 |     "@hi-map/vue": "0.7.4",
 23 |     "@hi-vm/components": "0.0.8",
 24 |     "@hui-pro/img-snippets": "^1.20.3",
 25 |     "@isearchui-pro/card-list": "1.0.6",
 26 |     "@isearchui-pro/comp": "1.0.1-beta.14",
 27 |     "@isearchui-pro/error-dialog": "1.0.6",
 28 |     "@isearchui-pro/export-dialog": "1.8.6-beta.50",
 29 |     "@isearchui-pro/human-detail-panel": "1.0.8-beta.1",
 30 |     "@isearchui-pro/lib-tag": "1.0.5-beta.0",
 31 |     "@isearchui-pro/mix-pick-time": "1.4.0",
 32 |     "@isearchui-pro/pro-utils": "1.0.0-beta.133",
 33 |     "@isearchui-pro/right-detail-panel": "2.0.11-beta.30",
 34 |     "@isearchui-pro/snap-card": "1.1.55",
 35 |     "@isearchui-pro/tag-hybrid": "1.0.8",
 36 |     "@isearchui-pro/tag-list": "1.0.7",
 37 |     "@isearchui-pro/target-img-upload": "1.1.5",
 38 |     "@isearchui-pro/theme": "1.0.8",
 39 |     "@isearchui-pro/upload-card": "1.0.7-beta.1",
 40 |     "@isearchui-pro/upload-empty": "1.0.8",
 41 |     "@isearchui-pro/upload-panel": "1.0.36",
 42 |     "@isearchui-pro/utils": "1.0.5-beta.4",
 43 |     "@wistom/utils": "^3.0.0",
 44 |     "@wistom/vue-cli-plugin-wistom-base": "~3.0.0",
 45 |     "add": "^2.0.6",
 46 |     "animate.css": "^4.1.1",
 47 |     "bsearch-com": "0.5.0-beta.20",
 48 |     "compression-webpack-plugin": "^6.0.5",
 49 |     "core-js": "^3.6.5",
 50 |     "cross-map-track": "0.0.4",
 51 |     "current-script-polyfill": "^1.0.0",
 52 |     "d3": "5.15.0",
 53 |     "es-abstract": "1.21.1",
 54 |     "faker": "^5.5.3",
 55 |     "git-cz": "^4.7.1",
 56 |     "hel-micro": "^3.13.8",
 57 |     "hel-micro-core": "^3.13.5",
 58 |     "hi-map-vue": "^2.1.30",
 59 |     "leader-line": "^1.0.5",
 60 |     "md5": "^2.3.0",
 61 |     "moment": "^2.29.1",
 62 |     "perfect-scrollbar": "^1.5.2",
 63 |     "remote-selection-point": "0.0.2-alpha.1",
 64 |     "skeleton-loader": "^2.0.0",
 65 |     "velocity-animate": "^2.0.6",
 66 |     "vue": "2.7.x",
 67 |     "vue-router": "^3.1.6",
 68 |     "vuex": "^3.1.3",
 69 |     "xlsx": "^0.16.9",
 70 |     "yarn": "^1.22.10"
 71 |   },
 72 |   "devDependencies": {
 73 |     "@agr/vue-cli-plugin-base": "~1.1.0",
 74 |     "@agr/vue-cli-plugin-changelog": "~1.1.0",
 75 |     "@agr/vue-cli-plugin-i18n": "~1.1.0",
 76 |     "@agr/vue-cli-plugin-theme": "~1.1.0",
 77 |     "@commitlint/cli": "^9.1.2",
 78 |     "@commitlint/config-conventional": "^9.1.2",
 79 |     "@hui-pro/album": "^1.19.4",
 80 |     "@hui-pro/color-tag": "^1.19.0",
 81 |     "@hui-pro/empty": "^1.16.0",
 82 |     "@hui-pro/helper": "^2.0.0-beta.2",
 83 |     "@hui-pro/img-carousel": "^1.19.2",
 84 |     "@hui-pro/img-preview": "^1.19.1",
 85 |     "@hui-pro/img-result-card": "^1.19.1",
 86 |     "@hui-pro/img-view": "^1.19.2",
 87 |     "@hui-pro/layout": "^1.16.0",
 88 |     "@hui-pro/locale": "^1.13.0",
 89 |     "@hui-pro/page": "^2.0.0-alpha.5",
 90 |     "@hui-pro/search-pagination": "^1.13.0",
 91 |     "@hui-pro/sync-tree": "^2.0.0-beta.10",
 92 |     "@hui-pro/utils": "^1.16.0",
 93 |     "@hui-pro/vehicle-brand-input": "2.0.0-beta.5",
 94 |     "@hui-pro/vehicle-color-input": "^1.19.1",
 95 |     "@hui-pro/vehicle-number-input": "^1.19.1",
 96 |     "@hui-pro/vehicle-plate-color-input": "^1.19.2",
 97 |     "@hui-pro/vehicle-plate-tag": "^1.19.1",
 98 |     "@hui/eslint-config-vue": "^1.0.7",
 99 |     "@hui/eslint-config-vue-typescript": "^1.0.9",
100 |     "@hui/stylelint-scss": "^1.0.2",
101 |     "@hui/svg-icon": "^1.0.1",
102 |     "@isearchui-pro/common-detail-panel": "1.0.3",
103 |     "@isearchui-pro/magnify-glass": "1.0.4",
104 |     "@vue/babel-helper-vue-jsx-merge-props": "^1.2.1",
105 |     "@vue/babel-preset-jsx": "^1.2.4",
106 |     "@vue/cli-plugin-babel": "^4.5.0",
107 |     "@vue/cli-plugin-eslint": "^4.5.0",
108 |     "@vue/cli-plugin-unit-jest": "^4.5.0",
109 |     "@vue/cli-service": "^4.5.0",
110 |     "@vue/eslint-config-prettier": "^6.0.0",
111 |     "@vue/test-utils": "^1.0.3",
112 |     "axios": "^0.19.2",
113 |     "babel-eslint": "^10.1.0",
114 |     "client-container": "^0.2.65",
115 |     "commitizen": "^4.1.2",
116 |     "element-resize-detector": "^1.2.4",
117 |     "eslint": "^6.8.0",
118 |     "eslint-plugin-prettier": "^3.1.3",
119 |     "eslint-plugin-vue": "^6.2.2",
120 |     "hui": "^2.29.1",
121 |     "husky": "^4.2.5",
122 |     "js-base64": "^3.7.5",
123 |     "lint-staged": "^9.5.0",
124 |     "prettier": "^1.19.1",
125 |     "raw-loader": "^4.0.0",
126 |     "sass": "^1.26.5",
127 |     "sass-loader": "^8.0.2",
128 |     "simple-player-pro": "0.3.47-beta.10",
129 |     "vue-cli-plugin-hui-icon-sets": "~0.1.2",
130 |     "vue-i18n": "^8.16.0",
131 |     "vue-svg-loader": "^0.16.0",
132 |     "vue-template-compiler": "^2.6.11",
133 |     "vuedraggable": "^2.24.3"
134 |   },
135 |   "commitlint": {
136 |     "extends": [
137 |       "@commitlint/config-conventional"
138 |     ]
139 |   },
140 |   "config": {
141 |     "commitizen": {
142 |       "path": "node_modules/git-cz"
143 |     }
144 |   },
145 |   "husky": {
146 |     "hooks": {
147 |       "pre-commit": "lint-staged"
148 |     }
149 |   },
150 |   "lint-staged": {
151 |     "*.{js,vue}": [
152 |       "vue-cli-service lint"
153 |     ]
154 |   },
155 |   "resolutions": {
156 |     "es5-ext": "0.10.53"
157 |   }
158 | }
</content>
</file>
<file><path>bsearch-frontend/theme-config/package.json</path>
<content lines="1-131">
  1 | {
  2 |   "name": "theme-config",
  3 |   "version": "0.1.0",
  4 |   "private": true,
  5 |   "scripts": {
  6 |     "serve": "vue-cli-service serve",
  7 |     "build": "vue-cli-service build:i18n && vue-cli-service build",
  8 |     "lint": "vue-cli-service lint",
  9 |     "build:i18n": "vue-cli-service build:i18n",
 10 |     "build:only": "vue-cli-service build",
 11 |     "build:theme": "vue-cli-service build:theme",
 12 |     "log": "conventional-changelog -p angular -i CHANGELOG.md -s && git add CHANGELOG.md",
 13 |     "registry:hui-pro": "vue-cli-service registry:hui-pro",
 14 |     "test:unit": "vue-cli-service test:unit",
 15 |     "update": "vue-cli-service registry:hui-pro && vue-cli-service build:theme"
 16 |   },
 17 |   "dependencies": {
 18 |     "@hui-pro/album": "^1.19.5",
 19 |     "@hui-pro/img-carousel": "^1.19.2",
 20 |     "@hui-pro/sync-tree": "^2.0.0-beta.10",
 21 |     "@isearchui-pro/common-detail-panel": "1.0.10-beta.4",
 22 |     "@isearchui-pro/comp": "2.2.2",
 23 |     "@isearchui-pro/error-dialog": "1.1.5",
 24 |     "@isearchui-pro/human-detail-panel": "1.0.9-beta.0",
 25 |     "@isearchui-pro/lib-tag": "^1.0.2",
 26 |     "@isearchui-pro/magnify-glass": "1.0.5-beta.0",
 27 |     "@isearchui-pro/mix-pick-time": "1.4.3",
 28 |     "@isearchui-pro/pro-utils": "2.1.1",
 29 |     "@isearchui-pro/snap-card": "1.1.48",
 30 |     "@isearchui-pro/tag-hybrid": "1.0.12",
 31 |     "@isearchui-pro/tag-list": "^1.0.3",
 32 |     "@isearchui-pro/target-img-upload": "1.1.2",
 33 |     "@isearchui-pro/theme": "1.0.8",
 34 |     "@isearchui-pro/utils": "1.0.5-beta.15",
 35 |     "@isearchui-pro/validatedPwd": "1.2.9",
 36 |     "@wistom-hui/theme": "0.0.9-alpha.7",
 37 |     "@wistom-hui/theme-pro": "^0.0.5",
 38 |     "client-container": "0.3.4",
 39 |     "compression-webpack-plugin": "^6.0.5",
 40 |     "core-js": "^3.6.5",
 41 |     "crypto-js": "^4.2.0",
 42 |     "current-script-polyfill": "^1.0.0",
 43 |     "element-resize-detector": "^1.2.4",
 44 |     "faker": "^5.5.3",
 45 |     "hel-micro": "^3.13.8",
 46 |     "hel-micro-core": "^3.13.5",
 47 |     "hi-map-vue": "^2.1.30",
 48 |     "html2canvas": "^1.0.0-rc.7",
 49 |     "husky": "^4.3.8",
 50 |     "md5": "^2.3.0",
 51 |     "moment": "^2.29.1",
 52 |     "remote-selection-point": "0.1.15",
 53 |     "simple-player-pro": "0.3.47-beta.10",
 54 |     "vue": "^2.6.11",
 55 |     "vue-color": "^2.8.1",
 56 |     "vue-json-viewer": "^2.2.18",
 57 |     "vue-lottie": "^0.2.1",
 58 |     "vue-router": "^3.1.6",
 59 |     "vue2-perfect-scrollbar": "^1.5.0",
 60 |     "vuex": "^3.1.3",
 61 |     "xlsx": "^0.17.3"
 62 |   },
 63 |   "devDependencies": {
 64 |     "@agr/vue-cli-plugin-base": "~1.1.0",
 65 |     "@agr/vue-cli-plugin-changelog": "~1.1.0",
 66 |     "@agr/vue-cli-plugin-i18n": "~1.1.0",
 67 |     "@agr/vue-cli-plugin-registry": "~1.1.0",
 68 |     "@agr/vue-cli-plugin-theme": "~1.1.0",
 69 |     "@commitlint/cli": "^9.1.2",
 70 |     "@commitlint/config-conventional": "^9.1.2",
 71 |     "@hi-map/icons": "^1.3.2",
 72 |     "@hui-pro/color-tag": "^1.19.0",
 73 |     "@hui-pro/empty": "^1.19.0",
 74 |     "@hui-pro/img-preview": "^1.19.2",
 75 |     "@hui-pro/img-snippets": "^1.19.1",
 76 |     "@hui-pro/img-view": "^1.19.2",
 77 |     "@hui-pro/layout": "^1.19.0",
 78 |     "@hui-pro/locale": "^1.13.1",
 79 |     "@hui-pro/page": "^2.0.0-beta.8",
 80 |     "@hui-pro/search-pagination": "^1.13.0",
 81 |     "@hui-pro/utils": "^1.19.0",
 82 |     "@hui-pro/vehicle-brand-input": "^1.19.5",
 83 |     "@hui-pro/vehicle-color-input": "^1.19.1",
 84 |     "@hui-pro/vehicle-number-input": "^1.19.2",
 85 |     "@hui-pro/vehicle-plate-color-input": "^1.19.3",
 86 |     "@hui-pro/vehicle-plate-tag": "^1.19.4",
 87 |     "@hui/eslint-config-vue": "^1.0.14",
 88 |     "@hui/eslint-config-vue-typescript": "^1.0.14",
 89 |     "@hui/stylelint-scss": "^1.0.2",
 90 |     "@hui/svg-icon": "^1.0.1",
 91 |     "@vue/cli-plugin-babel": "^4.5.0",
 92 |     "@vue/cli-plugin-eslint": "^4.5.0",
 93 |     "@vue/cli-plugin-unit-jest": "^4.5.0",
 94 |     "@vue/cli-service": "^4.5.0",
 95 |     "@vue/test-utils": "^1.0.3",
 96 |     "add-charset-webpack-plugin": "^1.0.6",
 97 |     "axios": "^0.19.2",
 98 |     "babel-eslint": "^10.1.0",
 99 |     "commitizen": "^4.1.2",
100 |     "eslint": "^6.8.0",
101 |     "eslint-plugin-vue": "^6.2.2",
102 |     "git-cz": "^4.7.1",
103 |     "hui": "2.41.10",
104 |     "lint-staged": "^10.5.4",
105 |     "raw-loader": "^4.0.0",
106 |     "sass": "^1.26.5",
107 |     "sass-loader": "^8.0.2",
108 |     "vue-i18n": "^8.16.0",
109 |     "vue-svg-loader": "^0.16.0",
110 |     "vue-template-compiler": "^2.6.11",
111 |     "vuedraggable": "^2.24.3"
112 |   },
113 |   "commitlint": {
114 |     "extends": [
115 |       "@commitlint/config-conventional"
116 |     ]
117 |   },
118 |   "config": {
119 |     "commitizen": {
120 |       "path": "node_modules/git-cz"
121 |     }
122 |   },
123 |   "husky": {
124 |     "hooks": {
125 |       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
126 |     }
127 |   },
128 |   "resolutions": {
129 |     "es5-ext": "0.10.53"
130 |   }
131 | }
</content>
</file>
</files>
<environment_details>
# VSCode Visible Files
bsearch-frontend\search-center\src\pages\businessComponents\businessSubthemeResult\index.vue

# VSCode Open Tabs
bsearch-frontend/search-center/vue.config.js,bsearch-frontend/search-center/src/pages/businessComponents/snapClusterResult/snapCard/snapBusinessCard.vue,bsearch-frontend/search-center/src/components/commonSubthemeResult/src/commonSubthemeResult.vue,bsearch-frontend/search-center/src/store/fusion/state.js,bsearch-frontend/search-center/src/store/fusion/mutations.js,bsearch-frontend/search-center/src/store/fusion/getters.js,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/builtDialog/index.vue,bsearch-frontend/search-center/src/components/imgHistory/src/historyCard.vue,bsearch-frontend/search-center/src/mixins/commonOperation.js,bsearch-frontend/search-center/src/pages/fusionResult/fusionResult.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/targetTrackPanel/targetTrackPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/traceBusiness.js,bsearch-frontend/search-center/src/pages/distributedSearch/distributedSearch.vue,bsearch-frontend/search-center/src/pages/distributedSearch/components/imgConditionPanel/imgConditionPanel.vue,bsearch-frontend/search-center/src/pages/fusionResult/mixins/imageBusiness.js,bsearch-frontend/search-center/src/components/uploadCard/src/uploadCard.vue,bsearch-frontend/search-center/src/pages/businessComponents/businessSubthemeResult/index.scss,bsearch-frontend/search-center/package.json

# Current Time
2026/3/19 下午10:33:31 (Asia/Shanghai, UTC+8:00)

# Current Cost
$0.00

# Current Mode
<slug>code</slug>
<name>💻 Code</name>
<model>Qwen3-Coder-480B</model>
</environment_details>

---

**Assistant:**

基于对项目代码的分析，我将从技术栈、架构、打包、模块、功能和优化等方面全面总结本项目。

<attempt_completion>
<result>
# 北京体态搜索项目技术分析报告

## 一、技术栈

### 前端核心技术
- **框架**: Vue 2.7.x
- **状态管理**: Vuex 3.1.3
- **路由**: Vue Router 3.1.6
- **构建工具**: Vue CLI 4.5.0 + Webpack
- **语言**: JavaScript (ES6+)
- **样式**: SCSS/Less

### UI组件库
- **主UI库**: HUI (海康威视内部组件库) 2.29.1+
- **Pro组件**: @hui-pro 系列（布局、图片、表单等）
- **搜索UI**: @isearchui-pro 系列（卡片、列表、上传等）
- **地图组件**: hi-map-vue 2.1.30、@hi-map/vue

### 核心依赖
- **国际化**: vue-i18n 8.16.0
- **时间处理**: moment 2.29.1
- **视频播放**: simple-player-pro 0.3.47-beta.10
- **数据可视化**: d3 5.15.0
- **文件处理**: xlsx 0.16.9
- **微前端**: hel-micro 3.13.8
- **拖拽**: vuedraggable 2.24.3
- **滚动条**: perfect-scrollbar 1.5.2
- **加密**: crypto-js 4.2.0

### 工具库
- **HTTP**: axios 0.19.2
- **工具**: @hui-pro/utils、@isearchui-pro/utils
- **压缩**: compression-webpack-plugin 6.0.5

## 二、架构设计

### 整体架构
采用**多模块微前端架构**，包含4个独立子应用：

1. **search-center** (主应用)
   - 智图研判核心功能
   - 融合搜索、轨迹追踪、目标追踪
   - 体态搜索、属性搜索

2. **text-image**
   - 文本图像搜索
   - 结果展示组件

3. **theme-config**
   - 主题配置管理
   - 业务组件配置

4. **data-config**
   - 数据源配置
   - 字段配置、模型管理

### 技术架构模式
- **MVVM模式**: Vue响应式数据绑定
- **模块化设计**: Vuex模块化状态管理
- **组件化开发**: 高度封装的业务组件
- **混合渲染**: SSR + CSR（通过FreeMarker模板）

### 目录结构
```
bsearch-frontend/
├── search-center/          # 主应用
│   ├── src/
│   │   ├── pages/         # 页面组件
│   │   ├── components/    # 公共组件
│   │   ├── store/         # Vuex状态管理
│   │   ├── api/           # API接口
│   │   ├── mixins/        # 混入
│   │   └── utils/         # 工具函数
├── text-image/            # 文本图像模块
├── theme-config/          # 主题配置模块
├── data-config/           # 数据配置模块
└── developdoc/            # 开发文档
```

## 三、打包与构建

### 构建配置
```javascript
// vue.config.js 关键配置
- 入口文件: [huiThemeEntry, projectThemeEntry, './src/main']
- 输出目录: ../../bsearch-web/view/src/main/resources/templates/searchCenter
- 静态资源路径: /bsearch-web/searchCenter
- 模板文件: index.ftlh (生产) / index.html (开发)
- 开发服务器端口: 7005
```

### 打包优化
1. **代码分割**: LimitChunkCountPlugin限制chunk数量（最多5个）
2. **Gzip压缩**: compression-webpack-plugin压缩js/css
3. **按需加载**: 动态import()实现路由懒加载
4. **依赖转译**: transpileDependencies包含第三方库
5. **移除prefetch**: 删除预加载插件减少首屏加载

### 构建脚本
```json
{
  "build": "vue-cli-service build:i18n && vue-cli-service build",
  "build:all": "vue-cli-service build:theme && vue-cli-service build:i18n && vue-cli-service registry:hui-pro && vue-cli-service build"
}
```

## 四、模块划分

### Vuex模块
- **fusion**: 融合搜索状态
- **popWindow**: 弹窗管理
- **targetTrace**: 目标追踪状态
- **mapOld**: 地图模块
- **distributed**: 分布式搜索

### 业务模块
1. **融合搜索模块**
   - 视图搜索（图片搜索）
   - 属性搜索
   - 多目标搜索
   - 关联关系搜索

2. **轨迹追踪模块**
   - 临时轨迹
   - 线索库轨迹
   - 室内轨迹
   - 地图轨迹

3. **目标追踪模块**
   - 智能追踪
   - 追踪任务管理
   - 轨迹补充

4. **体态搜索模块**
   - 体态视频搜索
   - 体态属性搜索
   - 体态结果展示

### Mixins混入
- **commonOperation**: 通用操作（2600+行）
  - 卡片操作按钮处理
  - 跳转逻辑
  - 权限控制

- **imageBusiness**: 图片搜索业务
- **trackBusiness**: 轨迹业务
- **traceBusiness**: 追踪业务
- **attrBusiness**: 属性搜索业务
- **videoMixin**: 视频相关

## 五、核心功能

### 1. 智能图像搜索
- **人脸搜索**: 支持侧脸、背影识别
- **人体搜索**: 全身、上半身、下半身
- **车辆搜索**: 车牌、车型、颜色
- **非机动车搜索**: 自行车、电动车等
- **体态搜索**: 行为姿态识别

### 2. 属性搜索
- **人脸属性**: 年龄、性别、眼镜、口罩等
- **人体属性**: 上衣、下衣、背包、帽子等
- **车辆属性**: 品牌、颜色、车型、车牌等
- **体态属性**: 行为类型、动作等

### 3. 轨迹追踪
- **多维轨迹**: 人员、车辆轨迹
- **地图轨迹**: 时间轴、点位展示
- **室内轨迹**: 室内点位轨迹
- **轨迹补充**: 手动补充轨迹点

### 4. 目标追踪
- **智能追踪**: 自动追踪目标
- **追踪任务**: 任务创建、管理
- **线索库**: 线索收集、管理

### 5. 结果展示
- **卡片模式**: 大图、小图、列表
- **聚类模式**: 抓拍聚类、名单聚类
- **详情面板**: 右侧详情展示
- **导出功能**: Excel导出、加密导出

### 6. 权限控制
- **销售项控制**: 功能模块权限
- **按钮权限**: 操作按钮权限
- **数据权限**: 数据访问权限
- **兼容性配置**: 版本兼容处理

## 六、性能优化

### 1. 代码层面
- **路由懒加载**: 动态import()按需加载页面
- **组件懒加载**: 异步组件加载
- **按需引入**: 第三方库按需引入
- **Tree Shaking**: 移除未使用代码

### 2. 数据层面
- **虚拟滚动**: 大数据列表虚拟滚动
- **分页加载**: 结果分页加载
- **缓存策略**: localStorage缓存配置
- **防抖节流**: 搜索输入防抖

### 3. 渲染层面
- **v-if vs v-show**: 合理使用条件渲染
- **key优化**: 列表渲染key优化
- **计算属性**: 缓存计算结果
- **keep-alive**: 页面缓存

### 4. 网络层面
- **Gzip压缩**: 静态资源压缩
- **CDN加速**: 静态资源CDN
- **接口合并**: 批量请求合并
- **图片懒加载**: 图片按需加载

### 5. 构建层面
- **代码分割**: 限制chunk数量
- **压缩混淆**: 代码压缩混淆
- **Source Map**: 开发环境source map
- **缓存策略**: 文件名hash缓存

## 七、技术亮点

### 1. 微前端架构
- 使用hel-micro实现微前端
- 独立开发、独立部署
- 模块间通信

### 2. 复杂状态管理
- Vuex模块化设计
- 5个业务模块独立管理
- 2600+行通用操作混入

### 3. 权限系统
- 三层权限控制（销售项、按钮、数据）
- 兼容性配置处理
- 动态权限计算

### 4. 地图集成
- hi-map-vue地图组件
- 轨迹可视化
- 点位选择、周边查询

### 5. 视频集成
- simple-player-pro视频播放器
- 视频结构化
- 录像回放

### 6. 国际化
- vue-i18n国际化
- 中英文支持
- 动态语言切换

## 八、项目特点

### 优势
1. **功能完整**: 覆盖图像搜索、轨迹追踪、目标追踪等完整业务流程
2. **架构清晰**: 模块化设计，职责分明
3. **可扩展性**: 微前端架构，易于扩展
4. **权限完善**: 多层权限控制，安全可靠
5. **性能优化**: 多维度性能优化，用户体验好

### 挑战
1. **代码复杂度**: 单文件超过3000行，维护成本高
2. **依赖众多**: 第三方依赖100+，升级风险
3. **兼容性**: 需要兼容多个版本
4. **性能压力**: 大数据量搜索、轨迹渲染

## 九、技术债务

1. **代码重构**: 部分组件过大，需要拆分
2. **类型安全**: 缺少TypeScript，类型不明确
3. **测试覆盖**: 单元测试覆盖率低
4. **文档完善**: 部分功能缺少文档
5. **依赖更新**: 部分依赖版本较旧

## 十、总结

这是一个**企业级智能搜索系统**，采用Vue 2.x技术栈，实现了完整的图像搜索、轨迹追踪、目标追踪等功能。项目采用微前端架构，模块化设计，权限控制完善，性能优化到位。虽然存在一些技术债务，但整体架构合理，功能完整，是一个成熟的企业级应用。
</result>
</attempt_completion>

