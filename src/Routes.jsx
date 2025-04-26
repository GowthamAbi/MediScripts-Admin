import React from 'react'; 
import { createBrowserRouter } from 'react-router-dom'; 
import App from './App.jsx';
import InventoryHomePage from './InventoryHomePage.jsx';
import InventoryRegister from './Authentication/InventoryRegister.jsx';
import InventoryLogin from './Authentication/InventoryLogin.jsx';
import Navbar from './Components/Header/Navbar.jsx';
import InventoryDashboard from './Components/Header/InventoryDashboard.jsx';
import Footer from './Components/Header/Footer.jsx';



const routes = [
  {
    path: '/inventory',
    element: <InventoryHomePage />,
   
  },
  {
    path:'/inventory/register',
    element:<InventoryRegister/>
  },
  {
    path:'/inventory/login',
    element:<InventoryLogin/>
  },
  {
    path:'/inventory/dashboard',
    element:<Navbar/>,
    children:[
     {
      path:"",
      element:<InventoryDashboard/>
     },
     {
      path:"/inventory/dashboard",
      element:<Footer/>
     },

    ]
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