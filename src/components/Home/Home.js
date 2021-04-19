import React from 'react';
import Intro from '../Intro/Intro';
import TourIntro from '../TourIntro/TourIntro';
import FeaturedTours from '../FeaturedTours/FeaturedTours';
import NearTours from '../NearTours/NearTours';

const Home = () => {
  return (
    <div>
      <Intro />
      <TourIntro />
      <FeaturedTours />
      <NearTours />
    </div>
  );
};

export default Home;
