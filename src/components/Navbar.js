import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 mx-12">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-indigo-600">
              <img
                src="/79d044f63fdef05fea40770eb0fee0d3.png" // Reference to the logo in the public folder
                alt="Logo"
                className="h-14 w-auto" // Adjust height/width to fit your needs
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {/* Navbar Links */}
            <Link
              to="/about"
              className="text-[#0E1F51] text-[16px] font-[600] hover:underline"
            >
              About
            </Link>
            <Link
              to="/about"
              className="text-[#0E1F51] text-[16px] font-[600] hover:underline"
            >
              Our Services
            </Link>
            <Link
              to="/about"
              className="text-[#0E1F51] text-[16px] font-[600] hover:underline"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-[#0E1F51] text-[16px] font-[600] hover:underline"
            >
              Career
            </Link>
            <Link
              to="/about"
              className="text-[#0E1F51] text-[16px] font-[600] hover:underline"
            >
              Contact
            </Link>

            {/* Get In Touch Button */}
            <a
              href="#getintouch"
              className="bg-[#FFD700] text-black px-4 py-2 rounded text-[16px] font-[500] hover:bg-[#ffe240] transition"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-[#0E1F51] focus:outline-none focus:text-[#0E1F51]"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/about"
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/about"
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </Link>
            <a
              href="#getintouch"
              className="bg-[#FFD700] text-black text-[16px] font-[500] hover:bg-[#ffe240] transition
              block  text-center px-3 py-2 rounded-md text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
