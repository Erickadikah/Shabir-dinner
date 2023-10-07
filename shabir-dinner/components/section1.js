import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url('/images/background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "92vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    color: "#ffffff",
    textAlign: "center",
  };


  return (
    <section style={sectionStyle}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
  transition={{
    type: "spring",
    stiffness: 260,
    damping: 20,
    delay: 0.5,
  }} className="sm:mb-3 lg:mb-10">
        <h1 className="sm:text-3xl lg:text-4xl font-extrabold text-[rgb(165,243,252)] text-800 lg:p-8">
          Indulge your senses in a world of mouthwatering flavors, culinary inspiration,
          <br />
          and gastronomic adventures at Shabir Dinner.
        </h1>
        <p className="sm:text-lg lg:text-xl mb-4 lg:p-8">
          At Shabir Dinner, we believe that good food is not only about taste but also about the stories behind it.
          <br />
          We are passionate about connecting people with the best local restaurants around them.
        </p>
      </motion.div>
      <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60">
        Order Now
      </button>
    </section>
  );
};

export default Section1;

