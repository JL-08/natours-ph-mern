import React from 'react';
import './TourBanner.scss';

const TourBanner = ({ tour }) => {
  return (
    <header className='tour-banner'>
      <figure className='banner-img'></figure>
      <section className='banner-text'>
        <h1>
          <span>{tour.name}</span>
        </h1>
        <div className='banner-tour-info'>
          <i className='fas fa-clock'>
            <span> {tour.duration} days</span>
          </i>
          <i className='fas fa-map-marker-alt'>
            <span> {tour.mainLocation.name}</span>
          </i>
        </div>
      </section>
    </header>
  );
};

export default TourBanner;
