
// import { Hand } from './Hand.js'
// import { Deck } from './Cards.js';

class Player {
  constructor (hand, deck, name) {
    this.hand = hand
    this.deck = deck
    this.name = name
  }

  score () {
    return this.hand.score()
  }

  take () {
    this.hand.add(this.deck.next())
  }
}

export { Player }
