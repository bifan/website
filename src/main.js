import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

// import WebP from "./plugins/webp";

// CSS 预处理
import "@/scss/index.scss";

import "./registerServiceWorker";

Vue.config.productionTip = false;

// Vue.use(WebP);

(async () => {
  // 判断浏览器是否支持webp 格式的图片
  // Vuetify 的v-img 组件不支持图片fallback, 只好用JS 来修改图片的URL
  Vue.prototype.isSupportWebp = false;
  if (self.createImageBitmap) {
    const webpData =
      "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";
    const blob = await fetch(webpData).then(r => r.blob());
    await createImageBitmap(blob).then(() => {
      Vue.prototype.isSupportWebp = true;
    });
  }

  new Vue({
    router,
    store,
    vuetify,
    // WebP,
    render: h => h(App)
  }).$mount("#app");
})();
