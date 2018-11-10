import { Player } from '@/models/Player'
import { Deck } from '@/models/Cards'
import { Hand } from '../../../src/models/Hand'

describe('Player.js', () => {
  let player
  beforeEach(() => {
    player = new Player(new Hand(), new Deck.Init(), 'user')
  })
  it('score()', () => {
    console.log(player)
  })
})
