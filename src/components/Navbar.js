"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
        Amanda Morrison </h1>
        <div className="space-x-6">
        <Link href="#home" className="text-gray-800 hover:text-blue-500">Home</Link>
        <Link href="#projects" className="text-gray-800 hover:text-blue-500">Projects</Link>
        <Link href="/skills" className="text-gray-800 hover:text-blue-500">Skills</Link>
        <Link href="/contact" className="text-gray-800 hover:text-blue-500">Contact</Link>

        <a
  href="/Amanda_Schembri_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="text-gray-800 hover:text-blue-500"
>
  Resume
</a>



        </div>
      </div>
    </nav>
  );
};

export default Navbar;
