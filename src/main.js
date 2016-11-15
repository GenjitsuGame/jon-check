import Vue from 'vue'
import App from './App'
import store from './store'
import {getAllTracks} from './store/actions'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

if (process.env.NODE_ENV !== 'testing') {
  getAllTracks(store)
}
