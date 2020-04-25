/*
  想要使用webp 格式的图片
  但是Vuetify <v-img> 不支持<picture><resource> 这样的fallback 机制
  只好另寻他径了

  https://github.com/slexx1234/v-webp/blob/master/index.js
  https://dev.to/gksander/webp-ing-your-site-reduce-image-file-size-increase-site-performance-4ho8
*/
class WebP {
  constructor() {
    this.isSupportWebp = false;

    try {
      this.isSupportWebp =
        document
          .createElement("canvas")
          .toDataURL("image/webp")
          .indexOf("data:image/webp") == 0;
    } catch (e) {
      console.warn("This browser not support Webp!");
    }
  }

  install(Vue) {
    Vue.prototype.isSupportWebp = this.isSupportWebp;
    Vue.prototype.useWebP = function(url) {
      if (this.isSupportWebp) {
        url = url.replace(/\.\w{1,5}$/, ".webp");
      }
      // url = require(url);
      return url;
    };
  }
}

module.exports = new WebP();
