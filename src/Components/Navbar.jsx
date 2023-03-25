import React from 'react'
import Navigation from './Navigation'
import MobileNavigation from './MobileNavigation'

const Navbar = () => {
  return (
    <>
      <div className='fixed flex p-5 w-[100vw] justify-end items-center'>
          <Navigation/>
          <MobileNavigation/>
      </div>
    </>
  )
}

export default Navbar
