import React from 'react'
import { motion , AnimatePresence, delay , AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'

const Loader = (props) => {

    const word1 = props.heading1.split(" ")
    console.log(word1)
    const word2 = props.heading2.split(" ")
    console.log(word2)

    const container = {
        hidden:{opacity:0},
        visible:(i=1)=>({
          opacity:1,
          transition:{staggerChildren:0.12,delayChildren:0.04 * i}
        })
    }

    const child1 = {
        visible:{
          opacity:1,
          y:0,
          transition:{
            type:"spring",
            damping:12,
            stiffness:100,
            duration:1
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

    const child2 = {
        visible:{
          opacity:1,
          y:0,
          transition:{
            type:"spring",
            damping:12,
            stiffness:100,
            duration:1,
            delay:3
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

    const [visible , setVisible] = useState(true)
    const [Visible2 , setVisible2] = useState(true)
    const timeout = setTimeout(()=>{
        setVisible(false)
    },2000)
    console.log(timeout)
    // clearTimeout(timeout)
    const timeout2 = setTimeout(()=>{
        setVisible2(false)
    },5000)
    console.log(timeout2)
    // clearTimeout(timeout2)

  return (
    <motion.div
    variants={container}
    initial='hidden'
    animate='visible'
    className='font-herofont text-3xl font-semibold relative'>
        <AnimatePresence>
            {visible && (
                <>
                <motion.h1
                key="loader1"
                initial={{opacity: 0 }}
                animate={{opacity: 1 , duration:1  }}
                exit={{opacity:0 , y:-30 , transition:{
                    duration:1
                }}}>
                    {word1.map((word,index)=>{
                        return (
                            <motion.span
                            className='flex overflow-hidden justify-center items-center'
                            variants={child1} 
                            key={index}
                            >
                                {word}
                            </motion.span>
                        )
                    })}
                </motion.h1>
                </>
            )}
            {Visible2 && (
                <motion.h1
                className='flex flex-row'
                key="loader2"
                exit={{opacity:0,y:-30 , transition:{
                    duration:1
                }}}
                >
                   {word2.map((word,index)=>{
                        return (
                            <motion.span
                            className='mr-3 overflow-hidden justify-center items-center'
                            variants={child2} 
                            key={index}
                            >
                                {word}
                            </motion.span>
                        )
                    })}
                </motion.h1>
            )}
        </AnimatePresence>
    </motion.div>
  )
}

export default Loader
