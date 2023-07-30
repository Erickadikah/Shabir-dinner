import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const section3 = () => {
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }, // Later state: visible and original scale
  };
  return (
    <section
      style={{ width: "100vw", height: "100%", background: "#FFFFFF" }}
      className="justify-center items-center sm:block px-10">
      <div class="block md:flex mt-20 justify-center items-center rounded-xl bg-gray-700">
        <div className="flex-1 px-8 justify-center items-center border">
         {/* <div className=" flex flex-wrap gap-4 mt-5 justify-center items-center">
            <Image
              src="/images/test.jpg "
            className="rounded-md"
              width={200}
              height={100}
            />
            <Image
              src="/images/grill2.jpg "
              className="rounded-md"
              width={200}
              height={100}
            />
                        <Image
              src="/images/grill2.jpg "
              className="rounded-md"
              width={200}
              height={100}
            />
                        <Image
              src="/images/grill2.jpg "
              className="rounded-md"
              width={200}
              height={100}
            />
                        <Image
              src="/images/grill2.jpg "
              className="rounded-md"
              width={200}
              height={100}
            />
              <Image
              src="/images/grill2.jpg "
              className="rounded-md"
              width={200}
              height={100}
            />
  </div>*/}
          <h1 className="text-xl font-bold text-center mt-4"> ABOUT US</h1>
          <h1 className="text-2xl font-extrabold text-center">
            Welcome to Dinner{" "}
            <span className="text-yellow-500">
              the best place to find recipes for and order food{" "}
            </span>
          </h1>
          <p className="block mt-2 break-words text-center text-white">
          At TasteBuds Bistro, we 
          believe that food is an art that should ignite your taste buds 
          and leave lasting memories. 
          Our culinary journey began in 2005 when our founder, Chef Emily, 
          turned her passion for crafting exquisite dishes into a reality. With a vision to create a haven for food lovers, TasteBuds Bistro was born.

          </p>
          <br></br>
          <p className="text-center text-white">
            Experience a fusion of flavors that celebrate both local 
            traditions and global influences. Our carefully curated menu showcases a diverse range of dishes, 
            from classic favorites to innovative creations.
          </p>
          <br></br>
          <br></br>
          <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center border rounded-lg mb-20 hover:bg-yellow-700 w-40 h-10">
              <p className="text-lg text-white">Order Now</p>
            </div>
          </div>
        </div>
      </div>
      <div class="block md:flex mt-20 justify-center items-center">
        <div class="flex-1 px-6 border">
          <h1 class="text-3xl font-extrabold text-center mt-8">
            Welcome to Dinner{" "}
            <span class="text-yellow-500">
              the best place to find recipes for and order food{" "}
            </span>
          </h1>
          <p class="block mt-2 break-words text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
            voluptatibus quae quas fugit. Quisquam voluptatum, voluptate,
          </p>
          <br />
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
          </p>
          <br />
          <ul class="flex gap-8 sm:flex-row text-center justify-center items-center">
            <ul class="list-none custom-list text-gray-600 text-center">
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
          <br />
         <div className="flex justify-center items-center">
            <div className="bg-yellow-500 flex justify-center items-center border rounded-lg mb-20 hover:bg-yellow-700 w-40 h-10">
              <p className="text-lg text-white">Read More</p>
            </div>
          </div>
        </div>
        {/*<div class="flex-none px-6">
          <Image src="/images/pilau.jpg" width={400} height={400} />
          </div>*/}
      </div>
    </section>
  );
};

export default section3;
