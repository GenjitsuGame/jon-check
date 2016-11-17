import Vue from 'vue'

export const getTracks = (skip, limit) => {
  return Vue.http.get('api/library/tracks?skip=' + skip + '&limit=' + 100)
    .then(response => response.body.data)
}
