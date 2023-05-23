import React from 'react'
import Loader from './Loader'
import Banner from './Banner'
import { motion , AnimatePresence , LayoutGroup } from 'framer-motion'

const Herosection = () => {
  return (
    <>
    <div className='h-screen bg-Mischka relative flex flex-col justify-center items-center text-center'>
      <LayoutGroup type="crossfade">
      <div className='absolute'>
      <Loader/>
      </div>
      <Banner/>
      </LayoutGroup>
    </div>
    </>
  )
}

export default Herosection
