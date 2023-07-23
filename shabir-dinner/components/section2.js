import React from "react";

const section2 = () => {
  return (
    <section
      style={{ width: "100vw", height: "90vh", background: "#E9F8F5" }}
      className="mb-20"
    >
      <h1 className="text-center mt-10 font-extrabold text-3xl"> Our Top Categories</h1>
      <div className="flex flex-wrap justify-center gap-4 mt-20 p-20">
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
