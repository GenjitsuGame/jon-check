import * as types from './mutation-types'
import Vue from 'vue'

export default {
  [types.GET_TRACKS_REQUEST] (state) {
    state.tracks.fetching = true
  },
  [types.GET_TRACKS_SUCCESS] (state, tracks) {
    const tracksAsObj = {}
    tracks.forEach(track => {
      tracksAsObj[track._id] = track
    })
    state.tracks.data = tracksAsObj
    state.tracks.fetching = false
  },
  [types.GET_TRACKS_FAILURE] (state) {
    state.tracks.data = {}
    state.tracks.fetching = false
  },
  [types.GET_TRACKS_ABORT] (state) {
    state.tracks.data = {}
    state.tracks.fetching = false
  },

  [types.GET_PLAYLISTS_REQUEST] (state) {
    state.playlists.fetching = true
  },
  [types.GET_PLAYLISTS_SUCCESS] (state, playlists) {
    state.playlists.data = playlists
    state.playlists.fetching = false
  },
  [types.GET_PLAYLISTS_FAILURE] (state) {
    state.playlists.data = {}
    state.playlists.fetching = false
  },
  [types.GET_PLAYLISTS_ABORT] (state) {
    state.playlists.data = {}
    state.playlists.fetching = false
  },

  [types.SELECT_CURRENT_TRACK] (state, trackId) {
    state.player.queue.push(trackId)
  },

  [types.ADD_TRACKS_TO_QUEUE] (state, tracks) {
    tracks.forEach(track => {
      state.player.queue.push(track)
    })
  },

  [types.NEXT_SONG] (state) {
    state.player.index++
  },
  [types.CLEAR_QUEUE] (state) {
    state.player.index = 0
    state.player.queue = []
  },

  [types.UPDATE_API_ROOT] (state, apiRoot) {
    state.globals.apiRoot = apiRoot
    Vue.http.options.root = apiRoot
  },

  [types.TOGGLE_QUEUE] (state) {
    state.player.showQueue = !state.player.showQueue
  }
}
