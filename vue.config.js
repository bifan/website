module.exports = {
  // babel-loader 转义Vuetify → (babel-loader 默认会忽略node_modules 中的文件)
  transpileDependencies: ["vuetify"],
  // 资源链接为相对路径, 这样打出来的包可以被部署在任意路径 → (默认基于Web 服务器根目录)
  publicPath: "./",
  // 对内部的 webpack 配置进行更细粒度的修改
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

// vue inspect --rule images, 在命令行打印出最终生效的webpack 配置中rule 数组中对images 配置的信息
/*
{
  mode: 'development',
  entry: {},
  output: {},
  plugins: [],
  ///...
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /// ! vue inspect --rule images 打印的部分 ↓↓↓
      /// config.module.rule('images') //
      {
        test: /\.(gif|png|jpe?g|webp)$/i,
        use: [
          ///  config.module.rule('images').use('url-loader') //
          {
            loader: 'D:\\Workspace\\website\\node_modules\\url-loader\\dist\\cjs.js',     
            options: {
              limit: 4096,
              fallback: {
                loader: 'D:\\Workspace\\website\\node_modules\\file-loader\\dist\\cjs.js',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          },
          /// config.module.rule('images').use('image-webpack-loader') //
          {
            loader: 'image-webpack-loader'
          }
        ]
      }
      /// ! vue inspect --rule images 打印的部分 ↑↑↑
    ]
  }
}
*/

// 搜索案例 → github.com → tab → filename:vue.config.js
// 多个config.module 的配置案例 ↓
/*
,chainWebpack(config) {
  config.plugins.delete('preload')
  config.plugins.delete('prefetch')
  
  config.module
    .rule("images")
    .test(/\.(gif|png|jpe?g|webp)$/i)
    .use("image-webpack-loader")
    .loader("image-webpack-loader")
    .options({
      /// bypassOnDebug: true
      /// disable: true
    })
    .end();
  /// set svg-sprite-loader
  config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end();
  }*/
