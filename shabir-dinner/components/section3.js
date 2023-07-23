import React from "react";
import Image from "next/image";

const section3 = () => {
  return (
    <section
      style={{ width: "100vw", height: "100vh", background: "#FFFFFF" }}
      className=""
    >
      <h1 className="text-center mt-10 text-3xl font-extrabold">
        What we offer
      </h1>
      <div className="flex flex-wrap sm:flex-row p-2 gap-4 justify-center">
        <card className=" pop-out-image h-42 w-42 p-4  rounded-sm">
          <Image
            src="/images/image3.jpg"
            className="rounded-sm
        "
            width={300}
            height={200}
          />
          <p className="text-center">Samosa</p>
        </card>
        <card className=" pop-out-image lg:h-42 lg:h-42 p-4 rounded-sm">
          <Image
            src="/images/grill1.jpg"
            className="rounded-sm lg:h-42 lg:w-42 sm:h-21 sm:w-21" // Reducing width and height on small screens
            width={300}
            height={200}
          />
          <p className="text-center">Grills</p>
        </card>
         {/*<card className=" pop-out-image lg:h-42 lg:h-42 p-4 rounded-sm">
          <Image
            src="/images/grill1.jpg"
            className="rounded-sm lg:h-42 lg:w-42 sm:h-21 sm:w-21" // Reducing width and height on small screens
            width={300}
            height={200}
          />
          <p className="text-center">Grills
          </p>
  </card>*/}
      </div>
    </section>
  );
};

export default section3;
