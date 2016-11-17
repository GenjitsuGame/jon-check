import Vue from 'vue'
import VueResource from 'vue-resource'
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
  Vue.use(VueResource)
  Vue.http.options.root = 'http://localhost:4100'
  getAllTracks(store)
}
