import Vue from 'vue'
import App from './App.vue'
import store from './store'

import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
Vue.use(VueFire)

import firebaseConfig from './firebase_config'
firebase.initializeApp(firebaseConfig)
const firestore = firebase.firestore()
const settings = { }
firestore.settings(settings)

let db1 = firebase.database()
let booksRef = db1.ref('locations')

export const db = firestore
export const asd = booksRef


Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
