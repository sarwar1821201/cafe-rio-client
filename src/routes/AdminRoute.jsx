import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = () => {

   const {user,isLoading}= useContext(AuthContext);
   const [isAdmin, isAdminLoading]= useAdmin();

   const location= useLocation();
 
   if(user && isAdmin){
      return children;
   }

   if(loading || isAdminLoading ) {
      return <progress className="progress progress-info w-56" value="70" max="100"></progress>

   }



   return <Navigate to='/login' state={{from: location}} replace  >  </Navigate>  ;


};

export default AdminRoute;