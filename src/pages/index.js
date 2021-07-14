import React from 'react';
import Layout from '@/components/Layout/Layout';
import Hero from '@/sections/Home/Hero/Hero';
import Introduction from '@/sections/Home/Introduction/Introduction';
import Experiences from '@/sections/Home/Experiences/Experiences';
import Events from '@/sections/Home/Events/Events';
import TalkMember from '@/sections/Home/TalkMember/TalkMember';
import content from '@/src/utils/textContent';

const Home = () => {
  const { hero, introduction, experiences, events, talkMember } = content;

  return (
    <Layout>
      <Hero content={hero} />
      <Introduction content={introduction} />
      <Experiences content={experiences} />
      <Events content={events} />
      <TalkMember content={talkMember} />
    </Layout>
  );
};

export default Home;
