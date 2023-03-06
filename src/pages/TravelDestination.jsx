import React from 'react'
import { useParams } from 'react-router-dom';
import { DestinationCard } from '../data/DestinationCard';

const TravelDestination = () => {
  const { name } = useParams();

   // Filter the DestinationCard array to only show data from the selected city
  const selectedCityData = DestinationCard.filter((data) => data.name === name);
  
  return (
    <div className='h-screen' >
      <div className='h-screen'>
      {selectedCityData.map((data) => (
          <div key={data.id} style={{backgroundImage: `url(${data.largeImg})`, backgroundRepeat: 'no-repeat', backgroundSize:"cover", width: "100%"}} className="h-screen text-white">
            <div className='grid grid-cols-1 sm:grid-cols-2 justify-center items-center h-full'>
              
              <div className='flex flex-col pt-24 sm:bg-neutral-700 sm:bg-opacity-80 h-full p-8'>
                <p className='text-xl font-semibold'>{data.name}</p>
                <p>{data.description}</p>
                <h4 className='text-xl font-semibold pt-10'>Tours</h4>
                <ul className='text-sm italic'>
                  <li>{data.tours[0].tip1}</li>
                  <li>{data.tours[1].tip2}</li>
                  <li>{data.tours[2].tip3}</li>
                </ul>
                <button className='flex justify-center items-center bg-orange-500 p-2 rounded-xl w-20 h-10 mt-10 font-semibold shadow-xl hover:scale-105'><a href="/destinations">Back</a></button>
              </div>
              <div className='flex justify-center items-center'>
                <h1 className='text-5xl font-semibold'>{data.name}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TravelDestination