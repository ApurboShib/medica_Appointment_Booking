import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast"; // Toast notification provider
import { router } from "./Routes/Route.jsx";
import "./App.css";

// Application entry point - renders RouterProvider with toast notifications
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* Toaster component provides global toast notifications throughout the app */}
    <Toaster position="top-center" />
  </StrictMode>
);
