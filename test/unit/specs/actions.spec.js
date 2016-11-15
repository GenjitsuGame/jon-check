import {expect} from 'chai'
import {state} from '../../../src/store/index'
import {tracks} from './mocks'
const actionsInjector = require('inject!../../../src/store/actions')

const actions = actionsInjector({
  '../api': {
    getTracks: () => {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(tracks)
        }, 500)
      })
    }
  }
})

// helper for testing action with expected mutations
const testAction = async (action, payload, state, expectedMutations, done) => {
  let count = 0

  // mock commit
  const commit = (type, payload) => {
    const mutation = expectedMutations[count]
    expect(mutation.type).to.equal(type)
    if (payload) {
      expect(mutation.payload).to.deep.equal(payload)
    }
    count++
    if (count >= expectedMutations.length) {
      done()
    }
  }

  // call the action with mocked store and arguments
  await action({commit, state}, payload)

  // check if no mutations should have been dispatched
  if (expectedMutations.length === 0) {
    expect(count).to.equal(0)
    done()
  }
}

describe('actions', () => {
  let _state
  beforeEach(() => {
    _state = JSON.parse(JSON.stringify(state))
  })

  it('getTracks', done => {
    testAction(actions.getAllTracks, null, _state, [
      {type: 'GET_TRACKS_REQUEST'},
      {type: 'GET_TRACKS_SUCCESS', payload: tracks}
    ], done)
  })
})
