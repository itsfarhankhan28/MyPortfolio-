import React from 'react'
import ProgrammingLang from './ProgrammingLang'
import WebDevelopment from './WebDevelopment'
import Tools from './Tools'
import Others from './Others'

const Skills = () => {
  return (
    <>
     <div className='h-screen bg-custom-brown flex flex-col'>
        <h1 className='text-center pt-5 font-herofont text-[35px] font-semibold'>My Skills</h1>
        <div className='w-auto mx-5 h-auto grid grid-cols-4 gap-10 mt-5'>
            <ProgrammingLang/>
            <WebDevelopment/>
            <Tools/>
            <Others/>
        </div>
     </div> 
    </>
  )
}

export default Skills
