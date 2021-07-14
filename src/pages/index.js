import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/sections/Home/Hero/Hero';
import content from '@/src/utils/textContent';

const Home = () => {
  const { hero } = content;

  return (
    <Layout>
      <Hero content={hero} />
      <div></div>
    </Layout>
  );
};

export default Home;
