import React from 'react'
import project3img from '../Assets/Project3 Demo.png'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'

const animationOrder = {
    initial:0,
    fadeInEnd:0.3,
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

const ProjectThree = () => {

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
          // animationOrder.showParagraphOne,
        ],
        ["0%"]
    )

    const paragraph1Opacity = useTransform(
        scrollYProgress,
        [
          animationOrder.showParagraphOne,
        ],
        [1]
      )
    
      const paragraph1TranslateY = useTransform(
        scrollYProgress,
        [
          // animationOrder.fadeInEnd + 0.02,
          animationOrder.showParagraphOne,
          animationOrder.hideParagraphOne
        ],
        ["0rem","-4rem"]
      )


  return (
    <>
     <section className='bg-Mischka xxsm:h-screen lg:h-[100vh]'>
        <motion.div ref={targetRef} className='flex lg:w-[1000px] md:w-[700px] xxsm:w-[350px] xxsm:text-center lg:text-left lg:flex-row xxsm:flex-col-reverse justify-center items-center mx-auto pt-16 md:leading-[60px] z-20'>
        <motion.p style={{opacity:paragraph1Opacity,y:paragraph1TranslateY}} className='xxsm:w-fit md:w-[50%] font-herofont pt-20'>
            <h1 className='md:text-[35px] lg:text-[40px] xxsm:text-[25px]'>Project 03</h1>
            <h1 className='md:text-[40px] lg:text-[55px] xxsm:text-[35px] font-semibold'>My Blog Web</h1>
            <p className='leading-[30px] font-semibold'>The purpose of this website is to provide users with a collection of recipes ,cooking tips and food related information . The goal is to inspire and assist users in the kitchen . The technology used is MERN stack</p>
            <button className='border border-black md:px-8 mt-3 py-4 font-semibold rounded-xl'>View Source Code</button>
        </motion.p>
        <motion.img style={{opacity , scale , x}}  className='md:w-[50%] xxsm:w-fit my-auto' src={project3img} alt="" />
        </motion.div>
    </section>   
    </>
  )
}

export default ProjectThree
