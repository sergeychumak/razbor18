const httpStatus = {
  OK: {
    status: 200,
    message: 'OK'
  },
  MOVED_PERMANENTLY: {
    status: 301,
    message: 'Moved Permanently'
  },
  MOVED_TEMPORARILY: {
    status: 301,
    message: 'Moved Temporarily'
  },
  FORBIDDEN: {
    status: 403,
    message: 'Forbidden'
  },
  NOT_FOUND: {
    status: 404,
    message: 'Not Found'
  },
  INTERNAL_SERVER_ERROR: {
    status: 500,
    message: 'Internal Server Error'
  },
  SERVICE_UNAVAILABLE: {
    status: 503,
    message: 'Service Unavailable'
  }
}

module.exports = {
  httpStatus
}
