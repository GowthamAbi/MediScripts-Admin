import { Children } from 'react'
import React  from 'react'
import { Outlet } from 'react-router-dom'

function Navbar() {
  return (
    <div><nav className='p-2 border border-black flex justify-between items-center bg-white'>
    <h1>MediScripts</h1>
    <div>
      <img
        src='/img/Default.png'
        alt='Default profile'
        className='rounded-full w-12 h-12 object-cover'
      />
    </div>    
  </nav>
  <div><Outlet/></div></div>
  )
}

export default Navbar