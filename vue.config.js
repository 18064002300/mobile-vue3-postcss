const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
module.exports = defineConfig({
  transpileDependencies: true,
  assetsDir: 'static', //  outputDir的静态资源(js、css、img、fonts)目录
  publicPath: './', // 静态资源路径（默认/，如果不改打包后会白屏）
  productionSourceMap: false, // 不输出map文件
  devServer: {
    open: true
  },
  configureWebpack: {
    plugins: [
      ComponentsPlugin({
        resolvers: [VantResolver()]
      })
    ]
  }
})
