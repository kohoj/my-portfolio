const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: false
          }
        },
        sourceMap: false,
        parallel: false
      })
    ]
  }
}