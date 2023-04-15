import React from 'react'
import TravelImg from '../assets/travel6.jpg'
import { FiSearch } from 'react-icons/fi'
import DestinationsList from '../components/DestinationsList'
import { SmallCard } from '../data/SmallCard'

const Home = () => {

  return (
    <div className='h-screen grid grid-cols-1 sm:grid-cols-2 object-contain'>
      <div style={{backgroundImage: `url(${TravelImg})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", width: "100%"}}
            className="col-span-2 h-[700px]">

        <div className='flex flex-col justify-center items-center lg:w-[40%] mt-40 px-4 text-white bg-neutral-700 bg-opacity-60 rounded-xl'>
          <h1 className=' text-5xl font-semibold lg:text-6xl shadow-xl text-center pt-10'>Discover the Best Lovely Places</h1>
          <p className='text-sm sm:my-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, blanditiis.</p>

          <div className='flex justify-between bg-white py-2 rounded-full mb-2 px-4 sm:w-full border md:w-[70%] lg:w-[60%]'>
          <input type="text" placeholder='Where do you wanna travel...' className='border-none outline-none placeholder:text-sm' />
            <div className='bg-orange-500 rounded-full p-2 shadow-lg hover:scale-105 cursor-pointer'>
              <FiSearch className='h-5 w-5 text-white'/>
            </div>
          </div>
          
      </div>

      </div>
      <div className='col-span-2 bg-gray-100 px-2'>
        <div className='h-screen'>
          <div className='flex flex-col justify-between mt-10'>
            <h2 className='text-xl font-semibold py-4'>Explore Nearby</h2>
            <div className='w-[400px] sm:w-[600px] md:w-[800px] grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 gap-4 mb-2'>
                {SmallCard.map((data, key) => (
                  <div key={key} style={{backgroundImage: `url(${data.image})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover", width: "80px", height: "80px"}} className="shrink-0 hover:scale-105 hover:cursor-pointer rounded-xl"></div>
                ))}        
            </div>
            <button className='hidden lg:flex justify-center items-center h-10 w-40 p-2 mt-4 bg-orange-500 rounded-xl text-white hover:scale-105 shadow-md'>
              <a href='/destinations'>More Destinations</a>
            </button>
          </div>

          <div>
            <h1 className='text-5xl py-8'>Popular Destinations</h1>
            <DestinationsList />
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Home