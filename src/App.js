import React from 'react'
import { connect } from 'react-redux'
import BoardGrid from './components/BoardGrid'
import { winningPieceAccessor } from 'state/players/accessors'

const mapStateToProps = (state) => {
  return {
    message: state.boards.error,
    winner: winningPieceAccessor(state)
  }
}

function App({ message, winner }) {

  return (
    <div id="app">
      <h1>Tic Tac Toe</h1>
      <h3>{message}</h3>
      { winner ? <div className="player-won">{winner}</div> : <BoardGrid /> }
    </div>
  )
}

export default connect(mapStateToProps)(App)

