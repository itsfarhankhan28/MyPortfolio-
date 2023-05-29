import React, { useRef } from 'react'
import portfolioimg from '../Assets/herosectionfinalimg.png'
import {motion} from 'framer-motion'
import { useScroll , useTransform } from 'framer-motion'
// import  forwardRef  from 'react'

const Banner = () => {
  const targetRef = useRef()
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["end end","end start"]
  })

  const opacity = useTransform(scrollYProgress , [0,1],[1,0])
  const scale = useTransform(scrollYProgress , [0,0.5] , [1,0.8])

  return (
    <>
    <motion.div
    style={{opacity , scale}}
    ref={targetRef}
    key="banner"
    initial={{opacity:0}}
    animate={{opacity:1,transition:{
        duration:0.5,
        delay:6
    }}}
    className='flex w-[850px] fixed z-10'>
        <motion.img className='w-[60%]' src={portfolioimg} alt="" />
        <motion.p className='w-[40%] text-left font-herofont text-[25px] leading-[35px] mt-24 font-semibold'>A passionate and motivated web developer . Dedicated to creating user friendly , visually appealing and responsive website.</motion.p>
    </motion.div>  
    </>
  )
}


export default Banner
