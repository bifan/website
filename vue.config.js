module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./"

  // chainWebpack: (config) => {
  //   config.module
  //     .rule("images")
  //     // .test(/\.(png|jpg|jpeg|gif|svg)$/i)
  //     .test(/\.(gif|png|jpe?g|svg|webp)$/i)
  //     .use("image-webpack-loader")
  //     .loader("image-webpack-loader")
  //     .options({
  //       // bypassOnDebug: true
  //       disable: true
  //     })
  //     // .options({
  //     //   webp: {
  //     //     quality: 75
  //     //   }
  //     // })
  //     .end();
  // }

  // chainWebpack: (config) => {
  //   config.module
  //     .rule("vue")
  //     .use("vue-loader")
  //     .loader("vue-loader")
  //     .tap((options) =>
  //       Object.assign(options, {
  //         transformAssetUrls: {
  //           "v-img": ["src", "lazy-src"],
  //           "v-card": "src",
  //           "v-card-media": "src",
  //           "v-responsive": "src",
  //           "v-carousel-item": "src"
  //           //...
  //         }
  //       })
  //     );
  // }
};
