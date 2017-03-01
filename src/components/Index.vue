<template>
  <div>
    <div>
      <input type="text" placeholder="api endpoint" v-model="userApiRoot">
    </div>

    <div>
      <input type="text" placeholder="search..." v-model="query">
    </div>

    <div>
      <button v-on:click="toggleQueue">{{ showQueue ? 'hide' : 'show'}} playlist</button>
      <table v-show="showQueue">
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(t, i) in queue">
          <td>{{i + 1}}</td>
          <td>{{tracks[t].title}}</td>
          <td>{{tracks[t].artist}}</td>
          <td>{{tracks[t].album}}</td>
          <td>{{tracks[t].duration | timecode}}</td>
        </tr>
        </tbody>
      </table>
    </div>

    <div>
      <audio id="player" :src="currentTrack ? apiRoot + 'tracks/' + currentTrack + '/stream' : ''" preload="auto"
             controls autoplay></audio>
      <span>
        <button v-on:click="clearQueue">clear queue</button>
      </span>
    </div>

    <div>
      <ul>
        <li v-for="(p, k) in playlists" v-on:click="addPlaylistToQueue(p)">{{ k }}</li>
      </ul>
    </div>

    <div>
      <table>
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Duration</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(t, k, i) in tracks" v-on:click="addTracksToQueue([t._id])">
          <td> {{ i + 1 }}</td>
          <td>
              <span>
                <img v-if="t.covers" class="album-cover" :src="t.covers[0].path">
                <img v-else class="album-cover" src="../assets/default-song.png">
                {{ t.title }}
              </span>
          </td>
          <td>{{ t.artist }}</td>
          <td>{{ t.album }}</td>
          <td>{{ t.duration | timecode}}</td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import debounce from 'lodash.debounce'
  import store from '../store'

  export default {
    data: function () {
      return {
        userApiRoot: undefined,
        query: ''
      }
    },
    computed: {
      ...mapGetters([
        'apiRoot',
        'tracks',
        'currentTrack',
        'queue',
        'playlists',
        'showQueue'
      ])
    },
    methods: {
      ...mapActions([
        'getTracks',
        'addTracksToQueue',
        'addPlaylistToQueue',
        'nextSong',
        'clearQueue',
        'updateApiRoot',
        'toggleQueue'
      ]),
      debounceGetTracks: debounce(function () {
        this.getTracks(this.query)
      }, 500)
    },
    watch: {
      query: function () {
        this.debounceGetTracks()
      },
      userApiRoot: function () {
        this.updateApiRoot(store, this.userApiRoot)
      }
    },
    mounted: function () {
      const audio = this.$el.querySelector('#player')
      audio.addEventListener('ended', () => {
        this.nextSong()
      })
    }
  }
</script>

<style>
  .album-cover {
    max-height: 40px;
    min-height: 40px;
    max-width: 36px;
    min-width: 36px;
  }
</style>
