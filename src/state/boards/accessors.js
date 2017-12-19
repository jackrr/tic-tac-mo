const N_ARR = [null, null, null]

function boardIdToIndexes(id) {
  return {
    x: parseInt(id[0]),
    y: parseInt(id[1])
  }
}

const getBoards = state => state.boards

const structuredBoard = board => {
  const ids = Object.keys(board)
  const grid = [...N_ARR]

  ids.forEach(id => {
    const { x, y } = boardIdToIndexes(id)
    if (!grid[x]) grid[x] = [...N_ARR]
    grid[x][y] = board[id]
  })
  return grid
}

function rowsWinner(board) {
  const keys = [0, 1, 2]
  return keys.reduce((winner, x) => {
    const first = board[`${x}0`]
    const won = keys.every(y => board[`${x}${y}`] === first)
    if (first && won) return first
    return winner
  }, null)
}

function colsWinner(board) {
  const keys = [0, 1, 2]
  return keys.reduce((winner, y) => {
    const first = board[`0${y}`]
    const won = keys.every(x => board[`${x}${y}`] === first)
    if (first && won) return first
    return winner
  }, null)
}

function diagWinner(board) {
  const keys = [0, 1, 2]
  let first = board['00']
  let win = keys.every(x => board[`${x}${x}`] === first)
  if (win) return first
  first = board['02']
  win = keys.every(x => board[`${x}${2-x}`] === first)
  if (win) return first
}

function boardValue(board) {
  rowsWinner(board) || colsWinner(board) || diagWinner(board)
}

export function gridWinnerAccessor(state) {
  const boards = getBoards(state)
  const mappedBoards = {}
  Object.keys(boards).forEach(id => mappedBoards[id] = boardValue(boards[id]))
  // grid is just a board once mapped
  return boardValue(mappedBoards)
}

export const boardsInRowsAccessor = (state) => {
  const boards = getBoards(state)
  const ids = Object.keys(boards)
  const grid = [...N_ARR]

  ids.forEach(id => {
    const { x, y } = boardIdToIndexes(id)
    if (!grid[x]) grid[x] = [...N_ARR]
    grid[x][y] = {
      id,
      winner: boardValue(boards[id]),
      grid: structuredBoard(boards[id])
    }
  })

  return grid
}

