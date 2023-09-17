import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Section1 = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url('/images/background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "2rem",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    color: "#ffffff", // Text color
    textAlign: "center",
  };

  const containerStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    overflow: "hidden",
    marginBottom: "2rem",
  };

  const iconContainerStyle = {
    display: "flex",
    gap: "1rem",
    marginBottom: "2rem",
  };

  const listStyle = {
    listStyleType: "none",
    textAlign: "left",
    fontSize: "1.2rem",
    paddingLeft: "1rem",
  };

  const listItemStyle = {
    position: "relative",
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
  };

  const arrowStyle = {
    position: "absolute",
    left: "0.5rem",
    top: "0.25rem",
    content: "''",
    display: "inline-block",
    width: "0.8rem",
    height: "0.8rem",
    background: "#FFD700",
    clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)",
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <Image
          alt="Chef"
          src="/images/chef.jpg"
          width={250}
          height={250}
          layout="responsive"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-10">
      <h1 className="text-3xl font-extrabold">
        Indulge your senses in a world of mouthwatering flavors, culinary inspiration, and gastronomic adventures at Shabir Dinner.
      </h1>
      <p className="text-lg mb-4">
        At Shabir Dinner, we believe that good food is not only about taste but also about the stories behind it. We are passionate about connecting people with the best local restaurants around them.
      </p>
      </div>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={arrowStyle}></span> Order your favorite food
        </li>
        <li style={listItemStyle}>
          <span style={arrowStyle}></span> Discover new recipes
        </li>
        <li style={listItemStyle}>
          <span style={arrowStyle}></span> Enjoy fast and convenient delivery
        </li>
      </ul>
      <button className="hover:bg-yellow-600 text-white border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60">
  Order Now
</button>
    </section>
  );
};

export default Section1;
