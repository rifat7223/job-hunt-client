import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AllJobsCard = ({ allJobs }) => {
  const { title, category, postedBy, summary, coverImage, _id } = allJobs;

  return (
     <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-linear-to-br from-[#f5f0ff] to-[#f8f6ff] dark:from-[#1e1b2e] dark:to-[#2a2443] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 flex flex-col justify-between border border-purple-100 dark:border-purple-900/30"
    >
      {/* Job Cover Image */}
      <div className="w-full h-44 rounded-xl overflow-hidden mb-4 shadow-sm">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Job Details */}
      <div className="flex-1 flex flex-col justify-between text-left">
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            {title}
          </h2>

          <p className="text-sm font-medium text-[#6A38C2] mb-2 uppercase tracking-wide">
            {category}
          </p>

          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            👤 <span className="font-semibold">{postedBy}</span>
          </p>

          <p className="text-gray-700 dark:text-gray-200 text-sm line-clamp-3">
            {summary}
          </p>
        </div>

        {/* View Details Button */}
        <div className="mt-5">
          <Link
            to={`/jobdetails/${_id}`}
            className="inline-block w-full text-center py-2.5 px-4 bg-linear-to-r from-[#6A38C2] to-[#8a56e6] hover:from-[#5b2cb0] hover:to-[#7a46d2] text-white rounded-full font-medium shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.02]"
          >
            View Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default AllJobsCard;
