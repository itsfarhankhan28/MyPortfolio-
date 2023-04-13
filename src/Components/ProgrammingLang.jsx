import React from 'react'

const ProgrammingLang = () => {
  return (
    <>
        <div className=''>
            <h1 className='text-center font-herofont text-xl font-semibold'>Programming Languages</h1>
            <div className='px-2 py-10 grid grid-cols-1 gap-8'>

                {/* Lang1 */}
                <div className='flex gap-3'>
                    <img src="https://skillicons.dev/icons?i=c" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <div className='absolute inset-0 bg-blue-300 w-[135px] rounded-l-full'></div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>80%</h1>
                    </div>
                </div>

                {/* Lang2 */}
                <div className="flex gap-3">
                    <img src="https://skillicons.dev/icons?i=python" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <div className='absolute inset-0 bg-blue-300 w-[150px] rounded-l-full'></div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>90%</h1>
                    </div>
                </div>

                {/* Lang3 */}
                <div className="flex gap-3">
                    <img src="https://skillicons.dev/icons?i=java" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <div className='absolute inset-0 bg-blue-300 w-[110px] rounded-l-full'></div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>60%</h1>
                    </div>
                </div>

                {/* Lang4 */}
                <div className="flex gap-3">
                    <img src="https://skillicons.dev/icons?i=javascript" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <div className='absolute inset-0 bg-blue-300 w-[155px] rounded-l-full'></div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>95%</h1>
                    </div>
                </div>

                {/* Lang5 */}
                <div className="flex gap-3">
                    <img src="https://skillicons.dev/icons?i=typescript" alt="" />
                    <div className='relative bg-gray-300 w-[170px] h-7 my-auto rounded-full'>
                        <div className='absolute inset-0 bg-blue-300 w-[100px] rounded-l-full'></div>
                    </div>
                    <div className='my-auto'>
                        <h1 className='font-herofont font-bold text-xl'>50%</h1>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default ProgrammingLang
