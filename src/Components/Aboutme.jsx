import React from 'react'
import Aboutmeimg from '../Assets/aboutmeimg.png'

const Aboutme = () => {
  return (
    <>
        <div className='h-auto bg-green-200 flex flex-col justify-center items-center gap-5'>
            <h1 className='font-herofont text-[35px] font-semibold'>About Me</h1>
            <img className='w-[200px]' src={Aboutmeimg} alt="" />
        </div> 
    </>
  )
}

export default Aboutme
