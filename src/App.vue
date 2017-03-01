<template>
  <div id="app">
    <div class="container">
      <index></index>
    </div>
  </div>
</template>

<script>
  import Index from './components/Index'
  import store from './store'

  export default {
    name: 'app',
    components: {
      Index
    },
    store
  }
</script>

<style src="./css/styles.css"></style>
<style>
</style>
