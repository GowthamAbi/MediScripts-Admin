import React, { useState } from 'react'
import api from '../../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function InventoryLogin() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response=await api.post('/api/v1/auth/inventory/login', { email, password })
      console.log('Login Success:', response.data);
      navigate('/api/v1/auth/dashboard')

     
    }
    catch(err){
      console.error('Login failed:', err);
      alert('Login failed. Check console for details.');
    }

    
  }

  return (
    <div className='bg-red-300 h-screen pt-20 font-serif'>
      <div className='flex flex-col items-center justify-center mx-auto h-auto bg-slate-500 max-w-5xl p-8 border rounded-lg'>
        <h1 className='text-3xl text-black font-bold'>Welcome To Login</h1>

        {/* Form Starts */}
        <form onSubmit={handleSubmit} className='flex flex-col space-y-4 p-4 w-full max-w-md'>

          <label htmlFor="email" className='font-bold text-white text-xl'>Enter Your Email</label>
          <input
            type="email"
            name="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='border p-2 w-full'
            required
          />

          <label htmlFor="password" className='font-bold text-white text-xl'>Enter Your Password</label>
          <input
            type="password"
            name="password"
            placeholder='Enter Your Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='border p-2 w-full'
            required
          />

          {/* ✅ Submit Button inside form */}
          <button
            type="submit"
            className='bg-blue-500 hover:bg-green-400 w-40 p-2 rounded-lg text-2xl self-center'
          >
            Log In
          </button>
        </form>
        {/* Form Ends */}
        <div className="flex flex-col items-center justify-center mt-4">
            <p className="text-black">You Dont have an account? <a href="/inventory/register" className="text-white hover:text-blue-800">Register</a></p>
            
        </div>
      </div>
    </div>
  );
}
