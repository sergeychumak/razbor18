import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'vuetify/dist/vuetify.min.css'


import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Vuetify from 'vuetify'





import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/database'
Vue.use(VueFire)

// firebase.auth() — Authentication
// firebase.storage() — Cloud Storage
// firebase.database() — Realtime Database
// firebase.firestore() — Cloud Firestore
// firebase.messaging() — Cloud Messaging
// firebase.functions() — Cloud Functions


import firebaseConfig from './firebase_config'
firebase.initializeApp(firebaseConfig)


// let db = firebase.database()

// export const db = firebase.firestore()


// let booksRef = db1.ref('locations')
// export const asd = booksRef


// const firestore = firebase.firestore()


Vue.config.productionTip = false

Vue.use(Vuetify)


export const db = firebase.database()

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
