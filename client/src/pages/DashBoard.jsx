import React from 'react'
import TopBar from '../component/TopBar'
import Intro from '../component/Intro'
import Upcoming from '../component/Upcoming'
import axios from 'axios'
import { useEffect, useState } from 'react'
import QuickOverview from '../component/QuickOverview'

const DashBoard = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
   useEffect(() => {
  const fetchTrips = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:5000/api/trips/upcoming"
      );

      setTrips(data.trips);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  fetchTrips();
}, []);
  return (
    <div>
      <TopBar></TopBar>
      <Intro></Intro>
  
        
    <Upcoming trips={trips} />



     
      
      
    </div>
  )
}

export default DashBoard
