import React from 'react'
import aboutmeimg from '../Assets/portfolioaboutmeimg.jpg'
import {motion} from 'framer-motion'

const Aboutme = () => {

  const typingContainer = {
    hidden:{
      opacity:0,
    },
    show:{
      opacity:1,
      transition:{
        staggerChildren:0.4,
        ease:'easeInOut'
      }
    }
  }

  const typingText = {
    hidden:{
      opacity:0,
      y:'-20px'
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        ease:'easeInOut'
      }
    }
  }

  const animatepara = {
    hidden:{
      opacity:0,
      y:'-20px'
    },
    show:{
      opacity:1,
      y:0,
      transition:{
        ease:'easeInOut'
      }
    }
  }

  const animateImage = {
    hidden:{
      opacity:0,
      y:100,
      width:80
    },
    show:{
      width:300,
      opacity:1,
      y:0,
      transition:{
        ease:"easeInOut",
      }
    }
  }

  return (
    <>
      <div className='bg-custom-brown flex justify-center items-center xxsm:h-auto md:h-screen xxsm:pb-20 md:pb-0'>
        <div className='lg:mx-[250px] md:mx-[50px] h-auto w-auto flex justify-center items-center lg:text-left xxsm:text-center lg:flex-row xxsm:flex-col'>
        <div className='w-[40%]'>
          <motion.img
          variants={animateImage}
          animate="show"
          initial="hidden" 
          className='w-[300px]' src={aboutmeimg} alt="" />
        </div>
        <div className='font-herofont w-[60%]'>
          <motion.h1 
          variants={typingContainer} 
          animate="show" 
          initial="hidden" 
          className='md:text-[50px] xxsm:text-[30px] font-bold'>
            {
              Array.from('About Me').map((word  , i)=>(
                <motion.span variants={typingText} key={i}>{word}</motion.span>
              ))
            }
          </motion.h1>
          <motion.p 
          variants={animatepara} 
          animate="show" 
          initial="hidden" 
          className='leading-7 mt-3'>Hello there👋 My name is Farhan Khan and I'm aiming to be a web developer 👨‍💻. I am currently pursuing my degree in Information technology and have a passion for all things web development. I have experience working with HTML, CSS, JavaScript, and several web development frameworks such as React etc.</motion.p>
          <br />
          <motion.p
          variants={animatepara} 
          animate="show" 
          initial="hidden" 
          className='leading-7'>
          Apart from my academic pursuits, I've also been involved in several personal projects, including developing a responsive spotify clone with complete working backend. These projects have allowed me to further hone my skills and provided me with valuable hands-on experience.
          </motion.p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Aboutme
