import { takeEvery, call, put, select } from 'redux-saga/effects'
import { play, move } from 'state/boards/actions'
import { nextPlayer } from 'state/players/actions'
import { currentPieceAccessor } from 'state/players/accessors'
import { gridWinnerAccessor } from 'state/boards/accessors'

function* handlePlay(action) {
  const piece = yield select(currentPieceAccessor)
  // todo: check if move is legal
  yield put(move({ ...action.payload, piece }))
  const winner = yield select(gridWinnerAccessor)
  if (winner) {
    alert(`${winner} won!`)
  } else {
    yield put(nextPlayer())
  }
}

export default function* rootSaga() {
  yield takeEvery(play.toString(), handlePlay)
}
