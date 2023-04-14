import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { useAnimation } from 'framer-motion'

const WebDevelopment = () => {

    const [ref , inView] = useInView({
        threshold:0.2
    })

    const animateLang1 = useAnimation()
    const animateLang2 = useAnimation()
    const animateLang3 = useAnimation()
    const animateLang4= useAnimation()
    const animateLang5 = useAnimation()
    const animateLang6 = useAnimation()

    useEffect(()=>{
        if(inView){
            animateLang1.start({
                width:170,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animateLang2.start({
                width:170,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animateLang3.start({
                width:135,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animateLang4.start({
                width:170,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animateLang5.start({
                width:150,
                transition:{
                    duration:1
                }
            })
        }
        if(inView){
            animateLang6.start({
                width:150,
                transition:{
                    duration:1
                }
            })
        }
        if(!inView){
            animateLang1.start({
                width:0
            })
        }
        if(!inView){
            animateLang2.start({
                width:0
            })
        }
        if(!inView){
            animateLang3.start({
                width:0
            })
        }
        if(!inView){
            animateLang4.start({
                width:0
            })
        }
        if(!inView){
            animateLang5.start({
                width:0
            })
        }
        if(!inView){
            animateLang6.start({
                width:0
            })
        }
    },[inView])

  return (
    <>
        <div className=''>
            <h1 className='text-center font-herofont text-xl font-semibold'>Web Development</h1>
            <div ref={ref} className='px-2 py-10 grid grid-cols-1 gap-8'>

                {/* Lang1 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=html" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div
                        animate={animateLang1}
                        className='absolute inset-0 bg-blue-300 rounded-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>100%</h1>
                    </div>
                </div>

                {/* Lang2 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=css" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div
                        animate={animateLang2} 
                        className='absolute inset-0 bg-blue-300 w-[170px] rounded-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>100%</h1>
                    </div>
                </div>

                {/* Lang3 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=expressjs" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div
                        animate={animateLang3}
                        className='absolute inset-0 bg-blue-300 w-[135px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>80%</h1>
                    </div>
                </div>

                {/* Lang4 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=tailwind" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        animate={animateLang4}
                        className='absolute inset-0 bg-blue-300 w-[170px] rounded-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>100%</h1>
                    </div>
                </div>

                {/* Lang5 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=nodejs" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div
                        animate={animateLang5}
                        className='absolute inset-0 bg-blue-300 w-[150px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>90%</h1>
                    </div>
                </div>

                {/* Lang6 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=react" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div
                        animate={animateLang6}
                        className='absolute inset-0 bg-blue-300 w-[150px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>90%</h1>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default WebDevelopment
