import React from 'react'
import BoardSlot from './BoardSlot'

function BoardRow({ index, slots, play }) {
  const renderSlot = (value, index) => {
    const playSlot = () => {
      play(index)
    }
    return (
      <BoardSlot
      key={index}
      value={value}
      play={playSlot} />
    )
  }

  return (
    <div className='board-row'>
      {slots.map(renderSlot)}
    </div>
  )
}

export default BoardRow

