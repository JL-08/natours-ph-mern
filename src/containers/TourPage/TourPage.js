import React from 'react';
import TourBanner from '../../components/TourBanner/TourBanner';
import TourGallery from '../../components/TourGallery/TourGallery';
import TourInfo from '../../components/TourInfo/TourInfo';
import TourReview from '../../components/TourReview/TourReview';
import TourBooking from '../../components/TourBooking/TourBooking';

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
