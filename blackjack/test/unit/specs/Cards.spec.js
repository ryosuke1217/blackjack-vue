import { Deck } from '@/models/Cards'

describe('Cards.js', () => {
  let deck
  beforeEach(() => {
    deck = new Deck.init()
  })
  it('getLength()', () => {
    expect(deck.getLength()).toBe(52)
    deck.next()
    expect(deck.getLength()).toBe(51)
  })
  it('isEmpty()', () => {
    expect(deck.isEmpty()).toBe(false)
    for (let i = 0; i < 52; i++){
      deck.next()
    }
    expect(deck.isEmpty()).toBe(true)
  })
})