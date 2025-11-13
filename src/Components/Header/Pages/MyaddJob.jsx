import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';
import { Link,  } from 'react-router';

const MyaddJob = () => {
   
    const {user}=useContext(AuthContext)
    const[myjob,setJob]=useState([])
    useEffect(()=>{
        if(user?.email){
            fetch(`http://localhost:3000/myallJobs?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                setJob(data)
            })
        }
    },[user?.email])

  const  handleDlete=(_id)=>{
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`http://localhost:3000/myallJobs/${_id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
    })

    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remaningJob=myjob.filter(myjob=>myjob._id!==_id)
    setJob(remaningJob)
  }
});
       
    }
    return (
         <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        My Jobs ({myjob.length})
      </h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border rounded-lg">
          <thead className="bg-purple-100">
            <tr>
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Job</th>
              <th className="px-4 py-2 text-left">Update Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {myjob.map((job, index) => (
              <tr
                key={job._id}
                className="border-b hover:bg-purple-50 transition"
              >
                <td className="px-4 py-3">{index + 1}</td>

                {/* Avatar + Name */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.coverImage} alt={job.postedBy} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.postedBy}</div>
                      <div className="text-sm opacity-50">{job.email}</div>
                    </div>
                  </div>
                </td>

                {/* Category */}
                <td className="px-4 py-3">
                  <div>{job.category}</div>
                  <span className="badge badge-ghost badge-sm mt-1">
                    {job.summary.length > 25
                      ? job.summary.slice(0, 25) + "..."
                      : job.summary}
                  </span>
                </td>

                {/* Update Link */}
                <td className="px-4 py-3">
                  <Link
                    to={`/updateprofile/${job._id}`}
                    className="badge badge-warning cursor-pointer"
                  >
                    Update Job
                  </Link>
                </td>

                {/* Delete Button */}
                <td className="px-4 py-3">
                  <button
                    onClick={() => handleDlete(job._id)}
                    className="badge badge-error cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default MyaddJob;