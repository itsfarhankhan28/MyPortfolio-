import React from 'react'
import { motion , useTransform , useScroll } from 'framer-motion'
import { useRef } from 'react'

const Aboutme = () => {

  const targetRef = useRef()
    const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["start end","end start"]
    })

    const scale = useTransform(scrollYProgress , [0.1,0.4] , [1,2.5])
    const x = useTransform(
    scrollYProgress,
    [0.1,0.25,0.7,1],
    ["0%","0%","0%","-80%"]
    )

    const opacity = useTransform(scrollYProgress , [0.5,1],[1,0])

  return (
    <>
    <div className='h-[100vh] overflow-hidden flex justify-center items-center bg-Mischka '>
      <motion.h1
      style={{scale , x , opacity}} 
      ref={targetRef} 
      className='z-10 font-herofont md:text-[100px] xxsm:text-[30px] font-semibold'>About Me</motion.h1>
    </div>   
    </>
  )
}

export default Aboutme
