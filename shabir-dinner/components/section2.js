import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import chefImage from "../public/images/chicken1.jpg"
import pizza from "../public/images/pizza.jpg"


const Section2 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: "forkKnife",
      title: "Dinner",
      subtitle: "Cant cook ode our dinner Specials",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [chefImage, chefImage, chefImage],
    },
    {
      id: "fastFood",
      title: "Fast Food",
      subtitle: "Subtitle 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [chefImage, chefImage],
    },
    {
      id: "hamburger",
      title: "Take-Away",
      subtitle: "Subtitle 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [chefImage, chefImage, chefImage],
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-center mb-8">
          Our Top Categories
        </h1>
        <div className="flex flex-wrap justify-center items-center gap-4">
          {items.map((item) => (
            <motion.div
              layoutId={item.id}
              onClick={() => setSelectedId(item.id)}
              key={item.id}
              className="cursor-pointer"
            >
              <div className="rounded-full shadow-lg p-4 bg-white">
                {item.id === "forkKnife" && <GiForkKnifeSpoon size={35} />}
                {item.id === "fastFood" && <IoFastFoodSharp size={35} />}
                {item.id === "hamburger" && <PiHamburgerBold size={35} />}
              </div>
            </motion.div>
          ))}
        </div>
        <AnimatePresence>
          {selectedId !== null && (
            <motion.div
              layoutId={selectedId}
              className="mt-8 text-center"
              key={selectedId}
            >
              <motion.h5 className="text-xl mb-2">
                {items.find((item) => item.id === selectedId)?.subtitle}
              </motion.h5>
              <motion.h2 className="text-2xl mb-4">
                {items.find((item) => item.id === selectedId)?.title}
              </motion.h2>
              <div className="flex justify-center items-center gap-4 mb-4">
                <Carousel
                  autoPlay={true}
                  showArrows={true}
                  showThumbs={false}
                  // width={300}
                  // height={200}
                >
                  {items
                    .find((item) => item.id === selectedId)
                    ?.images.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          alt={`Image ${index}`}
                          objectFit="cover"
                          width={300}
                          height={200}
                        />
                      </div>
                    ))}
                </Carousel>
              </div>
              <motion.p className="mb-4">
                {items.find((item) => item.id === selectedId)?.content}
              </motion.p>
              <motion.button
                onClick={() => setSelectedId(null)}
                className="block mx-auto px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-600 transition duration-300"
              >
                Close
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Section2;
