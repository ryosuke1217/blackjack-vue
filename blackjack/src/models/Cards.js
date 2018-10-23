var _ = require('lodash')

class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }

  toString () {
    return Object.keys(RANK).filter(k => RANK[k] === this.rank)[0]
  }

  point () {
    if (this.rank > 10) return 10
    return this.rank
  }
}

class Deck {
  constructor (cards) {
    this.cards = cards
  }

  static init () {
    let ret = []
    for (let suit in SUIT) {
      for (let rank of Object.keys(RANK)) {
        ret.push(new Card(suit, RANK[rank]))
      }
    }
    return new Deck(ret)
  }

  isEmpty () {
    return this.cards.length === 0
  }

  shuffle () {
    _.shuffle(this.cards)
  }

  getLength () {
    return this.cards.length
  }

  next () {
    return this.cards.pop()
  }
}

const SUIT = {
  heart: 0,
  diamond: 1,
  spade: 2,
  club: 3
}

const RANK = {
  "A": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  "10": 10,
  "J": 11,
  "Q": 12,
  "K": 13
}

export { Deck, Card }
