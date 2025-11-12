import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthProvider';
import Swal from 'sweetalert2';

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
        <div>
            <h1>adde job{
                myjob.length
                }</h1>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Update status</th>
        <th>status</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
     {
        myjob.map((myjob,index)=> <tr key={myjob._id}>
        <th>
          {index+1}
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={myjob.coverImage
}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{myjob.postedBy}</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          {myjob.category}

          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td><div className="badge badge-warning">Update job status</div></td>
        <th>
          <button onClick={()=>handleDlete(myjob._id)} className="badge badge-warning">delete job</button>
        </th>
      </tr>)
     }
    
     
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default MyaddJob;