import React from 'react'
import {motion} from 'framer-motion'

const Others = () => {
  return (
    <>
        <div className=''>
            <h1 className='text-center font-herofont text-xl font-semibold'>Others</h1>
            <div className='px-2 py-10 grid grid-cols-1 gap-8'>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=figma" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:170}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[170px] rounded-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>100%</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=webflow" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:110}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[110px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>60%</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=mui" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:135}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[135px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>80%</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=markdown" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:170}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[170px] rounded-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>100%</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=mongodb" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:155}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[155px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>95%</h1>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default Others
