import React from 'react'
import { connect } from 'react-redux'
import { play } from 'state/boards/actions'
import BoardRow from './BoardRow'

const mapDispatchToProps = (dispatch) => {
  return {
    play: (x, y, boardId) => {
      dispatch(play({ boardId, x, y }))
    }
  }
}

function Board({ grid, id, winner, play }) {
  function renderRow(row, index) {
    const playRow = (y) => {
      play(index, y, id)
    }
    return (
      <BoardRow
      index={index}
      key={index}
      slots={row}
      play={playRow} />
    )
  }

  if (winner) return <div className="board won-board">{winner}</div>
  return (
    <div className="board">
      {grid.map(renderRow)}
    </div>
  )
}

export default connect(null, mapDispatchToProps)(Board)

