import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
ks;
import { useDynamicTitle } from "../../hooks/useDynamicTitle";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Set dynamic page title
  useDynamicTitle("About Us");
  return (
    <div>
      <h2>About Us</h2>
    </div>
  );
};

export default About;
