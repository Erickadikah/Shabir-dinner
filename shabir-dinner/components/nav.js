"use client";
import React, { useState } from "react";
import { GiHamburgerMenu, GiClose } from "react-icons/gi";
import { GrFormClose } from "react-icons/gr";
import { Disclosure } from "@headlessui/react";
import { MdHome, MdContactPhone, MdOutlineLogout } from "react-icons/md";
import { FaHandshake } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import Link from "next/link";
 
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className="lg:hidden">
      <Disclosure as="nav">
        <Disclosure.Button
          className={
            "absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group"
          }
          onClick={handleToggleMenu}
        >
          {isMenuOpen ? (
            <GrFormClose
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          ) : (
            <GiHamburgerMenu
              className="block md:hidden h-6 w-6"
              aria-hidden="true"
            />
          )}
        </Disclosure.Button>
 
        {isMenuOpen && (
          <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <div className="flex flex-col justify-start item-center">
              <h1 className="text-base  cursor-pointer font-bold text-black border-b border-gray-100 pb-4 w-full">
                Menu
              </h1>
              <div className=" my-4 border-b border-gray-100 pb-4">
                <Link href="/">
                  <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdHome className="text-2xl text-gray-600 group-hover:text-white " />
 
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Home
                    </h3>
                  </div>
                </Link>
                <Link href="about-us">
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <FcAbout className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      About
                    </h3>
                  </div>
                </Link>
                <Link href="/store">
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <HiShoppingBag className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Store
                    </h3>
                  </div>
                </Link>
                <Link href="/services">
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <FaHandshake className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Services
                    </h3>
                  </div>
                </Link>
                <Link href="/contact-us">
                  <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                    <MdContactPhone className="text-2xl text-gray-600 group-hover:text-white " />
                    <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                      Contact
                    </h3>
                  </div>
                </Link>
              </div>
              {/* setting  */}
 
              {/* logout */}
              <div className=" my-4">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                  <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                  <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                    Logout
                  </h3>
                </div>
              </div>
            </div>
          </div>
        )}
      </Disclosure>
    </div>
  );
};
 
export default Navbar;
 