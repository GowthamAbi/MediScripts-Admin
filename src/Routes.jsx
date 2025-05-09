import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import InventoryHomePage from './InventoryHomePage.jsx';
import InventoryRegister from './Authentication/InventoryRegister.jsx';
import InventoryLogin from './Authentication/InventoryLogin.jsx';
import Navbar from './Components/Header/Navbar.jsx';
import SideBar from './Components/Header/SideBar.jsx';
import Footer from './Components/Header/Footer.jsx';
import Inventory from './Components/Stock/Inventory.jsx';
import Outward from './Components/Stock/OutWord.jsx';
import DashBoard from './Components/Pages/DashBoard.jsx';



const routes = [
  { path: '/', element: <InventoryHomePage /> },
  { path: '/inventory/register', element: <InventoryRegister /> },
  { path: '/inventory/login', element: <InventoryLogin /> },
  {
    path: '/inventory',
    element: <Navbar />,  // <- This layout wraps all below
    children: [
      { path: 'dashboard', element: <DashBoard /> },
      { path: 'add', element: <Inventory /> },
      { path: 'outward', element: <Outward /> },
    ],
  }
];


const router = createBrowserRouter(routes, {
  future: {
    v7_relativeSplatPath: true,
    v7_fetcherPersist: true,
    v7_normalizeFormMethod: true,
    v7_partialHydration: true,
    v7_skipActionErrorRevalidation: true
  }
});

export default router;