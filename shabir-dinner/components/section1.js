import React from "react";
import Image from "next/image";
import icon1 from "../public/images/Cook.svg";
import icon2 from "../public/images/recipe.svg";
import icon3 from "../public/images/oder.svg";
import { motion } from "framer-motion";

const section1 = () => {
  return (
    <section
      style={{
        width: "100vw",
        height: "90vh",
        backgroundImage: "url('/images/background.jpg')",
      }}
      className="justify-center items-center bg-cover w-full bg-center"
    >
      <div className="flex md:flex-1/2 gap-4 justify-center mb-10">
        <motion.div animate={{ rotate: [0, 360, 360, 0] }}>
          <Image
            src={icon1}
            alt="section1"
            className="w-10 h-10 pop-out-image"
          />
        </motion.div>
        <motion.div animate={{ rotate: [0, 360, 360, 0] }}>
          <Image
            src={icon2}
            alt="section1"
            className="w-10 h-10 pop-out-image"
          />
        </motion.div>
        <motion.div animate={{ rotate: [0, 360, 360, 0] }}>
          <Image
            src={icon3}
            alt="section1"
            className="w-10 h-10 pop-out-image"
          />
        </motion.div>
      </div>
      <div className="justify-center items-center flex flex-col mt-20">
        <div
          className="rounded-full overflow-hidden"
          style={{ width: "250px", height: "250px" }}
        >
          <Image
            alt="section1"
            src="/images/chef.jpg"
            width={200}
            height={200}
            layout="responsive"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
      </div>
      <div
        className="flex flex-wrap justify-center gap-4
        w-full 
        md:flex-1/4
        align-center
        lg:gap-2
        mb-20
        "
      >
        {/*<div
          className="
          pop-out-image 
          flex flex-col 
          items-center 
          rounded-sm transition-all"
        >
          <Image
            alt="section1"
            src="/images/image4.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            {" "}
            Buy Recipes
          </p>
    </div>*/}
        {/*<div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            alt="section1"
            src="/images/image1.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            Book Session With Me
          </p>
  </div>*/}

        {/*<div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            alt="section1"
            src="/images/image2.jpg"
            width={200}
            height={200}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            SubScribe to My Recipes Article
          </p>
</div>*/}

        {/*<div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
          <Image
            alt="section1"
            src="/images/image2.jpg"
            width={200}
            height={100}
            className="rounded-lg"
          />
          <p className="text-center font-bold text-gray-500 underline">
            Recipes
          </p>
</div>*/}
  <h3 className=" text-teal-500 text-center text-xl">At TasteBuds Bistro, we believe that food is an art that should ignite your taste buds and leave lasting memories. Our culinary journey began in 2005 when our founder, Chef Emily, turned her passion for crafting exquisite dishes into a reality.
  <br></br> With a vision to create a haven for food lovers, TasteBuds Bistro was born.
Experience a fusion of flavors that celebrate both local traditions and global influences. 
<br></br>Our carefully curated menu showcases a diverse range of dishes, from classic favorites to innovative creations.</h3>
      </div>
    </section>
  );
};

export default section1;
