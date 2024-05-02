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
    className='flex xxsm:flex-col justify-center items-center lg:flex-row  w-[850px] fixed z-10'>
        <motion.img className='md:w-[60%] xxsm:w-[40%]' src={portfolioimg.src} alt="" />
        <motion.p className='w-[45%] text-left font-herofont md:text-[25px] xxsm:text-[20px] leading-[35px] mb-12 font-semibold lg:text-left xxsm:text-center'>A passionate and motivated web developer . Dedicated to creating user friendly , visually appealing and responsive website.</motion.p>
    </motion.div>  
    </>
  )
}


export default Banner
