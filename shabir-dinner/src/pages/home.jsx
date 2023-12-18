import React from "react";
import Navigation from "../../components/header";
import FooterLinks from "../../components/footer/FooterLinks";

const home = () => {
const backgroundImageUrl = "/images/pizza.jpg";
  return (
    <>
      <Navigation />
      <div className="h-[70vh] w-full bg-white">
        <div
          className="w-full h-[40vh] relative"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          {/* Overlay div */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <h1 className="text-white text-2xl font-extrabold text-center absolute inset-0 flex items-center justify-center z-10">
            HOME
          </h1>
        </div>
        {/*navigation side */}
        <div className="">
        <h1>FILTER BY</h1>
        </div>
      </div>
      <FooterLinks />
    </>
  );
};

export default home;
