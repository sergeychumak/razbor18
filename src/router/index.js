import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'MainPage',
        component: () => import(/* webpackChunkName: "pages/main" */ '../pages/main-page.vue')
      },
      {
        path: '*',
        name: 'NotFoundPage',
        component: () => import(/* webpackChunkName: "pages/not-found" */ '../pages/not-found-page.vue')
      }
    ]
  })
}
