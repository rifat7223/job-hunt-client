import React from "react";

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          {/* Logo / Brand */}
          <h1 className="text-2xl font-bold">JobHunt</h1>

          {/* Navigation Links */}
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/all-jobs" className="hover:text-white transition">Jobs</Link>
            <Link to="/accepted-tasks" className="hover:text-white transition">Accepted Tasks</Link>
            <Link to="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-end gap-4 mt-6">
          <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-white transition"><FaTwitter /></a>
          <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-white transition"><FaGithub /></a>
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-500 mt-6">
          &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
