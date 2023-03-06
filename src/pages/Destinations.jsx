import React from 'react'
import DestinationsList from '../components/DestinationsList'


const Destinations = () => {
  return (
    <div className='flex flex-col justify-center h-screen p-4 bg-gray-100'>

        <div className=''>
          <p className='font-semibold tracking-widest'>WHERE TO GO</p>  
          <h1 className='text-5xl py-8'>Popular Destinations</h1>
        <DestinationsList />
        </div>

    </div>
  )
}

export default Destinations