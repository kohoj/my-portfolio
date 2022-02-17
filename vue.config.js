const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new UglifyJsPlugin({
        uglifyOptions: {
          compress: {
            drop_console: true
          }
        },
        sourceMap: true,
        parallel: true
      })
    ]
  }
}