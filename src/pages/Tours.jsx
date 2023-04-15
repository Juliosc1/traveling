import React from 'react'
import LasPalmasImg from '../assets/laspalmas.jpg'
import VenedigImg from '../assets/venedig.jpg'
import CyprusImg from '../assets/cyprus.jpg'
import NewYorkImg from '../assets/newyork.jpg'
import NorwayImg from '../assets/norway.jpg'
import { GiAirplaneDeparture } from 'react-icons/gi'

const Tours = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full min-h-[700px] bg-gray-100'>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-full w-full'>

        <div className='flex flex-col justify-center items-center border-2'>
          <div className='flex justify-center items-center gap-2'>
            <h2 className='text-2xl italic'><span className='font-semibold'>Welcome</span> to out world</h2>
            <GiAirplaneDeparture className='h-6 w-6 text-orange-500' />
          </div>
          <p className='text-sm sm:text-base px-10 pt-10 pb-0'>
            <span className='text-lg font-semibold'>Traveling</span> is one of life's greatest pleasures. There's nothing quite like the thrill of exploring new places, meeting new people, and experiencing new cultures. Of course, there are also plenty of challenges that come with traveling, like lost luggage, delayed flights, and questionable accommodations. But hey, if everything went smoothly, it wouldn't be an adventure, would it? And let's not forget about the joys of trying new foods, taking in breathtaking scenery, and making unforgettable memories. So if you're ever feeling stuck in a rut, just remember that the world is waiting for you to explore it.
          </p>
        </div>
        
        <div className='grid grid-cols-3 md:grid-cols-5 border-2 gap-2 p-10 lg:p-20'>
          <div className='hidden sm:flex row-span-3 col-span-2 sm:row-span-2 sm:col-span-3 md:row-span-3 md:col-span-2 border rounded-xl' style={{backgroundImage: `url(${LasPalmasImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='hidden sm:flex sm:row-span-2 sm:col-span-3 border rounded-xl' style={{backgroundImage: `url(${VenedigImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='hidden sm:flex col-span-3 sm:row-span-2 sm:col-span-3 md:row-span-1 border rounded-xl' style={{backgroundImage: `url(${CyprusImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='row-span-2 col-span-3 md:flex md:col-span-5 lg:col-span-3 border rounded-xl' style={{backgroundImage: `url(${NewYorkImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='lg:row-span-2 col-span-2 hidden border rounded-xl lg:flex ' style={{backgroundImage: `url(${NorwayImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
        </div>
      
      </div>
    </div>
  )
}

export default Tours