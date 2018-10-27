const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
  mode:"development",// 添加了以后就可以不用加-D参数了 直接使用webpack打包 不再是压缩的
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new htmlWebpackPlugin({
      title:"这是一个自定义title信息",
      // filename:"demo.html",
      // filename:"demo/index.html"dist文件下的demo文件夹下的index.html

      // minify:{
      //   collapseWhitespace:true// 文件是否压缩
      // }
      template: "./src/a.html" //根据这个自定义的模板文件来生成index.html文件 但title就不生效了
      // <%= htmlWebpackPlugin.options.title %>使用插件本身的方法来获取title
    })//使用插件
  ]
};