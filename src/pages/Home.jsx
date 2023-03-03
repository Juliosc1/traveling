import React from 'react'
import TravelImg from '../assets/travel3.jpg'
import { FiSearch } from 'react-icons/fi'

const Home = () => {

  //w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px]
  return (
    <div className='w-full h-screen grid grid-cols-1 sm:grid-cols-2 p-4'>

      <div className='flex flex-col justify-center items-center text-gray-700 px-4 sm:w-full md:px-10 lg:px-16 xl:px-36'>
        
          <h1 className='text-4xl font-semibold md:text-5xl lg:text-6xl'>Discover the Best Lovely Places</h1>

          <p className='text-sm py-4 sm:my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, blanditiis.</p>

        <div className='flex justify-between bg-white py-2 rounded-full mb-2 px-4 sm:w-full border'>
          <input type="text" placeholder='Where do you wanna travel...' className='border-none outline-none w-full placeholder:text-sm' />
          <div className='bg-orange-500 rounded-full p-2 shadow-lg hover:scale-105 cursor-pointer'>
            <FiSearch className='h-5 w-5 text-white'/>
          </div>
        </div>
      </div>
      
      <div className='flex justify-center sm:pt-20 w-full sm:h-[550px] md:h-[600px] lg:h-screen'>
        <img src={TravelImg} alt="travelImg" className='object-contain m-4 rounded-2xl opacity-80 shadow-2xl' />
      </div>
    </div>
  )
}

export default Home