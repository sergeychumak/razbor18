const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config.js')
const esFormatter = require('eslint-friendly-formatter')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const styleFormatter = require('stylelint-formatter-pretty')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const { DefinePlugin } = require('webpack')
const WebpackBar = require('webpackbar')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FaviconWebpackPlugin = require('favicons-webpack-plugin')
const faviconConfig = require('../src/assets/favicon/favicon.config')
const bytes = 1024
const kBs = 4

const { env: { NODE_SERVER: server = 'prod' } } = process
const { [server]: buildConfig } = require('../config/build.config')

module.exports = merge(baseConfig, {
  entry: {
    app: './src/entry-client.js'
  },
  target: 'web',
  module: {
    rules: [
      // rule(.doc|.docx|.pdf)
      {
        test: /\.(pdf)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: kBs * bytes,
              fallback: {
                loader: 'file-loader',
                options: {
                  outputPath: 'files',
                  name: '[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // rule(.mp4|.webm|.ogg|.mp3|.wav|.flac|.aac)
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: kBs * bytes,
              fallback: {
                loader: 'file-loader',
                options: {
                  outputPath: 'media',
                  name: '[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // rule(.woff|.woff2|.eot|.ttf|.otf)
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: kBs * bytes,
              fallback: {
                loader: 'file-loader',
                options: {
                  outputPath: 'fonts',
                  name: '[name].[contenthash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      // rule(.css)
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: !buildConfig.isExtractCSS
            }
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
          }
        ]
      },
      // rule(.scss).oneOf(critical|none)
      {
        test: /\.scss$/,
        oneOf: [
          {
            resourceQuery: /\?critical/,
            use: ['null-loader']
          },
          {
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  hmr: !buildConfig.isExtractCSS
                }
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
          }
        ]
      },
      // eslint rule(.vue|.js)
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        exclude: /(node_modules|bower_components)/,
        use: buildConfig.isESLintCheck
          ? [
            {
              loader: 'eslint-loader',
              options: {
                extensions: [
                  '.js',
                  '.vue'
                ],
                emitWarning: true,
                emitError: false,
                formatter: esFormatter
              }
            }
          ]
          : []
      }
    ]
  },

  optimization: {
    splitChunks: {
      cacheGroups: {
        vendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: - 10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: - 20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    }
  },

  plugins: [
    new VueSSRClientPlugin(),
    buildConfig.isStyleLintCheck
      ? new StyleLintPlugin({
          files: ['**/*.{vue,css,scss}'],
          emitWarning: true,
          emitError: false,
          formatter: styleFormatter
        })
      : () => {}
    ,
    new MiniCssExtractPlugin(buildConfig.isExtractCSS
      ? {
          filename: 'css/[name].[contenthash:8].css',
          chunkFilename: 'css/[name].[contenthash:8].css',
          ignoreOrder: true
        }
      : {
          filename: 'css/[name].css?[contenthash:8]',
          chunkFilename: 'css/[name].css?[contenthash:8]',
          ignoreOrder: true
        }
    ),
    new OptimizeCSSAssetsPlugin({}),
    new HtmlWebpackPlugin({
      template: './src/index.template.html',
      filename: 'index.template.html',
      meta: {},
      chunks: [],
      minify: {
        collapseWhitespace: true,
        removeComments: false,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true
      }
    }),
    new HtmlWebpackPlugin({
      template: './src/500.html',
      filename: '500.html',
      meta: {
        viewport: 'width=device-width, initial-scale=1, minimum-scale=1'
      },
      chunks: [],
      minify: true
    }),
    new FaviconWebpackPlugin(faviconConfig),
    new DefinePlugin(
      {
        'process.env': {
          VUE_ENV: '"client"'
        }
      }
    ),
    new WebpackBar({
      name: 'client',
      color: 'yellow'
    })
  ]
})
