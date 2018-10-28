import { Hand } from '@/models/Hand.js'
import { Deck } from '@/models/Cards'
// import { Card } from '@/models/Cards'

describe('Hand.js', () => {
  let hand
  let deck
  beforeEach(() => {
    hand = new Hand()
    deck = new Deck.init()
  })
  it('add()', () => {
    hand.add('test')
    hand.add('test')
    hand.add('test')
    expect(hand.cards.length).toBe(3)
  })
  it('score()', () => {
    const c1 = deck.next()
    const c2 = deck.next()
    const c3 = deck.next()
    hand.add(c1)
    hand.add(c2)
    hand.add(c3)
    expect(hand.score()).toBe(30)
  })
  it('isBurst()', () => {
    const c1 = deck.next()
    const c2 = deck.next()
    const c3 = deck.next()
    hand.add(c1)
    hand.add(c2)
    hand.add(c3)
    expect(hand.isBurst()).toBe(true)
  })
})