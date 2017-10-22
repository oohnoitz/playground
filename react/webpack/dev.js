const config = require('./config')
const paths = config.paths
const IS_PRODUCTION = config.IS_PRODUCTION
const IS_DEVELOPMENT = config.IS_DEVELOPMENT

const devServer = {
  contentBase: IS_PRODUCTION ? paths.build : paths.src,
  compress: IS_PRODUCTION,
  inline: IS_DEVELOPMENT,
  hot: IS_DEVELOPMENT,
  overlay: true,
  stats: {
    assets: true,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: true,
    version: false,
    warnings: true,
    colors: true,
  },
}

module.exports = {
  devServer,
}
