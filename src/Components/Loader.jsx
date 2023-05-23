import React from 'react'
import { motion , AnimatePresence, delay , AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import Banner from './Banner'

const Loader = () => {

    // const item = {
    //     hidden:{
    //         opacity:0,
    //         y:100
    //     },
    //     show:{
    //         opacity:1,
    //         y:0,
    //         transition:{
    //             ease:"easeInOut",
    //             duration:1
    //         }
    //     },
    //     exit:{
    //         opacity:0,
    //         y:-100,
    //         transition:{
    //             duration:1.5
    //         }
    //     }
    // }

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
    <motion.div className='font-herofont text-3xl font-semibold'>
        <AnimatePresence>
            {visible && (
                <>
                <motion.h1
                key="loader1"
                initial={{ y: 300, opacity: 0 }}
                animate={{ y: 0, opacity: 1 , transition:{
                    ease:"easeInOut",
                    duration:1
                } }}
                exit={{y:-300,opacity:0 , transition:{
                    ease:'easeInOut',
                    duration:1,
                }}}>
                    Hello 👋
                </motion.h1>
                </>
            )}
            {Visible2 && (
                <motion.h1
                key="loader2"
                initial={{y:300 , opacity:0}}
                animate={{y:0 , opacity:1 , transition:{
                    ease:"easeInOut",
                    delay:3,
                    duration:1
                }}}
                exit={{y:-300,opacity:0 , transition:{
                    ease:'easeInOut',
                    duration:1,
                }}}
                >
                    I am Farhan Khan
                </motion.h1>
            )}
        </AnimatePresence>
    </motion.div>
  )
}

export default Loader
