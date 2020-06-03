const timestamp = Date.now()
const { httpStatus } = require('./http-status')
// const { logInfo, logError } = require('../utils/logger')
// const { getGTM } = require('./analytics')

const sendServerErrorPage = (err, req, res, errorTemplate) => {
  res.status(httpStatus.INTERNAL_SERVER_ERROR.status)
  if (errorTemplate) {
    res.send(errorTemplate)
  } else {
    res.send(`${httpStatus.INTERNAL_SERVER_ERROR.status} | ${httpStatus.INTERNAL_SERVER_ERROR.message}`)
  }
  // logError({
  //   message: `error 500 render ${req.url}`,
  //   err
  // })
}

const sendNotFoundPage = (req, res, html) => {
  res.status(httpStatus.NOT_FOUND.status).send(html)
  // logInfo({
  //   message: `successful 404 render ${req.url}`
  // })
}

const sendPage = (req, res, html) => {
  res.send(html)
  // logInfo({
  //   message: `successful render ${req.url}`
  // })
}

function render (req, res, renderer, errorTemplate) {
  const { headers: { cookie } } = req
  const context = {
    url: req.url,
    ieFix: '',
    cookie,
    isNotFoundPage: false,
    // gtmScript: getGTM('', 'gtmScript'),
    // gtmNoScript: getGTM('', 'gtmNoScript')
  }

  // add IE bundle for relevant users
  const userAgent = req.get('user-agent').toLowerCase()
  if (userAgent.includes('msie') || userAgent.includes('trident')) {
    context.ieFix = `<script src="/static/js/ie/fix.js?${timestamp}"></script><meta http-equiv="x-ua-compatible" content="ie=edge">`
  }

  res.setHeader('Content-Type', 'text/html')

  renderer.renderToString(context, (err, html) => {
    const { isNotFoundPage } = context
    if (err) {
      return sendServerErrorPage(err, req, res, errorTemplate)
    }
    if (isNotFoundPage) {
      return sendNotFoundPage(req, res, html)
    }
    return sendPage(req, res, html)
  })
}

module.exports = render
