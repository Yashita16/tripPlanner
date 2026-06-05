import React from 'react'
import { assets } from '../assets/assets'
import { useAuthContext } from '../context/AuthContext'

const Loginpage = () => {
  const {user , setuser}=useAuthContext();
  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-primary-bg'>
      <div className='w-[80vw] h-[80vh] bg-white rounded-lg shadow-lg flex items-center justify-center'>
        <div className='w-[50%] h-full flex items-center justify-center'>
           <img src={assets.loginpage} alt="Login" />

        </div>
        <div className='w-[50%] h-full flex flex-col items-center justify-center gap-6'>
          <h1 className='text-3xl font-bold '>Welcome Back!</h1>
          <p className='text-gray-600'>Login to Continue our journey</p>
          <form>
            <input type="text" placeholder="Username" className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4' />
            <input type="email" placeholder="Email" className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4' />
            <input type="password" placeholder="Password" className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4' />

            <div className='w-[80%] flex justify-between mt-4'>
              <div className='flex items-center'>
              <input type="checkbox" id="remember" className='mr-2' />
              <p className='text-gray-600'>Remember me</p>
              </div>
              <p className='text-blue-500 hover:underline cursor-pointer'>Forgot Password?</p>

            </div>


            <button type="submit" className='w-[80%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 cursor-pointer'>login</button>

            <p className='text-gray-600 mt-4'>Don't have an account? <span className='text-blue-500 hover:underline cursor-pointer'>Sign up</span></p>

          </form>

        </div>

      </div>

    </div>
  )
}

export default Loginpage
