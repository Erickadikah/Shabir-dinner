import React, { useState } from "react";
import Link from "next/link";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { RiArrowRightUpLine } from "react-icons/ri";
import { BsArrowRightShort } from "react-icons/bs";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-[#F9FAFC] w-full md:h-24 flex items-center justify-between px-6 md:px-12">
      <Link href="/">
        <div className="flex items-center bg-black">
          <img src="/images/gr.png" alt="Logo" />
        </div>
      </Link>
      <div className="hidden md:flex items-center justify-center space-x-6">
  <Link href="/features" className="text-lg text-black hover:text-gray-300">
    Features
  </Link>
  <Link href="/faq" className="text-lg text-black hover:text-gray-300">
    FAQ
  </Link>
  <Link href="/pricing" className="text-lg text-black hover:text-gray-300">
    Pricing
  </Link>
  <Link href="/contact" className="text-lg text-black hover:text-gray-300">
    Contact
    <RiArrowRightUpLine size={25} className="inline-block ml-2" />
  </Link>
  <button className="px-4 py-2 text-lg text-white bg-yellow-600 rounded-md hover:bg-gray-800">
    Get Started
    <BsArrowRightShort size={23} className="inline-block ml-2" />
  </button>
</div>
      <div className="md:hidden flex items-center space-x-6">
        <button
          className="text-3xl text-black"
          onClick={toggleDropdown}
          aria-label="Toggle Menu"
        >
          {dropdownOpen ? (
            <HiChevronUp size={30} />
          ) : (
            <HiChevronDown size={30} />
          )}
        </button>
      </div>
      {dropdownOpen && (
        <div className="md:hidden absolute right-0 mt-4 w-40 h-60 bg-white border border-gray-300 shadow-lg rounded-md">
          <Link href="/" className="block px-4 py-2 hover:bg-gray-100">
            Home
          </Link>
          <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
            About
          </Link>
          <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
            Contact
          </Link>
          <Link href="/pricing" className="block px-4 py-2 hover:bg-gray-100">
            Pricing
          </Link>
          <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
            FAQ? <RiArrowRightUpLine size={25} className="inline-block ml-2" />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
