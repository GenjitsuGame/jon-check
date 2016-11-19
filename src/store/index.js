import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const state = {
  globals: {
    apiRoot: 'http://localhost:4100'
  },
  tracks: {
    data: {},
    fetching: false
  },
  player: {
    currentTrack: null
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
