import React from 'react'
import projectimg1 from '../Assets/Project1 Demo.png'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

const animationOrder = {
  initial:0,
  fadeInEnd:0.15,
  showParagraphOne:0.25,
  hideParagraphOne:0.3,
  showParagraphTwoStart:0.35,
  showParagraphTwoEnd:0.4,
  hideParagraphTwo:0.5,
  showLoadingScreenStart:0.53,
  showLoadingScreenEnd:0.58,
  createBranchStart:0.65,
  createBranchEnd:0.7,
  createBrancFadeInStart:0.78,
  createBranchFadeInEnd:0.85,
  endTextFadeInStart:0.95,
  endTextFadeInEnd:1
}

const ProjectOne = () => {

  const targetRef = useRef()
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["start end","end start"]
  })

  const opacity = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.createBranchEnd,
      animationOrder.endTextFadeInStart
    ],
    [0,1,1,0]
  )

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      animationOrder.showLoadingScreenEnd,
      animationOrder.createBranchStart
    ],
    [3,1,1,0.5]
  )

  return (
    <>
    <div className='bg-Mischka h-screen sticky'>
        <motion.div style={{opacity , scale}} ref={targetRef} className='flex w-[1000px] mx-auto pt-16 leading-[60px] z-20'>
        <p className='w-[50%] font-herofont my-auto'>
            <h1 className='text-[40px]'>Project 01</h1>
            <h1 className='text-[55px] font-semibold'>All About Recipe</h1>
            <p className='leading-[30px] font-semibold'>The purpose of this website <br /> is to provide users with a <br />
            collection of recipes ,<br /> cooking tips and food <br /> related information . The <br /> goal is to inspire and assist <br /> users in the kitchen . The <br /> technology used is MERN stack</p>
        </p>
        <img className='w-[50%] my-auto' src={projectimg1} alt="" />
        </motion.div>
    </div>  
    </>
  )
}

export default ProjectOne
