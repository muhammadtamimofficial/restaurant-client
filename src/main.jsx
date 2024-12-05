import { children, StrictMode } from 'react'
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
import AuthProvider from './Providers/AuthProvider.jsx';
import SignUp from './pages/SignUp/SignUp.jsx';
import Login from './pages/Login/Login.jsx';
import PrivateRoute from './PriveteRoute/PrivateRoute.jsx';


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
        path: '/order/:category',
        element: <OrderFood></OrderFood>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
