const {override, fixBabelImports, addLessLoader} = require('customize-cra');

module.exports = override(
  // 使用babel-plugin-import
  fixBabelImports('import', {
    libraryName: 'antd', // 针对antd
    libraryDirectory: 'es',
    // style: 'css',  // 自动打包相关的样式
    style: true,
  }),
  // 使用less-loader 对源码中的变量进行重新覆盖
  addLessLoader({
    javascriptEnabled: true,
    // 自定义主题颜色
    // 修改颜色的文档 https://3x.ant.design/docs/react/customize-theme-cn
    modifyVars: {'@primary-color': '#1DA57A'},
  }),
);