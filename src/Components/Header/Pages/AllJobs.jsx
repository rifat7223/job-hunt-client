import React from 'react';
import { useLoaderData } from 'react-router';
import AllJobsCard from '../../AllJobsCard';

const AllJobs = () => {
    const data=useLoaderData()
    console.log(data)
    return (
        <div className='grid grid-cols-4 gap-6'>
            {
                data.map(allJobs=><AllJobsCard key={allJobs._id} allJobs={allJobs}></AllJobsCard>)
            }
        </div>
    );
};

export default AllJobs;