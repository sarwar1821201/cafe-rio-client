import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

   const handleGoogleSingin= ()=>{
     console.log('google diye sign in kor')
      googleSignIn()
      .then( (result)=>{
         console.log(result.user)
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
