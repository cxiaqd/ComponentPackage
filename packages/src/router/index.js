import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Index from "@/views/index";

const routes = [
  {
    path: "/",
    component: Index,
  },
  {
    path: "/upload",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/el-form-upload"),
  },
  {
    path: "/download",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/axios-download"),
  },
  {
    path: "/table",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/table"),
  },
  {
    path: "/button",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/more-kind-button"),
  },
  {
    path: "/interview",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/interview-study"),
  },
  {
    path: "/test",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/test"),
  },
  {
    path: "/graillayout",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/Layout/grail-layout"),
  },
  {
    path: "/Inputlayout",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/Layout/input-layout"),
  },
  {
    path: "/MainLayout",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/Layout/主题布局"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
