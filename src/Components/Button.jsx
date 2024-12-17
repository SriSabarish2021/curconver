import React from 'react'
import '../Styles/Button.css'
const Button = ({getamt,fromval,toval}) => {
  return (
    <div className='btn'>
      <button onClick={getamt}>Convert {fromval} to {toval}</button>
    </div>
  )
}

export default Button
