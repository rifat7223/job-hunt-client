import React from 'react';
import { Link } from "react-router"; 
const NotFound = () => {
    return (
        <div>
           <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-blue-600">404</h1>
      <p className="text-2xl font-semibold mt-4">Oops! Page Not Found</p>
      <p className="text-gray-500 mt-2">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
      >
        Go to Home
      </Link>
    </div> 
        </div>
    );
};

export default NotFound;