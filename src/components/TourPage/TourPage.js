import React from 'react';
import TourBanner from '../TourBanner/TourBanner';
import TourGallery from '../TourGallery/TourGallery';
import TourInfo from '../TourInfo/TourInfo';
import TourReview from '../TourReview/TourReview';
import TourBooking from '../TourBooking/TourBooking';

const TourPage = () => {
  return (
    <>
      <TourBanner />
      <TourInfo />
      <TourGallery />
      <TourReview />
      <TourBooking />
    </>
  );
};

export default TourPage;
