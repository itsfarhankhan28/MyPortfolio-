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
      <div className='bg-custom-brown h-[100vh] md:flex items-center justify-center 2xl:overflow-hidden lg:overflow-visible'>
        <div className='grid grid-cols-1'>
        <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 2xl:max-w-[1100px] lg:max-w-[800px] 2xl:h-[600px]  lg:h-[400px]'>
            <div>
                <div>
                    <img className='2xl:h-[550px] lg:h-[400px]' src={img1} alt="" />
                </div>
                <div className='relative'>
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
                className='absolute lg:bottom-[250px] lg:left-[220px] 2xl:bottom-[330px] 2xl:left-[300px] lg:w-[150px]' src={langimg1} alt="" />
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
                className='absolute lg:bottom-[10px] lg:right-[240px] 2xl:bottom-[30px] 2xl:right-[360px] 2xl:w-[250px] lg:w-[200px]' src={langimg2} alt="" />
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
                className='absolute lg:bottom-[200px] lg:right-[320px] 2xl:w-[110px] lg:w-[80px] 2xl:bottom-[250px] 2xl:right-[450px]' src={langimg3} alt="" />
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
                className='absolute lg:bottom-[100px] lg:left-[220px] 2xl:left-[300px] 2xl:bottom-[150px] 2xl:w-[220px] lg:w-[150px]' src={langimg4} alt="" />
                </div>
            </div>
            <motion.div
            variants={container}
            initial='hidden'
            animate='visible'
            className='relative 2xl:top-[18%] lg:top-[22%] items-center font-herofont 2xl:leading-[50px] lg:leading-[30px]'>
              <h1 className='2xl:text-[40px] lg:text-[30px]'>{word1.map((word, index)=>{
                return(
                  <motion.span
                  className='flex overflow-hidden'
                  variants={child} 
                  key={index}>
                    {word}
                  </motion.span>
                )
              })}</h1>
                <h1 className='2xl:text-[70px] lg:text-[40px] tracking-tighter pt-3 flex flex-row'>{word2.map((words , index)=>{
                  return(
                    <motion.span
                    key={index}
                    variants={child} 
                    className='mr-5 overflow-hidden '>
                      {words}
                    </motion.span>
                  )
                })}</h1>
                <p className='2xl:text-[25px] lg:text-[18px] 2xl:leading-9 lg:leading-7 2xl:pt-5 lg:pt-2'><h1 className='flex flex-row'>{paragraph1.map((par1,index)=>{
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
