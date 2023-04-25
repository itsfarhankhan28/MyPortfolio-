import React from 'react'
import NavLinks from './NavLinks'
import portfoliologo from '../Assets/portfoliologo.png'

const Navigation = () => {
  return (
    <>
    <div className='flex justify-items items-center'>
      <div className='absolute left-[3%]'>
        <img className='w-[100px]' src={portfoliologo} alt="" />
      </div>
      <nav className='md:inline-block xxsm:hidden'>
        <NavLinks/>
      </nav>
    </div>
    </>
  )
}

export default Navigation
