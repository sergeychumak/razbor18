const path = require('path')
const TerserJSPlugin = require('terser-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const { DefinePlugin } = require('webpack')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin')

const bytes = 1024
const kBs = 500
const maxEntrypointSize = bytes * kBs
const minPngQuant = 0.85
const maxPngQuant = 0.9

const { env: { NODE_SERVER: server = 'prod' } } = process
const { [server]: buildConfig } = require('../config/build.config')

console.info(`Node server: ${server}`)

module.exports = {
  mode: buildConfig.mode,
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/static/',
    filename: 'js/[name].[contenthash:8].js'
  },
  devtool: buildConfig.devTools,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src')
    },
    extensions: [
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ]
  },

  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    rules: [
      // rule(.vue)
      {
        test: /\.vue$/,
        use: {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }
      },
      // rule(.svg)
      {
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /\?copy/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  outputPath: 'icons',
                  name: '[name].[contenthash:8].[ext]'
                }
              },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [
                    {
                      cleanupAttrs: true
                    },
                    {
                      removeDoctype: true
                    },
                    {
                      removeComments: true
                    },
                    {
                      removeMetadata: true
                    },
                    {
                      removeTitle: true
                    },
                    {
                      removeDesc: true
                    },
                    {
                      removeEditorsNSData: true
                    },
                    {
                      removeEmptyAttrs: true
                    },
                    {
                      removeEmptyText: true
                    },
                    {
                      removeEmptyContainers: true
                    },
                    {
                      collapseGroups: true
                    },
                    {
                      removeScriptElement: true
                    }
                  ]
                }
              }
            ]
          },
          {
            resourceQuery: /\?multi/,
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  extract: true,
                  publicPath: '/static/icons/',
                  outputPath: 'icons/',
                  spriteFilename: 'sprite.[contenthash:8].svg'
                }
              },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [
                    {
                      cleanupAttrs: true
                    },
                    {
                      removeDoctype: true
                    },
                    {
                      removeComments: true
                    },
                    {
                      removeMetadata: true
                    },
                    {
                      removeTitle: true
                    },
                    {
                      removeDesc: true
                    },
                    {
                      removeEditorsNSData: true
                    },
                    {
                      removeEmptyAttrs: true
                    },
                    {
                      removeEmptyText: true
                    },
                    {
                      removeEmptyContainers: true
                    },
                    {
                      collapseGroups: true
                    },
                    {
                      removeScriptElement: true
                    }
                  ]
                }
              }
            ]
          },
          {
            use: [
              {
                loader: 'svg-sprite-loader',
                options: {
                  extract: true,
                  publicPath: '/static/icons/',
                  outputPath: 'icons/',
                  spriteFilename: 'sprite.[contenthash:8].svg'
                }
              },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [
                    {
                      cleanupAttrs: true
                    },
                    {
                      removeDoctype: true
                    },
                    {
                      removeComments: true
                    },
                    {
                      removeMetadata: true
                    },
                    {
                      removeTitle: true
                    },
                    {
                      removeDesc: true
                    },
                    {
                      removeEditorsNSData: true
                    },
                    {
                      removeEmptyAttrs: true
                    },
                    {
                      removeEmptyText: true
                    },
                    {
                      removeEmptyContainers: true
                    },
                    {
                      convertColors: {
                        currentColor: true
                      }
                    },
                    {
                      collapseGroups: true
                    },
                    {
                      removeStyleElement: true
                    },
                    {
                      removeScriptElement: true
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      // rule(.js|.mjs)
      {
        test: /\.m?js$/,
        exclude: [/node_modules\/(?!(swiper|dom7)\/).*/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env'
              ]
            }
          }
        ]
      },
      // rule(.png|.jpeg|.jpg)
      {
        test: /\.(png|jpe?g)(\?.*)?$/,
        use: buildConfig.isImageOptimize
          ? [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img',
                name: '[name].[contenthash:8].[ext]'
              }
            },
            {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 90
                },
                optipng: {
                  enabled: false
                },
                pngquant: {
                  quality: [
                    minPngQuant,
                    maxPngQuant
                  ],
                  speed: 4
                }
              }
            }
          ]
          : [
            {
              loader: 'file-loader',
              options: {
                outputPath: 'img',
                name: '[name].[contenthash:8].[ext]'
              }
            }
          ]
      }
    ]
  },

  optimization: {
    // минификация JS для прода
    minimize: buildConfig.isMinificationJS,
    minimizer: [
      new TerserJSPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      })
    ]
  },

  performance: {
    maxEntrypointSize,
    hints: buildConfig.isPerformanceTip ? 'warning' : false
  },

  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true
    }),
    new VueLoaderPlugin(),
    new DefinePlugin(
      buildConfig.env
    )
  ],
  stats: {
    colors: true,
    chunks: true,
    modules: false,
    entrypoints: false,
    children: false
  }
}
