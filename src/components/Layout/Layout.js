import React from 'react';
import Head from 'next/head';
import Header from '@/components/Header/Header';
// import Footer from '../Footer/Footer';
import styles from './Layout.module.scss';

const Layout = ({ children, title = 'Happily Demo' }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="Description" content="Happily demo website." />
        <meta property="og:site_name" content="Happily demo website." key="ogsitename" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Header />

      <main className={styles.main}>{children}</main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
