import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import "./App.css";
import React, { useEffect, useState } from "react";
import Main from "./Pages/Main";
import useAuth from "./components/contexts/hooks/useAuth";
import AuthContext from "./components/contexts/hooks/contextAuth";

export default function App() {
  const { phone } = useAuth()

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Main />,
    }
  ])
  return (
    <AuthContext.Provider value={{ phone }} >

      <RouterProvider router={router} />
    </AuthContext.Provider>

  )
}
