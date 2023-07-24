import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const section3 = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 }, // Initial state: hidden and scaled down
    visible: { opacity: 1, scale: 1 }, // Later state: visible and original scale
  };
  return (
    <section
      style={{ width: "100vw", height: "100vh", background: "#FFFFFF" }}
      className=""
    >
      <div className=" justify-items-center p-20 lg:flex w-90">
        <div>
          <Image src="/images/grill1.jpg" className="pop-out-image" width={400} height={200} />
        </div>
        <div className="flex-1 px-8">
          <h1 className="text-xl font-bold"> ABOUT US</h1>
          <h1 className="text-3xl font-extrabold">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find the best recipes for
              and order food{" "}
            </span>
          </h1>
          <p className="block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
            quibusdam, quia voluptas quod quos dolorum voluptatibus quae quas
            fugit.
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
            quibusdam,
          </p>
          <br></br>
          <ul class="flex gap-10 sm:flex-row">
            <ul class="list-none custom-list text-gray-600">
              <li> Order </li>
              <li> Find variety of food</li>
              <li> Cook With Me</li>
              <li> Order </li>
              <li> Find variety of food</li>
            </ul>
            <ul class="list-none custom-list text-gray-600">
              <li> Order </li>
              <li> Find variety of food</li>
              <li> Cook With Me</li>
              <li> Order </li>
              <li> Find variety of food</li>
            </ul>
          </ul>
          <br></br>
          <div
            className=" bg-yellow-500 flex justify-center items-center mb-20 hover:bg-yellow-700"
            style={{
              width: "150px",
              height: "60px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className=" text-lg text-white">Read More</p>
          </div>
        </div>
      </div>
      {/*<div className="flex justify-center">
      <div className=" bg-slate-400 shadow-md hover:bg-inherit">
        <Image src="/images/grill1.jpg" width={200} height={200} />
      </div>
        </div>*/}
    </section>
  );
};

export default section3;
