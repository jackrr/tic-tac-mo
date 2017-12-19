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

function checkWinner(board, direction) {
  const keys = [0, 1, 2]
  let out =  keys.reduce((winner, primaryIndex) => {
    if (winner) return winner
    const value = direction === 'row' ? board[`${primaryIndex}0`] : board[`0${primaryIndex}`]
    const won = keys.every(secondaryIndex => {
      if (direction === 'row') {
        return board[`${primaryIndex}${secondaryIndex}`] === value
      } else {
        return board[`${secondaryIndex}${primaryIndex}`] === value
      }
    })
    if (won) return value
    return winner
  }, null)
  return out
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
  return checkWinner(board, 'row') || checkWinner(board, 'col') || diagWinner(board)
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

export const boardByIdAccessor = (state, id) => {
  const board = getBoards(state)[id]
  return {
    id,
    winner: boardValue(board),
    grid: structuredBoard(board)
  }
}

