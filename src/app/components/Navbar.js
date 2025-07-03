"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [showDataDropdown, setShowDataDropdown] = useState(false);
  const [showDesignDropdown, setShowDesignDropdown] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("#data-menu")) {
        setShowDataDropdown(false);
      }
      if (!e.target.closest("#design-menu")) {
        setShowDesignDropdown(false);
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

          {/* Data Analysis Projects Dropdown */}
          <div className="relative" id="data-menu">
            <button
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
              onClick={() => {
                setShowDataDropdown((prev) => !prev);
                setShowDesignDropdown(false);
              }}
            >
              Data Analysis Projects ▾
            </button>
            {showDataDropdown && (
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

          {/* Design Projects Dropdown */}
          <div className="relative" id="design-menu">
            <button
              className="text-gray-800 hover:text-blue-500 focus:outline-none"
              onClick={() => {
                setShowDesignDropdown((prev) => !prev);
                setShowDataDropdown(false);
              }}
            >
              Design Projects ▾
            </button>
            {showDesignDropdown && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-64 z-50">
                <Link
                  href="/design"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Overview of Design Projects
                </Link>
                <Link
                  href="/design/design1"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  GalleryPal
                </Link>
                <Link
                  href="/design/design2"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Luxe Cosmetics
                </Link>
                <Link
                  href="/design/design3"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Trackify
                </Link>
                <Link
                  href="/design/design4"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Nestara
                </Link>
                <Link
                  href="/design/design5"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Project 5
                </Link>
                <Link
                  href="/design/design6"
                  className="block px-4 py-2 text-gray-800 hover:bg-blue-100"
                >
                  Project 6
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