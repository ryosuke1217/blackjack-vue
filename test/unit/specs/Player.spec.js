import { Player } from '@/models/Player'
import { Deck } from '@/models/Cards'
import { Hand } from '../../../src/models/Hand'

describe('Player.js', () => {
  let player
  beforeEach(() => {
    player = new Player(new Hand(), new Deck.Init(), 'user')
  })
  it('take()', () => {
    player.take()
    expect(player.hand.cards.length).toBe(1)
  })
})
