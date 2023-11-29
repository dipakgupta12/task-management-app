// Header file

import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const isAuthenticated = false;
  return (
    <header className="bg-blue-300 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-cyan-800 md:text-2xl text-md font-bold">
         Task Master
        </Link>

        {isAuthenticated ? (
          <div className="flex justify-center items-center">
            <nav className="space-x-4">
              <button className="text-red-600 hover:text-red-300">
                Logout
              </button>
            </nav>
            <p className="ml-2 text-green-500">Welcome, User</p>
            <div className="rounded-full w-12 h-12 bg-blue-300 flex items-center justify-center text-blue-800 text-2xl font-bold ml-3">
              A
            </div>
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
