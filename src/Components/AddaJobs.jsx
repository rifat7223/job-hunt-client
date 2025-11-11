import React from 'react';

const AddaJobs = () => {
    return (
        <div>
             <form
    //   onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Add Job Post</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        // value={job.title}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="postedBy"
        placeholder="Posted By"
        // value={job.postedBy}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category (Web Dev, Marketing, etc.)"
        // value={job.category}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <textarea
        name="summary"
        placeholder="Short summary"
        // value={job.summary}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="coverImage"
        placeholder="Cover Image URL"
        // value={job.coverImage}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="email"
        name="userEmail"
        placeholder="Your Email"
        // value={job.userEmail}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Add Job
      </button>
    </form>
        </div>
    );
};

export default AddaJobs;