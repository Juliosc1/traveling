import React from 'react'
import TravelImg from '../assets/travel6.jpg'
import { FiSearch } from 'react-icons/fi'

const Home = () => {

  //w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]
  return (
    <div name="home" style={{backgroundImage: `url(${TravelImg})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", width: "100%"}} className='w-full h-screen grid grid-cols-1 sm:grid-cols-2 sm:p-4 object-contain'>

      <div className='flex flex-col justify-center items-center lg:w-[80%] mt-[90px] px-4 text-white bg-neutral-700 bg-opacity-60 rounded-xl'>

          <h1 className=' text-5xl font-semibold lg:text-6xl mb-10 shadow-xl text-center'>Discover the Best Lovely Places</h1>

          <p className='text-sm py-10 sm:my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, blanditiis.</p>

        <div className='flex justify-between bg-white py-2 rounded-full mb-2 px-4 sm:w-full border md:w-[70%] lg:w-[60%]'>
          <input type="text" placeholder='Where do you wanna travel...' className='border-none outline-none placeholder:text-sm' />
          <div className='bg-orange-500 rounded-full p-2 shadow-lg hover:scale-105 cursor-pointer'>
            <FiSearch className='h-5 w-5 text-white'/>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home