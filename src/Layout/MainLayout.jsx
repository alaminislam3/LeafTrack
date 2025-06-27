import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

// btn class bg-gradient-to-l from-lime-200 to-transparent text-emerald-900 font-bold 
const MainLayout = () => {
  return (
    <div>
      
        <Navbar></Navbar>
      
      <Outlet></Outlet>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
