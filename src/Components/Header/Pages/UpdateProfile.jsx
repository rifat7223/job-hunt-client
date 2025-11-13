import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateProfile = () => {
     const job=useLoaderData()
      const handleSubmit=(e)=>{
       e.preventDefault()
       const newJob={
        title:e.target.title.value,
       postedBy:e.target.postedBy.value,
        category:e.target.category.value,
        summary:e.target.summary.value,
        coverImage:e.target.coverImage.value,
        // created_by:user.email
     
       }
      
       fetch(`http://localhost:3000/allJobs/${job._id}`,{
        method:"PUT",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newJob)
       })

       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        
        
       })
        .catch(error=>{
            console.log(error)
            e.target.reset()
        })
     
    }

    return (
        <div>
             <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Update profile</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
        defaultValue={job.title}
        // value={job.title}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="postedBy"
        defaultValue={job.postedBy}
        placeholder="Posted By"
        // value={job.postedBy}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="category"
        defaultValue={job.category}
        placeholder="Category (Web Dev, Marketing, etc.)"
        // value={job.category}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <textarea
        name="summary"
        placeholder="Short summary"
        defaultValue={job.summary}
        // value={job.summary}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        defaultValue={job.coverImage}
        name="coverImage"
        placeholder="Cover Image URL"
        // value={job.coverImage}
        // onChange={handleChange}
        className="w-full p-2 border rounded-md"
        required
      />

      

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
      >
        Update
      </button>
    </form>
        </div>
    );
};

export default UpdateProfile;