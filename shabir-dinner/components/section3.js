import React, { useEffect, useCallback } from "react";
import { FaHandsHoldingCircle } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";
import { BsReceipt } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
// import { Button } from ""

const Section3 = () => {
  const firstSectionControls = useAnimation();
  const secondSectionControls = useAnimation();
  const thirdSectionControls = useAnimation();

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;

    if (scrollY >= 100) {
      firstSectionControls.start({ opacity: 1, y: 0 });
    }

    if (scrollY >= 400) {
      secondSectionControls.start({ opacity: 2, y: 0 });
    }

    if (scrollY >= 800) {
      thirdSectionControls.start({ opacity: 3, y: 0 });
    }
  }, [firstSectionControls, secondSectionControls, thirdSectionControls]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section
      id="section3"
      className="bg-black flex flex-col sm:flex-row justify-center items-center py-8 sm:space-x-4 sm:space-y-8 sm:gap-4 sm:flex"
    >
      {/* First Section */}

      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={secondSectionControls}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="bg-white rounded-sm p-8 border border-gray-300 shadow-md sm:w-96 sm:h-70"
      >
        <h2 className="text-2xl font-bold text-center text-yellow-500 mt-4 sm:mt-8">
          Your Source for Delicious Recipes and Culinary Adventures
        </h2>
        <p className="mt-4 text-gray-800">
          Are you a food enthusiast always on the lookout for new flavors and
          exciting dishes? At Dinner Magazine, we are passionate about sharing
          our love for food through captivating articles, inspiring recipes, and
          culinary journeys.
        </p>
        <p className="mt-4 text-gray-800">
          Our team of dedicated writers brings you the latest trends, unique
          cuisines, and expert tips to elevate your dining experiences. Whether
          you're a home cook or a seasoned chef, we have something special for
          you.
        </p>
        <div className="mt-6 flex justify-center">
          <div className="button-primary">
            <p className="text-lg text-white">Read More</p>
          </div>
        </div>
      </motion.div>
      <div className="bg-gray-700 rounded-sm text-white p-8 sm:w-full sm:h-auto md:w-96 md:h-70 lg:h-90">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          animate={firstSectionControls}
          transition={{ duration: 0.5 }}
          className=""
        >
          <h1 className="text-2xl font-bold mt-4 sm:mt-8"> ABOUT US</h1>
          <h2 className="text-lg font-semibold mt-2">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find recipes for and order food
            </span>
          </h2>
          <p className="mt-4">
            At TasteBuds Bistro, we believe that food is an art that should
            ignite your taste buds and leave lasting memories. Our culinary
            journey began in 2005 when our founder, Chef Emily, turned her
            passion for crafting exquisite dishes into a reality. With a vision
            to create a haven for food lovers, TasteBuds Bistro was born.
          </p>
          <p className="mt-4">
            Experience a fusion of flavors that celebrate both local traditions
            and global influences. Our carefully curated menu showcases a
            diverse range of dishes, from classic favorites to innovative
            creations.
          </p>
          <div className="mt-6 flex justify-center">
            <button className="button-primary">Talk to Us</button>
          </div>
        </motion.div>
      </div>
      {/* Third Section */}
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={thirdSectionControls}
        transition={{ duration: 1, delay: 0.1 }}
        className="bg-white rounded-sm p-8 border border-gray-300 shadow-md sm:w-96 sm:h-70 mt-4 sm:mt-0"
      >
        <div className="flex justify-center items-center mt-4 sm:mt-8">
          <BsReceipt size={35} className="text-gray-800" />
        </div>
        <h2 className="text-2xl font-bold text-center text-yellow-500 mt-4">
            The best place to find recipes for and order food
        </h2>
        <p className="mt-4 text-gray-800">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
          voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
          quibusdam, quia voluptas quod quos dolorum voluptatibus quae quas
          fugit.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
        </p>
        <div className="mt-6 flex justify-center">
          <div className="button-primary">
            <p className="text-lg text-white">Sign Up</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Section3;
