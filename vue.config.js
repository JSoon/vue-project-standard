// const path = require('path');
const proxyDomain = '/';
const {
  NODE_ENV,
} = process.env;
const NODE_ENV_DEV = 'development';
const NODE_ENV_TEST = 'test';
const NODE_ENV_PROD = 'production';

// function resolve(dir) {
//   return path.join(__dirname, dir);
// }

// If your port is set to 80,
// use administrator privileges to execute the command line.
// For example, Mac: sudo npm run
const port = process.env.port || process.env.npm_config_port || 9527; // dev port
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  /**
   * You will need to set publicPath if you plan to deploy your site under a sub path,
   * for example GitHub Pages. If you plan to deploy your site to https://foo.github.io/bar/,
   * then publicPath should be set to "/bar/".
   * In most cases please use '/' !!!
   * Detail: https://cli.vuejs.org/config/#publicpath
   */
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: NODE_ENV === NODE_ENV_DEV,
  productionSourceMap: false,
  devServer: {
    port,
    open: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      // detail: https://cli.vuejs.org/config/#devserver-proxy
      test: {
        target: proxyDomain,
        changeOrigin: true,
      },
    },
    // 文件系统监听导致某些系统下CPU占用过高（请务必设置）
    // https://webpack.js.org/configuration/watch/#watchoptionsignored
    // https://til.codes/fix-for-100-cpu-usage-by-nodejs/
    watchOptions: {
      poll: false,
      ignored: /node_modules/,
    },
  },
  // https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
  // https://cli.vuejs.org/config/#css-loaderoptions
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       // https://css-tricks.com/how-to-import-a-sass-file-into-every-vue-component-in-an-app/
  //       data: `@import "@/styles/shared.scss";`
  //     }
  //   }
  // },
  chainWebpack(config) {
    // https://webpack.js.org/configuration/devtool/#development
    config
      .when(
        NODE_ENV === NODE_ENV_DEV,
        () => {
          config.devtool('cheap-source-map');
        },
      );

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap((options) => {
        // eslint-disable-next-line no-param-reassign
        options.compilerOptions.preserveWhitespace = false;
        return options;
      });


    config
      .when(
        true,
        () => {
          config
            // https://webpack.js.org/plugins/split-chunks-plugin
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  // https://webpack.js.org/plugins/split-chunks-plugin/#splitchunksname
                  name: NODE_ENV === NODE_ENV_PROD ? false : 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial', // only package third parties that are initially dependent
                  minSize: 200 * 1000, // 单个分片大小最小为 minSize bytes
                  maxSize: 500 * 1000, // 超过 maxSize bytes 则进行分片
                },
                // elementUI: {
                //   name: 'chunk-elementUI', // split elementUI into a single package
                //   priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                //   test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                // },
                // commons: {
                //   name: 'chunk-commons',
                //   test: resolve('src/components'), // can customize your rules
                //   minChunks: 3, //  minimum common number
                //   priority: 5,
                //   reuseExistingChunk: true
                // }
              },
            });
        },
      );
  },
};