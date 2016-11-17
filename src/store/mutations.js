import * as types from './mutation-types'

export default {
  [types.GET_TRACKS_REQUEST] (state) {
    state.tracks.fetching = true
  },
  [types.GET_TRACKS_SUCCESS] (state, tracks) {
    state.tracks.data = tracks
    state.tracks.fetching = false
  },
  [types.GET_TRACKS_FAILURE] (state) {
    state.tracks.fetching = false
  }
}
