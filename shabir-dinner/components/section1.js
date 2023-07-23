import React from "react";
import Image from "next/image";
import icon1 from "../public/images/image1.svg";
import icon2 from "../public/images/image2.svg";
import icon3 from "../public/images/image3.svg";

const section1 = () => {
  return (
    <section
      style={{ width: "100%", height: "500px" }}
      className="bg-yellow-500 flex justify-center items-center"
    >
      <div className="flex flex-wrap justify-center gap-10">
        <div className="flex flex-col items-center rounded-full shadow-lg shadow-green ">
          <Image
            src={icon1}
            className="rounded-full"
            style={{ width: "200px", height: "100px" }}
          />
          <p className="text-center font-bold text-white">Recipes</p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-lg shadow-blue">
          <Image
            src={icon2}
            className="rounded-full"
            style={{ width: "200px", height: "100px" }}
          />
          <p className="text-center font-bold text-white">Recipes</p>
        </div>
        <div className="flex flex-col items-center rounded-lg shadow-lg shadow-pink">
          <Image
            src={icon3}
            className="rounded-full"
            style={{ width: "200px", height: "100px" }}
          />
          <p className="text-center font-bold text-white">Recipes</p>
        </div>
      </div>
    </section>
  );
};

export default section1;
