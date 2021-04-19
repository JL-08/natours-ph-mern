import React from 'react';
import './TourBanner.scss';

const TourBanner = () => {
  return (
    <div className='tour-banner'>
      <div className='banner-img'></div>
      <div className='banner-text'>
        <h1>
          <span>BAGUIO RAILING FOREST</span>
        </h1>
        <div className='banner-tour-info'>
          <i class='fas fa-clock'>
            <span> 7 days</span>
          </i>
          <i class='fas fa-map-marker-alt'>
            <span> Baguio, PH</span>
          </i>
        </div>
      </div>
    </div>
  );
};

export default TourBanner;
