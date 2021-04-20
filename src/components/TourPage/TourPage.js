import React from 'react';
import TourBanner from '../TourBanner/TourBanner';
import TourInfo from '../TourInfo/TourInfo';

const TourPage = () => {
  return (
    <div className='tour-page'>
      <TourBanner />
      <TourInfo />
    </div>
  );
};

export default TourPage;
