import * as types from './mutation-types'
import {set} from 'vue'

export default {
  [types.GET_TRACKS_REQUEST] (state) {
    state.tracks.fetching = true
  },
  [types.GET_TRACKS_SUCCESS] (state, tracks) {
    tracks.forEach(track => {
      set(state.tracks.data, track._id, track)
    })
    state.tracks.fetching = false
  },
  [types.GET_TRACKS_FAILURE] (state) {
    state.tracks.fetching = false
  },

  [types.SELECT_CURRENT_TRACK] (state, trackId) {
    state.player.currentTrack = trackId
  }
}
