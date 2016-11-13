import Vue from 'vue'
import App from './App'
import store from './store'
import VueResource from 'vue-resource'
import {getAllTracks} from './store/actions'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:4100'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

getAllTracks(store)
