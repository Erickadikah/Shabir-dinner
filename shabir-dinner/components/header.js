import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className=" top-0 bg-[#F9FAFC] w-full h-24 flex items-center justify-between px-6 md:px-12" style={{
      position: "sticky",
    }}>
      <Link href="/">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold text-black">Foodie</h1>
        </div>
      </Link>
      <div className="flex items-center space-x-6">
        <Link
          href="/features"
          className="text-lg text-black hover:text-gray-300 hover:after:underline"
        >
          Features
        </Link>
        <Link
          href="/features"
          className="text-lg text-black hover:text-gray-300 hover:after:underline"
        >
          FAQ?
        </Link>
        <Link
          href="/pricing"
          className="text-lg  text-black hover:text-gray-300"
        >
          Pricing
        </Link>
        <Link
          href="/contact"
          className="text-lg text-black hover:text-gray-300"
        >
          Contact
          <RiArrowRightUpLine size={25} className="inline-block ml-2" />
        </Link>
        <button className="px-4 py-2 text-lg text-white bg-yellow-600 rounded-md hover:bg-gray-800">
        Get Started
        <BsArrowRightShort size={23} className="inline-block ml-2" />
        </button>
      </div>
      <div className="flex items-center space-x-6">
        <Link href="/">
          <ImFacebook size={20} className="text-black hover:text-gray-300" />
        </Link>
        <Link href="/">
          <ImInstagram size={20} className="text-black hover:text-gray-300" />
        </Link>
        <Link href="/">
          <ImTwitter size={20} className="text-black hover:text-gray-300" />
        </Link>
        <div className="relative group">
          <button
            className="group flex items-center text-black hover:text-gray-300"
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
          >
            <span className="mr-2 text-black">Menu</span>
            {dropdownOpen ? (
              <HiChevronUp size={20} />
            ) : (
              <HiChevronDown size={20} />
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute top-12 left-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-md">
              <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </Link>
              <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                About
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
