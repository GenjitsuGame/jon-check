export const apiRoot = state => state.globals.apiRoot

export const tracks = state => state.tracks.data
export const isFetchingTracks = state => state.tracks.fetching

export const currentTrack = state => state.player.currentTrack
