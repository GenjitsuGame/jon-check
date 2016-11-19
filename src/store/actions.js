import * as api from '../api'
import * as types from './mutation-types'

export const getAllTracks = async ({commit}) => {
  commit(types.GET_TRACKS_REQUEST)
  await api.getTracks('', null, 100)
    .then(body => commit(types.GET_TRACKS_SUCCESS, body.data))
    .catch(() => commit(types.GET_TRACKS_FAILURE))
}

export const selectCurrentTrack = async ({commit}, id) => {
  commit(types.SELECT_CURRENT_TRACK, id)
}
