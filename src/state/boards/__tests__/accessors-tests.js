import { boardsInRowsAccessor } from '../accessors'

const diagonalVictoryBoardsState = {
  "00": {
    "10": null,
    "11": "X",
    "12": null,
    "20": null,
    "21": null,
    "22": "X",
    "00": "X",
    "01": "O",
    "02": "O"
  }
}

const rowVictoryBoardsState = {
  "00": {
    "10": null,
    "11": "X",
    "12": null,
    "20": null,
    "21": null,
    "22": "X",
    "00": "O",
    "01": "O",
    "02": "O"
  }
}

const colVictoryBoardsState = {
  "00": {
    "10": null,
    "11": "X",
    "12": null,
    "20": null,
    "21": "X",
    "22": null,
    "00": "0",
    "01": "X",
    "02": "O"
  }
}

describe('boardsInRowsAccessor', () => {
  it('adds the winner when there is a diagonal victory', () => {
    const data = boardsInRowsAccessor({ boards: diagonalVictoryBoardsState })
    expect(data[0][0].winner).toEqual("X")
  })

  it('adds the winner when there is a row victory', () => {
    const data = boardsInRowsAccessor({ boards: rowVictoryBoardsState })
    expect(data[0][0].winner).toEqual("O")
  })

  it('adds the winner when there is a column victory', () => {
    const data = boardsInRowsAccessor({ boards: colVictoryBoardsState })
    expect(data[0][0].winner).toEqual("X")
  })
})
