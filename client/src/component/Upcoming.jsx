import React from 'react'

const Upcoming = ({ trips}) => {
  
  return (
    <div className='w-full h-[35vh] mt-6'>
      <div className='w-[50%] h-[35vh] bg-white rounded-lg shadow-md p-6 mx-4 md:mx-8' >
        <h1 className='text-xl md:text-2xl font-bold text-gray-800'>
          Upcoming <span className="text-blue-500">Trips</span>
        </h1>

        <div className='w-full h-[25vh] mt-4 flex items-center justify-center text-gray-600'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  {trips.map((trip) => (
    <div
      key={trip._id}
      className="bg-white p-4 rounded-lg shadow"
    >
      <h3 className="text-lg font-semibold">
        {trip.title}
      </h3>

      <p>{trip.destination}</p>

      <p>
        {new Date(trip.startDate).toLocaleDateString()}
      </p>

      <p>₹{trip.budget}</p>
    </div>
  ))}

  {trips.length === 0 && (
    <p className="text-center text-gray-500">
      No upcoming trips found.
    </p>
  )}
</div>

        </div>

      </div>
      
    </div>
  )
}

export default Upcoming
