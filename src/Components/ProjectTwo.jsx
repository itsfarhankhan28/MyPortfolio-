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
      // animationOrder.showParagraphOne,
    ],
    ["0%"]
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
    <div className='xxsm:h-screen lg:h-[100vh] bg-Mischka'>
        <motion.div
        ref={targetRef} 
        className='flex lg:w-[1000px] md:w-[700px] xxsm:w-[350px] xxsm:text-center lg:text-left lg:flex-row xxsm:flex-col justify-center items-center mx-auto pt-20 lg:gap-10'>
            <motion.img 
            style={{opacity , scale , x}}
            className='md:w-[50%] xxsm:w-fit my-auto' src={project2img} alt="" />
            <motion.p 
            style={{opacity:paragraph1Opacity,y:paragraph1TranslateY}}
            className='font-herofont xxsm:w-fit md:w-[50%] my-auto pt-20'>
            <h1 className='md:text-[35px] lg:text-[40px] xxsm:text-[25px]'>Project 02</h1>
            <h1 className='md:text-[40px] lg:text-[55px] xxsm:text-[35px] font-semibold'>Clone Website</h1>
            <p className='leading-[30px] font-semibold'>Discover the future of web development through our Airbnb clone, brought to life with React.js and Tailwind.CSS. Seamlessly blending functionality and style, this project showcases the synergy of modern tools. Explore now 🌍🌎🌏</p>
            <a target='_blank' href="https://github.com/itsfarhankhan28/CloneWeb/tree/master/cloneweb"><button className='border border-black bg-Mischka md:px-8 py-4 mt-3 font-semibold rounded-xl mr-3'>View Source Code</button></a>
            <a target='_blank' href="https://clone-web-liart.vercel.app/"><button className='border border-black bg-Mischka md:px-8 py-4 mt-3 font-semibold rounded-xl'>Visit Website</button></a>
            </motion.p>
        </motion.div>
    </div>
    </>
  )
}

export default ProjectTwo
