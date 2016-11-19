import {expect} from 'chai'
import {tracks} from './mocks'
import mutations from '../../../src/store/mutations'
import {state} from '../../../src/store'

const {
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE,

  SELECT_CURRENT_TRACK
} = mutations

describe('mutations', () => {
  let _state
  beforeEach(() => {
    _state = JSON.parse(JSON.stringify(state))
  })

  it('GET_TRACKS_REQUEST', () => {
    expect(_state.tracks.fetching).to.be.false
    GET_TRACKS_REQUEST(_state)
    expect(_state.tracks.fetching).to.be.true
  })

  it('GET_TRACKS_SUCCESS', () => {
    expect(_state.tracks.data).to.be.an('object')
    expect(_state.tracks.data).to.be.empty
    GET_TRACKS_SUCCESS(_state, tracks)
    expect(_state.tracks.data).to.be.an('object')
    expect(Object.keys(_state.tracks.data)).to.have.length(tracks.length)
    tracks.forEach(track => {
      expect(_state.tracks.data).to.contain.any.keys(track._id)
    })
  })

  it('GET_TRACKS_FAILURE', () => {
    expect(_state.tracks.fetching).to.be.false
    GET_TRACKS_FAILURE(_state)
    expect(_state.tracks.fetching).to.be.false
  })

  it('SELECT_CURRENT_TRACK', () => {
    expect(_state.player.currentTrack).to.be.null
    SELECT_CURRENT_TRACK(_state, 'id')
    expect(_state.player.currentTrack).to.equal('id')
  })
})
