import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Header from "../pages/Shared/Header";

const MainLayout = () => {
  return (
    <div>
        <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
