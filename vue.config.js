module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: "./",

  chainWebpack: config => {
    config.module
      .rule("images")
      // .test(/\.(png|jpg|jpeg|gif|svg)$/i)
      .test(/\.(gif|png|jpe?g|webp)$/i)
      .use("image-webpack-loader")
      .loader("image-webpack-loader")
      .options({
        // bypassOnDebug: true
        // disable: true
      })
      // .options({
      //   webp: {
      //     quality: 75
      //   }
      // })
      .end();
  }
};
