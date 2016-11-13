<template>
  <div>
    {{ track.title }}
  </div>
</template>

<script>
export default {
  name: 'TrackInfo',
  props: {
    track: Object
  }
}
</script>
