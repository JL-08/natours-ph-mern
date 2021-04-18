import React from 'react';
import Tour from '../TourCard/TourCard';
import './NearTours.scss';

const NearTours = () => {
  return (
    <div className='near-tours'>
      <h1>AVAILABLE TOURS NEAR ME</h1>
      <div className='tours-container'>
        <Tour />
      </div>
    </div>
  );
};

export default NearTours;
