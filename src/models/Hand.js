
class Hand {
  constructor () {
    this.cards = []
  }

  add (card) {
    this.cards.push(card)
  }

  /**
   * cardsのrankの合計値を返却する
   * @return {number}
   */
  score () {
    const _sum = (pre, current) => pre + current
    const points = this.cards.map(c => c.point())
    const _score = points.reduce(_sum)
    return (this.containsAce() && _score < 12) ? _score + 10 : _score
  }

  /**
   * cardsのrank合計値が21を超えているかを返却する
   * @return {boolean}
   */
  isBurst () {
    return this.score() > 21
  }

  descOrder () {
    this.cards.sort(function (a, b) {
      return (a.rank < b.rank ? 1 : -1)
    })
  }

  /**
   * カードの中に'A'が含まれているかを返却する
   * @return {boolean}
   */
  containsAce () {
    return this.cards.filter(c => c.rank === 1).length > 0
  }
}

export { Hand }
