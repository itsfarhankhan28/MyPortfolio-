import React from 'react'
import Loader from './Loader'
import Banner from './Banner'
import { motion , LayoutGroup } from 'framer-motion'

const Herosection = () => {
  return (
    <LayoutGroup type="crossfade">
    <motion.div className='h-screen bg-Mischka relative flex justify-center items-center text-center'>
      <div className='absolute'>
      <Loader heading1="Hello" heading2="I am Farhan Khan"/>
      </div>
      <Banner/>
    </motion.div>
    </LayoutGroup>
  )
}

export default Herosection
