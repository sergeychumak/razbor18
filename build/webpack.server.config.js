const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
const { DefinePlugin } = require('webpack')
const WebpackBar = require('webpackbar')

const { env: { NODE_SERVER: server = 'prod' } } = process
const { [server]: buildConfig } = require('../config/build.config')

module.exports = merge(baseConfig, {
  entry: './src/entry-server.js',
  output: {
    libraryTarget: 'commonjs2'
  },
  target: 'node',
  externals: nodeExternals({
    whitelist: /\.css$/
  }),
  module: {
    rules: [
      // rule(.doc|.docx)
      {
        test: /\.(pdf)(\?.*)?$/,
        loader: 'null-loader'
      },
      // rule(.mp4|.webm|.ogg|.mp3|.wav|.flac|.aac)
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'null-loader'
      },
      // rule(.woff|.woff2|.eot|.ttf|.otf)
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        loader: 'null-loader'
      },
      // rule(.css)
      {
        test: /\.css$/,
        loader: 'null-loader'
      },
      // rule(.scss).oneOf(critical|none)
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /\?critical/,
            use: [
              {
                loader: 'vue-style-loader'
              },
              {
                loader: 'css-loader',
                options: {
                  sourceMap: buildConfig.isSourceMapCSS
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: buildConfig.isSourceMapCSS
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: buildConfig.isSourceMapCSS,
                  prependData: `
                    @import "@/assets/scss/resources/index.scss";
                  `
                }
              }
            ]
          },
          {
            use: ['null-loader']
          }
        ]
      }
    ]
  },

  plugins: [
    new VueSSRServerPlugin(),
    new DefinePlugin(
      {
        'process.env': {
          VUE_ENV: '"server"'
        }
      }
    ),
    new WebpackBar({
      name: 'server',
      color: 'green'
    })
  ]
})
