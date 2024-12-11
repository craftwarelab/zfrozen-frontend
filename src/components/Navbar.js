import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-auto sm:mx-6 md:mx-0 lg:mx-26 px-4 sm:px-6 xl:px-40">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold text-indigo-600">
              <img
                src="/79d044f63fdef05fea40770eb0fee0d3.png"
                alt="Logo"
                className="h-10 md:h-12 lg:h-16 w-auto"
              />
            </a>
          </div>

          <div className="hidden md:flex space-x-8 items-center">
            {/* Navbar Links */}
            <Link
              to="/about"
              className="text-[#0E1F51] text-12px md:text-[14px] lg:text-[16px] font-[600] hover:underline"
            >
              About
            </Link>
            <Link
              to="/services"
              className="text-[#0E1F51] text-12px md:text-[14px] lg:text-[16px] font-[600] hover:underline"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio"
              className="text-[#0E1F51] text-12px md:text-[14px] lg:text-[16px] font-[600] hover:underline"
            >
              Portfolio
            </Link>
            <Link
              to="/career"
              className="text-[#0E1F51] text-12px md:text-[14px] lg:text-[16px] font-[600] hover:underline"
            >
              Career
            </Link>

            {/* Get In Touch Button */}
            <Link
              to="/contact"
              className="bg-[#FFD700] text-black px-4 py-2 rounded text-12px md:text-[14px] lg:text-[16px] font-[500] hover:bg-[#ffe240] transition"
            >
              Get In Touch
            </Link>
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
              onClick={closeMenu}
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Our Services
            </Link>
            <Link
              to="/portfolio"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Portfolio
            </Link>
            <Link
              to="/career"
              onClick={closeMenu}
              className="block text-gray-700 hover:text-[#0E1F51] px-3 py-2 rounded-md text-base font-medium"
            >
              Career
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="bg-[#FFD700] text-black text-[16px] font-[500] hover:bg-[#ffe240] transition block text-center px-3 py-2 rounded-md text-base"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
