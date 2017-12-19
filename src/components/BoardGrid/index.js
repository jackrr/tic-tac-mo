import React from 'react'
import { connect } from 'react-redux'
import { boardsInRowsAccessor } from 'state/boards/accessors'
import Board from '../Board'

const mapStateToProps = (state) => {
  return {
    boardRows: boardsInRowsAccessor(state)
  }
}

function BoardGrid({ boardRows }) {
  return (
    <div className="board-grid">
      {boardRows.map(row => 
        (
          <div className="grid-row">
            {row.map(board =>
               <Board id={board.id} key={board.id} grid={board.grid} winner={board.winner} />
            )}
          </div>
        )
      )}
    </div>
  )
}

export default connect(mapStateToProps)(BoardGrid)

