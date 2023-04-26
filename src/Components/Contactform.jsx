import portfoliologo from '../Assets/portfoliologo.png'
import {AiOutlineCopyright , AiOutlineInstagram , AiOutlineLinkedin , AiOutlineDribbble , AiOutlineGithub} from 'react-icons/ai'

const Contactform = () => {
  return (
    <>
      <div className="w-full h-auto bg-Lavender border-t ">
        <div className="flex flex-col gap-y-10 mx-auto w-[1000px] mt-[30px]">
          <div className='flex'>
            {/* Portfolio Logo */}
            <div className=" w-[20%] border-r border-black flex justify-center items-center">
              <img src={portfoliologo} alt="" />
            </div>

            {/* Contact Form */}
            <div className="ml-16 w-[80%]">
              <h1 className='text-3xl font-semibold font-herofont'>Get in touch</h1>
              <form className='mt-3' action="https://formspree.io/f/mbjeqwvd" method='POST'>
                <div className='grid grid-cols-2 gap-5 w-[550px]'>
                  <div className='grid grid-cols-1 gap-y-5'>
                    <div>
                      <input 
                      className='w-[250px] bg-transparent border-black border rounded-md px-2 py-3 h-[30px] text-lg' 
                      type="text" name="username" placeholder='Enter Name' autoComplete='off' required/>
                    </div>
                    <div>
                      <input 
                      className='w-[250px] bg-transparent border-black border rounded-md px-2 py-3 h-[30px] text-lg' 
                      type="email" name="email" placeholder='Enter Email' autoComplete='off' required/>
                    </div>
                  </div>
                  <div>
                    <textarea 
                    className='bg-transparent border-black border rounded-md text-lg resize-none' rows={3} cols={50} type="text" name='message' placeholder='Enter Message' autoComplete='off' required/>
                  </div>
                </div>
                <div className='mt-5'>
                  <button className='border border-black rounded-xl py-2 px-7 font-semibold font-herofont'>Submit</button>
                </div>
              </form>
            </div>
          </div>

          {/* Footer */}
          <div className='flex justify-between border-t py-3 border-black'>
            <div className='flex items-center gap-1'>
              <div><AiOutlineCopyright/></div>
              <h1 className='font-herofont font-semibold'>Farhan Khan</h1>
            </div>
            <div className='flex items-center gap-1.5'>
              <button><AiOutlineGithub size={30}/></button>
              <button><AiOutlineDribbble size={30}/></button>
              <button><AiOutlineLinkedin size={30}/></button>
              <button><AiOutlineInstagram size={30}/></button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Contactform
