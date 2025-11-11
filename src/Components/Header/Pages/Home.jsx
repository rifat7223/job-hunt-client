import React from 'react';
import Banner from '../../Banner';
import { useLoaderData } from 'react-router';
import JobCard from '../../JobCard';

const Home = () => {
    const data=useLoaderData()
    console.log(data)
    return (
       <div>
         <div>
            <Banner></Banner>
        </div>
        <div className='grid grid-cols-3 gap-11'>
            {
                data.map(job=><JobCard key={job._id} job={job} ></JobCard>)
            }
        </div>
       </div>
    );
};

export default Home;