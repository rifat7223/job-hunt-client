import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const AddaJobs = () => {
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newJob = {
      title: e.target.title.value,
      postedBy: e.target.postedBy.value,
      category: e.target.category.value,
      summary: e.target.summary.value,
      coverImage: e.target.coverImage.value,
      email: e.target.userEmail.value,
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/allJobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Job added successfully!",
            icon: "success",
            confirmButtonColor: "#6A38C2",
          });
          e.target.reset();
        } else {
          Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonColor: "#6A38C2",
          });
        }
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Error!",
          text: "Failed to add job.",
          icon: "error",
          confirmButtonColor: "#6A38C2",
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 via-white to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl space-y-5 border border-purple-100"
      >
        <h2 className="text-3xl font-bold text-center text-[#6A38C2] mb-6">
          Add Job Post
        </h2>

        {/* Job Title */}
        <input
          type="text"
          name="title"
          placeholder="Job Title"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
          required
        />

        {/* Posted By */}
        <input
          type="text"
          name="postedBy"
          placeholder="Posted By"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
          required
        />

        {/* Category Dropdown */}
        <select
          name="category"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2] text-gray-700"
          required
        >
          <option value="">Select Job Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Graphic Design">Graphic Design</option>
          <option value="Digital Marketing">Digital Marketing</option>
          <option value="Data Science">Data Science</option>
          <option value="Content Writing">Content Writing</option>
          <option value="Mobile App Development">Mobile App Development</option>
        </select>

        {/* Summary */}
        <textarea
          name="summary"
          placeholder="Short summary"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
          required
        />

        {/* Cover Image */}
        <input
          type="text"
          name="coverImage"
          placeholder="Cover Image URL"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
          required
        />

        {/* User Email */}
        <input
          type="email"
          name="userEmail"
          placeholder="Your Email"
          defaultValue={user?.email || ""}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#6A38C2]"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#6A38C2] to-[#8a56e6] text-white py-3 rounded-full font-semibold hover:from-[#5b2cb0] hover:to-[#7a46d2] transition-all duration-300"
        >
          Add Job
        </button>
      </form>
    </div>
  );
};

export default AddaJobs;
