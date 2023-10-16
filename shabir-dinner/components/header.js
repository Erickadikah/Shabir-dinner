import React, { useState } from "react";
import Image from "next/image";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import Link from "next/link";
import logo from "../public/images/chef.svg";
import { motion } from "framer-motion";

const Navigation = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="bg-yellow-500 w-full h-24 flex items-center justify-between px-6 md:px-12">
      <Link href="/">
        <div className="cursor-pointer">
          <div className="flex items-center gap-2">
            <motion.div>
              <Image src={logo} alt="Logo" width={40} height={40} />
            </motion.div>
            <h1 className="text-2xl font-bold">Foodie</h1>
          </div>
        </div>
      </Link>

      <div className="md:flex justify-center items-center w-1/2">
        <input
          type="text"
          className="input-text w-full py-2 px-4 rounded-full"
          placeholder="Search..."
        />
      </div>

      <div className="flex gap-6">
        <Link href="/">
          <div className="cursor-pointer">
            <ImFacebook color="#888888" size={24} />
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer">
            <ImInstagram color="#888888" size={24} />
          </div>
        </Link>
        <Link href="/">
          <div className="cursor-pointer">
            <ImTwitter color="#888888" size={24} />
          </div>
        </Link>

        <div className="relative group">
          <button
            className="group flex items-center"
            onClick={toggleDropdown}
            aria-label="Toggle Menu"
          >
            <span className="text-gray-800 mr-2">Menu</span>
            {dropdownOpen ? (
              <HiChevronUp className="text-gray-800" size={20} />
            ) : (
              <HiChevronDown className="text-gray-800" size={20} />
            )}
          </button>
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-2 py-2 bg-white border border-gray-200 shadow-lg rounded-md w-40">
              <Link href="/">
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  Home
                </div>
              </Link>
              <Link href="/about">
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  About
                </div>
              </Link>
              <Link href="/contact">
                <div className="cursor-pointer px-4 py-2 hover:bg-gray-100">
                  Contact
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
