import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  // plugins: [
  //   createPersistedState({
  //     key: 'PHOTOSTUDIO',
  //     paths: [
  //       'auth.token'
  //     ]
  //   })
  // ],
  modules: {},
  state: {
    aas: 'a2222222sd'
  },
  actions: {},
  mutations: {},
  getters: {
      asd: state => state.aas
  }

})

export default store
