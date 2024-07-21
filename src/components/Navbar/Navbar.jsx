import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const linkClasses = "border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200";

  return (
    <div className="flex items-center justify-between mt-1 bg-navbarColor p-4 w-full">
      <div className="flex items-center space-x-2">
        <span className="text-white text-xl font-bold">Uday</span>
      </div>
      <div className="flex space-x-4">
        <Link className={linkClasses} to="/">
          Home
        </Link>
        <Link className={linkClasses} to="/about">
          About
        </Link>
        <Link className={linkClasses} to="/contacts">
          Contacts
        </Link>
        <Link className={linkClasses} to="/projects">
          Project
        </Link>
        <Link className={linkClasses} to="/blogs">
          Blogs
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
