const fs = require('fs')
const path = require('path')
const express = require('express')

const createAppRenderer = require('./utils/renderer')
const render = require('./utils/render')
const { httpStatus } = require('./utils/http-status')

const APP_PORT = 80
const APP_MESSAGE = `Vue SSR Application has been started on http://localhost:${APP_PORT}`

const appServer = express()

let renderer
const template = path.resolve(__dirname, '../src/index.template.html')
const errorTemplate = fs.readFileSync(path.resolve(__dirname, '../src/500.html'), 'utf-8')

// для локального стенда вызываем промис создания dev-сервера
// куда передаем экземпляр сервера express, путь к шаблону
// и коллбек, который будет вызываться после каждого обновления файлов
const readyPromise = require('../build/setup.dev.server')(
  appServer,
  template,
  (bundle, options) => {
    renderer = createAppRenderer(bundle, options)
  }
)

appServer.use('/static', express.static(path.join(__dirname, '../dist')))

appServer.get('/favicon.ico', (req, res) => {
    res.redirect(httpStatus.MOVED_PERMANENTLY.status, 'static/favicon/favicon.ico')
  }
)

appServer.get('/sys/health', (req, res) => {
  res.send('Node.js OK')
})

appServer.get('*', (req, res) => {
    readyPromise.then(() => render(req, res, renderer, errorTemplate))
  }
)

module.exports = {
  appServer,
  APP_PORT,
  APP_MESSAGE
}
