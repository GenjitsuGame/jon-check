export const apiRoot = state => state.globals.apiRoot

export const tracks = state => state.tracks.data
export const isFetchingTracks = state => state.tracks.fetching

export const currentTrack = state => state.player.queue[state.player.index]
export const queue = state => state.player.queue
export const showQueue = state => state.player.showQueue

export const playlists = state => state.playlists.data
// export const isFetchingPlaylists = state => state.playlists.fetching
