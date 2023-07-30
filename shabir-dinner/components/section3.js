import React from 'react';
import { FaHandsHoldingCircle } from 'react-icons/fa';
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
    <section style={{ width: "100vw", height: "100%", background: "#000000" }} className="justify-center items-center sm:block p-20">
      {/* First Section */}
      <div className="block md:flex mt-20 justify-center items-center bg-gray-700">
        <div className="flex-1 px-8 justify-center items-center border">
          <h1 className="text-xl font-bold text-center mt-4"> ABOUT US</h1>
          <h2 className="text-2xl font-extrabold text-center">
            Welcome to Dinner <span className="text-yellow-500">the best place to find recipes for and order food</span>
          </h2>
          <p className="block mt-2 break-words text-center text-white">
            At TasteBuds Bistro, we believe that food is an art that should ignite your taste buds and leave lasting memories.
            Our culinary journey began in 2005 when our founder, Chef Emily, turned her passion for crafting exquisite dishes into a reality. With a vision to create a haven for food lovers, TasteBuds Bistro was born.
          </p>
          <br />
          <p className="text-center text-white">
            Experience a fusion of flavors that celebrate both local traditions and global influences. Our carefully curated menu showcases a diverse range of dishes, from classic favorites to innovative creations.
          </p>
          <br />
          <br />
          <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center border mb-20 hover:bg-yellow-700 w-40 h-10">
              <p className="text-lg text-white">Talk to Us</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="block md:flex mt-20 justify-center items-center">
        <div className="flex-1 px-6 border mb-6">
          <h2 className="text-3xl font-extrabold text-center text-white placeholder:mt-8 mt-6">
            Welcome to Dinner <span className="text-yellow-500">the best place to find recipes for and order food</span>
          </h2>
          <p className="block mt-2 break-words text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
          </p>
          <br />
          <p className="text-center text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
          </p>
          <br />
          <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center border rounded-lg mb-20 hover:bg-yellow-700 w-40 h-10">
              <p className="text-lg text-white">Read More</p>
            </div>
          </div>
        </div>
      </div>
      <div className="block items-center justify-center px-6 border mb-6 ">
      <div className='flex justify-center items-center mt-10'>
      <BsReceipt size={35} className='text-white items-center' />
      </div>       
          <h2 className="text-3xl font-extrabold text-center text-white placeholder:mt-8 mt-6">
            Welcome to Dinner <span className="text-yellow-500">the best place to find recipes for and order food</span>
          </h2>
          <p className="block mt-2 break-words text-center text-white mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Quisquam voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
          </p>
        </div>
    </section>
  );
};

export default Section3;

