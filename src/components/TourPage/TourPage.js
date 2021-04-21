import React from 'react';
import TourBanner from '../TourBanner/TourBanner';
import TourGallery from '../TourGallery/TourGallery';
import TourInfo from '../TourInfo/TourInfo';

const TourPage = () => {
  return (
    <div className='tour-page'>
      <TourBanner />
      <TourInfo />
      <TourGallery />
    </div>
  );
};

export default TourPage;
