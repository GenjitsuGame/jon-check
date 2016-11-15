import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

Vue.http.options.root = 'http://localhost:4100'

export const getTracks = () => {
  return Vue.http.get('library/tracks')
    .then(response => response.body)
}
