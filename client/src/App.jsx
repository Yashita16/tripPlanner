import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'
import DashBoard from './pages/DashBoard'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Loginpage></Loginpage>}></Route>
        <Route path="/" element={<DashBoard></DashBoard>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
