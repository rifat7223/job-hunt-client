import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import AllJobsCard from "../../AllJobsCard";
import AllJobsBanner from "../../AllJobsBanner";

const AllJobs = () => {
  const [sortOrder, setSortOrder] = useState("newest"); // "newest" or "oldest"

  // Fetch jobs using React Query
  const { data: jobs = [], isLoading, isError } = useQuery({
    queryKey: ["jobs"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:3000/allJobs");
      return res.data;
    },
  });

  // Memoize sorted jobs to avoid unnecessary re-sorts
  const sortedJobs = useMemo(() => {
    return [...jobs].sort((a, b) => {
      if (!a.createdAt) return 1;
      if (!b.createdAt) return -1;
      return sortOrder === "newest"
        ? new Date(b.createdAt) - new Date(a.createdAt)
        : new Date(a.createdAt) - new Date(b.createdAt);
    });
  }, [jobs, sortOrder]);

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

  return (
    <div>
      <div>
        <AllJobsBanner></AllJobsBanner>
      </div>
      <div className="p-4">
      {/* Sort Dropdown */}
      <div className="mb-4 flex items-center gap-2">
        <label className="font-medium">Sort by:</label>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* Jobs Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sortedJobs.map((job) => (
          <AllJobsCard key={job._id} allJobs={job} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default AllJobs;
