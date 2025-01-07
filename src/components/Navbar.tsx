"use client";
import Link from "next/link";
import Image from "next/image";
import { APP_NAME,navigation } from "@/lib/data";
import { useState } from "react";


export const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="w-full">
      <nav className="container mx-auto px-8 py-6 flex items-center justify-between relative">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2 text-2xl font-medium text-indigo-600">
            <Image src="/img/logo.svg" width={32} height={32} alt="Logo" className="w-8" />
            <span>{APP_NAME}</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8">
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-lg text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Get Started Button */}
        <div className="hidden lg:flex">
          <Link
            href="#Form"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden px-2 py-1 text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-800 p-4 transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navigation.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="block py-2 text-gray-800 dark:text-gray-200 hover:text-indigo-600 transition duration-300"
              onClick={toggleMenu} // Close the menu on item click
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#Form"
            className="block py-2 text-center text-white bg-indigo-600 rounded-md mt-4 hover:bg-indigo-700 transition duration-300"
            onClick={toggleMenu}
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
};
