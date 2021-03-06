/*
  想要使用webp 格式的图片
  但是Vuetify <v-img> 不支持<picture><resource> 这样的fallback 机制
  只好另寻他径了

  https://github.com/slexx1234/v-webp/blob/master/index.js
  https://dev.to/gksander/webp-ing-your-site-reduce-image-file-size-increase-site-performance-4ho8
  https://developers.google.com/speed/webp/faq
    最终还是要靠webp 之父, Google
*/
class WebP {
  // constructor() {
  //   this.isSupportWebp =
  //false;

  /*
    Firefox 返回png, 这种方式只适用于chrome, 弃用
    try {
      this.isSupportWebp =
        document
          .createElement("canvas")
          .toDataURL("image/webp")
          .indexOf("data:image/webp") == 0;
    } catch (e) {
      console.warn("This browser not support Webp!");
    }
    */

  /*
      globalThis, 全局执行栈中的this 属性
        Worker
          self
        Node.js
          global
        browser
          window/frames/self
      eslint 只支持EMACScript 标准, 会对globalThis 报错(已经第四阶段, 将在下一个实际修订版中发布)
      self 支持的面最大
    */

  //  这个支持firefox, 但是在IOS 端也会返回true, 导致IOS 加载webp 无法显示

  // (async () => {
  //   // If browser doesn't have createImageBitmap, we can't use webp.
  //   if (!self.createImageBitmap) {
  //     // this.isSupportWebp = false;
  //     return false;
  //   }
  //   // Base64 representation of a white point image
  //   const webpData =
  //     "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";
  //   // Retrieve the Image in Blob Format
  //   const blob = await fetch(webpData).then(r => r.blob());
  //   // If the createImageBitmap method succeeds, return true, otherwise false
  //   return await createImageBitmap(blob).then(
  //     () => true,
  //     () => false
  //   );
  // })();
  // }

  constructor() {
    this.isSupportWebp = false;
    // this.temp =
  }
  async install(Vue) {
    await (async () => {
      // If browser doesn't have createImageBitmap, we can't use webp.
      if (!self.createImageBitmap) {
        // this.isSupportWebp = false;
        return false;
      }
      // Base64 representation of a white point image
      const webpData =
        "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEAAQAcJaQAA3AA/v3AgAA=";
      // Retrieve the Image in Blob Format
      const blob = await fetch(webpData).then(r => r.blob());
      // If the createImageBitmap method succeeds, return true, otherwise false
      await createImageBitmap(blob).then(
        () => {
          this.isSupportWebp = true;
          console.log("true:", true);
        },
        () => {
          this.isSupportWebp = false;
          console.log("false:", false);
        }
      );
      console.log("this.isSupportWebp:", this.isSupportWebp);
    })();
    console.log("install");
    Vue.prototype.isSupportWebp = this.isSupportWebp;

    // (async function check_webp_feature() {
    //   let lossy = "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
    //   let result = false;
    //   let img = new Image();
    //   img.onload = function() {
    //     result = img.width > 0 && img.height > 0;
    //   };
    //   img.onerror = function() {
    //     result = false;
    //   };
    //   img.src = "data:image/webp;base64," + lossy;
    //   return result;
    // })();

    // Vue.prototype.isSupportWebp = this.isSupportWebp;
    // 在PC 上测试jpg/png, 假装不支持webp
    // Vue.prototype.isSupportWebp = false;

    /*
    v-img 的:src 要使用require("@/xx.webp") 来解析成实际的地址 img/xxfi887s2.webp
    require() 中若是用了变量和函数都会导致解析失败, 这个方案就放弃了
      应该是在npm run build 阶段, webpack 会处理require() 中的静态路径字符, 其它地方的不会处理
      所以必须在require() 的参数中包含完整的路径字符: require(isSupportWebp ? '@/assets/img/coding-at-home.webp' : '@/assets/img/coding-at-home.jpg')
      也就是必须写两个路径😭
    Vue.prototype.useWebP = function(url) {
      if (this.isSupportWebp) {
        url = url.replace(/\.\w{1,5}$/, ".webp");
      }
      // url = require(url);
      return url;
    };
    */
  }
}

module.exports = new WebP();
