<template>
  <div>
    <track-info
      v-for="track in tracks"
      :key="track._id"
      :track="track">
    </track-info>
  </div>
</template>
<style>

</style>
<script>
import TrackInfo from './TrackInfo'
import { mapGetters } from 'vuex'

export default{
  name: 'TrackInfoSection',
  components: { TrackInfo },
  computed: {
    ...mapGetters([
      'tracks'
    ])
  }
}
</script>
