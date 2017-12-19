import { takeEvery, call, put, select } from 'redux-saga/effects'
import { play, move, illegalMove } from 'state/boards/actions'
import { nextPlayer, playerWon } from 'state/players/actions'
import { currentPieceAccessor } from 'state/players/accessors'
import { gridWinnerAccessor, boardByIdAccessor } from 'state/boards/accessors'

function* handlePlay(action) {
  const state = yield select()
  const { boardId, x, y } = action.payload
  const board = boardByIdAccessor(state, boardId)
  if (board.winner) return yield put(illegalMove({ message: 'Board already won' }))
  if (board.grid[x][y]) return yield put(illegalMove({ message: 'Slot already full' }))

  const piece = yield select(currentPieceAccessor)
  yield put(move({ ...action.payload, piece }))
  const winner = yield select(gridWinnerAccessor)
  if (winner) {
    yield put(playerWon({ piece: winner }))
  } else {
    yield put(nextPlayer())
  }
}

export default function* rootSaga() {
  yield takeEvery(play.toString(), handlePlay)
}
