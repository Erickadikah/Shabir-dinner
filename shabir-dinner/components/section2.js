import React from "react";
import Image from "next/image";
import photo from "../public/images/chef.svg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";

const section2 = () => {
  return (
    <section
      style={{ width: "100vw", height: "100%", background: "#E9F8F5" }}
      className=" items-center mt-20 sm:block px-10"
    >
      <div className="flex flex-wrap justify-center items-center gap-2">
        <div className="flex justify-center  py-8">
          <div className="rounded-full shadow-lg p-8">
            <GiForkKnifeSpoon size={35} />
          </div>
        </div>
        <div className="flex justify-center  py-8">
          <div className="rounded-full shadow-lg p-8">
            <IoFastFoodSharp size={35} />
          </div>
        </div>
        <div className="flex justify-center  py-8">
          <div className="rounded-full shadow-lg p-8">
            <PiHamburgerBold size={35} />
          </div>
        </div>
      </div>
      <h1 className="text-center font-extrabold text-3xl">
        {" "}
        Our Top Categories
      </h1>
      <div className="flex-1/4 md:flex-1/4 flex flex-wrap justify-center gap-4 mt-20 py-20">
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          Chicken
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Snacks</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Healthy</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Traditional</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Local food</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Fast Food</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Burgers</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Pasta</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Pizaa</p>
        </div>
        <div className="rounded-full w-40 h-10 bg-customYellow flex justify-center items-center hover:bg-yellow-500">
          <p>Grill</p>
        </div>
      </div>
     {/* <div className="image-container mb-10 gap-3 flex md:flex-1/2 justify-center items-center flex-wrap">
        <Image
          src="/images/grill2.jpg"
          className="rounded-md"
          width={200}
          height={100}
        />
        <Image
          src="/images/grill2.jpg"
          className="rounded-md"
          width={200}
          height={100}
        />
        <Image
          src="/images/grill2.jpg"
          className="rounded-md"
          width={200}
          height={100}
        />
        <Image
          src="/images/grill2.jpg"
          className="rounded-md"
          width={200}
          height={100}
        />
  </div>*/}
      {/*<div class="grid flex-wrap grid-cols-4 gap-4">
  <div class="bg-blue-300">Column 1</div>
  <div class="bg-green-300">Column 2</div>
  <div class="bg-red-300">Column 3</div>
  <div class="bg-yellow-300">Column 4</div>
  </div>*/}
    </section>
  );
};

export default section2;
