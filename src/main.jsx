import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home/Home/Home';
import Main from './Layout/Main';
import '@smastrom/react-rating/style.css'
import Menu from './pages/Menu/Menu/Menu.jsx';
import { HelmetProvider } from 'react-helmet-async';
import OrderFood from './pages/OrderFood/OrderFood.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Menu',
        element: <Menu></Menu>,
      },
      {
        path: '/order',
        element: <OrderFood></OrderFood>,
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
)
