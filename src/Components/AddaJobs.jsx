import React, { useContext,  } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const AddaJobs = () => {
    const {user}=useContext(AuthContext)
     
    const handleSubmit=(e)=>{
      console.log('click')
       e.preventDefault()
       const newJob={
        title:e.target.title.value,
       postedBy:e.target.postedBy.value,
        category:e.target.category.value,
        summary:e.target.summary.value,
        coverImage:e.target.coverImage.value,
        
        email:e.target.userEmail.value,
         createdAt: new Date()
       }
      console.log(newJob)
       fetch('http://localhost:3000/allJobs',{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(newJob)
       })

       .then(res=>res.json())
       .then(data=>{
        console.log(data);
        e.target.reset()
       })
       
        .catch(error=>{
            console.log(error)
            
        })
    
    }

    return (
        <div>
             <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">Add Job Post</h2>

      <input
        type="text"
        name="title"
        placeholder="Job Title"
       
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="postedBy"
        placeholder="Posted By"
       
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="category"
        placeholder="Category (Web Dev, Marketing, etc.)"
       
        className="w-full p-2 border rounded-md"
        required
      />

      <textarea
        name="summary"
        placeholder="Short summary"
        
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="text"
        name="coverImage"
        placeholder="Cover Image URL"
        
        className="w-full p-2 border rounded-md"
        required
      />

      <input
        type="email"
        name="userEmail"
        placeholder="Your Email"
       defaultValue={user?.email || ""}
       
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