import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses =
    "border-2 border-gray-800 rounded-lg px-3 py-2 text-gray-400 cursor-pointer hover:bg-gray-800 hover:text-gray-200";

  // Toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed top-0 left-0 right-0 bg-navbarColor p-4 w-full z-50 shadow-md">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center space-x-2">
          <span className="text-white text-xl font-bold">Uday</span>
        </div>

        {/* Burger button (mobile only) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </button>
        </div>

        {/* Menu Links (hidden on mobile, shown on larger screens) */}
        <div className="hidden md:flex space-x-4">
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
            Projects
          </Link>
          <Link className={linkClasses} to="/blogs">
            Blogs
          </Link>
        </div>
      </div>

      {/* Dropdown Menu (mobile view) */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-navbarColor mt-2 p-4 space-y-2 flex flex-col`}
      >
       

        {/* Mobile Menu Links */}
        <Link className={linkClasses} to="/" onClick={toggleMenu}>
          Home
        </Link>
        <Link className={linkClasses} to="/about" onClick={toggleMenu}>
          About
        </Link>
        <Link className={linkClasses} to="/contacts" onClick={toggleMenu}>
          Contacts
        </Link>
        <Link className={linkClasses} to="/projects" onClick={toggleMenu}>
          Projects
        </Link>
        <Link className={linkClasses} to="/blogs" onClick={toggleMenu}>
          Blogs
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
