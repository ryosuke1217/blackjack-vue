
class Hand {
  constructor(cards) {
    this.cards = cards
  }

  add (card) {
    this.cards.append(card)
  }

  score () {
    const _sum = (pre, current) => pre + current
    const points = this.cards.map(c => c.point)
    return points.reduce(_sum)
  }

  isBurst () {
    return score() > 21
  }

  containsAce () {
    return this.cards.filter(c => c.rank === 1).length > 0
  }
}

export { Hand }