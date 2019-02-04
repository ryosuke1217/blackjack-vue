<template>
  <div class="main">
    <player v-if="deck" :deck="deck"/>
  </div>
</template>

<script>
import Player from '@/components/Player'
import { Deck } from '@/models/Cards'

export default {
  name: 'Main',
  data: () => ({
    deck: null
  }),
  mounted: function () {
    console.log('main mounted')
    let d = new Deck.Init()
    d.cards = d.shuffle()
    this.deck = d
  },
  components: {
    Player
  }
}
</script>

<style>
</style>
