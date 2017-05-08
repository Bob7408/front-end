const path      = require('path')
const webpack   = require('webpack')
const isProd    = process.env.NODE_ENV === 'production'

const HtmlPlugin   = require('html-webpack-plugin')
const UglifyPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  devtool: isProd ? false : '#cheap-module-eval-source-map',
  entry: './src/index.js',

  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: '[name].[hash].js'
  },

  resolve: {
    alias: {
      'public': path.resolve(__dirname, 'public'),
      '~': __dirname
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  },

  plugins: [
    new HtmlPlugin({
      template: './src/index.pug',
      inject: true,
      minify: {
        removeComments: false,
        collapseWhitespace: true
      }
    }),

    new UglifyPlugin({
      beautify: !isProd,
      compress: isProd,
      mangle: isProd
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        stylus: {
          use: [ require('jeet')() ],
          import: [ path.resolve(__dirname, './src/style.styl') ]
        }
      }
    })
  ],

  devServer: {
    contentBase: 'dist',
    hot: true,
    historyApiFallback: true
  }
}
