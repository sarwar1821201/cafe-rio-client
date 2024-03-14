import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext)

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);

    signIn(email,password)
    .then((result)=>{
        const user=result.user;
        console.log(user)
    })

    .catch( (error)=>{
        console.log(error.message)
    } )

  };

  const handleValidateCaptcha = (e) => {
    //  const user_captcha_value= captchaRef.current.value;
    const user_captcha_value = e.target.value;

    if (validateCaptcha(user_captcha_value)) {
      console.log("captcha mile geche");
       setDisabled(false)
    } else {
      console.log("captcha mile nai");
      alert("your captcha code doesn't match ");
    }

    console.log(user_captcha_value);
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col md:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  {/* <a href="#" className="label-text-alt link link-hover">Forgot password?</a> */}
                </label>
              </div>

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>

                {/*  */}

                <input
                  type="text"
                  onBlur={handleValidateCaptcha}
                  name="captcha"
                  placeholder="type the text about captcha"
                  className="input input-bordered"
                  required
                />
                {/* <button  className="btn btn-outline btn-xs mt-2  ">Validate</button> */}
              </div>

              <div className="form-control mt-6">
                <input
                 disabled={disabled} 

                  className="btn btn-primary"
                  type="submit"
                  value="SignIn"
                />
              </div>
            </form>
            <p className="ps-6">
              {" "}
              <small>
                {" "}
                New To This Site ?{" "}
                <Link to="/register">
                  {" "}
                  <button className="btn btn-primary">
                    Please Register{" "}
                  </button>{" "}
                </Link>{" "}
              </small>{" "}
            </p>
            {/* <SocialLogin></SocialLogin> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
