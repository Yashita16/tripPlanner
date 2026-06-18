import React from 'react'
import TopBar from '../component/TopBar'
import Intro from '../component/Intro'
import Upcoming from '../component/Upcoming'
import axios from 'axios'
import { useEffect, useState } from 'react'
import QuickOverview from '../component/QuickOverview'
import { useTripContext } from '../context/TripsContext'

const DashBoard = () => {
  const {trips, setTrips} = useTripContext()
  
  return (
    <div>
      <TopBar></TopBar>
      <Intro></Intro>
  
        
    <Upcoming trips={trips} />



     
      
      
    </div>
  )
}

export default DashBoard
