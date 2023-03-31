import React from 'react'

const Button = (props) => {
  return (
    <>
      <button className='my-3 border-2 border-solid border-black p-2 rounded-xl'>
        {props.btnName}
      </button>
    </>
  )
}

export default Button
