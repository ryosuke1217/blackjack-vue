var _ = require('lodash')

const SUIT = {
  heart: 0,
  diamond: 1,
  spade: 2,
  club: 3
}

const RANK = {
  'A': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  'J': 11,
  'Q': 12,
  'K': 13
}

class Card {
  constructor (suit, rank, hide) {
    if (Object.values(SUIT).indexOf(suit) === -1) {
      throw new Error(`${suit} is not allowed`)
    }
    if (Object.values(RANK).indexOf(rank) === -1) {
      throw new Error(`${rank} is not allowed`)
    }
    this.suit = suit
    this.rank = rank
    this.hide = false
  }

  toObj () {
    const s = Object.keys(SUIT).filter(k => SUIT[k] === this.suit)[0]
    const r = Object.keys(RANK).filter(k => RANK[k] === this.rank)[0]
    return { 'suit': s, 'rank': r, 'hide': this.hide }
  }

  point () {
    return this.rank > 10 ? 10 : this.rank
  }
}

class Deck {
  constructor (cards) {
    this.cards = cards
  }

  static Init () {
    let ret = []
    for (let suit of Object.values(SUIT)) {
      for (let rank of Object.values(RANK)) {
        ret.push(new Card(suit, rank))
      }
    }
    return new Deck(ret)
  }

  /**
   * cardsの要素が空かを返却する
   * @return {Boolean}
   */
  isEmpty () {
    return this.cards.length === 0
  }

  shuffle () {
    return _.shuffle(this.cards)
  }

  /**
   * cardsの要素の長さを返却する
   * @return {Number}
   */
  getLength () {
    return this.cards.length
  }

  /**
   * cardsから最後の要素を取り除き、その要素を返却する
   * @return {Card}
   */
  next () {
    return this.cards.pop()
  }
}

export { Deck, Card, SUIT, RANK }
