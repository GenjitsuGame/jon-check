import * as api from '../api'
import * as types from './mutation-types'

export const getAllTracks = ({commit}) => {
  api.getTracks().then(tracks => {
    commit(types.RECEIVE_TRACKS, tracks)
  })
}
