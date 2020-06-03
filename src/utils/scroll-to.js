const VueScrollTo = require('vue-scrollto')

let config = {
  container: '#layout',
  duration: 0,
  easing: 'ease-in',
  offset: 0,
  force: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  cancelable: false,
  // eslint-disable-next-line id-length
  x: false,
  // eslint-disable-next-line id-length
  y: true
}

const duration = 0

function scrollTo (element, options) {
  config = Object.assign({}, config, options)
  VueScrollTo.scrollTo(element, duration, config)
}

export default scrollTo
