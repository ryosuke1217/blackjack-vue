<template>
  <div class="main">
    <Dialog v-if="dialog" @close="closeDialog" :message="resultMessage"/>
    <Dealer v-if="deck" :deck="deck" ref="dealer" @result="result"/>
    <div class="result-msg">
      {{ message }}
    </div>
    <Player v-if="deck" :deck="deck" :show="showBtn" @stand="stand"/>
    <v-btn id="start-btn" large color="#1867c0" @click="submit">REMATCH</v-btn>
  </div>
</template>

<script>
import router from '@/router'
import { Deck } from '@/models/Cards'
import Player from '@/components/Player'
import Dealer from '@/components/Dealer'
import Dialog from '@/components/Dialog'

export default {
  name: 'Main',
  data: () => ({
    deck: null,
    playerScore: null,
    delaerScore: null,
    message: 'I wonder if I can win.',
    resultMessage: '',
    dialog: false
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
        this.message = 'Player : "Bust"'
        this.resultMessage = 'You Lose!!'
        this.dialog = true
      } else {
        this.$refs.dealer.exec()
      }
    },
    result (dealerScore) {
      this.dealerScore = dealerScore > 21 ? 'Bust' : dealerScore
      this.message = `Dealer : ${this.dealerScore} / Player : ${this.playerScore}`
      this.resultMessage = this.resultMsg()
      this.dialog = true
    },
    resultMsg () {
      if (this.playerScore > this.dealerScore || this.dealerScore === 'Bust') {
        return 'You Win!!'
      }
      if (this.playerScore < this.dealerScore || this.playerScore === 'Bust') {
        return 'You Lose!!'
      }
      return 'Draw'
    },
    submit () {
      router.push('/start')
    },
    closeDialog () {
      this.dialog = false
    }
  },
  computed: {
    showBtn () {
      return !this.resultMessage
    }
  },
  components: {
    Player,
    Dealer,
    Dialog
  }
}
</script>

<style>
.main {
  background: url("../assets/background.jpg") center center / cover no-repeat fixed;
  margin-top: -60px;
}
.name {
  font-size: 30px;
  font-family: 'Righteous', cursive;
}
.result-msg {
  font-size: 30px;
  font-family: 'Righteous', cursive;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
