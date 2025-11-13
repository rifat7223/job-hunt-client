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

import AcceptedTasks from './Components/Header/Pages/AcceptedTasks.jsx';
 import { ToastContainer,  } from 'react-toastify';
import { ThemeProvider } from './Context/ThemeProvider.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true,
        loader:()=>fetch('https://job-hunter-server-one.vercel.app/job'),
         element:<Home></Home> },
      { path: '/alljob',
        loader:()=>fetch('https://job-hunter-server-one.vercel.app/allJobs'),
         element:<PrivateRoute><AllJobs></AllJobs></PrivateRoute> },
         {path:'/addajob',element:<PrivateRoute><AddaJobs></AddaJobs></PrivateRoute>},
      { path: '/login', Component: Login },
      { path: '/register', Component: Register },
      {
        path:'/jobdetails/:id', element:<JobDetails></JobDetails>,
       loader: ({ params }) => fetch(`https://job-hunter-server-one.vercel.app/allJobs/${params.id}`).then(res => res.json())
        
      },
      {
        path:'/updateprofile/:id',element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
         loader: ({ params }) => fetch(`https://job-hunter-server-one.vercel.app/allJobs/${params.id}`).then(res => res.json())

      },
      {
        path:'/myaddjob', element:<PrivateRoute><MyaddJob></MyaddJob></PrivateRoute>
      },
      {
        path:'/acceptedTasks', element:<PrivateRoute><AcceptedTasks></AcceptedTasks></PrivateRoute>
      },
      { path: "/*", element: <NotFound></NotFound>},
    ]
  },

]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
   
      <QueryClientProvider client={queryClient}>    
      <ThemeProvider>
        <AuthProvider>
        <RouterProvider router={router} />
         <ToastContainer
         position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
      </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
    
  </StrictMode>
);