import {expect} from 'chai'
import {tracks} from './mocks'
import mutations from '../../../src/store/mutations'
import {state} from '../../../src/store'

const {
  GET_TRACKS_REQUEST,
  GET_TRACKS_SUCCESS,
  GET_TRACKS_FAILURE
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
    expect(_state.tracks.data).to.have.length(0)
    GET_TRACKS_SUCCESS(_state, tracks)
    expect(_state.tracks.data).to.have.length(tracks.length)
  })

  it('GET_TRACKS_FAILURE', () => {
    expect(_state.tracks.fetching).to.be.false
    GET_TRACKS_FAILURE(_state)
    expect(_state.tracks.fetching).to.be.false
  })
})
