import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

export const state = {
  tracks: [],
  fetching: {
    tracks: false
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})
