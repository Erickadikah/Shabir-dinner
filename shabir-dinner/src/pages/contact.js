import React, { useEffect } from 'react';
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='justify-center items-center w-screen h-screen' style={{ backgroundColor: 'rgb(233,248,245)'}}>
  <h1 className='text-center font-extrabold text-3xl text-black mt-10'>
    Our Customers are Our Top Priority
    <br></br>
    <p className='text-lg'>
        We are here to serve you !
    </p>
  </h1>
    <motion.div
  initial={{ y: -10, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8, delay: 0.10 }}
  className="flex justify-center items-center lg:mt-10"
>
  <div className="w-full max-w-md p-4 bg-white shadow-lg">
    <h2 className="text-2xl justify-center align-center text-center  font-semibold mb-4">Contact Us</h2>
    <form className='h-200 w-400'>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter your name"
          className="w-full h-10 px-4 py-2 border rounded-lg border-gray-300 focus:ring focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          className="w-full h-10 px-4 py-2 border rounded-lg border-gray-300 focus:ring focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          placeholder="Enter your phone number"
          className="w-full h-10 px-4 py-2 border rounded-lg border-gray-300 focus:ring focus:ring-yellow-500"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-sm font-medium text-gray-700">
          Address
        </label>
        <textarea
          id="address"
          placeholder="Enter your address"
          rows="4"
          className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:ring focus:ring-yellow-500"
        ></textarea>
      </div>
      <button className="w-full h-10 bg-[rgb(1,160,131)] text-white font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
        Submit
      </button>
    </form>
  </div>
</motion.div>
</div>
  );
}

export default Contact;
