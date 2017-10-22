const webpack = require('webpack')
const path = require('path')

const config = require('./webpack/config')
const devServer = require('./webpack/dev').devServer
const paths = config.paths
const rules = config.rules
const plugins = config.plugins
const resolve = config.resolve
const IS_PRODUCTION = config.IS_PRODUCTION
const IS_DEVELOPMENT = config.IS_DEVELOPMENT

const DashboardPlugin = require('webpack-dashboard/plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')

const entry = [
  path.join(paths.src, 'app.js'),
]

plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks(module) {
      return module.context && module.context.indexOf('node_modules') >= 0
    },
  }),
  new HTMLWebpackPlugin({
    path: paths.build,
    template: path.join(paths.src, 'index.html'),
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  }),
)

if (IS_DEVELOPMENT) {
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin(),
  )

  rules[0].use.unshift('react-hot-loader/webpack')
  entry.unshift('react-hot-loader/patch')
}

module.exports = {
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: paths.src,
  watch: IS_DEVELOPMENT,
  entry,
  output: {
    path: paths.build,
    filename: 'app.js',
    publicPath: '/',
  },
  module: {
    rules,
  },
  resolve,
  plugins,
  devServer,
}
