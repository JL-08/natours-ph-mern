import React from 'react';
import Tour from '../TourCard/TourCard';
import './NearTours.scss';

const NearTours = () => {
  return (
    <article className='near-tours'>
      <h1>AVAILABLE TOURS NEAR ME</h1>
      <section className='tours-container'>
        <Tour />
        <Tour />
      </section>
    </article>
  );
};

export default NearTours;
