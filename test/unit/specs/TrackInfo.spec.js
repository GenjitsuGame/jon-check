import {expect} from 'chai'
import TrackInfo from 'components/TrackInfo'
import Vue from 'vue'

describe('TrackInfo.vue', () => {
  it('should display track information', () => {
    var Ctor = Vue.extend(TrackInfo)
    var vm = new Ctor({
      propsData: {
        track: {
          title: 'title'
        }
      }
    }).$mount()

    expect(vm.$el.textContent).to.contains('title')
  })
})
