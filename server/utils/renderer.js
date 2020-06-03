const LRU = require('lru-cache')
const { createBundleRenderer } = require('vue-server-renderer')

const mSec = 1000
const sec = 60
const min = 15

// функция создания рендерера
module.exports = function createAppRenderer (serverBundle, options) {
  return createBundleRenderer(serverBundle, Object.assign(options, {
    cache: new LRU({
      max: 1000,
      maxAge: mSec * sec * min
    }),
    runInNewContext: false
  }))
}
