import * as types from './mutation-types'

export default {
  [types.RECEIVE_TRACKS] (state, tracks) {
    tracks.forEach(track => state.tracks.push(track))
  }
}
