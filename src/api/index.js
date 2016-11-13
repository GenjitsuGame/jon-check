import Vue from 'vue'

export const getTracks = () => {
  return Vue.http.get('library/tracks')
    .then(response => response.body)
}

