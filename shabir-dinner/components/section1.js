import React from "react";
import Image from "next/image";
// import icon1 from "../public/images/Cook.svg";
// import icon2 from "../public/images/recipe.svg";
// import icon3 from "../public/images/oder.svg";
import { motion } from "framer-motion";

const Section1 = () => {
  const sectionStyle = {
    backgroundImage: `linear-gradient(rgba(26, 25, 25, 0.8), rgba(21, 21, 21, 0.8)), url('/images/background.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
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
  paddingLeft: "1rem", // Add left padding for the list items
};

const listItemStyle = {
  position: "relative",
  marginBottom: "1rem",
  paddingLeft: "1.5rem", // Add left padding for the list items
};

const arrowStyle = {
  position: "absolute",
  left: "0.5rem", // Adjust the left position of the arrow
  top: "0.25rem", // Adjust the top position of the arrow
  content: "''",
  display: "inline-block",
  width: "0.5rem", // Adjust the width of the arrow
  height: "0.5rem", // Adjust the height of the arrow
  background: "#FFD700", // Arrow color
  clipPath: "polygon(100% 0%, 0% 50%, 100% 100%)", // Create an arrow shape
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
      {/*<p>
        At shabir Dinner we believe that good food is not only about taste, but
        also about the stories behind it. We are passionate about connecting
        people with the best local restaurants around them.
  </p>*/}
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
    </section>
  );
};

export default Section1;

