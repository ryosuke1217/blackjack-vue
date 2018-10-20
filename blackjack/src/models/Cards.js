
class Card {
  constructor (suit, rank) {
    this.suit = suit
    this.rank = rank
  }
}

class Deck {
  constructor (cards) {
    this.cards = cards
  }

  static init () {
    let ret = []
    for (let suit in SUIT) {
      for (let rank in RANK) {
        ret.push(new Card(suit, rank))
      }
    }
    return new Deck(ret)
  }

  isEmpty () {
    return this.cards.length === 0
  }

  shuffle () {
    
  }

  getLength () {
    return this.cards.length
  }

  next () {
    return this.cards.pop()
  }
}

const SUIT = {
  HART: 0,
  DIAMOND: 1,
  SPADE: 2,
  CLUB: 3
}

const RANK = {
  ace: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
  jack: 11,
  queen: 12,
  king: 13
}

export { Deck }
