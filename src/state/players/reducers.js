import { nextPlayer, playerWon } from 'state/players/actions'

const initialPlayers = {
  players: ['X', 'O'],
  playerIndex: 0,
  winnerIndex: null
}

const players = (state = initialPlayers, action) => {
  switch(action.type) {
    case nextPlayer.toString():
      return {
        ...state,
        playerIndex: (state.playerIndex + 1) % state.players.length
      }
    case playerWon.toString():
      return {
        ...state,
        winnerIndex: state.players.indexOf(action.payload.piece)
      }
    default:
      return state
  }
}

export default players
