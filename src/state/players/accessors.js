const getPlayersState = state => state.players

export const currentPieceAccessor = state => {
  const playerState = getPlayersState(state)
  return playerState.players[playerState.playerIndex]
}

