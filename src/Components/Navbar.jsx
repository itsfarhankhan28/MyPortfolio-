import { useState } from "react";
import {AiFillGithub , AiFillDribbbleCircle} from 'react-icons/ai'
import {FaDev} from 'react-icons/fa'
import {RiComputerFill} from 'react-icons/ri'
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const HamburgerMenu = <GiHamburgerMenu 
                          color='black' 
                          className=' cursor-pointer px-3 h-[70px] w-[70px]' 
                          onClick={()=>setToggleMenu(!toggleMenu)}/>
  
    const CloseIcon = <AiOutlineClose 
                      color='black' 
                      size='40px' 
                      className=' cursor-pointer px-3 h-[70px] w-[70px]' 
                      onClick={()=>setToggleMenu(!toggleMenu)}/>

  return (
    <div className="app">
      <motion.nav
      initial={{opacity:0}}
      animate={{opacity:1,transition:{
          duration:1,
          delay:6
      }}}
      >
        <div className="w-full bg-white/30 backdrop-blur-md mx-auto fixed z-40 shadow-lg">
          <div className="flex mx-auto justify-between w-5/6">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-16 my-4">
            {/* logo */}
              <div>
                <h1 className="text-3xl font-semibold font-herofont">Fk</h1>
              </div>
              {/* primary */}
              <div className="hidden lg:flex gap-5 absolute right-[10%]">
              <a href="/" className="text-xl font-herofont cursor-pointer"><h1>Home</h1></a>
              <a href='/' className=" text-xl font-herofont cursor-pointer "><h1>Work</h1></a>
              <a href='/' className=" text-xl font-herofont  cursor-pointer">Skills</a>
              <a href='/' className="text-xl font-herofont  cursor-pointer">Blogs</a>
              </div>
            </div>
            {/* secondary */}
            <div className="flex gap-6">
              {/* <div className="hidden xs:flex items-center gap-10">
                <div className="hidden lg:flex items-center gap-2">
                  <MoonIcon className="h-6 w-6" />
                  <SunIcon className="h-6 w-6" />
                </div>
                <div>
                  <button className="rounded-full border-solid border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-gray-100">
                    Free Trial
                  </button>
                </div>
              </div> */}
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center z-40">
                <button onClick={() => setToggleMenu(!toggleMenu)}>
                  {toggleMenu ? CloseIcon : HamburgerMenu}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <div
          className={`fixed z-30 w-full items-center bg-white/30 backdrop-blur-xl overflow-hidden flex flex-col lg:hidden gap-12  origin-top duration-700 ${
            !toggleMenu ? "h-0" : "h-[55%]"
          }`}
        >
          <div className="px-8 my-28 ">
            <div className="flex flex-col gap-8 font-bold tracking-wider">
              <a className="gap-3 text-center" href='/'>
                <h1 className="font-semibold font-herofont text-3xl">Home</h1>
              </a>
              <a className="gap-3 text-center" href='/'>
                <h1 className="font-semibold font-herofont text-3xl">Work</h1>
              </a>
              <a className="gap-3 text-center" href='/'>
                <h1 className="font-semibold font-herofont text-3xl">Skills</h1>
              </a>
              <a className="gap-3 text-center" href='/'>
                <h1 className="font-semibold font-herofont text-3xl">Blogs</h1>
              </a>
            </div>
          </div>
        </div>
      </motion.nav>
    </div>
  );
}

export default App;