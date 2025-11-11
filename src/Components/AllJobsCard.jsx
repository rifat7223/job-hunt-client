import React from 'react';
import { Link } from 'react-router';

const AllJobsCard = ({allJobs}) => {
     const { title, category, postedBy, summary, coverImage,_id }=allJobs
     console.log(allJobs)
    return (
        <div>
            <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg border p-4 bg-white hover:shadow-2xl transition">
      
      {/* Image */}
      <img
        className="w-full h-48 object-cover rounded-xl"
        src={coverImage}
        alt={title}
      />

      {/* Content */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-blue-600 font-medium">{category}</p>

        <p className="text-sm text-gray-500 mt-1">
          👤 Posted By: <span className="font-medium">{postedBy}</span>
        </p>

        <p className="text-gray-700 text-sm mt-2 line-clamp-2">{summary}</p>
      </div>

      {/* Optional Button */}
      <Link to={`/jobdetails/${_id}`} >
        View Details
      </Link>

    </div>
        </div>
    );
};

export default AllJobsCard;