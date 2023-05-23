import React from 'react'
import portfolioimg from '../Assets/herosectionfinalimg.png'
import {motion} from 'framer-motion'

const Banner = () => {
  return (
    <>
    <motion.div
    key="banner"
    initial={{opacity:0}}
    animate={{opacity:1,transition:{
        duration:0.5,
        delay:6
    }}}
    className='flex w-[950px]'>
        <img className='' src={portfolioimg} alt="" />
        <p className='text-left font-herofont text-[25px] leading-[35px] mt-28 font-semibold'>A passionate and motivated web developer . Dedicated to creating user friendly , visually appealing and responsive website.</p>
    </motion.div>  
    </>
  )
}

export default Banner
