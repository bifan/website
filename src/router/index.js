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
  }
];

const router = new VueRouter({
  routes
});

export default router;
