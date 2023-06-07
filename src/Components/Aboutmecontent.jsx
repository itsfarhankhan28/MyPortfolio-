import React from 'react'
import aboutmeimg from '../Assets/aboutmeimg.jpg'

const Aboutmecontent = () => {
  return (
    <>
    <div className='h-screen bg-Mischka'>
        <div className='w-[1000px] mx-auto flex justify-center items-center text-center flex-col'>
            <img className='w-[180px] h-[200px] rounded-3xl' src={aboutmeimg} alt="" />
            <p>Hello there👋 My name is Farhan Khan and I'm aiming to be a web developer 👨‍💻. I am currently pursuing my degree in Information technology and have a passion for all things web development. I have experience working with HTML, CSS, JavaScript, and several web development frameworks such as React etc</p>
            <p> Apart from my academic pursuits, I've also been involved in several personal projects, including developing a responsive spotify clone with complete working backend. These projects have allowed me to further hone my skills and provided me with valuable hands-on experience.</p>
        </div>
    </div>
    </>
  )
}

export default Aboutmecontent
