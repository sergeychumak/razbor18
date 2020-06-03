export function interopDefault (promise) {
  return promise
    .then((module) => {
      console.log('Page imported')
      console.dir(module.default || module)
      return module.default || module
    })
    .catch(() => {
      console.log('Не удалось разрезолвить страницу')
    })
}
