"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#projects-menu")) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Amanda Morrison
        </h1>
        <div className="space-x-6 flex items-center">
          <Link href="/" className="text-gray-800 hover:text-blue-500">
            Home
          </Link>

          {/* Click-based Projects Dropdown */}
          <div className="relative" id="projects-menu">
            <button
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
              onClick={() => setShowDropdown((prev) => !prev)}
            >
              Projects ▾
            </button>
            {showDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-64 z-50">
                <Link
                  href="/projects"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  All Projects
                </Link>
                <Link
                  href="/projects/project1"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  SuperStore Sales Dashboard
                </Link>
                <Link
                  href="/projects/project2"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  SQL + Python Data Pipeline
                </Link>
                <Link
                  href="/projects/project3"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Term Deposit Subscription Predictor
                </Link>
                <Link
                  href="/projects/project4"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Live Data Stream Dashboard
                </Link>
                <Link
                  href="/projects/project5"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Task Tracker with Google Sheets
                </Link>
                <Link
                  href="/projects/project6"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Customer Churn Explainability
                </Link>
              </div>
            )}
          </div>

          <Link href="/skills" className="text-gray-800 hover:text-blue-500">
            Skills
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-500">
            Contact
          </Link>
          <Link href="/resume" className="text-gray-800 hover:text-blue-500">
            Resume
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;