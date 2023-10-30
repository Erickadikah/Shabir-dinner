import Navigation from '../components/header';
import Navbar from '../components/nav';
import Footer from '../components/footer/FooterLinks';
import Head from 'next/head';

const format = ({ children }) => {
  return (
    <div>
      <Head>
    <link rel="icon" href="images/favicon.ico" />
        <title>Shabir Dinner</title>
      </Head>
      <Navigation />
      <main>{ children }</main>
      <Footer />
    </div>
  );
}

export default format;