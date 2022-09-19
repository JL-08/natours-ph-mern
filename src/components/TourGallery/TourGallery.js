import React from 'react';
import TourImg from './TourImg/TourImg';
import TourMap from './TourMap/TourMap';
import './TourGallery.scss';

const TourGallery = ({ tour }) => {
  return (
    <section>
      <TourImg />
      <TourMap locations={tour.locations} />
    </section>
  );
};

export default TourGallery;
