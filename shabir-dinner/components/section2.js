import React, { useState } from "react";
import Image from "next/image";
import photo from "../public/images/chef.svg";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";
import { motion, AnimatePresence } from 'framer-motion';

const Section2 = () => {
  const [selectedId, setSelectedId] = useState(null)

  const items = [
    { id: 'forkKnife', title: 'Fork & Knife', subtitle: 'Subtitle 1' },
    { id: 'fastFood', title: 'Fast Food', subtitle: 'Subtitle 2' },
    { id: 'hamburger', title: 'Hamburger', subtitle: 'Subtitle 3' },
  ];

  return (
    <section
      style={{ width: "100vw", height: "100%", background: "#E9F8F5" }}
      className="items-center sm:block px-10"
    >
      <div className="flex flex-wrap justify-center items-center gap-2">
        {items.map(item => (
          <motion.div layoutId={item.id} onClick={() => setSelectedId(item.id)} key={item.id}>
            <div className="rounded-full shadow-lg p-8">
              {item.id === 'forkKnife' && <GiForkKnifeSpoon size={35} />}
              {item.id === 'fastFood' && <IoFastFoodSharp size={35} />}
              {item.id === 'hamburger' && <PiHamburgerBold size={35} />}
            </div>
          </motion.div>
        ))}
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
        <AnimatePresence>
        {selectedId && (
          <motion.div layoutId={selectedId}>
            <motion.h5>{items.find(item => item.id === selectedId)?.subtitle}</motion.h5>
            <motion.h2>{items.find(item => item.id === selectedId)?.title}</motion.h2>
            <motion.button onClick={() => setSelectedId(null)}>Close</motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Section2;
