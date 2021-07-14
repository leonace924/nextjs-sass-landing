import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/sections/Home/Hero/Hero';
import Introduction from '@/sections/Home/Introduction/Introduction';
import content from '@/src/utils/textContent';

const Home = () => {
  const { hero, introduction } = content;

  return (
    <Layout>
      <Hero content={hero} />
      <Introduction content={introduction} />
      <div></div>
    </Layout>
  );
};

export default Home;
