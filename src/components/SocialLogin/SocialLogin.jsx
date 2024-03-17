import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const axiosPublic= useAxiosPublic();
  const navigate=useNavigate();

   const handleGoogleSingin= ()=>{
     console.log('google diye sign in kor')
      googleSignIn()
      .then( (result)=>{
         console.log(result.user)
         const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName

         }
       axiosPublic.post('/users',userInfo)
       .then( (res)=>{
          console.log(res.data)
          navigate('/')
       } )

      } )
   }

  return (
    <div>
      <div className="divider"></div>
      <button onClick={handleGoogleSingin} className="btn">
        <FaGoogle className="mr-4"></FaGoogle>
        Login With Goggle
      </button>
    </div>
  );
};

export default SocialLogin;
