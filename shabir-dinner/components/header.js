import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
  <nav className="bg-[#F9FAFC] w-full md:h-24 flex items-center justify-between px-6 md:px-12 flex-col md:flex-row">
  <Link href="/">
    <div className="flex items-center">
      <img
        src="/images/gr.png"
        alt="Logo"
        className="h-8 md:h-10 bg-black"
      />
    </div>
  </Link>

  {/* Desktop Navigation (Centered) */}
  <div className="hidden md:flex items-center  space-x-4 lg:justify-start">
    <Link
      href="/features"
      className="text-base text-gray-700 hover:text-gray-900"
    >
      Features
    </Link>
    <Link
      href="/faq"
      className="text-base text-gray-700 hover:text-gray-900"
    >
      FAQ
    </Link>
    <Link
      href="/pricing"
      className="text-base text-gray-700 hover:text-gray-900"
    >
      Pricing
    </Link>
    <Link
      href="/contact"
      className="text-base text-gray-700 hover:text-gray-900 flex items-center"
    >
      Contact
      <RiArrowRightUpLine size={20} className="ml-2" />
    </Link>
    <button className="px-3 py-1 text-base text-white bg-yellow-500 rounded-md hover:bg-gray-800">
      Get Started
      <BsArrowRightShort size={18} className="ml-1" />
    </button>
  </div>
  {/* Mobile Navigation */}
  <div className="md:hidden flex items-center space-x-4">
    <button
      className="text-2xl text-gray-700"
      onClick={toggleDropdown}
      aria-label="Toggle Menu"
    >
      {dropdownOpen ? <HiX size={26} /> : <HiMenu size={26} />}
    </button>
  </div>

  {/* Dropdown Menu for Mobile */}
  {dropdownOpen && (
    <div className="md:hidden absolute right-0 top-20 w-40 bg-white border border-gray-300 shadow-lg ">
      <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
        Home
      </Link>
      <Link href="/about" className="block px-4 py-2 hover-bg-gray-100">
        About
      </Link>
      <Link href="/contact" className="block px-4 py-2 hover-bg-gray-100">
        Contact
      </Link>
      <Link href="/pricing" className="block px-4 py-2 hover-bg-gray-100">
        Pricing
      </Link>
      <Link
        href="/faq"
        className="block px-4 py-2 flex items-center hover-bg-gray-100"
      >
        FAQ
        <RiArrowRightUpLine size={20} className="ml-2" />
      </Link>
    </div>
  )}
</nav>
  );
};

export default Navigation;
