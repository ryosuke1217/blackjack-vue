<template>
  <div class="dealer">
    <span v-if="dealer" class="name">{{dealer.name}}</span>
    <div class="card-wrapper" v-if="dealer">
      <card v-for="(card, index) in dealer.hand.cards" :key="index" :card="card" :hide="card.hide"></card>
    </div>
  </div>
</template>

<script>
import Card from '@/components/Card'
import { Player } from '@/models/Player.js'
import { Hand } from '@/models/Hand.js'
export default {
  name: 'Dealer',
  props: ['deck'],
  data: () => ({
    dealer: null,
    score: null
  }),
  mounted: function () {
    console.log('dealer mounted')
    this.dealer = new Player(new Hand(), this.deck, 'Dealer')
    this.dealer.take()
    this.dealer.take()
    this.dealer.hand.cards[0]['hide'] = true
  },
  methods: {
    exec () {
      console.log('dealer exec')
      this.dealer.hand.cards[0]['hide'] = false
      while (this.dealer.hand.score() < 17) {
        this.dealer.take()
      }
      return this.$emit('result', this.dealer.hand.score())
    }
  },
  components: {
    Card
  }
}
</script>

<style>
.dealer {
  margin-top: 20px;
}
.card-wrapper {
  display: flex;
  justify-content: center;
}
</style>
