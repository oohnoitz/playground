const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')


const paths = {
  build: path.resolve(__dirname, '../build'),
  src: path.resolve(__dirname, '../src'),
}


const NODE_ENV = process.env.NODE_ENV || 'development'
const IS_PRODUCTION = NODE_ENV === 'production'
const IS_DEVELOPMENT = !IS_PRODUCTION

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    }
  }),
]

if (IS_PRODUCTION) {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
      },
    })
  )
} else {
  plugins.push(
    new webpack.NamedModulesPlugin()
  )
}

const rules = [
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
]

const resolve = {
  extensions: ['.js', 'jsx'],
}

module.exports = {
  paths,
  rules,
  plugins,
  resolve,

  NODE_ENV,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
}
