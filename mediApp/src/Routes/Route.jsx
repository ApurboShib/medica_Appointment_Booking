import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root/Root.jsx";
import ErrorPage from "../pages/ErrorPage/ErrorPage.jsx";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {},
    ],
  },
]);

export { router };
