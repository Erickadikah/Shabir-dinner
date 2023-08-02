import React from 'react';

const section4 = () => {
  return (
    <div className='justify-center items-center w-screen h-screen' style={{ backgroundColor: '#014451', justifyContent: 'center', alignItems: 'center'}}>
  <h1 className='text-center font-extrabold text-3xl text-white mt-10'>
    Our Customers are Our Top Priority
    <br></br>
    <p className='text-sm'>
        We are here to serve you with the best food and service possible
        sent to your doorstep
        and we are always happy to hear from you
    </p>
  </h1>
  <div className='flex justify-center items-center mt-40'>
  <div className='w-100 h-220 border bg-white flex flex-wrap items-center justify-center p-4 rounded-lg'>
    <input
      type='text'
      placeholder='Enter your name'
      className='w-full h-10 border rounded-lg border-gray-300 mb-2 p-2'
    />
    <input
      type='text'
      placeholder='Enter your email'
      className='w-full h-10 border rounded-lg border-gray-300 mb-2 p-2'
    />
    <input
        type='text'
        placeholder='Enter your phone number'
        className='w-full h-10 rounded-lg border border-gray-300 mb-2 p-2'
        />
    <p className='flex-start'>Your address</p>
    <input
        type='text'
        placeholder=''
        className='w-full h-40 rounded-lg border border-gray-300 mb-2 p-2'
        />
    <button className='w-40 h-10 bg-yellow-500 text-white font-bold rounded-full'>
      Submit
    </button>
  </div>
  </div>
</div>
  );
}

export default section4;
