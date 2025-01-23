"use client";
import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-lg z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Brand/Logo */}
        <div className="text-2xl font-bold text-yellow-700">Ehitemusie</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="#home"
            className="text-white hover:text-yellow-700 transition duration-200"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="text-white hover:text-yellow-700 transition duration-200"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="text-white hover:text-yellow-700 transition duration-200"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="text-white hover:text-yellow-700 transition duration-200"
          >
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-95 backdrop-blur-lg py-2 space-y-2 text-center">
          <Link
            href="#home"
            className="block text-white hover:text-yellow-700 transition duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="#projects"
            className="block text-white hover:text-yellow-700 transition duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="#about"
            className="block text-white hover:text-yellow-700 transition duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="#contact"
            className="block text-white hover:text-yellow-700 transition duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
