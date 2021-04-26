import React from 'react';
import TourImg from './TourImg/TourImg';
import TourMap from './TourMap/TourMap';
import './TourGallery.scss';

const TourGallery = () => {
  return (
    <section>
      <TourImg />
      <TourMap />
    </section>
  );
};

export default TourGallery;
