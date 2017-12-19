const getPlayersState = state => state.players

export const currentPieceAccessor = state => {
  const playerState = getPlayersState(state)
  return playerState.players[playerState.playerIndex]
}
export const winningPieceAccessor = state => {
  const playerState = getPlayersState(state)
  if (playerState.winnerIndex === null) return null
  return playerState.players[playerState.winnerIndex]
}

