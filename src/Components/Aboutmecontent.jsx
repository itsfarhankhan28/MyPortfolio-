import React from 'react'
import aboutmeimg from '../Assets/aboutmeimg.png'

const Aboutmecontent = () => {
  return (
    <>
    <div className='h-screen bg-Mischka'>
        <div className='mx-auto flex justify-center items-center text-center'>
          <div className='w-[70%] h-screen flex items-end'>
            <img className='items-start w-full ' src={aboutmeimg} alt="" />
          </div>
            <p className='w-[30%] h-screen flex justify-center items-center flex-col gap-4'>
              <h1 className='font-about text-[70px]'>About Me</h1>
              <p className='font-about text-lg'>
              I'm Farhan Khan, a passionate Full Stack web developer who thrives on the excitement of creating dynamic web applications. My journey in web development has been an incredible adventure where each project in the MERN stack has contributed to my growth. Whether it's building feature-rich recipe platforms or movies review application like IMDB, every project has been a milestone in my technical journey. I believe in continuous learning, constantly seeking emerging technologies and best practices to enhance user experiences.
              </p>
              <h3 className='font-sign text-2xl w-full text-right pr-5'>Farhan Khan</h3>
            </p>
        </div>
    </div>
    </>
  )
}

export default Aboutmecontent
