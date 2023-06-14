import React from 'react'
import project2img from '../Assets/Project2 Demo.png'
import { useRef } from 'react'
import { useScroll , useTransform , motion } from 'framer-motion'

const animationOrder = {
    initial:0,
    fadeInEnd:0.5,
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

const ProjectTwo = () => {

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
      // animationOrder.endTextFadeInStart
    ],
    [0,1,1]
  )

  const scale = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.fadeInEnd,
      // animationOrder.showLoadingScreenEnd,
      // animationOrder.createBranchStart
    ],
    [2,1]
  )

  const x = useTransform(
    scrollYProgress,
    [
      animationOrder.initial,
      animationOrder.showParagraphOne,
    ],
    ["0%","-10%"]
  )

  const paragraph1Opacity = useTransform(
    scrollYProgress,
    [
      // animationOrder.fadeInEnd,
      animationOrder.showParagraphOne,
      // animationOrder.hideParagraphOne
    ],
    [1]
  )

  const paragraph1TranslateY = useTransform(
    scrollYProgress,
    [
      // animationOrder.fadeInEnd,
      animationOrder.showParagraphOne,
      animationOrder.hideParagraphOne
    ],
    ["0rem","-4rem"]
  )

  const opacityProject = useTransform(scrollYProgress , [0,1],[1,0.5])
  const scaleProject = useTransform(scrollYProgress , [0,0.5] , [1,0.8])

  return (
    <>
    <div className='h-[100vh] bg-Mischka'>
        <motion.div
        ref={targetRef} 
        className='flex w-[1000px] justify-center items-center mx-auto pt-20'>
            <motion.img 
            style={{opacity , scale , x}}
            className='w-[55%] my-auto' src={project2img} alt="" />
            <motion.p 
            style={{opacity:paragraph1Opacity,y:paragraph1TranslateY}}
            className='font-herofont w-[45%] my-auto pt-20'>
            <h1 className='text-[40px]'>Project 02</h1>
            <h1 className='text-[55px] font-semibold'>Clone Website</h1>
            <p className='leading-[30px] font-semibold'>The purpose of this website is to provide users with a collection of recipes ,cooking tips and food related information . The goal is to inspire and assist users in the kitchen . The technology used is MERN stack</p>
            <button className='border border-black bg-Mischka px-8 py-4 mt-3 font-semibold rounded-xl'>View Source Code</button>
            </motion.p>
        </motion.div>
    </div>
    </>
  )
}

export default ProjectTwo
