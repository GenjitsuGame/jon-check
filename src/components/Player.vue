<template>
  <div class="col-xs-12">
    <audio v-show="currentTrack" controls="" autoplay="true" name="media">
      <source :src="currentTrack ? 'http://localhost:4100/api/tracks/' + currentTrack : ''" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex'

  export default {
    name: 'Player',
    computed: {
      ...mapGetters([
        'currentTrack'
      ])
    },
    watch: {
      currentTrack: function () {
        var audio = this.$el.getElementsByTagName('audio')[0]
        audio.load()
        audio.play()
      }
    }
  }
</script>
