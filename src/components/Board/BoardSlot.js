import React from 'react'

function BoardSlot({ value, play }) {
  return (
    <div onClick={play} className='board-slot'>
      {value}
    </div>
  )
}

export default BoardSlot

