import PropTypes from 'prop-types';
import Head from 'next/head';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Layout;
