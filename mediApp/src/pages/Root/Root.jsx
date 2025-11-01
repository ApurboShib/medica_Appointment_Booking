import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Header/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Root = () => {
  return (
    <div>
      <h2>This is a root Page</h2>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
