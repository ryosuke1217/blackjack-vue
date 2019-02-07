<template>
  <div class="card">
    <img v-if="rank" :src="image()" :height="height">
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: ['card', 'hide'],
  data: () => ({
    suit: '',
    rank: '',
    height: null
  }),
  mounted: function () {
    let _card = this.card.toObj()
    this.suit = _card.suit
    this.rank = _card.rank
    this.height = this.$store.getters.getDisplayHeight / 5
  },
  methods: {
    image: function () {
      console.log(this.card)
      const filename = this.hide ? 'back' : `${this.suit}_${this.rank}`
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
