import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthProvider";
import { toast } from "react-toastify";

const JobDetails = () => {
  const job = useLoaderData();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const canAccept = user?.email !== job.email;

  const handleAccept = async () => {
    try {
      await axios.post("http://localhost:3000/acceptedTasks", {
        ...job,
        userEmail: user.email,
        acceptedAt: new Date().toISOString(),
      });

      toast("Job accepted!");
      navigate("/accepted-tasks"); // go to Accepted Tasks page
    } catch (error) {
      console.error(error);
      toast(error.response?.data?.error || "Failed to accept job");
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl">
      <h1 className="text-3xl font-bold">{job.title}</h1>
      <p>Posted By: {job.postedBy}</p>
      <p>Category: {job.category}</p>
      <p>{job.summary}</p>

      <div className="mt-4 flex gap-4">
        {canAccept ? (
          <button
            onClick={handleAccept}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Accept ✅
          </button>
        ) : (
          <p className="text-red-500 font-semibold">
            You cannot accept your own job ❌
          </p>
        )}

        <Link to={`/updateprofile/${job._id}`}>
          <button className="bg-gray-200 hover:bg-gray-300 text-black py-3 px-6 rounded-lg text-lg font-semibold transition">
            Update profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
