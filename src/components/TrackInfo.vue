<template>
  <tr class="track-info-tr">
    <td class="col-md-1">
      <img v-if="track.covers.length" class="track-thumbnail fill" :src="apiRoot + track.covers[0]" alt="">
      <img v-else class="fill" src="../assets/default-song.png" alt="">
    </td>
    <td class="col-md-5">{{ track.title }}</td>
    <td class="col-md-3">{{ track.artist }}</td>
    <td class="col-md-3">{{ track.album }}</td>
  </tr>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'TrackInfo',
    props: {
      track: Object
    },
    computed: {
      ...mapGetters([
        'apiRoot'
      ])
    }
  }
</script>

<style src="../css/styles.css"></style>
<style>

</style>
