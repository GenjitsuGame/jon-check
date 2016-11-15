import * as api from '../api'
import * as types from './mutation-types'

export const getAllTracks = async ({commit}) => {
  commit(types.GET_TRACKS_REQUEST)
  try {
    commit(types.GET_TRACKS_SUCCESS, await api.getTracks())
  } catch (e) {
    commit(types.GET_TRACKS_FAILURE)
  }
}
