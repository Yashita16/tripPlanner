import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './pages/Loginpage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Loginpage></Loginpage>}></Route>
      </Routes>
      
    </div>
  )
}

export default App
