<template>
  <div class="main">
    <dealer v-if="deck" :deck="deck" ref="dealer" @result="result"/>
    <player v-if="deck" :deck="deck" @stand="stand"/>
    {{ message }}
    {{ resultMessage }}
  </div>
</template>

<script>
import Player from '@/components/Player'
import Dealer from '@/components/Dealer'
import { Deck } from '@/models/Cards'

export default {
  name: 'Main',
  data: () => ({
    deck: null,
    playerScore: null,
    delaerScore: null,
    message: '',
    resultMessage: ''
  }),
  mounted: function () {
    console.log('main mounted')
    let d = new Deck.Init()
    d.cards = d.shuffle()
    this.deck = d
  },
  methods: {
    stand (playerScore) {
      this.playerScore = playerScore
      if (playerScore === 'Bust') {
        this.message = 'Bust!!負け！！'
      } else {
        this.$refs.dealer.exec()
      }
    },
    result (dealerScore) {
      this.dealerScore = dealerScore > 21 ? 'Bust' : dealerScore
      this.message = `Dealer : ${dealerScore} / Player : ${this.playerScore}`
      this.resultMessage = this.resultMsg()
    },
    resultMsg () {
      console.log(this.dealerScore)
      console.log(this.playerScore)
      console.log(this.playersScore > this.dealerScore)
      if (this.playersScore > this.dealerScore || this.dealersScore === 'Bust') {
        return 'You Win'
      }
      if (this.playersScore < this.dealersScore || this.playersScore === 'Bust') {
        return 'You Lose'
      }
      return 'Draw'
    }
  },
  components: {
    Player,
    Dealer
  }
}
</script>

<style>
.main {
  background: url("../assets/background.jpg") center center / cover no-repeat fixed;
}
</style>
