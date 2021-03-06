import * as api from '../api'
import * as types from './mutation-types'


export const getTrack = async({commit}, id) => {
  await api.getTrack(id)
    .then(body => commit)
}

export const getAllTracks = async ({commit}) => {
  await getTracks({commit})
}

export const getTracks = async ({commit}, q) => {
  commit(types.GET_TRACKS_ABORT)
  commit(types.GET_TRACKS_REQUEST)
  return await api.getTracks(q, null, 100)
    .then(body => commit(types.GET_TRACKS_SUCCESS, body.data))
    .catch(() => commit(types.GET_TRACKS_FAILURE))
}

export const getPlaylists = async ({commit}) => {
  commit(types.GET_PLAYLISTS_ABORT)
  commit(types.GET_PLAYLISTS_REQUEST)
  return await api.getPlaylists()
    .then(body => commit(types.GET_PLAYLISTS_SUCCESS, body.data))
    .catch(() => commit(types.GET_PLAYLISTS_FAILURE))
}

export const addTracksToQueue = ({commit}, tracks) => {
  commit(types.ADD_TRACKS_TO_QUEUE, tracks)
}

export const addPlaylistToQueue = ({commit}, playlist) => {
  addTracksToQueue({commit}, playlist)
}

export const setTrackIndex = ({commit}, index) => {
  commit(types.SET_TRACK_INDEX, index)
}

export const nextSong = ({commit}, n = 1) => {
  while (n-- > 0) {
    commit(types.NEXT_SONG)
  }
}

export const clearQueue = ({commit}) => {
  commit(types.CLEAR_QUEUE)
}

export const updateApiRoot = ({commit}, apiRoot) => {
  commit(types.UPDATE_API_ROOT, apiRoot)
  getAllTracks({commit})
  getPlaylists({commit})
}

export const toggleQueue = ({commit}) => {
  commit(types.TOGGLE_QUEUE)
}
