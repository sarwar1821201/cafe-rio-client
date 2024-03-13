import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const MainLayout = () => {

   const location=useLocation();
   const noHeaderFooter= location.pathname.includes('login');


  return (
    <div>
        { noHeaderFooter || <Header></Header>  }
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
