// Header file

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userActions";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const isAuthenticated = useSelector((state: any) => state.isAuthenticated);
  const isUserAuthenticated = localStorage.getItem("user") !== null;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    localStorage.removeItem("user");
    // Close the dropdown after logout
    setDropdownOpen(false);
    dispatch(logout());
    navigate("/signin");
    
  };

  const getFirstLetter = (email: string) => {
    return email ? email[0].toUpperCase() : "";
  };

  return (
    <header className="bg-[#01172c] p-4">
      <div className="container max-w-[1200px] mx-auto flex items-center justify-between">
        <Link to={isUserAuthenticated ? "/" : "/signin"} className="text-[#fff] md:text-2xl text-md font-semibold">
          Task Master
        </Link>

        {isAuthenticated || isUserAuthenticated ? (
          <div className="flex justify-center items-center">
            <p className="ml-2 text-white mr-2">Welcome, User</p>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer rounded-full w-8 h-8 bg-red-300 flex items-center justify-center text-blue-800 text-xl font-bold ml-3"
            >
               {/* {getFirstLetter(user.email)} */}
               A
            </div>
            {isDropdownOpen && (
              <div className="absolute top-12 right-0 bg-white border rounded shadow-md">
                <ul>
                  <li className="p-2 cursor-pointer" onClick={handleLogout}>
                    Logout
                  </li>
                  <li className="p-2 cursor-pointer" onClick={handleLogout}>
                    Profile
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div>
            <nav className="space-x-4">
              <Link to="/signin" className="text-white">
                Sign in
              </Link>
              <Link to="/signup" className="text-white">
                Sign up
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
