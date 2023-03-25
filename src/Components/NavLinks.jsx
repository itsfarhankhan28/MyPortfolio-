import React from 'react'

const NavLinks = () => {
  return (
    <>
      <nav class="md:ml-auto flex md:flex-row xxsm:flex-col md:static md:pt-0 xxsm:pt-40 md:bg-none xxsm:bg-custom-brown xxsm:absolute items-center justify-center xxsm:w-[100%] xxsm:right-0 cursor-pointer">
        <a class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl">Home</a>
        <a class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl">Work</a>
        <a class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl">My Skills</a>
        <a class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl">About Me</a>
      </nav>
    </>
  )
}

export default NavLinks
