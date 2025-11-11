import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from './Layout/Root.jsx';
import Home from './Components/Header/Pages/home.jsx';

import Login from './Components/Header/Pages/Login.jsx';
import Register from './Components/Header/Pages/Register.jsx';
import AuthProvider from './Context/AuthProvider.jsx'; 
import AllJobs from './Components/Header/Pages/AllJobs.jsx';
import PrivateRoute from './Context/PrivateRoute.jsx';
import AddaJobs from './Components/AddaJobs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,
        loader:()=>fetch('http://localhost:3000/job'),
         element:<Home></Home> },
      { path: '/alljob',
        loader:()=>fetch('http://localhost:3000/allJobs'),
         element:<PrivateRoute><AllJobs></AllJobs></PrivateRoute> },
         {path:'/addajob',element:<AddaJobs></AddaJobs>},
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>  
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
);
