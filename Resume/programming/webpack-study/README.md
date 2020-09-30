# Webpack
> 打包工具：JS混淆代码、编译浏览器不能直接执行的语法(ES6+)等功能的自动化解决方案

## 三大件
- First step
1. webpack
2. webpack-cli
3. webpack-dev-server

-----------------------------------------------------------------------------


- Second step
1. 处理JS -> ES6 
babel-loader@7(babel-loader@8对babel-core不兼容)
babel-core
babel-preset-env

2. ES7 ES8
babel-plugin-transform-runtime

3. 装饰器
babel-plugin-transform-decorators
babel-plugin-transform-decorators-legacy

-----------------------------------------------------------------------------

- Third step
1.处理样式
sass-loader
node-sass
css-loader
  postcss - autoprefixer
style-loader

-----------------------------------------------------------------------------

- Forth step
1. 处理模板
ejs-loader


-----------------------------------------------------------------------------

- Fifth step
1. 处理html
html-webpack-plugin

-----------------------------------------------------------------------------

- --save-dev(-D) 安装在开发环境下
- --save    (-S) 安装在生产环境下