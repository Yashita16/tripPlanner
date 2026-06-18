import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import DashBoard from './pages/DashBoard'
import CreateTrip from './pages/CreateTrip'
import Jointrip from './pages/Jointrip'
import Trips from './pages/Trips'
import Task from './pages/Task'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
        <Route path='/create-trip' element={<CreateTrip></CreateTrip>}></Route>
        <Route path='/join-trip' element={<Jointrip></Jointrip>}  ></Route>
        <Route path='/trips' element={<Trips></Trips>}></Route>
        <Route path='/tasks' element={<Task></Task>}></Route>
      </Routes>
  </div>
  )
}

export default App
