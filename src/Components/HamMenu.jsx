import React from 'react'

const HamMenu = () => {
  return (
    <>
     <header class="text-black bg-custom-brown body-font fixed">
  <div class="mx-auto flex space-x-[1400px] flex-wrap p-5 flex-col md:flex-row items-center">
    <h1 className='text-3xl font-herofont '>Fk</h1>
    <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-10 font-herofont text-xl">Home</a>
      <a class="mr-10 font-herofont text-xl">Work</a>
      <a class="mr-10 font-herofont text-xl">My Skills</a>
      <a class="mr-10 font-herofont text-xl">About Me</a>
    </nav>
  </div>
</header> 
    </>
  )
}

export default HamMenu
