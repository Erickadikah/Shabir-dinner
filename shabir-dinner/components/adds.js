import React from "react";
import Image from "next/image";

const Adds = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 h-70">
      <h1 className="text-3xl text-black">GET THAT SOFTWARE TODAY</h1>
      <p className="text-lg text-black mt-8">
        Get the best software for your business today!
      </p>
      <div className="lg:flex sm:block lg:gap-8 sm:gap-4 lg:p-8 sm:p-4 lg:items-center">
        <div className="lg:p-4 sm:p-2">
          <Image
            src="/images/back.jpg"
            width={700}
            height={500}
            alt="culinary"
          />
        </div>
        <div className="p-4 sm:mt-4">
          <h1 className="text-2xl md:text-4xl font-semibold text-black mt-2">
            INTUITIVE CONTROL PANELS
          </h1>
          <p className="text-lg md:text-h3 text-gray-700 mt-4">
            Streambox Hosting is a cloud-based radio station automation solution
            that allows users to manage live shows, podcasts, on-demand content,
            and more. The platform is accessible via native mobile apps for
            Android and iOS, as well as on any web browser.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Adds;
