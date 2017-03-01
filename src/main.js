import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import store from './store'
import {getAllTracks, getPlaylists} from './store/actions'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

if (process.env.NODE_ENV !== 'testing') {
  Vue.use(VueResource)
  Vue.http.options.root = 'http://localhost:4100/api'
  getAllTracks(store)
  getPlaylists(store)
}

Vue.filter('timecode', function (value) {
  value = Number(value) / 1000
  let seconds = Math.floor(value % 60).toString()
  let minutes = Math.floor(value / 60).toString()
  if (seconds.length === 1) {
    seconds = '0' + seconds
  }
  return minutes + ':' + seconds
})
