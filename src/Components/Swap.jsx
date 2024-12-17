import React from 'react'
import '../Styles/Button.css'
const Swap = ({swapinfo}) => {
  return (
    <>
      <button className='swapbtn' onClick={swapinfo}>Swap</button>
    </>
  )
}

export default Swap
