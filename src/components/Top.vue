<template>
  <div class="top">
    <v-content>
      <h1 id="title">
        Blackjack
      </h1>
      <v-btn id="start-btn" large color="#1867c0" @click="submit">START</v-btn>
    </v-content>
  </div>
</template>

<script>
import router from '@/router'
export default {
  name: 'Top',
  mounted: function () {
    console.log('top mounted')
  },
  methods: {
    submit () {
      router.push({ path: '/start' })
    }
  }
}
</script>

<style>
#title{
  font-size: 5vmin;
}
#start-btn{
  margin-top: 50px;
  cursor: pointer;
  color: white;
}
</style>
