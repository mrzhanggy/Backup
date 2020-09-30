const HTML_WEBPACK_PLUGIN = require('html-webpack-plugin'),
      path = require('path');


module.exports = {
  mode: 'development', // development production


  entry: {
    index: path.resolve(__dirname, './src/index.js')
  },


  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'js/[name].js'
  },


  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: path.resolve(__dirname, 'node_modules')
      },
      {
        test: /\.css$/,
        loader: [
          'css-loader',
          'style-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'style-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.tpl$/,
        loader: 'ejs-loader'
      }
    ]
  },

  
  // plugin 都是需要引入的，并且类似于一个构造函数，需要new来使用
  plugins: [
    new HTML_WEBPACK_PLUGIN({
      filename: 'index.html',
      template: path.resolve(__dirname, './src/index.html'),
      chunks: ['index'],
      excludeChunks: ['node_modules']
    }),
  ],


  devServer: {
    open: true, // 自动打开浏览器
    host: 'localhost',
    port: 3000
  }
}