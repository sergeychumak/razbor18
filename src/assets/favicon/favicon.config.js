const path = require('path')

module.exports = {
  logo: path.resolve(__dirname, './icon-logo.svg'),
  mode: 'webapp',
  publicPath: '/static/',
  prefix: 'favicon/',
  inject: true,
  favicons: {
    appName: 'Columbia',
    appDescription: 'Интернет-магазин Columbia',
    lang: 'ru',
    start_url: '/?utm_source=pwa',
    background: '#fff',
    theme_color: '#fff',
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: false,
      coast: false,
      favicons: true,
      firefox: false,
      windows: false,
      yandex: false
    }
  }
}
