import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {

    const [menu]= useMenu();
   const dessert= menu.filter((item) => item.category === "dessert");
   const soup= menu.filter((item) => item.category === "soup");
   const salad= menu.filter((item) => item.category === "salad");
   const pizza= menu.filter((item) => item.category === "pizza");
   const offered= menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Our Menu Page</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
     
      <SectionTitle subHeading="Don't Miss " heading=" Today's Offere "  >

      </SectionTitle>

      <MenuCategory items={offered} ></MenuCategory>

    </div>
  );
};

export default Menu;
