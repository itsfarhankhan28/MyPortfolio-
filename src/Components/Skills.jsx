import React , {useRef} from 'react'
import {motion} from 'framer-motion'
import { useScroll , useTransform } from 'framer-motion'

const Skills = () => {

  const targetRef = useRef()
  const {scrollYProgress} = useScroll({
    target:targetRef,
    offset:["end end","end start"]
  })

  const opacity = useTransform(scrollYProgress , [0,1],[1,0])
  const scale = useTransform(scrollYProgress , [0,0.5] , [1,0.8])

  return (
    <>
    <div className='h-screen bg-Mischka'>
      <motion.div 
      style={{opacity , scale}}
      ref={targetRef}
      key="banner"
      initial={{opacity:0}}
      animate={{opacity:1,transition:{
      duration:0.5,
      delay:6
        }}}
        className='flex flex-wrap w-full justify-center items-center font-herofont font-semibold'>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=html" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>HTML</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=css" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>CSS</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=javascript" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>JAVASCRIPT</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=react" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>REACT</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=nodejs" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>NODE.JS</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=express" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>EXPRESS.JS</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=mongodb" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>MONGODB</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=postgresql" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>POSTGRESQL</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=markdown" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>MARKDOWN</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=typescript" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>TYPESCRIPT</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=vercel" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>VERCEL</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=bootstrap" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>BOOTSTRAP</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=mui" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>MATERIAL UI</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=tailwindcss" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>TAILWAIND CSS</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=postman" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>POSTMAN</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=figma" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>FIGMA</h1>
          </div>
          <div className='m-8 text-center flex flex-col gap-1 items-centers justify-center'>
            <img className='xxsm:w-[60px] md:w-[100px]' src="https://skillicons.dev/icons?i=webflow" alt="" />
            <h1 className='xxsm:text-[10px] md:text-[15px]'>WEBFLOW</h1>
          </div>
        </motion.div>
    </div>  
    </>
  )
}

export default Skills
