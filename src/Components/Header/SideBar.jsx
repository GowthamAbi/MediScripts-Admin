import React, { useState } from 'react';

export default function InventoryDashboard() {
  const [clickSummary, setClickSummary] = useState(false);
  const [clickPO, setClickPO] = useState(false);
  const [clickRegister, setClickRegister] = useState(false);
  const [clickInventory, setClickInventory] = useState(false);

  // Handles Summary dropdown
  const handleClickSummary = () => {
    setClickSummary(!clickSummary);
    setClickPO(false);
    setClickRegister(false);
    setClickInventory(false)
  };

  // Handles PO dropdown
  const handleClickPO = () => {
    setClickPO(!clickPO);
    setClickSummary(false);
    setClickRegister(false);
    setClickInventory(false)
  };

  // Handles REGISTER dropdown
  const handleClickRegister = () => {
    setClickRegister(!clickRegister);
    setClickSummary(false);
    setClickPO(false);
    setClickInventory(false)
  };

  const handleClickInventory=()=>{
    setClickInventory(!clickInventory)
    setClickSummary(false);
    setClickPO(false);
    setClickRegister(false);
  }




  return (
    <div className='font-serif font-bold min-h-screen flex flex-col'>
      {/* Main Content */}
      <div className='flex flex-1'>
        {/* Sidebar */}
        <div className='bg-slate-500 w-1/4 md:w-full p-4 text-white md:text-sm sm:text-sm'>
          <ul className='space-y-4'>
            <li className='cursor-pointer hover:underline'>
              <a href="/inventory/Dashboard">HOME</a>
            </li>
            {/* Summary */}
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickInventory}>
                <span className='hover:underline'>Inventory</span>
                <span className='ml-2 text-yellow-300'>{clickSummary ? '▼' : '▶'}</span>
              </div>
              {clickInventory && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'> <a href="/inventory/add">Inward</a></li>
                  <li className='hover:underline cursor-pointer'><a href="/inventory/outward">Outward</a></li>
                </ul>
              )}
            </li>

            {/* Summary */}
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickSummary}>
                <span className='hover:underline'>Summary</span>
                <span className='ml-2 text-yellow-300'>{clickSummary ? '▼' : '▶'}</span>
              </div>
              {clickSummary && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'> <a href="/inventory/add">Inward</a></li>
                  <li className='hover:underline cursor-pointer'>Outward</li>
                  <li className='hover:underline cursor-pointer'>Stock</li>
                </ul>
              )}
            </li>

            {/* PO */}
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickPO}>
                <span className='hover:underline'>PO</span>
                <span className='ml-2 text-yellow-300'>{clickPO ? '▼' : '▶'}</span>
              </div>
              {clickPO && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'>PO CREATE</li>
                  <li className='hover:underline cursor-pointer'>PO STATUS</li>
                  <li className='hover:underline cursor-pointer'>PO LIST</li>
                </ul>
              )}
            </li>

            {/* REGISTER */}
            <li>
              <div className='flex items-center cursor-pointer' onClick={handleClickRegister}>
                <span className='hover:underline'>REGISTER</span>
                <span className='ml-2 text-yellow-300'>{clickRegister ? '▼' : '▶'}</span>
              </div>
              {clickRegister && (
                <ul className='ml-6 mt-2 space-y-2 text-sm text-white'>
                  <li className='hover:underline cursor-pointer'>MEDICINE</li>
                  <li className='hover:underline cursor-pointer'>INVENTORY</li>
                  <li className='hover:underline cursor-pointer'>AGENT</li>
                </ul>
              )}
            </li>

          </ul>
        </div>

      </div>
    </div>
  );
}
