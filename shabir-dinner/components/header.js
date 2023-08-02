import React from "react";
import Link from "next/link";
import { ImFacebook, ImInstagram, ImTwitter } from "react-icons/im";
// import Button from ''
import Image from "next/image";
import logo from "../public/images/chef.svg";
// import icon3 from "../public/images/oder.svg";
import { motion } from "framer-motion";


const header = () => {
  return (
<header className="bg-yellow-500 w-full h-30 object-cover fixed top-0 z-40">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 justify-center py-4 sm:py-0">
          <input type="text" className="input-text" placeholder="Search.." />
        </div>
        <div className="shrink w-80 sm:order-2 flex gap-5">
        <motion.div>
        <Image src={logo}alt="pic" className=' w-10 h-10'/>
        </motion.div>
          <h1 className="text-2xl font-bold">Dinner</h1>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6 sm:mb-10">
            <Link href="/">
              <ImFacebook color="#888888" />
            </Link>
            <Link href="/">
              <ImInstagram color="#888888" />
            </Link>
            <Link href="/">
              <ImTwitter color="#888888" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
