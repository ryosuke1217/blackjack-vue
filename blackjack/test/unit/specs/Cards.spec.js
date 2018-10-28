import { Deck, Card, SUIT } from '@/models/Cards'

describe('Cards.js', () => {
  let deck
  beforeEach(() => {
    deck = new Deck.Init()
  })
  it('getLength()', () => {
    expect(deck.getLength()).toBe(52)
    deck.next()
    expect(deck.getLength()).toBe(51)
  })
  it('isEmpty()', () => {
    expect(deck.isEmpty()).toBe(false)
    for (let i = 0; i < 52; i++) {
      deck.next()
    }
    expect(deck.isEmpty()).toBe(true)
  })
  it('shuffle()', () => {
    const before = deck.getLength()
    deck.shuffle()
    expect(deck.getLength()).toBe(before)
  })
  it('toObj()', () => {
    const card = new Card(SUIT.heart, 11)
    expect(card.toObj()).toEqual({'suit': 'heart', 'rank': 'J'})
  })
  it('point()', () => {
    const card = new Card(SUIT.heart, 8)
    expect(card.point()).toBe(8)
  })
  it('point() in the case J Q K', () => {
    const J = new Card(SUIT.heart, 11)
    expect(J.point()).toBe(10)
    const Q = new Card(SUIT.heart, 12)
    expect(Q.point()).toBe(10)
    const K = new Card(SUIT.heart, 13)
    expect(K.point()).toBe(10)
  })
  // it('Card initialize argument suit test', () => {
  //   expect(() => { new Card(5, 4) }).toThrow(`5 is not allowed`)
  // })
  // it('Card initialize argument rank test', () => {
  //   expect(() => { new Card(SUIT.heart, 15) }).toThrow(`15 is not allowed`)
  // })
})
