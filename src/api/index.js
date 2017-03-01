import Vue from 'vue'

export const getTracks = (q, skip, limit) => {
  return Vue.http
    .get('tracks', {
      params: {
        q,
        skip,
        limit
      }
    })
    .then(response => response.body)
}

export const getPlaylists = () => {
  return Vue.http
    .get('playlists')
    .then(response => response.body)
}
