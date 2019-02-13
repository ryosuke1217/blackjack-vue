<template>
  <div class="top">
    <v-content>
      <h1 id="title">Blackjack</h1>
      <v-btn id="action-btn" large color="#1867c0" @click="submit">START</v-btn>
    </v-content>
    <v-container grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex xs8 offset-xs2>
        <panel/>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
import router from '@/router'
import Panel from '@/components/RulePanel'

export default {
  name: 'Top',
  mounted: function () {
    console.log('top mounted')
  },
  methods: {
    submit () {
      router.push({ path: '/start' })
    }
  },
  components: {
    Panel
  }
}
</script>

<style>
#title{
  font-size: 5vmin;
}
#action-btn{
  margin-top: 50px;
  cursor: pointer;
  color: white;
}
</style>
