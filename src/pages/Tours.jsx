import React from 'react'
import LasPalmasImg from '../assets/laspalmas.jpg'
import VenedigImg from '../assets/venedig.jpg'
import CyprusImg from '../assets/cyprus.jpg'
import NewYorkImg from '../assets/newyork.jpg'
import NorwayImg from '../assets/norway.jpg'

const Tours = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      <div className='grid grid-cols-1 sm:grid-cols-2 h-full w-full'>

        <div className='border-2'></div>
        
        <div className='grid grid-cols-5 grid-rows-5 sm:grid-cols-3 md:grid-cols-5 border-2 gap-2 p-10 lg:p-20'>
          <div className='row-span-3 col-span-2 sm:row-span-2 sm:col-span-3 md:row-span-3 md:col-span-2 border rounded-xl' style={{backgroundImage: `url(${LasPalmasImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='row-span-2 col-span-3 border rounded-xl' style={{backgroundImage: `url(${VenedigImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='col-span-3 sm:row-span-2 sm:col-span-3 md:row-span-1 border rounded-xl' style={{backgroundImage: `url(${CyprusImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='row-span-2 col-span-3 sm:hidden md:flex md:col-span-5 lg:col-span-3 border rounded-xl' style={{backgroundImage: `url(${NewYorkImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
          <div className='row-span-2 col-span-2 sm:hidden border rounded-xl lg:flex ' style={{backgroundImage: `url(${NorwayImg})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover"}}></div>
        </div>
      
      </div>
    </div>
  )
}

export default Tours