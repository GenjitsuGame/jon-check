import * as types from './mutation-types'

export default {
  [types.GET_TRACKS_REQUEST] (state) {
    state.fetching.tracks = true
  },
  [types.GET_TRACKS_SUCCESS] (state, tracks) {
    state.tracks = tracks
    state.fetching.tracks = false
  },
  [types.GET_TRACKS_FAILURE] (state) {
    state.fetching.tracks = false
  }
}
