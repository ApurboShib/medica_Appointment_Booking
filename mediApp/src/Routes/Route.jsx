import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import DoctorDetails from "../pages/DoctorDetails/DoctorDetails.jsx";
import Bookings from "../pages/Bookings/Bookings.jsx";
import Blogs from "../pages/Blogs/Blogs.jsx";

// Router configuration - defines all application routes
const router = createBrowserRouter([
  {
    path: "/", // Root path - renders Root.jsx as layout wrapper
    Component: Root, // Layout component with Navbar, Outlet, and Footer
    errorElement: <ErrorPage />, // Error page for invalid routes
    children: [
      {
        index: true, // Default route at "/" - renders Home component
        Component: Home,
      },
      {
        path: "about", // About page route at "/about"
        Component: About,
      },
      {
        path: "doctors/:id", // Dynamic route for doctor details - :id captures doctor ID from URL
        Component: DoctorDetails, // Renders doctor profile with booking functionality
      },
      {
        path: "bookings", // Bookings page route at "/bookings"
        Component: Bookings, // Shows all booked appointments with cancel option
      },
      {
        path: "blogs", // Blogs page route at "/blogs"
        Component: Blogs, // React Q&A blog posts
      },
    ],
  },
]);

export { router };
