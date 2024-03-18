import axios from "axios";
import React from "react";

const axiosSecure = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxiosSecure = () => {
  axiosSecure.interceptors.request.use(function (config) {
    const token= localStorage.getItem('access-token')
    console.log('request stop by interceptor', token)
    config.headers.authorization= `Bearer ${token}`
    return config;
  }, function(error){
     return Promise.reject(error);
  });

  return axiosSecure;
};

axiosSecure.interceptors.response.use(function(response){
    return response;
}, (error)=> {
  const status= error.response.status;
  console.log('error in the interceptor',error)
    return Promise.reject(error);
} )

export default useAxiosSecure;
