import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';


const AllUser = () => {
   const axiosSecure= useAxiosSecure();
   const {data: users=[]}= useQuery({
      queryKey:['users'],
      queryFn: async ()=> {
         const res= await axiosSecure.get('/users');
         return res.data;
      }
   })

    return (
        <div>
            <div className='flex justify-evenly my-4'>
                <h2 className='text-3xl'>All Users</h2>
                <h2 className='text-3xl'>Total Users: {users.length} </h2>
            </div>

            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
     
      {
        users.map( (user,index)=>  <tr>
        <th>{index+1}</th>
        <th>{user.name}</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
             
             
         )
      }
     
      
    </tbody>
  </table>
</div>

        </div>
    );
};

export default AllUser;