// Header file

import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const isAuthenticated = false;

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    // Implement your logout logic here
    console.log("Logout clicked");
    // Close the dropdown after logout
    setDropdownOpen(false);
  };

  return (
    <header className="bg-blue-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-cyan-800 md:text-2xl text-md font-bold">
          Task Master
        </Link>

        {isAuthenticated ? (
          <div className="flex justify-center items-center">
            <p className="ml-2 text-black-500">Welcome, User</p>
            <div
              onClick={toggleDropdown}
              className="cursor-pointer rounded-full w-12 h-12 bg-red-300 flex items-center justify-center text-blue-800 text-2xl font-bold ml-3"
            >
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
              <Link to="/signin" className="text-cyan-600">
                Sign in
              </Link>
              <Link to="/signup" className="text-cyan-600">
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
