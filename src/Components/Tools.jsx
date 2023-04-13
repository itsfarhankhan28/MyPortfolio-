import React from 'react'
import {motion} from 'framer-motion'

const Tools = () => {
  return (
    <>
        <div className=''>
            <h1 className='text-center font-herofont text-xl font-semibold'>Tools</h1>
            <div className='px-2 py-10 grid grid-cols-1 gap-8'>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=vscode" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <motion.div 
                        initial={{width:0}}
                        animate={{width:150}}
                        transition={{duration:1}}
                        className='absolute inset-0 bg-blue-300 w-[150px] rounded-l-full'></motion.div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>90%</h1>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=postman" alt="" />
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
                    <img src="https://skillicons.dev/icons?i=git" alt="" />
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
            </div>
        </div>  
    </>
  )
}

export default Tools
