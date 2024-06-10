import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import { FaLinkedin } from "react-icons/fa";
import { FaFilePen } from "react-icons/fa6";

const NavLinks = ({workRef}) => {

  const scrollToSection = (ref) => {
    console.log(ref)
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav class="md:ml-auto flex md:flex-row xxsm:flex-col md:static md:pt-0 xxsm:pt-40 md:bg-none xxsm:bg-Lavender xxsm:absolute items-center justify-center xxsm:w-[100%] xxsm:right-0 cursor-pointer">
        <button onClick={()=>scrollToSection()} class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl"><AiFillGithub/></button>
        <button onClick={()=>scrollToSection(workRef)} class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl"><FaLinkedin/></button>
        <button onClick={()=>scrollToSection()} class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl"><FaDev/></button>
        <button onClick={()=>scrollToSection()} class="xxsm:mt-3 md:mt-0 md:mr-10 xxsm:mr-0 font-herofont text-xl"><FaFilePen/></button>
      </nav>
    </>
  )
}

export default NavLinks
