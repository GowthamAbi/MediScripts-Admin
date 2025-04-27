import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import SideBar from './SideBar';

function Navbar() {
  return (
    <div className="flex flex-col min-h-screen">
    <nav className="p-2 border border-black flex justify-between items-center bg-white md:w-full sm:w-full">
      <h1><a href="/inventory/dashboard">MediScripts</a></h1>
      <div>
        <img
          src="/img/Default.png"
          alt="Default profile"
          className="rounded-full w-12 h-12 object-cover"
        />
      </div>
    </nav>

      <div className="flex ">
        {/* Sidebar always on left */}
        <SideBar />

        {/* Main content area */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Navbar;
