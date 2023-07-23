import React from "react";
import Image from "next/image";
import icon1 from "../public/images/Cook.svg";
import icon2 from "../public/images/recipe.svg";
import icon3 from "../public/images/oder.svg";

const section1 = () => {
  return (
  <section style={{ width: "100vw", height: "90vh"  }} className="bg-yellow-500 justify-center items-center ">
  <div className="flex gap-6 justify-center mb-20">
  <Image src={icon1} className="w-10 h-10"/>
  <Image src={icon2} className="w-10 h-10"/>
  <Image src={icon3} className="w-10 h-10"/>
  <Image />
  </div>
  <div className="flex flex-wrap justify-center gap-4">
    <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
      <Image
        src='/images/image4.jpg'
        width={200}
        height={200}
        className="rounded-lg"
      />
      <p className="text-center font-bold text-white"> Buy Recipes</p>
    </div>
    <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
      <Image
        src='/images/image1.jpg'
        width={200}
        height={200}
        className="rounded-lg"
      />
      <p className="text-center font-bold text-black">Book Session With Me</p>
    </div>

    <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
      <Image
        src='/images/image2.jpg'
        width={200}
        height={200}
        className="rounded-lg"
      />
      <p className="text-center font-bold text-white">SubScribe to My Recipes Article</p>
    </div>

    <div className="pop-out-image flex flex-col items-center rounded-sm transition-all duration-300 w-full sm:w-1/2 md:w-1/4 lg:w-1/5">
      <Image
        src='/images/image2.jpg'
        width={200}
        height={100}
        className="rounded-lg"
      />
      <p className="text-center font-bold text-white">Recipes</p>
    </div>
  </div>
</section>
  );
};

export default section1;
