<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'App',
  created: function () {
    this.$store.commit('setDisplayHeight', window.parent.screen.height)
    this.$store.commit('setDisplayWidth', window.parent.screen.width)
  },
  mounted: function () {
    router.push({ path: '/top' })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
