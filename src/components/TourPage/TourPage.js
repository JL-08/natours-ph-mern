import React from 'react';
import TourBanner from '../TourBanner/TourBanner';
import TourGallery from '../TourGallery/TourGallery';
import TourInfo from '../TourInfo/TourInfo';
import TourReview from '../TourReview/TourReview';

const TourPage = () => {
  return (
    <div className='tour-page'>
      <TourBanner />
      <TourInfo />
      <TourGallery />
      <TourReview />
    </div>
  );
};

export default TourPage;
