
class Hand {
  constructor () {
    this.cards = []
  }

  add (card) {
    this.cards.push(card)
  }

  score () {
    const _sum = (pre, current) => pre + current
    const points = this.cards.map(c => c.point())
    return points.reduce(_sum)
  }

  isBurst () {
    return this.score() > 21
  }

  descOrder () {
    this.cards.sort(function (a, b) {
      return (a.rank < b.rank ? 1 : -1)
    })
  }

  containsAce () {
    return this.cards.filter(c => c.rank === 1).length > 0
  }
}

export { Hand }
