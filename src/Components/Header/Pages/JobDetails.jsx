import React from 'react';
import { FaEnvelope, FaLayerGroup, FaUser } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const JobDetails = () => {
    const job=useLoaderData()
    
    return (
        <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-2xl rounded-xl border border-gray-200">
      
      {/* Cover Image */}
      <div className="w-full">
        <img
          src={job.coverImage}
          alt="Job Cover"
          className="w-full h-80 object-cover rounded-lg"
        />
      </div>

      {/* Job Info */}
      <div className="mt-6 space-y-4">

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800">{job.title}</h1>

        {/* Category + Posted By */}
        <div className="flex items-center gap-6 text-gray-600 text-sm">
          <div className="flex items-center gap-2">
            <FaLayerGroup className="text-blue-500" />
            <span>{job.category}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaUser className="text-green-500" />
            <span>{job.postedBy}</span>
          </div>
        </div>

        {/* Summary */}
        <p className="text-gray-700 text-lg leading-relaxed">{job.summary}</p>

        {/* Email */}
        <div className="flex items-center gap-2 text-gray-700">
          <FaEnvelope className="text-red-500" />
          <span>{job.email}</span>
        </div>

        {/* Action Buttons */}
        <div className="pt-5 flex gap-4">
          <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg text-lg font-semibold transition">
            Accept ✅
          </button>

          <Link to={`/updateprofile/${job._id}`}>
          <button className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded-lg text-lg font-semibold transition">
            Update profile
          </button>
          </Link>
        </div>
      </div>
    </div>
    );
};

export default JobDetails;