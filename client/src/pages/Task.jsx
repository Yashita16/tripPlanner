import React from 'react'
import TopBar from '../component/TopBar'
import { useTripContext } from '../context/TripsContext'
import { useTaskContext } from '../context/TaskContext'
import TripCard from '../component/TripCard'
import TaskCard from '../component/TaskCard'

const Task = () => {
  const filter=[
    "ALL",
    "Due Today",
    "Due This Week",
    "Due Later"
  ]


  const {tasks , setTasks} = useTaskContext();
  return (
      <div className="min-h-screen bg-gray-100">
      <TopBar />

      <div className="max-w-7xl mx-auto px-5 py-8 flex flex-row justify-between">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Pending Tasks
          </h1>

          <p className="text-gray-500 mt-2">
            Track and complete important task for your trip.
          </p>
        </div>

        <button className='border border-blue text-white bg-blue-500 rounded-2xl cursor-pointer w-[8vw] h-[7vh]'>
          Add Task
        </button>

      </div>


      {/*filter bar*/}

      <div className="flex flex-row gap-10 mx-30 px-5">
  {filter.map((fill) => (
    <div key={fill} className='text-gray-500 cursor-pointer hover:text-blue-500'>
      {fill}
    </div>
  ))}
</div>


{/*Task Card*/}

<div className="mt-10 bg-white rounded-2xl  shadow-sm h-64 flex flex-col items-center justify-center">
  <h2 className="text-2xl font-semibold text-gray-800">
    No Tasks Found
  </h2>

  <p className="mt-2 text-gray-500">
    You don't have any pending tasks.
  </p>

 
</div>










  </div>
  )
}

export default Task
