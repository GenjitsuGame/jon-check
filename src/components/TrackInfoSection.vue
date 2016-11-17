<template>
  <table class="table table-hover table-tracks fill-height">
    <thead class="thead-inverse">
    <tr>
      <th class="col-md-1">Cover</th>
      <th class="col-md-5">Title</th>
      <th class="col-md-3">Artist</th>
      <th class="col-md-3">Album</th>
    </tr>
    </thead>
    <tbody class="track-section-tbody fill-height">
    <track-info
      v-for="track in tracks"
      :key="track._id"
      :track="track">
    </track-info>
    </tbody>
  </table>
</template>

<script>
  import TrackInfo from './TrackInfo'
  import {mapGetters} from 'vuex'

  export default{
    name: 'TrackInfoSection',
    components: {TrackInfo},
    computed: {
      ...mapGetters([
        'tracks'
      ])
    }
  }
</script>

<style src="../css/styles.css"></style>
<style>
  .table-tracks {
    border: 0;
    border-collapse: collapse;
    table-layout: fixed;
  }

  .table-tracks tr {
    display: flex;
    height: 50px;
  }

  .table-tracks td {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow-x: hidden;
  }

  .table-tracks thead tr:after {
    overflow-y: scroll;
    visibility: hidden;
    height: 0;
  }

  .table-tracks thead th {
    flex: 1 auto;
    display: block;
  }

  .table-tracks tbody {
    display: block;
    width: 100%;
    overflow-y: auto;
  }
</style>
