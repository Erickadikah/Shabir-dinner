import React from "react";
import { FaHandsHoldingCircle } from "react-icons/fa";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";
import { BsReceipt } from "react-icons/bs";

const Section3 = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }, // Later state: visible and original scale
  };
  return (
    <section
      style={{ width: "100vw", height: "100%", background: "#000000" }}
      className=" flex flex-wrap justify-center items-center sm:block p-20"
    >
      {/* First Section */}
      <div className="block mb-20 justify-center items-center bg-gray-700 md:w-120 md:h-70 lg:h-90">
        <div className="px-8 justify-center items-center">
          <h1 className="text-xl font-bold text-center mt-10"> ABOUT US</h1>
          <h2 className="lg:text-2xl font-extrabold text-center sm:text-sm">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find recipes for and order food
            </span>
          </h2>
          <p className="block mt-2 break-words lg:text-xl text-center text-white mx-auto">
            At TasteBuds Bistro, we believe that food is an art that should
            ignite your taste buds and leave lasting memories. Our culinary
            journey began in 2005 when our founder, Chef Emily, turned her
            passion for crafting exquisite dishes into a reality. With a vision
            to create a haven for food lovers, TasteBuds Bistro was born.
          </p>
          <br />
          <p className="text-center text-white md:max-w-md mx-auto">
            Experience a fusion of flavors that celebrate both local traditions
            and global influences. Our carefully curated menu showcases a
            diverse range of dishes, from classic favorites to innovative
            creations.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center rounded-full mb-20 hover:bg-slate-500 w-40 h-10">
              <p className="text-lg text-white">Talk to Us</p>
            </div>
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="block md:flex mt-20 justify-center items-center w-120 h-70">
        <div className="flex-1 px-6 border mb-6 hover:border-yellow-500">
          <h2 className="text-3xl font-extrabold text-center text-white mt-6">
            Explore the World of Food with Us
            <span className="text-yellow-500">
              {" "}
              - Your Source for Delicious Recipes and Culinary Adventures
            </span>
          </h2>
          <p className="block mt-2 break-words text-center text-white">
            Are you a food enthusiast always on the lookout for new flavors and
            exciting dishes? At Dinner Magazine, we are passionate about sharing
            our love for food through captivating articles, inspiring recipes,
            and culinary journeys.
          </p>
          <br />
          <p className="text-center text-white">
            Our team of dedicated writers brings you the latest trends, unique
            cuisines, and expert tips to elevate your dining experiences.
            Whether you're a home cook or a seasoned chef, we have something
            special for you.
          </p>
          <br />
          <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center rounded-full mb-6 w-40 h-10 hover:bg-slate-500">
              <p className="text-lg text-white">Read More</p>
            </div>
          </div>
          <div className="text-center text-white">
            <p className="text-lg">Subscribe to Dinner Magazine:</p>
            {/* Add your subscription form here */}
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="block items-center justify-center px-6 border mb-6 w-120 h-70 hover:border-yellow-500">
        <div className="flex justify-center items-center mt-10">
          <BsReceipt size={35} className="text-white items-center" />
        </div>
        <h2 className="text-3xl font-extrabold text-center text-white placeholder:mt-8 mt-6">
          Welcome to Dinner{" "}
          <span className="text-yellow-500">
            the best place to find recipes for and order food
          </span>
        </h2>
        <p className="block mt-2 break-words text-center text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
          voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
        </p>
        <br></br>
        <div className="flex justify-center items-center">
        <button className='w-40 h-10 bg-yellow-500 text-white font-bold rounded-full mb-4'>
        Sign Up
      </button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
