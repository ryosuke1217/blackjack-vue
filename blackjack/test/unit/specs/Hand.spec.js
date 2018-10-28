import { Hand } from '@/models/Hand.js'
import { Card, SUIT } from '@/models/Cards'

describe('Hand.js', () => {
  let hand
  beforeEach(() => {
    hand = new Hand()
  })
  it('add()', () => {
    hand.add(new Card(SUIT.heart, 5))
    hand.add(new Card(SUIT.spade, 6))
    hand.add(new Card(SUIT.diamond, 7))
    hand.add(new Card(SUIT.diamond,11))
    expect(hand.cards.length).toBe(4)
  })
  it('score() contains J Q K', () => {
    hand.add(new Card(SUIT.heart, 11))
    hand.add(new Card(SUIT.spade, 12))
    hand.add(new Card(SUIT.diamond, 13))
    expect(hand.score()).toBe(30)
  })
  it('score() not contains J Q K', () => {
    hand.add(new Card(SUIT.heart, 5))
    hand.add(new Card(SUIT.spade, 6))
    hand.add(new Card(SUIT.diamond, 7))
    expect(hand.score()).toBe(18)
  })
  it('isBurst() 22 or more', () => {
    hand.add(new Card(SUIT.heart, 3))
    hand.add(new Card(SUIT.spade, 9))
    hand.add(new Card(SUIT.diamond, 10))
    expect(hand.isBurst()).toBe(true)
  })
  it('isBurst() less than 22', () => {
    hand.add(new Card(SUIT.heart, 2))
    hand.add(new Card(SUIT.spade, 9))
    expect(hand.isBurst()).toBe(false)
  })
  it('containsAce() contains Ace', () => {
    hand.add(new Card(SUIT.heart, 1))
    hand.add(new Card(SUIT.heart, 5))
    expect(hand.containsAce()).toBe(true)
  })
  it('containsAce() not contains Ace', () => {
    hand.add(new Card(SUIT.heart, 3))
    hand.add(new Card(SUIT.heart, 5))
    expect(hand.containsAce()).toBe(false)
  })
})