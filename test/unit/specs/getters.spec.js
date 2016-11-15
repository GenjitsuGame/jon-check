import {expect} from 'chai'
import * as getters from '../../../src/store/getters'
import {tracks} from './mocks'

describe('getters', () => {
  it('tracks', () => {
    const state = {
      tracks
    }

    expect(getters.tracks(state)).to.deep.equal(tracks)
  })
})
