const { override, fixBabelImports, addWebpackModuleRule,addDecoratorsLegacy } = require('customize-cra');
module.exports = override(
     addDecoratorsLegacy(),
     fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: 'css',
     }),
     addWebpackModuleRule(
      {
        test: /\.md$/,
        use: "raw-loader"
      }
     )
   );
  