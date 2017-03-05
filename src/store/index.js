import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const state = {
  globals: {
    apiRoot: 'http://localhost:4100/api/'
  },
  tracks: {
    data: {},
    fetching: false,
    index: 0
  },
  playlists: {
    data: [],
    fetching: false
  },
  player: {
    queue: [],
    showQueue: true,
    index: 0
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
