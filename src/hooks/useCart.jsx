import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import useAxiosSecure from './useAxiosSecure';
import { AuthContext } from '../provider/AuthProvider';

const useCart = () => {
    const axiosSecure= useAxiosSecure();
    const {user}=useContext(AuthContext)

   // tan stack query
   const {refetch,data: cart=[]}= useQuery({
      queryKey: ['cart',user?.email],
      queryFn: async ()=>{
         const res= await axiosSecure.get(`/carts?email=${user.email}`)
         return res.data;
      }
   })


    return [cart,refetch]
};

export default useCart;