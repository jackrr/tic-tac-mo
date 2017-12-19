import { move } from 'state/boards/actions'

const N_ARR = [0, 1, 2]

function indexesToBoardId(x, y) {
  return `${x}${y}`
}

function makeEmptyBoard() {
  const board = {}
  N_ARR.map(x => N_ARR.map(y => board[indexesToBoardId(x, y)] = null))
  return board
}

function makeEmptyArena() {
  const arena = {}
  N_ARR.map(x => N_ARR.map(y => arena[indexesToBoardId(x, y)] = makeEmptyBoard()))
  return arena
}

const initialBoards = makeEmptyArena()

const boards = (state = initialBoards, action) => {
  switch(action.type) {
    case move.toString():
      const { boardId, x, y, piece } = action.payload
      return {
        ...state,
        [boardId]: {
          ...state[boardId],
          [indexesToBoardId(x, y)]: piece
        }
      }
    default:
      return state
  }
}

export default boards
