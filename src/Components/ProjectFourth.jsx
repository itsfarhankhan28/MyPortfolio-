import { useScroll, useTransform } from 'framer-motion'
import { motion } from 'framer-motion'
// import project2img from '../Assets/Project2 Demo.png'
import { useRef } from 'react'
import projectimg4 from '../Assets/Project4 Demo.png'

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

const ProjectFourth = () => {

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

  return (
    <>
    <div className='xxsm:h-screen lg:h-[100vh] bg-Mischka'>
        <motion.div
        ref={targetRef} 
        className='flex lg:w-[1000px] md:w-[700px] xxsm:w-[350px] xxsm:text-center lg:text-left lg:flex-row xxsm:flex-col justify-center items-center mx-auto pt-20 lg:gap-10'>
            <motion.img 
            style={{opacity , scale , x}}
            className='md:w-[50%] xxsm:w-fit my-auto' src={projectimg4.src} alt="" />
            <motion.p 
            style={{opacity:paragraph1Opacity,y:paragraph1TranslateY}}
            className='font-herofont xxsm:w-fit md:w-[50%] my-auto pt-20'>
            <h1 className='md:text-[35px] lg:text-[40px] xxsm:text-[25px]'>Project 04</h1>
            <h1 className='md:text-[40px] lg:text-[55px] xxsm:text-[35px] font-semibold'>MovieAPI</h1>
            <p className='leading-[30px] font-semibold'>The Movies API project serves as a robust and dynamic RESTful API that offers a wealth of information about various movies. It supplies essential details such as movie names, ratings, directors, actors, along with visual elements like movie posters and trailers. </p>
            <a target='_blank' href="https://github.com/itsfarhankhan28/MoviesAPIOthers"><button className='border border-black bg-Mischka md:px-8 py-4 mt-3 font-semibold rounded-xl mr-3'>View Source Code</button></a>
            <a target='_blank' href="https://moviesapi3.onrender.com/movies/get"><button className='border border-black bg-Mischka md:px-8 py-4 mt-3 font-semibold rounded-xl'>Visit API</button></a>
            </motion.p>
        </motion.div>
    </div>
    </>
  )
}

export default ProjectFourth
