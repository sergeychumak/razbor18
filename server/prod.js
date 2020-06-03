const fs = require('fs')
const path = require('path')
const express = require('express')
const compression = require('compression')
const favicon = require('serve-favicon')

const createAppRenderer = require('./utils/renderer')
const render = require('./utils/render')
// const { metrics } = require('../utils/metrics')

const APP_PORT = 80
const APP_MESSAGE = `Vue SSR Application has been started on http://localhost:${APP_PORT}`

const appServer = express()

const template = fs.readFileSync(path.resolve(__dirname, '../dist/index.template.html'), 'utf-8')
const errorTemplate = fs.readFileSync(path.resolve(__dirname, '../dist/500.html'), 'utf-8')
const bundle = require('../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../dist/vue-ssr-client-manifest.json')

const renderer = createAppRenderer(bundle, {
  template,
  clientManifest
})

appServer.use(favicon(path.join(__dirname, '../dist/favicon', 'favicon.ico')))

appServer.use(compression({
  threshold: 0
}))

appServer.use('/static', express.static(path.join(__dirname, '../dist')))

appServer.get('/sys/health', (req, res) => {
  res.send('Node.js OK')
})

// appServer.get('/sys/prometheus', (req, res) => {
//   res.send(metrics.register.metrics())
// })

appServer.get('*', (req, res) => render(req, res, renderer, errorTemplate))

module.exports = {
  appServer,
  APP_PORT,
  APP_MESSAGE
}
