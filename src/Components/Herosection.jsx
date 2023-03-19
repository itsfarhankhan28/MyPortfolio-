import React from 'react'
import img1 from '../Assets/herosectionimg1.png'
import langimg1 from '../Assets/languageimg1-removebg-preview 1.png'
import langimg2 from '../Assets/languageimg2-removebg-preview 1.png'
import langimg3 from '../Assets/languageimg3-removebg-preview 1.png'
import langimg4 from '../Assets/languageimg4-removebg-preview 1.png'
import {motion} from 'framer-motion'
import scrollicon from '../Assets/scroll-bar.png'

const Herosection = (props) => {

  const word1 = props.heading1.split(" ")
  console.log(word1)
  const word2 = props.heading2.split(" ")
  console.log(word2)
  const paragraph1 = props.para1.split(" ")
  console.log(paragraph1)
  const paragraph2 = props.para2.split(" ")
  console.log(paragraph2)
  const paragraph3 = props.para3.split(" ")
  console.log(paragraph3)
  const paragraph4 = props.para4.split(" ")
  console.log(paragraph4)

  const container = {
    hidden:{opacity:0},
    visible:(i=1)=>({
      opacity:1,
      transition:{staggerChildren:0.12,delayChildren:0.04 * i}
    })
  }

  const child = {
    visible:{
      opacity:1,
      y:0,
      transition:{
        type:"spring",
        damping:12,
        stiffness:100
      }
    },
    hidden:{
      opacity:0,
      y:20,
      transition:{
        type:"spring",
        damping:12,
        stiffness:100
      }
    }
  }

  return (
    <>
      <div className='bg-custom-brown h-[100vh] flex items-center justify-center 2xl:overflow-hidden lg:overflow-visible'>
        <div className='grid grid-cols-1'>
        <div className='grid 2xl:gap-0 xl:gap-0 lg:gap-10 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 2xl:max-w-[1200px] xl:max-w-[1200px] lg:max-w-[1200px] h-[600px] '>
            <div>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div className=''>
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay:1,
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }} 
                className='relative bottom-[470px] left-[320px]' src={langimg1} alt="" />
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1  }}
                transition={{
                  delay:2,
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}  
                className='relative bottom-[320px] right-[100px]' src={langimg2} alt="" />
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1  }}
                transition={{
                  delay:3,
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}  
                className='relative bottom-[700px] right-[20px]' src={langimg3} alt="" />
                <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1  }}
                transition={{
                  delay:4,
                  default: {
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01]
                  },
                  scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                  }
                }}  
                className='relative bottom-[710px] left-[300px]' src={langimg4} alt="" />
                </div>
            </div>
            <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='relative 2xl:top-[13%] xl:top-[13%] lg:top-[13%] items-center font-herofont leading-[50px]'>
              <h1 className='2xl:text-[40px] xl:text-[40px] lg:text-[30px]'>{word1.map((word, index)=>{
                return(
                  <motion.span
                  className='flex overflow-hidden'
                  variants={child} 
                  key={index}>
                    {word}
                  </motion.span>
                )
              })}</h1>
                <h1 className='2xl:text-[70px] xl:text-[70px] lg:text-[50px] tracking-tighter pt-3 flex flex-row'>{word2.map((words , index)=>{
                  return(
                    <motion.span
                    key={index}
                    variants={child} 
                    className='mr-5 overflow-hidden '>
                      {words}
                    </motion.span>
                  )
                })}</h1>
                <p className='2xl:text-[25px] xl:text-[25px] lg:text-[20px] 2xl:leading-9 xl:leading-9 lg:leading-8 pt-5'><h1 className='flex flex-row'>{paragraph1.map((par1,index)=>{
                  return(
                    <motion.span
                    key={index}
                    variants={child} 
                    className='mr-3 overflow-hidden '>
                      {par1}
                    </motion.span>
                  )
                })}</h1>
                <h1 className='flex flex-row'> {paragraph2.map((par2,index)=>{
                  return(
                    <motion.span
                    key={index}
                    variants={child} 
                    className='mr-3 overflow-hidden'>
                      {par2}
                    </motion.span>
                  )
                })}</h1>
                <h1 className='flex flex-row'>{paragraph3.map((par3 , index)=>{
                  return(
                    <motion.span
                    key={index}
                    variants={child}
                    className='mr-3 overflow-hidden'>
                      {par3}
                    </motion.span>
                  )
                })}</h1>
                <h1 className='flex flex-row'> {paragraph4.map((par4,index)=>{
                  return(
                    <motion.span
                    variants={child}
                    key={index} 
                    className='mr-3 overflow-hidden'>
                      {par4}
                    </motion.span>
                  )
                })}</h1></p>
            </motion.div>
        </div>
        <div className='max-w-[1200px] h-[50px] text-center flex items-center justify-center '>
          <img className='w-[50px] ' src={scrollicon} alt="" />
          <div>
            <h1 className='text-lg font-semibold font-herofont'>SCROLL DOWN</h1>
          </div> 
        </div>
        </div>
      </div>
    </>
  )
}

export default Herosection
