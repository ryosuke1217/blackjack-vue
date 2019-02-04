<template>
  <div class="card">
    <img v-if="rank" :src="image()" height="280">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card'],
  data: () => ({
    s_card: null,
    suit: '',
    rank: ''
  }),
  mounted: function () {
    this.s_card = this.card.toObj()
    this.suit = this.s_card.suit
    this.rank = this.s_card.rank
  },
  methods: {
    image: function () {
      // const filename = this.hide ? 'back' : `${this.suit}_${this.rank.toString()}`
      const filename = `${this.suit}_${this.rank}`
      console.log(filename)
      return require(`../assets/cards/${filename}.png`)
    }
  }
}
</script>

<style>
#title{
  font-size: 90px;
}
#start-btn{
  margin-top: 50px;
  cursor: pointer;
  color: white;
}
</style>
