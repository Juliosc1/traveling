import React, { useState } from 'react'
import { FaSuitcaseRolling } from 'react-icons/fa'
import { GiAirplaneDeparture } from 'react-icons/gi'
import { HiOutlineMenu } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click)
  }

  return (
    <div className='absolute top-0 w-full grid grid-cols-3 sm:grid-cols-6 p-6 bg-white bg-opacity-70 z-50'>
      <div className='flex justify-start items-center gap-2 text-gray-800'>
        <FaSuitcaseRolling className='h-6' />
        <a href="/">
          <p className='font-semibold text-xl italic'>Travel</p>
        </a>
      </div>

      <div className='flex justify-start items-center sm:col-span-3 lg:col-span-4'>
        <ul className='hidden sm:flex gap-2 md:gap-6 font-semibold text-sm md:text-base'>
          <li className='hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer'><Link to='home' smooth={true} duration={500} >Home</Link></li>
          <li className='hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer'><Link to='destinations' smooth={true} duration={500} >Destinations</Link></li>
          <li className='hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer'>About us</li>
          <li className='hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer'>Tours</li>
          <li className='hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer'>Blog</li>
        </ul>
      </div>

      <div className='flex justify-end sm:col-span-2 lg:col-span-1'>
        <div className='hidden sm:flex justify-center items-center gap-2 border-2 border-orange-500 rounded-full py-2 px-4 text-orange-500 cursor-pointer'>
          <p className='font-semibold'>Book Now</p>
          <GiAirplaneDeparture className='h-6'/>
        </div>
        <div onClick={handleClick} className='flex sm:hidden justify-end items-center p-2 border-2 border-orange-500 rounded-full text-orange-500'>
          {click ? 
          <AiOutlineClose className='h-6 w-6' />
          : <HiOutlineMenu className='h-6 w-6' />
          }
        </div>
      </div>

      {
        <div className={ click ? 'fixed right-0 top-20 w-full h-full duration-500 ease-in md:hidden z-10 bg-white' : 'fixed -right-full top-20 h-full w-full duration-500 ease-out md:hidden z-10'}>
          <ul className='flex flex-col justify-center items-center py-8 text-xl text-gray-800'>
            <li className='py-2 hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer hover:text-gray-900'>Home</li>
            <li className='py-2 hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer hover:text-gray-900'>About us</li>
            <li className='py-2 hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer hover:text-gray-900'>Destination</li>
            <li className='py-2 hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer hover:text-gray-900'>Tours</li>
            <li className='py-2 hover:underline hover:decoration-orange-500 hover:underline-offset-4 cursor-pointer hover:text-gray-900'>Blog</li>
          </ul>
        </div>
      }
    </div>
  )
}

export default Navbar