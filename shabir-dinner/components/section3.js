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
      style={{ width: "100vw", height: "100%", background: "#FFFFFF" }}
      className="justify-center items-center sm:block px-10">
      <div class="block md:flex mt-20">
        <div className="">
          <Image src="/images/grill1.jpg " width={400} height={200} />
        </div>
        <div className="flex-1 px-6">
          <h1 className="text-xl font-bold"> ABOUT US</h1>
          <h1 className="text-3xl font-extrabold">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find recipes for
              and order food{" "}
            </span>
          </h1>
          <p className="block mt-8 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            voluptatibus quae quas fugit. <br></br>Quisquam voluptatum, voluptate,
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia<br></br> voluptas quod quos dolorum
          </p>
          <br></br>
          <ul class="flex gap-10 sm:flex-row">
            <ul class="list-none custom-list text-gray-600">
              <li> Order </li>
              <li> variety of food</li>
              <li> Cook With Me</li>
              <li> Order </li>
              <li> Find food</li>
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
      <div class="block md:flex mt-20">
      <div class="block md:flex mt-20">
        <div className="">
          <Image src="/images/pilau.jpg " width={400} height={200} />
        </div>
        <div className="flex-1 px-6">
          <h1 className="text-xl font-bold">Get Variety Of Articles On Cooking </h1>
          <h1 className="text-3xl font-extrabold">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find recipes for
              and order food{" "}
            </span>
          </h1>
          <p className="block mt-8 break-words">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            voluptatibus quae quas fugit. <br></br>Quisquam voluptatum, voluptate,
          </p>
          <br></br>
          <p>
            Lorem ipsum dolor sit amet consectetur<br></br> adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia<br></br> voluptas quod quos dolorum
          </p>
          <br></br>
          <ul class="flex gap-10 sm:flex-row">
            <ul class="list-none custom-list text-gray-600">
              <li> Order </li>
              <li> variety of food</li>
              <li> Cook With Me</li>
              <li> Order </li>
              <li> Find food</li>
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
            <p className=" text-sm text-white">Read My Articles</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default section3;
