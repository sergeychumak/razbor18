const fs = require('fs')
const path = require('path')
const MFS = require('memory-fs')
const webpack = require('webpack')
const watcher = require('chokidar')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')

module.exports = function setupDevServer (app, templatePath, callback) {
  let bundle
  let template
  let clientManifest

  let ready
  const readyPromise = new Promise((red) => { ready = red })
  const update = () => {
    if (bundle && clientManifest) {
      ready()
      callback(bundle, {
        template,
        clientManifest
      })
    }
  }

  template = fs.readFileSync(templatePath, 'utf-8')
  watcher.watch(templatePath).on('change', () => {
    template = fs.readFileSync(templatePath, 'utf-8')
    console.log('index.html template updated.')
    update()
  })

  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  clientConfig.output.filename = 'js/[name].js'
  clientConfig.plugins.push(
    new webpack.HotModuleReplacementPlugin()
  )

  const clientCompiler = webpack(clientConfig)
  const devMiddleware = webpackDevMiddleware(clientCompiler, {
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
      modules: false,
      entrypoints: false,
      children: false
    },
    noInfo: true
  })

  app.use(devMiddleware)

  clientCompiler.hooks.done.tap('done', (stats) => {
    stats = stats.toJson()
    stats.errors.forEach((err) => console.error(err))
    stats.warnings.forEach((err) => console.warn(err))
    if (stats.errors.length) {
      return
    }
    clientManifest = JSON.parse(devMiddleware.fileSystem.readFileSync(path.join(serverConfig.output.path, 'vue-ssr-client-manifest.json')))
    update()
  })

  const hotMiddleware = webpackHotMiddleware(clientCompiler, {
    heartbeat: 5000
  })

  app.use(hotMiddleware)

  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) {
      throw err
    }
    stats = stats.toJson()
    if (stats.errors.length) {
      return
    }

    bundle = JSON.parse(mfs.readFileSync(path.join(serverConfig.output.path, 'vue-ssr-server-bundle.json'), 'utf-8'))
    update()
  })

  return readyPromise
}
