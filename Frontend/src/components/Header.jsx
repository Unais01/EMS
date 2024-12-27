import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">EMS</h1>
        <nav className="flex space-x-6">
          <Link
            to="/"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            to="/employees"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Employees
          </Link>
          <Link
            to="/register"
            className="hover:text-gray-300 transition-colors duration-300"
          >
            Add Employee
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
