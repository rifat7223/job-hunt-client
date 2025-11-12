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
import JobDetails from './Components/Header/Pages/JobDetails.jsx';
import UpdateProfile from './Components/Header/Pages/UpdateProfile.jsx';
import MyaddJob from './Components/Header/Pages/MyaddJob.jsx';
import NotFound from './Components/Header/Pages/NotFound.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ThemeProvider from './Context/ThemeProvider.jsx';
import AcceptedTasks from './Components/Header/Pages/AcceptedTasks.jsx';


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
      {
        path:'/jobdetails/:id', element:<JobDetails></JobDetails>,
       loader: ({ params }) => fetch(`http://localhost:3000/allJobs/${params.id}`).then(res => res.json())
        
      },
      {
        path:'/updateprofile/:id',element:<UpdateProfile></UpdateProfile>,
         loader: ({ params }) => fetch(`http://localhost:3000/allJobs/${params.id}`).then(res => res.json())

      },
      {
        path:'/myaddjob', element:<MyaddJob></MyaddJob>
      },
      {
        path:'/acceptedTasks', element:<AcceptedTasks></AcceptedTasks>
      },
      { path: "/*", element: <NotFound></NotFound>},
    ]
  },

]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>    
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
    </ThemeProvider>
  </StrictMode>
);