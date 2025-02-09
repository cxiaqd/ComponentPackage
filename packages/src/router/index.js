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
    path: "/function-components",
    component: () =>
      import(/* webpackChunkName: "upload" */ "@/components/FunctionComponents/multiple-functions"),
  },
  {
    path: "/table",
    component: () =>
      import(/* webpackChunkName: "table" */ "@/components/table"),
  },
  {
    path: "/button",
    component: () =>
      import(/* webpackChunkName: "button" */ "@/components/FunctionComponents/more-kind-button"),
  },
  {
    path: "/interview",
    component: () =>
      import(/* webpackChunkName: "interview" */ "@/components/interview-study"),
  },
  {
    path: "/test",
    component: () =>
      import(/* webpackChunkName: "test" */ "@/components/test"),
  },
  {
    path: "/graillayout",
    component: () =>
      import(/* webpackChunkName: "graillayout" */ "@/components/Layout/grail-layout"),
  },
  {
    path: "/MainLayout",
    component: () =>
      import(/* webpackChunkName: "MainLayout" */ "@/components/Layout/主题布局"),
  },
  {
    path: "/IsComponent",
    component: () =>
      import(/* webpackChunkName: "IsComponent" */ "@/components/IsComponent"),
  },
  {
    path: "/IsSlot",
    component: () =>
      import(/* webpackChunkName: "IsSlot" */ "@/components/IsSlot"),
  },
  {
    path: "/Attrs",
    component: () =>
      import(/* webpackChunkName: "Attrs" */ "@/components/Attrs"),
  },
  {
    path: "/poetry",
    component: () =>
      import(/* webpackChunkName: "poetry" */ "@/components/ChinesePoetry"),
  },
  {
    path: "/utilExtend",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/ExtendUtil"),
  },
  {
    path: "/dragg",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/DragElement"),
  },
  {
    path: "/dragDrop",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/DragElement/dragble"),
  },
  {
    path: "/replaceKey",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/replaceKey"),
  },
  {
    path: "/vant01",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/Vant/test01"),
  },
  {
    path: "/animation",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/animation"),
  },
  {
    path: "/webWorker",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/webWorker"),
  },
  {
    path: "/lotAxios",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/axios/lot-request"),
  },
  {
    path: "/infinite",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/infiniteScroll/test.vue"),
  },
  {
    path: "/vueInfinite",
    component: () =>
      import(/* webpackChunkName: "utilExtend" */ "@/components/vueInfiniteScroll"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
