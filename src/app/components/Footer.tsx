"use client";
import React from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Brand/Logo */}
        <div className="text-lg font-bold text-yellow-700">
          Ehitemusie
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <a
            href="#home"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            Projects
          </a>
          <a
            href="#about"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            Contact
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4">
          {/* Email */}
          <a
            href="mailto:nebyuehitemusie@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            <FaEnvelope size={24} />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/ehitemusie-nebyu-8073512b4/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            <FaLinkedin size={24} />
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/Ewostatewos18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-yellow-700 transition duration-200"
          >
            <FaGithub size={24} />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Ehitemusie. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
