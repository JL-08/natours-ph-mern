import React from 'react';
import Banner from '../../components/Banner/Banner';
import Intro from '../../components/Intro/Intro';
import TourIntro from '../../components/TourIntro/TourIntro';
import FeaturedTours from '../../components/FeaturedTours/FeaturedTours';
import NearTours from '../../components/NearTours/NearTours';

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
