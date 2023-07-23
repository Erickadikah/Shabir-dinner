import React from 'react';
import Link from 'next/link';
import { ImFacebook, ImInstagram, ImTwitter } from 'react-icons/im';
// import Button from ''

const header = () => {
  return (
    <header className='bg-yellow-500 h-28 sticky top-0 z-50'>
  <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
    <div className='md:flex-none w-96 order-2 sm:order-1 justify-center py-4 sm:py-0'>
      <input type='text' className='input-text' placeholder='Search..' />
    </div>
    <div className='shrink w-80 sm:order-2'>
      <a className='font-bold font-weight-900 text-2xl text-green-900'> Shabir Dinner</a>
    </div>
    <div className='w-96 order-3 flex justify-center'>
      <div className="flex gap-6 sm:mb-10">
        <Link href='/'>
          <ImFacebook color="#888888"/>
        </Link>
        <Link href='/'>
          <ImInstagram color="#888888"/>
        </Link>
        <Link href='/'>
          <ImTwitter color="#888888"/>
        </Link>
      </div>
    </div>
  </div>
</header>
  );
}

export default header;
