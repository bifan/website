import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import WebP from "./plugins/webp";

// CSS 预处理
import "@/scss/index.scss";

Vue.config.productionTip = false;

Vue.use(WebP);
new Vue({
  router,
  store,
  vuetify,
  WebP,
  render: h => h(App)
}).$mount("#app");
