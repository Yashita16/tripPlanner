import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useAuthContext } from '../context/AuthContext';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


const Loginpage = () => {
  const { user , setUser } = useAuthContext();
  const [isLogin, setIsLogin] = useState(true);
  const [name , setName]=useState("");
  const [email  , setEmail]=useState("");
  const [password , setPassword]=useState("");
  const navigate = useNavigate();

  const onSubmitHandler=async(e)=>{
    e.preventDefault();
     try {
    const url = isLogin
      ? 'http://localhost:5000/api/auth/login'
      : 'http://localhost:5000/api/auth/register';

    const payload = isLogin
      ? { email, password }
      : { name, email, password };

    const res = await axios.post(url, payload);

    console.log(res.data);

    localStorage.setItem('token', res.data.token);

    setUser(res.data.user);

    navigate('/');

  } catch (error) {
    console.log(error.response?.data);
  }


  }

  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-primary-bg'>
      <div className='w-[80vw] h-[80vh] bg-white rounded-lg shadow-lg flex items-center justify-center'>
        
        <div className='w-[50%] h-full flex items-center justify-center'>
          <img src={assets.loginpage} alt="Login" />
        </div>

        <div className='w-[50%] h-full flex flex-col items-center justify-center gap-6'>
          
          {user ? (
            <p className='text-lg font-semibold'>
              Welcome, {user.name}!
            </p>
          ) : (
            <h1 className='text-3xl font-bold'>
              {isLogin ? 'Welcome Back!' : 'Create Account'}
            </h1>
          )}

          {user ? (
            <p className='text-gray-600'>
              Login to Continue our journey
            </p>
          ) : (
            <p className='text-gray-600'>
              {isLogin
                ? 'Login to continue your journey'
                : 'Please Sign up to continue'}
            </p>
          )}

          <form className='w-full flex flex-col items-center' onSubmit={onSubmitHandler} >
            
            {!isLogin && (
              <input
                type="text"
                placeholder="Username"
                className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
                value={name}
                onChange={(e)=>setName(e.target.value)}


              />
            )}

            <input
              type="email"
              placeholder="Email"
              className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              className='w-[80%] border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4'
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />

            <div className='w-[80%] flex justify-between mt-4'>
              <div className='flex items-center'>
                <input
                  type="checkbox"
                  id="remember"
                  className='mr-2'
                />
                <p className='text-gray-600'>Remember me</p>
              </div>

              <p className='text-blue-500 hover:underline cursor-pointer'>
                Forgot Password?
              </p>
            </div>

            <button
              type="submit"
              className='w-[80%] bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mt-4 cursor-pointer'
            >
              {isLogin ? 'Login' : 'Sign Up'}
            </button>

            {isLogin ? (
              <p className='text-gray-600 mt-4'>
                Don't have an account?{' '}
                <span
                  onClick={() => setIsLogin(false)}
                  className='text-blue-500 hover:underline cursor-pointer'
                >
                  Sign Up
                </span>
              </p>
            ) : (
              <p className='text-gray-600 mt-4'>
                Already have an account?{' '}
                <span
                  onClick={() => setIsLogin(true)}
                  className='text-blue-500 hover:underline cursor-pointer'
                >
                  Login
                </span>
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;