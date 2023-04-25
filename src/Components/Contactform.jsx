import portfoliologo from '../Assets/portfoliologo.png'

const Contactform = () => {
  return (
    <>
      <div className="w-full h-auto bg-custom-brown border-t-2 border-gray-200 ">
        <div className="flex gap-3 mx-[100px] mt-[30px]">
          <div className=" w-[30%]">
            <img src={portfoliologo} alt="" />
          </div>
          <div className='border border-black h-[150px]'></div>
          <div className="ml-16 w-[70%]">
            <h1 className='text-3xl font-semibold font-herofont'>Get in touch</h1>
            <form className='mt-3' action="">
              <div className='grid grid-cols-2 gap-y-5  w-[550px]'>
                <div>
                  <input 
                  className='w-[250px] bg-transparent border-black border-b h-[30px] text-lg' 
                  type="text" name="username" placeholder='Enter Name' autoComplete='off' required/>
                </div>
                <div>
                  <input className='row-span-2' type="text" name='message' placeholder='Enter Message' autoComplete='off' required/>
                </div>
                <div>
                  <input 
                  className='w-[250px] bg-transparent border-black border-b h-[30px] text-lg' 
                  type="email" name="email" placeholder='Enter Email' autoComplete='off' required/>
                </div>
              </div>
              <div className='mt-5'>
                <button className='border border-black rounded-xl py-2 px-7 font-semibold font-herofont'>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactform
