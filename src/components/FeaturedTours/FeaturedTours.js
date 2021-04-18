import React from 'react';
import Tour from './Tour/Tour';
import './FeaturedTours.scss';

const FeaturedTours = () => {
  return (
    <div className='featured-tours'>
      <h1>FEATURED TOURS</h1>
      <div className='tours-container'>
        <Tour />
        <Tour />
        <Tour />
      </div>
    </div>
  );
};

export default FeaturedTours;
