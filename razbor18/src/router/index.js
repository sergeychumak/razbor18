import Vue from 'vue'
import Router from 'vue-router'
// LAYOUT
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
// -------------------------------------------------------------------------
import layoutMain from '../layouts/master'
import layoutAdmin from '../layouts/admin'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'main',
            component: layoutMain
        },
        {
            path: '/admin',
            name: 'admin',
            component: layoutAdmin
        }
    ]
})
