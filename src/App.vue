<template>
  <div id="app">
    <div class="container-fluid main-content">
      <div class="row fill-height">
        <div class="col-md-2 fill-height"></div>
        <div class="col-md-10 track-info-section fill-height">
          <track-info-section></track-info-section>
        </div>
      </div>
    </div>
    <footer class="footer">
      <div class="container">
        <player></player>
      </div>
    </footer>
  </div>
</template>

<script>
// import Hello from './components/Hello'
import Player from './components/Player'
import TrackInfoSection from './components/TrackInfoSection'

export default {
  name: 'app',
  components: {
    Player,
    TrackInfoSection
  }
}
</script>

<style src="./css/styles.css"></style>
<style>
  .main-content {
    height: 90vh
  }

  .track-info-section {
    overflow-y: auto;
  }
</style>
