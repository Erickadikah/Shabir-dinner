import React from "react";
import Image from "next/image";

const Adds = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-10 h-70">
      <h1 className="text-3xl text-black">GET THAT SOFTWARE TODAY</h1>
      <p className="text-lg text-black mt-8">
        Get the best software for your business today!
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center p-28">
  <div className="w-72 h-72 md:w-auto md:h-auto">
    <Image
      src="/images/back.jpg"
      width={500}
      height={500}
      alt="culinary"
    />
  </div>
  <div className="flex-1 text-center p-10">
    <h1 className="text-xl md:text-4xl text-black mt-10">
      Unleash Your Radio Shows, Podcasts, and Audiobooks with Streambox Hosting
    </h1>
    <p className="text-lg text-gray-500">
      Streambox Hosting is a cloud-based radio station automation solution which allows users to manage live shows, podcasts, on-demand content, and more. The platform can be accessed via native mobile apps for Android and iOS, as well as on any web browser.
    </p>
  </div>
</div>
    </div>
  );
};

export default Adds;
