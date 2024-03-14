import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const PrivateRoute = ({children}) => {

    const {user,loading} = useContext(AuthContext);
    const location= useLocation();
 
    if(user){
       return children;
    }
 
    if(loading) {
       return <progress className="progress progress-info w-56" value="70" max="100"></progress>
 
    }
 


    return <Navigate to='/login' state={{from: location}} replace  >  </Navigate>  ;
};

export default PrivateRoute;