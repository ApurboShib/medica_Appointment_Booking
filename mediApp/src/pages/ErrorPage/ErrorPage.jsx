import React from "react";
import { useNavigate, useRouteError } from "react-router-dom"; // Hooks for navigation and error handling
import Navbar from "../../components/Header/Navbar";

// Error page - displayed for invalid routes (404)
// Renders outside Root.jsx, so Footer is not shown
const ErrorPage = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation
  const error = useRouteError(); // Get error details from router

  return (
    <div>
      {/* Navbar is visible on error page as per requirements */}
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-red-600">404</h1>
          <h2 className="text-4xl font-bold text-gray-800 mt-4 mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 mb-2 text-lg">
            The page you're looking for doesn't exist or has been moved.
          </p>
          {error && (
            <p className="text-sm text-gray-500 mb-8">
              {error.statusText || error.message}
            </p>
          )}

          {/* Navigate back to homepage */}
          <button
            onClick={() => navigate("/")} // Routes to home page "/"
            className="btn btn-primary btn-lg"
          >
            Back to Homepage
          </button>
        </div>
      </div>

      {/* Footer is NOT shown on error page as per requirements */}
    </div>
  );
};

export default ErrorPage;
