import Vue from 'vue'

export const getTracks = (q, skip, limit) => {
  return Vue.http.get('api/tracks?q=' + q + '&skip=' + skip + '&limit=' + limit)
    .then(response => response.body)
}
