const { env: { NODE_SERVER: server } } = process

if (!server) {
  console.error('Please, set environment variable: NODE_SERVER=dev|prod')
  return process.exit(1)
}

const { appServer, APP_PORT, APP_MESSAGE } = require(`./${server}`)

appServer.listen(APP_PORT, (err) => {
  if (err) {
    console.error(err)
    return process.exit(1)
  }
  console.info(APP_MESSAGE)
})
