import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllJobsCard from "../../AllJobsCard";

const AllJobs = () => {
  // Fetch jobs using React Query
  const { data: jobs = [], isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/allJobs");
      return res.data;
    },
  });

  // Loading Spinner
  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  // Error State
  if (isError) {
    return (
      <p className="text-center text-red-500 mt-10">
        Failed to load jobs. Please try again later.
      </p>
    );
  }

  // Render jobs
  return (
    <div className="grid gap-6 p-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
  {jobs.map((job) => (
    <AllJobsCard key={job._id} allJobs={job} />
  ))}
</div>

  );
};

export default AllJobs;
