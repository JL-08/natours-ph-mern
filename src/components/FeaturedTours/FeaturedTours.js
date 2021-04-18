import React from 'react';
import Tour from './Tour/Tour';
import './FeaturedTours.scss';

const FeaturedTours = () => {
  return (
    <div className='featured-tours'>
      <h2>FEATURED TOURS</h2>
      <div className='tours-container'>
        <Tour />
        <Tour />
        <Tour />
      </div>
    </div>
  );
};

export default FeaturedTours;
