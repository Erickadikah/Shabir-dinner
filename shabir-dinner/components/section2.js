import React from "react";
import Image from "next/image";
import photo from "../public/images/chef.svg";
import { GiForkKnifeSpoon } from "react-icons/gi";

const section2 = () => {
  return (
    <section
      style={{ width: "100vw", height: "100%", background: "#E9F8F5" }}
      className=" items-center mt-20 sm:block px-10"
    >
      <div className="flex justify-center align-center py-20">
        <GiForkKnifeSpoon size={40}/>
        {/*<Image src={photo} className="w-20 h-20" />*/}
      </div>
      <h1 className="text-center font-extrabold text-3xl border rounded-full">
        {" "}
        Our Top Categories
      </h1>
      <div className="flex-1/4 sm:flex-1/4 flex flex-wrap justify-center gap-4 mt-20 py-20">
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
    </section>
  );
};

export default section2;
