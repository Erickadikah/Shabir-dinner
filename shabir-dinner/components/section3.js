import React, { useEffect, useCallback } from "react";
import { BsReceipt } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Adds from "./adds";

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
    <>
    <section className="bg-[rgb(255,255,255)] flex flex-col sm:flex-row justify-center items-center py-8 space-x-4 space-y-8 gap-4 border-b relative">
  <div className="absolute top-0 sm:mt-10 left-1/2 transform -translate-x-1/2 bg-opacity-80 p-4 rounded-sm z-10">
    <h1>
      <span className="lg:text-3xl sm:text-2xl lg:font-bold sm:font-bold text-yellow-500">Unleash Your Radio Shows, Podcasts, and Audiobooks with Streambox Hosting</span>
    </h1>
  </div>
  <div className="lg:flex sm:block lg:p-24  sm:p-10 lg:gap-8 sm:gap-4 items-center">
  {/* First Section */}
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={secondSectionControls}
    transition={{ duration: 0.8, delay: 0.5 }}
    className="bg-white rounded-sm p-8 border border-gray-300 shadow-md sm:w-96 sm:h-70 relative overflow-hidden"
  >
    <div className="absolute inset-0">
      <Image
        src="/images/chef.jpg"
        layout="fill"
        style={{ objectFit: 'cover' }}
        alt="culinary"
        className="rounded-sm"
      />
    </div>
    <div className="relative z-10">
      {" "}
      {/* Create a new stacking context */}
      <h2 className="text-2xl font-bold text-center text-yellow-500 mt-4 sm:mt-8">
        Your Source for Delicious Recipes and Culinary Adventures
      </h2>
      <p className="mt-4 text-white">
        Are you a food enthusiast always on the lookout for new flavors and
        exciting dishes? At Dinner Magazine, we are passionate about sharing
        our love for food through captivating articles, inspiring recipes,
        and culinary journeys.
      </p>
      <p className="mt-4 text-white">
        Our team of dedicated writers brings you the latest trends, unique
        cuisines, and expert tips to elevate your dining experiences.
        Whether you&apos;re a home cook or a seasoned chef, we have
        something special for you.
      </p>
      <div className="mt-6 flex justify-center">
        <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60">
          Read More
        </button>
      </div>
    </div>
  </motion.div>
  {/* Second Section */}
  <div className=" rounded-sm text-white p-8 w-full sm:w-96 sm:h-70 md:w-96 md:h-90 lg:h-90 relative overflow-hidden">
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={firstSectionControls}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute inset-0">
        <Image
          src="/images/about-us.jpg"
          layout="fill"
          style={{ objectFit: 'cover' }}
          alt="culinary"
          className="rounded-sm border border-gray-300"
        />
      </div>
      <div className="relative z-10">
        <h1 className="text-2xl font-bold mt-4 sm:mt-8">ABOUT US</h1>
        <h2 className="text-lg font-semibold mt-2">
          Welcome to Dinner{" "}
          <span className="text-yellow-500">
            the best place to find recipes for and order food
          </span>
        </h2>
        <p className="mt-4 text-white">
          At TasteBuds Bistro, we believe that food is an art that should
          ignite your taste buds and leave lasting memories. Our culinary
          journey began in 2005 when our founder, Chef Emily, turned her
          passion for crafting exquisite dishes into a reality. With a
          vision to create a haven for food lovers, TasteBuds Bistro was
          born.
        </p>
        <p className="mt-4 text-white">
          Experience a fusion of flavors that celebrate both local
          traditions and global influences. Our carefully curated menu
          showcases a diverse range of dishes, from classic favorites to
          innovative creations.
        </p>
        <div className="mt-6 flex justify-center">
          <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60">
            Talk to Us
          </button>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Third Section */}
  <motion.div
    initial={{ y: -10, opacity: 0 }}
    animate={thirdSectionControls}
    transition={{ duration: 1, delay: 0.1 }}
    className="bg-white rounded-sm p-8 border border-gray-300 shadow-md sm:w-96 sm:h-70 relative overflow-hidden"
  >
  <div className="absolute inset-0">
        <Image
          src="/images/recipe.jpg"
          layout="fill"
          style={{ objectFit: 'cover' }}
          alt="culinary"
          className="rounded-sm"
        />
      </div>
    <div className="relative z-10">
    <div className="flex justify-center items-center mt-4 sm:mt-8">
      <BsReceipt size={35} className="text-gray-800" />
    </div>
    <h2 className="text-2xl font-bold text-center text-yellow-500 mt-4">
      The Best Place to Find Recipes for and Order Food
    </h2>
    <p className="mt-4 text-gray-800">
      We are a team of food enthusiasts who love to share our passion for
      cooking with others. Our mission is to help you discover new recipes
      and cuisines from around the world. We&apos;re here to make your life
      easier by providing you with delicious recipes that are easy to follow
      and taste great! Subscribe today and get access to our library of over
      1000+ recipes from all over the world. You&apos;ll also receive
      exclusive discounts on our products and services, as well as special
      offers only available through our newsletter.
    </p>
    <div className="mt-6 flex justify-center">
      <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60">
        Subscribe
      </button>
    </div>
    </div>
  </motion.div>
  </div>
  </section>
  <Adds />
    </>
  );
};

export default Section3;
