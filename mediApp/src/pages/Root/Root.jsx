import React, { Suspense } from "react";
import { Outlet } from "react-router-dom"; // Outlet renders matched child route components
import Navbar from "../../components/Header/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";

// Root layout component - wraps all pages with persistent Navbar and Footer
// Child routes from Route.jsx render inside <Outlet />
const Root = () => {
  return (
    <div>
      {/* Navbar - visible on all pages */}
      <Navbar />

      {/* Suspense wrapper - shows loading fallback while lazy components load */}
      <Suspense
        fallback={
          <div className="text-center py-20 text-xl">Page is Loading...</div>
        }
      >
        {/* Outlet - dynamic placeholder where child routes render based on URL */}
        {/* "/" → Home.jsx, "/about" → About.jsx, "/doctors/:id" → DoctorDetails.jsx */}
        <Outlet />
      </Suspense>

      {/* Footer - visible on all pages except error page */}
      <Footer />
    </div>
  );
};

export default Root;
