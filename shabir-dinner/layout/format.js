import React from 'react';
import Navigation from '../components/header';
import Navbar from '../components/nav';
// import Footer from '../components/footer';
import Footer from '../components/footer/FooterLinks';
import Head from 'next/head';

const format = ({ children }) => {
  return (
    <div>
      <Head>
      <title>Shabir Dinner</title>
      </Head>
      <Navigation />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}

export default format;
