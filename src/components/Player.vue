<template>
  <div class="player">
    <span style="font-size:30px;">Player</span>
    <div class="card-wrapper" v-if="player">
      <card v-for="(card, index) in player.hand.cards" :key="index" :card="card"></card>
    </div>
    <v-btn @click="hit">Hit</v-btn>
    <v-btn @click="stand">Stand</v-btn>
    <span style="font-size:30px;">{{ score }}</span>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { Player } from '@/models/Player.js'
import { Hand } from '@/models/Hand.js'
export default {
  name: 'Player',
  props: ['deck'],
  data: () => ({
    player: null,
    score: null
  }),
  mounted: function () {
    console.log('player mounted')
    this.player = new Player(new Hand(), this.deck, 'test')
    this.player.take()
    this.player.take()
    console.log(this.player)
  },
  methods: {
    hit () {
      this.player.take()
      if (this.player.hand.isBurst()) {
        this.$emit('stand', 'Bust')
      }
    },
    stand () {
      this.score = this.player.hand.isBurst() ? 'Bust' : this.player.hand.score()
      this.$emit('stand', this.score)
    }
  },
  components: {
    Card
  }
}
</script>

<style>
.card-wrapper {
  display: flex;
  justify-content: center;
}
</style>
