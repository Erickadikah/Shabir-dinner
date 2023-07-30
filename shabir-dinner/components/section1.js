import React from "react";
import Image from "next/image";
import icon1 from "../public/images/Cook.svg";
import icon2 from "../public/images/recipe.svg";
import icon3 from "../public/images/oder.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const section1 = () => {
  const [move, setMove] = useState(false);
  return (
    <section
      style={{ width: "100vw", height: "100%", backgroundImage: "url('/images/background.jpg')" }}
      className="justify-center items-center bg-cover bg-center"
    >
      <div className="flex md:flex-1/2 gap-4 justify-center mb-10">
        <motion.div animate={{ rotate: [0, 360, 360, 0] }}>
          <Image src={icon1} className="w-10 h-10 pop-out-image" />
        </motion.div>
        <motion.div
          animate={{ rotate: [0, 360, 360, 0] }}
        >
          <Image src={icon2} className="w-10 h-10 pop-out-image" />
        </motion.div>
        <motion.div animate={{ rotate: [0, 360, 360, 0] }}>
          <Image src={icon3} className="w-10 h-10 pop-out-image" />
        </motion.div>
      </div>
      <div className="justify-center items-center flex flex-col mb-10">
      <div className="rounded-full overflow-hidden" style={{ width: "250px", height: "250px" }}>
        <Image
          src="/images/chef.jpg"
          width={200}
          height={200}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <p className="text-center text-gray-500 border rounded-full mt-3">
        Chef Diana from Dinner
      </p>
    </div>
      <div
        className="flex flex-wrap justify-center gap-4
  w-full 
  md:flex-1/4
  align-center
  lg:gap-2
  mb-20
  "
      >
        <div
          className="
    pop-out-image 
    flex flex-col 
    items-center 
    rounded-sm transition-all"
        >
          <Image
            src="/images/image4.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            {" "}
            Buy Recipes
          </p>
        </div>
        <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            src="/images/image1.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            Book Session With Me
          </p>
        </div>

        <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            src="/images/image2.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            SubScribe to My Recipes Article
          </p>
        </div>

        <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            src="/images/image2.jpg"
            width={200}
            height={100}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            Recipes
          </p>
        </div>
      </div>
    </section>
  );
};

export default section1;
