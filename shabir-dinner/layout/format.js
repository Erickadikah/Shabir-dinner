import React from 'react';
import Header from '../components/header';
// import Footer from '../components/footer';
import Footer from '../components/footer/index';
import Head from 'next/head';

const format = ({ children }) => {
  return (
    <div>
      <Head>
      <title>Shabir Dinner</title>
      </Head>
      <Header />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}

export default format;
