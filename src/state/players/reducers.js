import { nextPlayer } from 'state/players/actions'

const initialPlayers = {
  players: ['X', 'O'],
  playerIndex: 0
}

const players = (state = initialPlayers, action) => {
  switch(action.type) {
    case nextPlayer.toString():
      return {
        ...state,
        playerIndex: (state.playerIndex + 1) % state.players.length
      }
    default:
      return state
  }
}

export default players
