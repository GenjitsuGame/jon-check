import {expect} from 'chai'
import * as getters from '../../../src/store/getters'
import {tracks} from './mocks'

describe('getters', () => {
  it('apiRoot', () => {
    const apiRoot = 'http://apiroot'
    const state = {
      globals: {
        apiRoot
      }
    }

    expect(getters.apiRoot(state)).to.equal(apiRoot)
  })

  it('tracks', () => {
    const state = {
      tracks: {
        data: tracks
      }
    }

    expect(getters.tracks(state)).to.deep.equal(tracks)
  })

  it('isFetchingTracks', () => {
    const state = {
      tracks: {
        fetching: true
      }
    }

    expect(getters.isFetchingTracks(state)).to.be.true
  })
})
