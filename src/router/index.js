import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      isNeedKeepAlive: true
    },
    component: Home
  },
  {
    path: "/front-end",
    name: "Front-end",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    meta: {
      isNeedKeepAlive: true
    },
    // 使用import 异步加载, 触发Webpack 默认效果 → 单独打包动态加载的组件, 以做到单页面按需加载(路由懒加载)的效果
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Front-end.vue")
  },
  {
    path: "/coding",
    name: "Coding",
    meta: {
      isNeedKeepAlive: true
    },
    component: () => import("@/views/Coding.vue")
  },
  {
    path: "/d-masonry",
    name: "D-Masonry-Component",
    meta: {
      isNeedKeepAlive: true
    },
    component: () => import("@/views/D-Masonry-Component.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
