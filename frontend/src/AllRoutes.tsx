import React, { useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import NotFound from "./pages/404";
import { useSelector } from "react-redux";
import { Profile } from "./pages/Profile";

const AllRoutes = () => {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  const isUserAuthenticated = localStorage.getItem("user") !== null;
  const navigate = useNavigate();

  useEffect(() => {
    // If the user is not authenticated, redirect them to the login page
    if (isAuthenticated && isUserAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, isUserAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={isAuthenticated || isUserAuthenticated ? <Home /> : <Navigate to="/signin" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />
      <Route path="/profile" element={isAuthenticated || isUserAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
