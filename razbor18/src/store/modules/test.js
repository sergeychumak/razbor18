const state = {
    count: 0
}

const getters = {
    count: state => state.count
}

const actions = {
  inc: ({commit}) => {
    commit('inc_count')
  }
}

const mutations = {
    inc_count: (state, count) => {
    state.count = state.count + 1
  }
}

export default  {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
