import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { IoFastFoodSharp } from "react-icons/io5";
import { PiHamburgerBold } from "react-icons/pi";
import { GiFoodTruck } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import chefImage from "../public/images/grill1.jpg";
import chicken from "../public/images/back.jpg";
import burger from "../public/images/test.jpg";
import Services from "../components/services";


const Section2 = () => {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    {
      id: "forkKnife",
      title: "Dinner",
      subtitle: "Cant cook! order our dinner Specials",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [chicken],
    },
    {
      id: "fastFood",
      title: "Fast Food",
      subtitle: "Subtitle 2",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [chefImage],
    },
    {
      id: "hamburger",
      title: "Take-Away",
      subtitle: "Subtitle 3",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.\
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      images: [burger],
    },
    {
      id: "foodTruck",
      title: "Outdoor Catering",
      subtitle: "Our Outdoor Catering Services",
      content:
        "Iam deduated to providing the best catering services in the country.\
        to make your event a success. We have a team of highly trained and experienced\
        chefs who are passionate about food and customer service.\
        We offer a wide range of menus to suit all budgets and tastes.\
        Our team will work with you to create a menu that is perfect for your event.\
        Whether you are looking for a casual buffet or an elegant sit-down dinner,\
        we can help! Contact us today for more information about our catering services!\
        We look forward to hearing from you soon!",
      images: [chefImage, chefImage, chefImage],
    },
  ];

  return (
    <section className="bg-gray-100 py-10  border-b">
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
                {item.id === "foodTruck" && <GiFoodTruck size={35} />}
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
              <div className="flex justify-center items-center gap-4 mb-4" style={{
                height: '70vh'
              }}>
                <Carousel
                  autoPlay={true}
                  showArrows={true}
                  showThumbs={false}
                  // infiniteLoop={true}
                >
                  {items
                    .find((item) => item.id === selectedId)
                    ?.images.map((image, index) => (
                      <div key={index}>
                        <Image
                          src={image}
                          alt={`Image ${index}`}
                          layout="responsive"
                          objectPosition="center top"
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
                className="hover:bg-yellow-600 text-black border border-yellow-500 font-bold py-2 px-4 rounded-sm w-60"
              >
                Close
              </motion.button>
            </motion.div>
          )}
          5
        </AnimatePresence>
      </div>
      <Services />
    </section>
  );
};

export default Section2;
