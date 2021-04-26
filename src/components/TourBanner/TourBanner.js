import React from 'react';
import './TourBanner.scss';

const TourBanner = () => {
  return (
    <header className='tour-banner'>
      <figure className='banner-img'></figure>
      <section className='banner-text'>
        <h1>
          <span>BAGUIO RAILING FOREST</span>
        </h1>
        <div className='banner-tour-info'>
          <i className='fas fa-clock'>
            <span> 7 days</span>
          </i>
          <i className='fas fa-map-marker-alt'>
            <span> Baguio, PH</span>
          </i>
        </div>
      </section>
    </header>
  );
};

export default TourBanner;
