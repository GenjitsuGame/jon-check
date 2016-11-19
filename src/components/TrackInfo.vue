<template>
  <tr class="track-info-tr">
    <td class="col-md-1 track-thumbnail-col" v-on:click="selectCurrentTrack(track._id)">
      <img v-if="track.covers.length" class="track-thumbnail fill" :src="apiRoot + track.covers[0]" alt="">
      <img v-else class="fill" src="../assets/default-song.png" alt="">
    </td>
    <td class="col-md-5">{{ track.title }}</td>
    <td class="col-md-3">{{ track.artist }}</td>
    <td class="col-md-3">{{ track.album }}</td>
  </tr>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name: 'TrackInfo',
    props: {
      track: Object
    },
    computed: {
      ...mapGetters([
        'apiRoot'
      ])
    },
    methods: {
      ...mapActions([
        'selectCurrentTrack'
      ])
    }
  }
</script>

<style src="../css/styles.css"></style>
<style>
  .track-thumbnail-col {
    padding: 0 !important;
  }

</style>
