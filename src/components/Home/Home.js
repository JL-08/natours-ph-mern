import React from 'react';
import Banner from '../Banner/Banner';
import Intro from '../Intro/Intro';
import TourIntro from '../TourIntro/TourIntro';
import FeaturedTours from '../FeaturedTours/FeaturedTours';
import NearTours from '../NearTours/NearTours';

const Home = () => {
  return (
    <>
      <Banner />
      <Intro />
      <TourIntro />
      <FeaturedTours />
      <NearTours />
    </>
  );
};

export default Home;
