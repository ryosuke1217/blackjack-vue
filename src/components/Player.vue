<template>
  <div class="player">
    <span v-if="player" class="name">{{player.name}}</span>
    <div class="card-wrapper" v-if="player">
      <card v-for="(card, index) in player.hand.cards" :key="index" :card="card"></card>
    </div>
    <div v-if="show" class="action-btn">
      <v-btn @click="hit">Hit</v-btn>
      <v-btn @click="stand">Stand</v-btn>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { Player } from '@/models/Player.js'
import { Hand } from '@/models/Hand.js'
export default {
  name: 'Player',
  props: ['deck', 'show'],
  data: () => ({
    player: null,
    score: null
  }),
  mounted: function () {
    console.log('player mounted')
    this.player = new Player(new Hand(), this.deck, 'Player')
    console.log(this.player)
    this.player.take()
    this.player.take()
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
