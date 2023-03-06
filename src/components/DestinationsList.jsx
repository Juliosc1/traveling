import React from 'react'
import { DestinationCard } from '../data/DestinationCard'

const DestinationsList = () => {
  return (
    

      <div className='flex space-x-3 overflow-auto overflow-y-hidden p-2'>
        {DestinationCard.map((card) => (
          <div key={card.name} style={{backgroundImage: `url(${card.image})`, backgroundRepeat: "no-repeat" , backgroundSize:"cover", width: "250px", height: "350px"}} className="shrink-0 rounded-xl cursor-pointer hover:scale-105 shadow-xl">
            <a href={`/travel/${card.name}`}>
              <div className='flex flex-col justify-start items-center mt-14 py-1 bg-neutral-700 bg-opacity-60 text-white'>
                <p className='text-3xl font-semibold'>{card.name}</p>
                <p className='text-xs'>Explore Now</p>
              </div>
            </a>
          </div>
        ))}
      </div>

  )
}

export default DestinationsList