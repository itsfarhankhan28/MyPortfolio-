import React from 'react'
import arrow from '../Assets/arrow.png'
import heart from '../Assets/heart.png'
import eye from '../Assets/eye.png'

const BlogsContent = () => {

  return (
    <>
    <div className='h-auto bg-Mischka'>
        <div className='lg:w-[1000px] md:w-[500px] mx-auto p-10 flex lg:flex-row md:flex-col flex-wrap gap-16'>
            <div className='w-[400px] h-auto shadow-2xl rounded-3xl p-5' >
                <h1 className='font-herofont text-[25px]'>Blog 01</h1>
                <p className='text-[30px] font-herofont font-bold'>User authentication in MERN stack(Backend)</p>
                <div className='flex gap-5'>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={heart} alt="" />
                        <h1 className='font-bold text-xl'>7</h1>
                    </div>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={eye} alt="" />
                        <h1 className='font-bold text-xl'>2215</h1>
                    </div>
                </div>
                <div className='flex items-center gap-1 hover:gap-2 mt-3'>
                    <button className='font-herofont font-bold text-xl'><a href="https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-part-1-4bj3">Visit Blog</a></button>
                    <img className='w-[25px] h-[15px]' src={arrow} alt="" />
                </div>
            </div>



            <div className='w-[400px] h-auto shadow-2xl rounded-3xl p-5 z-30' >
                <h1 className='font-herofont text-[25px]'>Blog 02</h1>
                <p className='text-[30px] font-herofont font-bold'>User authentication in MERN stack(Frontend)</p>
                <div className='flex gap-5'>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={heart} alt="" />
                        <h1 className='font-bold text-xl'>5</h1>
                    </div>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={eye} alt="" />
                        <h1 className='font-bold text-xl'>93</h1>
                    </div>
                </div>
                <div className='flex items-center gap-1 hover:gap-2 mt-3'>
                    <button className='font-herofont font-bold text-xl'><a href="https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-frontend-1c14">Visit Blog</a></button>
                    <img className='w-[25px] h-[15px]' src={arrow} alt="" />
                </div>
            </div>

            <div className='w-[400px] h-auto shadow-2xl rounded-3xl p-5 z-30' >
                <h1 className='font-herofont text-[25px]'>Blog 03</h1>
                <p className='text-[30px] font-herofont font-bold'>User authentication in MERN stack(Frontend and Backend connection)</p>
                <div className='flex gap-5'>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={heart} alt="" />
                        <h1 className='font-bold text-xl'>1</h1>
                    </div>
                    <div className='mt-2 flex items-center gap-1'>
                        <img className='h-[20px]' src={eye} alt="" />
                        <h1 className='font-bold text-xl'>25</h1>
                    </div>
                </div>
                <div className='flex items-center gap-1 hover:gap-2 mt-3'>
                    <button className='font-herofont font-bold text-xl'><a href="https://dev.to/itsfarhankhan28/user-authentication-in-mern-stack-frontend-and-backend-connection-5fjb">Visit Blog</a></button>
                    <img className='w-[25px] h-[15px]' src={arrow} alt="" />
                </div>
            </div>
        </div>
    </div>  
    </>
  )
}

export default BlogsContent
