import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  displaySize: {}
}

const mutations = {
  setDisplayHeight (state, payload) {
    state.displaySize.height = payload
  },
  setDisplayWidth (state, payload) {
    state.displaySize.width = payload
  }
}

const getters = {
  getDisplayHeight: state => {
    return state.displaySize.height
  },
  getDisplayWidth: state => {
    return state.displaySize.width
  }
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters
})
