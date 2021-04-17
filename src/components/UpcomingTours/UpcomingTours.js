import React from 'react';
import Tour from './Tour/Tour';
import './UpcomingTours.scss';

const UpcomingTours = () => {
  return (
    <div className='upcoming-tours'>
      <h2>UPCOMING TOURS</h2>
      <div className='tour-container'>
        <Tour />
        <Tour />
      </div>
    </div>
  );
};

export default UpcomingTours;
