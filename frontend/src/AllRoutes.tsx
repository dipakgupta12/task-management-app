import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./components/Auth/SignUp";
import Login from "./components/Auth/Login";
import NotFound from "./pages/404";
import { useSelector } from "react-redux";

const AllRoutes = () => {
  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  const isUserAuthenticated = localStorage.getItem("user") !== null;

  return (
    <Routes>
      {isAuthenticated ||
        (isUserAuthenticated && <Route path="/" element={<Home />} />)}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<Login />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AllRoutes;
