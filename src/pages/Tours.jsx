import React from 'react'

const Tours = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-full w-full'>

        <div className='border-2'></div>
        
        <div className='grid grid-cols-5 grid-rows-5 border-2 gap-2 p-20'>
          <div className='row-span-3 col-span-2 border'>1</div>
          <div className='row-span-2 col-span-3 border'>2</div>
          <div className='col-span-3 border'>3</div>
          <div className='row-span-2 col-span-3 border'>4</div>
          <div className='row-span-2 col-span-2 border'>5</div>
        </div>
      
      </div>
    </div>
  )
}

export default Tours