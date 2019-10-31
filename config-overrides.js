const { override, fixBabelImports, addWebpackModuleRule } = require('customize-cra');
module.exports = override(
     fixBabelImports('import', {
       libraryName: 'antd',
       libraryDirectory: 'es',
       style: 'css',
     }),
     addWebpackModuleRule(
      {
        test: /\.md$/,
        use: "raw-loader"
        // use: [
        //   {
        //     loader: 'html-loader',
        //   },
        //   {
        //     loader: 'markdown-loader',
        //     options: {
        //       pedantic: true,
        //       renderer
        //     },
        //   },
        // ],
      }
     )
   );
  