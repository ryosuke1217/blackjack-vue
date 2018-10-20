
class Card {
  constructor () {
    this.suit = SUIT
    this.rank = RANK
  }
  cards () {
    // let ret = []
    for (let suit of Object.keys(this.suit)) {
      console.log(suit)
    }
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

export { Card }
