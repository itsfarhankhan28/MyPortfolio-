import React from 'react'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
import ProjectOne from './ProjectOne'

const Projects = () => {

  const targetRef = useRef()
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["start end","end start"]
  })

  const scale = useTransform(scrollYProgress , [0.1,0.4] , [1,2.5])
  const x = useTransform(
    scrollYProgress,
    [0.1,0.25,0.7,1],
    ["0%","-35%","-40%","-80%"]
  )

  const opacity = useTransform(scrollYProgress , [0.5,1],[1,0])

  return (
    <>
    <div className='h-[100vh] overflow-hidden flex justify-center items-center bg-Mischka '>
      <motion.h1
      style={{scale , x , opacity}} 
      ref={targetRef} 
      className='z-10 font-herofont text-[130px] font-semibold'>Projects</motion.h1>
    </div> 
    </>
  )
}

export default Projects
