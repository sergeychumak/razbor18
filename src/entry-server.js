import { createApp } from './app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp(context)
    router.push(context.url)
    context.meta = app.$meta()
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(
          new Error('404')
        )
      }
      context.rendered = () => {
        const { state } = store
        context.state = state
      }
      resolve(app)
    }, reject)
  })
}
